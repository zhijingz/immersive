(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();var od={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function PM(){if(Q_)return ul;Q_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:r,type:a,key:u,ref:s!==void 0?s:null,props:l}}return ul.Fragment=e,ul.jsx=t,ul.jsxs=t,ul}var J_;function IM(){return J_||(J_=1,od.exports=PM()),od.exports}var Cn=IM(),ld={exports:{}},mt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function BM(){if($_)return mt;$_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function S(N,K,Z){this.props=N,this.context=K,this.refs=T,this.updater=Z||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=S.prototype;function b(N,K,Z){this.props=N,this.context=K,this.refs=T,this.updater=Z||x}var w=b.prototype=new y;w.constructor=b,M(w,S.prototype),w.isPureReactComponent=!0;var A=Array.isArray,P={H:null,A:null,T:null,S:null,V:null},I=Object.prototype.hasOwnProperty;function B(N,K,Z,de,X,le){return Z=le.ref,{$$typeof:r,type:N,key:K,ref:Z!==void 0?Z:null,props:le}}function H(N,K){return B(N.type,K,void 0,void 0,void 0,N.props)}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function R(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Z){return K[Z]})}var V=/\/+/g;function $(N,K){return typeof N=="object"&&N!==null&&N.key!=null?R(""+N.key):K.toString(36)}function ie(){}function he(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(ie,ie):(N.status="pending",N.then(function(K){N.status==="pending"&&(N.status="fulfilled",N.value=K)},function(K){N.status==="pending"&&(N.status="rejected",N.reason=K)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function te(N,K,Z,de,X){var le=typeof N;(le==="undefined"||le==="boolean")&&(N=null);var pe=!1;if(N===null)pe=!0;else switch(le){case"bigint":case"string":case"number":pe=!0;break;case"object":switch(N.$$typeof){case r:case e:pe=!0;break;case m:return pe=N._init,te(pe(N._payload),K,Z,de,X)}}if(pe)return X=X(N),pe=de===""?"."+$(N,0):de,A(X)?(Z="",pe!=null&&(Z=pe.replace(V,"$&/")+"/"),te(X,K,Z,"",function(Ne){return Ne})):X!=null&&(C(X)&&(X=H(X,Z+(X.key==null||N&&N.key===X.key?"":(""+X.key).replace(V,"$&/")+"/")+pe)),K.push(X)),1;pe=0;var xe=de===""?".":de+":";if(A(N))for(var _e=0;_e<N.length;_e++)de=N[_e],le=xe+$(de,_e),pe+=te(de,K,Z,le,X);else if(_e=v(N),typeof _e=="function")for(N=_e.call(N),_e=0;!(de=N.next()).done;)de=de.value,le=xe+$(de,_e++),pe+=te(de,K,Z,le,X);else if(le==="object"){if(typeof N.then=="function")return te(he(N),K,Z,de,X);throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return pe}function O(N,K,Z){if(N==null)return N;var de=[],X=0;return te(N,de,"","",function(le){return K.call(Z,le,X++)}),de}function F(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(Z){(N._status===0||N._status===-1)&&(N._status=1,N._result=Z)},function(Z){(N._status===0||N._status===-1)&&(N._status=2,N._result=Z)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var k=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function fe(){}return mt.Children={map:O,forEach:function(N,K,Z){O(N,function(){K.apply(this,arguments)},Z)},count:function(N){var K=0;return O(N,function(){K++}),K},toArray:function(N){return O(N,function(K){return K})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},mt.Component=S,mt.Fragment=t,mt.Profiler=s,mt.PureComponent=b,mt.StrictMode=a,mt.Suspense=d,mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,mt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return P.H.useMemoCache(N)}},mt.cache=function(N){return function(){return N.apply(null,arguments)}},mt.cloneElement=function(N,K,Z){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var de=M({},N.props),X=N.key,le=void 0;if(K!=null)for(pe in K.ref!==void 0&&(le=void 0),K.key!==void 0&&(X=""+K.key),K)!I.call(K,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&K.ref===void 0||(de[pe]=K[pe]);var pe=arguments.length-2;if(pe===1)de.children=Z;else if(1<pe){for(var xe=Array(pe),_e=0;_e<pe;_e++)xe[_e]=arguments[_e+2];de.children=xe}return B(N.type,X,void 0,void 0,le,de)},mt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},mt.createElement=function(N,K,Z){var de,X={},le=null;if(K!=null)for(de in K.key!==void 0&&(le=""+K.key),K)I.call(K,de)&&de!=="key"&&de!=="__self"&&de!=="__source"&&(X[de]=K[de]);var pe=arguments.length-2;if(pe===1)X.children=Z;else if(1<pe){for(var xe=Array(pe),_e=0;_e<pe;_e++)xe[_e]=arguments[_e+2];X.children=xe}if(N&&N.defaultProps)for(de in pe=N.defaultProps,pe)X[de]===void 0&&(X[de]=pe[de]);return B(N,le,void 0,void 0,null,X)},mt.createRef=function(){return{current:null}},mt.forwardRef=function(N){return{$$typeof:f,render:N}},mt.isValidElement=C,mt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:F}},mt.memo=function(N,K){return{$$typeof:h,type:N,compare:K===void 0?null:K}},mt.startTransition=function(N){var K=P.T,Z={};P.T=Z;try{var de=N(),X=P.S;X!==null&&X(Z,de),typeof de=="object"&&de!==null&&typeof de.then=="function"&&de.then(fe,k)}catch(le){k(le)}finally{P.T=K}},mt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},mt.use=function(N){return P.H.use(N)},mt.useActionState=function(N,K,Z){return P.H.useActionState(N,K,Z)},mt.useCallback=function(N,K){return P.H.useCallback(N,K)},mt.useContext=function(N){return P.H.useContext(N)},mt.useDebugValue=function(){},mt.useDeferredValue=function(N,K){return P.H.useDeferredValue(N,K)},mt.useEffect=function(N,K,Z){var de=P.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return de.useEffect(N,K)},mt.useId=function(){return P.H.useId()},mt.useImperativeHandle=function(N,K,Z){return P.H.useImperativeHandle(N,K,Z)},mt.useInsertionEffect=function(N,K){return P.H.useInsertionEffect(N,K)},mt.useLayoutEffect=function(N,K){return P.H.useLayoutEffect(N,K)},mt.useMemo=function(N,K){return P.H.useMemo(N,K)},mt.useOptimistic=function(N,K){return P.H.useOptimistic(N,K)},mt.useReducer=function(N,K,Z){return P.H.useReducer(N,K,Z)},mt.useRef=function(N){return P.H.useRef(N)},mt.useState=function(N){return P.H.useState(N)},mt.useSyncExternalStore=function(N,K,Z){return P.H.useSyncExternalStore(N,K,Z)},mt.useTransition=function(){return P.H.useTransition()},mt.version="19.1.1",mt}var ev;function jp(){return ev||(ev=1,ld.exports=BM()),ld.exports}var me=jp(),cd={exports:{}},fl={},ud={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function zM(){return tv||(tv=1,(function(r){function e(O,F){var k=O.length;O.push(F);e:for(;0<k;){var fe=k-1>>>1,N=O[fe];if(0<s(N,F))O[fe]=F,O[k]=N,k=fe;else break e}}function t(O){return O.length===0?null:O[0]}function a(O){if(O.length===0)return null;var F=O[0],k=O.pop();if(k!==F){O[0]=k;e:for(var fe=0,N=O.length,K=N>>>1;fe<K;){var Z=2*(fe+1)-1,de=O[Z],X=Z+1,le=O[X];if(0>s(de,k))X<N&&0>s(le,de)?(O[fe]=le,O[X]=k,fe=X):(O[fe]=de,O[Z]=k,fe=Z);else if(X<N&&0>s(le,k))O[fe]=le,O[X]=k,fe=X;else break e}}return F}function s(O,F){var k=O.sortIndex-F.sortIndex;return k!==0?k:O.id-F.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,_=null,v=3,x=!1,M=!1,T=!1,S=!1,y=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function A(O){for(var F=t(h);F!==null;){if(F.callback===null)a(h);else if(F.startTime<=O)a(h),F.sortIndex=F.expirationTime,e(d,F);else break;F=t(h)}}function P(O){if(T=!1,A(O),!M)if(t(d)!==null)M=!0,I||(I=!0,$());else{var F=t(h);F!==null&&te(P,F.startTime-O)}}var I=!1,B=-1,H=5,C=-1;function R(){return S?!0:!(r.unstable_now()-C<H)}function V(){if(S=!1,I){var O=r.unstable_now();C=O;var F=!0;try{e:{M=!1,T&&(T=!1,b(B),B=-1),x=!0;var k=v;try{t:{for(A(O),_=t(d);_!==null&&!(_.expirationTime>O&&R());){var fe=_.callback;if(typeof fe=="function"){_.callback=null,v=_.priorityLevel;var N=fe(_.expirationTime<=O);if(O=r.unstable_now(),typeof N=="function"){_.callback=N,A(O),F=!0;break t}_===t(d)&&a(d),A(O)}else a(d);_=t(d)}if(_!==null)F=!0;else{var K=t(h);K!==null&&te(P,K.startTime-O),F=!1}}break e}finally{_=null,v=k,x=!1}F=void 0}}finally{F?$():I=!1}}}var $;if(typeof w=="function")$=function(){w(V)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,he=ie.port2;ie.port1.onmessage=V,$=function(){he.postMessage(null)}}else $=function(){y(V,0)};function te(O,F){B=y(function(){O(r.unstable_now())},F)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(O){O.callback=null},r.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<O?Math.floor(1e3/O):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(O){switch(v){case 1:case 2:case 3:var F=3;break;default:F=v}var k=v;v=F;try{return O()}finally{v=k}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var k=v;v=O;try{return F()}finally{v=k}},r.unstable_scheduleCallback=function(O,F,k){var fe=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?fe+k:fe):k=fe,O){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=k+N,O={id:m++,callback:F,priorityLevel:O,startTime:k,expirationTime:N,sortIndex:-1},k>fe?(O.sortIndex=k,e(h,O),t(d)===null&&O===t(h)&&(T?(b(B),B=-1):T=!0,te(P,k-fe))):(O.sortIndex=N,e(d,O),M||x||(M=!0,I||(I=!0,$()))),O},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(O){var F=v;return function(){var k=v;v=F;try{return O.apply(this,arguments)}finally{v=k}}}})(fd)),fd}var nv;function FM(){return nv||(nv=1,ud.exports=zM()),ud.exports}var hd={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function HM(){if(iv)return Fn;iv=1;var r=jp();function e(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(d,h,m){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:_==null?null:""+_,children:d,containerInfo:h,implementation:m}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Fn.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return l(d,h,null,m)},Fn.flushSync=function(d){var h=u.T,m=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=h,a.p=m,a.d.f()}},Fn.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(d,h))},Fn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Fn.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?a.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:x}):m==="script"&&a.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Fn.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);a.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(d)},Fn.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,_=f(m,h.crossOrigin);a.d.L(d,m,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Fn.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);a.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(d)},Fn.requestFormReset=function(d){a.d.r(d)},Fn.unstable_batchedUpdates=function(d,h){return d(h)},Fn.useFormState=function(d,h,m){return u.H.useFormState(d,h,m)},Fn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Fn.version="19.1.1",Fn}var av;function VM(){if(av)return hd.exports;av=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),hd.exports=HM(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function GM(){if(sv)return fl;sv=1;var r=FM(),e=jp(),t=VM();function a(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function u(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function f(n){if(l(n)!==n)throw Error(a(188))}function d(n){var i=n.alternate;if(!i){if(i=l(n),i===null)throw Error(a(188));return i!==n?null:n}for(var o=n,c=i;;){var p=o.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){o=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===o)return f(p),n;if(g===c)return f(p),i;g=g.sibling}throw Error(a(188))}if(o.return!==c.return)o=p,c=g;else{for(var E=!1,L=p.child;L;){if(L===o){E=!0,o=p,c=g;break}if(L===c){E=!0,c=p,o=g;break}L=L.sibling}if(!E){for(L=g.child;L;){if(L===o){E=!0,o=g,c=p;break}if(L===c){E=!0,c=g,o=p;break}L=L.sibling}if(!E)throw Error(a(189))}}if(o.alternate!==c)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?n:i}function h(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=h(n),i!==null)return i;n=n.sibling}return null}var m=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),b=Symbol.for("react.consumer"),w=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Symbol.for("react.client.reference");function he(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ie?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case P:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case x:return"Portal";case w:return(n.displayName||"Context")+".Provider";case b:return(n._context.displayName||"Context")+".Consumer";case A:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case B:return i=n.displayName||null,i!==null?i:he(n.type)||"Memo";case H:i=n._payload,n=n._init;try{return he(n(i))}catch{}}return null}var te=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},fe=[],N=-1;function K(n){return{current:n}}function Z(n){0>N||(n.current=fe[N],fe[N]=null,N--)}function de(n,i){N++,fe[N]=n.current,n.current=i}var X=K(null),le=K(null),pe=K(null),xe=K(null);function _e(n,i){switch(de(pe,i),de(le,n),de(X,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?b_(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=b_(i),n=A_(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Z(X),de(X,n)}function Ne(){Z(X),Z(le),Z(pe)}function Ce(n){n.memoizedState!==null&&de(xe,n);var i=X.current,o=A_(i,n.type);i!==o&&(de(le,n),de(X,o))}function Xe(n){le.current===n&&(Z(X),Z(le)),xe.current===n&&(Z(xe),sl._currentValue=k)}var at=Object.prototype.hasOwnProperty,nt=r.unstable_scheduleCallback,W=r.unstable_cancelCallback,Ot=r.unstable_shouldYield,pt=r.unstable_requestPaint,ft=r.unstable_now,Ve=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,Qe=r.unstable_UserBlockingPriority,ot=r.unstable_NormalPriority,sn=r.unstable_LowPriority,z=r.unstable_IdlePriority,D=r.log,se=r.unstable_setDisableYieldValue,ye=null,Me=null;function ge(n){if(typeof D=="function"&&se(n),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(ye,n)}catch{}}var Be=Math.clz32?Math.clz32:Ye,Ue=Math.log,We=Math.LN2;function Ye(n){return n>>>=0,n===0?32:31-(Ue(n)/We|0)|0}var be=256,ze=4194304;function Ze(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Je(n,i,o){var c=n.pendingLanes;if(c===0)return 0;var p=0,g=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var L=c&134217727;return L!==0?(c=L&~g,c!==0?p=Ze(c):(E&=L,E!==0?p=Ze(E):o||(o=L&~n,o!==0&&(p=Ze(o))))):(L=c&~g,L!==0?p=Ze(L):E!==0?p=Ze(E):o||(o=c&~n,o!==0&&(p=Ze(o)))),p===0?0:i!==0&&i!==p&&(i&g)===0&&(g=p&-p,o=i&-i,g>=o||g===32&&(o&4194048)!==0)?i:p}function De(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function ut(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j(){var n=be;return be<<=1,(be&4194048)===0&&(be=256),n}function Oe(){var n=ze;return ze<<=1,(ze&62914560)===0&&(ze=4194304),n}function Ae(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Fe(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Re(n,i,o,c,p,g){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var L=n.entanglements,G=n.expirationTimes,ae=n.hiddenUpdates;for(o=E&~o;0<o;){var ve=31-Be(o),Ee=1<<ve;L[ve]=0,G[ve]=-1;var re=ae[ve];if(re!==null)for(ae[ve]=null,ve=0;ve<re.length;ve++){var oe=re[ve];oe!==null&&(oe.lane&=-536870913)}o&=~Ee}c!==0&&Te(n,c,0),g!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=g&~(E&~i))}function Te(n,i,o){n.pendingLanes|=i,n.suspendedLanes&=~i;var c=31-Be(i);n.entangledLanes|=i,n.entanglements[c]=n.entanglements[c]|1073741824|o&4194090}function Ge(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Be(o),p=1<<c;p&i|n[c]&i&&(n[c]|=i),o&=~p}}function ct(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function zt(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Dt(){var n=F.p;return n!==0?n:(n=window.event,n===void 0?32:X_(n.type))}function ti(n,i){var o=F.p;try{return F.p=n,i()}finally{F.p=o}}var Mn=Math.random().toString(36).slice(2),dn="__reactFiber$"+Mn,Un="__reactProps$"+Mn,Kn="__reactContainer$"+Mn,ys="__reactEvents$"+Mn,kl="__reactListeners$"+Mn,Wl="__reactHandles$"+Mn,xs="__reactResources$"+Mn,Oa="__reactMarker$"+Mn;function Pa(n){delete n[dn],delete n[Un],delete n[ys],delete n[kl],delete n[Wl]}function Ji(n){var i=n[dn];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Kn]||o[dn]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=D_(n);n!==null;){if(o=n[dn])return o;n=D_(n)}return i}n=o,o=n.parentNode}return null}function $i(n){if(n=n[dn]||n[Kn]){var i=n.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return n}return null}function Ss(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(a(33))}function Ia(n){var i=n[xs];return i||(i=n[xs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ln(n){n[Oa]=!0}var Xl=new Set,ql={};function ea(n,i){U(n,i),U(n+"Capture",i)}function U(n,i){for(ql[n]=i,n=0;n<i.length;n++)Xl.add(i[n])}var J=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ce={},ue={};function ee(n){return at.call(ue,n)?!0:at.call(ce,n)?!1:J.test(n)?ue[n]=!0:(ce[n]=!0,!1)}function we(n,i,o){if(ee(i))if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+o)}}function Le(n,i,o){if(o===null)n.removeAttribute(i);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+o)}}function Ie(n,i,o,c){if(c===null)n.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(i,o,""+c)}}var He,rt;function tt(n){if(He===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);He=i&&i[1]||"",rt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+He+n+rt}var je=!1;function _t(n,i){if(!n||je)return"";je=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(oe){var re=oe}Reflect.construct(n,[],Ee)}else{try{Ee.call()}catch(oe){re=oe}n.call(Ee.prototype)}}else{try{throw Error()}catch(oe){re=oe}(Ee=n())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(oe){if(oe&&re&&typeof oe.stack=="string")return[oe.stack,re.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),E=g[0],L=g[1];if(E&&L){var G=E.split(`
`),ae=L.split(`
`);for(p=c=0;c<G.length&&!G[c].includes("DetermineComponentFrameRoot");)c++;for(;p<ae.length&&!ae[p].includes("DetermineComponentFrameRoot");)p++;if(c===G.length||p===ae.length)for(c=G.length-1,p=ae.length-1;1<=c&&0<=p&&G[c]!==ae[p];)p--;for(;1<=c&&0<=p;c--,p--)if(G[c]!==ae[p]){if(c!==1||p!==1)do if(c--,p--,0>p||G[c]!==ae[p]){var ve=`
`+G[c].replace(" at new "," at ");return n.displayName&&ve.includes("<anonymous>")&&(ve=ve.replace("<anonymous>",n.displayName)),ve}while(1<=c&&0<=p);break}}}finally{je=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?tt(o):""}function Pt(n){switch(n.tag){case 26:case 27:case 5:return tt(n.type);case 16:return tt("Lazy");case 13:return tt("Suspense");case 19:return tt("SuspenseList");case 0:case 15:return _t(n.type,!1);case 11:return _t(n.type.render,!1);case 1:return _t(n.type,!0);case 31:return tt("Activity");default:return""}}function Qt(n){try{var i="";do i+=Pt(n),n=n.return;while(n);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function xt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function It(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(n){var i=It(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Gt(n){n._valueTracker||(n._valueTracker=$e(n))}function At(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=It(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function En(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ba=/[\n"\\]/g;function Kt(n){return n.replace(Ba,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ta(n,i,o,c,p,g,E,L){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),i!=null?E==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+xt(i)):n.value!==""+xt(i)&&(n.value=""+xt(i)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),i!=null?Bn(n,E,xt(i)):o!=null?Bn(n,E,xt(o)):c!=null&&n.removeAttribute("value"),p==null&&g!=null&&(n.defaultChecked=!!g),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),L!=null&&typeof L!="function"&&typeof L!="symbol"&&typeof L!="boolean"?n.name=""+xt(L):n.removeAttribute("name")}function Yt(n,i,o,c,p,g,E,L){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),i!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||i!=null))return;o=o!=null?""+xt(o):"",i=i!=null?""+xt(i):o,L||i===n.value||(n.value=i),n.defaultValue=i}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=L?n.checked:!!c,n.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Bn(n,i,o){i==="number"&&En(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function pn(n,i,o,c){if(n=n.options,i){i={};for(var p=0;p<o.length;p++)i["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=i.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&c&&(n[o].defaultSelected=!0)}else{for(o=""+xt(o),i=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function Tn(n,i,o){if(i!=null&&(i=""+xt(i),i!==n.value&&(n.value=i),o==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=o!=null?""+xt(o):""}function Nn(n,i,o,c){if(i==null){if(c!=null){if(o!=null)throw Error(a(92));if(te(c)){if(1<c.length)throw Error(a(93));c=c[0]}o=c}o==null&&(o=""),i=o}o=xt(i),n.defaultValue=o,c=n.textContent,c===o&&c!==""&&c!==null&&(n.value=c)}function Fi(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var na=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bm(n,i,o){var c=i.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":c?n.setProperty(i,o):typeof o!="number"||o===0||na.has(i)?i==="float"?n.cssFloat=o:n[i]=(""+o).trim():n[i]=o+"px"}function Am(n,i,o){if(i!=null&&typeof i!="object")throw Error(a(62));if(n=n.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in i)c=i[p],i.hasOwnProperty(p)&&o[p]!==c&&bm(n,p,c)}else for(var g in i)i.hasOwnProperty(g)&&bm(n,g,i[g])}function rf(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ox=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yl(n){return Ox.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var of=null;function lf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var er=null,tr=null;function wm(n){var i=$i(n);if(i&&(n=i.stateNode)){var o=n[Un]||null;e:switch(n=i.stateNode,i.type){case"input":if(ta(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Kt(""+i)+'"][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var p=c[Un]||null;if(!p)throw Error(a(90));ta(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(i=0;i<o.length;i++)c=o[i],c.form===n.form&&At(c)}break e;case"textarea":Tn(n,o.value,o.defaultValue);break e;case"select":i=o.value,i!=null&&pn(n,!!o.multiple,i,!1)}}}var cf=!1;function Rm(n,i,o){if(cf)return n(i,o);cf=!0;try{var c=n(i);return c}finally{if(cf=!1,(er!==null||tr!==null)&&(Uc(),er&&(i=er,n=tr,tr=er=null,wm(i),n)))for(i=0;i<n.length;i++)wm(n[i])}}function vo(n,i){var o=n.stateNode;if(o===null)return null;var c=o[Un]||null;if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(a(231,i,typeof o));return o}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uf=!1;if(ia)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){uf=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{uf=!1}var za=null,ff=null,jl=null;function Cm(){if(jl)return jl;var n,i=ff,o=i.length,c,p="value"in za?za.value:za.textContent,g=p.length;for(n=0;n<o&&i[n]===p[n];n++);var E=o-n;for(c=1;c<=E&&i[o-c]===p[g-c];c++);return jl=p.slice(n,1<c?1-c:void 0)}function Kl(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Zl(){return!0}function Dm(){return!1}function Zn(n){function i(o,c,p,g,E){this._reactName=o,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(o=n[L],this[L]=o?o(g):g[L]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Zl:Dm,this.isPropagationStopped=Dm,this}return m(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),i}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ql=Zn(Ms),xo=m({},Ms,{view:0,detail:0}),Px=Zn(xo),hf,df,So,Jl=m({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==So&&(So&&n.type==="mousemove"?(hf=n.screenX-So.screenX,df=n.screenY-So.screenY):df=hf=0,So=n),hf)},movementY:function(n){return"movementY"in n?n.movementY:df}}),Lm=Zn(Jl),Ix=m({},Jl,{dataTransfer:0}),Bx=Zn(Ix),zx=m({},xo,{relatedTarget:0}),pf=Zn(zx),Fx=m({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=Zn(Fx),Vx=m({},Ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gx=Zn(Vx),kx=m({},Ms,{data:0}),Um=Zn(kx),Wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yx(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=qx[n])?!!i[n]:!1}function mf(){return Yx}var jx=m({},xo,{key:function(n){if(n.key){var i=Wx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Kl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Xx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mf,charCode:function(n){return n.type==="keypress"?Kl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Kl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Kx=Zn(jx),Zx=m({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=Zn(Zx),Qx=m({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mf}),Jx=Zn(Qx),$x=m({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),eS=Zn($x),tS=m({},Jl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),nS=Zn(tS),iS=m({},Ms,{newState:0,oldState:0}),aS=Zn(iS),sS=[9,13,27,32],gf=ia&&"CompositionEvent"in window,Mo=null;ia&&"documentMode"in document&&(Mo=document.documentMode);var rS=ia&&"TextEvent"in window&&!Mo,Om=ia&&(!gf||Mo&&8<Mo&&11>=Mo),Pm=" ",Im=!1;function Bm(n,i){switch(n){case"keyup":return sS.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var nr=!1;function oS(n,i){switch(n){case"compositionend":return zm(i);case"keypress":return i.which!==32?null:(Im=!0,Pm);case"textInput":return n=i.data,n===Pm&&Im?null:n;default:return null}}function lS(n,i){if(nr)return n==="compositionend"||!gf&&Bm(n,i)?(n=Cm(),jl=ff=za=null,nr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Om&&i.locale!=="ko"?null:i.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fm(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!cS[n.type]:i==="textarea"}function Hm(n,i,o,c){er?tr?tr.push(c):tr=[c]:er=c,i=zc(i,"onChange"),0<i.length&&(o=new Ql("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var Eo=null,To=null;function uS(n){x_(n,0)}function $l(n){var i=Ss(n);if(At(i))return n}function Vm(n,i){if(n==="change")return i}var Gm=!1;if(ia){var _f;if(ia){var vf="oninput"in document;if(!vf){var km=document.createElement("div");km.setAttribute("oninput","return;"),vf=typeof km.oninput=="function"}_f=vf}else _f=!1;Gm=_f&&(!document.documentMode||9<document.documentMode)}function Wm(){Eo&&(Eo.detachEvent("onpropertychange",Xm),To=Eo=null)}function Xm(n){if(n.propertyName==="value"&&$l(To)){var i=[];Hm(i,To,n,lf(n)),Rm(uS,i)}}function fS(n,i,o){n==="focusin"?(Wm(),Eo=i,To=o,Eo.attachEvent("onpropertychange",Xm)):n==="focusout"&&Wm()}function hS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $l(To)}function dS(n,i){if(n==="click")return $l(i)}function pS(n,i){if(n==="input"||n==="change")return $l(i)}function mS(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:mS;function bo(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var p=o[c];if(!at.call(i,p)||!ni(n[p],i[p]))return!1}return!0}function qm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ym(n,i){var o=qm(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=qm(o)}}function jm(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?jm(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Km(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=En(n.document);i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=En(n.document)}return i}function yf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var gS=ia&&"documentMode"in document&&11>=document.documentMode,ir=null,xf=null,Ao=null,Sf=!1;function Zm(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Sf||ir==null||ir!==En(c)||(c=ir,"selectionStart"in c&&yf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ao&&bo(Ao,c)||(Ao=c,c=zc(xf,"onSelect"),0<c.length&&(i=new Ql("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=ir)))}function Es(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ar={animationend:Es("Animation","AnimationEnd"),animationiteration:Es("Animation","AnimationIteration"),animationstart:Es("Animation","AnimationStart"),transitionrun:Es("Transition","TransitionRun"),transitionstart:Es("Transition","TransitionStart"),transitioncancel:Es("Transition","TransitionCancel"),transitionend:Es("Transition","TransitionEnd")},Mf={},Qm={};ia&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function Ts(n){if(Mf[n])return Mf[n];if(!ar[n])return n;var i=ar[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Qm)return Mf[n]=i[o];return n}var Jm=Ts("animationend"),$m=Ts("animationiteration"),eg=Ts("animationstart"),_S=Ts("transitionrun"),vS=Ts("transitionstart"),yS=Ts("transitioncancel"),tg=Ts("transitionend"),ng=new Map,Ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ef.push("scrollEnd");function bi(n,i){ng.set(n,i),ea(i,[n])}var ig=new WeakMap;function di(n,i){if(typeof n=="object"&&n!==null){var o=ig.get(n);return o!==void 0?o:(i={value:n,source:i,stack:Qt(i)},ig.set(n,i),i)}return{value:n,source:i,stack:Qt(i)}}var pi=[],sr=0,Tf=0;function ec(){for(var n=sr,i=Tf=sr=0;i<n;){var o=pi[i];pi[i++]=null;var c=pi[i];pi[i++]=null;var p=pi[i];pi[i++]=null;var g=pi[i];if(pi[i++]=null,c!==null&&p!==null){var E=c.pending;E===null?p.next=p:(p.next=E.next,E.next=p),c.pending=p}g!==0&&ag(o,p,g)}}function tc(n,i,o,c){pi[sr++]=n,pi[sr++]=i,pi[sr++]=o,pi[sr++]=c,Tf|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function bf(n,i,o,c){return tc(n,i,o,c),nc(n)}function rr(n,i){return tc(n,null,null,i),nc(n)}function ag(n,i,o){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o);for(var p=!1,g=n.return;g!==null;)g.childLanes|=o,c=g.alternate,c!==null&&(c.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(p=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,p&&i!==null&&(p=31-Be(o),n=g.hiddenUpdates,c=n[p],c===null?n[p]=[i]:c.push(i),i.lane=o|536870912),g):null}function nc(n){if(50<Qo)throw Qo=0,Lh=null,Error(a(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var or={};function xS(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(n,i,o,c){return new xS(n,i,o,c)}function Af(n){return n=n.prototype,!(!n||!n.isReactComponent)}function aa(n,i){var o=n.alternate;return o===null?(o=ii(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function sg(n,i){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,i=o.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function ic(n,i,o,c,p,g){var E=0;if(c=n,typeof n=="function")Af(n)&&(E=1);else if(typeof n=="string")E=MM(n,o,X.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=ii(31,o,i,p),n.elementType=C,n.lanes=g,n;case M:return bs(o.children,p,g,i);case T:E=8,p|=24;break;case S:return n=ii(12,o,i,p|2),n.elementType=S,n.lanes=g,n;case P:return n=ii(13,o,i,p),n.elementType=P,n.lanes=g,n;case I:return n=ii(19,o,i,p),n.elementType=I,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case y:case w:E=10;break e;case b:E=9;break e;case A:E=11;break e;case B:E=14;break e;case H:E=16,c=null;break e}E=29,o=Error(a(130,n===null?"null":typeof n,"")),c=null}return i=ii(E,o,i,p),i.elementType=n,i.type=c,i.lanes=g,i}function bs(n,i,o,c){return n=ii(7,n,c,i),n.lanes=o,n}function wf(n,i,o){return n=ii(6,n,null,i),n.lanes=o,n}function Rf(n,i,o){return i=ii(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var lr=[],cr=0,ac=null,sc=0,mi=[],gi=0,As=null,sa=1,ra="";function ws(n,i){lr[cr++]=sc,lr[cr++]=ac,ac=n,sc=i}function rg(n,i,o){mi[gi++]=sa,mi[gi++]=ra,mi[gi++]=As,As=n;var c=sa;n=ra;var p=32-Be(c)-1;c&=~(1<<p),o+=1;var g=32-Be(i)+p;if(30<g){var E=p-p%5;g=(c&(1<<E)-1).toString(32),c>>=E,p-=E,sa=1<<32-Be(i)+p|o<<p|c,ra=g+n}else sa=1<<g|o<<p|c,ra=n}function Cf(n){n.return!==null&&(ws(n,1),rg(n,1,0))}function Df(n){for(;n===ac;)ac=lr[--cr],lr[cr]=null,sc=lr[--cr],lr[cr]=null;for(;n===As;)As=mi[--gi],mi[gi]=null,ra=mi[--gi],mi[gi]=null,sa=mi[--gi],mi[gi]=null}var Gn=null,tn=null,Nt=!1,Rs=null,Hi=!1,Lf=Error(a(519));function Cs(n){var i=Error(a(418,""));throw Co(di(i,n)),Lf}function og(n){var i=n.stateNode,o=n.type,c=n.memoizedProps;switch(i[dn]=n,i[Un]=c,o){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(o=0;o<$o.length;o++)Et($o[o],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Et("invalid",i),Yt(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),Gt(i);break;case"select":Et("invalid",i);break;case"textarea":Et("invalid",i),Nn(i,c.value,c.defaultValue,c.children),Gt(i)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||i.textContent===""+o||c.suppressHydrationWarning===!0||T_(i.textContent,o)?(c.popover!=null&&(Et("beforetoggle",i),Et("toggle",i)),c.onScroll!=null&&Et("scroll",i),c.onScrollEnd!=null&&Et("scrollend",i),c.onClick!=null&&(i.onclick=Fc),i=!0):i=!1,i||Cs(n)}function lg(n){for(Gn=n.return;Gn;)switch(Gn.tag){case 5:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Gn=Gn.return}}function wo(n){if(n!==Gn)return!1;if(!Nt)return lg(n),Nt=!0,!1;var i=n.tag,o;if((o=i!==3&&i!==27)&&((o=i===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Yh(n.type,n.memoizedProps)),o=!o),o&&tn&&Cs(n),lg(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(a(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(i===0){tn=wi(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++;n=n.nextSibling}tn=null}}else i===27?(i=tn,es(n.type)?(n=Qh,Qh=null,tn=n):tn=i):tn=Gn?wi(n.stateNode.nextSibling):null;return!0}function Ro(){tn=Gn=null,Nt=!1}function cg(){var n=Rs;return n!==null&&($n===null?$n=n:$n.push.apply($n,n),Rs=null),n}function Co(n){Rs===null?Rs=[n]:Rs.push(n)}var Uf=K(null),Ds=null,oa=null;function Fa(n,i,o){de(Uf,i._currentValue),i._currentValue=o}function la(n){n._currentValue=Uf.current,Z(Uf)}function Nf(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Of(n,i,o,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var g=p.dependencies;if(g!==null){var E=p.child;g=g.firstContext;e:for(;g!==null;){var L=g;g=p;for(var G=0;G<i.length;G++)if(L.context===i[G]){g.lanes|=o,L=g.alternate,L!==null&&(L.lanes|=o),Nf(g.return,o,n),c||(E=null);break e}g=L.next}}else if(p.tag===18){if(E=p.return,E===null)throw Error(a(341));E.lanes|=o,g=E.alternate,g!==null&&(g.lanes|=o),Nf(E,o,n),E=null}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===n){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}}function Do(n,i,o,c){n=null;for(var p=i,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var E=p.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var L=p.type;ni(p.pendingProps.value,E.value)||(n!==null?n.push(L):n=[L])}}else if(p===xe.current){if(E=p.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(sl):n=[sl])}p=p.return}n!==null&&Of(i,n,o,c),i.flags|=262144}function rc(n){for(n=n.firstContext;n!==null;){if(!ni(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ls(n){Ds=n,oa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function zn(n){return ug(Ds,n)}function oc(n,i){return Ds===null&&Ls(n),ug(n,i)}function ug(n,i){var o=i._currentValue;if(i={context:i,memoizedValue:o,next:null},oa===null){if(n===null)throw Error(a(308));oa=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else oa=oa.next=i;return o}var SS=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(o,c){n.push(c)}};this.abort=function(){i.aborted=!0,n.forEach(function(o){return o()})}},MS=r.unstable_scheduleCallback,ES=r.unstable_NormalPriority,mn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pf(){return{controller:new SS,data:new Map,refCount:0}}function Lo(n){n.refCount--,n.refCount===0&&MS(ES,function(){n.controller.abort()})}var Uo=null,If=0,ur=0,fr=null;function TS(n,i){if(Uo===null){var o=Uo=[];If=0,ur=zh(),fr={status:"pending",value:void 0,then:function(c){o.push(c)}}}return If++,i.then(fg,fg),i}function fg(){if(--If===0&&Uo!==null){fr!==null&&(fr.status="fulfilled");var n=Uo;Uo=null,ur=0,fr=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function bS(n,i){var o=[],c={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){c.status="fulfilled",c.value=i;for(var p=0;p<o.length;p++)(0,o[p])(i)},function(p){for(c.status="rejected",c.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),c}var hg=O.S;O.S=function(n,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&TS(n,i),hg!==null&&hg(n,i)};var Us=K(null);function Bf(){var n=Us.current;return n!==null?n:Zt.pooledCache}function lc(n,i){i===null?de(Us,Us.current):de(Us,i.pool)}function dg(){var n=Bf();return n===null?null:{parent:mn._currentValue,pool:n}}var No=Error(a(460)),pg=Error(a(474)),cc=Error(a(542)),zf={then:function(){}};function mg(n){return n=n.status,n==="fulfilled"||n==="rejected"}function uc(){}function gg(n,i,o){switch(o=n[o],o===void 0?n.push(i):o!==i&&(i.then(uc,uc),i=o),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,vg(n),n;default:if(typeof i.status=="string")i.then(uc,uc);else{if(n=Zt,n!==null&&100<n.shellSuspendCounter)throw Error(a(482));n=i,n.status="pending",n.then(function(c){if(i.status==="pending"){var p=i;p.status="fulfilled",p.value=c}},function(c){if(i.status==="pending"){var p=i;p.status="rejected",p.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,vg(n),n}throw Oo=i,No}}var Oo=null;function _g(){if(Oo===null)throw Error(a(459));var n=Oo;return Oo=null,n}function vg(n){if(n===No||n===cc)throw Error(a(483))}var Ha=!1;function Ff(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Va(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Ga(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ft&2)!==0){var p=c.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),c.pending=i,i=nc(n),ag(n,null,o),i}return tc(n,c,i,o),nc(n)}function Po(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194048)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Ge(n,o)}}function Vf(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var p=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?p=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?p=g=i:g=g.next=i}else p=g=i;o={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}var Gf=!1;function Io(){if(Gf){var n=fr;if(n!==null)throw n}}function Bo(n,i,o,c){Gf=!1;var p=n.updateQueue;Ha=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,L=p.shared.pending;if(L!==null){p.shared.pending=null;var G=L,ae=G.next;G.next=null,E===null?g=ae:E.next=ae,E=G;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,L=ve.lastBaseUpdate,L!==E&&(L===null?ve.firstBaseUpdate=ae:L.next=ae,ve.lastBaseUpdate=G))}if(g!==null){var Ee=p.baseState;E=0,ve=ae=G=null,L=g;do{var re=L.lane&-536870913,oe=re!==L.lane;if(oe?(wt&re)===re:(c&re)===re){re!==0&&re===ur&&(Gf=!0),ve!==null&&(ve=ve.next={lane:0,tag:L.tag,payload:L.payload,callback:null,next:null});e:{var lt=n,it=L;re=i;var Xt=o;switch(it.tag){case 1:if(lt=it.payload,typeof lt=="function"){Ee=lt.call(Xt,Ee,re);break e}Ee=lt;break e;case 3:lt.flags=lt.flags&-65537|128;case 0:if(lt=it.payload,re=typeof lt=="function"?lt.call(Xt,Ee,re):lt,re==null)break e;Ee=m({},Ee,re);break e;case 2:Ha=!0}}re=L.callback,re!==null&&(n.flags|=64,oe&&(n.flags|=8192),oe=p.callbacks,oe===null?p.callbacks=[re]:oe.push(re))}else oe={lane:re,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ve===null?(ae=ve=oe,G=Ee):ve=ve.next=oe,E|=re;if(L=L.next,L===null){if(L=p.shared.pending,L===null)break;oe=L,L=oe.next,oe.next=null,p.lastBaseUpdate=oe,p.shared.pending=null}}while(!0);ve===null&&(G=Ee),p.baseState=G,p.firstBaseUpdate=ae,p.lastBaseUpdate=ve,g===null&&(p.shared.lanes=0),Za|=E,n.lanes=E,n.memoizedState=Ee}}function yg(n,i){if(typeof n!="function")throw Error(a(191,n));n.call(i)}function xg(n,i){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)yg(o[n],i)}var hr=K(null),fc=K(0);function Sg(n,i){n=ma,de(fc,n),de(hr,i),ma=n|i.baseLanes}function kf(){de(fc,ma),de(hr,hr.current)}function Wf(){ma=fc.current,Z(hr),Z(fc)}var ka=0,yt=null,kt=null,cn=null,hc=!1,dr=!1,Ns=!1,dc=0,zo=0,pr=null,AS=0;function rn(){throw Error(a(321))}function Xf(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ni(n[o],i[o]))return!1;return!0}function qf(n,i,o,c,p,g){return ka=g,yt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,O.H=n===null||n.memoizedState===null?a0:s0,Ns=!1,g=o(c,p),Ns=!1,dr&&(g=Eg(i,o,c,p)),Mg(n),g}function Mg(n){O.H=yc;var i=kt!==null&&kt.next!==null;if(ka=0,cn=kt=yt=null,hc=!1,zo=0,pr=null,i)throw Error(a(300));n===null||bn||(n=n.dependencies,n!==null&&rc(n)&&(bn=!0))}function Eg(n,i,o,c){yt=n;var p=0;do{if(dr&&(pr=null),zo=0,dr=!1,25<=p)throw Error(a(301));if(p+=1,cn=kt=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}O.H=NS,g=i(o,c)}while(dr);return g}function wS(){var n=O.H,i=n.useState()[0];return i=typeof i.then=="function"?Fo(i):i,n=n.useState()[0],(kt!==null?kt.memoizedState:null)!==n&&(yt.flags|=1024),i}function Yf(){var n=dc!==0;return dc=0,n}function jf(n,i,o){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~o}function Kf(n){if(hc){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}hc=!1}ka=0,cn=kt=yt=null,dr=!1,zo=dc=0,pr=null}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?yt.memoizedState=cn=n:cn=cn.next=n,cn}function un(){if(kt===null){var n=yt.alternate;n=n!==null?n.memoizedState:null}else n=kt.next;var i=cn===null?yt.memoizedState:cn.next;if(i!==null)cn=i,kt=n;else{if(n===null)throw yt.alternate===null?Error(a(467)):Error(a(310));kt=n,n={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},cn===null?yt.memoizedState=cn=n:cn=cn.next=n}return cn}function Zf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(n){var i=zo;return zo+=1,pr===null&&(pr=[]),n=gg(pr,n,i),i=yt,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,O.H=i===null||i.memoizedState===null?a0:s0),n}function pc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Fo(n);if(n.$$typeof===w)return zn(n)}throw Error(a(438,String(n)))}function Qf(n){var i=null,o=yt.updateQueue;if(o!==null&&(i=o.memoCache),i==null){var c=yt.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(p){return p.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),o===null&&(o=Zf(),yt.updateQueue=o),o.memoCache=i,o=i.data[i.index],o===void 0)for(o=i.data[i.index]=Array(n),c=0;c<n;c++)o[c]=R;return i.index++,o}function ca(n,i){return typeof i=="function"?i(n):i}function mc(n){var i=un();return Jf(i,kt,n)}function Jf(n,i,o){var c=n.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=o;var p=n.baseQueue,g=c.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}i.baseQueue=p=g,c.pending=null}if(g=n.baseState,p===null)n.memoizedState=g;else{i=p.next;var L=E=null,G=null,ae=i,ve=!1;do{var Ee=ae.lane&-536870913;if(Ee!==ae.lane?(wt&Ee)===Ee:(ka&Ee)===Ee){var re=ae.revertLane;if(re===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Ee===ur&&(ve=!0);else if((ka&re)===re){ae=ae.next,re===ur&&(ve=!0);continue}else Ee={lane:0,revertLane:ae.revertLane,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(L=G=Ee,E=g):G=G.next=Ee,yt.lanes|=re,Za|=re;Ee=ae.action,Ns&&o(g,Ee),g=ae.hasEagerState?ae.eagerState:o(g,Ee)}else re={lane:Ee,revertLane:ae.revertLane,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(L=G=re,E=g):G=G.next=re,yt.lanes|=Ee,Za|=Ee;ae=ae.next}while(ae!==null&&ae!==i);if(G===null?E=g:G.next=L,!ni(g,n.memoizedState)&&(bn=!0,ve&&(o=fr,o!==null)))throw o;n.memoizedState=g,n.baseState=E,n.baseQueue=G,c.lastRenderedState=g}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function $f(n){var i=un(),o=i.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=n;var c=o.dispatch,p=o.pending,g=i.memoizedState;if(p!==null){o.pending=null;var E=p=p.next;do g=n(g,E.action),E=E.next;while(E!==p);ni(g,i.memoizedState)||(bn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,c]}function Tg(n,i,o){var c=yt,p=un(),g=Nt;if(g){if(o===void 0)throw Error(a(407));o=o()}else o=i();var E=!ni((kt||p).memoizedState,o);E&&(p.memoizedState=o,bn=!0),p=p.queue;var L=wg.bind(null,c,p,n);if(Ho(2048,8,L,[n]),p.getSnapshot!==i||E||cn!==null&&cn.memoizedState.tag&1){if(c.flags|=2048,mr(9,gc(),Ag.bind(null,c,p,o,i),null),Zt===null)throw Error(a(349));g||(ka&124)!==0||bg(c,i,o)}return o}function bg(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=yt.updateQueue,i===null?(i=Zf(),yt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Ag(n,i,o,c){i.value=o,i.getSnapshot=c,Rg(i)&&Cg(n)}function wg(n,i,o){return o(function(){Rg(i)&&Cg(n)})}function Rg(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ni(n,o)}catch{return!0}}function Cg(n){var i=rr(n,2);i!==null&&li(i,n,2)}function eh(n){var i=Qn();if(typeof n=="function"){var o=n;if(n=o(),Ns){ge(!0);try{o()}finally{ge(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:n},i}function Dg(n,i,o,c){return n.baseState=o,Jf(n,kt,typeof c=="function"?c:ca)}function RS(n,i,o,c,p){if(vc(n))throw Error(a(485));if(n=i.action,n!==null){var g={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};O.T!==null?o(!0):g.isTransition=!1,c(g),o=i.pending,o===null?(g.next=i.pending=g,Lg(i,g)):(g.next=o.next,i.pending=o.next=g)}}function Lg(n,i){var o=i.action,c=i.payload,p=n.state;if(i.isTransition){var g=O.T,E={};O.T=E;try{var L=o(p,c),G=O.S;G!==null&&G(E,L),Ug(n,i,L)}catch(ae){th(n,i,ae)}finally{O.T=g}}else try{g=o(p,c),Ug(n,i,g)}catch(ae){th(n,i,ae)}}function Ug(n,i,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){Ng(n,i,c)},function(c){return th(n,i,c)}):Ng(n,i,o)}function Ng(n,i,o){i.status="fulfilled",i.value=o,Og(i),n.state=o,i=n.pending,i!==null&&(o=i.next,o===i?n.pending=null:(o=o.next,i.next=o,Lg(n,o)))}function th(n,i,o){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=o,Og(i),i=i.next;while(i!==c)}n.action=null}function Og(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Pg(n,i){return i}function Ig(n,i){if(Nt){var o=Zt.formState;if(o!==null){e:{var c=yt;if(Nt){if(tn){t:{for(var p=tn,g=Hi;p.nodeType!==8;){if(!g){p=null;break t}if(p=wi(p.nextSibling),p===null){p=null;break t}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){tn=wi(p.nextSibling),c=p.data==="F!";break e}}Cs(c)}c=!1}c&&(i=o[0])}}return o=Qn(),o.memoizedState=o.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pg,lastRenderedState:i},o.queue=c,o=t0.bind(null,yt,c),c.dispatch=o,c=eh(!1),g=rh.bind(null,yt,!1,c.queue),c=Qn(),p={state:i,dispatch:null,action:n,pending:null},c.queue=p,o=RS.bind(null,yt,p,g,o),p.dispatch=o,c.memoizedState=n,[i,o,!1]}function Bg(n){var i=un();return zg(i,kt,n)}function zg(n,i,o){if(i=Jf(n,i,Pg)[0],n=mc(ca)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=Fo(i)}catch(E){throw E===No?cc:E}else c=i;i=un();var p=i.queue,g=p.dispatch;return o!==i.memoizedState&&(yt.flags|=2048,mr(9,gc(),CS.bind(null,p,o),null)),[c,g,n]}function CS(n,i){n.action=i}function Fg(n){var i=un(),o=kt;if(o!==null)return zg(i,o,n);un(),i=i.memoizedState,o=un();var c=o.queue.dispatch;return o.memoizedState=n,[i,c,!1]}function mr(n,i,o,c){return n={tag:n,create:o,deps:c,inst:i,next:null},i=yt.updateQueue,i===null&&(i=Zf(),yt.updateQueue=i),o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n),n}function gc(){return{destroy:void 0,resource:void 0}}function Hg(){return un().memoizedState}function _c(n,i,o,c){var p=Qn();c=c===void 0?null:c,yt.flags|=n,p.memoizedState=mr(1|i,gc(),o,c)}function Ho(n,i,o,c){var p=un();c=c===void 0?null:c;var g=p.memoizedState.inst;kt!==null&&c!==null&&Xf(c,kt.memoizedState.deps)?p.memoizedState=mr(i,g,o,c):(yt.flags|=n,p.memoizedState=mr(1|i,g,o,c))}function Vg(n,i){_c(8390656,8,n,i)}function Gg(n,i){Ho(2048,8,n,i)}function kg(n,i){return Ho(4,2,n,i)}function Wg(n,i){return Ho(4,4,n,i)}function Xg(n,i){if(typeof i=="function"){n=n();var o=i(n);return function(){typeof o=="function"?o():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function qg(n,i,o){o=o!=null?o.concat([n]):null,Ho(4,4,Xg.bind(null,i,n),o)}function nh(){}function Yg(n,i){var o=un();i=i===void 0?null:i;var c=o.memoizedState;return i!==null&&Xf(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function jg(n,i){var o=un();i=i===void 0?null:i;var c=o.memoizedState;if(i!==null&&Xf(i,c[1]))return c[0];if(c=n(),Ns){ge(!0);try{n()}finally{ge(!1)}}return o.memoizedState=[c,i],c}function ih(n,i,o){return o===void 0||(ka&1073741824)!==0?n.memoizedState=i:(n.memoizedState=o,n=Q0(),yt.lanes|=n,Za|=n,o)}function Kg(n,i,o,c){return ni(o,i)?o:hr.current!==null?(n=ih(n,o,c),ni(n,i)||(bn=!0),n):(ka&42)===0?(bn=!0,n.memoizedState=o):(n=Q0(),yt.lanes|=n,Za|=n,i)}function Zg(n,i,o,c,p){var g=F.p;F.p=g!==0&&8>g?g:8;var E=O.T,L={};O.T=L,rh(n,!1,i,o);try{var G=p(),ae=O.S;if(ae!==null&&ae(L,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var ve=bS(G,c);Vo(n,i,ve,oi(n))}else Vo(n,i,c,oi(n))}catch(Ee){Vo(n,i,{then:function(){},status:"rejected",reason:Ee},oi())}finally{F.p=g,O.T=E}}function DS(){}function ah(n,i,o,c){if(n.tag!==5)throw Error(a(476));var p=Qg(n).queue;Zg(n,p,i,k,o===null?DS:function(){return Jg(n),o(c)})}function Qg(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:k},next:null};var o={};return i.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:o},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Jg(n){var i=Qg(n).next.queue;Vo(n,i,{},oi())}function sh(){return zn(sl)}function $g(){return un().memoizedState}function e0(){return un().memoizedState}function LS(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var o=oi();n=Va(o);var c=Ga(i,n,o);c!==null&&(li(c,i,o),Po(c,i,o)),i={cache:Pf()},n.payload=i;return}i=i.return}}function US(n,i,o){var c=oi();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},vc(n)?n0(i,o):(o=bf(n,i,o,c),o!==null&&(li(o,n,c),i0(o,i,c)))}function t0(n,i,o){var c=oi();Vo(n,i,o,c)}function Vo(n,i,o,c){var p={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(vc(n))n0(i,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,L=g(E,o);if(p.hasEagerState=!0,p.eagerState=L,ni(L,E))return tc(n,i,p,0),Zt===null&&ec(),!1}catch{}finally{}if(o=bf(n,i,p,c),o!==null)return li(o,n,c),i0(o,i,c),!0}return!1}function rh(n,i,o,c){if(c={lane:2,revertLane:zh(),action:c,hasEagerState:!1,eagerState:null,next:null},vc(n)){if(i)throw Error(a(479))}else i=bf(n,o,c,2),i!==null&&li(i,n,2)}function vc(n){var i=n.alternate;return n===yt||i!==null&&i===yt}function n0(n,i){dr=hc=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function i0(n,i,o){if((o&4194048)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Ge(n,o)}}var yc={readContext:zn,use:pc,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},a0={readContext:zn,use:pc,useCallback:function(n,i){return Qn().memoizedState=[n,i===void 0?null:i],n},useContext:zn,useEffect:Vg,useImperativeHandle:function(n,i,o){o=o!=null?o.concat([n]):null,_c(4194308,4,Xg.bind(null,i,n),o)},useLayoutEffect:function(n,i){return _c(4194308,4,n,i)},useInsertionEffect:function(n,i){_c(4,2,n,i)},useMemo:function(n,i){var o=Qn();i=i===void 0?null:i;var c=n();if(Ns){ge(!0);try{n()}finally{ge(!1)}}return o.memoizedState=[c,i],c},useReducer:function(n,i,o){var c=Qn();if(o!==void 0){var p=o(i);if(Ns){ge(!0);try{o(i)}finally{ge(!1)}}}else p=i;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=US.bind(null,yt,n),[c.memoizedState,n]},useRef:function(n){var i=Qn();return n={current:n},i.memoizedState=n},useState:function(n){n=eh(n);var i=n.queue,o=t0.bind(null,yt,i);return i.dispatch=o,[n.memoizedState,o]},useDebugValue:nh,useDeferredValue:function(n,i){var o=Qn();return ih(o,n,i)},useTransition:function(){var n=eh(!1);return n=Zg.bind(null,yt,n.queue,!0,!1),Qn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,o){var c=yt,p=Qn();if(Nt){if(o===void 0)throw Error(a(407));o=o()}else{if(o=i(),Zt===null)throw Error(a(349));(wt&124)!==0||bg(c,i,o)}p.memoizedState=o;var g={value:o,getSnapshot:i};return p.queue=g,Vg(wg.bind(null,c,g,n),[n]),c.flags|=2048,mr(9,gc(),Ag.bind(null,c,g,o,i),null),o},useId:function(){var n=Qn(),i=Zt.identifierPrefix;if(Nt){var o=ra,c=sa;o=(c&~(1<<32-Be(c)-1)).toString(32)+o,i="«"+i+"R"+o,o=dc++,0<o&&(i+="H"+o.toString(32)),i+="»"}else o=AS++,i="«"+i+"r"+o.toString(32)+"»";return n.memoizedState=i},useHostTransitionStatus:sh,useFormState:Ig,useActionState:Ig,useOptimistic:function(n){var i=Qn();i.memoizedState=i.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=o,i=rh.bind(null,yt,!0,o),o.dispatch=i,[n,i]},useMemoCache:Qf,useCacheRefresh:function(){return Qn().memoizedState=LS.bind(null,yt)}},s0={readContext:zn,use:pc,useCallback:Yg,useContext:zn,useEffect:Gg,useImperativeHandle:qg,useInsertionEffect:kg,useLayoutEffect:Wg,useMemo:jg,useReducer:mc,useRef:Hg,useState:function(){return mc(ca)},useDebugValue:nh,useDeferredValue:function(n,i){var o=un();return Kg(o,kt.memoizedState,n,i)},useTransition:function(){var n=mc(ca)[0],i=un().memoizedState;return[typeof n=="boolean"?n:Fo(n),i]},useSyncExternalStore:Tg,useId:$g,useHostTransitionStatus:sh,useFormState:Bg,useActionState:Bg,useOptimistic:function(n,i){var o=un();return Dg(o,kt,n,i)},useMemoCache:Qf,useCacheRefresh:e0},NS={readContext:zn,use:pc,useCallback:Yg,useContext:zn,useEffect:Gg,useImperativeHandle:qg,useInsertionEffect:kg,useLayoutEffect:Wg,useMemo:jg,useReducer:$f,useRef:Hg,useState:function(){return $f(ca)},useDebugValue:nh,useDeferredValue:function(n,i){var o=un();return kt===null?ih(o,n,i):Kg(o,kt.memoizedState,n,i)},useTransition:function(){var n=$f(ca)[0],i=un().memoizedState;return[typeof n=="boolean"?n:Fo(n),i]},useSyncExternalStore:Tg,useId:$g,useHostTransitionStatus:sh,useFormState:Fg,useActionState:Fg,useOptimistic:function(n,i){var o=un();return kt!==null?Dg(o,kt,n,i):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Qf,useCacheRefresh:e0},gr=null,Go=0;function xc(n){var i=Go;return Go+=1,gr===null&&(gr=[]),gg(gr,n,i)}function ko(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Sc(n,i){throw i.$$typeof===_?Error(a(525)):(n=Object.prototype.toString.call(i),Error(a(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function r0(n){var i=n._init;return i(n._payload)}function o0(n){function i(Q,Y){if(n){var ne=Q.deletions;ne===null?(Q.deletions=[Y],Q.flags|=16):ne.push(Y)}}function o(Q,Y){if(!n)return null;for(;Y!==null;)i(Q,Y),Y=Y.sibling;return null}function c(Q){for(var Y=new Map;Q!==null;)Q.key!==null?Y.set(Q.key,Q):Y.set(Q.index,Q),Q=Q.sibling;return Y}function p(Q,Y){return Q=aa(Q,Y),Q.index=0,Q.sibling=null,Q}function g(Q,Y,ne){return Q.index=ne,n?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<Y?(Q.flags|=67108866,Y):ne):(Q.flags|=67108866,Y)):(Q.flags|=1048576,Y)}function E(Q){return n&&Q.alternate===null&&(Q.flags|=67108866),Q}function L(Q,Y,ne,Se){return Y===null||Y.tag!==6?(Y=wf(ne,Q.mode,Se),Y.return=Q,Y):(Y=p(Y,ne),Y.return=Q,Y)}function G(Q,Y,ne,Se){var ke=ne.type;return ke===M?ve(Q,Y,ne.props.children,Se,ne.key):Y!==null&&(Y.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===H&&r0(ke)===Y.type)?(Y=p(Y,ne.props),ko(Y,ne),Y.return=Q,Y):(Y=ic(ne.type,ne.key,ne.props,null,Q.mode,Se),ko(Y,ne),Y.return=Q,Y)}function ae(Q,Y,ne,Se){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ne.containerInfo||Y.stateNode.implementation!==ne.implementation?(Y=Rf(ne,Q.mode,Se),Y.return=Q,Y):(Y=p(Y,ne.children||[]),Y.return=Q,Y)}function ve(Q,Y,ne,Se,ke){return Y===null||Y.tag!==7?(Y=bs(ne,Q.mode,Se,ke),Y.return=Q,Y):(Y=p(Y,ne),Y.return=Q,Y)}function Ee(Q,Y,ne){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=wf(""+Y,Q.mode,ne),Y.return=Q,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case v:return ne=ic(Y.type,Y.key,Y.props,null,Q.mode,ne),ko(ne,Y),ne.return=Q,ne;case x:return Y=Rf(Y,Q.mode,ne),Y.return=Q,Y;case H:var Se=Y._init;return Y=Se(Y._payload),Ee(Q,Y,ne)}if(te(Y)||$(Y))return Y=bs(Y,Q.mode,ne,null),Y.return=Q,Y;if(typeof Y.then=="function")return Ee(Q,xc(Y),ne);if(Y.$$typeof===w)return Ee(Q,oc(Q,Y),ne);Sc(Q,Y)}return null}function re(Q,Y,ne,Se){var ke=Y!==null?Y.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return ke!==null?null:L(Q,Y,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case v:return ne.key===ke?G(Q,Y,ne,Se):null;case x:return ne.key===ke?ae(Q,Y,ne,Se):null;case H:return ke=ne._init,ne=ke(ne._payload),re(Q,Y,ne,Se)}if(te(ne)||$(ne))return ke!==null?null:ve(Q,Y,ne,Se,null);if(typeof ne.then=="function")return re(Q,Y,xc(ne),Se);if(ne.$$typeof===w)return re(Q,Y,oc(Q,ne),Se);Sc(Q,ne)}return null}function oe(Q,Y,ne,Se,ke){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return Q=Q.get(ne)||null,L(Y,Q,""+Se,ke);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case v:return Q=Q.get(Se.key===null?ne:Se.key)||null,G(Y,Q,Se,ke);case x:return Q=Q.get(Se.key===null?ne:Se.key)||null,ae(Y,Q,Se,ke);case H:var St=Se._init;return Se=St(Se._payload),oe(Q,Y,ne,Se,ke)}if(te(Se)||$(Se))return Q=Q.get(ne)||null,ve(Y,Q,Se,ke,null);if(typeof Se.then=="function")return oe(Q,Y,ne,xc(Se),ke);if(Se.$$typeof===w)return oe(Q,Y,ne,oc(Y,Se),ke);Sc(Y,Se)}return null}function lt(Q,Y,ne,Se){for(var ke=null,St=null,Ke=Y,st=Y=0,wn=null;Ke!==null&&st<ne.length;st++){Ke.index>st?(wn=Ke,Ke=null):wn=Ke.sibling;var Lt=re(Q,Ke,ne[st],Se);if(Lt===null){Ke===null&&(Ke=wn);break}n&&Ke&&Lt.alternate===null&&i(Q,Ke),Y=g(Lt,Y,st),St===null?ke=Lt:St.sibling=Lt,St=Lt,Ke=wn}if(st===ne.length)return o(Q,Ke),Nt&&ws(Q,st),ke;if(Ke===null){for(;st<ne.length;st++)Ke=Ee(Q,ne[st],Se),Ke!==null&&(Y=g(Ke,Y,st),St===null?ke=Ke:St.sibling=Ke,St=Ke);return Nt&&ws(Q,st),ke}for(Ke=c(Ke);st<ne.length;st++)wn=oe(Ke,Q,st,ne[st],Se),wn!==null&&(n&&wn.alternate!==null&&Ke.delete(wn.key===null?st:wn.key),Y=g(wn,Y,st),St===null?ke=wn:St.sibling=wn,St=wn);return n&&Ke.forEach(function(ss){return i(Q,ss)}),Nt&&ws(Q,st),ke}function it(Q,Y,ne,Se){if(ne==null)throw Error(a(151));for(var ke=null,St=null,Ke=Y,st=Y=0,wn=null,Lt=ne.next();Ke!==null&&!Lt.done;st++,Lt=ne.next()){Ke.index>st?(wn=Ke,Ke=null):wn=Ke.sibling;var ss=re(Q,Ke,Lt.value,Se);if(ss===null){Ke===null&&(Ke=wn);break}n&&Ke&&ss.alternate===null&&i(Q,Ke),Y=g(ss,Y,st),St===null?ke=ss:St.sibling=ss,St=ss,Ke=wn}if(Lt.done)return o(Q,Ke),Nt&&ws(Q,st),ke;if(Ke===null){for(;!Lt.done;st++,Lt=ne.next())Lt=Ee(Q,Lt.value,Se),Lt!==null&&(Y=g(Lt,Y,st),St===null?ke=Lt:St.sibling=Lt,St=Lt);return Nt&&ws(Q,st),ke}for(Ke=c(Ke);!Lt.done;st++,Lt=ne.next())Lt=oe(Ke,Q,st,Lt.value,Se),Lt!==null&&(n&&Lt.alternate!==null&&Ke.delete(Lt.key===null?st:Lt.key),Y=g(Lt,Y,st),St===null?ke=Lt:St.sibling=Lt,St=Lt);return n&&Ke.forEach(function(OM){return i(Q,OM)}),Nt&&ws(Q,st),ke}function Xt(Q,Y,ne,Se){if(typeof ne=="object"&&ne!==null&&ne.type===M&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case v:e:{for(var ke=ne.key;Y!==null;){if(Y.key===ke){if(ke=ne.type,ke===M){if(Y.tag===7){o(Q,Y.sibling),Se=p(Y,ne.props.children),Se.return=Q,Q=Se;break e}}else if(Y.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===H&&r0(ke)===Y.type){o(Q,Y.sibling),Se=p(Y,ne.props),ko(Se,ne),Se.return=Q,Q=Se;break e}o(Q,Y);break}else i(Q,Y);Y=Y.sibling}ne.type===M?(Se=bs(ne.props.children,Q.mode,Se,ne.key),Se.return=Q,Q=Se):(Se=ic(ne.type,ne.key,ne.props,null,Q.mode,Se),ko(Se,ne),Se.return=Q,Q=Se)}return E(Q);case x:e:{for(ke=ne.key;Y!==null;){if(Y.key===ke)if(Y.tag===4&&Y.stateNode.containerInfo===ne.containerInfo&&Y.stateNode.implementation===ne.implementation){o(Q,Y.sibling),Se=p(Y,ne.children||[]),Se.return=Q,Q=Se;break e}else{o(Q,Y);break}else i(Q,Y);Y=Y.sibling}Se=Rf(ne,Q.mode,Se),Se.return=Q,Q=Se}return E(Q);case H:return ke=ne._init,ne=ke(ne._payload),Xt(Q,Y,ne,Se)}if(te(ne))return lt(Q,Y,ne,Se);if($(ne)){if(ke=$(ne),typeof ke!="function")throw Error(a(150));return ne=ke.call(ne),it(Q,Y,ne,Se)}if(typeof ne.then=="function")return Xt(Q,Y,xc(ne),Se);if(ne.$$typeof===w)return Xt(Q,Y,oc(Q,ne),Se);Sc(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,Y!==null&&Y.tag===6?(o(Q,Y.sibling),Se=p(Y,ne),Se.return=Q,Q=Se):(o(Q,Y),Se=wf(ne,Q.mode,Se),Se.return=Q,Q=Se),E(Q)):o(Q,Y)}return function(Q,Y,ne,Se){try{Go=0;var ke=Xt(Q,Y,ne,Se);return gr=null,ke}catch(Ke){if(Ke===No||Ke===cc)throw Ke;var St=ii(29,Ke,null,Q.mode);return St.lanes=Se,St.return=Q,St}finally{}}}var _r=o0(!0),l0=o0(!1),_i=K(null),Vi=null;function Wa(n){var i=n.alternate;de(gn,gn.current&1),de(_i,n),Vi===null&&(i===null||hr.current!==null||i.memoizedState!==null)&&(Vi=n)}function c0(n){if(n.tag===22){if(de(gn,gn.current),de(_i,n),Vi===null){var i=n.alternate;i!==null&&i.memoizedState!==null&&(Vi=n)}}else Xa()}function Xa(){de(gn,gn.current),de(_i,_i.current)}function ua(n){Z(_i),Vi===n&&(Vi=null),Z(gn)}var gn=K(0);function Mc(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Zh(o)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function oh(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:m({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var lh={enqueueSetState:function(n,i,o){n=n._reactInternals;var c=oi(),p=Va(c);p.payload=i,o!=null&&(p.callback=o),i=Ga(n,p,c),i!==null&&(li(i,n,c),Po(i,n,c))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=oi(),p=Va(c);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Ga(n,p,c),i!==null&&(li(i,n,c),Po(i,n,c))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=oi(),c=Va(o);c.tag=2,i!=null&&(c.callback=i),i=Ga(n,c,o),i!==null&&(li(i,n,o),Po(i,n,o))}};function u0(n,i,o,c,p,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!bo(o,c)||!bo(p,g):!0}function f0(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&lh.enqueueReplaceState(i,i.state,null)}function Os(n,i){var o=i;if("ref"in i){o={};for(var c in i)c!=="ref"&&(o[c]=i[c])}if(n=n.defaultProps){o===i&&(o=m({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}var Ec=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function h0(n){Ec(n)}function d0(n){console.error(n)}function p0(n){Ec(n)}function Tc(n,i){try{var o=n.onUncaughtError;o(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function m0(n,i,o){try{var c=n.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function ch(n,i,o){return o=Va(o),o.tag=3,o.payload={element:null},o.callback=function(){Tc(n,i)},o}function g0(n){return n=Va(n),n.tag=3,n}function _0(n,i,o,c){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var g=c.value;n.payload=function(){return p(g)},n.callback=function(){m0(i,o,c)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){m0(i,o,c),typeof p!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var L=c.stack;this.componentDidCatch(c.value,{componentStack:L!==null?L:""})})}function OS(n,i,o,c,p){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=o.alternate,i!==null&&Do(i,o,p,!0),o=_i.current,o!==null){switch(o.tag){case 13:return Vi===null?Nh():o.alternate===null&&nn===0&&(nn=3),o.flags&=-257,o.flags|=65536,o.lanes=p,c===zf?o.flags|=16384:(i=o.updateQueue,i===null?o.updateQueue=new Set([c]):i.add(c),Ph(n,c,p)),!1;case 22:return o.flags|=65536,c===zf?o.flags|=16384:(i=o.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=i):(o=i.retryQueue,o===null?i.retryQueue=new Set([c]):o.add(c)),Ph(n,c,p)),!1}throw Error(a(435,o.tag))}return Ph(n,c,p),Nh(),!1}if(Nt)return i=_i.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=p,c!==Lf&&(n=Error(a(422),{cause:c}),Co(di(n,o)))):(c!==Lf&&(i=Error(a(423),{cause:c}),Co(di(i,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=di(c,o),p=ch(n.stateNode,c,p),Vf(n,p),nn!==4&&(nn=2)),!1;var g=Error(a(520),{cause:c});if(g=di(g,o),Zo===null?Zo=[g]:Zo.push(g),nn!==4&&(nn=2),i===null)return!0;c=di(c,o),o=i;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=ch(o.stateNode,c,n),Vf(o,n),!1;case 1:if(i=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Qa===null||!Qa.has(g))))return o.flags|=65536,p&=-p,o.lanes|=p,p=g0(p),_0(p,n,o,c),Vf(o,p),!1}o=o.return}while(o!==null);return!1}var v0=Error(a(461)),bn=!1;function On(n,i,o,c){i.child=n===null?l0(i,null,o,c):_r(i,n.child,o,c)}function y0(n,i,o,c,p){o=o.render;var g=i.ref;if("ref"in c){var E={};for(var L in c)L!=="ref"&&(E[L]=c[L])}else E=c;return Ls(i),c=qf(n,i,o,E,g,p),L=Yf(),n!==null&&!bn?(jf(n,i,p),fa(n,i,p)):(Nt&&L&&Cf(i),i.flags|=1,On(n,i,c,p),i.child)}function x0(n,i,o,c,p){if(n===null){var g=o.type;return typeof g=="function"&&!Af(g)&&g.defaultProps===void 0&&o.compare===null?(i.tag=15,i.type=g,S0(n,i,g,c,p)):(n=ic(o.type,null,c,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!_h(n,p)){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:bo,o(E,c)&&n.ref===i.ref)return fa(n,i,p)}return i.flags|=1,n=aa(g,c),n.ref=i.ref,n.return=i,i.child=n}function S0(n,i,o,c,p){if(n!==null){var g=n.memoizedProps;if(bo(g,c)&&n.ref===i.ref)if(bn=!1,i.pendingProps=c=g,_h(n,p))(n.flags&131072)!==0&&(bn=!0);else return i.lanes=n.lanes,fa(n,i,p)}return uh(n,i,o,c,p)}function M0(n,i,o){var c=i.pendingProps,p=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden"){if((i.flags&128)!==0){if(c=g!==null?g.baseLanes|o:o,n!==null){for(p=i.child=n.child,g=0;p!==null;)g=g|p.lanes|p.childLanes,p=p.sibling;i.childLanes=g&~c}else i.childLanes=0,i.child=null;return E0(n,i,c,o)}if((o&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&lc(i,g!==null?g.cachePool:null),g!==null?Sg(i,g):kf(),c0(i);else return i.lanes=i.childLanes=536870912,E0(n,i,g!==null?g.baseLanes|o:o,o)}else g!==null?(lc(i,g.cachePool),Sg(i,g),Xa(),i.memoizedState=null):(n!==null&&lc(i,null),kf(),Xa());return On(n,i,p,o),i.child}function E0(n,i,o,c){var p=Bf();return p=p===null?null:{parent:mn._currentValue,pool:p},i.memoizedState={baseLanes:o,cachePool:p},n!==null&&lc(i,null),kf(),c0(i),n!==null&&Do(n,i,c,!0),null}function bc(n,i){var o=i.ref;if(o===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(n===null||n.ref!==o)&&(i.flags|=4194816)}}function uh(n,i,o,c,p){return Ls(i),o=qf(n,i,o,c,void 0,p),c=Yf(),n!==null&&!bn?(jf(n,i,p),fa(n,i,p)):(Nt&&c&&Cf(i),i.flags|=1,On(n,i,o,p),i.child)}function T0(n,i,o,c,p,g){return Ls(i),i.updateQueue=null,o=Eg(i,c,o,p),Mg(n),c=Yf(),n!==null&&!bn?(jf(n,i,g),fa(n,i,g)):(Nt&&c&&Cf(i),i.flags|=1,On(n,i,o,g),i.child)}function b0(n,i,o,c,p){if(Ls(i),i.stateNode===null){var g=or,E=o.contextType;typeof E=="object"&&E!==null&&(g=zn(E)),g=new o(c,g),i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=lh,i.stateNode=g,g._reactInternals=i,g=i.stateNode,g.props=c,g.state=i.memoizedState,g.refs={},Ff(i),E=o.contextType,g.context=typeof E=="object"&&E!==null?zn(E):or,g.state=i.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(oh(i,o,E,c),g.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&lh.enqueueReplaceState(g,g.state,null),Bo(i,c,g,p),Io(),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(n===null){g=i.stateNode;var L=i.memoizedProps,G=Os(o,L);g.props=G;var ae=g.context,ve=o.contextType;E=or,typeof ve=="object"&&ve!==null&&(E=zn(ve));var Ee=o.getDerivedStateFromProps;ve=typeof Ee=="function"||typeof g.getSnapshotBeforeUpdate=="function",L=i.pendingProps!==L,ve||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(L||ae!==E)&&f0(i,g,c,E),Ha=!1;var re=i.memoizedState;g.state=re,Bo(i,c,g,p),Io(),ae=i.memoizedState,L||re!==ae||Ha?(typeof Ee=="function"&&(oh(i,o,Ee,c),ae=i.memoizedState),(G=Ha||u0(i,o,G,c,re,ae,E))?(ve||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=ae),g.props=c,g.state=ae,g.context=E,c=G):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{g=i.stateNode,Hf(n,i),E=i.memoizedProps,ve=Os(o,E),g.props=ve,Ee=i.pendingProps,re=g.context,ae=o.contextType,G=or,typeof ae=="object"&&ae!==null&&(G=zn(ae)),L=o.getDerivedStateFromProps,(ae=typeof L=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==Ee||re!==G)&&f0(i,g,c,G),Ha=!1,re=i.memoizedState,g.state=re,Bo(i,c,g,p),Io();var oe=i.memoizedState;E!==Ee||re!==oe||Ha||n!==null&&n.dependencies!==null&&rc(n.dependencies)?(typeof L=="function"&&(oh(i,o,L,c),oe=i.memoizedState),(ve=Ha||u0(i,o,ve,c,re,oe,G)||n!==null&&n.dependencies!==null&&rc(n.dependencies))?(ae||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,oe,G),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,oe,G)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&re===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&re===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=oe),g.props=c,g.state=oe,g.context=G,c=ve):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&re===n.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&re===n.memoizedState||(i.flags|=1024),c=!1)}return g=c,bc(n,i),c=(i.flags&128)!==0,g||c?(g=i.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:g.render(),i.flags|=1,n!==null&&c?(i.child=_r(i,n.child,null,p),i.child=_r(i,null,o,p)):On(n,i,o,p),i.memoizedState=g.state,n=i.child):n=fa(n,i,p),n}function A0(n,i,o,c){return Ro(),i.flags|=256,On(n,i,o,c),i.child}var fh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hh(n){return{baseLanes:n,cachePool:dg()}}function dh(n,i,o){return n=n!==null?n.childLanes&~o:0,i&&(n|=vi),n}function w0(n,i,o){var c=i.pendingProps,p=!1,g=(i.flags&128)!==0,E;if((E=g)||(E=n!==null&&n.memoizedState===null?!1:(gn.current&2)!==0),E&&(p=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,n===null){if(Nt){if(p?Wa(i):Xa(),Nt){var L=tn,G;if(G=L){e:{for(G=L,L=Hi;G.nodeType!==8;){if(!L){L=null;break e}if(G=wi(G.nextSibling),G===null){L=null;break e}}L=G}L!==null?(i.memoizedState={dehydrated:L,treeContext:As!==null?{id:sa,overflow:ra}:null,retryLane:536870912,hydrationErrors:null},G=ii(18,null,null,0),G.stateNode=L,G.return=i,i.child=G,Gn=i,tn=null,G=!0):G=!1}G||Cs(i)}if(L=i.memoizedState,L!==null&&(L=L.dehydrated,L!==null))return Zh(L)?i.lanes=32:i.lanes=536870912,null;ua(i)}return L=c.children,c=c.fallback,p?(Xa(),p=i.mode,L=Ac({mode:"hidden",children:L},p),c=bs(c,p,o,null),L.return=i,c.return=i,L.sibling=c,i.child=L,p=i.child,p.memoizedState=hh(o),p.childLanes=dh(n,E,o),i.memoizedState=fh,c):(Wa(i),ph(i,L))}if(G=n.memoizedState,G!==null&&(L=G.dehydrated,L!==null)){if(g)i.flags&256?(Wa(i),i.flags&=-257,i=mh(n,i,o)):i.memoizedState!==null?(Xa(),i.child=n.child,i.flags|=128,i=null):(Xa(),p=c.fallback,L=i.mode,c=Ac({mode:"visible",children:c.children},L),p=bs(p,L,o,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,_r(i,n.child,null,o),c=i.child,c.memoizedState=hh(o),c.childLanes=dh(n,E,o),i.memoizedState=fh,i=p);else if(Wa(i),Zh(L)){if(E=L.nextSibling&&L.nextSibling.dataset,E)var ae=E.dgst;E=ae,c=Error(a(419)),c.stack="",c.digest=E,Co({value:c,source:null,stack:null}),i=mh(n,i,o)}else if(bn||Do(n,i,o,!1),E=(o&n.childLanes)!==0,bn||E){if(E=Zt,E!==null&&(c=o&-o,c=(c&42)!==0?1:ct(c),c=(c&(E.suspendedLanes|o))!==0?0:c,c!==0&&c!==G.retryLane))throw G.retryLane=c,rr(n,c),li(E,n,c),v0;L.data==="$?"||Nh(),i=mh(n,i,o)}else L.data==="$?"?(i.flags|=192,i.child=n.child,i=null):(n=G.treeContext,tn=wi(L.nextSibling),Gn=i,Nt=!0,Rs=null,Hi=!1,n!==null&&(mi[gi++]=sa,mi[gi++]=ra,mi[gi++]=As,sa=n.id,ra=n.overflow,As=i),i=ph(i,c.children),i.flags|=4096);return i}return p?(Xa(),p=c.fallback,L=i.mode,G=n.child,ae=G.sibling,c=aa(G,{mode:"hidden",children:c.children}),c.subtreeFlags=G.subtreeFlags&65011712,ae!==null?p=aa(ae,p):(p=bs(p,L,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,L=n.child.memoizedState,L===null?L=hh(o):(G=L.cachePool,G!==null?(ae=mn._currentValue,G=G.parent!==ae?{parent:ae,pool:ae}:G):G=dg(),L={baseLanes:L.baseLanes|o,cachePool:G}),p.memoizedState=L,p.childLanes=dh(n,E,o),i.memoizedState=fh,c):(Wa(i),o=n.child,n=o.sibling,o=aa(o,{mode:"visible",children:c.children}),o.return=i,o.sibling=null,n!==null&&(E=i.deletions,E===null?(i.deletions=[n],i.flags|=16):E.push(n)),i.child=o,i.memoizedState=null,o)}function ph(n,i){return i=Ac({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Ac(n,i){return n=ii(22,n,null,i),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function mh(n,i,o){return _r(i,n.child,null,o),n=ph(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function R0(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Nf(n.return,i,o)}function gh(n,i,o,c,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:p}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=p)}function C0(n,i,o){var c=i.pendingProps,p=c.revealOrder,g=c.tail;if(On(n,i,c.children,o),c=gn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&R0(n,o,i);else if(n.tag===19)R0(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}switch(de(gn,c),p){case"forwards":for(o=i.child,p=null;o!==null;)n=o.alternate,n!==null&&Mc(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=i.child,i.child=null):(p=o.sibling,o.sibling=null),gh(i,!1,p,o,g);break;case"backwards":for(o=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Mc(n)===null){i.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}gh(i,!0,o,null,g);break;case"together":gh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fa(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Za|=i.lanes,(o&i.childLanes)===0)if(n!==null){if(Do(n,i,o,!1),(o&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(a(153));if(i.child!==null){for(n=i.child,o=aa(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=aa(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function _h(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&rc(n)))}function PS(n,i,o){switch(i.tag){case 3:_e(i,i.stateNode.containerInfo),Fa(i,mn,n.memoizedState.cache),Ro();break;case 27:case 5:Ce(i);break;case 4:_e(i,i.stateNode.containerInfo);break;case 10:Fa(i,i.type,i.memoizedProps.value);break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(Wa(i),i.flags|=128,null):(o&i.child.childLanes)!==0?w0(n,i,o):(Wa(i),n=fa(n,i,o),n!==null?n.sibling:null);Wa(i);break;case 19:var p=(n.flags&128)!==0;if(c=(o&i.childLanes)!==0,c||(Do(n,i,o,!1),c=(o&i.childLanes)!==0),p){if(c)return C0(n,i,o);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),de(gn,gn.current),c)break;return null;case 22:case 23:return i.lanes=0,M0(n,i,o);case 24:Fa(i,mn,n.memoizedState.cache)}return fa(n,i,o)}function D0(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps)bn=!0;else{if(!_h(n,o)&&(i.flags&128)===0)return bn=!1,PS(n,i,o);bn=(n.flags&131072)!==0}else bn=!1,Nt&&(i.flags&1048576)!==0&&rg(i,sc,i.index);switch(i.lanes=0,i.tag){case 16:e:{n=i.pendingProps;var c=i.elementType,p=c._init;if(c=p(c._payload),i.type=c,typeof c=="function")Af(c)?(n=Os(c,n),i.tag=1,i=b0(null,i,c,n,o)):(i.tag=0,i=uh(null,i,c,n,o));else{if(c!=null){if(p=c.$$typeof,p===A){i.tag=11,i=y0(null,i,c,n,o);break e}else if(p===B){i.tag=14,i=x0(null,i,c,n,o);break e}}throw i=he(c)||c,Error(a(306,i,""))}}return i;case 0:return uh(n,i,i.type,i.pendingProps,o);case 1:return c=i.type,p=Os(c,i.pendingProps),b0(n,i,c,p,o);case 3:e:{if(_e(i,i.stateNode.containerInfo),n===null)throw Error(a(387));c=i.pendingProps;var g=i.memoizedState;p=g.element,Hf(n,i),Bo(i,c,null,o);var E=i.memoizedState;if(c=E.cache,Fa(i,mn,c),c!==g.cache&&Of(i,[mn],o,!0),Io(),c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){i=A0(n,i,c,o);break e}else if(c!==p){p=di(Error(a(424)),i),Co(p),i=A0(n,i,c,o);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(tn=wi(n.firstChild),Gn=i,Nt=!0,Rs=null,Hi=!0,o=l0(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ro(),c===p){i=fa(n,i,o);break e}On(n,i,c,o)}i=i.child}return i;case 26:return bc(n,i),n===null?(o=O_(i.type,null,i.pendingProps,null))?i.memoizedState=o:Nt||(o=i.type,n=i.pendingProps,c=Hc(pe.current).createElement(o),c[dn]=i,c[Un]=n,In(c,o,n),ln(c),i.stateNode=c):i.memoizedState=O_(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return Ce(i),n===null&&Nt&&(c=i.stateNode=L_(i.type,i.pendingProps,pe.current),Gn=i,Hi=!0,p=tn,es(i.type)?(Qh=p,tn=wi(c.firstChild)):tn=p),On(n,i,i.pendingProps.children,o),bc(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&Nt&&((p=c=tn)&&(c=cM(c,i.type,i.pendingProps,Hi),c!==null?(i.stateNode=c,Gn=i,tn=wi(c.firstChild),Hi=!1,p=!0):p=!1),p||Cs(i)),Ce(i),p=i.type,g=i.pendingProps,E=n!==null?n.memoizedProps:null,c=g.children,Yh(p,g)?c=null:E!==null&&Yh(p,E)&&(i.flags|=32),i.memoizedState!==null&&(p=qf(n,i,wS,null,null,o),sl._currentValue=p),bc(n,i),On(n,i,c,o),i.child;case 6:return n===null&&Nt&&((n=o=tn)&&(o=uM(o,i.pendingProps,Hi),o!==null?(i.stateNode=o,Gn=i,tn=null,n=!0):n=!1),n||Cs(i)),null;case 13:return w0(n,i,o);case 4:return _e(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=_r(i,null,c,o):On(n,i,c,o),i.child;case 11:return y0(n,i,i.type,i.pendingProps,o);case 7:return On(n,i,i.pendingProps,o),i.child;case 8:return On(n,i,i.pendingProps.children,o),i.child;case 12:return On(n,i,i.pendingProps.children,o),i.child;case 10:return c=i.pendingProps,Fa(i,i.type,c.value),On(n,i,c.children,o),i.child;case 9:return p=i.type._context,c=i.pendingProps.children,Ls(i),p=zn(p),c=c(p),i.flags|=1,On(n,i,c,o),i.child;case 14:return x0(n,i,i.type,i.pendingProps,o);case 15:return S0(n,i,i.type,i.pendingProps,o);case 19:return C0(n,i,o);case 31:return c=i.pendingProps,o=i.mode,c={mode:c.mode,children:c.children},n===null?(o=Ac(c,o),o.ref=i.ref,i.child=o,o.return=i,i=o):(o=aa(n.child,c),o.ref=i.ref,i.child=o,o.return=i,i=o),i;case 22:return M0(n,i,o);case 24:return Ls(i),c=zn(mn),n===null?(p=Bf(),p===null&&(p=Zt,g=Pf(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=o),p=g),i.memoizedState={parent:c,cache:p},Ff(i),Fa(i,mn,p)):((n.lanes&o)!==0&&(Hf(n,i),Bo(i,null,null,o),Io()),p=n.memoizedState,g=i.memoizedState,p.parent!==c?(p={parent:c,cache:c},i.memoizedState=p,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=p),Fa(i,mn,c)):(c=g.cache,Fa(i,mn,c),c!==p.cache&&Of(i,[mn],o,!0))),On(n,i,i.pendingProps.children,o),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ha(n){n.flags|=4}function L0(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!F_(i)){if(i=_i.current,i!==null&&((wt&4194048)===wt?Vi!==null:(wt&62914560)!==wt&&(wt&536870912)===0||i!==Vi))throw Oo=zf,pg;n.flags|=8192}}function wc(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?Oe():536870912,n.lanes|=i,Sr|=i)}function Wo(n,i){if(!Nt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $t(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function IS(n,i,o){var c=i.pendingProps;switch(Df(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(i),null;case 1:return $t(i),null;case 3:return o=i.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),la(mn),Ne(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(wo(i)?ha(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,cg())),$t(i),null;case 26:return o=i.memoizedState,n===null?(ha(i),o!==null?($t(i),L0(i,o)):($t(i),i.flags&=-16777217)):o?o!==n.memoizedState?(ha(i),$t(i),L0(i,o)):($t(i),i.flags&=-16777217):(n.memoizedProps!==c&&ha(i),$t(i),i.flags&=-16777217),null;case 27:Xe(i),o=pe.current;var p=i.type;if(n!==null&&i.stateNode!=null)n.memoizedProps!==c&&ha(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return $t(i),null}n=X.current,wo(i)?og(i):(n=L_(p,c,o),i.stateNode=n,ha(i))}return $t(i),null;case 5:if(Xe(i),o=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==c&&ha(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return $t(i),null}if(n=X.current,wo(i))og(i);else{switch(p=Hc(pe.current),n){case 1:n=p.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=p.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=p.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=p.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof c.is=="string"?p.createElement("select",{is:c.is}):p.createElement("select"),c.multiple?n.multiple=!0:c.size&&(n.size=c.size);break;default:n=typeof c.is=="string"?p.createElement(o,{is:c.is}):p.createElement(o)}}n[dn]=i,n[Un]=c;e:for(p=i.child;p!==null;){if(p.tag===5||p.tag===6)n.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===i)break e;for(;p.sibling===null;){if(p.return===null||p.return===i)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}i.stateNode=n;e:switch(In(n,o,c),o){case"button":case"input":case"select":case"textarea":n=!!c.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&ha(i)}}return $t(i),i.flags&=-16777217,null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==c&&ha(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(n=pe.current,wo(i)){if(n=i.stateNode,o=i.memoizedProps,c=null,p=Gn,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[dn]=i,n=!!(n.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||T_(n.nodeValue,o)),n||Cs(i)}else n=Hc(n).createTextNode(c),n[dn]=i,i.stateNode=n}return $t(i),null;case 13:if(c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=wo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(a(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[dn]=i}else Ro(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),p=!1}else p=cg(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return i.flags&256?(ua(i),i):(ua(i),null)}if(ua(i),(i.flags&128)!==0)return i.lanes=o,i;if(o=c!==null,n=n!==null&&n.memoizedState!==null,o){c=i.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==p&&(c.flags|=2048)}return o!==n&&o&&(i.child.flags|=8192),wc(i,i.updateQueue),$t(i),null;case 4:return Ne(),n===null&&Gh(i.stateNode.containerInfo),$t(i),null;case 10:return la(i.type),$t(i),null;case 19:if(Z(gn),p=i.memoizedState,p===null)return $t(i),null;if(c=(i.flags&128)!==0,g=p.rendering,g===null)if(c)Wo(p,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(g=Mc(n),g!==null){for(i.flags|=128,Wo(p,!1),n=g.updateQueue,i.updateQueue=n,wc(i,n),i.subtreeFlags=0,n=o,o=i.child;o!==null;)sg(o,n),o=o.sibling;return de(gn,gn.current&1|2),i.child}n=n.sibling}p.tail!==null&&ft()>Dc&&(i.flags|=128,c=!0,Wo(p,!1),i.lanes=4194304)}else{if(!c)if(n=Mc(g),n!==null){if(i.flags|=128,c=!0,n=n.updateQueue,i.updateQueue=n,wc(i,n),Wo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!g.alternate&&!Nt)return $t(i),null}else 2*ft()-p.renderingStartTime>Dc&&o!==536870912&&(i.flags|=128,c=!0,Wo(p,!1),i.lanes=4194304);p.isBackwards?(g.sibling=i.child,i.child=g):(n=p.last,n!==null?n.sibling=g:i.child=g,p.last=g)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=ft(),i.sibling=null,n=gn.current,de(gn,c?n&1|2:n&1),i):($t(i),null);case 22:case 23:return ua(i),Wf(),c=i.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(o&536870912)!==0&&(i.flags&128)===0&&($t(i),i.subtreeFlags&6&&(i.flags|=8192)):$t(i),o=i.updateQueue,o!==null&&wc(i,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048),n!==null&&Z(Us),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),la(mn),$t(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function BS(n,i){switch(Df(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return la(mn),Ne(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return Xe(i),null;case 13:if(ua(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Ro()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Z(gn),null;case 4:return Ne(),null;case 10:return la(i.type),null;case 22:case 23:return ua(i),Wf(),n!==null&&Z(Us),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return la(mn),null;case 25:return null;default:return null}}function U0(n,i){switch(Df(i),i.tag){case 3:la(mn),Ne();break;case 26:case 27:case 5:Xe(i);break;case 4:Ne();break;case 13:ua(i);break;case 19:Z(gn);break;case 10:la(i.type);break;case 22:case 23:ua(i),Wf(),n!==null&&Z(Us);break;case 24:la(mn)}}function Xo(n,i){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var p=c.next;o=p;do{if((o.tag&n)===n){c=void 0;var g=o.create,E=o.inst;c=g(),E.destroy=c}o=o.next}while(o!==p)}}catch(L){jt(i,i.return,L)}}function qa(n,i,o){try{var c=i.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var g=p.next;c=g;do{if((c.tag&n)===n){var E=c.inst,L=E.destroy;if(L!==void 0){E.destroy=void 0,p=i;var G=o,ae=L;try{ae()}catch(ve){jt(p,G,ve)}}}c=c.next}while(c!==g)}}catch(ve){jt(i,i.return,ve)}}function N0(n){var i=n.updateQueue;if(i!==null){var o=n.stateNode;try{xg(i,o)}catch(c){jt(n,n.return,c)}}}function O0(n,i,o){o.props=Os(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(c){jt(n,i,c)}}function qo(n,i){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof o=="function"?n.refCleanup=o(c):o.current=c}}catch(p){jt(n,i,p)}}function Gi(n,i){var o=n.ref,c=n.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(p){jt(n,i,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){jt(n,i,p)}else o.current=null}function P0(n){var i=n.type,o=n.memoizedProps,c=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(p){jt(n,n.return,p)}}function vh(n,i,o){try{var c=n.stateNode;aM(c,n.type,o,i),c[Un]=i}catch(p){jt(n,n.return,p)}}function I0(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&es(n.type)||n.tag===4}function yh(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||I0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&es(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xh(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,i):(i=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,i.appendChild(n),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Fc));else if(c!==4&&(c===27&&es(n.type)&&(o=n.stateNode,i=null),n=n.child,n!==null))for(xh(n,i,o),n=n.sibling;n!==null;)xh(n,i,o),n=n.sibling}function Rc(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(c===27&&es(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Rc(n,i,o),n=n.sibling;n!==null;)Rc(n,i,o),n=n.sibling}function B0(n){var i=n.stateNode,o=n.memoizedProps;try{for(var c=n.type,p=i.attributes;p.length;)i.removeAttributeNode(p[0]);In(i,c,o),i[dn]=n,i[Un]=o}catch(g){jt(n,n.return,g)}}var da=!1,on=!1,Sh=!1,z0=typeof WeakSet=="function"?WeakSet:Set,An=null;function zS(n,i){if(n=n.containerInfo,Xh=qc,n=Km(n),yf(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,L=-1,G=-1,ae=0,ve=0,Ee=n,re=null;t:for(;;){for(var oe;Ee!==o||p!==0&&Ee.nodeType!==3||(L=E+p),Ee!==g||c!==0&&Ee.nodeType!==3||(G=E+c),Ee.nodeType===3&&(E+=Ee.nodeValue.length),(oe=Ee.firstChild)!==null;)re=Ee,Ee=oe;for(;;){if(Ee===n)break t;if(re===o&&++ae===p&&(L=E),re===g&&++ve===c&&(G=E),(oe=Ee.nextSibling)!==null)break;Ee=re,re=Ee.parentNode}Ee=oe}o=L===-1||G===-1?null:{start:L,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(qh={focusedElem:n,selectionRange:o},qc=!1,An=i;An!==null;)if(i=An,n=i.child,(i.subtreeFlags&1024)!==0&&n!==null)n.return=i,An=n;else for(;An!==null;){switch(i=An,g=i.alternate,n=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=i,p=g.memoizedProps,g=g.memoizedState,c=o.stateNode;try{var lt=Os(o.type,p,o.elementType===o.type);n=c.getSnapshotBeforeUpdate(lt,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(it){jt(o,o.return,it)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,o=n.nodeType,o===9)Kh(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Kh(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(a(163))}if(n=i.sibling,n!==null){n.return=i.return,An=n;break}An=i.return}}function F0(n,i,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Ya(n,o),c&4&&Xo(5,o);break;case 1:if(Ya(n,o),c&4)if(n=o.stateNode,i===null)try{n.componentDidMount()}catch(E){jt(o,o.return,E)}else{var p=Os(o.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(p,i,n.__reactInternalSnapshotBeforeUpdate)}catch(E){jt(o,o.return,E)}}c&64&&N0(o),c&512&&qo(o,o.return);break;case 3:if(Ya(n,o),c&64&&(n=o.updateQueue,n!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{xg(n,i)}catch(E){jt(o,o.return,E)}}break;case 27:i===null&&c&4&&B0(o);case 26:case 5:Ya(n,o),i===null&&c&4&&P0(o),c&512&&qo(o,o.return);break;case 12:Ya(n,o);break;case 13:Ya(n,o),c&4&&G0(n,o),c&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=YS.bind(null,o),fM(n,o))));break;case 22:if(c=o.memoizedState!==null||da,!c){i=i!==null&&i.memoizedState!==null||on,p=da;var g=on;da=c,(on=i)&&!g?ja(n,o,(o.subtreeFlags&8772)!==0):Ya(n,o),da=p,on=g}break;case 30:break;default:Ya(n,o)}}function H0(n){var i=n.alternate;i!==null&&(n.alternate=null,H0(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Pa(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Jt=null,Jn=!1;function pa(n,i,o){for(o=o.child;o!==null;)V0(n,i,o),o=o.sibling}function V0(n,i,o){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(ye,o)}catch{}switch(o.tag){case 26:on||Gi(o,i),pa(n,i,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:on||Gi(o,i);var c=Jt,p=Jn;es(o.type)&&(Jt=o.stateNode,Jn=!1),pa(n,i,o),tl(o.stateNode),Jt=c,Jn=p;break;case 5:on||Gi(o,i);case 6:if(c=Jt,p=Jn,Jt=null,pa(n,i,o),Jt=c,Jn=p,Jt!==null)if(Jn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(o.stateNode)}catch(g){jt(o,i,g)}else try{Jt.removeChild(o.stateNode)}catch(g){jt(o,i,g)}break;case 18:Jt!==null&&(Jn?(n=Jt,C_(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),cl(n)):C_(Jt,o.stateNode));break;case 4:c=Jt,p=Jn,Jt=o.stateNode.containerInfo,Jn=!0,pa(n,i,o),Jt=c,Jn=p;break;case 0:case 11:case 14:case 15:on||qa(2,o,i),on||qa(4,o,i),pa(n,i,o);break;case 1:on||(Gi(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"&&O0(o,i,c)),pa(n,i,o);break;case 21:pa(n,i,o);break;case 22:on=(c=on)||o.memoizedState!==null,pa(n,i,o),on=c;break;default:pa(n,i,o)}}function G0(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{cl(n)}catch(o){jt(i,i.return,o)}}function FS(n){switch(n.tag){case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new z0),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new z0),i;default:throw Error(a(435,n.tag))}}function Mh(n,i){var o=FS(n);i.forEach(function(c){var p=jS.bind(null,n,c);o.has(c)||(o.add(c),c.then(p,p))})}function ai(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var p=o[c],g=n,E=i,L=E;e:for(;L!==null;){switch(L.tag){case 27:if(es(L.type)){Jt=L.stateNode,Jn=!1;break e}break;case 5:Jt=L.stateNode,Jn=!1;break e;case 3:case 4:Jt=L.stateNode.containerInfo,Jn=!0;break e}L=L.return}if(Jt===null)throw Error(a(160));V0(g,E,p),Jt=null,Jn=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)k0(i,n),i=i.sibling}var Ai=null;function k0(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:ai(i,n),si(n),c&4&&(qa(3,n,n.return),Xo(3,n),qa(5,n,n.return));break;case 1:ai(i,n),si(n),c&512&&(on||o===null||Gi(o,o.return)),c&64&&da&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var p=Ai;if(ai(i,n),si(n),c&512&&(on||o===null||Gi(o,o.return)),c&4){var g=o!==null?o.memoizedState:null;if(c=n.memoizedState,o===null)if(c===null)if(n.stateNode===null){e:{c=n.type,o=n.memoizedProps,p=p.ownerDocument||p;t:switch(c){case"title":g=p.getElementsByTagName("title")[0],(!g||g[Oa]||g[dn]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(c),p.head.insertBefore(g,p.querySelector("head > title"))),In(g,c,o),g[dn]=n,ln(g),c=g;break e;case"link":var E=B_("link","href",p).get(c+(o.href||""));if(E){for(var L=0;L<E.length;L++)if(g=E[L],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(L,1);break t}}g=p.createElement(c),In(g,c,o),p.head.appendChild(g);break;case"meta":if(E=B_("meta","content",p).get(c+(o.content||""))){for(L=0;L<E.length;L++)if(g=E[L],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(L,1);break t}}g=p.createElement(c),In(g,c,o),p.head.appendChild(g);break;default:throw Error(a(468,c))}g[dn]=n,ln(g),c=g}n.stateNode=c}else z_(p,n.type,n.stateNode);else n.stateNode=I_(p,c,n.memoizedProps);else g!==c?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,c===null?z_(p,n.type,n.stateNode):I_(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&vh(n,n.memoizedProps,o.memoizedProps)}break;case 27:ai(i,n),si(n),c&512&&(on||o===null||Gi(o,o.return)),o!==null&&c&4&&vh(n,n.memoizedProps,o.memoizedProps);break;case 5:if(ai(i,n),si(n),c&512&&(on||o===null||Gi(o,o.return)),n.flags&32){p=n.stateNode;try{Fi(p,"")}catch(oe){jt(n,n.return,oe)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,vh(n,p,o!==null?o.memoizedProps:p)),c&1024&&(Sh=!0);break;case 6:if(ai(i,n),si(n),c&4){if(n.stateNode===null)throw Error(a(162));c=n.memoizedProps,o=n.stateNode;try{o.nodeValue=c}catch(oe){jt(n,n.return,oe)}}break;case 3:if(kc=null,p=Ai,Ai=Vc(i.containerInfo),ai(i,n),Ai=p,si(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{cl(i.containerInfo)}catch(oe){jt(n,n.return,oe)}Sh&&(Sh=!1,W0(n));break;case 4:c=Ai,Ai=Vc(n.stateNode.containerInfo),ai(i,n),si(n),Ai=c;break;case 12:ai(i,n),si(n);break;case 13:ai(i,n),si(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Rh=ft()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Mh(n,c)));break;case 22:p=n.memoizedState!==null;var G=o!==null&&o.memoizedState!==null,ae=da,ve=on;if(da=ae||p,on=ve||G,ai(i,n),on=ve,da=ae,si(n),c&8192)e:for(i=n.stateNode,i._visibility=p?i._visibility&-2:i._visibility|1,p&&(o===null||G||da||on||Ps(n)),o=null,i=n;;){if(i.tag===5||i.tag===26){if(o===null){G=o=i;try{if(g=G.stateNode,p)E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{L=G.stateNode;var Ee=G.memoizedProps.style,re=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;L.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(oe){jt(G,G.return,oe)}}}else if(i.tag===6){if(o===null){G=i;try{G.stateNode.nodeValue=p?"":G.memoizedProps}catch(oe){jt(G,G.return,oe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;o===i&&(o=null),i=i.return}o===i&&(o=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=n.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,Mh(n,o))));break;case 19:ai(i,n),si(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,Mh(n,c)));break;case 30:break;case 21:break;default:ai(i,n),si(n)}}function si(n){var i=n.flags;if(i&2){try{for(var o,c=n.return;c!==null;){if(I0(c)){o=c;break}c=c.return}if(o==null)throw Error(a(160));switch(o.tag){case 27:var p=o.stateNode,g=yh(n);Rc(n,g,p);break;case 5:var E=o.stateNode;o.flags&32&&(Fi(E,""),o.flags&=-33);var L=yh(n);Rc(n,L,E);break;case 3:case 4:var G=o.stateNode.containerInfo,ae=yh(n);xh(n,ae,G);break;default:throw Error(a(161))}}catch(ve){jt(n,n.return,ve)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function W0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;W0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function Ya(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)F0(n,i.alternate,i),i=i.sibling}function Ps(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:qa(4,i,i.return),Ps(i);break;case 1:Gi(i,i.return);var o=i.stateNode;typeof o.componentWillUnmount=="function"&&O0(i,i.return,o),Ps(i);break;case 27:tl(i.stateNode);case 26:case 5:Gi(i,i.return),Ps(i);break;case 22:i.memoizedState===null&&Ps(i);break;case 30:Ps(i);break;default:Ps(i)}n=n.sibling}}function ja(n,i,o){for(o=o&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,p=n,g=i,E=g.flags;switch(g.tag){case 0:case 11:case 15:ja(p,g,o),Xo(4,g);break;case 1:if(ja(p,g,o),c=g,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(ae){jt(c,c.return,ae)}if(c=g,p=c.updateQueue,p!==null){var L=c.stateNode;try{var G=p.shared.hiddenCallbacks;if(G!==null)for(p.shared.hiddenCallbacks=null,p=0;p<G.length;p++)yg(G[p],L)}catch(ae){jt(c,c.return,ae)}}o&&E&64&&N0(g),qo(g,g.return);break;case 27:B0(g);case 26:case 5:ja(p,g,o),o&&c===null&&E&4&&P0(g),qo(g,g.return);break;case 12:ja(p,g,o);break;case 13:ja(p,g,o),o&&E&4&&G0(p,g);break;case 22:g.memoizedState===null&&ja(p,g,o),qo(g,g.return);break;case 30:break;default:ja(p,g,o)}i=i.sibling}}function Eh(n,i){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Lo(o))}function Th(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Lo(n))}function ki(n,i,o,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)X0(n,i,o,c),i=i.sibling}function X0(n,i,o,c){var p=i.flags;switch(i.tag){case 0:case 11:case 15:ki(n,i,o,c),p&2048&&Xo(9,i);break;case 1:ki(n,i,o,c);break;case 3:ki(n,i,o,c),p&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Lo(n)));break;case 12:if(p&2048){ki(n,i,o,c),n=i.stateNode;try{var g=i.memoizedProps,E=g.id,L=g.onPostCommit;typeof L=="function"&&L(E,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(G){jt(i,i.return,G)}}else ki(n,i,o,c);break;case 13:ki(n,i,o,c);break;case 23:break;case 22:g=i.stateNode,E=i.alternate,i.memoizedState!==null?g._visibility&2?ki(n,i,o,c):Yo(n,i):g._visibility&2?ki(n,i,o,c):(g._visibility|=2,vr(n,i,o,c,(i.subtreeFlags&10256)!==0)),p&2048&&Eh(E,i);break;case 24:ki(n,i,o,c),p&2048&&Th(i.alternate,i);break;default:ki(n,i,o,c)}}function vr(n,i,o,c,p){for(p=p&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var g=n,E=i,L=o,G=c,ae=E.flags;switch(E.tag){case 0:case 11:case 15:vr(g,E,L,G,p),Xo(8,E);break;case 23:break;case 22:var ve=E.stateNode;E.memoizedState!==null?ve._visibility&2?vr(g,E,L,G,p):Yo(g,E):(ve._visibility|=2,vr(g,E,L,G,p)),p&&ae&2048&&Eh(E.alternate,E);break;case 24:vr(g,E,L,G,p),p&&ae&2048&&Th(E.alternate,E);break;default:vr(g,E,L,G,p)}i=i.sibling}}function Yo(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var o=n,c=i,p=c.flags;switch(c.tag){case 22:Yo(o,c),p&2048&&Eh(c.alternate,c);break;case 24:Yo(o,c),p&2048&&Th(c.alternate,c);break;default:Yo(o,c)}i=i.sibling}}var jo=8192;function yr(n){if(n.subtreeFlags&jo)for(n=n.child;n!==null;)q0(n),n=n.sibling}function q0(n){switch(n.tag){case 26:yr(n),n.flags&jo&&n.memoizedState!==null&&TM(Ai,n.memoizedState,n.memoizedProps);break;case 5:yr(n);break;case 3:case 4:var i=Ai;Ai=Vc(n.stateNode.containerInfo),yr(n),Ai=i;break;case 22:n.memoizedState===null&&(i=n.alternate,i!==null&&i.memoizedState!==null?(i=jo,jo=16777216,yr(n),jo=i):yr(n));break;default:yr(n)}}function Y0(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function Ko(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var c=i[o];An=c,K0(c,n)}Y0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)j0(n),n=n.sibling}function j0(n){switch(n.tag){case 0:case 11:case 15:Ko(n),n.flags&2048&&qa(9,n,n.return);break;case 3:Ko(n);break;case 12:Ko(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Cc(n)):Ko(n);break;default:Ko(n)}}function Cc(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var o=0;o<i.length;o++){var c=i[o];An=c,K0(c,n)}Y0(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:qa(8,i,i.return),Cc(i);break;case 22:o=i.stateNode,o._visibility&2&&(o._visibility&=-3,Cc(i));break;default:Cc(i)}n=n.sibling}}function K0(n,i){for(;An!==null;){var o=An;switch(o.tag){case 0:case 11:case 15:qa(8,o,i);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Lo(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,An=c;else e:for(o=n;An!==null;){c=An;var p=c.sibling,g=c.return;if(H0(c),c===o){An=null;break e}if(p!==null){p.return=g,An=p;break e}An=g}}}var HS={getCacheForType:function(n){var i=zn(mn),o=i.data.get(n);return o===void 0&&(o=n(),i.data.set(n,o)),o}},VS=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Zt=null,Mt=null,wt=0,Ht=0,ri=null,Ka=!1,xr=!1,bh=!1,ma=0,nn=0,Za=0,Is=0,Ah=0,vi=0,Sr=0,Zo=null,$n=null,wh=!1,Rh=0,Dc=1/0,Lc=null,Qa=null,Pn=0,Ja=null,Mr=null,Er=0,Ch=0,Dh=null,Z0=null,Qo=0,Lh=null;function oi(){if((Ft&2)!==0&&wt!==0)return wt&-wt;if(O.T!==null){var n=ur;return n!==0?n:zh()}return Dt()}function Q0(){vi===0&&(vi=(wt&536870912)===0||Nt?j():536870912);var n=_i.current;return n!==null&&(n.flags|=32),vi}function li(n,i,o){(n===Zt&&(Ht===2||Ht===9)||n.cancelPendingCommit!==null)&&(Tr(n,0),$a(n,wt,vi,!1)),Fe(n,o),((Ft&2)===0||n!==Zt)&&(n===Zt&&((Ft&2)===0&&(Is|=o),nn===4&&$a(n,wt,vi,!1)),Wi(n))}function J0(n,i,o){if((Ft&6)!==0)throw Error(a(327));var c=!o&&(i&124)===0&&(i&n.expiredLanes)===0||De(n,i),p=c?WS(n,i):Oh(n,i,!0),g=c;do{if(p===0){xr&&!c&&$a(n,i,0,!1);break}else{if(o=n.current.alternate,g&&!GS(o)){p=Oh(n,i,!1),g=!1;continue}if(p===2){if(g=i,n.errorRecoveryDisabledLanes&g)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var L=n;p=Zo;var G=L.current.memoizedState.isDehydrated;if(G&&(Tr(L,E).flags|=256),E=Oh(L,E,!1),E!==2){if(bh&&!G){L.errorRecoveryDisabledLanes|=g,Is|=g,p=4;break e}g=$n,$n=p,g!==null&&($n===null?$n=g:$n.push.apply($n,g))}p=E}if(g=!1,p!==2)continue}}if(p===1){Tr(n,0),$a(n,i,0,!0);break}e:{switch(c=n,g=p,g){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:$a(c,i,vi,!Ka);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(p=Rh+300-ft(),10<p)){if($a(c,i,vi,!Ka),Je(c,0,!0)!==0)break e;c.timeoutHandle=w_($0.bind(null,c,o,$n,Lc,wh,i,vi,Is,Sr,Ka,g,2,-0,0),p);break e}$0(c,o,$n,Lc,wh,i,vi,Is,Sr,Ka,g,0,-0,0)}}break}while(!0);Wi(n)}function $0(n,i,o,c,p,g,E,L,G,ae,ve,Ee,re,oe){if(n.timeoutHandle=-1,Ee=i.subtreeFlags,(Ee&8192||(Ee&16785408)===16785408)&&(al={stylesheets:null,count:0,unsuspend:EM},q0(i),Ee=bM(),Ee!==null)){n.cancelPendingCommit=Ee(r_.bind(null,n,i,g,o,c,p,E,L,G,ve,1,re,oe)),$a(n,g,E,!ae);return}r_(n,i,g,o,c,p,E,L,G)}function GS(n){for(var i=n;;){var o=i.tag;if((o===0||o===11||o===15)&&i.flags&16384&&(o=i.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var p=o[c],g=p.getSnapshot;p=p.value;try{if(!ni(g(),p))return!1}catch{return!1}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $a(n,i,o,c){i&=~Ah,i&=~Is,n.suspendedLanes|=i,n.pingedLanes&=~i,c&&(n.warmLanes|=i),c=n.expirationTimes;for(var p=i;0<p;){var g=31-Be(p),E=1<<g;c[g]=-1,p&=~E}o!==0&&Te(n,o,i)}function Uc(){return(Ft&6)===0?(Jo(0),!1):!0}function Uh(){if(Mt!==null){if(Ht===0)var n=Mt.return;else n=Mt,oa=Ds=null,Kf(n),gr=null,Go=0,n=Mt;for(;n!==null;)U0(n.alternate,n),n=n.return;Mt=null}}function Tr(n,i){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,rM(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Uh(),Zt=n,Mt=o=aa(n.current,null),wt=i,Ht=0,ri=null,Ka=!1,xr=De(n,i),bh=!1,Sr=vi=Ah=Is=Za=nn=0,$n=Zo=null,wh=!1,(i&8)!==0&&(i|=i&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=i;0<c;){var p=31-Be(c),g=1<<p;i|=n[p],c&=~g}return ma=i,ec(),o}function e_(n,i){yt=null,O.H=yc,i===No||i===cc?(i=_g(),Ht=3):i===pg?(i=_g(),Ht=4):Ht=i===v0?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ri=i,Mt===null&&(nn=1,Tc(n,di(i,n.current)))}function t_(){var n=O.H;return O.H=yc,n===null?yc:n}function n_(){var n=O.A;return O.A=HS,n}function Nh(){nn=4,Ka||(wt&4194048)!==wt&&_i.current!==null||(xr=!0),(Za&134217727)===0&&(Is&134217727)===0||Zt===null||$a(Zt,wt,vi,!1)}function Oh(n,i,o){var c=Ft;Ft|=2;var p=t_(),g=n_();(Zt!==n||wt!==i)&&(Lc=null,Tr(n,i)),i=!1;var E=nn;e:do try{if(Ht!==0&&Mt!==null){var L=Mt,G=ri;switch(Ht){case 8:Uh(),E=6;break e;case 3:case 2:case 9:case 6:_i.current===null&&(i=!0);var ae=Ht;if(Ht=0,ri=null,br(n,L,G,ae),o&&xr){E=0;break e}break;default:ae=Ht,Ht=0,ri=null,br(n,L,G,ae)}}kS(),E=nn;break}catch(ve){e_(n,ve)}while(!0);return i&&n.shellSuspendCounter++,oa=Ds=null,Ft=c,O.H=p,O.A=g,Mt===null&&(Zt=null,wt=0,ec()),E}function kS(){for(;Mt!==null;)i_(Mt)}function WS(n,i){var o=Ft;Ft|=2;var c=t_(),p=n_();Zt!==n||wt!==i?(Lc=null,Dc=ft()+500,Tr(n,i)):xr=De(n,i);e:do try{if(Ht!==0&&Mt!==null){i=Mt;var g=ri;t:switch(Ht){case 1:Ht=0,ri=null,br(n,i,g,1);break;case 2:case 9:if(mg(g)){Ht=0,ri=null,a_(i);break}i=function(){Ht!==2&&Ht!==9||Zt!==n||(Ht=7),Wi(n)},g.then(i,i);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:mg(g)?(Ht=0,ri=null,a_(i)):(Ht=0,ri=null,br(n,i,g,7));break;case 5:var E=null;switch(Mt.tag){case 26:E=Mt.memoizedState;case 5:case 27:var L=Mt;if(!E||F_(E)){Ht=0,ri=null;var G=L.sibling;if(G!==null)Mt=G;else{var ae=L.return;ae!==null?(Mt=ae,Nc(ae)):Mt=null}break t}}Ht=0,ri=null,br(n,i,g,5);break;case 6:Ht=0,ri=null,br(n,i,g,6);break;case 8:Uh(),nn=6;break e;default:throw Error(a(462))}}XS();break}catch(ve){e_(n,ve)}while(!0);return oa=Ds=null,O.H=c,O.A=p,Ft=o,Mt!==null?0:(Zt=null,wt=0,ec(),nn)}function XS(){for(;Mt!==null&&!Ot();)i_(Mt)}function i_(n){var i=D0(n.alternate,n,ma);n.memoizedProps=n.pendingProps,i===null?Nc(n):Mt=i}function a_(n){var i=n,o=i.alternate;switch(i.tag){case 15:case 0:i=T0(o,i,i.pendingProps,i.type,void 0,wt);break;case 11:i=T0(o,i,i.pendingProps,i.type.render,i.ref,wt);break;case 5:Kf(i);default:U0(o,i),i=Mt=sg(i,ma),i=D0(o,i,ma)}n.memoizedProps=n.pendingProps,i===null?Nc(n):Mt=i}function br(n,i,o,c){oa=Ds=null,Kf(i),gr=null,Go=0;var p=i.return;try{if(OS(n,p,i,o,wt)){nn=1,Tc(n,di(o,n.current)),Mt=null;return}}catch(g){if(p!==null)throw Mt=p,g;nn=1,Tc(n,di(o,n.current)),Mt=null;return}i.flags&32768?(Nt||c===1?n=!0:xr||(wt&536870912)!==0?n=!1:(Ka=n=!0,(c===2||c===9||c===3||c===6)&&(c=_i.current,c!==null&&c.tag===13&&(c.flags|=16384))),s_(i,n)):Nc(i)}function Nc(n){var i=n;do{if((i.flags&32768)!==0){s_(i,Ka);return}n=i.return;var o=IS(i.alternate,i,ma);if(o!==null){Mt=o;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=n}while(i!==null);nn===0&&(nn=5)}function s_(n,i){do{var o=BS(n.alternate,n);if(o!==null){o.flags&=32767,Mt=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!i&&(n=n.sibling,n!==null)){Mt=n;return}Mt=n=o}while(n!==null);nn=6,Mt=null}function r_(n,i,o,c,p,g,E,L,G){n.cancelPendingCommit=null;do Oc();while(Pn!==0);if((Ft&6)!==0)throw Error(a(327));if(i!==null){if(i===n.current)throw Error(a(177));if(g=i.lanes|i.childLanes,g|=Tf,Re(n,o,g,E,L,G),n===Zt&&(Mt=Zt=null,wt=0),Mr=i,Ja=n,Er=o,Ch=g,Dh=p,Z0=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,KS(ot,function(){return f_(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=O.T,O.T=null,p=F.p,F.p=2,E=Ft,Ft|=4;try{zS(n,i,o)}finally{Ft=E,F.p=p,O.T=c}}Pn=1,o_(),l_(),c_()}}function o_(){if(Pn===1){Pn=0;var n=Ja,i=Mr,o=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||o){o=O.T,O.T=null;var c=F.p;F.p=2;var p=Ft;Ft|=4;try{k0(i,n);var g=qh,E=Km(n.containerInfo),L=g.focusedElem,G=g.selectionRange;if(E!==L&&L&&L.ownerDocument&&jm(L.ownerDocument.documentElement,L)){if(G!==null&&yf(L)){var ae=G.start,ve=G.end;if(ve===void 0&&(ve=ae),"selectionStart"in L)L.selectionStart=ae,L.selectionEnd=Math.min(ve,L.value.length);else{var Ee=L.ownerDocument||document,re=Ee&&Ee.defaultView||window;if(re.getSelection){var oe=re.getSelection(),lt=L.textContent.length,it=Math.min(G.start,lt),Xt=G.end===void 0?it:Math.min(G.end,lt);!oe.extend&&it>Xt&&(E=Xt,Xt=it,it=E);var Q=Ym(L,it),Y=Ym(L,Xt);if(Q&&Y&&(oe.rangeCount!==1||oe.anchorNode!==Q.node||oe.anchorOffset!==Q.offset||oe.focusNode!==Y.node||oe.focusOffset!==Y.offset)){var ne=Ee.createRange();ne.setStart(Q.node,Q.offset),oe.removeAllRanges(),it>Xt?(oe.addRange(ne),oe.extend(Y.node,Y.offset)):(ne.setEnd(Y.node,Y.offset),oe.addRange(ne))}}}}for(Ee=[],oe=L;oe=oe.parentNode;)oe.nodeType===1&&Ee.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof L.focus=="function"&&L.focus(),L=0;L<Ee.length;L++){var Se=Ee[L];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}qc=!!Xh,qh=Xh=null}finally{Ft=p,F.p=c,O.T=o}}n.current=i,Pn=2}}function l_(){if(Pn===2){Pn=0;var n=Ja,i=Mr,o=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||o){o=O.T,O.T=null;var c=F.p;F.p=2;var p=Ft;Ft|=4;try{F0(n,i.alternate,i)}finally{Ft=p,F.p=c,O.T=o}}Pn=3}}function c_(){if(Pn===4||Pn===3){Pn=0,pt();var n=Ja,i=Mr,o=Er,c=Z0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Pn=5:(Pn=0,Mr=Ja=null,u_(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(Qa=null),zt(o),i=i.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(ye,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=O.T,p=F.p,F.p=2,O.T=null;try{for(var g=n.onRecoverableError,E=0;E<c.length;E++){var L=c[E];g(L.value,{componentStack:L.stack})}}finally{O.T=i,F.p=p}}(Er&3)!==0&&Oc(),Wi(n),p=n.pendingLanes,(o&4194090)!==0&&(p&42)!==0?n===Lh?Qo++:(Qo=0,Lh=n):Qo=0,Jo(0)}}function u_(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Lo(i)))}function Oc(n){return o_(),l_(),c_(),f_()}function f_(){if(Pn!==5)return!1;var n=Ja,i=Ch;Ch=0;var o=zt(Er),c=O.T,p=F.p;try{F.p=32>o?32:o,O.T=null,o=Dh,Dh=null;var g=Ja,E=Er;if(Pn=0,Mr=Ja=null,Er=0,(Ft&6)!==0)throw Error(a(331));var L=Ft;if(Ft|=4,j0(g.current),X0(g,g.current,E,o),Ft=L,Jo(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(ye,g)}catch{}return!0}finally{F.p=p,O.T=c,u_(n,i)}}function h_(n,i,o){i=di(o,i),i=ch(n.stateNode,i,2),n=Ga(n,i,2),n!==null&&(Fe(n,2),Wi(n))}function jt(n,i,o){if(n.tag===3)h_(n,n,o);else for(;i!==null;){if(i.tag===3){h_(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Qa===null||!Qa.has(c))){n=di(o,n),o=g0(2),c=Ga(i,o,2),c!==null&&(_0(o,c,i,n),Fe(c,2),Wi(c));break}}i=i.return}}function Ph(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new VS;var p=new Set;c.set(i,p)}else p=c.get(i),p===void 0&&(p=new Set,c.set(i,p));p.has(o)||(bh=!0,p.add(o),n=qS.bind(null,n,i,o),i.then(n,n))}function qS(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Zt===n&&(wt&o)===o&&(nn===4||nn===3&&(wt&62914560)===wt&&300>ft()-Rh?(Ft&2)===0&&Tr(n,0):Ah|=o,Sr===wt&&(Sr=0)),Wi(n)}function d_(n,i){i===0&&(i=Oe()),n=rr(n,i),n!==null&&(Fe(n,i),Wi(n))}function YS(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),d_(n,o)}function jS(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),d_(n,o)}function KS(n,i){return nt(n,i)}var Pc=null,Ar=null,Ih=!1,Ic=!1,Bh=!1,Bs=0;function Wi(n){n!==Ar&&n.next===null&&(Ar===null?Pc=Ar=n:Ar=Ar.next=n),Ic=!0,Ih||(Ih=!0,QS())}function Jo(n,i){if(!Bh&&Ic){Bh=!0;do for(var o=!1,c=Pc;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var g=0;else{var E=c.suspendedLanes,L=c.pingedLanes;g=(1<<31-Be(42|n)+1)-1,g&=p&~(E&~L),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,__(c,g))}else g=wt,g=Je(c,c===Zt?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||De(c,g)||(o=!0,__(c,g));c=c.next}while(o);Bh=!1}}function ZS(){p_()}function p_(){Ic=Ih=!1;var n=0;Bs!==0&&(sM()&&(n=Bs),Bs=0);for(var i=ft(),o=null,c=Pc;c!==null;){var p=c.next,g=m_(c,i);g===0?(c.next=null,o===null?Pc=p:o.next=p,p===null&&(Ar=o)):(o=c,(n!==0||(g&3)!==0)&&(Ic=!0)),c=p}Jo(n)}function m_(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var E=31-Be(g),L=1<<E,G=p[E];G===-1?((L&o)===0||(L&c)!==0)&&(p[E]=ut(L,i)):G<=i&&(n.expiredLanes|=L),g&=~L}if(i=Zt,o=wt,o=Je(n,n===i?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,o===0||n===i&&(Ht===2||Ht===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&W(c),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||De(n,o)){if(i=o&-o,i===n.callbackPriority)return i;switch(c!==null&&W(c),zt(o)){case 2:case 8:o=Qe;break;case 32:o=ot;break;case 268435456:o=z;break;default:o=ot}return c=g_.bind(null,n),o=nt(o,c),n.callbackPriority=i,n.callbackNode=o,i}return c!==null&&c!==null&&W(c),n.callbackPriority=2,n.callbackNode=null,2}function g_(n,i){if(Pn!==0&&Pn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Oc()&&n.callbackNode!==o)return null;var c=wt;return c=Je(n,n===Zt?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(J0(n,c,i),m_(n,ft()),n.callbackNode!=null&&n.callbackNode===o?g_.bind(null,n):null)}function __(n,i){if(Oc())return null;J0(n,i,!0)}function QS(){oM(function(){(Ft&6)!==0?nt(dt,ZS):p_()})}function zh(){return Bs===0&&(Bs=j()),Bs}function v_(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Yl(""+n)}function y_(n,i){var o=i.ownerDocument.createElement("input");return o.name=i.name,o.value=i.value,n.id&&o.setAttribute("form",n.id),i.parentNode.insertBefore(o,i),n=new FormData(n),o.parentNode.removeChild(o),n}function JS(n,i,o,c,p){if(i==="submit"&&o&&o.stateNode===p){var g=v_((p[Un]||null).action),E=c.submitter;E&&(i=(i=E[Un]||null)?v_(i.formAction):E.getAttribute("formAction"),i!==null&&(g=i,E=null));var L=new Ql("action","action",null,c,p);n.push({event:L,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Bs!==0){var G=E?y_(p,E):new FormData(p);ah(o,{pending:!0,data:G,method:p.method,action:g},null,G)}}else typeof g=="function"&&(L.preventDefault(),G=E?y_(p,E):new FormData(p),ah(o,{pending:!0,data:G,method:p.method,action:g},g,G))},currentTarget:p}]})}}for(var Fh=0;Fh<Ef.length;Fh++){var Hh=Ef[Fh],$S=Hh.toLowerCase(),eM=Hh[0].toUpperCase()+Hh.slice(1);bi($S,"on"+eM)}bi(Jm,"onAnimationEnd"),bi($m,"onAnimationIteration"),bi(eg,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(_S,"onTransitionRun"),bi(vS,"onTransitionStart"),bi(yS,"onTransitionCancel"),bi(tg,"onTransitionEnd"),U("onMouseEnter",["mouseout","mouseover"]),U("onMouseLeave",["mouseout","mouseover"]),U("onPointerEnter",["pointerout","pointerover"]),U("onPointerLeave",["pointerout","pointerover"]),ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($o));function x_(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],p=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var L=c[E],G=L.instance,ae=L.currentTarget;if(L=L.listener,G!==g&&p.isPropagationStopped())break e;g=L,p.currentTarget=ae;try{g(p)}catch(ve){Ec(ve)}p.currentTarget=null,g=G}else for(E=0;E<c.length;E++){if(L=c[E],G=L.instance,ae=L.currentTarget,L=L.listener,G!==g&&p.isPropagationStopped())break e;g=L,p.currentTarget=ae;try{g(p)}catch(ve){Ec(ve)}p.currentTarget=null,g=G}}}}function Et(n,i){var o=i[ys];o===void 0&&(o=i[ys]=new Set);var c=n+"__bubble";o.has(c)||(S_(i,n,2,!1),o.add(c))}function Vh(n,i,o){var c=0;i&&(c|=4),S_(o,n,c,i)}var Bc="_reactListening"+Math.random().toString(36).slice(2);function Gh(n){if(!n[Bc]){n[Bc]=!0,Xl.forEach(function(o){o!=="selectionchange"&&(tM.has(o)||Vh(o,!1,n),Vh(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Bc]||(i[Bc]=!0,Vh("selectionchange",!1,i))}}function S_(n,i,o,c){switch(X_(i)){case 2:var p=RM;break;case 8:p=CM;break;default:p=nd}o=p.bind(null,i,o,n),p=void 0,!uf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(i,o,{capture:!0,passive:p}):n.addEventListener(i,o,!0):p!==void 0?n.addEventListener(i,o,{passive:p}):n.addEventListener(i,o,!1)}function kh(n,i,o,c,p){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var L=c.stateNode.containerInfo;if(L===p)break;if(E===4)for(E=c.return;E!==null;){var G=E.tag;if((G===3||G===4)&&E.stateNode.containerInfo===p)return;E=E.return}for(;L!==null;){if(E=Ji(L),E===null)return;if(G=E.tag,G===5||G===6||G===26||G===27){c=g=E;continue e}L=L.parentNode}}c=c.return}Rm(function(){var ae=g,ve=lf(o),Ee=[];e:{var re=ng.get(n);if(re!==void 0){var oe=Ql,lt=n;switch(n){case"keypress":if(Kl(o)===0)break e;case"keydown":case"keyup":oe=Kx;break;case"focusin":lt="focus",oe=pf;break;case"focusout":lt="blur",oe=pf;break;case"beforeblur":case"afterblur":oe=pf;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Lm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=Jx;break;case Jm:case $m:case eg:oe=Hx;break;case tg:oe=eS;break;case"scroll":case"scrollend":oe=Px;break;case"wheel":oe=nS;break;case"copy":case"cut":case"paste":oe=Gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=Nm;break;case"toggle":case"beforetoggle":oe=aS}var it=(i&4)!==0,Xt=!it&&(n==="scroll"||n==="scrollend"),Q=it?re!==null?re+"Capture":null:re;it=[];for(var Y=ae,ne;Y!==null;){var Se=Y;if(ne=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||ne===null||Q===null||(Se=vo(Y,Q),Se!=null&&it.push(el(Y,Se,ne))),Xt)break;Y=Y.return}0<it.length&&(re=new oe(re,lt,null,o,ve),Ee.push({event:re,listeners:it}))}}if((i&7)===0){e:{if(re=n==="mouseover"||n==="pointerover",oe=n==="mouseout"||n==="pointerout",re&&o!==of&&(lt=o.relatedTarget||o.fromElement)&&(Ji(lt)||lt[Kn]))break e;if((oe||re)&&(re=ve.window===ve?ve:(re=ve.ownerDocument)?re.defaultView||re.parentWindow:window,oe?(lt=o.relatedTarget||o.toElement,oe=ae,lt=lt?Ji(lt):null,lt!==null&&(Xt=l(lt),it=lt.tag,lt!==Xt||it!==5&&it!==27&&it!==6)&&(lt=null)):(oe=null,lt=ae),oe!==lt)){if(it=Lm,Se="onMouseLeave",Q="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(it=Nm,Se="onPointerLeave",Q="onPointerEnter",Y="pointer"),Xt=oe==null?re:Ss(oe),ne=lt==null?re:Ss(lt),re=new it(Se,Y+"leave",oe,o,ve),re.target=Xt,re.relatedTarget=ne,Se=null,Ji(ve)===ae&&(it=new it(Q,Y+"enter",lt,o,ve),it.target=ne,it.relatedTarget=Xt,Se=it),Xt=Se,oe&&lt)t:{for(it=oe,Q=lt,Y=0,ne=it;ne;ne=wr(ne))Y++;for(ne=0,Se=Q;Se;Se=wr(Se))ne++;for(;0<Y-ne;)it=wr(it),Y--;for(;0<ne-Y;)Q=wr(Q),ne--;for(;Y--;){if(it===Q||Q!==null&&it===Q.alternate)break t;it=wr(it),Q=wr(Q)}it=null}else it=null;oe!==null&&M_(Ee,re,oe,it,!1),lt!==null&&Xt!==null&&M_(Ee,Xt,lt,it,!0)}}e:{if(re=ae?Ss(ae):window,oe=re.nodeName&&re.nodeName.toLowerCase(),oe==="select"||oe==="input"&&re.type==="file")var ke=Vm;else if(Fm(re))if(Gm)ke=pS;else{ke=hS;var St=fS}else oe=re.nodeName,!oe||oe.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?ae&&rf(ae.elementType)&&(ke=Vm):ke=dS;if(ke&&(ke=ke(n,ae))){Hm(Ee,ke,o,ve);break e}St&&St(n,re,ae),n==="focusout"&&ae&&re.type==="number"&&ae.memoizedProps.value!=null&&Bn(re,"number",re.value)}switch(St=ae?Ss(ae):window,n){case"focusin":(Fm(St)||St.contentEditable==="true")&&(ir=St,xf=ae,Ao=null);break;case"focusout":Ao=xf=ir=null;break;case"mousedown":Sf=!0;break;case"contextmenu":case"mouseup":case"dragend":Sf=!1,Zm(Ee,o,ve);break;case"selectionchange":if(gS)break;case"keydown":case"keyup":Zm(Ee,o,ve)}var Ke;if(gf)e:{switch(n){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else nr?Bm(n,o)&&(st="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(st="onCompositionStart");st&&(Om&&o.locale!=="ko"&&(nr||st!=="onCompositionStart"?st==="onCompositionEnd"&&nr&&(Ke=Cm()):(za=ve,ff="value"in za?za.value:za.textContent,nr=!0)),St=zc(ae,st),0<St.length&&(st=new Um(st,n,null,o,ve),Ee.push({event:st,listeners:St}),Ke?st.data=Ke:(Ke=zm(o),Ke!==null&&(st.data=Ke)))),(Ke=rS?oS(n,o):lS(n,o))&&(st=zc(ae,"onBeforeInput"),0<st.length&&(St=new Um("onBeforeInput","beforeinput",null,o,ve),Ee.push({event:St,listeners:st}),St.data=Ke)),JS(Ee,n,ae,o,ve)}x_(Ee,i)})}function el(n,i,o){return{instance:n,listener:i,currentTarget:o}}function zc(n,i){for(var o=i+"Capture",c=[];n!==null;){var p=n,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=vo(n,o),p!=null&&c.unshift(el(n,p,g)),p=vo(n,i),p!=null&&c.push(el(n,p,g))),n.tag===3)return c;n=n.return}return[]}function wr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function M_(n,i,o,c,p){for(var g=i._reactName,E=[];o!==null&&o!==c;){var L=o,G=L.alternate,ae=L.stateNode;if(L=L.tag,G!==null&&G===c)break;L!==5&&L!==26&&L!==27||ae===null||(G=ae,p?(ae=vo(o,g),ae!=null&&E.unshift(el(o,ae,G))):p||(ae=vo(o,g),ae!=null&&E.push(el(o,ae,G)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var nM=/\r\n?/g,iM=/\u0000|\uFFFD/g;function E_(n){return(typeof n=="string"?n:""+n).replace(nM,`
`).replace(iM,"")}function T_(n,i){return i=E_(i),E_(n)===i}function Fc(){}function Wt(n,i,o,c,p,g){switch(o){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||Fi(n,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&Fi(n,""+c);break;case"className":Le(n,"class",c);break;case"tabIndex":Le(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(n,o,c);break;case"style":Am(n,c,g);break;case"data":if(i!=="object"){Le(n,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||o!=="href")){n.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Yl(""+c),n.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(i!=="input"&&Wt(n,i,"name",p.name,p,null),Wt(n,i,"formEncType",p.formEncType,p,null),Wt(n,i,"formMethod",p.formMethod,p,null),Wt(n,i,"formTarget",p.formTarget,p,null)):(Wt(n,i,"encType",p.encType,p,null),Wt(n,i,"method",p.method,p,null),Wt(n,i,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=Yl(""+c),n.setAttribute(o,c);break;case"onClick":c!=null&&(n.onclick=Fc);break;case"onScroll":c!=null&&Et("scroll",n);break;case"onScrollEnd":c!=null&&Et("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(o=c.__html,o!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=o}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}o=Yl(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""+c):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":c===!0?n.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,c):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(o,c):n.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(o):n.setAttribute(o,c);break;case"popover":Et("beforetoggle",n),Et("toggle",n),we(n,"popover",c);break;case"xlinkActuate":Ie(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Ie(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Ie(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Ie(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Ie(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Ie(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Ie(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Ie(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Ie(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":we(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Nx.get(o)||o,we(n,o,c))}}function Wh(n,i,o,c,p,g){switch(o){case"style":Am(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(o=c.__html,o!=null){if(p.children!=null)throw Error(a(60));n.innerHTML=o}}break;case"children":typeof c=="string"?Fi(n,c):(typeof c=="number"||typeof c=="bigint")&&Fi(n,""+c);break;case"onScroll":c!=null&&Et("scroll",n);break;case"onScrollEnd":c!=null&&Et("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Fc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ql.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),i=o.slice(2,p?o.length-7:void 0),g=n[Un]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(i,g,p),typeof c=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(i,c,p);break e}o in n?n[o]=c:c===!0?n.setAttribute(o,""):we(n,o,c)}}}function In(n,i,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",n),Et("load",n);var c=!1,p=!1,g;for(g in o)if(o.hasOwnProperty(g)){var E=o[g];if(E!=null)switch(g){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(n,i,g,E,o,null)}}p&&Wt(n,i,"srcSet",o.srcSet,o,null),c&&Wt(n,i,"src",o.src,o,null);return;case"input":Et("invalid",n);var L=g=E=p=null,G=null,ae=null;for(c in o)if(o.hasOwnProperty(c)){var ve=o[c];if(ve!=null)switch(c){case"name":p=ve;break;case"type":E=ve;break;case"checked":G=ve;break;case"defaultChecked":ae=ve;break;case"value":g=ve;break;case"defaultValue":L=ve;break;case"children":case"dangerouslySetInnerHTML":if(ve!=null)throw Error(a(137,i));break;default:Wt(n,i,c,ve,o,null)}}Yt(n,g,L,G,ae,E,p,!1),Gt(n);return;case"select":Et("invalid",n),c=E=g=null;for(p in o)if(o.hasOwnProperty(p)&&(L=o[p],L!=null))switch(p){case"value":g=L;break;case"defaultValue":E=L;break;case"multiple":c=L;default:Wt(n,i,p,L,o,null)}i=g,o=E,n.multiple=!!c,i!=null?pn(n,!!c,i,!1):o!=null&&pn(n,!!c,o,!0);return;case"textarea":Et("invalid",n),g=p=c=null;for(E in o)if(o.hasOwnProperty(E)&&(L=o[E],L!=null))switch(E){case"value":c=L;break;case"defaultValue":p=L;break;case"children":g=L;break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(91));break;default:Wt(n,i,E,L,o,null)}Nn(n,c,p,g),Gt(n);return;case"option":for(G in o)if(o.hasOwnProperty(G)&&(c=o[G],c!=null))switch(G){case"selected":n.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:Wt(n,i,G,c,o,null)}return;case"dialog":Et("beforetoggle",n),Et("toggle",n),Et("cancel",n),Et("close",n);break;case"iframe":case"object":Et("load",n);break;case"video":case"audio":for(c=0;c<$o.length;c++)Et($o[c],n);break;case"image":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"embed":case"source":case"link":Et("error",n),Et("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in o)if(o.hasOwnProperty(ae)&&(c=o[ae],c!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Wt(n,i,ae,c,o,null)}return;default:if(rf(i)){for(ve in o)o.hasOwnProperty(ve)&&(c=o[ve],c!==void 0&&Wh(n,i,ve,c,o,void 0));return}}for(L in o)o.hasOwnProperty(L)&&(c=o[L],c!=null&&Wt(n,i,L,c,o,null))}function aM(n,i,o,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,E=null,L=null,G=null,ae=null,ve=null;for(oe in o){var Ee=o[oe];if(o.hasOwnProperty(oe)&&Ee!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":G=Ee;default:c.hasOwnProperty(oe)||Wt(n,i,oe,null,c,Ee)}}for(var re in c){var oe=c[re];if(Ee=o[re],c.hasOwnProperty(re)&&(oe!=null||Ee!=null))switch(re){case"type":g=oe;break;case"name":p=oe;break;case"checked":ae=oe;break;case"defaultChecked":ve=oe;break;case"value":E=oe;break;case"defaultValue":L=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(a(137,i));break;default:oe!==Ee&&Wt(n,i,re,oe,c,Ee)}}ta(n,E,L,G,ae,ve,g,p);return;case"select":oe=E=L=re=null;for(g in o)if(G=o[g],o.hasOwnProperty(g)&&G!=null)switch(g){case"value":break;case"multiple":oe=G;default:c.hasOwnProperty(g)||Wt(n,i,g,null,c,G)}for(p in c)if(g=c[p],G=o[p],c.hasOwnProperty(p)&&(g!=null||G!=null))switch(p){case"value":re=g;break;case"defaultValue":L=g;break;case"multiple":E=g;default:g!==G&&Wt(n,i,p,g,c,G)}i=L,o=E,c=oe,re!=null?pn(n,!!o,re,!1):!!c!=!!o&&(i!=null?pn(n,!!o,i,!0):pn(n,!!o,o?[]:"",!1));return;case"textarea":oe=re=null;for(L in o)if(p=o[L],o.hasOwnProperty(L)&&p!=null&&!c.hasOwnProperty(L))switch(L){case"value":break;case"children":break;default:Wt(n,i,L,null,c,p)}for(E in c)if(p=c[E],g=o[E],c.hasOwnProperty(E)&&(p!=null||g!=null))switch(E){case"value":re=p;break;case"defaultValue":oe=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==g&&Wt(n,i,E,p,c,g)}Tn(n,re,oe);return;case"option":for(var lt in o)if(re=o[lt],o.hasOwnProperty(lt)&&re!=null&&!c.hasOwnProperty(lt))switch(lt){case"selected":n.selected=!1;break;default:Wt(n,i,lt,null,c,re)}for(G in c)if(re=c[G],oe=o[G],c.hasOwnProperty(G)&&re!==oe&&(re!=null||oe!=null))switch(G){case"selected":n.selected=re&&typeof re!="function"&&typeof re!="symbol";break;default:Wt(n,i,G,re,c,oe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in o)re=o[it],o.hasOwnProperty(it)&&re!=null&&!c.hasOwnProperty(it)&&Wt(n,i,it,null,c,re);for(ae in c)if(re=c[ae],oe=o[ae],c.hasOwnProperty(ae)&&re!==oe&&(re!=null||oe!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(a(137,i));break;default:Wt(n,i,ae,re,c,oe)}return;default:if(rf(i)){for(var Xt in o)re=o[Xt],o.hasOwnProperty(Xt)&&re!==void 0&&!c.hasOwnProperty(Xt)&&Wh(n,i,Xt,void 0,c,re);for(ve in c)re=c[ve],oe=o[ve],!c.hasOwnProperty(ve)||re===oe||re===void 0&&oe===void 0||Wh(n,i,ve,re,c,oe);return}}for(var Q in o)re=o[Q],o.hasOwnProperty(Q)&&re!=null&&!c.hasOwnProperty(Q)&&Wt(n,i,Q,null,c,re);for(Ee in c)re=c[Ee],oe=o[Ee],!c.hasOwnProperty(Ee)||re===oe||re==null&&oe==null||Wt(n,i,Ee,re,c,oe)}var Xh=null,qh=null;function Hc(n){return n.nodeType===9?n:n.ownerDocument}function b_(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Yh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var jh=null;function sM(){var n=window.event;return n&&n.type==="popstate"?n===jh?!1:(jh=n,!0):(jh=null,!1)}var w_=typeof setTimeout=="function"?setTimeout:void 0,rM=typeof clearTimeout=="function"?clearTimeout:void 0,R_=typeof Promise=="function"?Promise:void 0,oM=typeof queueMicrotask=="function"?queueMicrotask:typeof R_<"u"?function(n){return R_.resolve(null).then(n).catch(lM)}:w_;function lM(n){setTimeout(function(){throw n})}function es(n){return n==="head"}function C_(n,i){var o=i,c=0,p=0;do{var g=o.nextSibling;if(n.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<c&&8>c){o=c;var E=n.ownerDocument;if(o&1&&tl(E.documentElement),o&2&&tl(E.body),o&4)for(o=E.head,tl(o),E=o.firstChild;E;){var L=E.nextSibling,G=E.nodeName;E[Oa]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=L}}if(p===0){n.removeChild(g),cl(i);return}p--}else o==="$"||o==="$?"||o==="$!"?p++:c=o.charCodeAt(0)-48;else c=0;o=g}while(o);cl(i)}function Kh(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var o=i;switch(i=i.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Kh(o),Pa(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function cM(n,i,o,c){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[Oa])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=wi(n.nextSibling),n===null)break}return null}function uM(n,i,o){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=wi(n.nextSibling),n===null))return null;return n}function Zh(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function fM(n,i){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")i();else{var c=function(){i(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function wi(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return n}var Qh=null;function D_(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}function L_(n,i,o){switch(i=Hc(o),n){case"html":if(n=i.documentElement,!n)throw Error(a(452));return n;case"head":if(n=i.head,!n)throw Error(a(453));return n;case"body":if(n=i.body,!n)throw Error(a(454));return n;default:throw Error(a(451))}}function tl(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Pa(n)}var yi=new Map,U_=new Set;function Vc(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ga=F.d;F.d={f:hM,r:dM,D:pM,C:mM,L:gM,m:_M,X:yM,S:vM,M:xM};function hM(){var n=ga.f(),i=Uc();return n||i}function dM(n){var i=$i(n);i!==null&&i.tag===5&&i.type==="form"?Jg(i):ga.r(n)}var Rr=typeof document>"u"?null:document;function N_(n,i,o){var c=Rr;if(c&&typeof i=="string"&&i){var p=Kt(i);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),U_.has(p)||(U_.add(p),n={rel:n,crossOrigin:o,href:i},c.querySelector(p)===null&&(i=c.createElement("link"),In(i,"link",n),ln(i),c.head.appendChild(i)))}}function pM(n){ga.D(n),N_("dns-prefetch",n,null)}function mM(n,i){ga.C(n,i),N_("preconnect",n,i)}function gM(n,i,o){ga.L(n,i,o);var c=Rr;if(c&&n&&i){var p='link[rel="preload"][as="'+Kt(i)+'"]';i==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+Kt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+Kt(o.imageSizes)+'"]')):p+='[href="'+Kt(n)+'"]';var g=p;switch(i){case"style":g=Cr(n);break;case"script":g=Dr(n)}yi.has(g)||(n=m({rel:"preload",href:i==="image"&&o&&o.imageSrcSet?void 0:n,as:i},o),yi.set(g,n),c.querySelector(p)!==null||i==="style"&&c.querySelector(nl(g))||i==="script"&&c.querySelector(il(g))||(i=c.createElement("link"),In(i,"link",n),ln(i),c.head.appendChild(i)))}}function _M(n,i){ga.m(n,i);var o=Rr;if(o&&n){var c=i&&typeof i.as=="string"?i.as:"script",p='link[rel="modulepreload"][as="'+Kt(c)+'"][href="'+Kt(n)+'"]',g=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Dr(n)}if(!yi.has(g)&&(n=m({rel:"modulepreload",href:n},i),yi.set(g,n),o.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(il(g)))return}c=o.createElement("link"),In(c,"link",n),ln(c),o.head.appendChild(c)}}}function vM(n,i,o){ga.S(n,i,o);var c=Rr;if(c&&n){var p=Ia(c).hoistableStyles,g=Cr(n);i=i||"default";var E=p.get(g);if(!E){var L={loading:0,preload:null};if(E=c.querySelector(nl(g)))L.loading=5;else{n=m({rel:"stylesheet",href:n,"data-precedence":i},o),(o=yi.get(g))&&Jh(n,o);var G=E=c.createElement("link");ln(G),In(G,"link",n),G._p=new Promise(function(ae,ve){G.onload=ae,G.onerror=ve}),G.addEventListener("load",function(){L.loading|=1}),G.addEventListener("error",function(){L.loading|=2}),L.loading|=4,Gc(E,i,c)}E={type:"stylesheet",instance:E,count:1,state:L},p.set(g,E)}}}function yM(n,i){ga.X(n,i);var o=Rr;if(o&&n){var c=Ia(o).hoistableScripts,p=Dr(n),g=c.get(p);g||(g=o.querySelector(il(p)),g||(n=m({src:n,async:!0},i),(i=yi.get(p))&&$h(n,i),g=o.createElement("script"),ln(g),In(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function xM(n,i){ga.M(n,i);var o=Rr;if(o&&n){var c=Ia(o).hoistableScripts,p=Dr(n),g=c.get(p);g||(g=o.querySelector(il(p)),g||(n=m({src:n,async:!0,type:"module"},i),(i=yi.get(p))&&$h(n,i),g=o.createElement("script"),ln(g),In(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function O_(n,i,o,c){var p=(p=pe.current)?Vc(p):null;if(!p)throw Error(a(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(i=Cr(o.href),o=Ia(p).hoistableStyles,c=o.get(i),c||(c={type:"style",instance:null,count:0,state:null},o.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Cr(o.href);var g=Ia(p).hoistableStyles,E=g.get(n);if(E||(p=p.ownerDocument||p,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,E),(g=p.querySelector(nl(n)))&&!g._p&&(E.instance=g,E.state.loading=5),yi.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},yi.set(n,o),g||SM(p,n,o,E.state))),i&&c===null)throw Error(a(528,""));return E}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=o.async,o=o.src,typeof o=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Dr(o),o=Ia(p).hoistableScripts,c=o.get(i),c||(c={type:"script",instance:null,count:0,state:null},o.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,n))}}function Cr(n){return'href="'+Kt(n)+'"'}function nl(n){return'link[rel="stylesheet"]['+n+"]"}function P_(n){return m({},n,{"data-precedence":n.precedence,precedence:null})}function SM(n,i,o,c){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=n.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),In(i,"link",o),ln(i),n.head.appendChild(i))}function Dr(n){return'[src="'+Kt(n)+'"]'}function il(n){return"script[async]"+n}function I_(n,i,o){if(i.count++,i.instance===null)switch(i.type){case"style":var c=n.querySelector('style[data-href~="'+Kt(o.href)+'"]');if(c)return i.instance=c,ln(c),c;var p=m({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),ln(c),In(c,"style",p),Gc(c,o.precedence,n),i.instance=c;case"stylesheet":p=Cr(o.href);var g=n.querySelector(nl(p));if(g)return i.state.loading|=4,i.instance=g,ln(g),g;c=P_(o),(p=yi.get(p))&&Jh(c,p),g=(n.ownerDocument||n).createElement("link"),ln(g);var E=g;return E._p=new Promise(function(L,G){E.onload=L,E.onerror=G}),In(g,"link",c),i.state.loading|=4,Gc(g,o.precedence,n),i.instance=g;case"script":return g=Dr(o.src),(p=n.querySelector(il(g)))?(i.instance=p,ln(p),p):(c=o,(p=yi.get(g))&&(c=m({},o),$h(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),ln(p),In(p,"link",c),n.head.appendChild(p),i.instance=p);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,Gc(c,o.precedence,n));return i.instance}function Gc(n,i,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,g=p,E=0;E<c.length;E++){var L=c[E];if(L.dataset.precedence===i)g=L;else if(g!==p)break}g?g.parentNode.insertBefore(n,g.nextSibling):(i=o.nodeType===9?o.head:o,i.insertBefore(n,i.firstChild))}function Jh(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function $h(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var kc=null;function B_(n,i,o){if(kc===null){var c=new Map,p=kc=new Map;p.set(o,c)}else p=kc,c=p.get(o),c||(c=new Map,p.set(o,c));if(c.has(n))return c;for(c.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var g=o[p];if(!(g[Oa]||g[dn]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(i)||"";E=n+E;var L=c.get(E);L?L.push(g):c.set(E,[g])}}return c}function z_(n,i,o){n=n.ownerDocument||n,n.head.insertBefore(o,i==="title"?n.querySelector("head > title"):null)}function MM(n,i,o){if(o===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function F_(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var al=null;function EM(){}function TM(n,i,o){if(al===null)throw Error(a(475));var c=al;if(i.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var p=Cr(o.href),g=n.querySelector(nl(p));if(g){n=g._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(c.count++,c=Wc.bind(c),n.then(c,c)),i.state.loading|=4,i.instance=g,ln(g);return}g=n.ownerDocument||n,o=P_(o),(p=yi.get(p))&&Jh(o,p),g=g.createElement("link"),ln(g);var E=g;E._p=new Promise(function(L,G){E.onload=L,E.onerror=G}),In(g,"link",o),i.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(c.count++,i=Wc.bind(c),n.addEventListener("load",i),n.addEventListener("error",i))}}function bM(){if(al===null)throw Error(a(475));var n=al;return n.stylesheets&&n.count===0&&ed(n,n.stylesheets),0<n.count?function(i){var o=setTimeout(function(){if(n.stylesheets&&ed(n,n.stylesheets),n.unsuspend){var c=n.unsuspend;n.unsuspend=null,c()}},6e4);return n.unsuspend=i,function(){n.unsuspend=null,clearTimeout(o)}}:null}function Wc(){if(this.count--,this.count===0){if(this.stylesheets)ed(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Xc=null;function ed(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Xc=new Map,i.forEach(AM,n),Xc=null,Wc.call(n))}function AM(n,i){if(!(i.state.loading&4)){var o=Xc.get(n);if(o)var c=o.get(null);else{o=new Map,Xc.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var E=p[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),c=E)}c&&o.set(null,c)}p=i.instance,E=p.getAttribute("data-precedence"),g=o.get(E)||c,g===c&&o.set(null,p),o.set(E,p),this.count++,c=Wc.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),g?g.parentNode.insertBefore(p,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),i.state.loading|=4}}var sl={$$typeof:w,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function wM(n,i,o,c,p,g,E,L){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.incompleteTransitions=new Map}function H_(n,i,o,c,p,g,E,L,G,ae,ve,Ee){return n=new wM(n,i,o,E,L,G,ae,Ee),i=1,g===!0&&(i|=24),g=ii(3,null,null,i),n.current=g,g.stateNode=n,i=Pf(),i.refCount++,n.pooledCache=i,i.refCount++,g.memoizedState={element:c,isDehydrated:o,cache:i},Ff(g),n}function V_(n){return n?(n=or,n):or}function G_(n,i,o,c,p,g){p=V_(p),c.context===null?c.context=p:c.pendingContext=p,c=Va(i),c.payload={element:o},g=g===void 0?null:g,g!==null&&(c.callback=g),o=Ga(n,c,i),o!==null&&(li(o,n,i),Po(o,n,i))}function k_(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function td(n,i){k_(n,i),(n=n.alternate)&&k_(n,i)}function W_(n){if(n.tag===13){var i=rr(n,67108864);i!==null&&li(i,n,67108864),td(n,67108864)}}var qc=!0;function RM(n,i,o,c){var p=O.T;O.T=null;var g=F.p;try{F.p=2,nd(n,i,o,c)}finally{F.p=g,O.T=p}}function CM(n,i,o,c){var p=O.T;O.T=null;var g=F.p;try{F.p=8,nd(n,i,o,c)}finally{F.p=g,O.T=p}}function nd(n,i,o,c){if(qc){var p=id(c);if(p===null)kh(n,i,c,Yc,o),q_(n,c);else if(LM(p,n,i,o,c))c.stopPropagation();else if(q_(n,c),i&4&&-1<DM.indexOf(n)){for(;p!==null;){var g=$i(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=Ze(g.pendingLanes);if(E!==0){var L=g;for(L.pendingLanes|=2,L.entangledLanes|=2;E;){var G=1<<31-Be(E);L.entanglements[1]|=G,E&=~G}Wi(g),(Ft&6)===0&&(Dc=ft()+500,Jo(0))}}break;case 13:L=rr(g,2),L!==null&&li(L,g,2),Uc(),td(g,2)}if(g=id(c),g===null&&kh(n,i,c,Yc,o),g===p)break;p=g}p!==null&&c.stopPropagation()}else kh(n,i,c,null,o)}}function id(n){return n=lf(n),ad(n)}var Yc=null;function ad(n){if(Yc=null,n=Ji(n),n!==null){var i=l(n);if(i===null)n=null;else{var o=i.tag;if(o===13){if(n=u(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return Yc=n,null}function X_(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ve()){case dt:return 2;case Qe:return 8;case ot:case sn:return 32;case z:return 268435456;default:return 32}default:return 32}}var sd=!1,ts=null,ns=null,is=null,rl=new Map,ol=new Map,as=[],DM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q_(n,i){switch(n){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":rl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ol.delete(i.pointerId)}}function ll(n,i,o,c,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},i!==null&&(i=$i(i),i!==null&&W_(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function LM(n,i,o,c,p){switch(i){case"focusin":return ts=ll(ts,n,i,o,c,p),!0;case"dragenter":return ns=ll(ns,n,i,o,c,p),!0;case"mouseover":return is=ll(is,n,i,o,c,p),!0;case"pointerover":var g=p.pointerId;return rl.set(g,ll(rl.get(g)||null,n,i,o,c,p)),!0;case"gotpointercapture":return g=p.pointerId,ol.set(g,ll(ol.get(g)||null,n,i,o,c,p)),!0}return!1}function Y_(n){var i=Ji(n.target);if(i!==null){var o=l(i);if(o!==null){if(i=o.tag,i===13){if(i=u(o),i!==null){n.blockedOn=i,ti(n.priority,function(){if(o.tag===13){var c=oi();c=ct(c);var p=rr(o,c);p!==null&&li(p,o,c),td(o,c)}});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jc(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=id(n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);of=c,o.target.dispatchEvent(c),of=null}else return i=$i(o),i!==null&&W_(i),n.blockedOn=o,!1;i.shift()}return!0}function j_(n,i,o){jc(n)&&o.delete(i)}function UM(){sd=!1,ts!==null&&jc(ts)&&(ts=null),ns!==null&&jc(ns)&&(ns=null),is!==null&&jc(is)&&(is=null),rl.forEach(j_),ol.forEach(j_)}function Kc(n,i){n.blockedOn===i&&(n.blockedOn=null,sd||(sd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,UM)))}var Zc=null;function K_(n){Zc!==n&&(Zc=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Zc===n&&(Zc=null);for(var i=0;i<n.length;i+=3){var o=n[i],c=n[i+1],p=n[i+2];if(typeof c!="function"){if(ad(c||o)===null)continue;break}var g=$i(o);g!==null&&(n.splice(i,3),i-=3,ah(g,{pending:!0,data:p,method:o.method,action:c},c,p))}}))}function cl(n){function i(G){return Kc(G,n)}ts!==null&&Kc(ts,n),ns!==null&&Kc(ns,n),is!==null&&Kc(is,n),rl.forEach(i),ol.forEach(i);for(var o=0;o<as.length;o++){var c=as[o];c.blockedOn===n&&(c.blockedOn=null)}for(;0<as.length&&(o=as[0],o.blockedOn===null);)Y_(o),o.blockedOn===null&&as.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var p=o[c],g=o[c+1],E=p[Un]||null;if(typeof g=="function")E||K_(o);else if(E){var L=null;if(g&&g.hasAttribute("formAction")){if(p=g,E=g[Un]||null)L=E.formAction;else if(ad(p)!==null)continue}else L=E.action;typeof L=="function"?o[c+1]=L:(o.splice(c,3),c-=3),K_(o)}}}function rd(n){this._internalRoot=n}Qc.prototype.render=rd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(a(409));var o=i.current,c=oi();G_(o,c,n,i,null,null)},Qc.prototype.unmount=rd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;G_(n.current,2,null,n,null,null),Uc(),i[Kn]=null}};function Qc(n){this._internalRoot=n}Qc.prototype.unstable_scheduleHydration=function(n){if(n){var i=Dt();n={blockedOn:null,target:n,priority:i};for(var o=0;o<as.length&&i!==0&&i<as[o].priority;o++);as.splice(o,0,n),o===0&&Y_(n)}};var Z_=e.version;if(Z_!=="19.1.1")throw Error(a(527,Z_,"19.1.1"));F.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(a(188)):(n=Object.keys(n).join(","),Error(a(268,n)));return n=d(i),n=n!==null?h(n):null,n=n===null?null:n.stateNode,n};var NM={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jc.isDisabled&&Jc.supportsFiber)try{ye=Jc.inject(NM),Me=Jc}catch{}}return fl.createRoot=function(n,i){if(!s(n))throw Error(a(299));var o=!1,c="",p=h0,g=d0,E=p0,L=null;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(L=i.unstable_transitionCallbacks)),i=H_(n,1,!1,null,null,o,c,p,g,E,L,null),n[Kn]=i.current,Gh(n),new rd(i)},fl.hydrateRoot=function(n,i,o){if(!s(n))throw Error(a(299));var c=!1,p="",g=h0,E=d0,L=p0,G=null,ae=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(L=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(G=o.unstable_transitionCallbacks),o.formState!==void 0&&(ae=o.formState)),i=H_(n,1,!0,i,o??null,c,p,g,E,L,G,ae),i.context=V_(null),o=i.current,c=oi(),c=ct(c),p=Va(c),p.callback=null,Ga(o,p,c),o=c,i.current.lanes=o,Fe(i,o),Wi(i),n[Kn]=i.current,Gh(n),new Qc(i)},fl.version="19.1.1",fl}var rv;function kM(){if(rv)return cd.exports;rv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),cd.exports=GM(),cd.exports}var WM=kM();/**
 * react-router v7.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ov="popstate";function XM(r={}){function e(a,s){let{pathname:l,search:u,hash:f}=a.location;return ep("",{pathname:l,search:u,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(a,s){return typeof s=="string"?s:wl(s)}return YM(e,t,null,r)}function _n(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function ji(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function qM(){return Math.random().toString(36).substring(2,10)}function lv(r,e){return{usr:r.state,key:r.key,idx:e}}function ep(r,e,t=null,a){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Pl(e):e,state:t,key:e&&e.key||a||qM()}}function wl({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Pl(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let a=r.indexOf("?");a>=0&&(e.search=r.substring(a),r=r.substring(0,a)),r&&(e.pathname=r)}return e}function YM(r,e,t,a={}){let{window:s=document.defaultView,v5Compat:l=!1}=a,u=s.history,f="POP",d=null,h=m();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function m(){return(u.state||{idx:null}).idx}function _(){f="POP";let S=m(),y=S==null?null:S-h;h=S,d&&d({action:f,location:T.location,delta:y})}function v(S,y){f="PUSH";let b=ep(T.location,S,y);h=m()+1;let w=lv(b,h),A=T.createHref(b);try{u.pushState(w,"",A)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;s.location.assign(A)}l&&d&&d({action:f,location:T.location,delta:1})}function x(S,y){f="REPLACE";let b=ep(T.location,S,y);h=m();let w=lv(b,h),A=T.createHref(b);u.replaceState(w,"",A),l&&d&&d({action:f,location:T.location,delta:0})}function M(S){return jM(S)}let T={get action(){return f},get location(){return r(s,u)},listen(S){if(d)throw new Error("A history only accepts one active listener");return s.addEventListener(ov,_),d=S,()=>{s.removeEventListener(ov,_),d=null}},createHref(S){return e(s,S)},createURL:M,encodeLocation(S){let y=M(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:x,go(S){return u.go(S)}};return T}function jM(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),_n(t,"No window.location.(origin|href) available to create URL");let a=typeof r=="string"?r:wl(r);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=t+a),new URL(a,t)}function Ny(r,e,t="/"){return KM(r,e,t,!1)}function KM(r,e,t,a){let s=typeof e=="string"?Pl(e):e,l=Da(s.pathname||"/",t);if(l==null)return null;let u=Oy(r);ZM(u);let f=null;for(let d=0;f==null&&d<u.length;++d){let h=oE(l);f=sE(u[d],h,a)}return f}function Oy(r,e=[],t=[],a="",s=!1){let l=(u,f,d=s,h)=>{let m={relativePath:h===void 0?u.path||"":h,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(a)&&d)return;_n(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length)}let _=Ra([a,m.relativePath]),v=t.concat(m);u.children&&u.children.length>0&&(_n(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Oy(u.children,e,v,_,d)),!(u.path==null&&!u.index)&&e.push({path:_,score:iE(_,u.index),routesMeta:v})};return r.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let d of Py(u.path))l(u,f,!0,d)}),e}function Py(r){let e=r.split("/");if(e.length===0)return[];let[t,...a]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(a.length===0)return s?[l,""]:[l];let u=Py(a.join("/")),f=[];return f.push(...u.map(d=>d===""?l:[l,d].join("/"))),s&&f.push(...u),f.map(d=>r.startsWith("/")&&d===""?"/":d)}function ZM(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:aE(e.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}var QM=/^:[\w-]+$/,JM=3,$M=2,eE=1,tE=10,nE=-2,cv=r=>r==="*";function iE(r,e){let t=r.split("/"),a=t.length;return t.some(cv)&&(a+=nE),e&&(a+=$M),t.filter(s=>!cv(s)).reduce((s,l)=>s+(QM.test(l)?JM:l===""?eE:tE),a)}function aE(r,e){return r.length===e.length&&r.slice(0,-1).every((a,s)=>a===e[s])?r[r.length-1]-e[e.length-1]:0}function sE(r,e,t=!1){let{routesMeta:a}=r,s={},l="/",u=[];for(let f=0;f<a.length;++f){let d=a[f],h=f===a.length-1,m=l==="/"?e:e.slice(l.length)||"/",_=Vu({path:d.relativePath,caseSensitive:d.caseSensitive,end:h},m),v=d.route;if(!_&&h&&t&&!a[a.length-1].route.index&&(_=Vu({path:d.relativePath,caseSensitive:d.caseSensitive,end:!1},m)),!_)return null;Object.assign(s,_.params),u.push({params:s,pathname:Ra([l,_.pathname]),pathnameBase:fE(Ra([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=Ra([l,_.pathnameBase]))}return u}function Vu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,a]=rE(r.path,r.caseSensitive,r.end),s=e.match(t);if(!s)return null;let l=s[0],u=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:a.reduce((h,{paramName:m,isOptional:_},v)=>{if(m==="*"){let M=f[v]||"";u=l.slice(0,l.length-M.length).replace(/(.)\/+$/,"$1")}const x=f[v];return _&&!x?h[m]=void 0:h[m]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:r}}function rE(r,e=!1,t=!0){ji(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let a=[],s="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,d)=>(a.push({paramName:f,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(a.push({paramName:"*"}),s+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":r!==""&&r!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),a]}function oE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ji(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Da(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,a=r.charAt(t);return a&&a!=="/"?null:r.slice(t)||"/"}function lE(r,e="/"){let{pathname:t,search:a="",hash:s=""}=typeof r=="string"?Pl(r):r;return{pathname:t?t.startsWith("/")?t:cE(t,e):e,search:hE(a),hash:dE(s)}}function cE(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function dd(r,e,t,a){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function uE(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Iy(r){let e=uE(r);return e.map((t,a)=>a===e.length-1?t.pathname:t.pathnameBase)}function By(r,e,t,a=!1){let s;typeof r=="string"?s=Pl(r):(s={...r},_n(!s.pathname||!s.pathname.includes("?"),dd("?","pathname","search",s)),_n(!s.pathname||!s.pathname.includes("#"),dd("#","pathname","hash",s)),_n(!s.search||!s.search.includes("#"),dd("#","search","hash",s)));let l=r===""||s.pathname==="",u=l?"/":s.pathname,f;if(u==null)f=t;else{let _=e.length-1;if(!a&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),_-=1;s.pathname=v.join("/")}f=_>=0?e[_]:"/"}let d=lE(s,f),h=u&&u!=="/"&&u.endsWith("/"),m=(l||u===".")&&t.endsWith("/");return!d.pathname.endsWith("/")&&(h||m)&&(d.pathname+="/"),d}var Ra=r=>r.join("/").replace(/\/\/+/g,"/"),fE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),hE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,dE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function pE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var zy=["POST","PUT","PATCH","DELETE"];new Set(zy);var mE=["GET",...zy];new Set(mE);var po=me.createContext(null);po.displayName="DataRouter";var Qu=me.createContext(null);Qu.displayName="DataRouterState";me.createContext(!1);var Fy=me.createContext({isTransitioning:!1});Fy.displayName="ViewTransition";var gE=me.createContext(new Map);gE.displayName="Fetchers";var _E=me.createContext(null);_E.displayName="Await";var Zi=me.createContext(null);Zi.displayName="Navigation";var Ju=me.createContext(null);Ju.displayName="Location";var Ua=me.createContext({outlet:null,matches:[],isDataRoute:!1});Ua.displayName="Route";var Kp=me.createContext(null);Kp.displayName="RouteError";function vE(r,{relative:e}={}){_n(Il(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:a}=me.useContext(Zi),{hash:s,pathname:l,search:u}=Bl(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Ra([t,l])),a.createHref({pathname:f,search:u,hash:s})}function Il(){return me.useContext(Ju)!=null}function Qs(){return _n(Il(),"useLocation() may be used only in the context of a <Router> component."),me.useContext(Ju).location}var Hy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Vy(r){me.useContext(Zi).static||me.useLayoutEffect(r)}function yE(){let{isDataRoute:r}=me.useContext(Ua);return r?UE():xE()}function xE(){_n(Il(),"useNavigate() may be used only in the context of a <Router> component.");let r=me.useContext(po),{basename:e,navigator:t}=me.useContext(Zi),{matches:a}=me.useContext(Ua),{pathname:s}=Qs(),l=JSON.stringify(Iy(a)),u=me.useRef(!1);return Vy(()=>{u.current=!0}),me.useCallback((d,h={})=>{if(ji(u.current,Hy),!u.current)return;if(typeof d=="number"){t.go(d);return}let m=By(d,JSON.parse(l),s,h.relative==="path");r==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Ra([e,m.pathname])),(h.replace?t.replace:t.push)(m,h.state,h)},[e,t,l,s,r])}me.createContext(null);function Bl(r,{relative:e}={}){let{matches:t}=me.useContext(Ua),{pathname:a}=Qs(),s=JSON.stringify(Iy(t));return me.useMemo(()=>By(r,JSON.parse(s),a,e==="path"),[r,s,a,e])}function SE(r,e,t,a,s){_n(Il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=me.useContext(Zi),{matches:u}=me.useContext(Ua),f=u[u.length-1],d=f?f.params:{},h=f?f.pathname:"/",m=f?f.pathnameBase:"/",_=f&&f.route;{let b=_&&_.path||"";Gy(h,!_||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let v=Qs(),x;x=v;let M=x.pathname||"/",T=M;if(m!=="/"){let b=m.replace(/^\//,"").split("/");T="/"+M.replace(/^\//,"").split("/").slice(b.length).join("/")}let S=Ny(r,{pathname:T});return ji(_||S!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),ji(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),AE(S&&S.map(b=>Object.assign({},b,{params:Object.assign({},d,b.params),pathname:Ra([m,l.encodeLocation?l.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?m:Ra([m,l.encodeLocation?l.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),u,t,a,s)}function ME(){let r=LE(),e=pE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=me.createElement(me.Fragment,null,me.createElement("p",null,"💿 Hey developer 👋"),me.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",me.createElement("code",{style:l},"ErrorBoundary")," or"," ",me.createElement("code",{style:l},"errorElement")," prop on your route.")),me.createElement(me.Fragment,null,me.createElement("h2",null,"Unexpected Application Error!"),me.createElement("h3",{style:{fontStyle:"italic"}},e),t?me.createElement("pre",{style:s},t):null,u)}var EE=me.createElement(ME,null),TE=class extends me.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.unstable_onError?this.props.unstable_onError(r,e):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?me.createElement(Ua.Provider,{value:this.props.routeContext},me.createElement(Kp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function bE({routeContext:r,match:e,children:t}){let a=me.useContext(po);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),me.createElement(Ua.Provider,{value:r},t)}function AE(r,e=[],t=null,a=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let l=r,u=t?.errors;if(u!=null){let h=l.findIndex(m=>m.route.id&&u?.[m.route.id]!==void 0);_n(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,h+1))}let f=!1,d=-1;if(t)for(let h=0;h<l.length;h++){let m=l[h];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=h),m.route.id){let{loaderData:_,errors:v}=t,x=m.route.loader&&!_.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((h,m,_)=>{let v,x=!1,M=null,T=null;t&&(v=u&&m.route.id?u[m.route.id]:void 0,M=m.route.errorElement||EE,f&&(d<0&&_===0?(Gy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,T=null):d===_&&(x=!0,T=m.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,_+1)),y=()=>{let b;return v?b=M:x?b=T:m.route.Component?b=me.createElement(m.route.Component,null):m.route.element?b=m.route.element:b=h,me.createElement(bE,{match:m,routeContext:{outlet:h,matches:S,isDataRoute:t!=null},children:b})};return t&&(m.route.ErrorBoundary||m.route.errorElement||_===0)?me.createElement(TE,{location:t.location,revalidation:t.revalidation,component:M,error:v,children:y(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:a}):y()},null)}function Zp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function wE(r){let e=me.useContext(po);return _n(e,Zp(r)),e}function RE(r){let e=me.useContext(Qu);return _n(e,Zp(r)),e}function CE(r){let e=me.useContext(Ua);return _n(e,Zp(r)),e}function Qp(r){let e=CE(r),t=e.matches[e.matches.length-1];return _n(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function DE(){return Qp("useRouteId")}function LE(){let r=me.useContext(Kp),e=RE("useRouteError"),t=Qp("useRouteError");return r!==void 0?r:e.errors?.[t]}function UE(){let{router:r}=wE("useNavigate"),e=Qp("useNavigate"),t=me.useRef(!1);return Vy(()=>{t.current=!0}),me.useCallback(async(s,l={})=>{ji(t.current,Hy),t.current&&(typeof s=="number"?r.navigate(s):await r.navigate(s,{fromRouteId:e,...l}))},[r,e])}var uv={};function Gy(r,e,t){!e&&!uv[r]&&(uv[r]=!0,ji(!1,t))}me.memo(NE);function NE({routes:r,future:e,state:t,unstable_onError:a}){return SE(r,void 0,t,a,e)}function OE({basename:r="/",children:e=null,location:t,navigationType:a="POP",navigator:s,static:l=!1}){_n(!Il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=r.replace(/^\/*/,"/"),f=me.useMemo(()=>({basename:u,navigator:s,static:l,future:{}}),[u,s,l]);typeof t=="string"&&(t=Pl(t));let{pathname:d="/",search:h="",hash:m="",state:_=null,key:v="default"}=t,x=me.useMemo(()=>{let M=Da(d,u);return M==null?null:{location:{pathname:M,search:h,hash:m,state:_,key:v},navigationType:a}},[u,d,h,m,_,v,a]);return ji(x!=null,`<Router basename="${u}"> is not able to match the URL "${d}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:me.createElement(Zi.Provider,{value:f},me.createElement(Ju.Provider,{children:e,value:x}))}var Uu="get",Nu="application/x-www-form-urlencoded";function $u(r){return r!=null&&typeof r.tagName=="string"}function PE(r){return $u(r)&&r.tagName.toLowerCase()==="button"}function IE(r){return $u(r)&&r.tagName.toLowerCase()==="form"}function BE(r){return $u(r)&&r.tagName.toLowerCase()==="input"}function zE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function FE(r,e){return r.button===0&&(!e||e==="_self")&&!zE(r)}var $c=null;function HE(){if($c===null)try{new FormData(document.createElement("form"),0),$c=!1}catch{$c=!0}return $c}var VE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function pd(r){return r!=null&&!VE.has(r)?(ji(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nu}"`),null):r}function GE(r,e){let t,a,s,l,u;if(IE(r)){let f=r.getAttribute("action");a=f?Da(f,e):null,t=r.getAttribute("method")||Uu,s=pd(r.getAttribute("enctype"))||Nu,l=new FormData(r)}else if(PE(r)||BE(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let d=r.getAttribute("formaction")||f.getAttribute("action");if(a=d?Da(d,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Uu,s=pd(r.getAttribute("formenctype"))||pd(f.getAttribute("enctype"))||Nu,l=new FormData(f,r),!HE()){let{name:h,type:m,value:_}=r;if(m==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,_)}}else{if($u(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Uu,a=null,s=Nu,u=r}return l&&s==="text/plain"&&(u=l,l=void 0),{action:a,method:t.toLowerCase(),encType:s,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Jp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function kE(r,e,t){let a=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return a.pathname==="/"?a.pathname=`_root.${t}`:e&&Da(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${t}`,a}async function WE(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function XE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function qE(r,e,t){let a=await Promise.all(r.map(async s=>{let l=e.routes[s.route.id];if(l){let u=await WE(l,t);return u.links?u.links():[]}return[]}));return ZE(a.flat(1).filter(XE).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function fv(r,e,t,a,s,l){let u=(d,h)=>t[h]?d.route.id!==t[h].route.id:!0,f=(d,h)=>t[h].pathname!==d.pathname||t[h].route.path?.endsWith("*")&&t[h].params["*"]!==d.params["*"];return l==="assets"?e.filter((d,h)=>u(d,h)||f(d,h)):l==="data"?e.filter((d,h)=>{let m=a.routes[d.route.id];if(!m||!m.hasLoader)return!1;if(u(d,h)||f(d,h))return!0;if(d.route.shouldRevalidate){let _=d.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:d.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function YE(r,e,{includeHydrateFallback:t}={}){return jE(r.map(a=>{let s=e.routes[a.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function jE(r){return[...new Set(r)]}function KE(r){let e={},t=Object.keys(r).sort();for(let a of t)e[a]=r[a];return e}function ZE(r,e){let t=new Set;return new Set(e),r.reduce((a,s)=>{let l=JSON.stringify(KE(s));return t.has(l)||(t.add(l),a.push({key:l,link:s})),a},[])}function ky(){let r=me.useContext(po);return Jp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function QE(){let r=me.useContext(Qu);return Jp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var $p=me.createContext(void 0);$p.displayName="FrameworkContext";function Wy(){let r=me.useContext($p);return Jp(r,"You must render this element inside a <HydratedRouter> element"),r}function JE(r,e){let t=me.useContext($p),[a,s]=me.useState(!1),[l,u]=me.useState(!1),{onFocus:f,onBlur:d,onMouseEnter:h,onMouseLeave:m,onTouchStart:_}=e,v=me.useRef(null);me.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let T=y=>{y.forEach(b=>{u(b.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[r]),me.useEffect(()=>{if(a){let T=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(T)}}},[a]);let x=()=>{s(!0)},M=()=>{s(!1),u(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:hl(f,x),onBlur:hl(d,M),onMouseEnter:hl(h,x),onMouseLeave:hl(m,M),onTouchStart:hl(_,x)}]:[!1,v,{}]}function hl(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function $E({page:r,...e}){let{router:t}=ky(),a=me.useMemo(()=>Ny(t.routes,r,t.basename),[t.routes,r,t.basename]);return a?me.createElement(tT,{page:r,matches:a,...e}):null}function eT(r){let{manifest:e,routeModules:t}=Wy(),[a,s]=me.useState([]);return me.useEffect(()=>{let l=!1;return qE(r,e,t).then(u=>{l||s(u)}),()=>{l=!0}},[r,e,t]),a}function tT({page:r,matches:e,...t}){let a=Qs(),{manifest:s,routeModules:l}=Wy(),{basename:u}=ky(),{loaderData:f,matches:d}=QE(),h=me.useMemo(()=>fv(r,e,d,s,a,"data"),[r,e,d,s,a]),m=me.useMemo(()=>fv(r,e,d,s,a,"assets"),[r,e,d,s,a]),_=me.useMemo(()=>{if(r===a.pathname+a.search+a.hash)return[];let M=new Set,T=!1;if(e.forEach(y=>{let b=s.routes[y.route.id];!b||!b.hasLoader||(!h.some(w=>w.route.id===y.route.id)&&y.route.id in f&&l[y.route.id]?.shouldRevalidate||b.hasClientLoader?T=!0:M.add(y.route.id))}),M.size===0)return[];let S=kE(r,u,"data");return T&&M.size>0&&S.searchParams.set("_routes",e.filter(y=>M.has(y.route.id)).map(y=>y.route.id).join(",")),[S.pathname+S.search]},[u,f,a,s,h,e,r,l]),v=me.useMemo(()=>YE(m,s),[m,s]),x=eT(m);return me.createElement(me.Fragment,null,_.map(M=>me.createElement("link",{key:M,rel:"prefetch",as:"fetch",href:M,...t})),v.map(M=>me.createElement("link",{key:M,rel:"modulepreload",href:M,...t})),x.map(({key:M,link:T})=>me.createElement("link",{key:M,nonce:t.nonce,...T})))}function nT(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Xy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Xy&&(window.__reactRouterVersion="7.8.2")}catch{}function iT({basename:r,children:e,window:t}){let a=me.useRef();a.current==null&&(a.current=XM({window:t,v5Compat:!0}));let s=a.current,[l,u]=me.useState({action:s.action,location:s.location}),f=me.useCallback(d=>{me.startTransition(()=>u(d))},[u]);return me.useLayoutEffect(()=>s.listen(f),[s,f]),me.createElement(OE,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:s})}var qy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Yy=me.forwardRef(function({onClick:e,discover:t="render",prefetch:a="none",relative:s,reloadDocument:l,replace:u,state:f,target:d,to:h,preventScrollReset:m,viewTransition:_,...v},x){let{basename:M}=me.useContext(Zi),T=typeof h=="string"&&qy.test(h),S,y=!1;if(typeof h=="string"&&T&&(S=h,Xy))try{let C=new URL(window.location.href),R=h.startsWith("//")?new URL(C.protocol+h):new URL(h),V=Da(R.pathname,M);R.origin===C.origin&&V!=null?h=V+R.search+R.hash:y=!0}catch{ji(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let b=vE(h,{relative:s}),[w,A,P]=JE(a,v),I=oT(h,{replace:u,state:f,target:d,preventScrollReset:m,relative:s,viewTransition:_});function B(C){e&&e(C),C.defaultPrevented||I(C)}let H=me.createElement("a",{...v,...P,href:S||b,onClick:y||l?e:B,ref:nT(x,A),target:d,"data-discover":!T&&t==="render"?"true":void 0});return w&&!T?me.createElement(me.Fragment,null,H,me.createElement($E,{page:b})):H});Yy.displayName="Link";var aT=me.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:a="",end:s=!1,style:l,to:u,viewTransition:f,children:d,...h},m){let _=Bl(u,{relative:h.relative}),v=Qs(),x=me.useContext(Qu),{navigator:M,basename:T}=me.useContext(Zi),S=x!=null&&hT(_)&&f===!0,y=M.encodeLocation?M.encodeLocation(_).pathname:_.pathname,b=v.pathname,w=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(b=b.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&T&&(w=Da(w,T)||w);const A=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let P=b===y||!s&&b.startsWith(y)&&b.charAt(A)==="/",I=w!=null&&(w===y||!s&&w.startsWith(y)&&w.charAt(y.length)==="/"),B={isActive:P,isPending:I,isTransitioning:S},H=P?e:void 0,C;typeof a=="function"?C=a(B):C=[a,P?"active":null,I?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(B):l;return me.createElement(Yy,{...h,"aria-current":H,className:C,ref:m,style:R,to:u,viewTransition:f},typeof d=="function"?d(B):d)});aT.displayName="NavLink";var sT=me.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:a,replace:s,state:l,method:u=Uu,action:f,onSubmit:d,relative:h,preventScrollReset:m,viewTransition:_,...v},x)=>{let M=uT(),T=fT(f,{relative:h}),S=u.toLowerCase()==="get"?"get":"post",y=typeof f=="string"&&qy.test(f),b=w=>{if(d&&d(w),w.defaultPrevented)return;w.preventDefault();let A=w.nativeEvent.submitter,P=A?.getAttribute("formmethod")||u;M(A||w.currentTarget,{fetcherKey:e,method:P,navigate:t,replace:s,state:l,relative:h,preventScrollReset:m,viewTransition:_})};return me.createElement("form",{ref:x,method:S,action:T,onSubmit:a?d:b,...v,"data-discover":!y&&r==="render"?"true":void 0})});sT.displayName="Form";function rT(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jy(r){let e=me.useContext(po);return _n(e,rT(r)),e}function oT(r,{target:e,replace:t,state:a,preventScrollReset:s,relative:l,viewTransition:u}={}){let f=yE(),d=Qs(),h=Bl(r,{relative:l});return me.useCallback(m=>{if(FE(m,e)){m.preventDefault();let _=t!==void 0?t:wl(d)===wl(h);f(r,{replace:_,state:a,preventScrollReset:s,relative:l,viewTransition:u})}},[d,f,h,t,a,e,r,s,l,u])}var lT=0,cT=()=>`__${String(++lT)}__`;function uT(){let{router:r}=jy("useSubmit"),{basename:e}=me.useContext(Zi),t=DE();return me.useCallback(async(a,s={})=>{let{action:l,method:u,encType:f,formData:d,body:h}=GE(a,e);if(s.navigate===!1){let m=s.fetcherKey||cT();await r.fetch(m,t,s.action||l,{preventScrollReset:s.preventScrollReset,formData:d,body:h,formMethod:s.method||u,formEncType:s.encType||f,flushSync:s.flushSync})}else await r.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:d,body:h,formMethod:s.method||u,formEncType:s.encType||f,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[r,e,t])}function fT(r,{relative:e}={}){let{basename:t}=me.useContext(Zi),a=me.useContext(Ua);_n(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),l={...Bl(r||".",{relative:e})},u=Qs();if(r==null){l.search=u.search;let f=new URLSearchParams(l.search),d=f.getAll("index");if(d.some(m=>m==="")){f.delete("index"),d.filter(_=>_).forEach(_=>f.append("index",_));let m=f.toString();l.search=m?`?${m}`:""}}return(!r||r===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ra([t,l.pathname])),wl(l)}function hT(r,{relative:e}={}){let t=me.useContext(Fy);_n(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=jy("useViewTransitionState"),s=Bl(r,{relative:e});if(!t.isTransitioning)return!1;let l=Da(t.currentLocation.pathname,a)||t.currentLocation.pathname,u=Da(t.nextLocation.pathname,a)||t.nextLocation.pathname;return Vu(s.pathname,u)!=null||Vu(s.pathname,l)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const em="178",dT=0,hv=1,pT=2,Ky=1,mT=2,Ea=3,La=0,qn=1,ei=2,gs=0,Qr=1,Gu=2,dv=3,pv=4,gT=5,Ys=100,_T=101,vT=102,yT=103,xT=104,ST=200,MT=201,ET=202,TT=203,tp=204,np=205,bT=206,AT=207,wT=208,RT=209,CT=210,DT=211,LT=212,UT=213,NT=214,ip=0,ap=1,sp=2,io=3,rp=4,op=5,lp=6,cp=7,tm=0,OT=1,PT=2,_s=0,IT=1,BT=2,zT=3,FT=4,HT=5,VT=6,GT=7,mv="attached",kT="detached",Zy=300,ao=301,so=302,up=303,fp=304,ef=306,ro=1e3,ms=1001,ku=1002,Yn=1003,Qy=1004,El=1005,fi=1006,Ou=1007,ba=1008,Ki=1009,Jy=1010,$y=1011,Rl=1012,nm=1013,Ks=1014,Ui=1015,zl=1016,im=1017,am=1018,Cl=1020,ex=35902,tx=1021,nx=1022,Ti=1023,Dl=1026,Ll=1027,sm=1028,rm=1029,ix=1030,om=1031,lm=1033,Pu=33776,Iu=33777,Bu=33778,zu=33779,hp=35840,dp=35841,pp=35842,mp=35843,gp=36196,_p=37492,vp=37496,yp=37808,xp=37809,Sp=37810,Mp=37811,Ep=37812,Tp=37813,bp=37814,Ap=37815,wp=37816,Rp=37817,Cp=37818,Dp=37819,Lp=37820,Up=37821,Fu=36492,Np=36494,Op=36495,ax=36283,Pp=36284,Ip=36285,Bp=36286,WT=2200,XT=2201,qT=2202,Ul=2300,Nl=2301,md=2302,jr=2400,Kr=2401,Wu=2402,cm=2500,YT=2501,jT=0,sx=1,zp=2,KT=3200,ZT=3201,um=0,QT=1,ds="",hn="srgb",jn="srgb-linear",Xu="linear",qt="srgb",Lr=7680,gv=519,JT=512,$T=513,eb=514,rx=515,tb=516,nb=517,ib=518,ab=519,Fp=35044,_v="300 es",Aa=2e3,qu=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vv=1234567;const Jr=Math.PI/180,oo=180/Math.PI;function Oi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[a&255]+Hn[a>>8&255]+Hn[a>>16&255]+Hn[a>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function fm(r,e){return(r%e+e)%e}function sb(r,e,t,a,s){return a+(r-e)*(s-a)/(t-e)}function rb(r,e,t){return r!==e?(t-r)/(e-r):0}function bl(r,e,t){return(1-t)*r+t*e}function ob(r,e,t,a){return bl(r,e,1-Math.exp(-t*a))}function lb(r,e=1){return e-Math.abs(fm(r,e*2)-e)}function cb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ub(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function fb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function hb(r,e){return r+Math.random()*(e-r)}function db(r){return r*(.5-Math.random())}function pb(r){r!==void 0&&(vv=r);let e=vv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mb(r){return r*Jr}function gb(r){return r*oo}function _b(r){return(r&r-1)===0&&r!==0}function vb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function yb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function xb(r,e,t,a,s){const l=Math.cos,u=Math.sin,f=l(t/2),d=u(t/2),h=l((e+a)/2),m=u((e+a)/2),_=l((e-a)/2),v=u((e-a)/2),x=l((a-e)/2),M=u((a-e)/2);switch(s){case"XYX":r.set(f*m,d*_,d*v,f*h);break;case"YZY":r.set(d*v,f*m,d*_,f*h);break;case"ZXZ":r.set(d*_,d*v,f*m,f*h);break;case"XZX":r.set(f*m,d*M,d*x,f*h);break;case"YXY":r.set(d*x,f*m,d*M,f*h);break;case"ZYZ":r.set(d*M,d*x,f*m,f*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const ox={DEG2RAD:Jr,RAD2DEG:oo,generateUUID:Oi,clamp:Tt,euclideanModulo:fm,mapLinear:sb,inverseLerp:rb,lerp:bl,damp:ob,pingpong:lb,smoothstep:cb,smootherstep:ub,randInt:fb,randFloat:hb,randFloatSpread:db,seededRandom:pb,degToRad:mb,radToDeg:gb,isPowerOfTwo:_b,ceilPowerOfTwo:vb,floorPowerOfTwo:yb,setQuaternionFromProperEuler:xb,normalize:Vt,denormalize:Li};class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,s=e.elements;return this.x=s[0]*t+s[3]*a+s[6],this.y=s[1]*t+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*s+e.x,this.y=l*s+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pi{constructor(e=0,t=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=s}static slerpFlat(e,t,a,s,l,u,f){let d=a[s+0],h=a[s+1],m=a[s+2],_=a[s+3];const v=l[u+0],x=l[u+1],M=l[u+2],T=l[u+3];if(f===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=_;return}if(f===1){e[t+0]=v,e[t+1]=x,e[t+2]=M,e[t+3]=T;return}if(_!==T||d!==v||h!==x||m!==M){let S=1-f;const y=d*v+h*x+m*M+_*T,b=y>=0?1:-1,w=1-y*y;if(w>Number.EPSILON){const P=Math.sqrt(w),I=Math.atan2(P,y*b);S=Math.sin(S*I)/P,f=Math.sin(f*I)/P}const A=f*b;if(d=d*S+v*A,h=h*S+x*A,m=m*S+M*A,_=_*S+T*A,S===1-f){const P=1/Math.sqrt(d*d+h*h+m*m+_*_);d*=P,h*=P,m*=P,_*=P}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,a,s,l,u){const f=a[s],d=a[s+1],h=a[s+2],m=a[s+3],_=l[u],v=l[u+1],x=l[u+2],M=l[u+3];return e[t]=f*M+m*_+d*x-h*v,e[t+1]=d*M+m*v+h*_-f*x,e[t+2]=h*M+m*x+f*v-d*_,e[t+3]=m*M-f*_-d*v-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,s){return this._x=e,this._y=t,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,s=e._y,l=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(a/2),m=f(s/2),_=f(l/2),v=d(a/2),x=d(s/2),M=d(l/2);switch(u){case"XYZ":this._x=v*m*_+h*x*M,this._y=h*x*_-v*m*M,this._z=h*m*M+v*x*_,this._w=h*m*_-v*x*M;break;case"YXZ":this._x=v*m*_+h*x*M,this._y=h*x*_-v*m*M,this._z=h*m*M-v*x*_,this._w=h*m*_+v*x*M;break;case"ZXY":this._x=v*m*_-h*x*M,this._y=h*x*_+v*m*M,this._z=h*m*M+v*x*_,this._w=h*m*_-v*x*M;break;case"ZYX":this._x=v*m*_-h*x*M,this._y=h*x*_+v*m*M,this._z=h*m*M-v*x*_,this._w=h*m*_+v*x*M;break;case"YZX":this._x=v*m*_+h*x*M,this._y=h*x*_+v*m*M,this._z=h*m*M-v*x*_,this._w=h*m*_-v*x*M;break;case"XZY":this._x=v*m*_-h*x*M,this._y=h*x*_-v*m*M,this._z=h*m*M+v*x*_,this._w=h*m*_+v*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],s=t[4],l=t[8],u=t[1],f=t[5],d=t[9],h=t[2],m=t[6],_=t[10],v=a+f+_;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-s)*x}else if(a>f&&a>_){const x=2*Math.sqrt(1+a-f-_);this._w=(m-d)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(l+h)/x}else if(f>_){const x=2*Math.sqrt(1+f-a-_);this._w=(l-h)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+_-a-f);this._w=(u-s)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,t/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,s=e._y,l=e._z,u=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=a*m+u*f+s*h-l*d,this._y=s*m+u*d+l*f-a*h,this._z=l*m+u*h+a*d-s*f,this._w=u*m-a*f-s*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const a=this._x,s=this._y,l=this._z,u=this._w;let f=u*e._w+a*e._x+s*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=a,this._y=s,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*a+t*this._x,this._y=x*s+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,f),_=Math.sin((1-t)*m)/h,v=Math.sin(t*m)/h;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=s*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,a=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*s,this.y=l[1]*t+l[4]*a+l[7]*s,this.z=l[2]*t+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,s=this.z,l=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*s-f*a),m=2*(f*t-l*s),_=2*(l*a-u*t);return this.x=t+d*h+u*_-f*m,this.y=a+d*m+f*h-l*_,this.z=s+d*_+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*s,this.y=l[1]*t+l[5]*a+l[9]*s,this.z=l[2]*t+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,s=e.y,l=e.z,u=t.x,f=t.y,d=t.z;return this.x=s*d-l*f,this.y=l*u-a*d,this.z=a*f-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return gd.copy(this).projectOnVector(e),this.sub(gd)}reflect(e){return this.sub(gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Tt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return t*t+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const s=Math.sin(t)*e;return this.x=s*Math.sin(a),this.y=Math.cos(t)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gd=new q,yv=new Pi;class gt{constructor(e,t,a,s,l,u,f,d,h){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,f,d,h)}set(e,t,a,s,l,u,f,d,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=a,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],f=a[3],d=a[6],h=a[1],m=a[4],_=a[7],v=a[2],x=a[5],M=a[8],T=s[0],S=s[3],y=s[6],b=s[1],w=s[4],A=s[7],P=s[2],I=s[5],B=s[8];return l[0]=u*T+f*b+d*P,l[3]=u*S+f*w+d*I,l[6]=u*y+f*A+d*B,l[1]=h*T+m*b+_*P,l[4]=h*S+m*w+_*I,l[7]=h*y+m*A+_*B,l[2]=v*T+x*b+M*P,l[5]=v*S+x*w+M*I,l[8]=v*y+x*A+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*f*h-a*l*m+a*f*d+s*l*h-s*u*d}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],_=m*u-f*h,v=f*d-m*l,x=h*l-u*d,M=t*_+a*v+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(s*h-m*a)*T,e[2]=(f*a-s*u)*T,e[3]=v*T,e[4]=(m*t-s*d)*T,e[5]=(s*l-f*t)*T,e[6]=x*T,e[7]=(a*d-h*t)*T,e[8]=(u*t-a*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,s,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(a*d,a*h,-a*(d*u+h*f)+u+e,-s*h,s*d,-s*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(_d.makeScale(e,t)),this}rotate(e){return this.premultiply(_d.makeRotation(-e)),this}translate(e,t){return this.premultiply(_d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<9;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _d=new gt;function lx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ol(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Sb(){const r=Ol("canvas");return r.style.display="block",r}const xv={};function $r(r){r in xv||(xv[r]=!0,console.warn(r))}function Mb(r,e,t){return new Promise(function(a,s){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:s();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}function Eb(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Tb(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Sv=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mv=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bb(){const r={enabled:!0,workingColorSpace:jn,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===qt&&(s.r=Ca(s.r),s.g=Ca(s.g),s.b=Ca(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(s.r=eo(s.r),s.g=eo(s.g),s.b=eo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ds?Xu:this.spaces[s].transfer},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return $r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return $r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[jn]:{primaries:e,whitePoint:a,transfer:Xu,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:a,transfer:qt,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),r}const Rt=bb();function Ca(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function eo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ur;class Ab{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{Ur===void 0&&(Ur=Ol("canvas")),Ur.width=e.width,Ur.height=e.height;const s=Ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=Ur}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ol("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=Ca(l[u]/255)*255;return a.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Ca(t[a]/255)*255):t[a]=Ca(t[a]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wb=0;class hm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wb++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(vd(s[u].image)):l.push(vd(s[u]))}else l=vd(s);a.url=l}return t||(e.images[this.uuid]=a),a}}function vd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ab.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rb=0;const yd=new q;class vn extends Js{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,a=ms,s=ms,l=fi,u=ba,f=Ti,d=Ki,h=vn.DEFAULT_ANISOTROPY,m=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=Oi(),this.name="",this.source=new hm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case ms:e.x=e.x<0?0:1;break;case ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case ms:e.y=e.y<0?0:1;break;case ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Zy;vn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,a=0,s=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,s){return this.x=e,this.y=t,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,s,l;const d=e.elements,h=d[0],m=d[4],_=d[8],v=d[1],x=d[5],M=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(m-v)<.01&&Math.abs(_-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+T)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,A=(x+1)/2,P=(y+1)/2,I=(m+v)/4,B=(_+T)/4,H=(M+S)/4;return w>A&&w>P?w<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(w),s=I/a,l=B/a):A>P?A<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(A),a=I/s,l=H/s):P<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(P),a=B/l,s=H/l),this.set(a,s,l,t),this}let b=Math.sqrt((S-M)*(S-M)+(_-T)*(_-T)+(v-m)*(v-m));return Math.abs(b)<.001&&(b=1),this.x=(S-M)/b,this.y=(_-T)/b,this.z=(v-m)/b,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Tt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cb extends Js{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const s={width:e,height:t,depth:a.depth},l=new vn(s);this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const t={minFilter:fi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=a,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new hm(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zs extends Cb{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class cx extends vn{constructor(e=null,t=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Db extends vn{constructor(e=null,t=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Na{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ri):Ri.fromBufferAttribute(l,u),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),eu.copy(a.boundingBox)),eu.applyMatrix4(e.matrixWorld),this.union(eu)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dl),tu.subVectors(this.max,dl),Nr.subVectors(e.a,dl),Or.subVectors(e.b,dl),Pr.subVectors(e.c,dl),rs.subVectors(Or,Nr),os.subVectors(Pr,Or),zs.subVectors(Nr,Pr);let t=[0,-rs.z,rs.y,0,-os.z,os.y,0,-zs.z,zs.y,rs.z,0,-rs.x,os.z,0,-os.x,zs.z,0,-zs.x,-rs.y,rs.x,0,-os.y,os.x,0,-zs.y,zs.x,0];return!xd(t,Nr,Or,Pr,tu)||(t=[1,0,0,0,1,0,0,0,1],!xd(t,Nr,Or,Pr,tu))?!1:(nu.crossVectors(rs,os),t=[nu.x,nu.y,nu.z],xd(t,Nr,Or,Pr,tu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new q,new q,new q,new q,new q,new q,new q,new q],Ri=new q,eu=new Na,Nr=new q,Or=new q,Pr=new q,rs=new q,os=new q,zs=new q,dl=new q,tu=new q,nu=new q,Fs=new q;function xd(r,e,t,a,s){for(let l=0,u=r.length-3;l<=u;l+=3){Fs.fromArray(r,l);const f=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),d=e.dot(Fs),h=t.dot(Fs),m=a.dot(Fs);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const Lb=new Na,pl=new q,Sd=new q;class Qi{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):Lb.setFromPoints(e).getCenter(a);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);const t=pl.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),s=(a-this.radius)*.5;this.center.addScaledVector(pl,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(Sd)),this.expandByPoint(pl.copy(e.center).sub(Sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new q,Md=new q,iu=new q,ls=new q,Ed=new q,au=new q,Td=new q;class Fl{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=va.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,t),va.distanceToSquared(e))}distanceSqToSegment(e,t,a,s){Md.copy(e).add(t).multiplyScalar(.5),iu.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(Md);const l=e.distanceTo(t)*.5,u=-this.direction.dot(iu),f=ls.dot(this.direction),d=-ls.dot(iu),h=ls.lengthSq(),m=Math.abs(1-u*u);let _,v,x,M;if(m>0)if(_=u*d-f,v=u*f-d,M=l*m,_>=0)if(v>=-M)if(v<=M){const T=1/m;_*=T,v*=T,x=_*(_+u*v+2*f)+v*(u*_+v+2*d)+h}else v=l,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*d)+h;else v=-l,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*d)+h;else v<=-M?(_=Math.max(0,-(-u*l+f)),v=_>0?-l:Math.min(Math.max(-l,-d),l),x=-_*_+v*(v+2*d)+h):v<=M?(_=0,v=Math.min(Math.max(-l,-d),l),x=v*(v+2*d)+h):(_=Math.max(0,-(u*l+f)),v=_>0?l:Math.min(Math.max(-l,-d),l),x=-_*_+v*(v+2*d)+h);else v=u>0?-l:l,_=Math.max(0,-(u*v+f)),x=-_*_+v*(v+2*d)+h;return a&&a.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(Md).addScaledVector(iu,v),x}intersectSphere(e,t){va.subVectors(e.center,this.origin);const a=va.dot(this.direction),s=va.dot(va)-a*a,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=a-u,d=a+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,s,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(a=(e.min.x-v.x)*h,s=(e.max.x-v.x)*h):(a=(e.max.x-v.x)*h,s=(e.min.x-v.x)*h),m>=0?(l=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(l=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),_>=0?(f=(e.min.z-v.z)*_,d=(e.max.z-v.z)*_):(f=(e.max.z-v.z)*_,d=(e.min.z-v.z)*_),a>d||f>s)||((f>a||a!==a)&&(a=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(a>=0?a:s,t)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,t,a,s,l){Ed.subVectors(t,e),au.subVectors(a,e),Td.crossVectors(Ed,au);let u=this.direction.dot(Td),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ls.subVectors(this.origin,e);const d=f*this.direction.dot(au.crossVectors(ls,au));if(d<0)return null;const h=f*this.direction.dot(Ed.cross(ls));if(h<0||d+h>u)return null;const m=-f*ls.dot(Td);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,a,s,l,u,f,d,h,m,_,v,x,M,T,S){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,f,d,h,m,_,v,x,M,T,S)}set(e,t,a,s,l,u,f,d,h,m,_,v,x,M,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=a,y[12]=s,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=h,y[6]=m,y[10]=_,y[14]=v,y[3]=x,y[7]=M,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,a=e.elements,s=1/Ir.setFromMatrixColumn(e,0).length(),l=1/Ir.setFromMatrixColumn(e,1).length(),u=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,s=e.y,l=e.z,u=Math.cos(a),f=Math.sin(a),d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*m,x=u*_,M=f*m,T=f*_;t[0]=d*m,t[4]=-d*_,t[8]=h,t[1]=x+M*h,t[5]=v-T*h,t[9]=-f*d,t[2]=T-v*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const v=d*m,x=d*_,M=h*m,T=h*_;t[0]=v+T*f,t[4]=M*f-x,t[8]=u*h,t[1]=u*_,t[5]=u*m,t[9]=-f,t[2]=x*f-M,t[6]=T+v*f,t[10]=u*d}else if(e.order==="ZXY"){const v=d*m,x=d*_,M=h*m,T=h*_;t[0]=v-T*f,t[4]=-u*_,t[8]=M+x*f,t[1]=x+M*f,t[5]=u*m,t[9]=T-v*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const v=u*m,x=u*_,M=f*m,T=f*_;t[0]=d*m,t[4]=M*h-x,t[8]=v*h+T,t[1]=d*_,t[5]=T*h+v,t[9]=x*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const v=u*d,x=u*h,M=f*d,T=f*h;t[0]=d*m,t[4]=T-v*_,t[8]=M*_+x,t[1]=_,t[5]=u*m,t[9]=-f*m,t[2]=-h*m,t[6]=x*_+M,t[10]=v-T*_}else if(e.order==="XZY"){const v=u*d,x=u*h,M=f*d,T=f*h;t[0]=d*m,t[4]=-_,t[8]=h*m,t[1]=v*_+T,t[5]=u*m,t[9]=x*_-M,t[2]=M*_-x,t[6]=f*m,t[10]=T*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ub,e,Nb)}lookAt(e,t,a){const s=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),cs.crossVectors(a,ci),cs.lengthSq()===0&&(Math.abs(a.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),cs.crossVectors(a,ci)),cs.normalize(),su.crossVectors(ci,cs),s[0]=cs.x,s[4]=su.x,s[8]=ci.x,s[1]=cs.y,s[5]=su.y,s[9]=ci.y,s[2]=cs.z,s[6]=su.z,s[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],f=a[4],d=a[8],h=a[12],m=a[1],_=a[5],v=a[9],x=a[13],M=a[2],T=a[6],S=a[10],y=a[14],b=a[3],w=a[7],A=a[11],P=a[15],I=s[0],B=s[4],H=s[8],C=s[12],R=s[1],V=s[5],$=s[9],ie=s[13],he=s[2],te=s[6],O=s[10],F=s[14],k=s[3],fe=s[7],N=s[11],K=s[15];return l[0]=u*I+f*R+d*he+h*k,l[4]=u*B+f*V+d*te+h*fe,l[8]=u*H+f*$+d*O+h*N,l[12]=u*C+f*ie+d*F+h*K,l[1]=m*I+_*R+v*he+x*k,l[5]=m*B+_*V+v*te+x*fe,l[9]=m*H+_*$+v*O+x*N,l[13]=m*C+_*ie+v*F+x*K,l[2]=M*I+T*R+S*he+y*k,l[6]=M*B+T*V+S*te+y*fe,l[10]=M*H+T*$+S*O+y*N,l[14]=M*C+T*ie+S*F+y*K,l[3]=b*I+w*R+A*he+P*k,l[7]=b*B+w*V+A*te+P*fe,l[11]=b*H+w*$+A*O+P*N,l[15]=b*C+w*ie+A*F+P*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[12],u=e[1],f=e[5],d=e[9],h=e[13],m=e[2],_=e[6],v=e[10],x=e[14],M=e[3],T=e[7],S=e[11],y=e[15];return M*(+l*d*_-s*h*_-l*f*v+a*h*v+s*f*x-a*d*x)+T*(+t*d*x-t*h*v+l*u*v-s*u*x+s*h*m-l*d*m)+S*(+t*h*_-t*f*x-l*u*_+a*u*x+l*f*m-a*h*m)+y*(-s*f*m-t*d*_+t*f*v+s*u*_-a*u*v+a*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],f=e[5],d=e[6],h=e[7],m=e[8],_=e[9],v=e[10],x=e[11],M=e[12],T=e[13],S=e[14],y=e[15],b=_*S*h-T*v*h+T*d*x-f*S*x-_*d*y+f*v*y,w=M*v*h-m*S*h-M*d*x+u*S*x+m*d*y-u*v*y,A=m*T*h-M*_*h+M*f*x-u*T*x-m*f*y+u*_*y,P=M*_*d-m*T*d-M*f*v+u*T*v+m*f*S-u*_*S,I=t*b+a*w+s*A+l*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=b*B,e[1]=(T*v*l-_*S*l-T*s*x+a*S*x+_*s*y-a*v*y)*B,e[2]=(f*S*l-T*d*l+T*s*h-a*S*h-f*s*y+a*d*y)*B,e[3]=(_*d*l-f*v*l-_*s*h+a*v*h+f*s*x-a*d*x)*B,e[4]=w*B,e[5]=(m*S*l-M*v*l+M*s*x-t*S*x-m*s*y+t*v*y)*B,e[6]=(M*d*l-u*S*l-M*s*h+t*S*h+u*s*y-t*d*y)*B,e[7]=(u*v*l-m*d*l+m*s*h-t*v*h-u*s*x+t*d*x)*B,e[8]=A*B,e[9]=(M*_*l-m*T*l-M*a*x+t*T*x+m*a*y-t*_*y)*B,e[10]=(u*T*l-M*f*l+M*a*h-t*T*h-u*a*y+t*f*y)*B,e[11]=(m*f*l-u*_*l-m*a*h+t*_*h+u*a*x-t*f*x)*B,e[12]=P*B,e[13]=(m*T*s-M*_*s+M*a*v-t*T*v-m*a*S+t*_*S)*B,e[14]=(M*f*s-u*T*s-M*a*d+t*T*d+u*a*S-t*f*S)*B,e[15]=(u*_*s-m*f*s+m*a*d-t*_*d-u*a*v+t*f*v)*B,this}scale(e){const t=this.elements,a=e.x,s=e.y,l=e.z;return t[0]*=a,t[4]*=s,t[8]*=l,t[1]*=a,t[5]*=s,t[9]*=l,t[2]*=a,t[6]*=s,t[10]*=l,t[3]*=a,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,s))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),l=1-a,u=e.x,f=e.y,d=e.z,h=l*u,m=l*f;return this.set(h*u+a,h*f-s*d,h*d+s*f,0,h*f+s*d,m*f+a,m*d-s*u,0,h*d-s*f,m*d+s*u,l*d*d+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,s,l,u){return this.set(1,a,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,a){const s=this.elements,l=t._x,u=t._y,f=t._z,d=t._w,h=l+l,m=u+u,_=f+f,v=l*h,x=l*m,M=l*_,T=u*m,S=u*_,y=f*_,b=d*h,w=d*m,A=d*_,P=a.x,I=a.y,B=a.z;return s[0]=(1-(T+y))*P,s[1]=(x+A)*P,s[2]=(M-w)*P,s[3]=0,s[4]=(x-A)*I,s[5]=(1-(v+y))*I,s[6]=(S+b)*I,s[7]=0,s[8]=(M+w)*B,s[9]=(S-b)*B,s[10]=(1-(v+T))*B,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,a){const s=this.elements;let l=Ir.set(s[0],s[1],s[2]).length();const u=Ir.set(s[4],s[5],s[6]).length(),f=Ir.set(s[8],s[9],s[10]).length();this.determinant()<0&&(l=-l),e.x=s[12],e.y=s[13],e.z=s[14],Ci.copy(this);const h=1/l,m=1/u,_=1/f;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=m,Ci.elements[5]*=m,Ci.elements[6]*=m,Ci.elements[8]*=_,Ci.elements[9]*=_,Ci.elements[10]*=_,t.setFromRotationMatrix(Ci),a.x=l,a.y=u,a.z=f,this}makePerspective(e,t,a,s,l,u,f=Aa){const d=this.elements,h=2*l/(t-e),m=2*l/(a-s),_=(t+e)/(t-e),v=(a+s)/(a-s);let x,M;if(f===Aa)x=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===qu)x=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=h,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,a,s,l,u,f=Aa){const d=this.elements,h=1/(t-e),m=1/(a-s),_=1/(u-l),v=(t+e)*h,x=(a+s)*m;let M,T;if(f===Aa)M=(u+l)*_,T=-2*_;else if(f===qu)M=l*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=T,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<16;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}}const Ir=new q,Ci=new ht,Ub=new q(0,0,0),Nb=new q(1,1,1),cs=new q,su=new q,ci=new q,Ev=new ht,Tv=new Pi;class Bi{constructor(e=0,t=0,a=0,s=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,s=this._order){return this._x=e,this._y=t,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const s=e.elements,l=s[0],u=s[4],f=s[8],d=s[1],h=s[5],m=s[9],_=s[2],v=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return Ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ev,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tv.setFromEuler(this),this.setFromQuaternion(Tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class dm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ob=0;const bv=new q,Br=new Pi,ya=new ht,ru=new q,ml=new q,Pb=new q,Ib=new Pi,Av=new q(1,0,0),wv=new q(0,1,0),Rv=new q(0,0,1),Cv={type:"added"},Bb={type:"removed"},zr={type:"childadded",child:null},bd={type:"childremoved",child:null};class en extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new q,t=new Bi,a=new Pi,s=new q(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new gt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,t){return Br.setFromAxisAngle(e,t),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Av,e)}rotateY(e){return this.rotateOnAxis(wv,e)}rotateZ(e){return this.rotateOnAxis(Rv,e)}translateOnAxis(e,t){return bv.copy(e).applyQuaternion(this.quaternion),this.position.add(bv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Av,e)}translateY(e){return this.translateOnAxis(wv,e)}translateZ(e){return this.translateOnAxis(Rv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ya.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?ru.copy(e):ru.set(e,t,a);const s=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ya.lookAt(ml,ru,this.up):ya.lookAt(ru,ml,this.up),this.quaternion.setFromRotationMatrix(ya),s&&(ya.extractRotation(s.matrixWorld),Br.setFromRotationMatrix(ya),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cv),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bb),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ya.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ya.multiply(e.parent.matrixWorld)),e.applyMatrix4(ya),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cv),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,e,Pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,Ib,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const _=d[h];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(l(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),_=u(e.shapes),v=u(e.skeletons),x=u(e.animations),M=u(e.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),h.length>0&&(a.textures=h),m.length>0&&(a.images=m),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=s,a;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}}en.DEFAULT_UP=new q(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new q,xa=new q,Ad=new q,Sa=new q,Fr=new q,Hr=new q,Dv=new q,wd=new q,Rd=new q,Cd=new q,Dd=new Ut,Ld=new Ut,Ud=new Ut;class Ei{constructor(e=new q,t=new q,a=new q){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,s){s.subVectors(a,t),Di.subVectors(e,t),s.cross(Di);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,a,s,l){Di.subVectors(s,t),xa.subVectors(a,t),Ad.subVectors(e,t);const u=Di.dot(Di),f=Di.dot(xa),d=Di.dot(Ad),h=xa.dot(xa),m=xa.dot(Ad),_=u*h-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,x=(h*d-f*m)*v,M=(u*m-f*d)*v;return l.set(1-x-M,M,x)}static containsPoint(e,t,a,s){return this.getBarycoord(e,t,a,s,Sa)===null?!1:Sa.x>=0&&Sa.y>=0&&Sa.x+Sa.y<=1}static getInterpolation(e,t,a,s,l,u,f,d){return this.getBarycoord(e,t,a,s,Sa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Sa.x),d.addScaledVector(u,Sa.y),d.addScaledVector(f,Sa.z),d)}static getInterpolatedAttribute(e,t,a,s,l,u){return Dd.setScalar(0),Ld.setScalar(0),Ud.setScalar(0),Dd.fromBufferAttribute(e,t),Ld.fromBufferAttribute(e,a),Ud.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Dd,l.x),u.addScaledVector(Ld,l.y),u.addScaledVector(Ud,l.z),u}static isFrontFacing(e,t,a,s){return Di.subVectors(a,t),xa.subVectors(e,t),Di.cross(xa).dot(s)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,s){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,a,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Di.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,s,l){return Ei.getInterpolation(e,this.a,this.b,this.c,t,a,s,l)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,s=this.b,l=this.c;let u,f;Fr.subVectors(s,a),Hr.subVectors(l,a),wd.subVectors(e,a);const d=Fr.dot(wd),h=Hr.dot(wd);if(d<=0&&h<=0)return t.copy(a);Rd.subVectors(e,s);const m=Fr.dot(Rd),_=Hr.dot(Rd);if(m>=0&&_<=m)return t.copy(s);const v=d*_-m*h;if(v<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(a).addScaledVector(Fr,u);Cd.subVectors(e,l);const x=Fr.dot(Cd),M=Hr.dot(Cd);if(M>=0&&x<=M)return t.copy(l);const T=x*h-d*M;if(T<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(a).addScaledVector(Hr,f);const S=m*M-x*_;if(S<=0&&_-m>=0&&x-M>=0)return Dv.subVectors(l,s),f=(_-m)/(_-m+(x-M)),t.copy(s).addScaledVector(Dv,f);const y=1/(S+T+v);return u=T*y,f=v*y,t.copy(a).addScaledVector(Fr,u).addScaledVector(Hr,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},ou={h:0,s:0,l:0};function Nd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class qe{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,a,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=a,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,a,s=Rt.workingColorSpace){if(e=fm(e,1),t=Tt(t,0,1),a=Tt(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=Nd(u,l,e+1/3),this.g=Nd(u,l,e),this.b=Nd(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=hn){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const a=ux[e.toLowerCase()];return a!==void 0?this.setHex(a,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ca(e.r),this.g=Ca(e.g),this.b=Ca(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Rt.workingToColorSpace(Vn.copy(this),e),Math.round(Tt(Vn.r*255,0,255))*65536+Math.round(Tt(Vn.g*255,0,255))*256+Math.round(Tt(Vn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Vn.copy(this),t);const a=Vn.r,s=Vn.g,l=Vn.b,u=Math.max(a,s,l),f=Math.min(a,s,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const _=u-f;switch(h=m<=.5?_/(u+f):_/(2-u-f),u){case a:d=(s-l)/_+(s<l?6:0);break;case s:d=(l-a)/_+2;break;case l:d=(a-s)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=hn){Rt.workingToColorSpace(Vn.copy(this),e);const t=Vn.r,a=Vn.g,s=Vn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,t,a){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(ou);const a=bl(us.h,ou.h,t),s=bl(us.s,ou.s,t),l=bl(us.l,ou.l,t);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*s,this.g=l[1]*t+l[4]*a+l[7]*s,this.b=l[2]*t+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new qe;qe.NAMES=ux;let zb=0;class Ii extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Qr,this.side=La,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tp,this.blendDst=np,this.blendEquation=Ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Qr&&(a.blending=this.blending),this.side!==La&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==tp&&(a.blendSrc=this.blendSrc),this.blendDst!==np&&(a.blendDst=this.blendDst),this.blendEquation!==Ys&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const s=t.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yi extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new q,lu=new et;let Fb=0;class Ln{constructor(e,t,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Fp,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)lu.fromBufferAttribute(this,t),lu.applyMatrix3(e),this.setXY(t,lu.x,lu.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=Li(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Vt(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),a=Vt(a,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),a=Vt(a,this.array),s=Vt(s,this.array),l=Vt(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fp&&(e.usage=this.usage),e}}class fx extends Ln{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class hx extends Ln{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class an extends Ln{constructor(e,t,a){super(new Float32Array(e),t,a)}}let Hb=0;const xi=new ht,Od=new en,Vr=new q,ui=new Na,gl=new Na,Rn=new q;class yn extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?hx:fx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new gt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,a){return xi.makeTranslation(e,t,a),this.applyMatrix4(xi),this}scale(e,t,a){return xi.makeScale(e,t,a),this.applyMatrix4(xi),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vr).negate(),this.translate(Vr.x,Vr.y,Vr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new an(a,3))}else{const a=Math.min(e.length,t.count);for(let s=0;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];ui.setFromBufferAttribute(l),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const a=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];gl.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(ui.min,gl.min),ui.expandByPoint(Rn),Rn.addVectors(ui.max,gl.max),ui.expandByPoint(Rn)):(ui.expandByPoint(gl.min),ui.expandByPoint(gl.max))}ui.getCenter(a);let s=0;for(let l=0,u=e.count;l<u;l++)Rn.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(Rn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Rn.fromBufferAttribute(f,h),d&&(Vr.fromBufferAttribute(e,h),Rn.add(Vr)),s=Math.max(s,a.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let H=0;H<a.count;H++)f[H]=new q,d[H]=new q;const h=new q,m=new q,_=new q,v=new et,x=new et,M=new et,T=new q,S=new q;function y(H,C,R){h.fromBufferAttribute(a,H),m.fromBufferAttribute(a,C),_.fromBufferAttribute(a,R),v.fromBufferAttribute(l,H),x.fromBufferAttribute(l,C),M.fromBufferAttribute(l,R),m.sub(h),_.sub(h),x.sub(v),M.sub(v);const V=1/(x.x*M.y-M.x*x.y);isFinite(V)&&(T.copy(m).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(V),S.copy(_).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(V),f[H].add(T),f[C].add(T),f[R].add(T),d[H].add(S),d[C].add(S),d[R].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let H=0,C=b.length;H<C;++H){const R=b[H],V=R.start,$=R.count;for(let ie=V,he=V+$;ie<he;ie+=3)y(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const w=new q,A=new q,P=new q,I=new q;function B(H){P.fromBufferAttribute(s,H),I.copy(P);const C=f[H];w.copy(C),w.sub(P.multiplyScalar(P.dot(C))).normalize(),A.crossVectors(I,C);const V=A.dot(d[H])<0?-1:1;u.setXYZW(H,w.x,w.y,w.z,V)}for(let H=0,C=b.length;H<C;++H){const R=b[H],V=R.start,$=R.count;for(let ie=V,he=V+$;ie<he;ie+=3)B(e.getX(ie+0)),B(e.getX(ie+1)),B(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let v=0,x=a.count;v<x;v++)a.setXYZ(v,0,0,0);const s=new q,l=new q,u=new q,f=new q,d=new q,h=new q,m=new q,_=new q;if(e)for(let v=0,x=e.count;v<x;v+=3){const M=e.getX(v+0),T=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,S),m.subVectors(u,l),_.subVectors(s,l),m.cross(_),f.fromBufferAttribute(a,M),d.fromBufferAttribute(a,T),h.fromBufferAttribute(a,S),f.add(m),d.add(m),h.add(m),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(S,h.x,h.y,h.z)}else for(let v=0,x=t.count;v<x;v+=3)s.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,l),_.subVectors(s,l),m.cross(_),a.setXYZ(v+0,m.x,m.y,m.z),a.setXYZ(v+1,m.x,m.y,m.z),a.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,_=f.normalized,v=new h.constructor(d.length*m);let x=0,M=0;for(let T=0,S=d.length;T<S;T++){f.isInterleavedBufferAttribute?x=d[T]*f.data.stride+f.offset:x=d[T]*m;for(let y=0;y<m;y++)v[M++]=h[x++]}return new Ln(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new yn,a=this.index.array,s=this.attributes;for(const f in s){const d=s[f],h=e(d,a);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,_=h.length;m<_;m++){const v=h[m],x=e(v,a);d.push(x)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const d in a){const h=a[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let _=0,v=h.length;_<v;_++){const x=h[_];m.push(x.toJSON(e.data))}m.length>0&&(s[d]=m,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],_=l[h];for(let v=0,x=_.length;v<x;v++)m.push(_[v].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const _=u[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lv=new ht,Hs=new Fl,cu=new Qi,Uv=new q,uu=new q,fu=new q,hu=new q,Pd=new q,du=new q,Nv=new q,pu=new q;class Ct extends en{constructor(e=new yn,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){du.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],_=l[d];m!==0&&(Pd.fromBufferAttribute(_,e),u?du.addScaledVector(Pd,m):du.addScaledVector(Pd.sub(t),m))}t.add(du)}return t}raycast(e,t){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),cu.copy(a.boundingSphere),cu.applyMatrix4(l),Hs.copy(e.ray).recast(e.near),!(cu.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(cu,Uv)===null||Hs.origin.distanceToSquared(Uv)>(e.far-e.near)**2))&&(Lv.copy(l).invert(),Hs.copy(e.ray).applyMatrix4(Lv),!(a.boundingBox!==null&&Hs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,a){let s;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,_=l.attributes.normal,v=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],b=Math.max(S.start,x.start),w=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let A=b,P=w;A<P;A+=3){const I=f.getX(A),B=f.getX(A+1),H=f.getX(A+2);s=mu(this,y,e,a,h,m,_,I,B,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),T=Math.min(f.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const b=f.getX(S),w=f.getX(S+1),A=f.getX(S+2);s=mu(this,u,e,a,h,m,_,b,w,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,T=v.length;M<T;M++){const S=v[M],y=u[S.materialIndex],b=Math.max(S.start,x.start),w=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let A=b,P=w;A<P;A+=3){const I=A,B=A+1,H=A+2;s=mu(this,y,e,a,h,m,_,I,B,H),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=M,y=T;S<y;S+=3){const b=S,w=S+1,A=S+2;s=mu(this,u,e,a,h,m,_,b,w,A),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function Vb(r,e,t,a,s,l,u,f){let d;if(e.side===qn?d=a.intersectTriangle(u,l,s,!0,f):d=a.intersectTriangle(s,l,u,e.side===La,f),d===null)return null;pu.copy(f),pu.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(pu);return h<t.near||h>t.far?null:{distance:h,point:pu.clone(),object:r}}function mu(r,e,t,a,s,l,u,f,d,h){r.getVertexPosition(f,uu),r.getVertexPosition(d,fu),r.getVertexPosition(h,hu);const m=Vb(r,e,t,a,uu,fu,hu,Nv);if(m){const _=new q;Ei.getBarycoord(Nv,uu,fu,hu,_),s&&(m.uv=Ei.getInterpolatedAttribute(s,f,d,h,_,new et)),l&&(m.uv1=Ei.getInterpolatedAttribute(l,f,d,h,_,new et)),u&&(m.normal=Ei.getInterpolatedAttribute(u,f,d,h,_,new q),m.normal.dot(a.direction)>0&&m.normal.multiplyScalar(-1));const v={a:f,b:d,c:h,normal:new q,materialIndex:0};Ei.getNormal(uu,fu,hu,v.normal),m.face=v,m.barycoord=_}return m}class Hl extends yn{constructor(e=1,t=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],_=[];let v=0,x=0;M("z","y","x",-1,-1,a,t,e,u,l,0),M("z","y","x",1,-1,a,t,-e,u,l,1),M("x","z","y",1,1,e,a,t,s,u,2),M("x","z","y",1,-1,e,a,-t,s,u,3),M("x","y","z",1,-1,e,t,a,s,l,4),M("x","y","z",-1,-1,e,t,-a,s,l,5),this.setIndex(d),this.setAttribute("position",new an(h,3)),this.setAttribute("normal",new an(m,3)),this.setAttribute("uv",new an(_,2));function M(T,S,y,b,w,A,P,I,B,H,C){const R=A/B,V=P/H,$=A/2,ie=P/2,he=I/2,te=B+1,O=H+1;let F=0,k=0;const fe=new q;for(let N=0;N<O;N++){const K=N*V-ie;for(let Z=0;Z<te;Z++){const de=Z*R-$;fe[T]=de*b,fe[S]=K*w,fe[y]=he,h.push(fe.x,fe.y,fe.z),fe[T]=0,fe[S]=0,fe[y]=I>0?1:-1,m.push(fe.x,fe.y,fe.z),_.push(Z/B),_.push(1-N/H),F+=1}}for(let N=0;N<H;N++)for(let K=0;K<B;K++){const Z=v+K+te*N,de=v+K+te*(N+1),X=v+(K+1)+te*(N+1),le=v+(K+1)+te*N;d.push(Z,de,le),d.push(de,X,le),k+=6}f.addGroup(x,k,C),x+=k,v+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lo(r){const e={};for(const t in r){e[t]={};for(const a in r[t]){const s=r[t][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=s.clone():Array.isArray(s)?e[t][a]=s.slice():e[t][a]=s}}return e}function Wn(r){const e={};for(let t=0;t<r.length;t++){const a=lo(r[t]);for(const s in a)e[s]=a[s]}return e}function Gb(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function dx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const kb={clone:lo,merge:Wn};var Wb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wb,this.fragmentShader=Xb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lo(e.uniforms),this.uniformsGroups=Gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}}class px extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Aa}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new q,Ov=new et,Pv=new et;class Dn extends px{constructor(e=50,t=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Ov,Pv),t.subVectors(Pv,Ov)}setViewOffset(e,t,a,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,a=2*t,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*s/d,t-=u.offsetY*a/h,s*=u.width/d,a*=u.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-a,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gr=-90,kr=1;class qb extends en{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(Gr,kr,e,t);s.layers=this.layers,this.add(s);const l=new Dn(Gr,kr,e,t);l.layers=this.layers,this.add(l);const u=new Dn(Gr,kr,e,t);u.layers=this.layers,this.add(u);const f=new Dn(Gr,kr,e,t);f.layers=this.layers,this.add(f);const d=new Dn(Gr,kr,e,t);d.layers=this.layers,this.add(d);const h=new Dn(Gr,kr,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,s,l,u,f,d]=t;for(const h of t)this.remove(h);if(e===Aa)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===qu)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,s),e.render(t,l),e.setRenderTarget(a,1,s),e.render(t,u),e.setRenderTarget(a,2,s),e.render(t,f),e.setRenderTarget(a,3,s),e.render(t,d),e.setRenderTarget(a,4,s),e.render(t,h),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,s),e.render(t,m),e.setRenderTarget(_,v,x),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class pm extends vn{constructor(e=[],t=ao,a,s,l,u,f,d,h,m){super(e,t,a,s,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yb extends Zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new pm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hl(5,5,5),l=new hi({name:"CubemapFromEquirect",uniforms:lo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:qn,blending:gs});l.uniforms.tEquirect.value=t;const u=new Ct(s,l),f=t.minFilter;return t.minFilter===ba&&(t.minFilter=fi),new qb(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,s);e.setRenderTarget(l)}}class Ni extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jb={type:"move"};class Id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let s=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,a),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=m.position.distanceTo(_.position),x=.02,M=.005;h.inputState.pinching&&v>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new Ni;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}class tf extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Kb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fp,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let s=0,l=this.stride;s<l;s++)this.array[e+s]=t.array[a+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new q;class mm{constructor(e,t,a,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=Li(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Vt(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Li(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),a=Vt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),a=Vt(a,this.array),s=Vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),a=Vt(a,this.array),s=Vt(s,this.array),l=Vt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this.data.array[e+3]=l,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return new Ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new mm(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Iv=new q,Bv=new Ut,zv=new Ut,Zb=new q,Fv=new ht,gu=new q,Bd=new Qi,Hv=new ht,zd=new Fl;class Qb extends Ct{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mv,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Na),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,gu),this.boundingBox.expandByPoint(gu)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Qi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let a=0;a<t.count;a++)this.getVertexPosition(a,gu),this.boundingSphere.expandByPoint(gu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const a=this.material,s=this.matrixWorld;a!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bd.copy(this.boundingSphere),Bd.applyMatrix4(s),e.ray.intersectsSphere(Bd)!==!1&&(Hv.copy(s).invert(),zd.copy(e.ray).applyMatrix4(Hv),!(this.boundingBox!==null&&zd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let a=0,s=t.count;a<s;a++){e.fromBufferAttribute(t,a);const l=1/e.manhattanLength();l!==1/0?e.multiplyScalar(l):e.set(1,0,0,0),t.setXYZW(a,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mv?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const a=this.skeleton,s=this.geometry;Bv.fromBufferAttribute(s.attributes.skinIndex,e),zv.fromBufferAttribute(s.attributes.skinWeight,e),Iv.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let l=0;l<4;l++){const u=zv.getComponent(l);if(u!==0){const f=Bv.getComponent(l);Fv.multiplyMatrices(a.bones[f].matrixWorld,a.boneInverses[f]),t.addScaledVector(Zb.copy(Iv).applyMatrix4(Fv),u)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mx extends en{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gx extends vn{constructor(e=null,t=1,a=1,s,l,u,f,d,h=Yn,m=Yn,_,v){super(null,u,f,d,h,m,s,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vv=new ht,Jb=new ht;class gm{constructor(e=[],t=[]){this.uuid=Oi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,s=this.bones.length;a<s;a++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const a=new ht;this.bones[e]&&a.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&a.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const a=this.bones[e];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const e=this.bones,t=this.boneInverses,a=this.boneMatrices,s=this.boneTexture;for(let l=0,u=e.length;l<u;l++){const f=e[l]?e[l].matrixWorld:Jb;Vv.multiplyMatrices(f,t[l]),Vv.toArray(a,l*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new gm(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const a=new gx(t,e,e,Ti,Ui);return a.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=a,this}getBoneByName(e){for(let t=0,a=this.bones.length;t<a;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let a=0,s=e.bones.length;a<s;a++){const l=e.bones[a];let u=t[l];u===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",l),u=new mx),this.bones.push(u),this.boneInverses.push(new ht().fromArray(e.boneInverses[a]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,a=this.boneInverses;for(let s=0,l=t.length;s<l;s++){const u=t[s];e.bones.push(u.uuid);const f=a[s];e.boneInverses.push(f.toArray())}return e}}class Hp extends Ln{constructor(e,t,a,s=1){super(e,t,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wr=new ht,Gv=new ht,_u=[],kv=new Na,$b=new ht,_l=new Ct,vl=new Qi;class eA extends Ct{constructor(e,t,a){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hp(new Float32Array(a*16),16),this.instanceColor=null,this.morphTexture=null,this.count=a,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<a;s++)this.setMatrixAt(s,$b)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Na),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,Wr),kv.copy(e.boundingBox).applyMatrix4(Wr),this.boundingBox.union(kv)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let a=0;a<t;a++)this.getMatrixAt(a,Wr),vl.copy(e.boundingSphere).applyMatrix4(Wr),this.boundingSphere.union(vl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const a=t.morphTargetInfluences,s=this.morphTexture.source.data.data,l=a.length+1,u=e*l+1;for(let f=0;f<a.length;f++)a[f]=s[u+f]}raycast(e,t){const a=this.matrixWorld,s=this.count;if(_l.geometry=this.geometry,_l.material=this.material,_l.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vl.copy(this.boundingSphere),vl.applyMatrix4(a),e.ray.intersectsSphere(vl)!==!1))for(let l=0;l<s;l++){this.getMatrixAt(l,Wr),Gv.multiplyMatrices(a,Wr),_l.matrixWorld=Gv,_l.raycast(e,_u);for(let u=0,f=_u.length;u<f;u++){const d=_u[u];d.instanceId=l,d.object=this,t.push(d)}_u.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const a=t.morphTargetInfluences,s=a.length+1;this.morphTexture===null&&(this.morphTexture=new gx(new Float32Array(s*this.count),s,this.count,sm,Ui));const l=this.morphTexture.source.data.data;let u=0;for(let h=0;h<a.length;h++)u+=a[h];const f=this.geometry.morphTargetsRelative?1:1-u,d=s*e;l[d]=f,l.set(a,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fd=new q,tA=new q,nA=new gt;class Xs{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,s){return this.normal.set(e,t,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const s=Fd.subVectors(a,t).cross(tA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const a=e.delta(Fd),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/s;return l<0||l>1?null:t.copy(e.start).addScaledVector(a,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||nA.getNormalMatrix(e),s=this.coplanarPoint(Fd).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new Qi,iA=new et(.5,.5),vu=new q;class _m{constructor(e=new Xs,t=new Xs,a=new Xs,s=new Xs,l=new Xs,u=new Xs){this.planes=[e,t,a,s,l,u]}set(e,t,a,s,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=Aa){const a=this.planes,s=e.elements,l=s[0],u=s[1],f=s[2],d=s[3],h=s[4],m=s[5],_=s[6],v=s[7],x=s[8],M=s[9],T=s[10],S=s[11],y=s[12],b=s[13],w=s[14],A=s[15];if(a[0].setComponents(d-l,v-h,S-x,A-y).normalize(),a[1].setComponents(d+l,v+h,S+x,A+y).normalize(),a[2].setComponents(d+u,v+m,S+M,A+b).normalize(),a[3].setComponents(d-u,v-m,S-M,A-b).normalize(),a[4].setComponents(d-f,v-_,S-T,A-w).normalize(),t===Aa)a[5].setComponents(d+f,v+_,S+T,A+w).normalize();else if(t===qu)a[5].setComponents(f,_,T,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const t=iA.distanceTo(e.center);return Vs.radius=.7071067811865476+t,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const t=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const s=t[a];if(vu.x=s.normal.x>0?e.max.x:e.min.x,vu.y=s.normal.y>0?e.max.y:e.min.y,vu.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xi extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yu=new q,ju=new q,Wv=new ht,yl=new Fl,yu=new Qi,Hd=new q,Xv=new q;class to extends en{constructor(e=new yn,t=new Xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[0];for(let s=1,l=t.count;s<l;s++)Yu.fromBufferAttribute(t,s-1),ju.fromBufferAttribute(t,s),a[s]=a[s-1],a[s]+=Yu.distanceTo(ju);e.setAttribute("lineDistance",new an(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const a=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),yu.copy(a.boundingSphere),yu.applyMatrix4(s),yu.radius+=l,e.ray.intersectsSphere(yu)===!1)return;Wv.copy(s).invert(),yl.copy(e.ray).applyMatrix4(Wv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=a.index,v=a.attributes.position;if(m!==null){const x=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let T=x,S=M-1;T<S;T+=h){const y=m.getX(T),b=m.getX(T+1),w=xu(this,e,yl,d,y,b,T);w&&t.push(w)}if(this.isLineLoop){const T=m.getX(M-1),S=m.getX(x),y=xu(this,e,yl,d,T,S,M-1);y&&t.push(y)}}else{const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let T=x,S=M-1;T<S;T+=h){const y=xu(this,e,yl,d,T,T+1,T);y&&t.push(y)}if(this.isLineLoop){const T=xu(this,e,yl,d,M-1,x,M-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function xu(r,e,t,a,s,l,u){const f=r.geometry.attributes.position;if(Yu.fromBufferAttribute(f,s),ju.fromBufferAttribute(f,l),t.distanceSqToSegment(Yu,ju,Hd,Xv)>a)return;Hd.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Hd);if(!(h<e.near||h>e.far))return{distance:h,point:Xv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const qv=new q,Yv=new q;class Yr extends to{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,a=[];for(let s=0,l=t.count;s<l;s+=2)qv.fromBufferAttribute(t,s),Yv.fromBufferAttribute(t,s+1),a[s]=s===0?0:a[s-1],a[s+1]=a[s]+qv.distanceTo(Yv);e.setAttribute("lineDistance",new an(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class aA extends to{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _x extends Ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jv=new ht,Vp=new Fl,Su=new Qi,Mu=new q;class sA extends en{constructor(e=new yn,t=new _x){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const a=this.geometry,s=this.matrixWorld,l=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Su.copy(a.boundingSphere),Su.applyMatrix4(s),Su.radius+=l,e.ray.intersectsSphere(Su)===!1)return;jv.copy(s).invert(),Vp.copy(e.ray).applyMatrix4(jv);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=a.index,_=a.attributes.position;if(h!==null){const v=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let M=v,T=x;M<T;M++){const S=h.getX(M);Mu.fromBufferAttribute(_,S),Kv(Mu,S,d,s,e,t,this)}}else{const v=Math.max(0,u.start),x=Math.min(_.count,u.start+u.count);for(let M=v,T=x;M<T;M++)Mu.fromBufferAttribute(_,M),Kv(Mu,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Kv(r,e,t,a,s,l,u){const f=Vp.distanceSqToPoint(r);if(f<t){const d=new q;Vp.closestPointToPoint(r,d),d.applyMatrix4(a);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class vx extends vn{constructor(e,t,a=Ks,s,l,u,f=Yn,d=Yn,h,m=Dl,_=1){if(m!==Dl&&m!==Ll)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,s,l,u,f,d,m,a,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new hm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ps extends yn{constructor(e=1,t=32,a=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:a,thetaLength:s},t=Math.max(3,t);const l=[],u=[],f=[],d=[],h=new q,m=new et;u.push(0,0,0),f.push(0,0,1),d.push(.5,.5);for(let _=0,v=3;_<=t;_++,v+=3){const x=a+_/t*s;h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.push(h.x,h.y,h.z),f.push(0,0,1),m.x=(u[v]/e+1)/2,m.y=(u[v+1]/e+1)/2,d.push(m.x,m.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new an(u,3)),this.setAttribute("normal",new an(f,3)),this.setAttribute("uv",new an(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ku extends yn{constructor(e=1,t=1,a=1,s=32,l=1,u=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:a,radialSegments:s,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:d};const h=this;s=Math.floor(s),l=Math.floor(l);const m=[],_=[],v=[],x=[];let M=0;const T=[],S=a/2;let y=0;b(),u===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(m),this.setAttribute("position",new an(_,3)),this.setAttribute("normal",new an(v,3)),this.setAttribute("uv",new an(x,2));function b(){const A=new q,P=new q;let I=0;const B=(t-e)/a;for(let H=0;H<=l;H++){const C=[],R=H/l,V=R*(t-e)+e;for(let $=0;$<=s;$++){const ie=$/s,he=ie*d+f,te=Math.sin(he),O=Math.cos(he);P.x=V*te,P.y=-R*a+S,P.z=V*O,_.push(P.x,P.y,P.z),A.set(te,B,O).normalize(),v.push(A.x,A.y,A.z),x.push(ie,1-R),C.push(M++)}T.push(C)}for(let H=0;H<s;H++)for(let C=0;C<l;C++){const R=T[C][H],V=T[C+1][H],$=T[C+1][H+1],ie=T[C][H+1];(e>0||C!==0)&&(m.push(R,V,ie),I+=3),(t>0||C!==l-1)&&(m.push(V,$,ie),I+=3)}h.addGroup(y,I,0),y+=I}function w(A){const P=M,I=new et,B=new q;let H=0;const C=A===!0?e:t,R=A===!0?1:-1;for(let $=1;$<=s;$++)_.push(0,S*R,0),v.push(0,R,0),x.push(.5,.5),M++;const V=M;for(let $=0;$<=s;$++){const he=$/s*d+f,te=Math.cos(he),O=Math.sin(he);B.x=C*O,B.y=S*R,B.z=C*te,_.push(B.x,B.y,B.z),v.push(0,R,0),I.x=te*.5+.5,I.y=O*.5*R+.5,x.push(I.x,I.y),M++}for(let $=0;$<s;$++){const ie=P+$,he=V+$;A===!0?m.push(he,he+1,ie):m.push(he+1,he,ie),H+=3}h.addGroup(y,H,A===!0?1:2),y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vm extends yn{constructor(e=[],t=[],a=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:a,detail:s};const l=[],u=[];f(s),h(a),m(),this.setAttribute("position",new an(l,3)),this.setAttribute("normal",new an(l.slice(),3)),this.setAttribute("uv",new an(u,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function f(b){const w=new q,A=new q,P=new q;for(let I=0;I<t.length;I+=3)x(t[I+0],w),x(t[I+1],A),x(t[I+2],P),d(w,A,P,b)}function d(b,w,A,P){const I=P+1,B=[];for(let H=0;H<=I;H++){B[H]=[];const C=b.clone().lerp(A,H/I),R=w.clone().lerp(A,H/I),V=I-H;for(let $=0;$<=V;$++)$===0&&H===I?B[H][$]=C:B[H][$]=C.clone().lerp(R,$/V)}for(let H=0;H<I;H++)for(let C=0;C<2*(I-H)-1;C++){const R=Math.floor(C/2);C%2===0?(v(B[H][R+1]),v(B[H+1][R]),v(B[H][R])):(v(B[H][R+1]),v(B[H+1][R+1]),v(B[H+1][R]))}}function h(b){const w=new q;for(let A=0;A<l.length;A+=3)w.x=l[A+0],w.y=l[A+1],w.z=l[A+2],w.normalize().multiplyScalar(b),l[A+0]=w.x,l[A+1]=w.y,l[A+2]=w.z}function m(){const b=new q;for(let w=0;w<l.length;w+=3){b.x=l[w+0],b.y=l[w+1],b.z=l[w+2];const A=S(b)/2/Math.PI+.5,P=y(b)/Math.PI+.5;u.push(A,1-P)}M(),_()}function _(){for(let b=0;b<u.length;b+=6){const w=u[b+0],A=u[b+2],P=u[b+4],I=Math.max(w,A,P),B=Math.min(w,A,P);I>.9&&B<.1&&(w<.2&&(u[b+0]+=1),A<.2&&(u[b+2]+=1),P<.2&&(u[b+4]+=1))}}function v(b){l.push(b.x,b.y,b.z)}function x(b,w){const A=b*3;w.x=e[A+0],w.y=e[A+1],w.z=e[A+2]}function M(){const b=new q,w=new q,A=new q,P=new q,I=new et,B=new et,H=new et;for(let C=0,R=0;C<l.length;C+=9,R+=6){b.set(l[C+0],l[C+1],l[C+2]),w.set(l[C+3],l[C+4],l[C+5]),A.set(l[C+6],l[C+7],l[C+8]),I.set(u[R+0],u[R+1]),B.set(u[R+2],u[R+3]),H.set(u[R+4],u[R+5]),P.copy(b).add(w).add(A).divideScalar(3);const V=S(P);T(I,R+0,b,V),T(B,R+2,w,V),T(H,R+4,A,V)}}function T(b,w,A,P){P<0&&b.x===1&&(u[w]=b.x-1),A.x===0&&A.z===0&&(u[w]=P/2/Math.PI+.5)}function S(b){return Math.atan2(b.z,-b.x)}function y(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vm(e.vertices,e.indices,e.radius,e.details)}}const Eu=new q,Tu=new q,Vd=new q,bu=new Ei;class xl extends yn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),l=Math.cos(Jr*t),u=e.getIndex(),f=e.getAttribute("position"),d=u?u.count:f.count,h=[0,0,0],m=["a","b","c"],_=new Array(3),v={},x=[];for(let M=0;M<d;M+=3){u?(h[0]=u.getX(M),h[1]=u.getX(M+1),h[2]=u.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:T,b:S,c:y}=bu;if(T.fromBufferAttribute(f,h[0]),S.fromBufferAttribute(f,h[1]),y.fromBufferAttribute(f,h[2]),bu.getNormal(Vd),_[0]=`${Math.round(T.x*s)},${Math.round(T.y*s)},${Math.round(T.z*s)}`,_[1]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,_[2]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let b=0;b<3;b++){const w=(b+1)%3,A=_[b],P=_[w],I=bu[m[b]],B=bu[m[w]],H=`${A}_${P}`,C=`${P}_${A}`;C in v&&v[C]?(Vd.dot(v[C].normal)<=l&&(x.push(I.x,I.y,I.z),x.push(B.x,B.y,B.z)),v[C]=null):H in v||(v[H]={index0:h[b],index1:h[w],normal:Vd.clone()})}}for(const M in v)if(v[M]){const{index0:T,index1:S}=v[M];Eu.fromBufferAttribute(f,T),Tu.fromBufferAttribute(f,S),x.push(Eu.x,Eu.y,Eu.z),x.push(Tu.x,Tu.y,Tu.z)}this.setAttribute("position",new an(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class vs extends yn{constructor(e=1,t=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:s};const l=e/2,u=t/2,f=Math.floor(a),d=Math.floor(s),h=f+1,m=d+1,_=e/f,v=t/d,x=[],M=[],T=[],S=[];for(let y=0;y<m;y++){const b=y*v-u;for(let w=0;w<h;w++){const A=w*_-l;M.push(A,-b,0),T.push(0,0,1),S.push(w/f),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let b=0;b<f;b++){const w=b+h*y,A=b+h*(y+1),P=b+1+h*(y+1),I=b+1+h*y;x.push(w,A,I),x.push(A,P,I)}this.setIndex(x),this.setAttribute("position",new an(M,3)),this.setAttribute("normal",new an(T,3)),this.setAttribute("uv",new an(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mi extends yn{constructor(e=1,t=32,a=16,s=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:s,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));const d=Math.min(u+f,Math.PI);let h=0;const m=[],_=new q,v=new q,x=[],M=[],T=[],S=[];for(let y=0;y<=a;y++){const b=[],w=y/a;let A=0;y===0&&u===0?A=.5/t:y===a&&d===Math.PI&&(A=-.5/t);for(let P=0;P<=t;P++){const I=P/t;_.x=-e*Math.cos(s+I*l)*Math.sin(u+w*f),_.y=e*Math.cos(u+w*f),_.z=e*Math.sin(s+I*l)*Math.sin(u+w*f),M.push(_.x,_.y,_.z),v.copy(_).normalize(),T.push(v.x,v.y,v.z),S.push(I+A,1-w),b.push(h++)}m.push(b)}for(let y=0;y<a;y++)for(let b=0;b<t;b++){const w=m[y][b+1],A=m[y][b],P=m[y+1][b],I=m[y+1][b+1];(y!==0||u>0)&&x.push(w,A,I),(y!==a-1||d<Math.PI)&&x.push(A,P,I)}this.setIndex(x),this.setAttribute("position",new an(M,3)),this.setAttribute("normal",new an(T,3)),this.setAttribute("uv",new an(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ym extends vm{constructor(e=1,t=0){const a=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(a,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ym(e.radius,e.detail)}}class co extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=um,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xn extends co{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new et(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rA extends Ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=um,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oA extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lA extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Au(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function cA(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function uA(r){function e(s,l){return r[s]-r[l]}const t=r.length,a=new Array(t);for(let s=0;s!==t;++s)a[s]=s;return a.sort(e),a}function Zv(r,e,t){const a=r.length,s=new r.constructor(a);for(let l=0,u=0;u!==a;++l){const f=t[l]*e;for(let d=0;d!==e;++d)s[u++]=r[f+d]}return s}function yx(r,e,t,a){let s=1,l=r[0];for(;l!==void 0&&l[a]===void 0;)l=r[s++];if(l===void 0)return;let u=l[a];if(u!==void 0)if(Array.isArray(u))do u=l[a],u!==void 0&&(e.push(l.time),t.push(...u)),l=r[s++];while(l!==void 0);else if(u.toArray!==void 0)do u=l[a],u!==void 0&&(e.push(l.time),u.toArray(t,t.length)),l=r[s++];while(l!==void 0);else do u=l[a],u!==void 0&&(e.push(l.time),t.push(u)),l=r[s++];while(l!==void 0)}class Vl{constructor(e,t,a,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(a),this.sampleValues=t,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let a=this._cachedIndex,s=t[a],l=t[a-1];e:{t:{let u;n:{i:if(!(e<s)){for(let f=a+2;;){if(s===void 0){if(e<l)break i;return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===f)break;if(l=s,s=t[++a],e<s)break t}u=t.length;break n}if(!(e>=l)){const f=t[1];e<f&&(a=2,l=f);for(let d=a-2;;){if(l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===d)break;if(s=l,l=t[--a-1],e>=l)break t}u=a,a=0;break n}break e}for(;a<u;){const f=a+u>>>1;e<t[f]?u=f:a=f+1}if(s=t[a],l=t[a-1],l===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return a=t.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,l,s)}return this.interpolate_(a,l,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s;for(let u=0;u!==s;++u)t[u]=a[l+u];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class fA extends Vl{constructor(e,t,a,s){super(e,t,a,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jr,endingEnd:jr}}intervalChanged_(e,t,a){const s=this.parameterPositions;let l=e-2,u=e+1,f=s[l],d=s[u];if(f===void 0)switch(this.getSettings_().endingStart){case Kr:l=e,f=2*t-a;break;case Wu:l=s.length-2,f=t+s[l]-s[l+1];break;default:l=e,f=a}if(d===void 0)switch(this.getSettings_().endingEnd){case Kr:u=e,d=2*a-t;break;case Wu:u=1,d=a+s[1]-s[0];break;default:u=e-1,d=t}const h=(a-t)*.5,m=this.valueSize;this._weightPrev=h/(t-f),this._weightNext=h/(d-a),this._offsetPrev=l*m,this._offsetNext=u*m}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,m=this._offsetPrev,_=this._offsetNext,v=this._weightPrev,x=this._weightNext,M=(a-t)/(s-t),T=M*M,S=T*M,y=-v*S+2*v*T-v*M,b=(1+v)*S+(-1.5-2*v)*T+(-.5+v)*M+1,w=(-1-x)*S+(1.5+x)*T+.5*M,A=x*S-x*T;for(let P=0;P!==f;++P)l[P]=y*u[m+P]+b*u[h+P]+w*u[d+P]+A*u[_+P];return l}}class xx extends Vl{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,m=(a-t)/(s-t),_=1-m;for(let v=0;v!==f;++v)l[v]=u[h+v]*_+u[d+v]*m;return l}}class hA extends Vl{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class zi{constructor(e,t,a,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Au(t,this.TimeBufferType),this.values=Au(a,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let a;if(t.toJSON!==this.toJSON)a=t.toJSON(e);else{a={name:e.name,times:Au(e.times,Array),values:Au(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(a.interpolation=s)}return a.type=e.ValueTypeName,a}InterpolantFactoryMethodDiscrete(e){return new hA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ul:t=this.InterpolantFactoryMethodDiscrete;break;case Nl:t=this.InterpolantFactoryMethodLinear;break;case md:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ul;case this.InterpolantFactoryMethodLinear:return Nl;case this.InterpolantFactoryMethodSmooth:return md}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let a=0,s=t.length;a!==s;++a)t[a]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let a=0,s=t.length;a!==s;++a)t[a]*=e}return this}trim(e,t){const a=this.times,s=a.length;let l=0,u=s-1;for(;l!==s&&a[l]<e;)++l;for(;u!==-1&&a[u]>t;)--u;if(++u,l!==0||u!==s){l>=u&&(u=Math.max(u,1),l=u-1);const f=this.getValueSize();this.times=a.slice(l,u),this.values=this.values.slice(l*f,u*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const a=this.times,s=this.values,l=a.length;l===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let u=null;for(let f=0;f!==l;f++){const d=a[f];if(typeof d=="number"&&isNaN(d)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,d),e=!1;break}if(u!==null&&u>d){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,d,u),e=!1;break}u=d}if(s!==void 0&&cA(s))for(let f=0,d=s.length;f!==d;++f){const h=s[f];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,f,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),a=this.getValueSize(),s=this.getInterpolation()===md,l=e.length-1;let u=1;for(let f=1;f<l;++f){let d=!1;const h=e[f],m=e[f+1];if(h!==m&&(f!==1||h!==e[0]))if(s)d=!0;else{const _=f*a,v=_-a,x=_+a;for(let M=0;M!==a;++M){const T=t[_+M];if(T!==t[v+M]||T!==t[x+M]){d=!0;break}}}if(d){if(f!==u){e[u]=e[f];const _=f*a,v=u*a;for(let x=0;x!==a;++x)t[v+x]=t[_+x]}++u}}if(l>0){e[u]=e[l];for(let f=l*a,d=u*a,h=0;h!==a;++h)t[d+h]=t[f+h];++u}return u!==e.length?(this.times=e.slice(0,u),this.values=t.slice(0,u*a)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),a=this.constructor,s=new a(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}zi.prototype.ValueTypeName="";zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=Nl;class mo extends zi{constructor(e,t,a){super(e,t,a)}}mo.prototype.ValueTypeName="bool";mo.prototype.ValueBufferType=Array;mo.prototype.DefaultInterpolation=Ul;mo.prototype.InterpolantFactoryMethodLinear=void 0;mo.prototype.InterpolantFactoryMethodSmooth=void 0;class Sx extends zi{constructor(e,t,a,s){super(e,t,a,s)}}Sx.prototype.ValueTypeName="color";class uo extends zi{constructor(e,t,a,s){super(e,t,a,s)}}uo.prototype.ValueTypeName="number";class dA extends Vl{constructor(e,t,a,s){super(e,t,a,s)}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=(a-t)/(s-t);let h=e*f;for(let m=h+f;h!==m;h+=4)Pi.slerpFlat(l,0,u,h-f,u,h,d);return l}}class fo extends zi{constructor(e,t,a,s){super(e,t,a,s)}InterpolantFactoryMethodLinear(e){return new dA(this.times,this.values,this.getValueSize(),e)}}fo.prototype.ValueTypeName="quaternion";fo.prototype.InterpolantFactoryMethodSmooth=void 0;class go extends zi{constructor(e,t,a){super(e,t,a)}}go.prototype.ValueTypeName="string";go.prototype.ValueBufferType=Array;go.prototype.DefaultInterpolation=Ul;go.prototype.InterpolantFactoryMethodLinear=void 0;go.prototype.InterpolantFactoryMethodSmooth=void 0;class ho extends zi{constructor(e,t,a,s){super(e,t,a,s)}}ho.prototype.ValueTypeName="vector";class Gp{constructor(e="",t=-1,a=[],s=cm){this.name=e,this.tracks=a,this.duration=t,this.blendMode=s,this.uuid=Oi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],a=e.tracks,s=1/(e.fps||1);for(let u=0,f=a.length;u!==f;++u)t.push(mA(a[u]).scale(s));const l=new this(e.name,e.duration,t,e.blendMode);return l.uuid=e.uuid,l}static toJSON(e){const t=[],a=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let l=0,u=a.length;l!==u;++l)t.push(zi.toJSON(a[l]));return s}static CreateFromMorphTargetSequence(e,t,a,s){const l=t.length,u=[];for(let f=0;f<l;f++){let d=[],h=[];d.push((f+l-1)%l,f,(f+1)%l),h.push(0,1,0);const m=uA(d);d=Zv(d,1,m),h=Zv(h,1,m),!s&&d[0]===0&&(d.push(l),h.push(h[0])),u.push(new uo(".morphTargetInfluences["+t[f].name+"]",d,h).scale(1/a))}return new this(e,-1,u)}static findByName(e,t){let a=e;if(!Array.isArray(e)){const s=e;a=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<a.length;s++)if(a[s].name===t)return a[s];return null}static CreateClipsFromMorphTargetSequences(e,t,a){const s={},l=/^([\w-]*?)([\d]+)$/;for(let f=0,d=e.length;f<d;f++){const h=e[f],m=h.name.match(l);if(m&&m.length>1){const _=m[1];let v=s[_];v||(s[_]=v=[]),v.push(h)}}const u=[];for(const f in s)u.push(this.CreateFromMorphTargetSequence(f,s[f],t,a));return u}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(_,v,x,M,T){if(x.length!==0){const S=[],y=[];yx(x,S,y,M),S.length!==0&&T.push(new _(v,S,y))}},s=[],l=e.name||"default",u=e.fps||30,f=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let _=0;_<h.length;_++){const v=h[_].keys;if(!(!v||v.length===0))if(v[0].morphTargets){const x={};let M;for(M=0;M<v.length;M++)if(v[M].morphTargets)for(let T=0;T<v[M].morphTargets.length;T++)x[v[M].morphTargets[T]]=-1;for(const T in x){const S=[],y=[];for(let b=0;b!==v[M].morphTargets.length;++b){const w=v[M];S.push(w.time),y.push(w.morphTarget===T?1:0)}s.push(new uo(".morphTargetInfluence["+T+"]",S,y))}d=x.length*u}else{const x=".bones["+t[_].name+"]";a(ho,x+".position",v,"pos",s),a(fo,x+".quaternion",v,"rot",s),a(ho,x+".scale",v,"scl",s)}}return s.length===0?null:new this(l,d,s,f)}resetDuration(){const e=this.tracks;let t=0;for(let a=0,s=e.length;a!==s;++a){const l=this.tracks[a];t=Math.max(t,l.times[l.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function pA(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return uo;case"vector":case"vector2":case"vector3":case"vector4":return ho;case"color":return Sx;case"quaternion":return fo;case"bool":case"boolean":return mo;case"string":return go}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function mA(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pA(r.type);if(r.times===void 0){const t=[],a=[];yx(r.keys,t,a,"value"),r.times=t,r.values=a}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const wa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class gA{constructor(e,t,a){const s=this;let l=!1,u=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this.itemStart=function(m){f++,l===!1&&s.onStart!==void 0&&s.onStart(m,u,f),l=!0},this.itemEnd=function(m){u++,s.onProgress!==void 0&&s.onProgress(m,u,f),u===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,_){return h.push(m,_),this},this.removeHandler=function(m){const _=h.indexOf(m);return _!==-1&&h.splice(_,2),this},this.getHandler=function(m){for(let _=0,v=h.length;_<v;_+=2){const x=h[_],M=h[_+1];if(x.global&&(x.lastIndex=0),x.test(m))return M}return null}}}const _A=new gA;class $s{constructor(e){this.manager=e!==void 0?e:_A,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const a=this;return new Promise(function(s,l){a.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$s.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ma={};class vA extends Error{constructor(e,t){super(e),this.response=t}}class Mx extends $s{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=wa.get(`file:${e}`);if(l!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0),l;if(Ma[e]!==void 0){Ma[e].push({onLoad:t,onProgress:a,onError:s});return}Ma[e]=[],Ma[e].push({onLoad:t,onProgress:a,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),f=this.mimeType,d=this.responseType;fetch(u).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Ma[e],_=h.body.getReader(),v=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=v?parseInt(v):0,M=x!==0;let T=0;const S=new ReadableStream({start(y){b();function b(){_.read().then(({done:w,value:A})=>{if(w)y.close();else{T+=A.byteLength;const P=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:x});for(let I=0,B=m.length;I<B;I++){const H=m[I];H.onProgress&&H.onProgress(P)}y.enqueue(A),b()}},w=>{y.error(w)})}}});return new Response(S)}else throw new vA(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return h.json();default:if(f==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),v=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(v);return h.arrayBuffer().then(M=>x.decode(M))}}}).then(h=>{wa.add(`file:${e}`,h);const m=Ma[e];delete Ma[e];for(let _=0,v=m.length;_<v;_++){const x=m[_];x.onLoad&&x.onLoad(h)}}).catch(h=>{const m=Ma[e];if(m===void 0)throw this.manager.itemError(e),h;delete Ma[e];for(let _=0,v=m.length;_<v;_++){const x=m[_];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const Xr=new WeakMap;class Ex extends $s{constructor(e){super(e)}load(e,t,a,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=wa.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let _=Xr.get(u);_===void 0&&(_=[],Xr.set(u,_)),_.push({onLoad:t,onError:s})}return u}const f=Ol("img");function d(){m(),t&&t(this);const _=Xr.get(this)||[];for(let v=0;v<_.length;v++){const x=_[v];x.onLoad&&x.onLoad(this)}Xr.delete(this),l.manager.itemEnd(e)}function h(_){m(),s&&s(_),wa.remove(`image:${e}`);const v=Xr.get(this)||[];for(let x=0;x<v.length;x++){const M=v[x];M.onError&&M.onError(_)}Xr.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),wa.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class yA extends $s{constructor(e){super(e)}load(e,t,a,s){const l=new pm;l.colorSpace=hn;const u=new Ex(this.manager);u.setCrossOrigin(this.crossOrigin),u.setPath(this.path);let f=0;function d(h){u.load(e[h],function(m){l.images[h]=m,f++,f===6&&(l.needsUpdate=!0,t&&t(l))},void 0,s)}for(let h=0;h<e.length;++h)d(h);return l}}class Gl extends $s{constructor(e){super(e)}load(e,t,a,s){const l=new vn,u=new Ex(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},a,s),l}}class nf extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Gd=new ht,Qv=new q,Jv=new q;class xm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Ki,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _m,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,a=this.matrix;Qv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qv),Jv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jv),t.updateMatrixWorld(),Gd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xA extends xm{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,a=oo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(a!==t.fov||s!==t.aspect||l!==t.far)&&(t.fov=a,t.aspect=s,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class SA extends nf{constructor(e,t,a=0,s=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.distance=a,this.angle=s,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new xA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $v=new ht,Sl=new q,kd=new q;class MA extends xm{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const a=this.camera,s=this.matrix,l=e.distance||a.far;l!==a.far&&(a.far=l,a.updateProjectionMatrix()),Sl.setFromMatrixPosition(e.matrixWorld),a.position.copy(Sl),kd.copy(a.position),kd.add(this._cubeDirections[t]),a.up.copy(this._cubeUps[t]),a.lookAt(kd),a.updateMatrixWorld(),s.makeTranslation(-Sl.x,-Sl.y,-Sl.z),$v.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix($v)}}class EA extends nf{constructor(e,t,a=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=s,this.shadow=new MA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Sm extends px{constructor(e=-1,t=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,u=a+e,f=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class TA extends xm{constructor(){super(new Sm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tx extends nf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new TA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zu extends nf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Al{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Wd=new WeakMap;class bA extends $s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=wa.get(`image-bitmap:${e}`);if(u!==void 0){if(l.manager.itemStart(e),u.then){u.then(h=>{if(Wd.has(u)===!0)s&&s(Wd.get(u)),l.manager.itemError(e),l.manager.itemEnd(e);else return t&&t(h),l.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0),u}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader;const d=fetch(e,f).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(l.options,{colorSpaceConversion:"none"}))}).then(function(h){return wa.add(`image-bitmap:${e}`,h),t&&t(h),l.manager.itemEnd(e),h}).catch(function(h){s&&s(h),Wd.set(d,h),wa.remove(`image-bitmap:${e}`),l.manager.itemError(e),l.manager.itemEnd(e)});wa.add(`image-bitmap:${e}`,d),l.manager.itemStart(e)}}class AA extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class RA{constructor(e,t,a){this.binding=e,this.valueSize=a;let s,l,u;switch(t){case"quaternion":s=this._slerp,l=this._slerpAdditive,u=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(a*6),this._workIndex=5;break;case"string":case"bool":s=this._select,l=this._select,u=this._setAdditiveIdentityOther,this.buffer=new Array(a*5);break;default:s=this._lerp,l=this._lerpAdditive,u=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(a*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=l,this._setIdentity=u,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const a=this.buffer,s=this.valueSize,l=e*s+s;let u=this.cumulativeWeight;if(u===0){for(let f=0;f!==s;++f)a[l+f]=a[f];u=t}else{u+=t;const f=t/u;this._mixBufferRegion(a,l,0,f,s)}this.cumulativeWeight=u}accumulateAdditive(e){const t=this.buffer,a=this.valueSize,s=a*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,a),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,a=this.buffer,s=e*t+t,l=this.cumulativeWeight,u=this.cumulativeWeightAdditive,f=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,l<1){const d=t*this._origIndex;this._mixBufferRegion(a,s,d,1-l,t)}u>0&&this._mixBufferRegionAdditive(a,s,this._addIndex*t,1,t);for(let d=t,h=t+t;d!==h;++d)if(a[d]!==a[d+t]){f.setValue(a,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,a=this.valueSize,s=a*this._origIndex;e.getValue(t,s);for(let l=a,u=s;l!==u;++l)t[l]=t[s+l%a];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let a=e;a<t;a++)this.buffer[a]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let a=0;a<this.valueSize;a++)this.buffer[t+a]=this.buffer[e+a]}_select(e,t,a,s,l){if(s>=.5)for(let u=0;u!==l;++u)e[t+u]=e[a+u]}_slerp(e,t,a,s){Pi.slerpFlat(e,t,e,t,e,a,s)}_slerpAdditive(e,t,a,s,l){const u=this._workIndex*l;Pi.multiplyQuaternionsFlat(e,u,e,t,e,a),Pi.slerpFlat(e,t,e,t,e,u,s)}_lerp(e,t,a,s,l){const u=1-s;for(let f=0;f!==l;++f){const d=t+f;e[d]=e[d]*u+e[a+f]*s}}_lerpAdditive(e,t,a,s,l){for(let u=0;u!==l;++u){const f=t+u;e[f]=e[f]+e[a+u]*s}}}const Mm="\\[\\]\\.:\\/",CA=new RegExp("["+Mm+"]","g"),Em="[^"+Mm+"]",DA="[^"+Mm.replace("\\.","")+"]",LA=/((?:WC+[\/:])*)/.source.replace("WC",Em),UA=/(WCOD+)?/.source.replace("WCOD",DA),NA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Em),OA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Em),PA=new RegExp("^"+LA+UA+NA+OA+"$"),IA=["material","materials","bones","map"];class BA{constructor(e,t,a){const s=a||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const a=this._targetGroup.nCachedObjects_,s=this._bindings[a];s!==void 0&&s.getValue(e,t)}setValue(e,t){const a=this._bindings;for(let s=this._targetGroup.nCachedObjects_,l=a.length;s!==l;++s)a[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,a=e.length;t!==a;++t)e[t].unbind()}}class Bt{constructor(e,t,a){this.path=t,this.parsedPath=a||Bt.parseTrackName(t),this.node=Bt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,a){return e&&e.isAnimationObjectGroup?new Bt.Composite(e,t,a):new Bt(e,t,a)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(CA,"")}static parseTrackName(e){const t=PA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const a={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=a.nodeName&&a.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const l=a.nodeName.substring(s+1);IA.indexOf(l)!==-1&&(a.nodeName=a.nodeName.substring(0,s),a.objectName=l)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return a}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const a=e.skeleton.getBoneByName(t);if(a!==void 0)return a}if(e.children){const a=function(l){for(let u=0;u<l.length;u++){const f=l[u];if(f.name===t||f.uuid===t)return f;const d=a(f.children);if(d)return d}return null},s=a(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)e[t++]=a[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const a=this.resolvedProperty;for(let s=0,l=a.length;s!==l;++s)a[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,a=t.objectName,s=t.propertyName;let l=t.propertyIndex;if(e||(e=Bt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(a){let h=t.objectIndex;switch(a){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[a]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const u=e[s];if(u===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(l!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}d=this.BindingType.ArrayElement,this.resolvedProperty=u,this.propertyIndex=l}else u.fromArray!==void 0&&u.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=u):Array.isArray(u)?(d=this.BindingType.EntireArray,this.resolvedProperty=u):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Bt.Composite=BA;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class zA{constructor(e,t,a=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=a,this.blendMode=s;const l=t.tracks,u=l.length,f=new Array(u),d={endingStart:jr,endingEnd:jr};for(let h=0;h!==u;++h){const m=l[h].createInterpolant(null);f[h]=m,m.settings=d}this._interpolantSettings=d,this._interpolants=f,this._propertyBindings=new Array(u),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=XT,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,a=!1){if(e.fadeOut(t),this.fadeIn(t),a===!0){const s=this._clip.duration,l=e._clip.duration,u=l/s,f=s/l;e.warp(1,u,t),this.warp(f,1,t)}return this}crossFadeTo(e,t,a=!1){return e.crossFadeFrom(this,t,a)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,a){const s=this._mixer,l=s.time,u=this.timeScale;let f=this._timeScaleInterpolant;f===null&&(f=s._lendControlInterpolant(),this._timeScaleInterpolant=f);const d=f.parameterPositions,h=f.sampleValues;return d[0]=l,d[1]=l+a,h[0]=e/u,h[1]=t/u,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,a,s){if(!this.enabled){this._updateWeight(e);return}const l=this._startTime;if(l!==null){const d=(e-l)*a;d<0||a===0?t=0:(this._startTime=null,t=a*d)}t*=this._updateTimeScale(e);const u=this._updateTime(t),f=this._updateWeight(e);if(f>0){const d=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case YT:for(let m=0,_=d.length;m!==_;++m)d[m].evaluate(u),h[m].accumulateAdditive(f);break;case cm:default:for(let m=0,_=d.length;m!==_;++m)d[m].evaluate(u),h[m].accumulate(s,f)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const a=this._weightInterpolant;if(a!==null){const s=a.evaluate(e)[0];t*=s,e>a.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const a=this._timeScaleInterpolant;if(a!==null){const s=a.evaluate(e)[0];t*=s,e>a.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,a=this.loop;let s=this.time+e,l=this._loopCount;const u=a===qT;if(e===0)return l===-1?s:u&&(l&1)===1?t-s:s;if(a===WT){l===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(l===-1&&(e>=0?(l=0,this._setEndings(!0,this.repetitions===0,u)):this._setEndings(this.repetitions===0,!0,u)),s>=t||s<0){const f=Math.floor(s/t);s-=t*f,l+=Math.abs(f);const d=this.repetitions-l;if(d<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(d===1){const h=e<0;this._setEndings(h,!h,u)}else this._setEndings(!1,!1,u);this._loopCount=l,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f})}}else this.time=s;if(u&&(l&1)===1)return t-s}return s}_setEndings(e,t,a){const s=this._interpolantSettings;a?(s.endingStart=Kr,s.endingEnd=Kr):(e?s.endingStart=this.zeroSlopeAtStart?Kr:jr:s.endingStart=Wu,t?s.endingEnd=this.zeroSlopeAtEnd?Kr:jr:s.endingEnd=Wu)}_scheduleFading(e,t,a){const s=this._mixer,l=s.time;let u=this._weightInterpolant;u===null&&(u=s._lendControlInterpolant(),this._weightInterpolant=u);const f=u.parameterPositions,d=u.sampleValues;return f[0]=l,d[0]=t,f[1]=l+e,d[1]=a,this}}const FA=new Float32Array(1);class HA extends Js{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const a=e._localRoot||this._root,s=e._clip.tracks,l=s.length,u=e._propertyBindings,f=e._interpolants,d=a.uuid,h=this._bindingsByRootAndName;let m=h[d];m===void 0&&(m={},h[d]=m);for(let _=0;_!==l;++_){const v=s[_],x=v.name;let M=m[x];if(M!==void 0)++M.referenceCount,u[_]=M;else{if(M=u[_],M!==void 0){M._cacheIndex===null&&(++M.referenceCount,this._addInactiveBinding(M,d,x));continue}const T=t&&t._propertyBindings[_].binding.parsedPath;M=new RA(Bt.create(a,x,T),v.ValueTypeName,v.getValueSize()),++M.referenceCount,this._addInactiveBinding(M,d,x),u[_]=M}f[_].resultBuffer=M.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const a=(e._localRoot||this._root).uuid,s=e._clip.uuid,l=this._actionsByClip[s];this._bindAction(e,l&&l.knownActions[0]),this._addInactiveAction(e,s,a)}const t=e._propertyBindings;for(let a=0,s=t.length;a!==s;++a){const l=t[a];l.useCount++===0&&(this._lendBinding(l),l.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let a=0,s=t.length;a!==s;++a){const l=t[a];--l.useCount===0&&(l.restoreOriginalState(),this._takeBackBinding(l))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,a){const s=this._actions,l=this._actionsByClip;let u=l[t];if(u===void 0)u={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,l[t]=u;else{const f=u.knownActions;e._byClipCacheIndex=f.length,f.push(e)}e._cacheIndex=s.length,s.push(e),u.actionByRoot[a]=e}_removeInactiveAction(e){const t=this._actions,a=t[t.length-1],s=e._cacheIndex;a._cacheIndex=s,t[s]=a,t.pop(),e._cacheIndex=null;const l=e._clip.uuid,u=this._actionsByClip,f=u[l],d=f.knownActions,h=d[d.length-1],m=e._byClipCacheIndex;h._byClipCacheIndex=m,d[m]=h,d.pop(),e._byClipCacheIndex=null;const _=f.actionByRoot,v=(e._localRoot||this._root).uuid;delete _[v],d.length===0&&delete u[l],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let a=0,s=t.length;a!==s;++a){const l=t[a];--l.referenceCount===0&&this._removeInactiveBinding(l)}}_lendAction(e){const t=this._actions,a=e._cacheIndex,s=this._nActiveActions++,l=t[s];e._cacheIndex=s,t[s]=e,l._cacheIndex=a,t[a]=l}_takeBackAction(e){const t=this._actions,a=e._cacheIndex,s=--this._nActiveActions,l=t[s];e._cacheIndex=s,t[s]=e,l._cacheIndex=a,t[a]=l}_addInactiveBinding(e,t,a){const s=this._bindingsByRootAndName,l=this._bindings;let u=s[t];u===void 0&&(u={},s[t]=u),u[a]=e,e._cacheIndex=l.length,l.push(e)}_removeInactiveBinding(e){const t=this._bindings,a=e.binding,s=a.rootNode.uuid,l=a.path,u=this._bindingsByRootAndName,f=u[s],d=t[t.length-1],h=e._cacheIndex;d._cacheIndex=h,t[h]=d,t.pop(),delete f[l],Object.keys(f).length===0&&delete u[s]}_lendBinding(e){const t=this._bindings,a=e._cacheIndex,s=this._nActiveBindings++,l=t[s];e._cacheIndex=s,t[s]=e,l._cacheIndex=a,t[a]=l}_takeBackBinding(e){const t=this._bindings,a=e._cacheIndex,s=--this._nActiveBindings,l=t[s];e._cacheIndex=s,t[s]=e,l._cacheIndex=a,t[a]=l}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let a=e[t];return a===void 0&&(a=new xx(new Float32Array(2),new Float32Array(2),1,FA),a.__cacheIndex=t,e[t]=a),a}_takeBackControlInterpolant(e){const t=this._controlInterpolants,a=e.__cacheIndex,s=--this._nActiveControlInterpolants,l=t[s];e.__cacheIndex=s,t[s]=e,l.__cacheIndex=a,t[a]=l}clipAction(e,t,a){const s=t||this._root,l=s.uuid;let u=typeof e=="string"?Gp.findByName(s,e):e;const f=u!==null?u.uuid:e,d=this._actionsByClip[f];let h=null;if(a===void 0&&(u!==null?a=u.blendMode:a=cm),d!==void 0){const _=d.actionByRoot[l];if(_!==void 0&&_.blendMode===a)return _;h=d.knownActions[0],u===null&&(u=h._clip)}if(u===null)return null;const m=new zA(this,u,t,a);return this._bindAction(m,h),this._addInactiveAction(m,f,l),m}existingAction(e,t){const a=t||this._root,s=a.uuid,l=typeof e=="string"?Gp.findByName(a,e):e,u=l?l.uuid:e,f=this._actionsByClip[u];return f!==void 0&&f.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let a=t-1;a>=0;--a)e[a].stop();return this}update(e){e*=this.timeScale;const t=this._actions,a=this._nActiveActions,s=this.time+=e,l=Math.sign(e),u=this._accuIndex^=1;for(let h=0;h!==a;++h)t[h]._update(s,e,l,u);const f=this._bindings,d=this._nActiveBindings;for(let h=0;h!==d;++h)f[h].apply(u);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,a=e.uuid,s=this._actionsByClip,l=s[a];if(l!==void 0){const u=l.knownActions;for(let f=0,d=u.length;f!==d;++f){const h=u[f];this._deactivateAction(h);const m=h._cacheIndex,_=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,_._cacheIndex=m,t[m]=_,t.pop(),this._removeInactiveBindingsForAction(h)}delete s[a]}}uncacheRoot(e){const t=e.uuid,a=this._actionsByClip;for(const u in a){const f=a[u].actionByRoot,d=f[t];d!==void 0&&(this._deactivateAction(d),this._removeInactiveAction(d))}const s=this._bindingsByRootAndName,l=s[t];if(l!==void 0)for(const u in l){const f=l[u];f.restoreOriginalState(),this._removeInactiveBinding(f)}}uncacheAction(e,t){const a=this.existingAction(e,t);a!==null&&(this._deactivateAction(a),this._removeInactiveAction(a))}}const ey=new ht;class bx{constructor(e,t,a=0,s=1/0){this.ray=new Fl(e,t),this.near=a,this.far=s,this.camera=null,this.layers=new dm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ey.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ey),this}intersectObject(e,t=!0,a=[]){return kp(e,this,a,t),a.sort(ty),a}intersectObjects(e,t=!0,a=[]){for(let s=0,l=e.length;s<l;s++)kp(e[s],this,a,t);return a.sort(ty),a}}function ty(r,e){return r.distance-e.distance}function kp(r,e,t,a){let s=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(s=!1),s===!0&&a===!0){const l=r.children;for(let u=0,f=l.length;u<f;u++)kp(l[u],e,t,!0)}}function ny(r,e,t,a){const s=VA(a);switch(t){case tx:return r*e;case sm:return r*e/s.components*s.byteLength;case rm:return r*e/s.components*s.byteLength;case ix:return r*e*2/s.components*s.byteLength;case om:return r*e*2/s.components*s.byteLength;case nx:return r*e*3/s.components*s.byteLength;case Ti:return r*e*4/s.components*s.byteLength;case lm:return r*e*4/s.components*s.byteLength;case Pu:case Iu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Bu:case zu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dp:case mp:return Math.max(r,16)*Math.max(e,8)/4;case hp:case pp:return Math.max(r,8)*Math.max(e,8)/2;case gp:case _p:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case vp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xp:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Sp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case bp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ap:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case wp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Rp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Cp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Up:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Fu:case Np:case Op:return Math.ceil(r/4)*Math.ceil(e/4)*16;case ax:case Pp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ip:case Bp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VA(r){switch(r){case Ki:case Jy:return{byteLength:1,components:1};case Rl:case $y:case zl:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case Ks:case nm:case Ui:return{byteLength:4,components:1};case ex:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:em}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=em);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ax(){let r=null,e=!1,t=null,a=null;function s(l,u){t(l,u),a=r.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(a=r.requestAnimationFrame(s),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function GA(r){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,_=h.byteLength,v=r.createBuffer();r.bindBuffer(d,v),r.bufferData(d,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=r.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=r.SHORT;else if(h instanceof Uint32Array)x=r.UNSIGNED_INT;else if(h instanceof Int32Array)x=r.INT;else if(h instanceof Int8Array)x=r.BYTE;else if(h instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,d,h){const m=d.array,_=d.updateRanges;if(r.bindBuffer(h,f),_.length===0)r.bufferSubData(h,0,m);else{_.sort((x,M)=>x.start-M.start);let v=0;for(let x=1;x<_.length;x++){const M=_[v],T=_[x];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++v,_[v]=T)}_.length=v+1;for(let x=0,M=_.length;x<M;x++){const T=_[x];r.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(r.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,f,d),h.version=f.version}}return{get:s,remove:l,update:u}}var kA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WA=`#ifdef USE_ALPHAHASH
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
#endif`,XA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KA=`#ifdef USE_AOMAP
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
#endif`,ZA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QA=`#ifdef USE_BATCHING
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
#endif`,JA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$A=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n1=`#ifdef USE_IRIDESCENCE
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
#endif`,i1=`#ifdef USE_BUMPMAP
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
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,f1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,h1=`#define PI 3.141592653589793
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
} // validated`,d1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p1=`vec3 transformedNormal = objectNormal;
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
#endif`,m1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",x1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S1=`#ifdef USE_ENVMAP
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
#endif`,M1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E1=`#ifdef USE_ENVMAP
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
#endif`,T1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b1=`#ifdef USE_ENVMAP
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
#endif`,A1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D1=`#ifdef USE_GRADIENTMAP
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
}`,L1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,U1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O1=`uniform bool receiveShadow;
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
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,z1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,H1=`PhysicalMaterial material;
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
#endif`,V1=`struct PhysicalMaterial {
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
}`,G1=`
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
#endif`,k1=`#if defined( RE_IndirectDiffuse )
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
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,q1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J1=`#if defined( USE_POINTS_UV )
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
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`#ifdef USE_MORPHTARGETS
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
#endif`,sw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ow=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fw=`#ifdef USE_NORMALMAP
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
#endif`,hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_w=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ew=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Aw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ww=`float getShadowMask() {
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
}`,Rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cw=`#ifdef USE_SKINNING
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
#endif`,Dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lw=`#ifdef USE_SKINNING
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
#endif`,Uw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ow=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Iw=`#ifdef USE_TRANSMISSION
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
#endif`,Bw=`#ifdef USE_TRANSMISSION
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
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kw=`uniform sampler2D t2D;
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
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`#include <common>
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
}`,Kw=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zw=`#define DISTANCE
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
}`,Qw=`#define DISTANCE
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
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$w=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eR=`uniform float scale;
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
}`,tR=`uniform vec3 diffuse;
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
}`,nR=`#include <common>
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
}`,iR=`uniform vec3 diffuse;
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
}`,aR=`#define LAMBERT
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
}`,sR=`#define LAMBERT
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
}`,rR=`#define MATCAP
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
}`,oR=`#define MATCAP
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
}`,lR=`#define NORMAL
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
}`,cR=`#define NORMAL
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
}`,uR=`#define PHONG
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
}`,fR=`#define PHONG
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
}`,hR=`#define STANDARD
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
}`,dR=`#define STANDARD
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
}`,pR=`#define TOON
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
}`,mR=`#define TOON
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
}`,gR=`uniform float size;
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
}`,_R=`uniform vec3 diffuse;
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
}`,vR=`#include <common>
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
}`,yR=`uniform vec3 color;
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
}`,xR=`uniform float rotation;
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
}`,SR=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:kA,alphahash_pars_fragment:WA,alphamap_fragment:XA,alphamap_pars_fragment:qA,alphatest_fragment:YA,alphatest_pars_fragment:jA,aomap_fragment:KA,aomap_pars_fragment:ZA,batching_pars_vertex:QA,batching_vertex:JA,begin_vertex:$A,beginnormal_vertex:e1,bsdfs:t1,iridescence_fragment:n1,bumpmap_pars_fragment:i1,clipping_planes_fragment:a1,clipping_planes_pars_fragment:s1,clipping_planes_pars_vertex:r1,clipping_planes_vertex:o1,color_fragment:l1,color_pars_fragment:c1,color_pars_vertex:u1,color_vertex:f1,common:h1,cube_uv_reflection_fragment:d1,defaultnormal_vertex:p1,displacementmap_pars_vertex:m1,displacementmap_vertex:g1,emissivemap_fragment:_1,emissivemap_pars_fragment:v1,colorspace_fragment:y1,colorspace_pars_fragment:x1,envmap_fragment:S1,envmap_common_pars_fragment:M1,envmap_pars_fragment:E1,envmap_pars_vertex:T1,envmap_physical_pars_fragment:P1,envmap_vertex:b1,fog_vertex:A1,fog_pars_vertex:w1,fog_fragment:R1,fog_pars_fragment:C1,gradientmap_pars_fragment:D1,lightmap_pars_fragment:L1,lights_lambert_fragment:U1,lights_lambert_pars_fragment:N1,lights_pars_begin:O1,lights_toon_fragment:I1,lights_toon_pars_fragment:B1,lights_phong_fragment:z1,lights_phong_pars_fragment:F1,lights_physical_fragment:H1,lights_physical_pars_fragment:V1,lights_fragment_begin:G1,lights_fragment_maps:k1,lights_fragment_end:W1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:q1,logdepthbuf_pars_vertex:Y1,logdepthbuf_vertex:j1,map_fragment:K1,map_pars_fragment:Z1,map_particle_fragment:Q1,map_particle_pars_fragment:J1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:ew,morphinstance_vertex:tw,morphcolor_vertex:nw,morphnormal_vertex:iw,morphtarget_pars_vertex:aw,morphtarget_vertex:sw,normal_fragment_begin:rw,normal_fragment_maps:ow,normal_pars_fragment:lw,normal_pars_vertex:cw,normal_vertex:uw,normalmap_pars_fragment:fw,clearcoat_normal_fragment_begin:hw,clearcoat_normal_fragment_maps:dw,clearcoat_pars_fragment:pw,iridescence_pars_fragment:mw,opaque_fragment:gw,packing:_w,premultiplied_alpha_fragment:vw,project_vertex:yw,dithering_fragment:xw,dithering_pars_fragment:Sw,roughnessmap_fragment:Mw,roughnessmap_pars_fragment:Ew,shadowmap_pars_fragment:Tw,shadowmap_pars_vertex:bw,shadowmap_vertex:Aw,shadowmask_pars_fragment:ww,skinbase_vertex:Rw,skinning_pars_vertex:Cw,skinning_vertex:Dw,skinnormal_vertex:Lw,specularmap_fragment:Uw,specularmap_pars_fragment:Nw,tonemapping_fragment:Ow,tonemapping_pars_fragment:Pw,transmission_fragment:Iw,transmission_pars_fragment:Bw,uv_pars_fragment:zw,uv_pars_vertex:Fw,uv_vertex:Hw,worldpos_vertex:Vw,background_vert:Gw,background_frag:kw,backgroundCube_vert:Ww,backgroundCube_frag:Xw,cube_vert:qw,cube_frag:Yw,depth_vert:jw,depth_frag:Kw,distanceRGBA_vert:Zw,distanceRGBA_frag:Qw,equirect_vert:Jw,equirect_frag:$w,linedashed_vert:eR,linedashed_frag:tR,meshbasic_vert:nR,meshbasic_frag:iR,meshlambert_vert:aR,meshlambert_frag:sR,meshmatcap_vert:rR,meshmatcap_frag:oR,meshnormal_vert:lR,meshnormal_frag:cR,meshphong_vert:uR,meshphong_frag:fR,meshphysical_vert:hR,meshphysical_frag:dR,meshtoon_vert:pR,meshtoon_frag:mR,points_vert:gR,points_frag:_R,shadow_vert:vR,shadow_frag:yR,sprite_vert:xR,sprite_frag:SR},Pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},qi={basic:{uniforms:Wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Wn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Wn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Wn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Wn([Pe.points,Pe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Wn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Wn([Pe.common,Pe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Wn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Wn([Pe.sprite,Pe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:Wn([Pe.common,Pe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:Wn([Pe.lights,Pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};qi.physical={uniforms:Wn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const wu={r:0,b:0,g:0},Gs=new Bi,MR=new ht;function ER(r,e,t,a,s,l,u){const f=new qe(0);let d=l===!0?0:1,h,m,_=null,v=0,x=null;function M(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?t:e).get(A)),A}function T(w){let A=!1;const P=M(w);P===null?y(f,d):P&&P.isColor&&(y(P,1),A=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?a.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||A)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(w,A){const P=M(A);P&&(P.isCubeTexture||P.mapping===ef)?(m===void 0&&(m=new Ct(new Hl(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:lo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,B,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),Gs.copy(A.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),m.material.uniforms.envMap.value=P,m.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(MR.makeRotationFromEuler(Gs)),m.material.toneMapped=Rt.getTransfer(P.colorSpace)!==qt,(_!==P||v!==P.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,_=P,v=P.version,x=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new Ct(new vs(2,2),new hi({name:"BackgroundMaterial",uniforms:lo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:La,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(P.colorSpace)!==qt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||v!==P.version||x!==r.toneMapping)&&(h.material.needsUpdate=!0,_=P,v=P.version,x=r.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function y(w,A){w.getRGB(wu,dx(r)),a.buffers.color.setClear(wu.r,wu.g,wu.b,A,u)}function b(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,A=1){f.set(w),d=A,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(w){d=w,y(f,d)},render:T,addToRenderList:S,dispose:b}}function TR(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},s=v(null);let l=s,u=!1;function f(R,V,$,ie,he){let te=!1;const O=_(ie,$,V);l!==O&&(l=O,h(l.object)),te=x(R,ie,$,he),te&&M(R,ie,$,he),he!==null&&e.update(he,r.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,A(R,V,$,ie),he!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(he).buffer))}function d(){return r.createVertexArray()}function h(R){return r.bindVertexArray(R)}function m(R){return r.deleteVertexArray(R)}function _(R,V,$){const ie=$.wireframe===!0;let he=a[R.id];he===void 0&&(he={},a[R.id]=he);let te=he[V.id];te===void 0&&(te={},he[V.id]=te);let O=te[ie];return O===void 0&&(O=v(d()),te[ie]=O),O}function v(R){const V=[],$=[],ie=[];for(let he=0;he<t;he++)V[he]=0,$[he]=0,ie[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:ie,object:R,attributes:{},index:null}}function x(R,V,$,ie){const he=l.attributes,te=V.attributes;let O=0;const F=$.getAttributes();for(const k in F)if(F[k].location>=0){const N=he[k];let K=te[k];if(K===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(K=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(K=R.instanceColor)),N===void 0||N.attribute!==K||K&&N.data!==K.data)return!0;O++}return l.attributesNum!==O||l.index!==ie}function M(R,V,$,ie){const he={},te=V.attributes;let O=0;const F=$.getAttributes();for(const k in F)if(F[k].location>=0){let N=te[k];N===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(N=R.instanceColor));const K={};K.attribute=N,N&&N.data&&(K.data=N.data),he[k]=K,O++}l.attributes=he,l.attributesNum=O,l.index=ie}function T(){const R=l.newAttributes;for(let V=0,$=R.length;V<$;V++)R[V]=0}function S(R){y(R,0)}function y(R,V){const $=l.newAttributes,ie=l.enabledAttributes,he=l.attributeDivisors;$[R]=1,ie[R]===0&&(r.enableVertexAttribArray(R),ie[R]=1),he[R]!==V&&(r.vertexAttribDivisor(R,V),he[R]=V)}function b(){const R=l.newAttributes,V=l.enabledAttributes;for(let $=0,ie=V.length;$<ie;$++)V[$]!==R[$]&&(r.disableVertexAttribArray($),V[$]=0)}function w(R,V,$,ie,he,te,O){O===!0?r.vertexAttribIPointer(R,V,$,he,te):r.vertexAttribPointer(R,V,$,ie,he,te)}function A(R,V,$,ie){T();const he=ie.attributes,te=$.getAttributes(),O=V.defaultAttributeValues;for(const F in te){const k=te[F];if(k.location>=0){let fe=he[F];if(fe===void 0&&(F==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),F==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const N=fe.normalized,K=fe.itemSize,Z=e.get(fe);if(Z===void 0)continue;const de=Z.buffer,X=Z.type,le=Z.bytesPerElement,pe=X===r.INT||X===r.UNSIGNED_INT||fe.gpuType===nm;if(fe.isInterleavedBufferAttribute){const xe=fe.data,_e=xe.stride,Ne=fe.offset;if(xe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<k.locationSize;Ce++)y(k.location+Ce,xe.meshPerAttribute);R.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ce=0;Ce<k.locationSize;Ce++)S(k.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,de);for(let Ce=0;Ce<k.locationSize;Ce++)w(k.location+Ce,K/k.locationSize,X,N,_e*le,(Ne+K/k.locationSize*Ce)*le,pe)}else{if(fe.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)y(k.location+xe,fe.meshPerAttribute);R.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<k.locationSize;xe++)S(k.location+xe);r.bindBuffer(r.ARRAY_BUFFER,de);for(let xe=0;xe<k.locationSize;xe++)w(k.location+xe,K/k.locationSize,X,N,K*le,K/k.locationSize*xe*le,pe)}}else if(O!==void 0){const N=O[F];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(k.location,N);break;case 3:r.vertexAttrib3fv(k.location,N);break;case 4:r.vertexAttrib4fv(k.location,N);break;default:r.vertexAttrib1fv(k.location,N)}}}}b()}function P(){H();for(const R in a){const V=a[R];for(const $ in V){const ie=V[$];for(const he in ie)m(ie[he].object),delete ie[he];delete V[$]}delete a[R]}}function I(R){if(a[R.id]===void 0)return;const V=a[R.id];for(const $ in V){const ie=V[$];for(const he in ie)m(ie[he].object),delete ie[he];delete V[$]}delete a[R.id]}function B(R){for(const V in a){const $=a[V];if($[R.id]===void 0)continue;const ie=$[R.id];for(const he in ie)m(ie[he].object),delete ie[he];delete $[R.id]}}function H(){C(),u=!0,l!==s&&(l=s,h(l.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:H,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:B,initAttributes:T,enableAttribute:S,disableUnusedAttributes:b}}function bR(r,e,t){let a;function s(h){a=h}function l(h,m){r.drawArrays(a,h,m),t.update(m,a,1)}function u(h,m,_){_!==0&&(r.drawArraysInstanced(a,h,m,_),t.update(m,a,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,h,0,m,0,_);let x=0;for(let M=0;M<_;M++)x+=m[M];t.update(x,a,1)}function d(h,m,_,v){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],m[M],v[M]);else{x.multiDrawArraysInstancedWEBGL(a,h,0,m,0,v,0,_);let M=0;for(let T=0;T<_;T++)M+=m[T]*v[T];t.update(M,a,1)}}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function AR(r,e,t,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");s=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(B){return!(B!==Ti&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const H=B===zl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Ki&&a.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ui&&!H)}function d(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:A,vertexTextures:P,maxSamples:I}}function wR(r){const e=this;let t=null,a=0,s=!1,l=!1;const u=new Xs,f=new gt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const x=_.length!==0||v||a!==0||s;return s=v,a=_.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,x){const M=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,y=r.get(_);if(!s||M===null||M.length===0||l&&!S)l?m(null):h();else{const b=l?0:a,w=b*4;let A=y.clippingState||null;d.value=A,A=m(M,v,w,x);for(let P=0;P!==w;++P)A[P]=t[P];y.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function m(_,v,x,M){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=d.value,M!==!0||S===null){const y=x+T*4,b=v.matrixWorldInverse;f.getNormalMatrix(b),(S===null||S.length<y)&&(S=new Float32Array(y));for(let w=0,A=x;w!==T;++w,A+=4)u.copy(_[w]).applyMatrix4(b,f),u.normal.toArray(S,A),S[A+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function RR(r){let e=new WeakMap;function t(u,f){return f===up?u.mapping=ao:f===fp&&(u.mapping=so),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===up||f===fp)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new Yb(d.height);return h.fromEquirectangularTexture(r,u),e.set(u,h),u.addEventListener("dispose",s),t(h.texture,u.mapping)}else return null}}return u}function s(u){const f=u.target;f.removeEventListener("dispose",s);const d=e.get(f);d!==void 0&&(e.delete(f),d.dispose())}function l(){e=new WeakMap}return{get:a,dispose:l}}const Zr=4,iy=[.125,.215,.35,.446,.526,.582],js=20,Xd=new Sm,ay=new qe;let qd=null,Yd=0,jd=0,Kd=!1;const qs=(1+Math.sqrt(5))/2,qr=1/qs,sy=[new q(-qs,qr,0),new q(qs,qr,0),new q(-qr,0,qs),new q(qr,0,qs),new q(0,qs,-qr),new q(0,qs,qr),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)],CR=new q;class ry{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,a=.1,s=100,l={}){const{size:u=256,position:f=CR}=l;qd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,a,s,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ly(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qd,Yd,jd),this._renderer.xr.enabled=Kd,e.scissorTest=!1,Ru(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ao||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),jd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:zl,format:Ti,colorSpace:jn,depthBuffer:!1},s=oy(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oy(e,t,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=DR(l)),this._blurMaterial=LR(l,e,t)}return s}_compileMaterial(e){const t=new Ct(this._lodPlanes[0],e);this._renderer.compile(t,Xd)}_sceneToCubeUV(e,t,a,s,l){const d=new Dn(90,1,t,a),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(ay),_.toneMapping=_s,_.autoClear=!1;const M=new Yi({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),T=new Ct(new Hl,M);let S=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,S=!0):(M.color.copy(ay),S=!0);for(let b=0;b<6;b++){const w=b%3;w===0?(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[b],l.y,l.z)):w===1?(d.up.set(0,0,h[b]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[b],l.z)):(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[b]));const A=this._cubeSize;Ru(s,w*A,b>2?A:0,A,A),_.setRenderTarget(s),S&&_.render(T,d),_.render(e,d)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,t){const a=this._renderer,s=e.mapping===ao||e.mapping===so;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cy()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ly());const l=s?this._cubemapMaterial:this._equirectMaterial,u=new Ct(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;Ru(t,0,0,3*d,2*d),a.setRenderTarget(t),a.render(u,Xd)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let l=1;l<s;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=sy[(s-l-1)%sy.length];this._blur(e,l-1,l,u,f)}t.autoClear=a}_blur(e,t,a,s,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,a,s,"latitudinal",l),this._halfBlur(u,e,a,a,s,"longitudinal",l)}_halfBlur(e,t,a,s,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new Ct(this._lodPlanes[s],h),v=h.uniforms,x=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*js-1),T=l/M,S=isFinite(l)?1+Math.floor(m*T):js;S>js&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${js}`);const y=[];let b=0;for(let B=0;B<js;++B){const H=B/T,C=Math.exp(-H*H/2);y.push(C),B===0?b+=C:B<S&&(b+=2*C)}for(let B=0;B<y.length;B++)y[B]=y[B]/b;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=M,v.mipInt.value=w-a;const A=this._sizeLods[s],P=3*A*(s>w-Zr?s-w+Zr:0),I=4*(this._cubeSize-A);Ru(t,P,I,3*A,2*A),d.setRenderTarget(t),d.render(_,Xd)}}function DR(r){const e=[],t=[],a=[];let s=r;const l=r-Zr+1+iy.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);t.push(f);let d=1/f;u>r-Zr?d=iy[u-r+Zr-1]:u===0&&(d=0),a.push(d);const h=1/(f-2),m=-h,_=1+h,v=[m,m,_,m,_,_,m,m,_,_,m,_],x=6,M=6,T=3,S=2,y=1,b=new Float32Array(T*M*x),w=new Float32Array(S*M*x),A=new Float32Array(y*M*x);for(let I=0;I<x;I++){const B=I%3*2/3-1,H=I>2?0:-1,C=[B,H,0,B+2/3,H,0,B+2/3,H+1,0,B,H,0,B+2/3,H+1,0,B,H+1,0];b.set(C,T*M*I),w.set(v,S*M*I);const R=[I,I,I,I,I,I];A.set(R,y*M*I)}const P=new yn;P.setAttribute("position",new Ln(b,T)),P.setAttribute("uv",new Ln(w,S)),P.setAttribute("faceIndex",new Ln(A,y)),e.push(P),s>Zr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:a}}function oy(r,e,t){const a=new Zs(r,e,t);return a.texture.mapping=ef,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Ru(r,e,t,a,s){r.viewport.set(e,t,a,s),r.scissor.set(e,t,a,s)}function LR(r,e,t){const a=new Float32Array(js),s=new q(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tm(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function ly(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tm(),fragmentShader:`

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
		`,blending:gs,depthTest:!1,depthWrite:!1})}function cy(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gs,depthTest:!1,depthWrite:!1})}function Tm(){return`

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
	`}function UR(r){let e=new WeakMap,t=null;function a(f){if(f&&f.isTexture){const d=f.mapping,h=d===up||d===fp,m=d===ao||d===so;if(h||m){let _=e.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return t===null&&(t=new ry(r)),_=h?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const x=f.image;return h&&x&&x.height>0||m&&x&&s(x)?(t===null&&(t=new ry(r)),_=h?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function s(f){let d=0;const h=6;for(let m=0;m<h;m++)f[m]!==void 0&&d++;return d===h}function l(f){const d=f.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:a,dispose:u}}function NR(r){const e={};function t(a){if(e[a]!==void 0)return e[a];let s;switch(a){case"WEBGL_depth_texture":s=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=r.getExtension(a)}return e[a]=s,s}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const s=t(a);return s===null&&$r("THREE.WebGLRenderer: "+a+" extension not supported."),s}}}function OR(r,e,t,a){const s={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const M in v.attributes)e.remove(v.attributes[M]);v.removeEventListener("dispose",u),delete s[v.id];const x=l.get(v);x&&(e.remove(x),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(_,v){return s[v.id]===!0||(v.addEventListener("dispose",u),s[v.id]=!0,t.memory.geometries++),v}function d(_){const v=_.attributes;for(const x in v)e.update(v[x],r.ARRAY_BUFFER)}function h(_){const v=[],x=_.index,M=_.attributes.position;let T=0;if(x!==null){const b=x.array;T=x.version;for(let w=0,A=b.length;w<A;w+=3){const P=b[w+0],I=b[w+1],B=b[w+2];v.push(P,I,I,B,B,P)}}else if(M!==void 0){const b=M.array;T=M.version;for(let w=0,A=b.length/3-1;w<A;w+=3){const P=w+0,I=w+1,B=w+2;v.push(P,I,I,B,B,P)}}else return;const S=new(lx(v)?hx:fx)(v,1);S.version=T;const y=l.get(_);y&&e.remove(y),l.set(_,S)}function m(_){const v=l.get(_);if(v){const x=_.index;x!==null&&v.version<x.version&&h(_)}else h(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:m}}function PR(r,e,t){let a;function s(v){a=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,x){r.drawElements(a,x,l,v*u),t.update(x,a,1)}function h(v,x,M){M!==0&&(r.drawElementsInstanced(a,x,l,v*u,M),t.update(x,a,M))}function m(v,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,x,0,l,v,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,a,1)}function _(v,x,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<v.length;y++)h(v[y]/u,x[y],T[y]);else{S.multiDrawElementsInstancedWEBGL(a,x,0,l,v,0,T,0,M);let y=0;for(let b=0;b<M;b++)y+=x[b]*T[b];t.update(y,a,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function IR(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:a}}function BR(r,e,t){const a=new WeakMap,s=new Ut;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let R=function(){H.dispose(),a.delete(f),f.removeEventListener("dispose",R)};var x=R;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let A=0;M===!0&&(A=1),T===!0&&(A=2),S===!0&&(A=3);let P=f.attributes.position.count*A,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const B=new Float32Array(P*I*4*_),H=new cx(B,P,I,_);H.type=Ui,H.needsUpdate=!0;const C=A*4;for(let V=0;V<_;V++){const $=y[V],ie=b[V],he=w[V],te=P*I*4*V;for(let O=0;O<$.count;O++){const F=O*C;M===!0&&(s.fromBufferAttribute($,O),B[te+F+0]=s.x,B[te+F+1]=s.y,B[te+F+2]=s.z,B[te+F+3]=0),T===!0&&(s.fromBufferAttribute(ie,O),B[te+F+4]=s.x,B[te+F+5]=s.y,B[te+F+6]=s.z,B[te+F+7]=0),S===!0&&(s.fromBufferAttribute(he,O),B[te+F+8]=s.x,B[te+F+9]=s.y,B[te+F+10]=s.z,B[te+F+11]=he.itemSize===4?s.w:1)}}v={count:_,texture:H,size:new et(P,I)},a.set(f,v),f.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const T=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(r,"morphTargetBaseInfluence",T),d.getUniforms().setValue(r,"morphTargetInfluences",h)}d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function zR(r,e,t,a){let s=new WeakMap;function l(d){const h=a.render.frame,m=d.geometry,_=e.get(d,m);if(s.get(_)!==h&&(e.update(_),s.set(_,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),s.get(d)!==h&&(t.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,r.ARRAY_BUFFER),s.set(d,h))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==h&&(v.update(),s.set(v,h))}return _}function u(){s=new WeakMap}function f(d){const h=d.target;h.removeEventListener("dispose",f),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const wx=new vn,uy=new vx(1,1),Rx=new cx,Cx=new Db,Dx=new pm,fy=[],hy=[],dy=new Float32Array(16),py=new Float32Array(9),my=new Float32Array(4);function _o(r,e,t){const a=r[0];if(a<=0||a>0)return r;const s=e*t;let l=fy[s];if(l===void 0&&(l=new Float32Array(s),fy[s]=l),e!==0){a.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function xn(r,e){if(r.length!==e.length)return!1;for(let t=0,a=r.length;t<a;t++)if(r[t]!==e[t])return!1;return!0}function Sn(r,e){for(let t=0,a=e.length;t<a;t++)r[t]=e[t]}function af(r,e){let t=hy[e];t===void 0&&(t=new Int32Array(e),hy[e]=t);for(let a=0;a!==e;++a)t[a]=r.allocateTextureUnit();return t}function FR(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function HR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;r.uniform2fv(this.addr,e),Sn(t,e)}}function VR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;r.uniform3fv(this.addr,e),Sn(t,e)}}function GR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;r.uniform4fv(this.addr,e),Sn(t,e)}}function kR(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(xn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(xn(t,a))return;my.set(a),r.uniformMatrix2fv(this.addr,!1,my),Sn(t,a)}}function WR(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(xn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(xn(t,a))return;py.set(a),r.uniformMatrix3fv(this.addr,!1,py),Sn(t,a)}}function XR(r,e){const t=this.cache,a=e.elements;if(a===void 0){if(xn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(xn(t,a))return;dy.set(a),r.uniformMatrix4fv(this.addr,!1,dy),Sn(t,a)}}function qR(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function YR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;r.uniform2iv(this.addr,e),Sn(t,e)}}function jR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;r.uniform3iv(this.addr,e),Sn(t,e)}}function KR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;r.uniform4iv(this.addr,e),Sn(t,e)}}function ZR(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function QR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;r.uniform2uiv(this.addr,e),Sn(t,e)}}function JR(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;r.uniform3uiv(this.addr,e),Sn(t,e)}}function $R(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;r.uniform4uiv(this.addr,e),Sn(t,e)}}function eC(r,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s);let l;this.type===r.SAMPLER_2D_SHADOW?(uy.compareFunction=rx,l=uy):l=wx,t.setTexture2D(e||l,s)}function tC(r,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s),t.setTexture3D(e||Cx,s)}function nC(r,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s),t.setTextureCube(e||Dx,s)}function iC(r,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(r.uniform1i(this.addr,s),a[0]=s),t.setTexture2DArray(e||Rx,s)}function aC(r){switch(r){case 5126:return FR;case 35664:return HR;case 35665:return VR;case 35666:return GR;case 35674:return kR;case 35675:return WR;case 35676:return XR;case 5124:case 35670:return qR;case 35667:case 35671:return YR;case 35668:case 35672:return jR;case 35669:case 35673:return KR;case 5125:return ZR;case 36294:return QR;case 36295:return JR;case 36296:return $R;case 35678:case 36198:case 36298:case 36306:case 35682:return eC;case 35679:case 36299:case 36307:return tC;case 35680:case 36300:case 36308:case 36293:return nC;case 36289:case 36303:case 36311:case 36292:return iC}}function sC(r,e){r.uniform1fv(this.addr,e)}function rC(r,e){const t=_o(e,this.size,2);r.uniform2fv(this.addr,t)}function oC(r,e){const t=_o(e,this.size,3);r.uniform3fv(this.addr,t)}function lC(r,e){const t=_o(e,this.size,4);r.uniform4fv(this.addr,t)}function cC(r,e){const t=_o(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function uC(r,e){const t=_o(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function fC(r,e){const t=_o(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hC(r,e){r.uniform1iv(this.addr,e)}function dC(r,e){r.uniform2iv(this.addr,e)}function pC(r,e){r.uniform3iv(this.addr,e)}function mC(r,e){r.uniform4iv(this.addr,e)}function gC(r,e){r.uniform1uiv(this.addr,e)}function _C(r,e){r.uniform2uiv(this.addr,e)}function vC(r,e){r.uniform3uiv(this.addr,e)}function yC(r,e){r.uniform4uiv(this.addr,e)}function xC(r,e,t){const a=this.cache,s=e.length,l=af(t,s);xn(a,l)||(r.uniform1iv(this.addr,l),Sn(a,l));for(let u=0;u!==s;++u)t.setTexture2D(e[u]||wx,l[u])}function SC(r,e,t){const a=this.cache,s=e.length,l=af(t,s);xn(a,l)||(r.uniform1iv(this.addr,l),Sn(a,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Cx,l[u])}function MC(r,e,t){const a=this.cache,s=e.length,l=af(t,s);xn(a,l)||(r.uniform1iv(this.addr,l),Sn(a,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Dx,l[u])}function EC(r,e,t){const a=this.cache,s=e.length,l=af(t,s);xn(a,l)||(r.uniform1iv(this.addr,l),Sn(a,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Rx,l[u])}function TC(r){switch(r){case 5126:return sC;case 35664:return rC;case 35665:return oC;case 35666:return lC;case 35674:return cC;case 35675:return uC;case 35676:return fC;case 5124:case 35670:return hC;case 35667:case 35671:return dC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return _C;case 36295:return vC;case 36296:return yC;case 35678:case 36198:case 36298:case 36306:case 35682:return xC;case 35679:case 36299:case 36307:return SC;case 35680:case 36300:case 36308:case 36293:return MC;case 36289:case 36303:case 36311:case 36292:return EC}}class bC{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=aC(t.type)}}class AC{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TC(t.type)}}class wC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(e,t[f.id],a)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function gy(r,e){r.seq.push(e),r.map[e.id]=e}function RC(r,e,t){const a=r.name,s=a.length;for(Zd.lastIndex=0;;){const l=Zd.exec(a),u=Zd.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===s){gy(t,h===void 0?new bC(f,r,e):new AC(f,r,e));break}else{let _=t.map[f];_===void 0&&(_=new wC(f),gy(t,_)),t=_}}}class Hu{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<a;++s){const l=e.getActiveUniform(t,s),u=e.getUniformLocation(t,l.name);RC(l,u,this)}}setValue(e,t,a,s){const l=this.map[t];l!==void 0&&l.setValue(e,a,s)}setOptional(e,t,a){const s=t[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,t,a,s){for(let l=0,u=t.length;l!==u;++l){const f=t[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,s)}}static seqWithValue(e,t){const a=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&a.push(u)}return a}}function _y(r,e,t){const a=r.createShader(e);return r.shaderSource(a,t),r.compileShader(a),a}const CC=37297;let DC=0;function LC(r,e){const t=r.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const f=u+1;a.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return a.join(`
`)}const vy=new gt;function UC(r){Rt._getMatrix(vy,Rt.workingColorSpace,r);const e=`mat3( ${vy.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(r)){case Xu:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function yy(r,e,t){const a=r.getShaderParameter(e,r.COMPILE_STATUS),s=r.getShaderInfoLog(e).trim();if(a&&s==="")return"";const l=/ERROR: 0:(\d+)/.exec(s);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+s+`

`+LC(r.getShaderSource(e),u)}else return s}function NC(r,e){const t=UC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function OC(r,e){let t;switch(e){case IT:t="Linear";break;case BT:t="Reinhard";break;case zT:t="Cineon";break;case FT:t="ACESFilmic";break;case VT:t="AgX";break;case GT:t="Neutral";break;case HT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cu=new q;function PC(){Rt.getLuminanceCoefficients(Cu);const r=Cu.x.toFixed(4),e=Cu.y.toFixed(4),t=Cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function BC(r){const e=[];for(const t in r){const a=r[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function zC(r,e){const t={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=r.getActiveAttrib(e,s),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function Tl(r){return r!==""}function xy(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sy(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wp(r){return r.replace(FC,VC)}const HC=new Map;function VC(r,e){let t=vt[e];if(t===void 0){const a=HC.get(e);if(a!==void 0)t=vt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Wp(t)}const GC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function My(r){return r.replace(GC,kC)}function kC(r,e,t,a){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function Ey(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WC(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ky?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===mT?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function XC(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ao:case so:e="ENVMAP_TYPE_CUBE";break;case ef:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qC(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function YC(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tm:e="ENVMAP_BLENDING_MULTIPLY";break;case OT:e="ENVMAP_BLENDING_MIX";break;case PT:e="ENVMAP_BLENDING_ADD";break}return e}function jC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function KC(r,e,t,a){const s=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=WC(t),h=XC(t),m=qC(t),_=YC(t),v=jC(t),x=IC(t),M=BC(l),T=s.createProgram();let S,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Tl).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Tl).join(`
`),y.length>0&&(y+=`
`)):(S=[Ey(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),y=[Ey(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_s?"#define TONE_MAPPING":"",t.toneMapping!==_s?vt.tonemapping_pars_fragment:"",t.toneMapping!==_s?OC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,NC("linearToOutputTexel",t.outputColorSpace),PC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Tl).join(`
`)),u=Wp(u),u=xy(u,t),u=Sy(u,t),f=Wp(f),f=xy(f,t),f=Sy(f,t),u=My(u),f=My(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=b+S+u,A=b+y+f,P=_y(s,s.VERTEX_SHADER,w),I=_y(s,s.FRAGMENT_SHADER,A);s.attachShader(T,P),s.attachShader(T,I),t.index0AttributeName!==void 0?s.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function B(V){if(r.debug.checkShaderErrors){const $=s.getProgramInfoLog(T).trim(),ie=s.getShaderInfoLog(P).trim(),he=s.getShaderInfoLog(I).trim();let te=!0,O=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(te=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(s,T,P,I);else{const F=yy(s,P,"vertex"),k=yy(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+F+`
`+k)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(ie===""||he==="")&&(O=!1);O&&(V.diagnostics={runnable:te,programLog:$,vertexShader:{log:ie,prefix:S},fragmentShader:{log:he,prefix:y}})}s.deleteShader(P),s.deleteShader(I),H=new Hu(s,T),C=zC(s,T)}let H;this.getUniforms=function(){return H===void 0&&B(this),H};let C;this.getAttributes=function(){return C===void 0&&B(this),C};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(T,CC)),R},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=I,this}let ZC=0;class QC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,a=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new JC(e),t.set(e,a)),a}}class JC{constructor(e){this.id=ZC++,this.code=e,this.usedTimes=0}}function $C(r,e,t,a,s,l,u){const f=new dm,d=new QC,h=new Set,m=[],_=s.logarithmicDepthBuffer,v=s.vertexTextures;let x=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return h.add(C),C===0?"uv":`uv${C}`}function S(C,R,V,$,ie){const he=$.fog,te=ie.geometry,O=C.isMeshStandardMaterial?$.environment:null,F=(C.isMeshStandardMaterial?t:e).get(C.envMap||O),k=F&&F.mapping===ef?F.image.height:null,fe=M[C.type];C.precision!==null&&(x=s.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const N=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,K=N!==void 0?N.length:0;let Z=0;te.morphAttributes.position!==void 0&&(Z=1),te.morphAttributes.normal!==void 0&&(Z=2),te.morphAttributes.color!==void 0&&(Z=3);let de,X,le,pe;if(fe){const Dt=qi[fe];de=Dt.vertexShader,X=Dt.fragmentShader}else de=C.vertexShader,X=C.fragmentShader,d.update(C),le=d.getVertexShaderID(C),pe=d.getFragmentShaderID(C);const xe=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),Ne=ie.isInstancedMesh===!0,Ce=ie.isBatchedMesh===!0,Xe=!!C.map,at=!!C.matcap,nt=!!F,W=!!C.aoMap,Ot=!!C.lightMap,pt=!!C.bumpMap,ft=!!C.normalMap,Ve=!!C.displacementMap,dt=!!C.emissiveMap,Qe=!!C.metalnessMap,ot=!!C.roughnessMap,sn=C.anisotropy>0,z=C.clearcoat>0,D=C.dispersion>0,se=C.iridescence>0,ye=C.sheen>0,Me=C.transmission>0,ge=sn&&!!C.anisotropyMap,Be=z&&!!C.clearcoatMap,Ue=z&&!!C.clearcoatNormalMap,We=z&&!!C.clearcoatRoughnessMap,Ye=se&&!!C.iridescenceMap,be=se&&!!C.iridescenceThicknessMap,ze=ye&&!!C.sheenColorMap,Ze=ye&&!!C.sheenRoughnessMap,Je=!!C.specularMap,De=!!C.specularColorMap,ut=!!C.specularIntensityMap,j=Me&&!!C.transmissionMap,Oe=Me&&!!C.thicknessMap,Ae=!!C.gradientMap,Fe=!!C.alphaMap,Re=C.alphaTest>0,Te=!!C.alphaHash,Ge=!!C.extensions;let ct=_s;C.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(ct=r.toneMapping);const zt={shaderID:fe,shaderType:C.type,shaderName:C.name,vertexShader:de,fragmentShader:X,defines:C.defines,customVertexShaderID:le,customFragmentShaderID:pe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:Ce,batchingColor:Ce&&ie._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&ie.instanceColor!==null,instancingMorph:Ne&&ie.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:xe===null?r.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:jn,alphaToCoverage:!!C.alphaToCoverage,map:Xe,matcap:at,envMap:nt,envMapMode:nt&&F.mapping,envMapCubeUVHeight:k,aoMap:W,lightMap:Ot,bumpMap:pt,normalMap:ft,displacementMap:v&&Ve,emissiveMap:dt,normalMapObjectSpace:ft&&C.normalMapType===QT,normalMapTangentSpace:ft&&C.normalMapType===um,metalnessMap:Qe,roughnessMap:ot,anisotropy:sn,anisotropyMap:ge,clearcoat:z,clearcoatMap:Be,clearcoatNormalMap:Ue,clearcoatRoughnessMap:We,dispersion:D,iridescence:se,iridescenceMap:Ye,iridescenceThicknessMap:be,sheen:ye,sheenColorMap:ze,sheenRoughnessMap:Ze,specularMap:Je,specularColorMap:De,specularIntensityMap:ut,transmission:Me,transmissionMap:j,thicknessMap:Oe,gradientMap:Ae,opaque:C.transparent===!1&&C.blending===Qr&&C.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Re,alphaHash:Te,combine:C.combine,mapUv:Xe&&T(C.map.channel),aoMapUv:W&&T(C.aoMap.channel),lightMapUv:Ot&&T(C.lightMap.channel),bumpMapUv:pt&&T(C.bumpMap.channel),normalMapUv:ft&&T(C.normalMap.channel),displacementMapUv:Ve&&T(C.displacementMap.channel),emissiveMapUv:dt&&T(C.emissiveMap.channel),metalnessMapUv:Qe&&T(C.metalnessMap.channel),roughnessMapUv:ot&&T(C.roughnessMap.channel),anisotropyMapUv:ge&&T(C.anisotropyMap.channel),clearcoatMapUv:Be&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:be&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&T(C.sheenRoughnessMap.channel),specularMapUv:Je&&T(C.specularMap.channel),specularColorMapUv:De&&T(C.specularColorMap.channel),specularIntensityMapUv:ut&&T(C.specularIntensityMap.channel),transmissionMapUv:j&&T(C.transmissionMap.channel),thicknessMapUv:Oe&&T(C.thicknessMap.channel),alphaMapUv:Fe&&T(C.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(ft||sn),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!te.attributes.uv&&(Xe||Fe),fog:!!he,useFog:C.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:_e,skinning:ie.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Z,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ct,decodeVideoTexture:Xe&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===qt,decodeVideoTextureEmissive:dt&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===qt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ei,flipSided:C.side===qn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ge&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&C.extensions.multiDraw===!0||Ce)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return zt.vertexUv1s=h.has(1),zt.vertexUv2s=h.has(2),zt.vertexUv3s=h.has(3),h.clear(),zt}function y(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const V in C.defines)R.push(V),R.push(C.defines[V]);return C.isRawShaderMaterial===!1&&(b(R,C),w(R,C),R.push(r.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function b(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function w(C,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),R.gradientMap&&f.enable(22),C.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reverseDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),C.push(f.mask)}function A(C){const R=M[C.type];let V;if(R){const $=qi[R];V=kb.clone($.uniforms)}else V=C.uniforms;return V}function P(C,R){let V;for(let $=0,ie=m.length;$<ie;$++){const he=m[$];if(he.cacheKey===R){V=he,++V.usedTimes;break}}return V===void 0&&(V=new KC(r,R,C,l),m.push(V)),V}function I(C){if(--C.usedTimes===0){const R=m.indexOf(C);m[R]=m[m.length-1],m.pop(),C.destroy()}}function B(C){d.remove(C)}function H(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:A,acquireProgram:P,releaseProgram:I,releaseShaderCache:B,programs:m,dispose:H}}function e2(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function a(u){r.delete(u)}function s(u,f,d){r.get(u)[f]=d}function l(){r=new WeakMap}return{has:e,get:t,remove:a,update:s,dispose:l}}function t2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ty(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function by(){const r=[];let e=0;const t=[],a=[],s=[];function l(){e=0,t.length=0,a.length=0,s.length=0}function u(_,v,x,M,T,S){let y=r[e];return y===void 0?(y={id:_.id,object:_,geometry:v,material:x,groupOrder:M,renderOrder:_.renderOrder,z:T,group:S},r[e]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=x,y.groupOrder=M,y.renderOrder=_.renderOrder,y.z=T,y.group=S),e++,y}function f(_,v,x,M,T,S){const y=u(_,v,x,M,T,S);x.transmission>0?a.push(y):x.transparent===!0?s.push(y):t.push(y)}function d(_,v,x,M,T,S){const y=u(_,v,x,M,T,S);x.transmission>0?a.unshift(y):x.transparent===!0?s.unshift(y):t.unshift(y)}function h(_,v){t.length>1&&t.sort(_||t2),a.length>1&&a.sort(v||Ty),s.length>1&&s.sort(v||Ty)}function m(){for(let _=e,v=r.length;_<v;_++){const x=r[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:a,transparent:s,init:l,push:f,unshift:d,finish:m,sort:h}}function n2(){let r=new WeakMap;function e(a,s){const l=r.get(a);let u;return l===void 0?(u=new by,r.set(a,[u])):s>=l.length?(u=new by,l.push(u)):u=l[s],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function i2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new qe};break;case"SpotLight":t={position:new q,direction:new q,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function a2(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let s2=0;function r2(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function o2(r){const e=new i2,t=a2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)a.probe.push(new q);const s=new q,l=new ht,u=new ht;function f(h){let m=0,_=0,v=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let x=0,M=0,T=0,S=0,y=0,b=0,w=0,A=0,P=0,I=0,B=0;h.sort(r2);for(let C=0,R=h.length;C<R;C++){const V=h[C],$=V.color,ie=V.intensity,he=V.distance,te=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)m+=$.r*ie,_+=$.g*ie,v+=$.b*ie;else if(V.isLightProbe){for(let O=0;O<9;O++)a.probe[O].addScaledVector(V.sh.coefficients[O],ie);B++}else if(V.isDirectionalLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const F=V.shadow,k=t.get(V);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,a.directionalShadow[x]=k,a.directionalShadowMap[x]=te,a.directionalShadowMatrix[x]=V.shadow.matrix,b++}a.directional[x]=O,x++}else if(V.isSpotLight){const O=e.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy($).multiplyScalar(ie),O.distance=he,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,a.spot[T]=O;const F=V.shadow;if(V.map&&(a.spotLightMap[P]=V.map,P++,F.updateMatrices(V),V.castShadow&&I++),a.spotLightMatrix[T]=F.matrix,V.castShadow){const k=t.get(V);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,a.spotShadow[T]=k,a.spotShadowMap[T]=te,A++}T++}else if(V.isRectAreaLight){const O=e.get(V);O.color.copy($).multiplyScalar(ie),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),a.rectArea[S]=O,S++}else if(V.isPointLight){const O=e.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const F=V.shadow,k=t.get(V);k.shadowIntensity=F.intensity,k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,a.pointShadow[M]=k,a.pointShadowMap[M]=te,a.pointShadowMatrix[M]=V.shadow.matrix,w++}a.point[M]=O,M++}else if(V.isHemisphereLight){const O=e.get(V);O.skyColor.copy(V.color).multiplyScalar(ie),O.groundColor.copy(V.groundColor).multiplyScalar(ie),a.hemi[y]=O,y++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pe.LTC_FLOAT_1,a.rectAreaLTC2=Pe.LTC_FLOAT_2):(a.rectAreaLTC1=Pe.LTC_HALF_1,a.rectAreaLTC2=Pe.LTC_HALF_2)),a.ambient[0]=m,a.ambient[1]=_,a.ambient[2]=v;const H=a.hash;(H.directionalLength!==x||H.pointLength!==M||H.spotLength!==T||H.rectAreaLength!==S||H.hemiLength!==y||H.numDirectionalShadows!==b||H.numPointShadows!==w||H.numSpotShadows!==A||H.numSpotMaps!==P||H.numLightProbes!==B)&&(a.directional.length=x,a.spot.length=T,a.rectArea.length=S,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=b,a.directionalShadowMap.length=b,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=A,a.spotShadowMap.length=A,a.directionalShadowMatrix.length=b,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=A+P-I,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=I,a.numLightProbes=B,H.directionalLength=x,H.pointLength=M,H.spotLength=T,H.rectAreaLength=S,H.hemiLength=y,H.numDirectionalShadows=b,H.numPointShadows=w,H.numSpotShadows=A,H.numSpotMaps=P,H.numLightProbes=B,a.version=s2++)}function d(h,m){let _=0,v=0,x=0,M=0,T=0;const S=m.matrixWorldInverse;for(let y=0,b=h.length;y<b;y++){const w=h[y];if(w.isDirectionalLight){const A=a.directional[_];A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),_++}else if(w.isSpotLight){const A=a.spot[x];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(S),A.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(S),x++}else if(w.isRectAreaLight){const A=a.rectArea[M];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(S),u.identity(),l.copy(w.matrixWorld),l.premultiply(S),u.extractRotation(l),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),M++}else if(w.isPointLight){const A=a.point[v];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(S),v++}else if(w.isHemisphereLight){const A=a.hemi[T];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(S),T++}}}return{setup:f,setupView:d,state:a}}function Ay(r){const e=new o2(r),t=[],a=[];function s(m){h.camera=m,t.length=0,a.length=0}function l(m){t.push(m)}function u(m){a.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function l2(r){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let f;return u===void 0?(f=new Ay(r),e.set(s,[f])):l>=u.length?(f=new Ay(r),u.push(f)):f=u[l],f}function a(){e=new WeakMap}return{get:t,dispose:a}}const c2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u2=`uniform sampler2D shadow_pass;
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
}`;function f2(r,e,t){let a=new _m;const s=new et,l=new et,u=new Ut,f=new oA({depthPacking:ZT}),d=new lA,h={},m=t.maxTextureSize,_={[La]:qn,[qn]:La,[ei]:ei},v=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:c2,fragmentShader:u2}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const M=new yn;M.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ct(M,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ky;let y=this.type;this.render=function(I,B,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||I.length===0)return;const C=r.getRenderTarget(),R=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),$=r.state;$.setBlending(gs),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ie=y!==Ea&&this.type===Ea,he=y===Ea&&this.type!==Ea;for(let te=0,O=I.length;te<O;te++){const F=I[te],k=F.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const fe=k.getFrameExtents();if(s.multiply(fe),l.copy(k.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(l.x=Math.floor(m/fe.x),s.x=l.x*fe.x,k.mapSize.x=l.x),s.y>m&&(l.y=Math.floor(m/fe.y),s.y=l.y*fe.y,k.mapSize.y=l.y)),k.map===null||ie===!0||he===!0){const K=this.type!==Ea?{minFilter:Yn,magFilter:Yn}:{};k.map!==null&&k.map.dispose(),k.map=new Zs(s.x,s.y,K),k.map.texture.name=F.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const N=k.getViewportCount();for(let K=0;K<N;K++){const Z=k.getViewport(K);u.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),$.viewport(u),k.updateMatrices(F,K),a=k.getFrustum(),A(B,H,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===Ea&&b(k,H),k.needsUpdate=!1}y=this.type,S.needsUpdate=!1,r.setRenderTarget(C,R,V)};function b(I,B){const H=e.update(T);v.defines.VSM_SAMPLES!==I.blurSamples&&(v.defines.VSM_SAMPLES=I.blurSamples,x.defines.VSM_SAMPLES=I.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Zs(s.x,s.y)),v.uniforms.shadow_pass.value=I.map.texture,v.uniforms.resolution.value=I.mapSize,v.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(B,null,H,v,T,null),x.uniforms.shadow_pass.value=I.mapPass.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(B,null,H,x,T,null)}function w(I,B,H,C){let R=null;const V=H.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(V!==void 0)R=V;else if(R=H.isPointLight===!0?d:f,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const $=R.uuid,ie=B.uuid;let he=h[$];he===void 0&&(he={},h[$]=he);let te=he[ie];te===void 0&&(te=R.clone(),he[ie]=te,B.addEventListener("dispose",P)),R=te}if(R.visible=B.visible,R.wireframe=B.wireframe,C===Ea?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:_[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,H.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const $=r.properties.get(R);$.light=H}return R}function A(I,B,H,C,R){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Ea)&&(!I.frustumCulled||a.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,I.matrixWorld);const ie=e.update(I),he=I.material;if(Array.isArray(he)){const te=ie.groups;for(let O=0,F=te.length;O<F;O++){const k=te[O],fe=he[k.materialIndex];if(fe&&fe.visible){const N=w(I,fe,C,R);I.onBeforeShadow(r,I,B,H,ie,N,k),r.renderBufferDirect(H,null,ie,N,I,k),I.onAfterShadow(r,I,B,H,ie,N,k)}}}else if(he.visible){const te=w(I,he,C,R);I.onBeforeShadow(r,I,B,H,ie,te,null),r.renderBufferDirect(H,null,ie,te,I,null),I.onAfterShadow(r,I,B,H,ie,te,null)}}const $=I.children;for(let ie=0,he=$.length;ie<he;ie++)A($[ie],B,H,C,R)}function P(I){I.target.removeEventListener("dispose",P);for(const H in h){const C=h[H],R=I.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const h2={[ip]:ap,[sp]:lp,[rp]:cp,[io]:op,[ap]:ip,[lp]:sp,[cp]:rp,[op]:io};function d2(r,e){function t(){let j=!1;const Oe=new Ut;let Ae=null;const Fe=new Ut(0,0,0,0);return{setMask:function(Re){Ae!==Re&&!j&&(r.colorMask(Re,Re,Re,Re),Ae=Re)},setLocked:function(Re){j=Re},setClear:function(Re,Te,Ge,ct,zt){zt===!0&&(Re*=ct,Te*=ct,Ge*=ct),Oe.set(Re,Te,Ge,ct),Fe.equals(Oe)===!1&&(r.clearColor(Re,Te,Ge,ct),Fe.copy(Oe))},reset:function(){j=!1,Ae=null,Fe.set(-1,0,0,0)}}}function a(){let j=!1,Oe=!1,Ae=null,Fe=null,Re=null;return{setReversed:function(Te){if(Oe!==Te){const Ge=e.get("EXT_clip_control");Te?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Oe=Te;const ct=Re;Re=null,this.setClear(ct)}},getReversed:function(){return Oe},setTest:function(Te){Te?xe(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(Te){Ae!==Te&&!j&&(r.depthMask(Te),Ae=Te)},setFunc:function(Te){if(Oe&&(Te=h2[Te]),Fe!==Te){switch(Te){case ip:r.depthFunc(r.NEVER);break;case ap:r.depthFunc(r.ALWAYS);break;case sp:r.depthFunc(r.LESS);break;case io:r.depthFunc(r.LEQUAL);break;case rp:r.depthFunc(r.EQUAL);break;case op:r.depthFunc(r.GEQUAL);break;case lp:r.depthFunc(r.GREATER);break;case cp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=Te}},setLocked:function(Te){j=Te},setClear:function(Te){Re!==Te&&(Oe&&(Te=1-Te),r.clearDepth(Te),Re=Te)},reset:function(){j=!1,Ae=null,Fe=null,Re=null,Oe=!1}}}function s(){let j=!1,Oe=null,Ae=null,Fe=null,Re=null,Te=null,Ge=null,ct=null,zt=null;return{setTest:function(Dt){j||(Dt?xe(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(Dt){Oe!==Dt&&!j&&(r.stencilMask(Dt),Oe=Dt)},setFunc:function(Dt,ti,Mn){(Ae!==Dt||Fe!==ti||Re!==Mn)&&(r.stencilFunc(Dt,ti,Mn),Ae=Dt,Fe=ti,Re=Mn)},setOp:function(Dt,ti,Mn){(Te!==Dt||Ge!==ti||ct!==Mn)&&(r.stencilOp(Dt,ti,Mn),Te=Dt,Ge=ti,ct=Mn)},setLocked:function(Dt){j=Dt},setClear:function(Dt){zt!==Dt&&(r.clearStencil(Dt),zt=Dt)},reset:function(){j=!1,Oe=null,Ae=null,Fe=null,Re=null,Te=null,Ge=null,ct=null,zt=null}}}const l=new t,u=new a,f=new s,d=new WeakMap,h=new WeakMap;let m={},_={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,b=null,w=null,A=null,P=null,I=null,B=new qe(0,0,0),H=0,C=!1,R=null,V=null,$=null,ie=null,he=null;const te=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,F=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=F>=2);let fe=null,N={};const K=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),de=new Ut().fromArray(K),X=new Ut().fromArray(Z);function le(j,Oe,Ae,Fe){const Re=new Uint8Array(4),Te=r.createTexture();r.bindTexture(j,Te),r.texParameteri(j,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(j,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<Ae;Ge++)j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?r.texImage3D(Oe,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(Oe+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return Te}const pe={};pe[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),pe[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),pe[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),xe(r.DEPTH_TEST),u.setFunc(io),pt(!1),ft(hv),xe(r.CULL_FACE),W(gs);function xe(j){m[j]!==!0&&(r.enable(j),m[j]=!0)}function _e(j){m[j]!==!1&&(r.disable(j),m[j]=!1)}function Ne(j,Oe){return _[j]!==Oe?(r.bindFramebuffer(j,Oe),_[j]=Oe,j===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Oe),j===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ce(j,Oe){let Ae=x,Fe=!1;if(j){Ae=v.get(Oe),Ae===void 0&&(Ae=[],v.set(Oe,Ae));const Re=j.textures;if(Ae.length!==Re.length||Ae[0]!==r.COLOR_ATTACHMENT0){for(let Te=0,Ge=Re.length;Te<Ge;Te++)Ae[Te]=r.COLOR_ATTACHMENT0+Te;Ae.length=Re.length,Fe=!0}}else Ae[0]!==r.BACK&&(Ae[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(Ae)}function Xe(j){return M!==j?(r.useProgram(j),M=j,!0):!1}const at={[Ys]:r.FUNC_ADD,[_T]:r.FUNC_SUBTRACT,[vT]:r.FUNC_REVERSE_SUBTRACT};at[yT]=r.MIN,at[xT]=r.MAX;const nt={[ST]:r.ZERO,[MT]:r.ONE,[ET]:r.SRC_COLOR,[tp]:r.SRC_ALPHA,[CT]:r.SRC_ALPHA_SATURATE,[wT]:r.DST_COLOR,[bT]:r.DST_ALPHA,[TT]:r.ONE_MINUS_SRC_COLOR,[np]:r.ONE_MINUS_SRC_ALPHA,[RT]:r.ONE_MINUS_DST_COLOR,[AT]:r.ONE_MINUS_DST_ALPHA,[DT]:r.CONSTANT_COLOR,[LT]:r.ONE_MINUS_CONSTANT_COLOR,[UT]:r.CONSTANT_ALPHA,[NT]:r.ONE_MINUS_CONSTANT_ALPHA};function W(j,Oe,Ae,Fe,Re,Te,Ge,ct,zt,Dt){if(j===gs){T===!0&&(_e(r.BLEND),T=!1);return}if(T===!1&&(xe(r.BLEND),T=!0),j!==gT){if(j!==S||Dt!==C){if((y!==Ys||A!==Ys)&&(r.blendEquation(r.FUNC_ADD),y=Ys,A=Ys),Dt)switch(j){case Qr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gu:r.blendFunc(r.ONE,r.ONE);break;case dv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case Qr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gu:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case dv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}b=null,w=null,P=null,I=null,B.set(0,0,0),H=0,S=j,C=Dt}return}Re=Re||Oe,Te=Te||Ae,Ge=Ge||Fe,(Oe!==y||Re!==A)&&(r.blendEquationSeparate(at[Oe],at[Re]),y=Oe,A=Re),(Ae!==b||Fe!==w||Te!==P||Ge!==I)&&(r.blendFuncSeparate(nt[Ae],nt[Fe],nt[Te],nt[Ge]),b=Ae,w=Fe,P=Te,I=Ge),(ct.equals(B)===!1||zt!==H)&&(r.blendColor(ct.r,ct.g,ct.b,zt),B.copy(ct),H=zt),S=j,C=!1}function Ot(j,Oe){j.side===ei?_e(r.CULL_FACE):xe(r.CULL_FACE);let Ae=j.side===qn;Oe&&(Ae=!Ae),pt(Ae),j.blending===Qr&&j.transparent===!1?W(gs):W(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const Fe=j.stencilWrite;f.setTest(Fe),Fe&&(f.setMask(j.stencilWriteMask),f.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),f.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),dt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?xe(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(j){R!==j&&(j?r.frontFace(r.CW):r.frontFace(r.CCW),R=j)}function ft(j){j!==dT?(xe(r.CULL_FACE),j!==V&&(j===hv?r.cullFace(r.BACK):j===pT?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),V=j}function Ve(j){j!==$&&(O&&r.lineWidth(j),$=j)}function dt(j,Oe,Ae){j?(xe(r.POLYGON_OFFSET_FILL),(ie!==Oe||he!==Ae)&&(r.polygonOffset(Oe,Ae),ie=Oe,he=Ae)):_e(r.POLYGON_OFFSET_FILL)}function Qe(j){j?xe(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function ot(j){j===void 0&&(j=r.TEXTURE0+te-1),fe!==j&&(r.activeTexture(j),fe=j)}function sn(j,Oe,Ae){Ae===void 0&&(fe===null?Ae=r.TEXTURE0+te-1:Ae=fe);let Fe=N[Ae];Fe===void 0&&(Fe={type:void 0,texture:void 0},N[Ae]=Fe),(Fe.type!==j||Fe.texture!==Oe)&&(fe!==Ae&&(r.activeTexture(Ae),fe=Ae),r.bindTexture(j,Oe||pe[j]),Fe.type=j,Fe.texture=Oe)}function z(){const j=N[fe];j!==void 0&&j.type!==void 0&&(r.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function D(){try{r.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function se(){try{r.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ye(){try{r.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{r.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{r.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(){try{r.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ue(){try{r.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function We(){try{r.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ye(){try{r.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function be(){try{r.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(j){de.equals(j)===!1&&(r.scissor(j.x,j.y,j.z,j.w),de.copy(j))}function Ze(j){X.equals(j)===!1&&(r.viewport(j.x,j.y,j.z,j.w),X.copy(j))}function Je(j,Oe){let Ae=h.get(Oe);Ae===void 0&&(Ae=new WeakMap,h.set(Oe,Ae));let Fe=Ae.get(j);Fe===void 0&&(Fe=r.getUniformBlockIndex(Oe,j.name),Ae.set(j,Fe))}function De(j,Oe){const Fe=h.get(Oe).get(j);d.get(Oe)!==Fe&&(r.uniformBlockBinding(Oe,Fe,j.__bindingPointIndex),d.set(Oe,Fe))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},fe=null,N={},_={},v=new WeakMap,x=[],M=null,T=!1,S=null,y=null,b=null,w=null,A=null,P=null,I=null,B=new qe(0,0,0),H=0,C=!1,R=null,V=null,$=null,ie=null,he=null,de.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:xe,disable:_e,bindFramebuffer:Ne,drawBuffers:Ce,useProgram:Xe,setBlending:W,setMaterial:Ot,setFlipSided:pt,setCullFace:ft,setLineWidth:Ve,setPolygonOffset:dt,setScissorTest:Qe,activeTexture:ot,bindTexture:sn,unbindTexture:z,compressedTexImage2D:D,compressedTexImage3D:se,texImage2D:Ye,texImage3D:be,updateUBOMapping:Je,uniformBlockBinding:De,texStorage2D:Ue,texStorage3D:We,texSubImage2D:ye,texSubImage3D:Me,compressedTexSubImage2D:ge,compressedTexSubImage3D:Be,scissor:ze,viewport:Ze,reset:ut}}function p2(r,e,t,a,s,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new et,m=new WeakMap;let _;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,D){return x?new OffscreenCanvas(z,D):Ol("canvas")}function T(z,D,se){let ye=1;const Me=sn(z);if((Me.width>se||Me.height>se)&&(ye=se/Math.max(Me.width,Me.height)),ye<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const ge=Math.floor(ye*Me.width),Be=Math.floor(ye*Me.height);_===void 0&&(_=M(ge,Be));const Ue=D?M(ge,Be):_;return Ue.width=ge,Ue.height=Be,Ue.getContext("2d").drawImage(z,0,0,ge,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ge+"x"+Be+")."),Ue}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),z;return z}function S(z){return z.generateMipmaps}function y(z){r.generateMipmap(z)}function b(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(z,D,se,ye,Me=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ge=D;if(D===r.RED&&(se===r.FLOAT&&(ge=r.R32F),se===r.HALF_FLOAT&&(ge=r.R16F),se===r.UNSIGNED_BYTE&&(ge=r.R8)),D===r.RED_INTEGER&&(se===r.UNSIGNED_BYTE&&(ge=r.R8UI),se===r.UNSIGNED_SHORT&&(ge=r.R16UI),se===r.UNSIGNED_INT&&(ge=r.R32UI),se===r.BYTE&&(ge=r.R8I),se===r.SHORT&&(ge=r.R16I),se===r.INT&&(ge=r.R32I)),D===r.RG&&(se===r.FLOAT&&(ge=r.RG32F),se===r.HALF_FLOAT&&(ge=r.RG16F),se===r.UNSIGNED_BYTE&&(ge=r.RG8)),D===r.RG_INTEGER&&(se===r.UNSIGNED_BYTE&&(ge=r.RG8UI),se===r.UNSIGNED_SHORT&&(ge=r.RG16UI),se===r.UNSIGNED_INT&&(ge=r.RG32UI),se===r.BYTE&&(ge=r.RG8I),se===r.SHORT&&(ge=r.RG16I),se===r.INT&&(ge=r.RG32I)),D===r.RGB_INTEGER&&(se===r.UNSIGNED_BYTE&&(ge=r.RGB8UI),se===r.UNSIGNED_SHORT&&(ge=r.RGB16UI),se===r.UNSIGNED_INT&&(ge=r.RGB32UI),se===r.BYTE&&(ge=r.RGB8I),se===r.SHORT&&(ge=r.RGB16I),se===r.INT&&(ge=r.RGB32I)),D===r.RGBA_INTEGER&&(se===r.UNSIGNED_BYTE&&(ge=r.RGBA8UI),se===r.UNSIGNED_SHORT&&(ge=r.RGBA16UI),se===r.UNSIGNED_INT&&(ge=r.RGBA32UI),se===r.BYTE&&(ge=r.RGBA8I),se===r.SHORT&&(ge=r.RGBA16I),se===r.INT&&(ge=r.RGBA32I)),D===r.RGB&&se===r.UNSIGNED_INT_5_9_9_9_REV&&(ge=r.RGB9_E5),D===r.RGBA){const Be=Me?Xu:Rt.getTransfer(ye);se===r.FLOAT&&(ge=r.RGBA32F),se===r.HALF_FLOAT&&(ge=r.RGBA16F),se===r.UNSIGNED_BYTE&&(ge=Be===qt?r.SRGB8_ALPHA8:r.RGBA8),se===r.UNSIGNED_SHORT_4_4_4_4&&(ge=r.RGBA4),se===r.UNSIGNED_SHORT_5_5_5_1&&(ge=r.RGB5_A1)}return(ge===r.R16F||ge===r.R32F||ge===r.RG16F||ge===r.RG32F||ge===r.RGBA16F||ge===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function A(z,D){let se;return z?D===null||D===Ks||D===Cl?se=r.DEPTH24_STENCIL8:D===Ui?se=r.DEPTH32F_STENCIL8:D===Rl&&(se=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Ks||D===Cl?se=r.DEPTH_COMPONENT24:D===Ui?se=r.DEPTH_COMPONENT32F:D===Rl&&(se=r.DEPTH_COMPONENT16),se}function P(z,D){return S(z)===!0||z.isFramebufferTexture&&z.minFilter!==Yn&&z.minFilter!==fi?Math.log2(Math.max(D.width,D.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?D.mipmaps.length:1}function I(z){const D=z.target;D.removeEventListener("dispose",I),H(D),D.isVideoTexture&&m.delete(D)}function B(z){const D=z.target;D.removeEventListener("dispose",B),R(D)}function H(z){const D=a.get(z);if(D.__webglInit===void 0)return;const se=z.source,ye=v.get(se);if(ye){const Me=ye[D.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&C(z),Object.keys(ye).length===0&&v.delete(se)}a.remove(z)}function C(z){const D=a.get(z);r.deleteTexture(D.__webglTexture);const se=z.source,ye=v.get(se);delete ye[D.__cacheKey],u.memory.textures--}function R(z){const D=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(D.__webglFramebuffer[ye]))for(let Me=0;Me<D.__webglFramebuffer[ye].length;Me++)r.deleteFramebuffer(D.__webglFramebuffer[ye][Me]);else r.deleteFramebuffer(D.__webglFramebuffer[ye]);D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer[ye])}else{if(Array.isArray(D.__webglFramebuffer))for(let ye=0;ye<D.__webglFramebuffer.length;ye++)r.deleteFramebuffer(D.__webglFramebuffer[ye]);else r.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&r.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&r.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let ye=0;ye<D.__webglColorRenderbuffer.length;ye++)D.__webglColorRenderbuffer[ye]&&r.deleteRenderbuffer(D.__webglColorRenderbuffer[ye]);D.__webglDepthRenderbuffer&&r.deleteRenderbuffer(D.__webglDepthRenderbuffer)}const se=z.textures;for(let ye=0,Me=se.length;ye<Me;ye++){const ge=a.get(se[ye]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),u.memory.textures--),a.remove(se[ye])}a.remove(z)}let V=0;function $(){V=0}function ie(){const z=V;return z>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),V+=1,z}function he(z){const D=[];return D.push(z.wrapS),D.push(z.wrapT),D.push(z.wrapR||0),D.push(z.magFilter),D.push(z.minFilter),D.push(z.anisotropy),D.push(z.internalFormat),D.push(z.format),D.push(z.type),D.push(z.generateMipmaps),D.push(z.premultiplyAlpha),D.push(z.flipY),D.push(z.unpackAlignment),D.push(z.colorSpace),D.join()}function te(z,D){const se=a.get(z);if(z.isVideoTexture&&Qe(z),z.isRenderTargetTexture===!1&&z.version>0&&se.__version!==z.version){const ye=z.image;if(ye===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(se,z,D);return}}t.bindTexture(r.TEXTURE_2D,se.__webglTexture,r.TEXTURE0+D)}function O(z,D){const se=a.get(z);if(z.version>0&&se.__version!==z.version){pe(se,z,D);return}t.bindTexture(r.TEXTURE_2D_ARRAY,se.__webglTexture,r.TEXTURE0+D)}function F(z,D){const se=a.get(z);if(z.version>0&&se.__version!==z.version){pe(se,z,D);return}t.bindTexture(r.TEXTURE_3D,se.__webglTexture,r.TEXTURE0+D)}function k(z,D){const se=a.get(z);if(z.version>0&&se.__version!==z.version){xe(se,z,D);return}t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture,r.TEXTURE0+D)}const fe={[ro]:r.REPEAT,[ms]:r.CLAMP_TO_EDGE,[ku]:r.MIRRORED_REPEAT},N={[Yn]:r.NEAREST,[Qy]:r.NEAREST_MIPMAP_NEAREST,[El]:r.NEAREST_MIPMAP_LINEAR,[fi]:r.LINEAR,[Ou]:r.LINEAR_MIPMAP_NEAREST,[ba]:r.LINEAR_MIPMAP_LINEAR},K={[JT]:r.NEVER,[ab]:r.ALWAYS,[$T]:r.LESS,[rx]:r.LEQUAL,[eb]:r.EQUAL,[ib]:r.GEQUAL,[tb]:r.GREATER,[nb]:r.NOTEQUAL};function Z(z,D){if(D.type===Ui&&e.has("OES_texture_float_linear")===!1&&(D.magFilter===fi||D.magFilter===Ou||D.magFilter===El||D.magFilter===ba||D.minFilter===fi||D.minFilter===Ou||D.minFilter===El||D.minFilter===ba)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,fe[D.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,fe[D.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,fe[D.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,N[D.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,N[D.minFilter]),D.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,K[D.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===Yn||D.minFilter!==El&&D.minFilter!==ba||D.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||a.get(D).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");r.texParameterf(z,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,s.getMaxAnisotropy())),a.get(D).__currentAnisotropy=D.anisotropy}}}function de(z,D){let se=!1;z.__webglInit===void 0&&(z.__webglInit=!0,D.addEventListener("dispose",I));const ye=D.source;let Me=v.get(ye);Me===void 0&&(Me={},v.set(ye,Me));const ge=he(D);if(ge!==z.__cacheKey){Me[ge]===void 0&&(Me[ge]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,se=!0),Me[ge].usedTimes++;const Be=Me[z.__cacheKey];Be!==void 0&&(Me[z.__cacheKey].usedTimes--,Be.usedTimes===0&&C(D)),z.__cacheKey=ge,z.__webglTexture=Me[ge].texture}return se}function X(z,D,se){return Math.floor(Math.floor(z/se)/D)}function le(z,D,se,ye){const ge=z.updateRanges;if(ge.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,D.width,D.height,se,ye,D.data);else{ge.sort((be,ze)=>be.start-ze.start);let Be=0;for(let be=1;be<ge.length;be++){const ze=ge[Be],Ze=ge[be],Je=ze.start+ze.count,De=X(Ze.start,D.width,4),ut=X(ze.start,D.width,4);Ze.start<=Je+1&&De===ut&&X(Ze.start+Ze.count-1,D.width,4)===De?ze.count=Math.max(ze.count,Ze.start+Ze.count-ze.start):(++Be,ge[Be]=Ze)}ge.length=Be+1;const Ue=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),Ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,D.width);for(let be=0,ze=ge.length;be<ze;be++){const Ze=ge[be],Je=Math.floor(Ze.start/4),De=Math.ceil(Ze.count/4),ut=Je%D.width,j=Math.floor(Je/D.width),Oe=De,Ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,j),t.texSubImage2D(r.TEXTURE_2D,0,ut,j,Oe,Ae,se,ye,D.data)}z.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ye)}}function pe(z,D,se){let ye=r.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(ye=r.TEXTURE_2D_ARRAY),D.isData3DTexture&&(ye=r.TEXTURE_3D);const Me=de(z,D),ge=D.source;t.bindTexture(ye,z.__webglTexture,r.TEXTURE0+se);const Be=a.get(ge);if(ge.version!==Be.__version||Me===!0){t.activeTexture(r.TEXTURE0+se);const Ue=Rt.getPrimaries(Rt.workingColorSpace),We=D.colorSpace===ds?null:Rt.getPrimaries(D.colorSpace),Ye=D.colorSpace===ds||Ue===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let be=T(D.image,!1,s.maxTextureSize);be=ot(D,be);const ze=l.convert(D.format,D.colorSpace),Ze=l.convert(D.type);let Je=w(D.internalFormat,ze,Ze,D.colorSpace,D.isVideoTexture);Z(ye,D);let De;const ut=D.mipmaps,j=D.isVideoTexture!==!0,Oe=Be.__version===void 0||Me===!0,Ae=ge.dataReady,Fe=P(D,be);if(D.isDepthTexture)Je=A(D.format===Ll,D.type),Oe&&(j?t.texStorage2D(r.TEXTURE_2D,1,Je,be.width,be.height):t.texImage2D(r.TEXTURE_2D,0,Je,be.width,be.height,0,ze,Ze,null));else if(D.isDataTexture)if(ut.length>0){j&&Oe&&t.texStorage2D(r.TEXTURE_2D,Fe,Je,ut[0].width,ut[0].height);for(let Re=0,Te=ut.length;Re<Te;Re++)De=ut[Re],j?Ae&&t.texSubImage2D(r.TEXTURE_2D,Re,0,0,De.width,De.height,ze,Ze,De.data):t.texImage2D(r.TEXTURE_2D,Re,Je,De.width,De.height,0,ze,Ze,De.data);D.generateMipmaps=!1}else j?(Oe&&t.texStorage2D(r.TEXTURE_2D,Fe,Je,be.width,be.height),Ae&&le(D,be,ze,Ze)):t.texImage2D(r.TEXTURE_2D,0,Je,be.width,be.height,0,ze,Ze,be.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){j&&Oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Je,ut[0].width,ut[0].height,be.depth);for(let Re=0,Te=ut.length;Re<Te;Re++)if(De=ut[Re],D.format!==Ti)if(ze!==null)if(j){if(Ae)if(D.layerUpdates.size>0){const Ge=ny(De.width,De.height,D.format,D.type);for(const ct of D.layerUpdates){const zt=De.data.subarray(ct*Ge/De.data.BYTES_PER_ELEMENT,(ct+1)*Ge/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,ct,De.width,De.height,1,ze,zt)}D.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,De.width,De.height,be.depth,ze,De.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Re,Je,De.width,De.height,be.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,De.width,De.height,be.depth,ze,Ze,De.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Re,Je,De.width,De.height,be.depth,0,ze,Ze,De.data)}else{j&&Oe&&t.texStorage2D(r.TEXTURE_2D,Fe,Je,ut[0].width,ut[0].height);for(let Re=0,Te=ut.length;Re<Te;Re++)De=ut[Re],D.format!==Ti?ze!==null?j?Ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,Re,0,0,De.width,De.height,ze,De.data):t.compressedTexImage2D(r.TEXTURE_2D,Re,Je,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ae&&t.texSubImage2D(r.TEXTURE_2D,Re,0,0,De.width,De.height,ze,Ze,De.data):t.texImage2D(r.TEXTURE_2D,Re,Je,De.width,De.height,0,ze,Ze,De.data)}else if(D.isDataArrayTexture)if(j){if(Oe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Je,be.width,be.height,be.depth),Ae)if(D.layerUpdates.size>0){const Re=ny(be.width,be.height,D.format,D.type);for(const Te of D.layerUpdates){const Ge=be.data.subarray(Te*Re/be.data.BYTES_PER_ELEMENT,(Te+1)*Re/be.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Te,be.width,be.height,1,ze,Ze,Ge)}D.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,ze,Ze,be.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,be.width,be.height,be.depth,0,ze,Ze,be.data);else if(D.isData3DTexture)j?(Oe&&t.texStorage3D(r.TEXTURE_3D,Fe,Je,be.width,be.height,be.depth),Ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,ze,Ze,be.data)):t.texImage3D(r.TEXTURE_3D,0,Je,be.width,be.height,be.depth,0,ze,Ze,be.data);else if(D.isFramebufferTexture){if(Oe)if(j)t.texStorage2D(r.TEXTURE_2D,Fe,Je,be.width,be.height);else{let Re=be.width,Te=be.height;for(let Ge=0;Ge<Fe;Ge++)t.texImage2D(r.TEXTURE_2D,Ge,Je,Re,Te,0,ze,Ze,null),Re>>=1,Te>>=1}}else if(ut.length>0){if(j&&Oe){const Re=sn(ut[0]);t.texStorage2D(r.TEXTURE_2D,Fe,Je,Re.width,Re.height)}for(let Re=0,Te=ut.length;Re<Te;Re++)De=ut[Re],j?Ae&&t.texSubImage2D(r.TEXTURE_2D,Re,0,0,ze,Ze,De):t.texImage2D(r.TEXTURE_2D,Re,Je,ze,Ze,De);D.generateMipmaps=!1}else if(j){if(Oe){const Re=sn(be);t.texStorage2D(r.TEXTURE_2D,Fe,Je,Re.width,Re.height)}Ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,Ze,be)}else t.texImage2D(r.TEXTURE_2D,0,Je,ze,Ze,be);S(D)&&y(ye),Be.__version=ge.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function xe(z,D,se){if(D.image.length!==6)return;const ye=de(z,D),Me=D.source;t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+se);const ge=a.get(Me);if(Me.version!==ge.__version||ye===!0){t.activeTexture(r.TEXTURE0+se);const Be=Rt.getPrimaries(Rt.workingColorSpace),Ue=D.colorSpace===ds?null:Rt.getPrimaries(D.colorSpace),We=D.colorSpace===ds||Be===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,D.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,D.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const Ye=D.isCompressedTexture||D.image[0].isCompressedTexture,be=D.image[0]&&D.image[0].isDataTexture,ze=[];for(let Te=0;Te<6;Te++)!Ye&&!be?ze[Te]=T(D.image[Te],!0,s.maxCubemapSize):ze[Te]=be?D.image[Te].image:D.image[Te],ze[Te]=ot(D,ze[Te]);const Ze=ze[0],Je=l.convert(D.format,D.colorSpace),De=l.convert(D.type),ut=w(D.internalFormat,Je,De,D.colorSpace),j=D.isVideoTexture!==!0,Oe=ge.__version===void 0||ye===!0,Ae=Me.dataReady;let Fe=P(D,Ze);Z(r.TEXTURE_CUBE_MAP,D);let Re;if(Ye){j&&Oe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ut,Ze.width,Ze.height);for(let Te=0;Te<6;Te++){Re=ze[Te].mipmaps;for(let Ge=0;Ge<Re.length;Ge++){const ct=Re[Ge];D.format!==Ti?Je!==null?j?Ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge,0,0,ct.width,ct.height,Je,ct.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge,ut,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge,0,0,ct.width,ct.height,Je,De,ct.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge,ut,ct.width,ct.height,0,Je,De,ct.data)}}}else{if(Re=D.mipmaps,j&&Oe){Re.length>0&&Fe++;const Te=sn(ze[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ut,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(be){j?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ze[Te].width,ze[Te].height,Je,De,ze[Te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ut,ze[Te].width,ze[Te].height,0,Je,De,ze[Te].data);for(let Ge=0;Ge<Re.length;Ge++){const zt=Re[Ge].image[Te].image;j?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge+1,0,0,zt.width,zt.height,Je,De,zt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge+1,ut,zt.width,zt.height,0,Je,De,zt.data)}}else{j?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Je,De,ze[Te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,ut,Je,De,ze[Te]);for(let Ge=0;Ge<Re.length;Ge++){const ct=Re[Ge];j?Ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge+1,0,0,Je,De,ct.image[Te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ge+1,ut,Je,De,ct.image[Te])}}}S(D)&&y(r.TEXTURE_CUBE_MAP),ge.__version=Me.version,D.onUpdate&&D.onUpdate(D)}z.__version=D.version}function _e(z,D,se,ye,Me,ge){const Be=l.convert(se.format,se.colorSpace),Ue=l.convert(se.type),We=w(se.internalFormat,Be,Ue,se.colorSpace),Ye=a.get(D),be=a.get(se);if(be.__renderTarget=D,!Ye.__hasExternalTextures){const ze=Math.max(1,D.width>>ge),Ze=Math.max(1,D.height>>ge);Me===r.TEXTURE_3D||Me===r.TEXTURE_2D_ARRAY?t.texImage3D(Me,ge,We,ze,Ze,D.depth,0,Be,Ue,null):t.texImage2D(Me,ge,We,ze,Ze,0,Be,Ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,z),dt(D)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ye,Me,be.__webglTexture,0,Ve(D)):(Me===r.TEXTURE_2D||Me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ye,Me,be.__webglTexture,ge),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ne(z,D,se){if(r.bindRenderbuffer(r.RENDERBUFFER,z),D.depthBuffer){const ye=D.depthTexture,Me=ye&&ye.isDepthTexture?ye.type:null,ge=A(D.stencilBuffer,Me),Be=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ue=Ve(D);dt(D)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ue,ge,D.width,D.height):se?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,ge,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,ge,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Be,r.RENDERBUFFER,z)}else{const ye=D.textures;for(let Me=0;Me<ye.length;Me++){const ge=ye[Me],Be=l.convert(ge.format,ge.colorSpace),Ue=l.convert(ge.type),We=w(ge.internalFormat,Be,Ue,ge.colorSpace),Ye=Ve(D);se&&dt(D)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ye,We,D.width,D.height):dt(D)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ye,We,D.width,D.height):r.renderbufferStorage(r.RENDERBUFFER,We,D.width,D.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(z,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,z),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=a.get(D.depthTexture);ye.__renderTarget=D,(!ye.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),te(D.depthTexture,0);const Me=ye.__webglTexture,ge=Ve(D);if(D.depthTexture.format===Dl)dt(D)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Me,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Me,0);else if(D.depthTexture.format===Ll)dt(D)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Me,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function Xe(z){const D=a.get(z),se=z.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==z.depthTexture){const ye=z.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),ye){const Me=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,ye.removeEventListener("dispose",Me)};ye.addEventListener("dispose",Me),D.__depthDisposeCallback=Me}D.__boundDepthTexture=ye}if(z.depthTexture&&!D.__autoAllocateDepthBuffer){if(se)throw new Error("target.depthTexture not supported in Cube render targets");const ye=z.texture.mipmaps;ye&&ye.length>0?Ce(D.__webglFramebuffer[0],z):Ce(D.__webglFramebuffer,z)}else if(se){D.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[ye]),D.__webglDepthbuffer[ye]===void 0)D.__webglDepthbuffer[ye]=r.createRenderbuffer(),Ne(D.__webglDepthbuffer[ye],z,!1);else{const Me=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=D.__webglDepthbuffer[ye];r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,ge)}}else{const ye=z.texture.mipmaps;if(ye&&ye.length>0?t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=r.createRenderbuffer(),Ne(D.__webglDepthbuffer,z,!1);else{const Me=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=D.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,Me,r.RENDERBUFFER,ge)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function at(z,D,se){const ye=a.get(z);D!==void 0&&_e(ye.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),se!==void 0&&Xe(z)}function nt(z){const D=z.texture,se=a.get(z),ye=a.get(D);z.addEventListener("dispose",B);const Me=z.textures,ge=z.isWebGLCubeRenderTarget===!0,Be=Me.length>1;if(Be||(ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture()),ye.__version=D.version,u.memory.textures++),ge){se.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(D.mipmaps&&D.mipmaps.length>0){se.__webglFramebuffer[Ue]=[];for(let We=0;We<D.mipmaps.length;We++)se.__webglFramebuffer[Ue][We]=r.createFramebuffer()}else se.__webglFramebuffer[Ue]=r.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){se.__webglFramebuffer=[];for(let Ue=0;Ue<D.mipmaps.length;Ue++)se.__webglFramebuffer[Ue]=r.createFramebuffer()}else se.__webglFramebuffer=r.createFramebuffer();if(Be)for(let Ue=0,We=Me.length;Ue<We;Ue++){const Ye=a.get(Me[Ue]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=r.createTexture(),u.memory.textures++)}if(z.samples>0&&dt(z)===!1){se.__webglMultisampledFramebuffer=r.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Me.length;Ue++){const We=Me[Ue];se.__webglColorRenderbuffer[Ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,se.__webglColorRenderbuffer[Ue]);const Ye=l.convert(We.format,We.colorSpace),be=l.convert(We.type),ze=w(We.internalFormat,Ye,be,We.colorSpace,z.isXRRenderTarget===!0),Ze=Ve(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,ze,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ue,r.RENDERBUFFER,se.__webglColorRenderbuffer[Ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(se.__webglDepthRenderbuffer=r.createRenderbuffer(),Ne(se.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ge){t.bindTexture(r.TEXTURE_CUBE_MAP,ye.__webglTexture),Z(r.TEXTURE_CUBE_MAP,D);for(let Ue=0;Ue<6;Ue++)if(D.mipmaps&&D.mipmaps.length>0)for(let We=0;We<D.mipmaps.length;We++)_e(se.__webglFramebuffer[Ue][We],z,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,We);else _e(se.__webglFramebuffer[Ue],z,D,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(D)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Ue=0,We=Me.length;Ue<We;Ue++){const Ye=Me[Ue],be=a.get(Ye);t.bindTexture(r.TEXTURE_2D,be.__webglTexture),Z(r.TEXTURE_2D,Ye),_e(se.__webglFramebuffer,z,Ye,r.COLOR_ATTACHMENT0+Ue,r.TEXTURE_2D,0),S(Ye)&&y(r.TEXTURE_2D)}t.unbindTexture()}else{let Ue=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ue=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ue,ye.__webglTexture),Z(Ue,D),D.mipmaps&&D.mipmaps.length>0)for(let We=0;We<D.mipmaps.length;We++)_e(se.__webglFramebuffer[We],z,D,r.COLOR_ATTACHMENT0,Ue,We);else _e(se.__webglFramebuffer,z,D,r.COLOR_ATTACHMENT0,Ue,0);S(D)&&y(Ue),t.unbindTexture()}z.depthBuffer&&Xe(z)}function W(z){const D=z.textures;for(let se=0,ye=D.length;se<ye;se++){const Me=D[se];if(S(Me)){const ge=b(z),Be=a.get(Me).__webglTexture;t.bindTexture(ge,Be),y(ge),t.unbindTexture()}}}const Ot=[],pt=[];function ft(z){if(z.samples>0){if(dt(z)===!1){const D=z.textures,se=z.width,ye=z.height;let Me=r.COLOR_BUFFER_BIT;const ge=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Be=a.get(z),Ue=D.length>1;if(Ue)for(let Ye=0;Ye<D.length;Ye++)t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const We=z.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ye=0;Ye<D.length;Ye++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Me|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Me|=r.STENCIL_BUFFER_BIT)),Ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Be.__webglColorRenderbuffer[Ye]);const be=a.get(D[Ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,se,ye,0,0,se,ye,Me,r.NEAREST),d===!0&&(Ot.length=0,pt.length=0,Ot.push(r.COLOR_ATTACHMENT0+Ye),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ot.push(ge),pt.push(ge),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ue)for(let Ye=0;Ye<D.length;Ye++){t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.RENDERBUFFER,Be.__webglColorRenderbuffer[Ye]);const be=a.get(D[Ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ye,r.TEXTURE_2D,be,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&d){const D=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[D])}}}function Ve(z){return Math.min(s.maxSamples,z.samples)}function dt(z){const D=a.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Qe(z){const D=u.render.frame;m.get(z)!==D&&(m.set(z,D),z.update())}function ot(z,D){const se=z.colorSpace,ye=z.format,Me=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||se!==jn&&se!==ds&&(Rt.getTransfer(se)===qt?(ye!==Ti||Me!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",se)),D}function sn(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=ie,this.resetTextureUnits=$,this.setTexture2D=te,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=k,this.rebindTextures=at,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=dt}function m2(r,e){function t(a,s=ds){let l;const u=Rt.getTransfer(s);if(a===Ki)return r.UNSIGNED_BYTE;if(a===im)return r.UNSIGNED_SHORT_4_4_4_4;if(a===am)return r.UNSIGNED_SHORT_5_5_5_1;if(a===ex)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Jy)return r.BYTE;if(a===$y)return r.SHORT;if(a===Rl)return r.UNSIGNED_SHORT;if(a===nm)return r.INT;if(a===Ks)return r.UNSIGNED_INT;if(a===Ui)return r.FLOAT;if(a===zl)return r.HALF_FLOAT;if(a===tx)return r.ALPHA;if(a===nx)return r.RGB;if(a===Ti)return r.RGBA;if(a===Dl)return r.DEPTH_COMPONENT;if(a===Ll)return r.DEPTH_STENCIL;if(a===sm)return r.RED;if(a===rm)return r.RED_INTEGER;if(a===ix)return r.RG;if(a===om)return r.RG_INTEGER;if(a===lm)return r.RGBA_INTEGER;if(a===Pu||a===Iu||a===Bu||a===zu)if(u===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Pu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Bu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Pu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Iu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Bu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===hp||a===dp||a===pp||a===mp)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===hp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===dp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===pp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===mp)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===gp||a===_p||a===vp)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===gp||a===_p)return u===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===vp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===yp||a===xp||a===Sp||a===Mp||a===Ep||a===Tp||a===bp||a===Ap||a===wp||a===Rp||a===Cp||a===Dp||a===Lp||a===Up)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===yp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===xp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Sp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Mp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Ep)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Tp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===bp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Ap)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===wp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Rp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Cp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Dp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Lp)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Up)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Fu||a===Np||a===Op)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Fu)return u===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Np)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Op)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ax||a===Pp||a===Ip||a===Bp)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Fu)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Pp)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ip)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Bp)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Cl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:t}}const g2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_2=`
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

}`;class v2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,a){if(this.texture===null){const s=new vn,l=e.properties.get(s);l.__webglTexture=t.texture,(t.depthNear!==a.depthNear||t.depthFar!==a.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new hi({vertexShader:g2,fragmentShader:_2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new vs(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class y2 extends Js{constructor(e,t){super();const a=this;let s=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,_=null,v=null,x=null,M=null;const T=new v2,S=t.getContextAttributes();let y=null,b=null;const w=[],A=[],P=new et;let I=null;const B=new Dn;B.viewport=new Ut;const H=new Dn;H.viewport=new Ut;const C=[B,H],R=new AA;let V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let le=w[X];return le===void 0&&(le=new Id,w[X]=le),le.getTargetRaySpace()},this.getControllerGrip=function(X){let le=w[X];return le===void 0&&(le=new Id,w[X]=le),le.getGripSpace()},this.getHand=function(X){let le=w[X];return le===void 0&&(le=new Id,w[X]=le),le.getHandSpace()};function ie(X){const le=A.indexOf(X.inputSource);if(le===-1)return;const pe=w[le];pe!==void 0&&(pe.update(X.inputSource,X.frame,h||u),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function he(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",te);for(let X=0;X<w.length;X++){const le=A[X];le!==null&&(A[X]=null,w[X].disconnect(le))}V=null,$=null,T.reset(),e.setRenderTarget(y),x=null,v=null,_=null,s=null,b=null,de.stop(),a.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",he),s.addEventListener("inputsourceschange",te),S.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,xe=null,_e=null;S.depth&&(_e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=S.stencil?Ll:Dl,xe=S.stencil?Cl:Ks);const Ne={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};_=new XRWebGLBinding(s,t),v=_.createProjectionLayer(Ne),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),b=new Zs(v.textureWidth,v.textureHeight,{format:Ti,type:Ki,depthTexture:new vx(v.textureWidth,v.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const pe={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Zs(x.framebufferWidth,x.framebufferHeight,{format:Ti,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(f),de.setContext(s),de.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function te(X){for(let le=0;le<X.removed.length;le++){const pe=X.removed[le],xe=A.indexOf(pe);xe>=0&&(A[xe]=null,w[xe].disconnect(pe))}for(let le=0;le<X.added.length;le++){const pe=X.added[le];let xe=A.indexOf(pe);if(xe===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=A.length){A.push(pe),xe=Ne;break}else if(A[Ne]===null){A[Ne]=pe,xe=Ne;break}if(xe===-1)break}const _e=w[xe];_e&&_e.connect(pe)}}const O=new q,F=new q;function k(X,le,pe){O.setFromMatrixPosition(le.matrixWorld),F.setFromMatrixPosition(pe.matrixWorld);const xe=O.distanceTo(F),_e=le.projectionMatrix.elements,Ne=pe.projectionMatrix.elements,Ce=_e[14]/(_e[10]-1),Xe=_e[14]/(_e[10]+1),at=(_e[9]+1)/_e[5],nt=(_e[9]-1)/_e[5],W=(_e[8]-1)/_e[0],Ot=(Ne[8]+1)/Ne[0],pt=Ce*W,ft=Ce*Ot,Ve=xe/(-W+Ot),dt=Ve*-W;if(le.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(dt),X.translateZ(Ve),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),_e[10]===-1)X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Qe=Ce+Ve,ot=Xe+Ve,sn=pt-dt,z=ft+(xe-dt),D=at*Xe/ot*Qe,se=nt*Xe/ot*Qe;X.projectionMatrix.makePerspective(sn,z,D,se,Qe,ot),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function fe(X,le){le===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(le.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let le=X.near,pe=X.far;T.texture!==null&&(T.depthNear>0&&(le=T.depthNear),T.depthFar>0&&(pe=T.depthFar)),R.near=H.near=B.near=le,R.far=H.far=B.far=pe,(V!==R.near||$!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,$=R.far),B.layers.mask=X.layers.mask|2,H.layers.mask=X.layers.mask|4,R.layers.mask=B.layers.mask|H.layers.mask;const xe=X.parent,_e=R.cameras;fe(R,xe);for(let Ne=0;Ne<_e.length;Ne++)fe(_e[Ne],xe);_e.length===2?k(R,B,H):R.projectionMatrix.copy(B.projectionMatrix),N(X,R,xe)};function N(X,le,pe){pe===null?X.matrix.copy(le.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(le.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=oo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&x===null))return d},this.setFoveation=function(X){d=X,v!==null&&(v.fixedFoveation=X),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=X)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let K=null;function Z(X,le){if(m=le.getViewerPose(h||u),M=le,m!==null){const pe=m.views;x!==null&&(e.setRenderTargetFramebuffer(b,x.framebuffer),e.setRenderTarget(b));let xe=!1;pe.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let Ce=0;Ce<pe.length;Ce++){const Xe=pe[Ce];let at=null;if(x!==null)at=x.getViewport(Xe);else{const W=_.getViewSubImage(v,Xe);at=W.viewport,Ce===0&&(e.setRenderTargetTextures(b,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(b))}let nt=C[Ce];nt===void 0&&(nt=new Dn,nt.layers.enable(Ce),nt.viewport=new Ut,C[Ce]=nt),nt.matrix.fromArray(Xe.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Xe.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(at.x,at.y,at.width,at.height),Ce===0&&(R.matrix.copy(nt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xe===!0&&R.cameras.push(nt)}const _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){const Ce=_.getDepthInformation(pe[0]);Ce&&Ce.isValid&&Ce.texture&&T.init(e,Ce,s.renderState)}}for(let pe=0;pe<w.length;pe++){const xe=A[pe],_e=w[pe];xe!==null&&_e!==void 0&&_e.update(xe,le,h||u)}K&&K(X,le),le.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:le}),M=null}const de=new Ax;de.setAnimationLoop(Z),this.setAnimationLoop=function(X){K=X},this.dispose=function(){}}}const ks=new Bi,x2=new ht;function S2(r,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function a(S,y){y.color.getRGB(S.fogColor.value,dx(r)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function s(S,y,b,w,A){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),_(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),v(S,y),y.isMeshPhysicalMaterial&&x(S,y,A)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),T(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&f(S,y)):y.isPointsMaterial?d(S,y,b,w):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===qn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===qn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const b=e.get(y),w=b.envMap,A=b.envMapRotation;w&&(S.envMap.value=w,ks.copy(A),ks.x*=-1,ks.y*=-1,ks.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),S.envMapRotation.value.setFromMatrix4(x2.makeRotationFromEuler(ks)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function f(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,b,w){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*b,S.scale.value=w*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function v(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,b){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===qn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const b=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function M2(r,e,t,a){let s={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(b,w){const A=w.program;a.uniformBlockBinding(b,A)}function h(b,w){let A=s[b.id];A===void 0&&(M(b),A=m(b),s[b.id]=A,b.addEventListener("dispose",S));const P=w.program;a.updateUBOMapping(b,P);const I=e.render.frame;l[b.id]!==I&&(v(b),l[b.id]=I)}function m(b){const w=_();b.__bindingPointIndex=w;const A=r.createBuffer(),P=b.__size,I=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,P,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,A),A}function _(){for(let b=0;b<f;b++)if(u.indexOf(b)===-1)return u.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(b){const w=s[b.id],A=b.uniforms,P=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let I=0,B=A.length;I<B;I++){const H=Array.isArray(A[I])?A[I]:[A[I]];for(let C=0,R=H.length;C<R;C++){const V=H[C];if(x(V,I,C,P)===!0){const $=V.__offset,ie=Array.isArray(V.value)?V.value:[V.value];let he=0;for(let te=0;te<ie.length;te++){const O=ie[te],F=T(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,$+he,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,he),he+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(b,w,A,P){const I=b.value,B=w+"_"+A;if(P[B]===void 0)return typeof I=="number"||typeof I=="boolean"?P[B]=I:P[B]=I.clone(),!0;{const H=P[B];if(typeof I=="number"||typeof I=="boolean"){if(H!==I)return P[B]=I,!0}else if(H.equals(I)===!1)return H.copy(I),!0}return!1}function M(b){const w=b.uniforms;let A=0;const P=16;for(let B=0,H=w.length;B<H;B++){const C=Array.isArray(w[B])?w[B]:[w[B]];for(let R=0,V=C.length;R<V;R++){const $=C[R],ie=Array.isArray($.value)?$.value:[$.value];for(let he=0,te=ie.length;he<te;he++){const O=ie[he],F=T(O),k=A%P,fe=k%F.boundary,N=k+fe;A+=fe,N!==0&&P-N<F.storage&&(A+=P-N),$.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=F.storage}}}const I=A%P;return I>0&&(A+=P-I),b.__size=A,b.__cache={},this}function T(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function S(b){const w=b.target;w.removeEventListener("dispose",S);const A=u.indexOf(w.__bindingPointIndex);u.splice(A,1),r.deleteBuffer(s[w.id]),delete s[w.id],delete l[w.id]}function y(){for(const b in s)r.deleteBuffer(s[b]);u=[],s={},l={}}return{bind:d,update:h,dispose:y}}class sf{constructor(e={}){const{canvas:t=Sb(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let x;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=a.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),T=new Int32Array(4);let S=null,y=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_s,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let P=!1;this._outputColorSpace=hn;let I=0,B=0,H=null,C=-1,R=null;const V=new Ut,$=new Ut;let ie=null;const he=new qe(0);let te=0,O=t.width,F=t.height,k=1,fe=null,N=null;const K=new Ut(0,0,O,F),Z=new Ut(0,0,O,F);let de=!1;const X=new _m;let le=!1,pe=!1;const xe=new ht,_e=new ht,Ne=new q,Ce=new Ut,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function nt(){return H===null?k:1}let W=a;function Ot(U,J){return t.getContext(U,J)}try{const U={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${em}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Re,!1),t.addEventListener("webglcontextcreationerror",Te,!1),W===null){const J="webgl2";if(W=Ot(J,U),W===null)throw Ot(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw console.error("THREE.WebGLRenderer: "+U.message),U}let pt,ft,Ve,dt,Qe,ot,sn,z,D,se,ye,Me,ge,Be,Ue,We,Ye,be,ze,Ze,Je,De,ut,j;function Oe(){pt=new NR(W),pt.init(),De=new m2(W,pt),ft=new AR(W,pt,e,De),Ve=new d2(W,pt),ft.reverseDepthBuffer&&v&&Ve.buffers.depth.setReversed(!0),dt=new IR(W),Qe=new e2,ot=new p2(W,pt,Ve,Qe,ft,De,dt),sn=new RR(A),z=new UR(A),D=new GA(W),ut=new TR(W,D),se=new OR(W,D,dt,ut),ye=new zR(W,se,D,dt),ze=new BR(W,ft,ot),We=new wR(Qe),Me=new $C(A,sn,z,pt,ft,ut,We),ge=new S2(A,Qe),Be=new n2,Ue=new l2(pt),be=new ER(A,sn,z,Ve,ye,x,d),Ye=new f2(A,ye,ft),j=new M2(W,dt,ft,Ve),Ze=new bR(W,pt,dt),Je=new PR(W,pt,dt),dt.programs=Me.programs,A.capabilities=ft,A.extensions=pt,A.properties=Qe,A.renderLists=Be,A.shadowMap=Ye,A.state=Ve,A.info=dt}Oe();const Ae=new y2(A,W);this.xr=Ae,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const U=pt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=pt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(U){U!==void 0&&(k=U,this.setSize(O,F,!1))},this.getSize=function(U){return U.set(O,F)},this.setSize=function(U,J,ce=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=U,F=J,t.width=Math.floor(U*k),t.height=Math.floor(J*k),ce===!0&&(t.style.width=U+"px",t.style.height=J+"px"),this.setViewport(0,0,U,J)},this.getDrawingBufferSize=function(U){return U.set(O*k,F*k).floor()},this.setDrawingBufferSize=function(U,J,ce){O=U,F=J,k=ce,t.width=Math.floor(U*ce),t.height=Math.floor(J*ce),this.setViewport(0,0,U,J)},this.getCurrentViewport=function(U){return U.copy(V)},this.getViewport=function(U){return U.copy(K)},this.setViewport=function(U,J,ce,ue){U.isVector4?K.set(U.x,U.y,U.z,U.w):K.set(U,J,ce,ue),Ve.viewport(V.copy(K).multiplyScalar(k).round())},this.getScissor=function(U){return U.copy(Z)},this.setScissor=function(U,J,ce,ue){U.isVector4?Z.set(U.x,U.y,U.z,U.w):Z.set(U,J,ce,ue),Ve.scissor($.copy(Z).multiplyScalar(k).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(U){Ve.setScissorTest(de=U)},this.setOpaqueSort=function(U){fe=U},this.setTransparentSort=function(U){N=U},this.getClearColor=function(U){return U.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(U=!0,J=!0,ce=!0){let ue=0;if(U){let ee=!1;if(H!==null){const we=H.texture.format;ee=we===lm||we===om||we===rm}if(ee){const we=H.texture.type,Le=we===Ki||we===Ks||we===Rl||we===Cl||we===im||we===am,Ie=be.getClearColor(),He=be.getClearAlpha(),rt=Ie.r,tt=Ie.g,je=Ie.b;Le?(M[0]=rt,M[1]=tt,M[2]=je,M[3]=He,W.clearBufferuiv(W.COLOR,0,M)):(T[0]=rt,T[1]=tt,T[2]=je,T[3]=He,W.clearBufferiv(W.COLOR,0,T))}else ue|=W.COLOR_BUFFER_BIT}J&&(ue|=W.DEPTH_BUFFER_BIT),ce&&(ue|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Re,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),be.dispose(),Be.dispose(),Ue.dispose(),Qe.dispose(),sn.dispose(),z.dispose(),ye.dispose(),ut.dispose(),j.dispose(),Me.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",dn),Ae.removeEventListener("sessionend",Un),Kn.stop()};function Fe(U){U.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Re(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const U=dt.autoReset,J=Ye.enabled,ce=Ye.autoUpdate,ue=Ye.needsUpdate,ee=Ye.type;Oe(),dt.autoReset=U,Ye.enabled=J,Ye.autoUpdate=ce,Ye.needsUpdate=ue,Ye.type=ee}function Te(U){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Ge(U){const J=U.target;J.removeEventListener("dispose",Ge),ct(J)}function ct(U){zt(U),Qe.remove(U)}function zt(U){const J=Qe.get(U).programs;J!==void 0&&(J.forEach(function(ce){Me.releaseProgram(ce)}),U.isShaderMaterial&&Me.releaseShaderCache(U))}this.renderBufferDirect=function(U,J,ce,ue,ee,we){J===null&&(J=Xe);const Le=ee.isMesh&&ee.matrixWorld.determinant()<0,Ie=Ss(U,J,ce,ue,ee);Ve.setMaterial(ue,Le);let He=ce.index,rt=1;if(ue.wireframe===!0){if(He=se.getWireframeAttribute(ce),He===void 0)return;rt=2}const tt=ce.drawRange,je=ce.attributes.position;let _t=tt.start*rt,Pt=(tt.start+tt.count)*rt;we!==null&&(_t=Math.max(_t,we.start*rt),Pt=Math.min(Pt,(we.start+we.count)*rt)),He!==null?(_t=Math.max(_t,0),Pt=Math.min(Pt,He.count)):je!=null&&(_t=Math.max(_t,0),Pt=Math.min(Pt,je.count));const Qt=Pt-_t;if(Qt<0||Qt===1/0)return;ut.setup(ee,ue,Ie,ce,He);let xt,It=Ze;if(He!==null&&(xt=D.get(He),It=Je,It.setIndex(xt)),ee.isMesh)ue.wireframe===!0?(Ve.setLineWidth(ue.wireframeLinewidth*nt()),It.setMode(W.LINES)):It.setMode(W.TRIANGLES);else if(ee.isLine){let $e=ue.linewidth;$e===void 0&&($e=1),Ve.setLineWidth($e*nt()),ee.isLineSegments?It.setMode(W.LINES):ee.isLineLoop?It.setMode(W.LINE_LOOP):It.setMode(W.LINE_STRIP)}else ee.isPoints?It.setMode(W.POINTS):ee.isSprite&&It.setMode(W.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)$r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))It.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const $e=ee._multiDrawStarts,Gt=ee._multiDrawCounts,At=ee._multiDrawCount,En=He?D.get(He).bytesPerElement:1,Ba=Qe.get(ue).currentProgram.getUniforms();for(let Kt=0;Kt<At;Kt++)Ba.setValue(W,"_gl_DrawID",Kt),It.render($e[Kt]/En,Gt[Kt])}else if(ee.isInstancedMesh)It.renderInstances(_t,Qt,ee.count);else if(ce.isInstancedBufferGeometry){const $e=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Gt=Math.min(ce.instanceCount,$e);It.renderInstances(_t,Qt,Gt)}else It.render(_t,Qt)};function Dt(U,J,ce){U.transparent===!0&&U.side===ei&&U.forceSinglePass===!1?(U.side=qn,U.needsUpdate=!0,Pa(U,J,ce),U.side=La,U.needsUpdate=!0,Pa(U,J,ce),U.side=ei):Pa(U,J,ce)}this.compile=function(U,J,ce=null){ce===null&&(ce=U),y=Ue.get(ce),y.init(J),w.push(y),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(y.pushLight(ee),ee.castShadow&&y.pushShadow(ee))}),U!==ce&&U.traverseVisible(function(ee){ee.isLight&&ee.layers.test(J.layers)&&(y.pushLight(ee),ee.castShadow&&y.pushShadow(ee))}),y.setupLights();const ue=new Set;return U.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const we=ee.material;if(we)if(Array.isArray(we))for(let Le=0;Le<we.length;Le++){const Ie=we[Le];Dt(Ie,ce,ee),ue.add(Ie)}else Dt(we,ce,ee),ue.add(we)}),y=w.pop(),ue},this.compileAsync=function(U,J,ce=null){const ue=this.compile(U,J,ce);return new Promise(ee=>{function we(){if(ue.forEach(function(Le){Qe.get(Le).currentProgram.isReady()&&ue.delete(Le)}),ue.size===0){ee(U);return}setTimeout(we,10)}pt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ti=null;function Mn(U){ti&&ti(U)}function dn(){Kn.stop()}function Un(){Kn.start()}const Kn=new Ax;Kn.setAnimationLoop(Mn),typeof self<"u"&&Kn.setContext(self),this.setAnimationLoop=function(U){ti=U,Ae.setAnimationLoop(U),U===null?Kn.stop():Kn.start()},Ae.addEventListener("sessionstart",dn),Ae.addEventListener("sessionend",Un),this.render=function(U,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(J),J=Ae.getCamera()),U.isScene===!0&&U.onBeforeRender(A,U,J,H),y=Ue.get(U,w.length),y.init(J),w.push(y),_e.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),X.setFromProjectionMatrix(_e),pe=this.localClippingEnabled,le=We.init(this.clippingPlanes,pe),S=Be.get(U,b.length),S.init(),b.push(S),Ae.enabled===!0&&Ae.isPresenting===!0){const we=A.xr.getDepthSensingMesh();we!==null&&ys(we,J,-1/0,A.sortObjects)}ys(U,J,0,A.sortObjects),S.finish(),A.sortObjects===!0&&S.sort(fe,N),at=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,at&&be.addToRenderList(S,U),this.info.render.frame++,le===!0&&We.beginShadows();const ce=y.state.shadowsArray;Ye.render(ce,U,J),le===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=S.opaque,ee=S.transmissive;if(y.setupLights(),J.isArrayCamera){const we=J.cameras;if(ee.length>0)for(let Le=0,Ie=we.length;Le<Ie;Le++){const He=we[Le];Wl(ue,ee,U,He)}at&&be.render(U);for(let Le=0,Ie=we.length;Le<Ie;Le++){const He=we[Le];kl(S,U,He,He.viewport)}}else ee.length>0&&Wl(ue,ee,U,J),at&&be.render(U),kl(S,U,J);H!==null&&B===0&&(ot.updateMultisampleRenderTarget(H),ot.updateRenderTargetMipmap(H)),U.isScene===!0&&U.onAfterRender(A,U,J),ut.resetDefaultState(),C=-1,R=null,w.pop(),w.length>0?(y=w[w.length-1],le===!0&&We.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function ys(U,J,ce,ue){if(U.visible===!1)return;if(U.layers.test(J.layers)){if(U.isGroup)ce=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(J);else if(U.isLight)y.pushLight(U),U.castShadow&&y.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||X.intersectsSprite(U)){ue&&Ce.setFromMatrixPosition(U.matrixWorld).applyMatrix4(_e);const Le=ye.update(U),Ie=U.material;Ie.visible&&S.push(U,Le,Ie,ce,Ce.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||X.intersectsObject(U))){const Le=ye.update(U),Ie=U.material;if(ue&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ce.copy(U.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ce.copy(Le.boundingSphere.center)),Ce.applyMatrix4(U.matrixWorld).applyMatrix4(_e)),Array.isArray(Ie)){const He=Le.groups;for(let rt=0,tt=He.length;rt<tt;rt++){const je=He[rt],_t=Ie[je.materialIndex];_t&&_t.visible&&S.push(U,Le,_t,ce,Ce.z,je)}}else Ie.visible&&S.push(U,Le,Ie,ce,Ce.z,null)}}const we=U.children;for(let Le=0,Ie=we.length;Le<Ie;Le++)ys(we[Le],J,ce,ue)}function kl(U,J,ce,ue){const ee=U.opaque,we=U.transmissive,Le=U.transparent;y.setupLightsView(ce),le===!0&&We.setGlobalState(A.clippingPlanes,ce),ue&&Ve.viewport(V.copy(ue)),ee.length>0&&xs(ee,J,ce),we.length>0&&xs(we,J,ce),Le.length>0&&xs(Le,J,ce),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Wl(U,J,ce,ue){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ue.id]===void 0&&(y.state.transmissionRenderTarget[ue.id]=new Zs(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?zl:Ki,minFilter:ba,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const we=y.state.transmissionRenderTarget[ue.id],Le=ue.viewport||V;we.setSize(Le.z*A.transmissionResolutionScale,Le.w*A.transmissionResolutionScale);const Ie=A.getRenderTarget(),He=A.getActiveCubeFace(),rt=A.getActiveMipmapLevel();A.setRenderTarget(we),A.getClearColor(he),te=A.getClearAlpha(),te<1&&A.setClearColor(16777215,.5),A.clear(),at&&be.render(ce);const tt=A.toneMapping;A.toneMapping=_s;const je=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),y.setupLightsView(ue),le===!0&&We.setGlobalState(A.clippingPlanes,ue),xs(U,ce,ue),ot.updateMultisampleRenderTarget(we),ot.updateRenderTargetMipmap(we),pt.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let Pt=0,Qt=J.length;Pt<Qt;Pt++){const xt=J[Pt],It=xt.object,$e=xt.geometry,Gt=xt.material,At=xt.group;if(Gt.side===ei&&It.layers.test(ue.layers)){const En=Gt.side;Gt.side=qn,Gt.needsUpdate=!0,Oa(It,ce,ue,$e,Gt,At),Gt.side=En,Gt.needsUpdate=!0,_t=!0}}_t===!0&&(ot.updateMultisampleRenderTarget(we),ot.updateRenderTargetMipmap(we))}A.setRenderTarget(Ie,He,rt),A.setClearColor(he,te),je!==void 0&&(ue.viewport=je),A.toneMapping=tt}function xs(U,J,ce){const ue=J.isScene===!0?J.overrideMaterial:null;for(let ee=0,we=U.length;ee<we;ee++){const Le=U[ee],Ie=Le.object,He=Le.geometry,rt=Le.group;let tt=Le.material;tt.allowOverride===!0&&ue!==null&&(tt=ue),Ie.layers.test(ce.layers)&&Oa(Ie,J,ce,He,tt,rt)}}function Oa(U,J,ce,ue,ee,we){U.onBeforeRender(A,J,ce,ue,ee,we),U.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),ee.onBeforeRender(A,J,ce,ue,U,we),ee.transparent===!0&&ee.side===ei&&ee.forceSinglePass===!1?(ee.side=qn,ee.needsUpdate=!0,A.renderBufferDirect(ce,J,ue,ee,U,we),ee.side=La,ee.needsUpdate=!0,A.renderBufferDirect(ce,J,ue,ee,U,we),ee.side=ei):A.renderBufferDirect(ce,J,ue,ee,U,we),U.onAfterRender(A,J,ce,ue,ee,we)}function Pa(U,J,ce){J.isScene!==!0&&(J=Xe);const ue=Qe.get(U),ee=y.state.lights,we=y.state.shadowsArray,Le=ee.state.version,Ie=Me.getParameters(U,ee.state,we,J,ce),He=Me.getProgramCacheKey(Ie);let rt=ue.programs;ue.environment=U.isMeshStandardMaterial?J.environment:null,ue.fog=J.fog,ue.envMap=(U.isMeshStandardMaterial?z:sn).get(U.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&U.envMap===null?J.environmentRotation:U.envMapRotation,rt===void 0&&(U.addEventListener("dispose",Ge),rt=new Map,ue.programs=rt);let tt=rt.get(He);if(tt!==void 0){if(ue.currentProgram===tt&&ue.lightsStateVersion===Le)return $i(U,Ie),tt}else Ie.uniforms=Me.getUniforms(U),U.onBeforeCompile(Ie,A),tt=Me.acquireProgram(Ie,He),rt.set(He,tt),ue.uniforms=Ie.uniforms;const je=ue.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(je.clippingPlanes=We.uniform),$i(U,Ie),ue.needsLights=ln(U),ue.lightsStateVersion=Le,ue.needsLights&&(je.ambientLightColor.value=ee.state.ambient,je.lightProbe.value=ee.state.probe,je.directionalLights.value=ee.state.directional,je.directionalLightShadows.value=ee.state.directionalShadow,je.spotLights.value=ee.state.spot,je.spotLightShadows.value=ee.state.spotShadow,je.rectAreaLights.value=ee.state.rectArea,je.ltc_1.value=ee.state.rectAreaLTC1,je.ltc_2.value=ee.state.rectAreaLTC2,je.pointLights.value=ee.state.point,je.pointLightShadows.value=ee.state.pointShadow,je.hemisphereLights.value=ee.state.hemi,je.directionalShadowMap.value=ee.state.directionalShadowMap,je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,je.spotShadowMap.value=ee.state.spotShadowMap,je.spotLightMatrix.value=ee.state.spotLightMatrix,je.spotLightMap.value=ee.state.spotLightMap,je.pointShadowMap.value=ee.state.pointShadowMap,je.pointShadowMatrix.value=ee.state.pointShadowMatrix),ue.currentProgram=tt,ue.uniformsList=null,tt}function Ji(U){if(U.uniformsList===null){const J=U.currentProgram.getUniforms();U.uniformsList=Hu.seqWithValue(J.seq,U.uniforms)}return U.uniformsList}function $i(U,J){const ce=Qe.get(U);ce.outputColorSpace=J.outputColorSpace,ce.batching=J.batching,ce.batchingColor=J.batchingColor,ce.instancing=J.instancing,ce.instancingColor=J.instancingColor,ce.instancingMorph=J.instancingMorph,ce.skinning=J.skinning,ce.morphTargets=J.morphTargets,ce.morphNormals=J.morphNormals,ce.morphColors=J.morphColors,ce.morphTargetsCount=J.morphTargetsCount,ce.numClippingPlanes=J.numClippingPlanes,ce.numIntersection=J.numClipIntersection,ce.vertexAlphas=J.vertexAlphas,ce.vertexTangents=J.vertexTangents,ce.toneMapping=J.toneMapping}function Ss(U,J,ce,ue,ee){J.isScene!==!0&&(J=Xe),ot.resetTextureUnits();const we=J.fog,Le=ue.isMeshStandardMaterial?J.environment:null,Ie=H===null?A.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:jn,He=(ue.isMeshStandardMaterial?z:sn).get(ue.envMap||Le),rt=ue.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,tt=!!ce.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),je=!!ce.morphAttributes.position,_t=!!ce.morphAttributes.normal,Pt=!!ce.morphAttributes.color;let Qt=_s;ue.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Qt=A.toneMapping);const xt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,It=xt!==void 0?xt.length:0,$e=Qe.get(ue),Gt=y.state.lights;if(le===!0&&(pe===!0||U!==R)){const Tn=U===R&&ue.id===C;We.setState(ue,U,Tn)}let At=!1;ue.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Gt.state.version||$e.outputColorSpace!==Ie||ee.isBatchedMesh&&$e.batching===!1||!ee.isBatchedMesh&&$e.batching===!0||ee.isBatchedMesh&&$e.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&$e.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&$e.instancing===!1||!ee.isInstancedMesh&&$e.instancing===!0||ee.isSkinnedMesh&&$e.skinning===!1||!ee.isSkinnedMesh&&$e.skinning===!0||ee.isInstancedMesh&&$e.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&$e.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&$e.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&$e.instancingMorph===!1&&ee.morphTexture!==null||$e.envMap!==He||ue.fog===!0&&$e.fog!==we||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==We.numPlanes||$e.numIntersection!==We.numIntersection)||$e.vertexAlphas!==rt||$e.vertexTangents!==tt||$e.morphTargets!==je||$e.morphNormals!==_t||$e.morphColors!==Pt||$e.toneMapping!==Qt||$e.morphTargetsCount!==It)&&(At=!0):(At=!0,$e.__version=ue.version);let En=$e.currentProgram;At===!0&&(En=Pa(ue,J,ee));let Ba=!1,Kt=!1,ta=!1;const Yt=En.getUniforms(),Bn=$e.uniforms;if(Ve.useProgram(En.program)&&(Ba=!0,Kt=!0,ta=!0),ue.id!==C&&(C=ue.id,Kt=!0),Ba||R!==U){Ve.buffers.depth.getReversed()?(xe.copy(U.projectionMatrix),Eb(xe),Tb(xe),Yt.setValue(W,"projectionMatrix",xe)):Yt.setValue(W,"projectionMatrix",U.projectionMatrix),Yt.setValue(W,"viewMatrix",U.matrixWorldInverse);const Nn=Yt.map.cameraPosition;Nn!==void 0&&Nn.setValue(W,Ne.setFromMatrixPosition(U.matrixWorld)),ft.logarithmicDepthBuffer&&Yt.setValue(W,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Yt.setValue(W,"isOrthographic",U.isOrthographicCamera===!0),R!==U&&(R=U,Kt=!0,ta=!0)}if(ee.isSkinnedMesh){Yt.setOptional(W,ee,"bindMatrix"),Yt.setOptional(W,ee,"bindMatrixInverse");const Tn=ee.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Yt.setValue(W,"boneTexture",Tn.boneTexture,ot))}ee.isBatchedMesh&&(Yt.setOptional(W,ee,"batchingTexture"),Yt.setValue(W,"batchingTexture",ee._matricesTexture,ot),Yt.setOptional(W,ee,"batchingIdTexture"),Yt.setValue(W,"batchingIdTexture",ee._indirectTexture,ot),Yt.setOptional(W,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Yt.setValue(W,"batchingColorTexture",ee._colorsTexture,ot));const pn=ce.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ze.update(ee,ce,En),(Kt||$e.receiveShadow!==ee.receiveShadow)&&($e.receiveShadow=ee.receiveShadow,Yt.setValue(W,"receiveShadow",ee.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(Bn.envMap.value=He,Bn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&J.environment!==null&&(Bn.envMapIntensity.value=J.environmentIntensity),Kt&&(Yt.setValue(W,"toneMappingExposure",A.toneMappingExposure),$e.needsLights&&Ia(Bn,ta),we&&ue.fog===!0&&ge.refreshFogUniforms(Bn,we),ge.refreshMaterialUniforms(Bn,ue,k,F,y.state.transmissionRenderTarget[U.id]),Hu.upload(W,Ji($e),Bn,ot)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Hu.upload(W,Ji($e),Bn,ot),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Yt.setValue(W,"center",ee.center),Yt.setValue(W,"modelViewMatrix",ee.modelViewMatrix),Yt.setValue(W,"normalMatrix",ee.normalMatrix),Yt.setValue(W,"modelMatrix",ee.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const Tn=ue.uniformsGroups;for(let Nn=0,Fi=Tn.length;Nn<Fi;Nn++){const na=Tn[Nn];j.update(na,En),j.bind(na,En)}}return En}function Ia(U,J){U.ambientLightColor.needsUpdate=J,U.lightProbe.needsUpdate=J,U.directionalLights.needsUpdate=J,U.directionalLightShadows.needsUpdate=J,U.pointLights.needsUpdate=J,U.pointLightShadows.needsUpdate=J,U.spotLights.needsUpdate=J,U.spotLightShadows.needsUpdate=J,U.rectAreaLights.needsUpdate=J,U.hemisphereLights.needsUpdate=J}function ln(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(U,J,ce){const ue=Qe.get(U);ue.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Qe.get(U.texture).__webglTexture=J,Qe.get(U.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:ce,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,J){const ce=Qe.get(U);ce.__webglFramebuffer=J,ce.__useDefaultFramebuffer=J===void 0};const Xl=W.createFramebuffer();this.setRenderTarget=function(U,J=0,ce=0){H=U,I=J,B=ce;let ue=!0,ee=null,we=!1,Le=!1;if(U){const He=Qe.get(U);if(He.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(W.FRAMEBUFFER,null),ue=!1;else if(He.__webglFramebuffer===void 0)ot.setupRenderTarget(U);else if(He.__hasExternalTextures)ot.rebindTextures(U,Qe.get(U.texture).__webglTexture,Qe.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const je=U.depthTexture;if(He.__boundDepthTexture!==je){if(je!==null&&Qe.has(je)&&(U.width!==je.image.width||U.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(U)}}const rt=U.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Le=!0);const tt=Qe.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(tt[J])?ee=tt[J][ce]:ee=tt[J],we=!0):U.samples>0&&ot.useMultisampledRTT(U)===!1?ee=Qe.get(U).__webglMultisampledFramebuffer:Array.isArray(tt)?ee=tt[ce]:ee=tt,V.copy(U.viewport),$.copy(U.scissor),ie=U.scissorTest}else V.copy(K).multiplyScalar(k).floor(),$.copy(Z).multiplyScalar(k).floor(),ie=de;if(ce!==0&&(ee=Xl),Ve.bindFramebuffer(W.FRAMEBUFFER,ee)&&ue&&Ve.drawBuffers(U,ee),Ve.viewport(V),Ve.scissor($),Ve.setScissorTest(ie),we){const He=Qe.get(U.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+J,He.__webglTexture,ce)}else if(Le){const He=Qe.get(U.texture),rt=J;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,He.__webglTexture,ce,rt)}else if(U!==null&&ce!==0){const He=Qe.get(U.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,He.__webglTexture,ce)}C=-1},this.readRenderTargetPixels=function(U,J,ce,ue,ee,we,Le,Ie=0){if(!(U&&U.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Qe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Le!==void 0&&(He=He[Le]),He){Ve.bindFramebuffer(W.FRAMEBUFFER,He);try{const rt=U.textures[Ie],tt=rt.format,je=rt.type;if(!ft.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=U.width-ue&&ce>=0&&ce<=U.height-ee&&(U.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ie),W.readPixels(J,ce,ue,ee,De.convert(tt),De.convert(je),we))}finally{const rt=H!==null?Qe.get(H).__webglFramebuffer:null;Ve.bindFramebuffer(W.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(U,J,ce,ue,ee,we,Le,Ie=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Qe.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Le!==void 0&&(He=He[Le]),He)if(J>=0&&J<=U.width-ue&&ce>=0&&ce<=U.height-ee){Ve.bindFramebuffer(W.FRAMEBUFFER,He);const rt=U.textures[Ie],tt=rt.format,je=rt.type;if(!ft.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,_t),W.bufferData(W.PIXEL_PACK_BUFFER,we.byteLength,W.STREAM_READ),U.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ie),W.readPixels(J,ce,ue,ee,De.convert(tt),De.convert(je),0);const Pt=H!==null?Qe.get(H).__webglFramebuffer:null;Ve.bindFramebuffer(W.FRAMEBUFFER,Pt);const Qt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Mb(W,Qt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,_t),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,we),W.deleteBuffer(_t),W.deleteSync(Qt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,J=null,ce=0){const ue=Math.pow(2,-ce),ee=Math.floor(U.image.width*ue),we=Math.floor(U.image.height*ue),Le=J!==null?J.x:0,Ie=J!==null?J.y:0;ot.setTexture2D(U,0),W.copyTexSubImage2D(W.TEXTURE_2D,ce,0,0,Le,Ie,ee,we),Ve.unbindTexture()};const ql=W.createFramebuffer(),ea=W.createFramebuffer();this.copyTextureToTexture=function(U,J,ce=null,ue=null,ee=0,we=null){we===null&&(ee!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=ee,ee=0):we=0);let Le,Ie,He,rt,tt,je,_t,Pt,Qt;const xt=U.isCompressedTexture?U.mipmaps[we]:U.image;if(ce!==null)Le=ce.max.x-ce.min.x,Ie=ce.max.y-ce.min.y,He=ce.isBox3?ce.max.z-ce.min.z:1,rt=ce.min.x,tt=ce.min.y,je=ce.isBox3?ce.min.z:0;else{const pn=Math.pow(2,-ee);Le=Math.floor(xt.width*pn),Ie=Math.floor(xt.height*pn),U.isDataArrayTexture?He=xt.depth:U.isData3DTexture?He=Math.floor(xt.depth*pn):He=1,rt=0,tt=0,je=0}ue!==null?(_t=ue.x,Pt=ue.y,Qt=ue.z):(_t=0,Pt=0,Qt=0);const It=De.convert(J.format),$e=De.convert(J.type);let Gt;J.isData3DTexture?(ot.setTexture3D(J,0),Gt=W.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ot.setTexture2DArray(J,0),Gt=W.TEXTURE_2D_ARRAY):(ot.setTexture2D(J,0),Gt=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);const At=W.getParameter(W.UNPACK_ROW_LENGTH),En=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Ba=W.getParameter(W.UNPACK_SKIP_PIXELS),Kt=W.getParameter(W.UNPACK_SKIP_ROWS),ta=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,xt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,xt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,rt),W.pixelStorei(W.UNPACK_SKIP_ROWS,tt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,je);const Yt=U.isDataArrayTexture||U.isData3DTexture,Bn=J.isDataArrayTexture||J.isData3DTexture;if(U.isDepthTexture){const pn=Qe.get(U),Tn=Qe.get(J),Nn=Qe.get(pn.__renderTarget),Fi=Qe.get(Tn.__renderTarget);Ve.bindFramebuffer(W.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Ve.bindFramebuffer(W.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let na=0;na<He;na++)Yt&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.get(U).__webglTexture,ee,je+na),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Qe.get(J).__webglTexture,we,Qt+na)),W.blitFramebuffer(rt,tt,Le,Ie,_t,Pt,Le,Ie,W.DEPTH_BUFFER_BIT,W.NEAREST);Ve.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ee!==0||U.isRenderTargetTexture||Qe.has(U)){const pn=Qe.get(U),Tn=Qe.get(J);Ve.bindFramebuffer(W.READ_FRAMEBUFFER,ql),Ve.bindFramebuffer(W.DRAW_FRAMEBUFFER,ea);for(let Nn=0;Nn<He;Nn++)Yt?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,pn.__webglTexture,ee,je+Nn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,pn.__webglTexture,ee),Bn?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Tn.__webglTexture,we,Qt+Nn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Tn.__webglTexture,we),ee!==0?W.blitFramebuffer(rt,tt,Le,Ie,_t,Pt,Le,Ie,W.COLOR_BUFFER_BIT,W.NEAREST):Bn?W.copyTexSubImage3D(Gt,we,_t,Pt,Qt+Nn,rt,tt,Le,Ie):W.copyTexSubImage2D(Gt,we,_t,Pt,rt,tt,Le,Ie);Ve.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Bn?U.isDataTexture||U.isData3DTexture?W.texSubImage3D(Gt,we,_t,Pt,Qt,Le,Ie,He,It,$e,xt.data):J.isCompressedArrayTexture?W.compressedTexSubImage3D(Gt,we,_t,Pt,Qt,Le,Ie,He,It,xt.data):W.texSubImage3D(Gt,we,_t,Pt,Qt,Le,Ie,He,It,$e,xt):U.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,we,_t,Pt,Le,Ie,It,$e,xt.data):U.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,we,_t,Pt,xt.width,xt.height,It,xt.data):W.texSubImage2D(W.TEXTURE_2D,we,_t,Pt,Le,Ie,It,$e,xt);W.pixelStorei(W.UNPACK_ROW_LENGTH,At),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,En),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ba),W.pixelStorei(W.UNPACK_SKIP_ROWS,Kt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ta),we===0&&J.generateMipmaps&&W.generateMipmap(Gt),Ve.unbindTexture()},this.copyTextureToTexture3D=function(U,J,ce=null,ue=null,ee=0){return $r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(U,J,ce,ue,ee)},this.initRenderTarget=function(U){Qe.get(U).__webglFramebuffer===void 0&&ot.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?ot.setTextureCube(U,0):U.isData3DTexture?ot.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?ot.setTexture2DArray(U,0):ot.setTexture2D(U,0),Ve.unbindTexture()},this.resetState=function(){I=0,B=0,H=null,Ve.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function E2(){const r=me.useRef(null),e=me.useRef(),t=me.useRef(),a=me.useRef(),s=me.useRef(),l=me.useRef(),u=me.useRef(null),f=me.useRef([]),d=me.useRef(Date.now()),h=[],m=80,_=new Mi(.06,8,8),v=new Yi({color:16775514,transparent:!0,opacity:.85});let x=[];return me.useEffect(()=>{const M=new tf;e.current=M;const T=40,S=40;new Gl().load("/src/assets/black.jpg",X=>{const le=T*3,pe=T*(window.innerHeight/window.innerWidth)*3,xe=new vs(le,pe),_e=new Yi({map:X,side:ei,opacity:1,transparent:!0,color:7507102}),Ne=new Ct(xe,_e);Ne.position.set(0,pe/2-P*18,-S/2-2),M.add(Ne)});const b=new Dn(60,window.innerWidth/window.innerHeight,.1,100);b.position.set(0,1.5,23),t.current=b;const w=new sf({antialias:!0});w.setPixelRatio(window.devicePixelRatio),w.setSize(window.innerWidth,window.innerHeight),a.current=w,r.current&&!r.current.contains(w.domElement)&&r.current.appendChild(w.domElement);const A=new Tx(16775090,1.2);A.position.copy(b.position),A.target.position.set(0,0,0),M.add(A),M.add(A.target);const P=.7,I=.05,B=12,H=20,C=new Ku(I,I,P,B,H,!1),R=C.attributes.position;for(let X=0;X<R.count;X++){const le=R.getY(X);if(le>P/2-I*2){const pe=(le-(P/2-I*2))/(I*2);R.setY(X,le+I*.5*Math.sin(Math.PI*pe));const xe=R.getX(X),_e=R.getZ(X);if(Math.sqrt(xe*xe+_e*_e)>0){const Ce=1-.5*pe;R.setX(X,xe*Ce),R.setZ(X,_e*Ce)}}}C.computeVertexNormals();const V=2,$=new hi({uniforms:{time:{value:0},mouseOver:{value:0},mouseX:{value:0},mouseY:{value:0},lightBands:{value:Array.from({length:V},()=>new Ut(0,0,0,0))},lightBandsCount:{value:0}},vertexShader:`
        uniform float time;
        uniform float mouseOver;
        uniform float mouseX;
        uniform float mouseY;
        attribute float swayPhase;
        attribute float swayAmp;
        varying float vY;
        varying float vMouseStrength;
        varying float vWorldZ;
        varying float vWorldX;
        uniform int lightBandsCount;
        uniform vec4 lightBands[${V}];
        void main() {
          float bladeHeight = 1.2;
          float yNorm = (position.y + bladeHeight / 2.0) / bladeHeight;
          float taper = pow(smoothstep(0.0, 1.0, yNorm), 1.5);

          float baseWave = sin(time * 2.0 + swayPhase + 0.9) * 0.28;
          float gust = sin(0.5 * position.x + 0.35 * position.z + time * 0.9
            + 2.0 * sin(time * 0.25 + swayPhase*4.0))
            * (0.15 + 0.26 * smoothstep(0.0, 1.0, fract(time*0.08 + swayPhase)));
          float wiggle = sin(time * 8.0 + swayPhase * 16.2) * 0.015;

          float idle = (baseWave + gust + wiggle) * taper * swayAmp;

          float fallback = 0.2;
          float mouseStrength = 0.0;
          float interaction = fallback;
          if (mouseOver > 0.5) {
            vec4 worldPos = modelMatrix * vec4(0.0, bladeHeight / 2.0, 0.0, 1.0);
            vec4 screenPos = projectionMatrix * viewMatrix * worldPos;
            vec2 normScreen = screenPos.xy / screenPos.w * 0.5 + 0.5;
            mouseStrength = 1.0 - clamp(distance(normScreen, vec2(mouseX * 0.5 + 0.5, mouseY * 0.5 + 0.5)) / 0.12, 0.0, 1.0);
            interaction = mix(fallback, mouseStrength, smoothstep(0.0, 1.0, mouseStrength));
          }

          float sway = idle * interaction;
          vec3 pos = position;
          pos.x += sway;

          vY = yNorm;
          vMouseStrength = mouseStrength;
          
          vec4 worldPosBeforeSway = modelMatrix * vec4(pos, 1.0);
          float extraSway = 0.0;
          for (int i = 0; i < ${V}; i++) {
            if (i >= lightBandsCount) break;
            float bandC = lightBands[i].x;
            float bandW = lightBands[i].y;
            float bandStr = lightBands[i].z;
            float d = abs(worldPosBeforeSway.x - worldPosBeforeSway.z - bandC) / 1.41421356;
            if (d < bandW * 0.5) {
              float local = 1.0 - d / (bandW * 0.5);
              // Modulate amplitude for a visually clear, smooth effect:
              extraSway += local * bandStr * 0.45; // Try 0.45 or higher for more motion
            }
          }
          // Sway both x, z in the (1, 1) direction
          pos.x += extraSway / 1.41421356;
          pos.z -= extraSway / 1.41421356;

          vec4 worldPosZ = modelMatrix * vec4(pos, 1.0);
          vWorldZ = worldPosZ.z;
          vWorldX = worldPosZ.x;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,fragmentShader:`
        varying float vY;
        varying float vMouseStrength;
        varying float vWorldZ;
        varying float vWorldX;
        uniform int lightBandsCount;
        uniform vec4 lightBands[${V}];
        void main() {
          vec3 rootColor = vec3(0.07, 0.22, 0.07);
          vec3 midColor = vec3(0.22, 0.55, 0.16);
          vec3 tipColor = vec3(0.45, 1.0, 0.25);
          vec3 baseColor = mix(rootColor, midColor, smoothstep(0.0, 0.6, vY));
          baseColor = mix(baseColor, tipColor, smoothstep(0.6, 1.0, vY));
          float glow = smoothstep(0.85, 1.0, vY) * 0.25;
          vec3 grassColor = baseColor + vec3(glow);
          float highlightStrength = smoothstep(0.2, 0.9, vMouseStrength) * 1.0;
          vec3 brightGreen = vec3(0.7, 1.0, 0.4);
          float zMin = -20.0;
          float zMax = 20.0;
          float zNorm = clamp((vWorldZ - zMin) / (zMax - zMin), 0.0, 1.0);

          //take away backside light
          float lightFactor = mix(1.7, 0.08, zNorm);
          vec3 litGrass = grassColor * lightFactor;
          float specular = pow(1.0 - zNorm, 8.0) * 0.18;
          litGrass += vec3(specular, specular * 0.9, specular * 0.5);
          litGrass = clamp(litGrass, vec3(0.0), vec3(1.0));
          vec3 color = mix(litGrass, brightGreen, highlightStrength);

          //vec3 color = mix(grassColor, brightGreen, highlightStrength);

          // Diagonal band logic:
          float lightBoost = 0.0;
          float extraSway = 0.0;
          for (int i = 0; i < ${V}; i++) {
            if (i >= lightBandsCount) break;
            float bandC = lightBands[i].x;    // current x+z diagonal center
            float bandW = lightBands[i].y;    // band width
            float bandStr = lightBands[i].z;  // strength
            // Distance from this fragment to the band's diagonal (X+Z=c)
            float d = abs(vWorldX - vWorldZ - bandC) / 1.41421356; // sqrt(2.0)
            if (d < bandW * 0.5) {
              float local = 1.0 - d / (bandW * 0.5);
              lightBoost += local * bandStr;
              
            } 
          }
          color = mix(color, brightGreen, clamp(lightBoost, 0.0, 1.0));


          gl_FragColor = vec4(color, 1.0);
        }
      `,side:ei,transparent:!1}),ie=new Ct(C,$);ie.position.set(0,P/2,0),M.add(ie);const he=11e3,te=[];for(let X=0;X<he;X++){const le=(Math.random()-.5)*T,pe=(Math.random()-.5)*T,xe=P*(.8+Math.random()*.6),_e=new Ku(I,I,xe,B,H,!1),Ne=_e.attributes.position;for(let Ot=0;Ot<Ne.count;Ot++){const pt=Ne.getY(Ot);if(pt>xe/2-I*2){const ft=(pt-(xe/2-I*2))/(I*2);Ne.setY(Ot,pt+I*.5*Math.sin(Math.PI*ft));const Ve=Ne.getX(Ot),dt=Ne.getZ(Ot);if(Math.sqrt(Ve*Ve+dt*dt)>0){const ot=1-.5*ft;Ne.setX(Ot,Ve*ot),Ne.setZ(Ot,dt*ot)}}}_e.computeVertexNormals();const Ce=0,Xe=1,at=new Float32Array(_e.attributes.position.count).fill(Ce),nt=new Float32Array(_e.attributes.position.count).fill(Xe);_e.setAttribute("swayPhase",new Ln(at,1)),_e.setAttribute("swayAmp",new Ln(nt,1));const W=new Ct(_e,$);W.position.set(le,xe/2,pe),M.add(W),te.push(W)}s.current=te[0];const O=new vs(T,S),F=new rA({color:210449,side:ei}),k=new Ct(O,F);k.rotation.x=-Math.PI/2,k.position.set(0,0,0),M.add(k);const fe=new bx;let N=!1;const K=X=>{if(!w.domElement)return;const le=w.domElement.getBoundingClientRect(),pe=(X.clientX-le.left)/le.width*2-1,xe=-((X.clientY-le.top)/le.height)*2+1,_e=new et(pe,xe);fe.setFromCamera(_e,b);let Ne=!1,Ce=[];for(const Xe of te)if(fe.intersectObject(Xe).length>0&&(Ne=!0,Math.random()<.2)){const nt=Xe.position.clone();nt.y+=Xe.geometry.parameters.height/2,nt.x+=Math.random()*1.6-1,nt.z+=Math.random()*.6-.3,Ce.push(nt)}Ne&&(u.current=Date.now()),N=Ne,$.uniforms.mouseOver.value=N?1:0,$.uniforms.mouseX.value=pe,$.uniforms.mouseY.value=xe,Ce.length>0&&(x=Ce.slice(0,8)),Ce.forEach(Xe=>{if(h.length<m){const at=new Ct(_,v.clone());at.position.copy(Xe),at.material.opacity=1,at.userData={age:0},M.add(at),h.push(at)}})};w.domElement.addEventListener("pointermove",K);function Z(){l.current=requestAnimationFrame(Z),$.uniforms.time.value=performance.now()*.001;const X=Date.now(),le=T/2+S/2,pe=-T/2-S/2,xe=Math.random()*2.5+1,_e=(Math.random()-.5)*8;X-d.current>Math.random()*2e3+12e3&&f.current.length+1<=V&&(f.current.push({c:le+xe+_e,width:xe,speed:Math.random()*.05+.3,strength:Math.random()*.2+.1}),f.current.x>T/2+4+T*Math.random()&&f.current.shift(),d.current=X);for(let Ce of f.current)Ce.c-=Ce.speed;for(;f.current.length>0&&f.current[0].c<pe-xe;)f.current.shift();for(let Ce=0;Ce<V;Ce++)if(f.current[Ce]){const Xe=f.current[Ce];$.uniforms.lightBands.value[Ce].set(Xe.c,Xe.width,Xe.strength,0)}else $.uniforms.lightBands.value[Ce].set(0,0,0,0);$.uniforms.lightBandsCount.value=f.current.length;for(let Ce=h.length-1;Ce>=0;Ce--){const Xe=h[Ce];Xe.position.y+=.03+Math.random()*.01,Xe.material.opacity*=.97,Xe.userData.age+=1,(Xe.material.opacity<.05||Xe.userData.age>80)&&(M.remove(Xe),h.splice(Ce,1))}if(u.current>0&&X-u.current<2e3&&x.length>0&&h.length<m&&Math.random()<.18){const Ce=Math.floor(Math.random()*x.length),Xe=x[Ce];if(h.length<m){const at=new Ct(_,v.clone());at.position.copy(Xe),at.material.opacity=1,at.userData={age:0},M.add(at),h.push(at)}}w.render(M,b)}Z();function de(){!a.current||!t.current||(t.current.aspect=window.innerWidth/window.innerHeight,t.current.updateProjectionMatrix(),a.current.setSize(window.innerWidth,window.innerHeight))}return window.addEventListener("resize",de),()=>{cancelAnimationFrame(l.current),window.removeEventListener("resize",de),w.domElement.removeEventListener("pointermove",K),a.current&&(a.current.dispose(),r.current&&r.current.removeChild(a.current.domElement)),e.current=null,t.current=null,a.current=null,s.current=null}},[]),Cn.jsx("div",{ref:r,style:{width:"100vw",height:"100vh"}})}const T2=`precision highp float;

uniform float uTime;

uniform float uWavesAmplitude;
uniform float uWavesSpeed;
uniform float uWavesFrequency;
uniform float uWavesPersistence;
uniform float uWavesLacunarity;
uniform float uWavesIterations;

varying vec3 vNormal;
varying vec3 vWorldPosition;

//	Simplex 3D Noise 
//	by Ian McEwan, Stefan Gustavson (https://github.com/stegu/webgl-noise)
//
vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

// Simplex 2D noise
//
vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

// Helper function to calculate elevation at any point
float getElevation(float x, float z) {
  vec2 pos = vec2(x, z);

  float elevation = 0.0;
  float amplitude = 1.0;
  float frequency = uWavesFrequency;
  vec2 p = pos.xy;

  for(float i = 0.0; i < uWavesIterations; i++) {
    float noiseValue = snoise(p * frequency + uTime * uWavesSpeed);
    elevation += amplitude * noiseValue;
    amplitude *= uWavesPersistence;
    frequency *= uWavesLacunarity;
  }

  elevation *= uWavesAmplitude;

  return elevation;
}

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = getElevation(modelPosition.x, modelPosition.z);
  modelPosition.y += elevation;

  // Calculate normal using partial derivatives
  float eps = 0.001;
  vec3 tangent = normalize(vec3(eps, getElevation(modelPosition.x - eps, modelPosition.z) - elevation, 0.0));
  vec3 bitangent = normalize(vec3(0.0, getElevation(modelPosition.x, modelPosition.z - eps) - elevation, eps));
  vec3 objectNormal = normalize(cross(tangent, bitangent));

  vNormal = objectNormal;
  vWorldPosition = modelPosition.xyz;

  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}`,b2=`precision highp float;

uniform float uOpacity;

uniform vec3 uTroughColor;
uniform vec3 uSurfaceColor;
uniform vec3 uPeakColor;

uniform float uPeakThreshold;
uniform float uPeakTransition;
uniform float uTroughThreshold;
uniform float uTroughTransition;

uniform float uFresnelScale;
uniform float uFresnelPower;

varying vec3 vNormal;
varying vec3 vWorldPosition;

uniform samplerCube uEnvironmentMap;

void main() {
  // Calculate vector from camera to the vertex
  vec3 viewDirection = normalize(vWorldPosition - cameraPosition);
  vec3 reflectedDirection = reflect(viewDirection, vNormal);
  reflectedDirection.x = -reflectedDirection.x;

  // Sample environment map to get the reflected color
  vec4 reflectionColor = textureCube(uEnvironmentMap, reflectedDirection);

  // Calculate fresnel effect
  float fresnel = uFresnelScale * pow(1.0 - clamp(dot(viewDirection, vNormal), 0.0, 1.0), uFresnelPower);

  // Calculate elevation-based color
  float elevation = vWorldPosition.y;

  // Calculate transition factors using smoothstep
  float peakFactor = smoothstep(uPeakThreshold - uPeakTransition, uPeakThreshold + uPeakTransition, elevation);
  float troughFactor = smoothstep(uTroughThreshold - uTroughTransition, uTroughThreshold + uTroughTransition, elevation);

  // Mix between trough and surface colors based on trough transition
  vec3 mixedColor1 = mix(uTroughColor, uSurfaceColor, troughFactor);

  // Mix between surface and peak colors based on peak transition 
  vec3 mixedColor2 = mix(mixedColor1, uPeakColor, peakFactor);

  // Mix the final color with the reflection color
  vec3 finalColor = mix(mixedColor2, reflectionColor.rgb, fresnel);

  gl_FragColor = vec4(finalColor, uOpacity);
}
`;class A2 extends Ct{constructor(e={}){super(),this.material=new hi({vertexShader:T2,fragmentShader:b2,uniforms:{uTime:{value:0},uOpacity:{value:.8},uEnvironmentMap:{value:e.environmentMap},uWavesAmplitude:{value:.025},uWavesFrequency:{value:1.07},uWavesPersistence:{value:.3},uWavesLacunarity:{value:2.18},uWavesIterations:{value:8},uWavesSpeed:{value:.4},uTroughColor:{value:new qe("#186691")},uSurfaceColor:{value:new qe("#9bd8c0")},uPeakColor:{value:new qe("#bbd8e0")},uPeakThreshold:{value:.08},uPeakTransition:{value:.05},uTroughThreshold:{value:-.01},uTroughTransition:{value:.15},uFresnelScale:{value:.8},uFresnelPower:{value:.5}},transparent:!0,depthTest:!0,side:ei}),this.geometry=new vs(6,6,e.resolution||512,e.resolution||512),this.rotation.x=Math.PI*.5,this.position.y=0}update(e){this.material.uniforms.uTime.value=e}}const w2=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,R2=`uniform float uTime;
uniform sampler2D uTexture;
uniform vec3 uCausticsColor;
uniform float uCausticsIntensity;
uniform float uCausticsOffset;
uniform float uCausticsScale;
uniform float uCausticsSpeed;
uniform float uCausticsThickness;

varying vec2 vUv;

//	Simplex 3D Noise 
//	by Ian McEwan, Stefan Gustavson (https://github.com/stegu/webgl-noise)
//
vec4 permute(vec4 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  //  x0 = x0 - 0. + 0.0 * C 
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

// Permutations
  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));

// Gradients
// ( N*N points uniformly over a square, mapped onto an octahedron.)
  float n_ = 1.0 / 7.0; // N=7
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,N*N)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);    // mod(j,N)

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
  vec4 texColor = texture2D(uTexture, vUv);

  float caustics = 0.0;

  // Layer multiple caustic patterns
  caustics += uCausticsIntensity * (uCausticsOffset - abs(snoise(vec3(vUv.xy * uCausticsScale, uTime * uCausticsSpeed))));
  caustics += uCausticsIntensity * (uCausticsOffset - abs(snoise(vec3(vUv.yx * uCausticsScale, -uTime * uCausticsSpeed))));

  // Shape the caustics
  caustics = smoothstep(0.5 - uCausticsThickness, 0.5 + uCausticsThickness, caustics);

  vec3 finalColor = texColor.rgb + caustics * uCausticsColor;

  gl_FragColor = vec4(finalColor, 1.0);
}`;class C2 extends Ct{constructor(e={}){super(),this.material=new hi({vertexShader:w2,fragmentShader:R2,uniforms:{uTexture:{value:e.texture},uTime:{value:0},uCausticsColor:{value:new qe("#ffffff")},uCausticsIntensity:{value:.2},uCausticsScale:{value:20},uCausticsSpeed:{value:1},uCausticsThickness:{value:.4},uCausticsOffset:{value:.75}}}),this.geometry=new vs(7,7),this.rotation.x=-Math.PI*.5,this.position.y=-.12}update(e){this.material.uniforms.uTime.value=e}}function wy(r,e){if(e===jT)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===zp||e===sx){let t=r.getIndex();if(t===null){const u=[],f=r.getAttribute("position");if(f!==void 0){for(let d=0;d<f.count;d++)u.push(d);r.setIndex(u),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const a=t.count-2,s=[];if(e===zp)for(let u=1;u<=a;u++)s.push(t.getX(0)),s.push(t.getX(u)),s.push(t.getX(u+1));else for(let u=0;u<a;u++)u%2===0?(s.push(t.getX(u)),s.push(t.getX(u+1)),s.push(t.getX(u+2))):(s.push(t.getX(u+2)),s.push(t.getX(u+1)),s.push(t.getX(u)));s.length/3!==a&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const l=r.clone();return l.setIndex(s),l.clearGroups(),l}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class D2 extends $s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new P2(t)}),this.register(function(t){return new I2(t)}),this.register(function(t){return new X2(t)}),this.register(function(t){return new q2(t)}),this.register(function(t){return new Y2(t)}),this.register(function(t){return new z2(t)}),this.register(function(t){return new F2(t)}),this.register(function(t){return new H2(t)}),this.register(function(t){return new V2(t)}),this.register(function(t){return new O2(t)}),this.register(function(t){return new G2(t)}),this.register(function(t){return new B2(t)}),this.register(function(t){return new W2(t)}),this.register(function(t){return new k2(t)}),this.register(function(t){return new U2(t)}),this.register(function(t){return new j2(t)}),this.register(function(t){return new K2(t)})}load(e,t,a,s){const l=this;let u;if(this.resourcePath!=="")u=this.resourcePath;else if(this.path!==""){const h=Al.extractUrlBase(e);u=Al.resolveURL(h,this.path)}else u=Al.extractUrlBase(e);this.manager.itemStart(e);const f=function(h){s?s(h):console.error(h),l.manager.itemError(e),l.manager.itemEnd(e)},d=new Mx(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{l.parse(h,u,function(m){t(m),l.manager.itemEnd(e)},f)}catch(m){f(m)}},a,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,a,s){let l;const u={},f={},d=new TextDecoder;if(typeof e=="string")l=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===Lx){try{u[bt.KHR_BINARY_GLTF]=new Z2(e)}catch(_){s&&s(_);return}l=JSON.parse(u[bt.KHR_BINARY_GLTF].content)}else l=JSON.parse(d.decode(e));else l=e;if(l.asset===void 0||l.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new cD(l,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const _=this.pluginCallbacks[m](h);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[_.name]=_,u[_.name]=!0}if(l.extensionsUsed)for(let m=0;m<l.extensionsUsed.length;++m){const _=l.extensionsUsed[m],v=l.extensionsRequired||[];switch(_){case bt.KHR_MATERIALS_UNLIT:u[_]=new N2;break;case bt.KHR_DRACO_MESH_COMPRESSION:u[_]=new Q2(l,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:u[_]=new J2;break;case bt.KHR_MESH_QUANTIZATION:u[_]=new $2;break;default:v.indexOf(_)>=0&&f[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}h.setExtensions(u),h.setPlugins(f),h.parse(a,s)}parseAsync(e,t){const a=this;return new Promise(function(s,l){a.parse(e,t,s,l)})}}function L2(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class U2{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let a=0,s=t.length;a<s;a++){const l=t[a];l.extensions&&l.extensions[this.name]&&l.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,l.extensions[this.name].light)}}_loadLight(e){const t=this.parser,a="light:"+e;let s=t.cache.get(a);if(s)return s;const l=t.json,d=((l.extensions&&l.extensions[this.name]||{}).lights||[])[e];let h;const m=new qe(16777215);d.color!==void 0&&m.setRGB(d.color[0],d.color[1],d.color[2],jn);const _=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new Tx(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new EA(m),h.distance=_;break;case"spot":h=new SA(m),h.distance=_,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),Ta(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(a,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,a=this.parser,l=a.json.nodes[e],f=(l.extensions&&l.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(d){return a._getNodeRef(t.cache,f,d)})}}class N2{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yi}extendParams(e,t,a){const s=[];e.color=new qe(1,1,1),e.opacity=1;const l=t.pbrMetallicRoughness;if(l){if(Array.isArray(l.baseColorFactor)){const u=l.baseColorFactor;e.color.setRGB(u[0],u[1],u[2],jn),e.opacity=u[3]}l.baseColorTexture!==void 0&&s.push(a.assignTexture(e,"map",l.baseColorTexture,hn))}return Promise.all(s)}}class O2{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name].emissiveStrength;return l!==void 0&&(t.emissiveIntensity=l),Promise.resolve()}}class P2{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];if(u.clearcoatFactor!==void 0&&(t.clearcoat=u.clearcoatFactor),u.clearcoatTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatMap",u.clearcoatTexture)),u.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=u.clearcoatRoughnessFactor),u.clearcoatRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"clearcoatRoughnessMap",u.clearcoatRoughnessTexture)),u.clearcoatNormalTexture!==void 0&&(l.push(a.assignTexture(t,"clearcoatNormalMap",u.clearcoatNormalTexture)),u.clearcoatNormalTexture.scale!==void 0)){const f=u.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new et(f,f)}return Promise.all(l)}}class I2{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.dispersion=l.dispersion!==void 0?l.dispersion:0,Promise.resolve()}}class B2{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.iridescenceFactor!==void 0&&(t.iridescence=u.iridescenceFactor),u.iridescenceTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceMap",u.iridescenceTexture)),u.iridescenceIor!==void 0&&(t.iridescenceIOR=u.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),u.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=u.iridescenceThicknessMinimum),u.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=u.iridescenceThicknessMaximum),u.iridescenceThicknessTexture!==void 0&&l.push(a.assignTexture(t,"iridescenceThicknessMap",u.iridescenceThicknessTexture)),Promise.all(l)}}class z2{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const u=s.extensions[this.name];if(u.sheenColorFactor!==void 0){const f=u.sheenColorFactor;t.sheenColor.setRGB(f[0],f[1],f[2],jn)}return u.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=u.sheenRoughnessFactor),u.sheenColorTexture!==void 0&&l.push(a.assignTexture(t,"sheenColorMap",u.sheenColorTexture,hn)),u.sheenRoughnessTexture!==void 0&&l.push(a.assignTexture(t,"sheenRoughnessMap",u.sheenRoughnessTexture)),Promise.all(l)}}class F2{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.transmissionFactor!==void 0&&(t.transmission=u.transmissionFactor),u.transmissionTexture!==void 0&&l.push(a.assignTexture(t,"transmissionMap",u.transmissionTexture)),Promise.all(l)}}class H2{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.thickness=u.thicknessFactor!==void 0?u.thicknessFactor:0,u.thicknessTexture!==void 0&&l.push(a.assignTexture(t,"thicknessMap",u.thicknessTexture)),t.attenuationDistance=u.attenuationDistance||1/0;const f=u.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(f[0],f[1],f[2],jn),Promise.all(l)}}class V2{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=s.extensions[this.name];return t.ior=l.ior!==void 0?l.ior:1.5,Promise.resolve()}}class G2{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];t.specularIntensity=u.specularFactor!==void 0?u.specularFactor:1,u.specularTexture!==void 0&&l.push(a.assignTexture(t,"specularIntensityMap",u.specularTexture));const f=u.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(f[0],f[1],f[2],jn),u.specularColorTexture!==void 0&&l.push(a.assignTexture(t,"specularColorMap",u.specularColorTexture,hn)),Promise.all(l)}}class k2{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return t.bumpScale=u.bumpFactor!==void 0?u.bumpFactor:1,u.bumpTexture!==void 0&&l.push(a.assignTexture(t,"bumpMap",u.bumpTexture)),Promise.all(l)}}class W2{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const a=this.parser.json.materials[e];return!a.extensions||!a.extensions[this.name]?null:Xn}extendMaterialParams(e,t){const a=this.parser,s=a.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const l=[],u=s.extensions[this.name];return u.anisotropyStrength!==void 0&&(t.anisotropy=u.anisotropyStrength),u.anisotropyRotation!==void 0&&(t.anisotropyRotation=u.anisotropyRotation),u.anisotropyTexture!==void 0&&l.push(a.assignTexture(t,"anisotropyMap",u.anisotropyTexture)),Promise.all(l)}}class X2{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,a=t.json,s=a.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const l=s.extensions[this.name],u=t.options.ktx2Loader;if(!u){if(a.extensionsRequired&&a.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,l.source,u)}}class q2{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,a=this.parser,s=a.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let d=a.textureLoader;if(f.uri){const h=a.options.manager.getHandler(f.uri);h!==null&&(d=h)}return a.loadTextureImage(e,u.source,d)}}class Y2{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,a=this.parser,s=a.json,l=s.textures[e];if(!l.extensions||!l.extensions[t])return null;const u=l.extensions[t],f=s.images[u.source];let d=a.textureLoader;if(f.uri){const h=a.options.manager.getHandler(f.uri);h!==null&&(d=h)}return a.loadTextureImage(e,u.source,d)}}class j2{constructor(e){this.name=bt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,a=t.bufferViews[e];if(a.extensions&&a.extensions[this.name]){const s=a.extensions[this.name],l=this.parser.getDependency("buffer",s.buffer),u=this.parser.options.meshoptDecoder;if(!u||!u.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return l.then(function(f){const d=s.byteOffset||0,h=s.byteLength||0,m=s.count,_=s.byteStride,v=new Uint8Array(f,d,h);return u.decodeGltfBufferAsync?u.decodeGltfBufferAsync(m,_,v,s.mode,s.filter).then(function(x){return x.buffer}):u.ready.then(function(){const x=new ArrayBuffer(m*_);return u.decodeGltfBuffer(new Uint8Array(x),m,_,v,s.mode,s.filter),x})})}else return null}}class K2{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,a=t.nodes[e];if(!a.extensions||!a.extensions[this.name]||a.mesh===void 0)return null;const s=t.meshes[a.mesh];for(const h of s.primitives)if(h.mode!==Si.TRIANGLES&&h.mode!==Si.TRIANGLE_STRIP&&h.mode!==Si.TRIANGLE_FAN&&h.mode!==void 0)return null;const u=a.extensions[this.name].attributes,f=[],d={};for(const h in u)f.push(this.parser.getDependency("accessor",u[h]).then(m=>(d[h]=m,d[h])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(h=>{const m=h.pop(),_=m.isGroup?m.children:[m],v=h[0].count,x=[];for(const M of _){const T=new ht,S=new q,y=new Pi,b=new q(1,1,1),w=new eA(M.geometry,M.material,v);for(let A=0;A<v;A++)d.TRANSLATION&&S.fromBufferAttribute(d.TRANSLATION,A),d.ROTATION&&y.fromBufferAttribute(d.ROTATION,A),d.SCALE&&b.fromBufferAttribute(d.SCALE,A),w.setMatrixAt(A,T.compose(S,y,b));for(const A in d)if(A==="_COLOR_0"){const P=d[A];w.instanceColor=new Hp(P.array,P.itemSize,P.normalized)}else A!=="TRANSLATION"&&A!=="ROTATION"&&A!=="SCALE"&&M.geometry.setAttribute(A,d[A]);en.prototype.copy.call(w,M),this.parser.assignFinalMaterial(w),x.push(w)}return m.isGroup?(m.clear(),m.add(...x),m):x[0]}))}}const Lx="glTF",Ml=12,Ry={JSON:1313821514,BIN:5130562};class Z2{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ml),a=new TextDecoder;if(this.header={magic:a.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Lx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ml,l=new DataView(e,Ml);let u=0;for(;u<s;){const f=l.getUint32(u,!0);u+=4;const d=l.getUint32(u,!0);if(u+=4,d===Ry.JSON){const h=new Uint8Array(e,Ml+u,f);this.content=a.decode(h)}else if(d===Ry.BIN){const h=Ml+u;this.body=e.slice(h,h+f)}u+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Q2{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const a=this.json,s=this.dracoLoader,l=e.extensions[this.name].bufferView,u=e.extensions[this.name].attributes,f={},d={},h={};for(const m in u){const _=Xp[m]||m.toLowerCase();f[_]=u[m]}for(const m in e.attributes){const _=Xp[m]||m.toLowerCase();if(u[m]!==void 0){const v=a.accessors[e.attributes[m]],x=no[v.componentType];h[_]=x.name,d[_]=v.normalized===!0}}return t.getDependency("bufferView",l).then(function(m){return new Promise(function(_,v){s.decodeDracoFile(m,function(x){for(const M in x.attributes){const T=x.attributes[M],S=d[M];S!==void 0&&(T.normalized=S)}_(x)},f,h,jn,v)})})}}class J2{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class $2{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}}class Ux extends Vl{constructor(e,t,a,s){super(e,t,a,s)}copySampleValue_(e){const t=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=e*s*3+s;for(let u=0;u!==s;u++)t[u]=a[l+u];return t}interpolate_(e,t,a,s){const l=this.resultBuffer,u=this.sampleValues,f=this.valueSize,d=f*2,h=f*3,m=s-t,_=(a-t)/m,v=_*_,x=v*_,M=e*h,T=M-h,S=-2*x+3*v,y=x-v,b=1-S,w=y-v+_;for(let A=0;A!==f;A++){const P=u[T+A+f],I=u[T+A+d]*m,B=u[M+A+f],H=u[M+A]*m;l[A]=b*P+w*I+S*B+y*H}return l}}const eD=new Pi;class tD extends Ux{interpolate_(e,t,a,s){const l=super.interpolate_(e,t,a,s);return eD.fromArray(l).normalize().toArray(l),l}}const Si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},no={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cy={9728:Yn,9729:fi,9984:Qy,9985:Ou,9986:El,9987:ba},Dy={33071:ms,33648:ku,10497:ro},Qd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},hs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},nD={CUBICSPLINE:void 0,LINEAR:Nl,STEP:Ul},Jd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iD(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new co({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:La})),r.DefaultMaterial}function Ws(r,e,t){for(const a in t.extensions)r[a]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[a]=t.extensions[a])}function Ta(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aD(r,e,t){let a=!1,s=!1,l=!1;for(let h=0,m=e.length;h<m;h++){const _=e[h];if(_.POSITION!==void 0&&(a=!0),_.NORMAL!==void 0&&(s=!0),_.COLOR_0!==void 0&&(l=!0),a&&s&&l)break}if(!a&&!s&&!l)return Promise.resolve(r);const u=[],f=[],d=[];for(let h=0,m=e.length;h<m;h++){const _=e[h];if(a){const v=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):r.attributes.position;u.push(v)}if(s){const v=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):r.attributes.normal;f.push(v)}if(l){const v=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):r.attributes.color;d.push(v)}}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(d)]).then(function(h){const m=h[0],_=h[1],v=h[2];return a&&(r.morphAttributes.position=m),s&&(r.morphAttributes.normal=_),l&&(r.morphAttributes.color=v),r.morphTargetsRelative=!0,r})}function sD(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,a=e.weights.length;t<a;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let a=0,s=t.length;a<s;a++)r.morphTargetDictionary[t[a]]=a}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rD(r){let e;const t=r.extensions&&r.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$d(t.attributes):e=r.indices+":"+$d(r.attributes)+":"+r.mode,r.targets!==void 0)for(let a=0,s=r.targets.length;a<s;a++)e+=":"+$d(r.targets[a]);return e}function $d(r){let e="";const t=Object.keys(r).sort();for(let a=0,s=t.length;a<s;a++)e+=t[a]+":"+r[t[a]]+";";return e}function qp(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oD(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const lD=new ht;class cD{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new L2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let a=!1,s=-1,l=!1,u=-1;if(typeof navigator<"u"){const f=navigator.userAgent;a=/^((?!chrome|android).)*safari/i.test(f)===!0;const d=f.match(/Version\/(\d+)/);s=a&&d?parseInt(d[1],10):-1,l=f.indexOf("Firefox")>-1,u=l?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||a&&s<17||l&&u<98?this.textureLoader=new Gl(this.options.manager):this.textureLoader=new bA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mx(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const a=this,s=this.json,l=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(u){return u._markDefs&&u._markDefs()}),Promise.all(this._invokeAll(function(u){return u.beforeRoot&&u.beforeRoot()})).then(function(){return Promise.all([a.getDependencies("scene"),a.getDependencies("animation"),a.getDependencies("camera")])}).then(function(u){const f={scene:u[0][s.scene||0],scenes:u[0],animations:u[1],cameras:u[2],asset:s.asset,parser:a,userData:{}};return Ws(l,f,s),Ta(f,s),Promise.all(a._invokeAll(function(d){return d.afterRoot&&d.afterRoot(f)})).then(function(){for(const d of f.scenes)d.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],a=this.json.meshes||[];for(let s=0,l=t.length;s<l;s++){const u=t[s].joints;for(let f=0,d=u.length;f<d;f++)e[u[f]].isBone=!0}for(let s=0,l=e.length;s<l;s++){const u=e[s];u.mesh!==void 0&&(this._addNodeRef(this.meshCache,u.mesh),u.skin!==void 0&&(a[u.mesh].isSkinnedMesh=!0)),u.camera!==void 0&&this._addNodeRef(this.cameraCache,u.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,a){if(e.refs[t]<=1)return a;const s=a.clone(),l=(u,f)=>{const d=this.associations.get(u);d!=null&&this.associations.set(f,d);for(const[h,m]of u.children.entries())l(m,f.children[h])};return l(a,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let a=0;a<t.length;a++){const s=e(t[a]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const a=[];for(let s=0;s<t.length;s++){const l=e(t[s]);l&&a.push(l)}return a}getDependency(e,t){const a=e+":"+t;let s=this.cache.get(a);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(l){return l.loadNode&&l.loadNode(t)});break;case"mesh":s=this._invokeOne(function(l){return l.loadMesh&&l.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(l){return l.loadBufferView&&l.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(l){return l.loadMaterial&&l.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(l){return l.loadTexture&&l.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(l){return l.loadAnimation&&l.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(l){return l!=this&&l.getDependency&&l.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(a,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const a=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(l,u){return a.getDependency(e,u)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],a=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(l,u){a.load(Al.resolveURL(t.uri,s.path),l,void 0,function(){u(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(a){const s=t.byteLength||0,l=t.byteOffset||0;return a.slice(l,l+s)})}loadAccessor(e){const t=this,a=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const u=Qd[s.type],f=no[s.componentType],d=s.normalized===!0,h=new f(s.count*u);return Promise.resolve(new Ln(h,u,d))}const l=[];return s.bufferView!==void 0?l.push(this.getDependency("bufferView",s.bufferView)):l.push(null),s.sparse!==void 0&&(l.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),l.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(l).then(function(u){const f=u[0],d=Qd[s.type],h=no[s.componentType],m=h.BYTES_PER_ELEMENT,_=m*d,v=s.byteOffset||0,x=s.bufferView!==void 0?a.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let T,S;if(x&&x!==_){const y=Math.floor(v/x),b="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+y+":"+s.count;let w=t.cache.get(b);w||(T=new h(f,y*x,s.count*x/m),w=new Kb(T,x/m),t.cache.add(b,w)),S=new mm(w,d,v%x/m,M)}else f===null?T=new h(s.count*d):T=new h(f,v,s.count*d),S=new Ln(T,d,M);if(s.sparse!==void 0){const y=Qd.SCALAR,b=no[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,A=s.sparse.values.byteOffset||0,P=new b(u[1],w,s.sparse.count*y),I=new h(u[2],A,s.sparse.count*d);f!==null&&(S=new Ln(S.array.slice(),S.itemSize,S.normalized)),S.normalized=!1;for(let B=0,H=P.length;B<H;B++){const C=P[B];if(S.setX(C,I[B*d]),d>=2&&S.setY(C,I[B*d+1]),d>=3&&S.setZ(C,I[B*d+2]),d>=4&&S.setW(C,I[B*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}S.normalized=M}return S})}loadTexture(e){const t=this.json,a=this.options,l=t.textures[e].source,u=t.images[l];let f=this.textureLoader;if(u.uri){const d=a.manager.getHandler(u.uri);d!==null&&(f=d)}return this.loadTextureImage(e,l,f)}loadTextureImage(e,t,a){const s=this,l=this.json,u=l.textures[e],f=l.images[t],d=(f.uri||f.bufferView)+":"+u.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,a).then(function(m){m.flipY=!1,m.name=u.name||f.name||"",m.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(m.name=f.uri);const v=(l.samplers||{})[u.sampler]||{};return m.magFilter=Cy[v.magFilter]||fi,m.minFilter=Cy[v.minFilter]||ba,m.wrapS=Dy[v.wrapS]||ro,m.wrapT=Dy[v.wrapT]||ro,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==Yn&&m.minFilter!==fi,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const a=this,s=this.json,l=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const u=s.images[e],f=self.URL||self.webkitURL;let d=u.uri||"",h=!1;if(u.bufferView!==void 0)d=a.getDependency("bufferView",u.bufferView).then(function(_){h=!0;const v=new Blob([_],{type:u.mimeType});return d=f.createObjectURL(v),d});else if(u.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(d).then(function(_){return new Promise(function(v,x){let M=v;t.isImageBitmapLoader===!0&&(M=function(T){const S=new vn(T);S.needsUpdate=!0,v(S)}),t.load(Al.resolveURL(_,l.path),M,void 0,x)})}).then(function(_){return h===!0&&f.revokeObjectURL(d),Ta(_,u),_.userData.mimeType=u.mimeType||oD(u.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),_});return this.sourceCache[e]=m,m}assignTexture(e,t,a,s){const l=this;return this.getDependency("texture",a.index).then(function(u){if(!u)return null;if(a.texCoord!==void 0&&a.texCoord>0&&(u=u.clone(),u.channel=a.texCoord),l.extensions[bt.KHR_TEXTURE_TRANSFORM]){const f=a.extensions!==void 0?a.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const d=l.associations.get(u);u=l.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(u,f),l.associations.set(u,d)}}return s!==void 0&&(u.colorSpace=s),e[t]=u,u})}assignFinalMaterial(e){const t=e.geometry;let a=e.material;const s=t.attributes.tangent===void 0,l=t.attributes.color!==void 0,u=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+a.uuid;let d=this.cache.get(f);d||(d=new _x,Ii.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,d.sizeAttenuation=!1,this.cache.add(f,d)),a=d}else if(e.isLine){const f="LineBasicMaterial:"+a.uuid;let d=this.cache.get(f);d||(d=new Xi,Ii.prototype.copy.call(d,a),d.color.copy(a.color),d.map=a.map,this.cache.add(f,d)),a=d}if(s||l||u){let f="ClonedMaterial:"+a.uuid+":";s&&(f+="derivative-tangents:"),l&&(f+="vertex-colors:"),u&&(f+="flat-shading:");let d=this.cache.get(f);d||(d=a.clone(),l&&(d.vertexColors=!0),u&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(f,d),this.associations.set(d,this.associations.get(a))),a=d}e.material=a}getMaterialType(){return co}loadMaterial(e){const t=this,a=this.json,s=this.extensions,l=a.materials[e];let u;const f={},d=l.extensions||{},h=[];if(d[bt.KHR_MATERIALS_UNLIT]){const _=s[bt.KHR_MATERIALS_UNLIT];u=_.getMaterialType(),h.push(_.extendParams(f,l,t))}else{const _=l.pbrMetallicRoughness||{};if(f.color=new qe(1,1,1),f.opacity=1,Array.isArray(_.baseColorFactor)){const v=_.baseColorFactor;f.color.setRGB(v[0],v[1],v[2],jn),f.opacity=v[3]}_.baseColorTexture!==void 0&&h.push(t.assignTexture(f,"map",_.baseColorTexture,hn)),f.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,f.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(f,"metalnessMap",_.metallicRoughnessTexture)),h.push(t.assignTexture(f,"roughnessMap",_.metallicRoughnessTexture))),u=this._invokeOne(function(v){return v.getMaterialType&&v.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(v){return v.extendMaterialParams&&v.extendMaterialParams(e,f)})))}l.doubleSided===!0&&(f.side=ei);const m=l.alphaMode||Jd.OPAQUE;if(m===Jd.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,m===Jd.MASK&&(f.alphaTest=l.alphaCutoff!==void 0?l.alphaCutoff:.5)),l.normalTexture!==void 0&&u!==Yi&&(h.push(t.assignTexture(f,"normalMap",l.normalTexture)),f.normalScale=new et(1,1),l.normalTexture.scale!==void 0)){const _=l.normalTexture.scale;f.normalScale.set(_,_)}if(l.occlusionTexture!==void 0&&u!==Yi&&(h.push(t.assignTexture(f,"aoMap",l.occlusionTexture)),l.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=l.occlusionTexture.strength)),l.emissiveFactor!==void 0&&u!==Yi){const _=l.emissiveFactor;f.emissive=new qe().setRGB(_[0],_[1],_[2],jn)}return l.emissiveTexture!==void 0&&u!==Yi&&h.push(t.assignTexture(f,"emissiveMap",l.emissiveTexture,hn)),Promise.all(h).then(function(){const _=new u(f);return l.name&&(_.name=l.name),Ta(_,l),t.associations.set(_,{materials:e}),l.extensions&&Ws(s,_,l),_})}createUniqueName(e){const t=Bt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,a=this.extensions,s=this.primitiveCache;function l(f){return a[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(d){return Ly(d,f,t)})}const u=[];for(let f=0,d=e.length;f<d;f++){const h=e[f],m=rD(h),_=s[m];if(_)u.push(_.promise);else{let v;h.extensions&&h.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?v=l(h):v=Ly(new yn,h,t),s[m]={primitive:h,promise:v},u.push(v)}}return Promise.all(u)}loadMesh(e){const t=this,a=this.json,s=this.extensions,l=a.meshes[e],u=l.primitives,f=[];for(let d=0,h=u.length;d<h;d++){const m=u[d].material===void 0?iD(this.cache):this.getDependency("material",u[d].material);f.push(m)}return f.push(t.loadGeometries(u)),Promise.all(f).then(function(d){const h=d.slice(0,d.length-1),m=d[d.length-1],_=[];for(let x=0,M=m.length;x<M;x++){const T=m[x],S=u[x];let y;const b=h[x];if(S.mode===Si.TRIANGLES||S.mode===Si.TRIANGLE_STRIP||S.mode===Si.TRIANGLE_FAN||S.mode===void 0)y=l.isSkinnedMesh===!0?new Qb(T,b):new Ct(T,b),y.isSkinnedMesh===!0&&y.normalizeSkinWeights(),S.mode===Si.TRIANGLE_STRIP?y.geometry=wy(y.geometry,sx):S.mode===Si.TRIANGLE_FAN&&(y.geometry=wy(y.geometry,zp));else if(S.mode===Si.LINES)y=new Yr(T,b);else if(S.mode===Si.LINE_STRIP)y=new to(T,b);else if(S.mode===Si.LINE_LOOP)y=new aA(T,b);else if(S.mode===Si.POINTS)y=new sA(T,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+S.mode);Object.keys(y.geometry.morphAttributes).length>0&&sD(y,l),y.name=t.createUniqueName(l.name||"mesh_"+e),Ta(y,l),S.extensions&&Ws(s,y,S),t.assignFinalMaterial(y),_.push(y)}for(let x=0,M=_.length;x<M;x++)t.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return l.extensions&&Ws(s,_[0],l),_[0];const v=new Ni;l.extensions&&Ws(s,v,l),t.associations.set(v,{meshes:e});for(let x=0,M=_.length;x<M;x++)v.add(_[x]);return v})}loadCamera(e){let t;const a=this.json.cameras[e],s=a[a.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return a.type==="perspective"?t=new Dn(ox.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):a.type==="orthographic"&&(t=new Sm(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),a.name&&(t.name=this.createUniqueName(a.name)),Ta(t,a),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],a=[];for(let s=0,l=t.joints.length;s<l;s++)a.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?a.push(this.getDependency("accessor",t.inverseBindMatrices)):a.push(null),Promise.all(a).then(function(s){const l=s.pop(),u=s,f=[],d=[];for(let h=0,m=u.length;h<m;h++){const _=u[h];if(_){f.push(_);const v=new ht;l!==null&&v.fromArray(l.array,h*16),d.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new gm(f,d)})}loadAnimation(e){const t=this.json,a=this,s=t.animations[e],l=s.name?s.name:"animation_"+e,u=[],f=[],d=[],h=[],m=[];for(let _=0,v=s.channels.length;_<v;_++){const x=s.channels[_],M=s.samplers[x.sampler],T=x.target,S=T.node,y=s.parameters!==void 0?s.parameters[M.input]:M.input,b=s.parameters!==void 0?s.parameters[M.output]:M.output;T.node!==void 0&&(u.push(this.getDependency("node",S)),f.push(this.getDependency("accessor",y)),d.push(this.getDependency("accessor",b)),h.push(M),m.push(T))}return Promise.all([Promise.all(u),Promise.all(f),Promise.all(d),Promise.all(h),Promise.all(m)]).then(function(_){const v=_[0],x=_[1],M=_[2],T=_[3],S=_[4],y=[];for(let b=0,w=v.length;b<w;b++){const A=v[b],P=x[b],I=M[b],B=T[b],H=S[b];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const C=a._createAnimationTracks(A,P,I,B,H);if(C)for(let R=0;R<C.length;R++)y.push(C[R])}return new Gp(l,void 0,y)})}createNodeMesh(e){const t=this.json,a=this,s=t.nodes[e];return s.mesh===void 0?null:a.getDependency("mesh",s.mesh).then(function(l){const u=a._getNodeRef(a.meshCache,s.mesh,l);return s.weights!==void 0&&u.traverse(function(f){if(f.isMesh)for(let d=0,h=s.weights.length;d<h;d++)f.morphTargetInfluences[d]=s.weights[d]}),u})}loadNode(e){const t=this.json,a=this,s=t.nodes[e],l=a._loadNodeShallow(e),u=[],f=s.children||[];for(let h=0,m=f.length;h<m;h++)u.push(a.getDependency("node",f[h]));const d=s.skin===void 0?Promise.resolve(null):a.getDependency("skin",s.skin);return Promise.all([l,Promise.all(u),d]).then(function(h){const m=h[0],_=h[1],v=h[2];v!==null&&m.traverse(function(x){x.isSkinnedMesh&&x.bind(v,lD)});for(let x=0,M=_.length;x<M;x++)m.add(_[x]);return m})}_loadNodeShallow(e){const t=this.json,a=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const l=t.nodes[e],u=l.name?s.createUniqueName(l.name):"",f=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&f.push(d),l.camera!==void 0&&f.push(s.getDependency("camera",l.camera).then(function(h){return s._getNodeRef(s.cameraCache,l.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){f.push(h)}),this.nodeCache[e]=Promise.all(f).then(function(h){let m;if(l.isBone===!0?m=new mx:h.length>1?m=new Ni:h.length===1?m=h[0]:m=new en,m!==h[0])for(let _=0,v=h.length;_<v;_++)m.add(h[_]);if(l.name&&(m.userData.name=l.name,m.name=u),Ta(m,l),l.extensions&&Ws(a,m,l),l.matrix!==void 0){const _=new ht;_.fromArray(l.matrix),m.applyMatrix4(_)}else l.translation!==void 0&&m.position.fromArray(l.translation),l.rotation!==void 0&&m.quaternion.fromArray(l.rotation),l.scale!==void 0&&m.scale.fromArray(l.scale);if(!s.associations.has(m))s.associations.set(m,{});else if(l.mesh!==void 0&&s.meshCache.refs[l.mesh]>1){const _=s.associations.get(m);s.associations.set(m,{..._})}return s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,a=this.json.scenes[e],s=this,l=new Ni;a.name&&(l.name=s.createUniqueName(a.name)),Ta(l,a),a.extensions&&Ws(t,l,a);const u=a.nodes||[],f=[];for(let d=0,h=u.length;d<h;d++)f.push(s.getDependency("node",u[d]));return Promise.all(f).then(function(d){for(let m=0,_=d.length;m<_;m++)l.add(d[m]);const h=m=>{const _=new Map;for(const[v,x]of s.associations)(v instanceof Ii||v instanceof vn)&&_.set(v,x);return m.traverse(v=>{const x=s.associations.get(v);x!=null&&_.set(v,x)}),_};return s.associations=h(l),l})}_createAnimationTracks(e,t,a,s,l){const u=[],f=e.name?e.name:e.uuid,d=[];hs[l.path]===hs.weights?e.traverse(function(v){v.morphTargetInfluences&&d.push(v.name?v.name:v.uuid)}):d.push(f);let h;switch(hs[l.path]){case hs.weights:h=uo;break;case hs.rotation:h=fo;break;case hs.translation:case hs.scale:h=ho;break;default:switch(a.itemSize){case 1:h=uo;break;case 2:case 3:default:h=ho;break}break}const m=s.interpolation!==void 0?nD[s.interpolation]:Nl,_=this._getArrayFromAccessor(a);for(let v=0,x=d.length;v<x;v++){const M=new h(d[v]+"."+hs[l.path],t.array,_,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),u.push(M)}return u}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const a=qp(t.constructor),s=new Float32Array(t.length);for(let l=0,u=t.length;l<u;l++)s[l]=t[l]*a;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(a){const s=this instanceof fo?tD:Ux;return new s(this.times,this.values,this.getValueSize()/3,a)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uD(r,e,t){const a=e.attributes,s=new Na;if(a.POSITION!==void 0){const f=t.json.accessors[a.POSITION],d=f.min,h=f.max;if(d!==void 0&&h!==void 0){if(s.set(new q(d[0],d[1],d[2]),new q(h[0],h[1],h[2])),f.normalized){const m=qp(no[f.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const l=e.targets;if(l!==void 0){const f=new q,d=new q;for(let h=0,m=l.length;h<m;h++){const _=l[h];if(_.POSITION!==void 0){const v=t.json.accessors[_.POSITION],x=v.min,M=v.max;if(x!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),v.normalized){const T=qp(no[v.componentType]);d.multiplyScalar(T)}f.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(f)}r.boundingBox=s;const u=new Qi;s.getCenter(u.center),u.radius=s.min.distanceTo(s.max)/2,r.boundingSphere=u}function Ly(r,e,t){const a=e.attributes,s=[];function l(u,f){return t.getDependency("accessor",u).then(function(d){r.setAttribute(f,d)})}for(const u in a){const f=Xp[u]||u.toLowerCase();f in r.attributes||s.push(l(a[u],f))}if(e.indices!==void 0&&!r.index){const u=t.getDependency("accessor",e.indices).then(function(f){r.setIndex(f)});s.push(u)}return Rt.workingColorSpace!==jn&&"COLOR_0"in a&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Rt.workingColorSpace}" not supported.`),Ta(r,e),uD(r,e,t),Promise.all(s).then(function(){return e.targets!==void 0?aD(r,e.targets,t):r})}function fD(){const r=me.useRef(null);return me.useEffect(()=>{const e=new tf,t=new sf({antialias:!0});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),r.current&&!r.current.contains(t.domElement)&&r.current.appendChild(t.domElement);const a=new Dn(60,window.innerWidth/window.innerHeight,.1,100);a.position.set(0,2,0),a.lookAt(0,0,0);const s=new wA,l=new yA;l.setPath("/threejs-water-shader/");const u=l.load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]),f=new Gl().load("/threejs-water-shader/ocean_floor.png");e.background=u,e.environment=u;const d={size:512},h=new A2({environmentMap:u,resolution:d.size});e.add(h);const m=new C2({texture:f});e.add(m),h.material.uniforms.uWavesAmplitude.value=.06,h.material.uniforms.uWavesFrequency.value=.04,h.material.uniforms.uWavesIterations.value=1,h.material.uniforms.uWavesSpeed.value=.1,h.material.uniforms.uTroughColor.value=new qe(873151),h.material.uniforms.uSurfaceColor.value=new qe(2489078),h.material.uniforms.uPeakColor.value=new qe(15073136),h.material.uniforms.uOpacity.value=.6,h.material.uniforms.uFresnelPower.value=.3,h.material.uniforms.uFresnelScale.value=.9,h.material.uniforms.uTroughTransition.value=.4,m.material.uniforms.uCausticsColor.value=new qe(16770416),m.material.uniforms.uCausticsScale.value=6,m.material.uniforms.uCausticsSpeed.value=.2,e.add(new Zu(16777215,.9));const _=40,v=5,x=.08,M=.14,T=.2,S=1.8,y=.9;let b=new et(0,0);window.addEventListener("mousemove",F=>{const k=F.clientX/window.innerWidth*2-1,fe=-(F.clientY/window.innerHeight*2-1),N=new q(k,fe,.5);N.unproject(a);const K=N.clone().sub(a.position).normalize();if(Math.abs(K.y)>1e-4){const Z=(T-a.position.y)/K.y;b.set(a.position.x+K.x*Z,a.position.z+K.z*Z)}});const w=[];for(let F=0;F<_;F++){const k=new Ni;let fe=.2;const N=(Math.random()-.5)*fe,K=(Math.random()-.5)*fe,Z=Math.random()*Math.PI*2,de=.7+Math.random()*.8,X=(.023+Math.random()*.05)/10;let le=Math.max(-S,Math.min(S,Math.cos(Z)*de+N)),pe=Math.max(-y,Math.min(y,Math.sin(Z)*de+K));k.position.set(le,T,pe),k.scale.set(M,M,M),w.push({group:k,velocity:new et(Math.cos(Z)*.02,Math.sin(Z)*.02),speed:X,scatterBias:new et(N,K),repulse:new et(0,0),ignoreMouse:!1,randVec:new et((Math.random()-.5)*.013,(Math.random()-.5)*.013),circleAngle:Math.random()*Math.PI*2,orbitDirection:Math.random()<.5?1:-1,orbitRadius:.35+Math.random()*.85});for(let xe=0;xe<v;xe++){const _e=xe/(v-1),Ne=.08*(1-.68*_e),Ce=.93*(1-.75*_e),Xe=new Yi({color:new qe().setHSL(.01,1,.35),transparent:!0,opacity:Ce,depthWrite:!1}),at=new Mi(Ne,14,8),nt=new Ct(at,Xe);nt.position.set(0,0,0),k.add(nt)}e.add(k)}let A=0;const P=3;function I(F){const k=new et(b.x-F.group.position.x+F.scatterBias.x*.13,b.y-F.group.position.z+F.scatterBias.y*.13);return k.lengthSq()>1e-6?k.clone().normalize():new et(1,0)}function B(F,k){b.x<-S||b.x>S||b.z<-y||b.z>y?A+=k:A=0;const fe=A>P,N=.07;for(let K=0;K<w.length;K++){const Z=w[K];Z.repulse.set(0,0);for(let de=0;de<w.length;de++){if(K===de)continue;const X=w[de],le=Z.group.position.x-X.group.position.x,pe=Z.group.position.z-X.group.position.z,xe=le*le+pe*pe;if(xe<N*N&&xe>1e-5){const _e=Math.sqrt(xe),Ne=.035*(1-_e/N);Z.repulse.x+=le/_e*Ne,Z.repulse.y+=pe/_e*Ne}}}for(let K=0;K<w.length;K++){const Z=w[K];Z.ignoreMouse=fe;let de;if(Z.ignoreMouse){const _e=Z.orbitRadius;Z.circleAngle+=k*.32*Z.orbitDirection;const Ne=Math.cos(Z.circleAngle)*_e,Ce=Math.sin(Z.circleAngle)*_e;de=new et(Ne-Z.group.position.x,Ce-Z.group.position.z).normalize().multiplyScalar(Z.speed*.6)}else{const _e=new et(b.x-Z.group.position.x+Z.scatterBias.x*.13,b.y-Z.group.position.z+Z.scatterBias.y*.13),Ne=_e.length();de=_e.length()>.001?_e.clone().normalize().multiplyScalar(Z.speed*Math.min(Ne,1.3)*1.7):new et(0,0)}de.add(Z.repulse),Z.velocity.lerp(de,.08),Z.velocity.length()>Z.speed&&Z.velocity.setLength(Z.speed),Z.group.position.x+=Z.velocity.x,Z.group.position.z+=Z.velocity.y,Z.group.position.x<-S&&(Z.group.position.x=-S,Z.velocity.x*=-.67),Z.group.position.x>S&&(Z.group.position.x=S,Z.velocity.x*=-.67),Z.group.position.z<-y&&(Z.group.position.z=-y,Z.velocity.y*=-.67),Z.group.position.z>y&&(Z.group.position.z=y,Z.velocity.y*=-.67);const X=Z.velocity.length()>.001?Z.velocity.clone().normalize():I(Z),le=new q(X.x,0,X.y),xe=Z.group.position.clone().clone().add(le.clone().negate().multiplyScalar(x*(v-1)));Z.group.position.y=T,Z.group.lookAt(xe.x,T,xe.z),Z.group.rotateY(Math.PI/2);for(let _e=0;_e<v;_e++){const Ne=_e/(v-1),Ce=-_e*x,Xe=1-Math.pow(1-Ne,3)/2,at=F*7-Ne*2.4+K*.25,nt=Math.sin(at)*.17*Xe;Z.group.children[_e].position.set(Ce,0,nt)}}}let H=null,C=null;new D2().load("/assets/koi.glb",F=>{C=F.scene,C.position.set(0,0,-5),C.scale.set(.09,.09,.09),C.rotation.y=Math.PI/2,e.add(C),console.log("Koi model loaded:",C),F.animations&&F.animations.length>0&&(console.log("Koi model animations found:",F.animations),H=new HA(C),F.animations.forEach(k=>{H.clipAction(k).play()}))},void 0,F=>{console.error("Error loading cosmic_koi.glb:",F)});let V=0;const $=.6,ie=.1,he=-.1;function te(F){C&&(V-=F*he,C.position.x=Math.cos(V)*$,C.position.z=Math.sin(V)*$,C.position.y=ie,C.lookAt(Math.cos(V-Math.PI/2)*$,ie,Math.sin(V-Math.PI/2)*$))}function O(){const F=s.getDelta(),k=s.getElapsedTime();B(k,F),H&&H.update(F),C&&te(F),h.update(k),m.update(k),t.render(e,a),requestAnimationFrame(O)}return O(),window.addEventListener("resize",()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}),()=>{t&&(t.dispose(),r.current&&r.current.removeChild(t.domElement)),controls&&controls.dispose()}},[]),Cn.jsx("div",{className:"w-screen h-screen text-white flex flex-col items-center justify-center",children:Cn.jsx("div",{ref:r,className:"w-full h-full",style:{touchAction:"none",background:"transparent"}})})}function hD(){const r=me.useRef(null);return me.useEffect(()=>{const e=new tf,t=new sf({antialias:!0});t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight),r.current&&!r.current.contains(t.domElement)&&r.current.appendChild(t.domElement),new Gl().load("/src/assets/galaxy.jpg",O=>{O.encoding=void 0,O.colorSpace=hn;const F=document.createElement("canvas");F.width=O.image.width,F.height=O.image.height;const k=F.getContext("2d");k.drawImage(O.image,0,0),k.globalAlpha=.7,k.fillStyle="#070710",k.fillRect(0,0,F.width,F.height);const fe=new vn(F);fe.needsUpdate=!0,fe.encoding=void 0,fe.colorSpace=hn,e.background=fe,t.setClearColor(460560,1)});const s=new Dn(60,window.innerWidth/window.innerHeight,.1,100);s.position.set(0,0,5),s.lookAt(0,0,0);const l=16105735;e.add(new Zu(l,1.2)),e.add(new Zu(16777215,.5));const u=new Mi(.13,32,32),f=new Xn({color:l,metalness:.7,roughness:.18,clearcoat:.7,clearcoatRoughness:.1,reflectivity:.8,sheen:1,sheenColor:new qe(16770736),emissive:l,emissiveIntensity:.18}),d=new Ct(u,f);e.add(d);const h=new Mi(1.19,64,64),m=new hi({uniforms:{glowColor:{value:new qe(l)},innerRadius:{value:.13},outerRadius:{value:1.19}},vertexShader:`
        varying vec3 vPosition;
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 glowColor;
        uniform float innerRadius;
        uniform float outerRadius;
        varying vec3 vPosition;
        void main() {
          float dist = length(vPosition);
          float t = smoothstep(innerRadius, outerRadius, dist);
          float alpha = (1.0 - t) * 0.28;
          gl_FragColor = vec4(glowColor, alpha);
        }
      `,blending:Gu,transparent:!0,side:qn}),_=new Ct(h,m);_.position.copy(d.position),e.add(_);const v=.45,x=[{radius:1.3,color:l,speed:.002,tilt:.48},{radius:v,color:l,speed:-.004,tilt:-.48},{radius:1.1,color:l,speed:.005,tilt:.38}],M=[];let T=null,S=null,y=null,b=null,w=null,A=null,P=null,I=null;const B=1.7,H=.002;if(x.forEach((O,F)=>{let k=Math.PI/2+O.tilt;F===0?k+=Math.PI/1.2:F===1?k-=.22:F===2&&(k+=.32);let fe;if(F===0){const K=new ps(O.radius,80),Z=new xl(K),de=new Xi({color:l,linewidth:2});fe=new Yr(Z,de);const X=O.radius;[{radius:X+.53,opacity:.18,linewidth:5,tilt:.12},{radius:X+.19,opacity:.22,linewidth:3,tilt:-.21},{radius:X+.44,opacity:.11,linewidth:6,tilt:.35},{radius:X+.13,opacity:.29,linewidth:4,tilt:-.32},{radius:X+.6,opacity:.29,linewidth:4,tilt:-.16}].forEach(pe=>{const xe=new Ni,_e=90;for(let Ne=0;Ne<_e;Ne++){const Ce=Ne/_e*Math.PI*2,Xe=Math.cos(Ce)*(pe.radius-.03),at=Math.sin(Ce)*(pe.radius-.03),nt=[new q(Xe,at,0),new q(0,0,0)],W=new yn().setFromPoints(nt),Ot=new Xi({color:l,linewidth:pe.linewidth,transparent:!0,opacity:pe.opacity}),pt=new to(W,Ot);xe.add(pt)}xe.rotation.x=Math.PI/2+pe.tilt,e.add(xe)})}if(F===0){const K=new Mi(.045,16,16),Z=new Xn({color:l,metalness:.7,roughness:.18,clearcoat:.7,clearcoatRoughness:.1,reflectivity:.8,sheen:1,sheenColor:l,emissive:l,emissiveIntensity:.22}),de=O.radius,X=new Ct(K,Z);X.position.set(de,0,0),fe.add(X);const le=Math.PI*2/3,pe=new Ct(K,Z);pe.position.set(Math.cos(le)*de,Math.sin(le)*de,0),fe.add(pe),fe.smallSphere1=X,fe.smallSphere2=pe}else{const K=new ps(O.radius,80),Z=new xl(K),de=new Xi({color:l,linewidth:2});fe=new Yr(Z,de)}fe.rotation.x=k,e.add(fe);const N=new q(0,1,0).applyAxisAngle(new q(1,0,0),O.tilt);if(M.push({mesh:fe,speed:O.speed,axis:N}),F===2){const K=new ps(O.radius+.08,80),Z=new xl(K),de=new Xi({color:l,linewidth:2}),X=new Yr(Z,de);X.rotation.copy(fe.rotation),X.position.copy(fe.position),e.add(X),b=[fe,X],w=N,A=O.speed,M[2].speed=O.speed,M[2].axis=N;const le=new ps(B,80),pe=new xl(le),xe=new Xi({color:l,linewidth:1}),_e=new Yr(pe,xe);_e.rotation.x=Math.PI/2+.45,_e.position.y=0;const Ne=new Mi(.04,20,20),Ce=new Xn({color:l,metalness:.7,roughness:.18,clearcoat:.7,clearcoatRoughness:.1,reflectivity:.8,sheen:1,sheenColor:l,emissive:l,emissiveIntensity:.22}),Xe=new Ct(Ne,Ce),at=new Mi(.02,16,16),nt=new Xn({color:l,metalness:.7,roughness:.18,clearcoat:.7,clearcoatRoughness:.1,reflectivity:.8,sheen:1,sheenColor:l,emissive:l,emissiveIntensity:.22}),W=new Ct(at,nt),Ot=new Mi(.045,16,16),pt=new Xn({color:l,metalness:.7,roughness:.18,clearcoat:.7,clearcoatRoughness:.1,reflectivity:.8,sheen:1,sheenColor:l,emissive:l,emissiveIntensity:.22}),ft=new Ct(Ot,pt),Ve=B;Xe.position.set(Ve,0,0);const dt=.18;W.position.set(Math.cos(dt)*Ve,Math.sin(dt)*Ve,0),ft.position.set(-Ve,0,0),_e.add(Xe),_e.add(W),_e.add(ft),e.add(_e),P=_e,I=new q(0,1,0),P.OSphere=Xe,P.smallSphere1=W,P.smallSphere2=ft}F===1&&(T=fe,S=N)}),b&&b.length===2){const O=(x[2].radius+(x[2].radius+.08))/2,F=new ps(O,80),k=new xl(F),fe=new Xi({color:l,linewidth:2}),N=new Yr(k,fe);N.rotation.copy(b[0].rotation),N.position.copy(b[0].position),e.add(N),b.push(N)}if(T){y=new Ni;const O=80,F=v;for(let k=0;k<O;k++){const fe=k/O*Math.PI*2,N=Math.cos(fe)*(F-.03),K=Math.sin(fe)*(F-.03),Z=[new q(N,K,0),new q(0,0,0)],de=new yn().setFromPoints(Z),X=new Xi({color:l,linewidth:1}),le=new to(de,X);y.add(le)}y.rotation.copy(T.rotation),y.position.copy(T.position),e.add(y)}function C(){const O=new ym(1,4),F=new co({color:16777215}),k=new Ct(O,F);k.scale.set(.1,.1,.1);const[fe,N,K]=Array(3).fill().map(()=>ox.randFloatSpread(100));k.position.set(fe,N,K),e.add(k)}Array(400).fill().forEach(C);const R=[],V=new Ni;e.add(V);function $(){const O=Math.random()*Math.PI*2,F=3.3+Math.random()*2.7,k=(Math.random()-.5)*2,fe=new q(Math.cos(O)*F,k,Math.sin(O)*F),N=new q((Math.random()-.5)*.7,(Math.random()-.5)*.6,(Math.random()-.5)*.7).normalize(),K=.1+Math.random()*.2,Z=fe.clone().add(N.clone().multiplyScalar(K)),de=new yn().setFromPoints([fe,Z]),X=new Xi({color:l,transparent:!0,opacity:1}),le=new to(de,X);R.push({line:le,velocity:N.clone().multiplyScalar(.07+Math.random()*.07),life:0,maxLife:20+Math.random()*20}),V.add(le)}let ie=0;function he(){requestAnimationFrame(he),d.rotation.y+=.018,M.forEach((O,F)=>{b&&b.length>=2&&F===2||O.mesh.rotateOnAxis(O.axis,O.speed)}),b&&b.length>=2&&w!==null&&A!==null&&b.forEach(O=>{O.rotateOnAxis(w,A)}),P&&I&&P.rotateOnWorldAxis(I,H),y&&S&&(y.rotation.copy(T.rotation),y.position.copy(T.position),y.rotateOnAxis(S,M[1].speed)),ie++,ie>20+Math.random()*30&&($(),ie=0);for(let O=R.length-1;O>=0;O--){const F=R[O];F.line.position.add(F.velocity),F.life++,F.life>F.maxLife*.7&&(F.line.material.opacity=Math.max(0,(F.maxLife-F.life)/(F.maxLife*.3))),F.life>=F.maxLife&&(V.remove(F.line),F.line.geometry.dispose(),F.line.material.dispose(),R.splice(O,1))}t.render(e,s)}he();function te(){s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}return window.addEventListener("resize",te),()=>{window.removeEventListener("resize",te),t&&(t.dispose(),r.current&&r.current.removeChild(t.domElement)),controls&&controls.dispose()}},[]),Cn.jsx("div",{className:"w-screen h-screen text-white flex flex-col items-center justify-center",children:Cn.jsx("div",{ref:r,className:"w-full h-full",style:{touchAction:"none",background:"transparent"}})})}function dD(){const r=me.useRef(null),e=me.useRef(),t=me.useRef(),a=me.useRef(),s=me.useRef({x:0,y:0,inside:!1});return me.useEffect(()=>{function l(u){const f=r.current.getBoundingClientRect(),d=(u.clientX-f.left)/f.width*2-1,h=-((u.clientY-f.top)/f.height*2-1),m=Math.sqrt(d*d+h*h);let _=null;if(t.current){const v=new et(d,h),x=.82,M=new bx;M.setFromCamera(v,t.current);const T=M.ray.origin,S=M.ray.direction,y=(x-T.y)/S.y;_=T.clone().add(S.clone().multiplyScalar(y))}s.current={x:d,y:h,inside:m<.4,world3D:_}}return window.addEventListener("mousemove",l),()=>window.removeEventListener("mousemove",l)},[]),me.useEffect(()=>{const l=new tf;e.current=l;const u=new Dn(60,window.innerWidth/window.innerHeight,.1,100);u.position.set(0,2,4);const f=new sf({antialias:!0});f.setPixelRatio(window.devicePixelRatio),f.setSize(window.innerWidth,window.innerHeight),a.current=f,r.current&&!r.current.contains(f.domElement)&&r.current.appendChild(f.domElement);const d=new Zu(16777215,.5);l.add(d);const h=new Mi(1,48,32);h.applyMatrix4(new ht().makeScale(1,.6,.8));const m=new Gl().load("/assets/speckle.jpg"),_=new co({color:9079434,roughness:.7,map:m}),v=new Ct(h,_);v.scale.set(.3,.3,.3),v.position.set(0,.4,0),v.position.z-=.3,l.add(v);const x=600,M=[],T=new Mi(.008,10,10),S=16579831,y=new yn,b=new Float32Array(x*3);y.setAttribute("position",new Ln(b,3));function w(){return new hi({uniforms:{colorA:{value:new qe(16567686)},colorB:{value:new qe(16428345)},colorC:{value:new qe(1987066)},uOpacity:{value:.3},uLife:{value:0}},vertexShader:`
            varying vec2 vUv;
            void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,fragmentShader:`
uniform vec3 colorA;      // orange
uniform vec3 colorB;      // pink
uniform vec3 colorC;      // blue (for vertical/lifetime)
uniform float uLife;
uniform float uOpacity;
varying vec2 vUv;

void main() {
    vec2 center = vUv - 0.5;
    float dist = length(center) / 0.5;

    // Original vertical/lifetime blend
    vec3 c;
    if(uLife < 0.1) {
      c = mix(colorA, colorB, uLife / 0.5);
    } else {
      c = mix(colorB, colorC, (uLife - 0.1) / 0.5);
    }

    // Blend toward blue at the rim (dist ~1.0)
    c = mix(c, colorC, smoothstep(0.6, 1.0, dist));

    float alpha = smoothstep(1.0, 0.4, dist);
    if(dist > 1.0) discard;
    gl_FragColor = vec4(c, alpha * uOpacity);
}


        `,transparent:!0,depthWrite:!1,blending:Gu})}function A(H=null){const C=new co({color:S,transparent:!0,opacity:.83,emissive:S,roughness:.5}),R=new Ct(T,C);R.position.set((Math.random()-.5)*.05,.82,0),l.add(R);const V=new Ct(new ps(.5,32),w());return V.position.copy(R.position),V.position.z-=.008,l.add(V),{mesh:R,glowMesh:V,life:0,maxLife:80+Math.random()*25,xWaveSeed:Math.random()*Math.PI*20,zWaveSeed:Math.random()*Math.PI*2,flickerSeed:Math.random()*1e3,flickerAmp:.012+Math.random()*.03,branchParams:H,waveAmp:.01,zWaveAmp:.008,waveFreq:4,zWaveFreq:3,motionTimeScale:1}}const P=H=>{if(!f.domElement)return;const C=f.domElement.getBoundingClientRect(),R=(H.clientX-C.left)/C.width*2-1,V=-((H.clientY-C.top)/C.height)*2+1;s.current.x=R,s.current.y=V};f.domElement.addEventListener("pointermove",P);function I(){const H=s.current.inside,C=performance.now()*.003,R=.005,V=H?-s.current.x*.2:0,$=Math.cos(C*.35)*(R*.7);s.current.world3D;for(let he=M.length-1;he>=0;he--){const te=M[he],O=te.life/te.maxLife;te.glowMesh.material.uniforms.uLife.value=O,te.mesh.position.y+=.018+Math.random()*.012*3;const F=1-O*.04;te.mesh.position.x*=F,te.mesh.position.z*=F,te.mesh.position.x+=Math.sin(te.xWaveSeed+O*Math.PI*4)*.03,te.mesh.position.z+=Math.sin(te.zWaveSeed+O*Math.PI*3)*.008,te.mesh.position.z+=$;const k=1.8;if(te.mesh.material.opacity=.8*Math.pow(1-O,k),te.mesh.scale.setScalar(1-O*.72),te.life++,O>=1/10){const de=(O-.1)/.9;te.mesh.position.x+=V*de}const fe=te.mesh.position.clone().project(u),N=fe.x-s.current.x,K=fe.y-s.current.y;Math.sqrt(N*N+K*K)<.2&&(te.mesh.material.opacity=0,te.life=te.maxLife),(te.mesh.material.opacity<=0||te.life>te.maxLife)&&(l.remove(te.mesh),te.glowMesh&&l.remove(te.glowMesh),M.splice(he,1)),te.glowMesh&&(te.glowMesh.position.copy(te.mesh.position),te.glowMesh.position.z-=.01,te.mesh.material.opacity<.2?(te.glowMesh.scale.setScalar(.6),te.glowMesh.material.uniforms.uOpacity.value=te.mesh.material.opacity/35):te.glowMesh.material.uniforms.uOpacity.value=te.mesh.material.opacity/25)}const ie=6;for(let he=0;he<ie&&M.length<x;he++)M.push(A())}function B(){I(),f.render(l,u),requestAnimationFrame(B)}return B(),()=>{cancelAnimationFrame(animationIdRef.current),window.removeEventListener("resize",onResize),f.domElement.removeEventListener("pointermove",P),a.current&&(a.current.dispose(),r.current&&r.current.removeChild(a.current.domElement)),e.current=null,t.current=null,a.current=null}},[]),Cn.jsx("div",{ref:r,style:{width:"100vw",height:"100vh"}})}var Yp=new Map,Du=new WeakMap,Uy=0,pD=void 0;function mD(r){return r?(Du.has(r)||(Uy+=1,Du.set(r,Uy.toString())),Du.get(r)):"0"}function gD(r){return Object.keys(r).sort().filter(e=>r[e]!==void 0).map(e=>`${e}_${e==="root"?mD(r.root):r[e]}`).toString()}function _D(r){const e=gD(r);let t=Yp.get(e);if(!t){const a=new Map;let s;const l=new IntersectionObserver(u=>{u.forEach(f=>{var d;const h=f.isIntersecting&&s.some(m=>f.intersectionRatio>=m);r.trackVisibility&&typeof f.isVisible>"u"&&(f.isVisible=h),(d=a.get(f.target))==null||d.forEach(m=>{m(h,f)})})},r);s=l.thresholds||(Array.isArray(r.threshold)?r.threshold:[r.threshold||0]),t={id:e,observer:l,elements:a},Yp.set(e,t)}return t}function vD(r,e,t={},a=pD){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const d=r.getBoundingClientRect();return e(a,{isIntersecting:a,target:r,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:s,observer:l,elements:u}=_D(t),f=u.get(r)||[];return u.has(r)||u.set(r,f),f.push(e),l.observe(r),function(){f.splice(f.indexOf(e),1),f.length===0&&(u.delete(r),l.unobserve(r)),u.size===0&&(l.disconnect(),Yp.delete(s))}}function yD({threshold:r,delay:e,trackVisibility:t,rootMargin:a,root:s,triggerOnce:l,skip:u,initialInView:f,fallbackInView:d,onChange:h}={}){var m;const[_,v]=me.useState(null),x=me.useRef(h),[M,T]=me.useState({inView:!!f,entry:void 0});x.current=h,me.useEffect(()=>{if(u||!_)return;let w;return w=vD(_,(A,P)=>{T({inView:A,entry:P}),x.current&&x.current(A,P),P.isIntersecting&&l&&w&&(w(),w=void 0)},{root:s,rootMargin:a,threshold:r,trackVisibility:t,delay:e},d),()=>{w&&w()}},[Array.isArray(r)?r.toString():r,_,s,a,l,u,t,d,e]);const S=(m=M.entry)==null?void 0:m.target,y=me.useRef(void 0);!_&&S&&!l&&!u&&y.current!==S&&(y.current=S,T({inView:!!f,entry:void 0}));const b=[v,M.inView,M.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}function Lu({children:r,fade:e=!0,fadeDuration:t=800,style:a={},...s}){const{ref:l,inView:u}=yD({threshold:.4,triggerOnce:!1});return Cn.jsx("section",{ref:l,className:`scene-section${e?" fade-section":""}${u?" is-visible":""}`,style:{...a,minHeight:"100vh",width:"100vw",overflow:"hidden",position:"relative",transition:e?`opacity ${t}ms`:void 0,opacity:e?u?1:0:void 0},...s,children:r})}function xD(){return Cn.jsxs("div",{style:{width:"100vw",overflowX:"hidden"},children:[Cn.jsx(Lu,{children:Cn.jsx(E2,{})}),Cn.jsx(Lu,{children:Cn.jsx(fD,{})}),Cn.jsx(Lu,{children:Cn.jsx(hD,{})}),Cn.jsx(Lu,{children:Cn.jsx(dD,{})})]})}WM.createRoot(document.getElementById("root")).render(Cn.jsx(iT,{children:Cn.jsx(xD,{})}));

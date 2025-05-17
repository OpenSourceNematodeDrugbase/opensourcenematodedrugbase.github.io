(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pe={},Nr=[],Wt=()=>{},km=()=>!1,Do=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ll=t=>t.startsWith("onUpdate:"),ut=Object.assign,Ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dm=Object.prototype.hasOwnProperty,Re=(t,e)=>Dm.call(t,e),ie=Array.isArray,Vr=t=>ai(t)==="[object Map]",Oo=t=>ai(t)==="[object Set]",Iu=t=>ai(t)==="[object Date]",ce=t=>typeof t=="function",je=t=>typeof t=="string",Zt=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",xf=t=>(De(t)||ce(t))&&ce(t.then)&&ce(t.catch),Lf=Object.prototype.toString,ai=t=>Lf.call(t),Om=t=>ai(t).slice(8,-1),Mf=t=>ai(t)==="[object Object]",Fl=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ds=xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),No=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nm=/-(\w)/g,Nt=No(t=>t.replace(Nm,(e,n)=>n?n.toUpperCase():"")),Vm=/\B([A-Z])/g,_r=No(t=>t.replace(Vm,"-$1").toLowerCase()),Vo=No(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ra=No(t=>t?`on${Vo(t)}`:""),Fn=(t,e)=>!Object.is(t,e),Hi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ff=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ja=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Au;const xo=()=>Au||(Au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ul(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?Fm(r):Ul(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||De(t))return t}const xm=/;(?![^(]*\))/g,Lm=/:([^]+)/,Mm=/\/\*[^]*?\*\//g;function Fm(t){const e={};return t.replace(Mm,"").split(xm).forEach(n=>{if(n){const r=n.split(Lm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Bl(t){let e="";if(je(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=Bl(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Um="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bm=xl(Um);function Uf(t){return!!t||t===""}function $m(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Lo(t[r],e[r]);return n}function Lo(t,e){if(t===e)return!0;let n=Iu(t),r=Iu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Zt(t),r=Zt(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?$m(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const l=t.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Lo(t[a],e[a]))return!1}}return String(t)===String(e)}function Bf(t,e){return t.findIndex(n=>Lo(n,e))}const $f=t=>!!(t&&t.__v_isRef===!0),zs=t=>je(t)?t:t==null?"":ie(t)||De(t)&&(t.toString===Lf||!ce(t.toString))?$f(t)?zs(t.value):JSON.stringify(t,jf,2):String(t),jf=(t,e)=>$f(e)?jf(t,e.value):Vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Sa(r,i)+" =>"]=s,n),{})}:Oo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Sa(n))}:Zt(e)?Sa(e):De(e)&&!ie(e)&&!Mf(e)?String(e):e,Sa=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class jm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function qm(){return At}let ke;const Ca=new WeakSet;class qf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,At&&At.active&&At.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bu(this),Kf(this);const e=ke,n=Mt;ke=this,Mt=!0;try{return this.fn()}finally{Wf(this),ke=e,Mt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ql(e);this.deps=this.depsTail=void 0,bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xa(this)&&this.run()}get dirty(){return Xa(this)}}let Hf=0,Os,Ns;function zf(t,e=!1){if(t.flags|=8,e){t.next=Ns,Ns=t;return}t.next=Os,Os=t}function $l(){Hf++}function jl(){if(--Hf>0)return;if(Ns){let e=Ns;for(Ns=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Os;){let e=Os;for(Os=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Kf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wf(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ql(r),Hm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Xa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Gf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Gf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ks))return;t.globalVersion=Ks;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Xa(t)){t.flags&=-3;return}const n=ke,r=Mt;ke=t,Mt=!0;try{Kf(t);const s=t.fn(t._value);(e.version===0||Fn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=n,Mt=r,Wf(t),t.flags&=-3}}function ql(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ql(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Hm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Mt=!0;const Qf=[];function Yn(){Qf.push(Mt),Mt=!1}function Jn(){const t=Qf.pop();Mt=t===void 0?!0:t}function bu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ke;ke=void 0;try{e()}finally{ke=n}}}let Ks=0;class zm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ke||!Mt||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new zm(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,Yf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=r)}return n}trigger(e){this.version++,Ks++,this.notify(e)}notify(e){$l();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{jl()}}}function Yf(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Yf(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Za=new WeakMap,cr=Symbol(""),el=Symbol(""),Ws=Symbol("");function it(t,e,n){if(Mt&&ke){let r=Za.get(t);r||Za.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Hl),s.map=r,s.key=n),s.track()}}function cn(t,e,n,r,s,i){const a=Za.get(t);if(!a){Ks++;return}const l=c=>{c&&c.trigger()};if($l(),e==="clear")a.forEach(l);else{const c=ie(t),h=c&&Fl(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Ws||!Zt(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Ws)),e){case"add":c?h&&l(a.get("length")):(l(a.get(cr)),Vr(t)&&l(a.get(el)));break;case"delete":c||(l(a.get(cr)),Vr(t)&&l(a.get(el)));break;case"set":Vr(t)&&l(a.get(cr));break}}jl()}function Ar(t){const e=be(t);return e===t?e:(it(e,"iterate",Ws),Ot(t)?e:e.map(ot))}function Mo(t){return it(t=be(t),"iterate",Ws),t}const Km={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,ot)},concat(...t){return Ar(this).concat(...t.map(e=>ie(e)?Ar(e):e))},entries(){return Pa(this,"entries",t=>(t[1]=ot(t[1]),t))},every(t,e){return on(this,"every",t,e,void 0,arguments)},filter(t,e){return on(this,"filter",t,e,n=>n.map(ot),arguments)},find(t,e){return on(this,"find",t,e,ot,arguments)},findIndex(t,e){return on(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return on(this,"findLast",t,e,ot,arguments)},findLastIndex(t,e){return on(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return on(this,"forEach",t,e,void 0,arguments)},includes(...t){return ka(this,"includes",t)},indexOf(...t){return ka(this,"indexOf",t)},join(t){return Ar(this).join(t)},lastIndexOf(...t){return ka(this,"lastIndexOf",t)},map(t,e){return on(this,"map",t,e,void 0,arguments)},pop(){return Ts(this,"pop")},push(...t){return Ts(this,"push",t)},reduce(t,...e){return Ru(this,"reduce",t,e)},reduceRight(t,...e){return Ru(this,"reduceRight",t,e)},shift(){return Ts(this,"shift")},some(t,e){return on(this,"some",t,e,void 0,arguments)},splice(...t){return Ts(this,"splice",t)},toReversed(){return Ar(this).toReversed()},toSorted(t){return Ar(this).toSorted(t)},toSpliced(...t){return Ar(this).toSpliced(...t)},unshift(...t){return Ts(this,"unshift",t)},values(){return Pa(this,"values",ot)}};function Pa(t,e,n){const r=Mo(t),s=r[e]();return r!==t&&!Ot(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Wm=Array.prototype;function on(t,e,n,r,s,i){const a=Mo(t),l=a!==t&&!Ot(t),c=a[e];if(c!==Wm[e]){const p=c.apply(t,i);return l?ot(p):p}let h=n;a!==t&&(l?h=function(p,m){return n.call(this,ot(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Ru(t,e,n,r){const s=Mo(t);let i=n;return s!==t&&(Ot(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,ot(l),c,t)}),s[e](i,...r)}function ka(t,e,n){const r=be(t);it(r,"iterate",Ws);const s=r[e](...n);return(s===-1||s===!1)&&Wl(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function Ts(t,e,n=[]){Yn(),$l();const r=be(t)[e].apply(t,n);return jl(),Jn(),r}const Gm=xl("__proto__,__v_isRef,__isVue"),Jf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt));function Qm(t){Zt(t)||(t=String(t));const e=be(this);return it(e,"has",t),e.hasOwnProperty(t)}class Xf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?i_:nd:i?td:ed).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let c;if(a&&(c=Km[n]))return c;if(n==="hasOwnProperty")return Qm}const l=Reflect.get(e,n,ct(e)?e:r);return(Zt(n)?Jf.has(n):Gm(n))||(s||it(e,"get",n),i)?l:ct(l)?a&&Fl(n)?l:l.value:De(l)?s?sd(l):Fo(l):l}}class Zf extends Xf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=fr(i);if(!Ot(r)&&!fr(r)&&(i=be(i),r=be(r)),!ie(e)&&ct(i)&&!ct(r))return c?!1:(i.value=r,!0)}const a=ie(e)&&Fl(n)?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,ct(e)?e:s);return e===be(s)&&(a?Fn(r,i)&&cn(e,"set",n,r):cn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Zt(n)||!Jf.has(n))&&it(e,"has",n),r}ownKeys(e){return it(e,"iterate",ie(e)?"length":cr),Reflect.ownKeys(e)}}class Ym extends Xf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Jm=new Zf,Xm=new Ym,Zm=new Zf(!0);const tl=t=>t,xi=t=>Reflect.getPrototypeOf(t);function e_(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),a=Vr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?tl:e?nl:ot;return!e&&it(i,"iterate",c?el:cr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Li(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function t_(t,e){const n={get(s){const i=this.__v_raw,a=be(i),l=be(s);t||(Fn(s,l)&&it(a,"get",s),it(a,"get",l));const{has:c}=xi(a),h=e?tl:t?nl:ot;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&it(be(s),"iterate",cr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=be(i),l=be(s);return t||(Fn(s,l)&&it(a,"has",s),it(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=be(l),h=e?tl:t?nl:ot;return!t&&it(c,"iterate",cr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return ut(n,t?{add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear")}:{add(s){!e&&!Ot(s)&&!fr(s)&&(s=be(s));const i=be(this);return xi(i).has.call(i,s)||(i.add(s),cn(i,"add",s,s)),this},set(s,i){!e&&!Ot(i)&&!fr(i)&&(i=be(i));const a=be(this),{has:l,get:c}=xi(a);let h=l.call(a,s);h||(s=be(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Fn(i,d)&&cn(a,"set",s,i):cn(a,"add",s,i),this},delete(s){const i=be(this),{has:a,get:l}=xi(i);let c=a.call(i,s);c||(s=be(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&cn(i,"delete",s,void 0),h},clear(){const s=be(this),i=s.size!==0,a=s.clear();return i&&cn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=e_(s,t,e)}),n}function zl(t,e){const n=t_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const n_={get:zl(!1,!1)},r_={get:zl(!1,!0)},s_={get:zl(!0,!1)};const ed=new WeakMap,td=new WeakMap,nd=new WeakMap,i_=new WeakMap;function o_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a_(t){return t.__v_skip||!Object.isExtensible(t)?0:o_(Om(t))}function Fo(t){return fr(t)?t:Kl(t,!1,Jm,n_,ed)}function rd(t){return Kl(t,!1,Zm,r_,td)}function sd(t){return Kl(t,!0,Xm,s_,nd)}function Kl(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=a_(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function xr(t){return fr(t)?xr(t.__v_raw):!!(t&&t.__v_isReactive)}function fr(t){return!!(t&&t.__v_isReadonly)}function Ot(t){return!!(t&&t.__v_isShallow)}function Wl(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function l_(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Ff(t,"__v_skip",!0),t}const ot=t=>De(t)?Fo(t):t,nl=t=>De(t)?sd(t):t;function ct(t){return t?t.__v_isRef===!0:!1}function zi(t){return id(t,!1)}function c_(t){return id(t,!0)}function id(t,e){return ct(t)?t:new u_(t,e)}class u_{constructor(e,n){this.dep=new Hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:ot(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ot(e)||fr(e);e=r?e:be(e),Fn(e,n)&&(this._rawValue=e,this._value=r?e:ot(e),this.dep.trigger())}}function Lr(t){return ct(t)?t.value:t}const h_={get:(t,e,n)=>e==="__v_raw"?t:Lr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ct(s)&&!ct(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function od(t){return xr(t)?t:new Proxy(t,h_)}class f_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return zf(this,!0),!0}get value(){const e=this.dep.track();return Gf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function d_(t,e,n=!1){let r,s;return ce(t)?r=t:(r=t.get,s=t.set),new f_(r,s,n)}const Mi={},ao=new WeakMap;let ir;function p_(t,e=!1,n=ir){if(n){let r=ao.get(n);r||ao.set(n,r=[]),r.push(t)}}function g_(t,e,n=Pe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=H=>s?H:Ot(H)||s===!1||s===0?un(H,1):un(H);let d,p,m,T,k=!1,x=!1;if(ct(t)?(p=()=>t.value,k=Ot(t)):xr(t)?(p=()=>h(t),k=!0):ie(t)?(x=!0,k=t.some(H=>xr(H)||Ot(H)),p=()=>t.map(H=>{if(ct(H))return H.value;if(xr(H))return h(H);if(ce(H))return c?c(H,2):H()})):ce(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Yn();try{m()}finally{Jn()}}const H=ir;ir=d;try{return c?c(t,3,[T]):t(T)}finally{ir=H}}:p=Wt,e&&s){const H=p,fe=s===!0?1/0:s;p=()=>un(H(),fe)}const M=qm(),W=()=>{d.stop(),M&&M.active&&Ml(M.effects,d)};if(i&&e){const H=e;e=(...fe)=>{H(...fe),W()}}let B=x?new Array(t.length).fill(Mi):Mi;const K=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const fe=d.run();if(s||k||(x?fe.some((de,I)=>Fn(de,B[I])):Fn(fe,B))){m&&m();const de=ir;ir=d;try{const I=[fe,B===Mi?void 0:x&&B[0]===Mi?[]:B,T];c?c(e,3,I):e(...I),B=fe}finally{ir=de}}}else d.run()};return l&&l(K),d=new qf(p),d.scheduler=a?()=>a(K,!1):K,T=H=>p_(H,!1,d),m=d.onStop=()=>{const H=ao.get(d);if(H){if(c)c(H,4);else for(const fe of H)fe();ao.delete(d)}},e?r?K(!0):B=d.run():a?a(K.bind(null,!0),!0):d.run(),W.pause=d.pause.bind(d),W.resume=d.resume.bind(d),W.stop=W,W}function un(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ct(t))un(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)un(t[r],e,n);else if(Oo(t)||Vr(t))t.forEach(r=>{un(r,e,n)});else if(Mf(t)){for(const r in t)un(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&un(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function li(t,e,n,r){try{return r?t(...r):t()}catch(s){Uo(s,e,n)}}function en(t,e,n,r){if(ce(t)){const s=li(t,e,n,r);return s&&xf(s)&&s.catch(i=>{Uo(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(en(t[i],e,n,r));return s}}function Uo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Pe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){Yn(),li(i,null,10,[t,c,h]),Jn();return}}m_(t,n,s,r,a)}function m_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const gt=[];let jt=-1;const Mr=[];let Pn=null,br=0;const ad=Promise.resolve();let lo=null;function ld(t){const e=lo||ad;return t?e.then(this?t.bind(this):t):e}function __(t){let e=jt+1,n=gt.length;for(;e<n;){const r=e+n>>>1,s=gt[r],i=Gs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Gl(t){if(!(t.flags&1)){const e=Gs(t),n=gt[gt.length-1];!n||!(t.flags&2)&&e>=Gs(n)?gt.push(t):gt.splice(__(e),0,t),t.flags|=1,cd()}}function cd(){lo||(lo=ad.then(hd))}function y_(t){ie(t)?Mr.push(...t):Pn&&t.id===-1?Pn.splice(br+1,0,t):t.flags&1||(Mr.push(t),t.flags|=1),cd()}function Su(t,e,n=jt+1){for(;n<gt.length;n++){const r=gt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;gt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function ud(t){if(Mr.length){const e=[...new Set(Mr)].sort((n,r)=>Gs(n)-Gs(r));if(Mr.length=0,Pn){Pn.push(...e);return}for(Pn=e,br=0;br<Pn.length;br++){const n=Pn[br];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Pn=null,br=0}}const Gs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hd(t){try{for(jt=0;jt<gt.length;jt++){const e=gt[jt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),li(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jt<gt.length;jt++){const e=gt[jt];e&&(e.flags&=-2)}jt=-1,gt.length=0,ud(),lo=null,(gt.length||Mr.length)&&hd()}}let bt=null,fd=null;function co(t){const e=bt;return bt=t,fd=t&&t.type.__scopeId||null,e}function hn(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Mu(-1);const i=co(e);let a;try{a=t(...s)}finally{co(i),r._d&&Mu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Dr(t,e){if(bt===null)return t;const n=Ho(bt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Pe]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&un(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function rr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Yn(),en(c,n,8,[t.el,l,t,e]),Jn())}}const v_=Symbol("_vte"),E_=t=>t.__isTeleport;function Ql(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ql(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function dd(t,e){return ce(t)?ut({name:t.name},e,{setup:t}):t}function pd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function uo(t,e,n,r,s=!1){if(ie(t)){t.forEach((k,x)=>uo(k,e&&(ie(e)?e[x]:e),n,r,s));return}if(Vs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&uo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ho(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Pe?l.refs={}:l.refs,p=l.setupState,m=be(p),T=p===Pe?()=>!1:k=>Re(m,k);if(h!=null&&h!==c&&(je(h)?(d[h]=null,T(h)&&(p[h]=null)):ct(h)&&(h.value=null)),ce(c))li(c,l,12,[a,d]);else{const k=je(c),x=ct(c);if(k||x){const M=()=>{if(t.f){const W=k?T(c)?p[c]:d[c]:c.value;s?ie(W)&&Ml(W,i):ie(W)?W.includes(i)||W.push(i):k?(d[c]=[i],T(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else k?(d[c]=a,T(c)&&(p[c]=a)):x&&(c.value=a,t.k&&(d[t.k]=a))};a?(M.id=-1,It(M,n)):M()}}}xo().requestIdleCallback;xo().cancelIdleCallback;const Vs=t=>!!t.type.__asyncLoader,gd=t=>t.type.__isKeepAlive;function T_(t,e){md(t,"a",e)}function w_(t,e){md(t,"da",e)}function md(t,e,n=lt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Bo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)gd(s.parent.vnode)&&I_(r,e,n,s),s=s.parent}}function I_(t,e,n,r){const s=Bo(e,t,r,!0);_d(()=>{Ml(r[e],s)},n)}function Bo(t,e,n=lt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Yn();const l=ci(n),c=en(e,n,t,a);return l(),Jn(),c});return r?s.unshift(i):s.push(i),i}}const vn=t=>(e,n=lt)=>{(!Ys||t==="sp")&&Bo(t,(...r)=>e(...r),n)},A_=vn("bm"),b_=vn("m"),R_=vn("bu"),S_=vn("u"),C_=vn("bum"),_d=vn("um"),P_=vn("sp"),k_=vn("rtg"),D_=vn("rtc");function O_(t,e=lt){Bo("ec",t,e)}const N_="components";function zt(t,e){return x_(N_,t,!0,e)||t}const V_=Symbol.for("v-ndc");function x_(t,e,n=!0,r=!1){const s=bt||lt;if(s){const i=s.type;{const l=Iy(i,!1);if(l&&(l===e||l===Nt(e)||l===Vo(Nt(e))))return i}const a=Cu(s[t]||i[t],e)||Cu(s.appContext[t],e);return!a&&r?i:a}}function Cu(t,e){return t&&(t[e]||t[Nt(e)]||t[Vo(Nt(e))])}function L_(t,e,n,r){let s;const i=n,a=ie(t);if(a||je(t)){const l=a&&xr(t);let c=!1;l&&(c=!Ot(t),t=Mo(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?ot(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const rl=t=>t?Fd(t)?Ho(t):rl(t.parent):null,xs=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>rl(t.parent),$root:t=>rl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>vd(t),$forceUpdate:t=>t.f||(t.f=()=>{Gl(t.update)}),$nextTick:t=>t.n||(t.n=ld.bind(t.proxy)),$watch:t=>ry.bind(t)}),Da=(t,e)=>t!==Pe&&!t.__isScriptSetup&&Re(t,e),M_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const T=a[e];if(T!==void 0)switch(T){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Da(r,e))return a[e]=1,r[e];if(s!==Pe&&Re(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return a[e]=3,i[e];if(n!==Pe&&Re(n,e))return a[e]=4,n[e];sl&&(a[e]=0)}}const d=xs[e];let p,m;if(d)return e==="$attrs"&&it(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Pe&&Re(n,e))return a[e]=4,n[e];if(m=c.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Da(s,e)?(s[e]=n,!0):r!==Pe&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Pe&&Re(t,a)||Da(e,a)||(l=i[0])&&Re(l,a)||Re(r,a)||Re(xs,a)||Re(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pu(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let sl=!0;function F_(t){const e=vd(t),n=t.proxy,r=t.ctx;sl=!1,e.beforeCreate&&ku(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:T,updated:k,activated:x,deactivated:M,beforeDestroy:W,beforeUnmount:B,destroyed:K,unmounted:H,render:fe,renderTracked:de,renderTriggered:I,errorCaptured:_,serverPrefetch:w,expose:A,inheritAttrs:b,components:S,directives:E,filters:ft}=e;if(h&&U_(h,r,null),a)for(const me in a){const pe=a[me];ce(pe)&&(r[me]=pe.bind(n))}if(s){const me=s.call(n,n);De(me)&&(t.data=Fo(me))}if(sl=!0,i)for(const me in i){const pe=i[me],Tt=ce(pe)?pe.bind(n,n):ce(pe.get)?pe.get.bind(n,n):Wt,Vt=!ce(pe)&&ce(pe.set)?pe.set.bind(n):Wt,Ct=Lt({get:Tt,set:Vt});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Ct.value,set:Ve=>Ct.value=Ve})}if(l)for(const me in l)yd(l[me],r,n,me);if(c){const me=ce(c)?c.call(n):c;Reflect.ownKeys(me).forEach(pe=>{Ki(pe,me[pe])})}d&&ku(d,t,"c");function Be(me,pe){ie(pe)?pe.forEach(Tt=>me(Tt.bind(n))):pe&&me(pe.bind(n))}if(Be(A_,p),Be(b_,m),Be(R_,T),Be(S_,k),Be(T_,x),Be(w_,M),Be(O_,_),Be(D_,de),Be(k_,I),Be(C_,B),Be(_d,H),Be(P_,w),ie(A))if(A.length){const me=t.exposed||(t.exposed={});A.forEach(pe=>{Object.defineProperty(me,pe,{get:()=>n[pe],set:Tt=>n[pe]=Tt})})}else t.exposed||(t.exposed={});fe&&t.render===Wt&&(t.render=fe),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),E&&(t.directives=E),w&&pd(t)}function U_(t,e,n=Wt){ie(t)&&(t=il(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=Gt(s.from||r,s.default,!0):i=Gt(s.from||r):i=Gt(s),ct(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function ku(t,e,n){en(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function yd(t,e,n,r){let s=r.includes(".")?Nd(n,r):()=>n[r];if(je(t)){const i=e[t];ce(i)&&Wi(s,i)}else if(ce(t))Wi(s,t.bind(n));else if(De(t))if(ie(t))t.forEach(i=>yd(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&Wi(s,i,t)}}function vd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>ho(c,h,a,!0)),ho(c,e,a)),De(e)&&i.set(e,c),c}function ho(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ho(t,i,n,!0),s&&s.forEach(a=>ho(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=B_[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const B_={data:Du,props:Ou,emits:Ou,methods:As,computed:As,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:As,directives:As,watch:j_,provide:Du,inject:$_};function Du(t,e){return e?t?function(){return ut(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function $_(t,e){return As(il(t),il(e))}function il(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function As(t,e){return t?ut(Object.create(null),t,e):e}function Ou(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:ut(Object.create(null),Pu(t),Pu(e??{})):e}function j_(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function Ed(){return{app:null,config:{isNativeTag:km,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let q_=0;function H_(t,e){return function(r,s=null){ce(r)||(r=ut({},r)),s!=null&&!De(s)&&(s=null);const i=Ed(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:q_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:by,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ce(d.install)?(a.add(d),d.install(h,...p)):ce(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const T=h._ceVNode||Se(r,s);return T.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(T,d,m),c=!0,h._container=d,d.__vue_app__=h,Ho(T.component)}},onUnmount(d){l.push(d)},unmount(){c&&(en(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Fr;Fr=h;try{return d()}finally{Fr=p}}};return h}}let Fr=null;function Ki(t,e){if(lt){let n=lt.provides;const r=lt.parent&&lt.parent.provides;r===n&&(n=lt.provides=Object.create(r)),n[t]=e}}function Gt(t,e,n=!1){const r=lt||bt;if(r||Fr){const s=Fr?Fr._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}const Td={},wd=()=>Object.create(Td),Id=t=>Object.getPrototypeOf(t)===Td;function z_(t,e,n,r=!1){const s={},i=wd();t.propsDefaults=Object.create(null),Ad(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:rd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function K_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=be(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if($o(t.emitsOptions,m))continue;const T=e[m];if(c)if(Re(i,m))T!==i[m]&&(i[m]=T,h=!0);else{const k=Nt(m);s[k]=ol(c,l,k,T,t,!1)}else T!==i[m]&&(i[m]=T,h=!0)}}}else{Ad(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Re(e,p)&&((d=_r(p))===p||!Re(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=ol(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&cn(t.attrs,"set","")}function Ad(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ds(c))continue;const h=e[c];let d;s&&Re(s,d=Nt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:$o(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=be(n),h=l||Pe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ol(s,c,p,h[p],t,!Re(h,p))}}return a}function ol(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Re(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ce(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=ci(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===_r(n))&&(r=!0))}return r}const W_=new WeakMap;function bd(t,e,n=!1){const r=n?W_:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ce(t)){const d=p=>{c=!0;const[m,T]=bd(p,e,!0);ut(a,m),T&&l.push(...T)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return De(t)&&r.set(t,Nr),Nr;if(ie(i))for(let d=0;d<i.length;d++){const p=Nt(i[d]);Nu(p)&&(a[p]=Pe)}else if(i)for(const d in i){const p=Nt(d);if(Nu(p)){const m=i[d],T=a[p]=ie(m)||ce(m)?{type:m}:ut({},m),k=T.type;let x=!1,M=!0;if(ie(k))for(let W=0;W<k.length;++W){const B=k[W],K=ce(B)&&B.name;if(K==="Boolean"){x=!0;break}else K==="String"&&(M=!1)}else x=ce(k)&&k.name==="Boolean";T[0]=x,T[1]=M,(x||Re(T,"default"))&&l.push(p)}}const h=[a,l];return De(t)&&r.set(t,h),h}function Nu(t){return t[0]!=="$"&&!Ds(t)}const Rd=t=>t[0]==="_"||t==="$stable",Yl=t=>ie(t)?t.map(qt):[qt(t)],G_=(t,e,n)=>{if(e._n)return e;const r=hn((...s)=>Yl(e(...s)),n);return r._c=!1,r},Sd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Rd(s))continue;const i=t[s];if(ce(i))e[s]=G_(s,i,r);else if(i!=null){const a=Yl(i);e[s]=()=>a}}},Cd=(t,e)=>{const n=Yl(e);t.slots.default=()=>n},Pd=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Q_=(t,e,n)=>{const r=t.slots=wd();if(t.vnode.shapeFlag&32){const s=e._;s?(Pd(r,e,n),n&&Ff(r,"_",s,!0)):Sd(e,r)}else e&&Cd(t,e)},Y_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Pe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Pd(s,e,n):(i=!e.$stable,Sd(e,s)),a=e}else e&&(Cd(t,e),a={default:1});if(i)for(const l in s)!Rd(l)&&a[l]==null&&delete s[l]},It=uy;function J_(t){return X_(t)}function X_(t,e){const n=xo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:T=Wt,insertStaticContent:k}=t,x=(y,v,R,O=null,L=null,N=null,G=void 0,$=null,U=!!v.dynamicChildren)=>{if(y===v)return;y&&!ws(y,v)&&(O=D(y),Ve(y,L,N,!0),y=null),v.patchFlag===-2&&(U=!1,v.dynamicChildren=null);const{type:F,ref:ne,shapeFlag:Y}=v;switch(F){case jo:M(y,v,R,O);break;case dr:W(y,v,R,O);break;case Gi:y==null&&B(v,R,O,G);break;case Dt:S(y,v,R,O,L,N,G,$,U);break;default:Y&1?fe(y,v,R,O,L,N,G,$,U):Y&6?E(y,v,R,O,L,N,G,$,U):(Y&64||Y&128)&&F.process(y,v,R,O,L,N,G,$,U,Z)}ne!=null&&L&&uo(ne,y&&y.ref,N,v||y,!v)},M=(y,v,R,O)=>{if(y==null)r(v.el=l(v.children),R,O);else{const L=v.el=y.el;v.children!==y.children&&h(L,v.children)}},W=(y,v,R,O)=>{y==null?r(v.el=c(v.children||""),R,O):v.el=y.el},B=(y,v,R,O)=>{[y.el,y.anchor]=k(y.children,v,R,O,y.el,y.anchor)},K=({el:y,anchor:v},R,O)=>{let L;for(;y&&y!==v;)L=m(y),r(y,R,O),y=L;r(v,R,O)},H=({el:y,anchor:v})=>{let R;for(;y&&y!==v;)R=m(y),s(y),y=R;s(v)},fe=(y,v,R,O,L,N,G,$,U)=>{v.type==="svg"?G="svg":v.type==="math"&&(G="mathml"),y==null?de(v,R,O,L,N,G,$,U):w(y,v,L,N,G,$,U)},de=(y,v,R,O,L,N,G,$)=>{let U,F;const{props:ne,shapeFlag:Y,transition:ee,dirs:oe}=y;if(U=y.el=a(y.type,N,ne&&ne.is,ne),Y&8?d(U,y.children):Y&16&&_(y.children,U,null,O,L,Oa(y,N),G,$),oe&&rr(y,null,O,"created"),I(U,y,y.scopeId,G,O),ne){for(const ue in ne)ue!=="value"&&!Ds(ue)&&i(U,ue,null,ne[ue],N,O);"value"in ne&&i(U,"value",null,ne.value,N),(F=ne.onVnodeBeforeMount)&&$t(F,O,y)}oe&&rr(y,null,O,"beforeMount");const re=Z_(L,ee);re&&ee.beforeEnter(U),r(U,v,R),((F=ne&&ne.onVnodeMounted)||re||oe)&&It(()=>{F&&$t(F,O,y),re&&ee.enter(U),oe&&rr(y,null,O,"mounted")},L)},I=(y,v,R,O,L)=>{if(R&&T(y,R),O)for(let N=0;N<O.length;N++)T(y,O[N]);if(L){let N=L.subTree;if(v===N||xd(N.type)&&(N.ssContent===v||N.ssFallback===v)){const G=L.vnode;I(y,G,G.scopeId,G.slotScopeIds,L.parent)}}},_=(y,v,R,O,L,N,G,$,U=0)=>{for(let F=U;F<y.length;F++){const ne=y[F]=$?kn(y[F]):qt(y[F]);x(null,ne,v,R,O,L,N,G,$)}},w=(y,v,R,O,L,N,G)=>{const $=v.el=y.el;let{patchFlag:U,dynamicChildren:F,dirs:ne}=v;U|=y.patchFlag&16;const Y=y.props||Pe,ee=v.props||Pe;let oe;if(R&&sr(R,!1),(oe=ee.onVnodeBeforeUpdate)&&$t(oe,R,v,y),ne&&rr(v,y,R,"beforeUpdate"),R&&sr(R,!0),(Y.innerHTML&&ee.innerHTML==null||Y.textContent&&ee.textContent==null)&&d($,""),F?A(y.dynamicChildren,F,$,R,O,Oa(v,L),N):G||pe(y,v,$,null,R,O,Oa(v,L),N,!1),U>0){if(U&16)b($,Y,ee,R,L);else if(U&2&&Y.class!==ee.class&&i($,"class",null,ee.class,L),U&4&&i($,"style",Y.style,ee.style,L),U&8){const re=v.dynamicProps;for(let ue=0;ue<re.length;ue++){const _e=re[ue],Ze=Y[_e],Ge=ee[_e];(Ge!==Ze||_e==="value")&&i($,_e,Ze,Ge,L,R)}}U&1&&y.children!==v.children&&d($,v.children)}else!G&&F==null&&b($,Y,ee,R,L);((oe=ee.onVnodeUpdated)||ne)&&It(()=>{oe&&$t(oe,R,v,y),ne&&rr(v,y,R,"updated")},O)},A=(y,v,R,O,L,N,G)=>{for(let $=0;$<v.length;$++){const U=y[$],F=v[$],ne=U.el&&(U.type===Dt||!ws(U,F)||U.shapeFlag&70)?p(U.el):R;x(U,F,ne,null,O,L,N,G,!0)}},b=(y,v,R,O,L)=>{if(v!==R){if(v!==Pe)for(const N in v)!Ds(N)&&!(N in R)&&i(y,N,v[N],null,L,O);for(const N in R){if(Ds(N))continue;const G=R[N],$=v[N];G!==$&&N!=="value"&&i(y,N,$,G,L,O)}"value"in R&&i(y,"value",v.value,R.value,L)}},S=(y,v,R,O,L,N,G,$,U)=>{const F=v.el=y?y.el:l(""),ne=v.anchor=y?y.anchor:l("");let{patchFlag:Y,dynamicChildren:ee,slotScopeIds:oe}=v;oe&&($=$?$.concat(oe):oe),y==null?(r(F,R,O),r(ne,R,O),_(v.children||[],R,ne,L,N,G,$,U)):Y>0&&Y&64&&ee&&y.dynamicChildren?(A(y.dynamicChildren,ee,R,L,N,G,$),(v.key!=null||L&&v===L.subTree)&&kd(y,v,!0)):pe(y,v,R,ne,L,N,G,$,U)},E=(y,v,R,O,L,N,G,$,U)=>{v.slotScopeIds=$,y==null?v.shapeFlag&512?L.ctx.activate(v,R,O,G,U):ft(v,R,O,L,N,G,U):St(y,v,U)},ft=(y,v,R,O,L,N,G)=>{const $=y.component=yy(y,O,L);if(gd(y)&&($.ctx.renderer=Z),vy($,!1,G),$.asyncDep){if(L&&L.registerDep($,Be,G),!y.el){const U=$.subTree=Se(dr);W(null,U,v,R)}}else Be($,y,v,R,L,N,G)},St=(y,v,R)=>{const O=v.component=y.component;if(ly(y,v,R))if(O.asyncDep&&!O.asyncResolved){me(O,v,R);return}else O.next=v,O.update();else v.el=y.el,O.vnode=v},Be=(y,v,R,O,L,N,G)=>{const $=()=>{if(y.isMounted){let{next:Y,bu:ee,u:oe,parent:re,vnode:ue}=y;{const et=Dd(y);if(et){Y&&(Y.el=ue.el,me(y,Y,G)),et.asyncDep.then(()=>{y.isUnmounted||$()});return}}let _e=Y,Ze;sr(y,!1),Y?(Y.el=ue.el,me(y,Y,G)):Y=ue,ee&&Hi(ee),(Ze=Y.props&&Y.props.onVnodeBeforeUpdate)&&$t(Ze,re,Y,ue),sr(y,!0);const Ge=xu(y),Pt=y.subTree;y.subTree=Ge,x(Pt,Ge,p(Pt.el),D(Pt),y,L,N),Y.el=Ge.el,_e===null&&cy(y,Ge.el),oe&&It(oe,L),(Ze=Y.props&&Y.props.onVnodeUpdated)&&It(()=>$t(Ze,re,Y,ue),L)}else{let Y;const{el:ee,props:oe}=v,{bm:re,m:ue,parent:_e,root:Ze,type:Ge}=y,Pt=Vs(v);sr(y,!1),re&&Hi(re),!Pt&&(Y=oe&&oe.onVnodeBeforeMount)&&$t(Y,_e,v),sr(y,!0);{Ze.ce&&Ze.ce._injectChildStyle(Ge);const et=y.subTree=xu(y);x(null,et,R,O,y,L,N),v.el=et.el}if(ue&&It(ue,L),!Pt&&(Y=oe&&oe.onVnodeMounted)){const et=v;It(()=>$t(Y,_e,et),L)}(v.shapeFlag&256||_e&&Vs(_e.vnode)&&_e.vnode.shapeFlag&256)&&y.a&&It(y.a,L),y.isMounted=!0,v=R=O=null}};y.scope.on();const U=y.effect=new qf($);y.scope.off();const F=y.update=U.run.bind(U),ne=y.job=U.runIfDirty.bind(U);ne.i=y,ne.id=y.uid,U.scheduler=()=>Gl(ne),sr(y,!0),F()},me=(y,v,R)=>{v.component=y;const O=y.vnode.props;y.vnode=v,y.next=null,K_(y,v.props,O,R),Y_(y,v.children,R),Yn(),Su(y),Jn()},pe=(y,v,R,O,L,N,G,$,U=!1)=>{const F=y&&y.children,ne=y?y.shapeFlag:0,Y=v.children,{patchFlag:ee,shapeFlag:oe}=v;if(ee>0){if(ee&128){Vt(F,Y,R,O,L,N,G,$,U);return}else if(ee&256){Tt(F,Y,R,O,L,N,G,$,U);return}}oe&8?(ne&16&&yt(F,L,N),Y!==F&&d(R,Y)):ne&16?oe&16?Vt(F,Y,R,O,L,N,G,$,U):yt(F,L,N,!0):(ne&8&&d(R,""),oe&16&&_(Y,R,O,L,N,G,$,U))},Tt=(y,v,R,O,L,N,G,$,U)=>{y=y||Nr,v=v||Nr;const F=y.length,ne=v.length,Y=Math.min(F,ne);let ee;for(ee=0;ee<Y;ee++){const oe=v[ee]=U?kn(v[ee]):qt(v[ee]);x(y[ee],oe,R,null,L,N,G,$,U)}F>ne?yt(y,L,N,!0,!1,Y):_(v,R,O,L,N,G,$,U,Y)},Vt=(y,v,R,O,L,N,G,$,U)=>{let F=0;const ne=v.length;let Y=y.length-1,ee=ne-1;for(;F<=Y&&F<=ee;){const oe=y[F],re=v[F]=U?kn(v[F]):qt(v[F]);if(ws(oe,re))x(oe,re,R,null,L,N,G,$,U);else break;F++}for(;F<=Y&&F<=ee;){const oe=y[Y],re=v[ee]=U?kn(v[ee]):qt(v[ee]);if(ws(oe,re))x(oe,re,R,null,L,N,G,$,U);else break;Y--,ee--}if(F>Y){if(F<=ee){const oe=ee+1,re=oe<ne?v[oe].el:O;for(;F<=ee;)x(null,v[F]=U?kn(v[F]):qt(v[F]),R,re,L,N,G,$,U),F++}}else if(F>ee)for(;F<=Y;)Ve(y[F],L,N,!0),F++;else{const oe=F,re=F,ue=new Map;for(F=re;F<=ee;F++){const Qe=v[F]=U?kn(v[F]):qt(v[F]);Qe.key!=null&&ue.set(Qe.key,F)}let _e,Ze=0;const Ge=ee-re+1;let Pt=!1,et=0;const In=new Array(Ge);for(F=0;F<Ge;F++)In[F]=0;for(F=oe;F<=Y;F++){const Qe=y[F];if(Ze>=Ge){Ve(Qe,L,N,!0);continue}let kt;if(Qe.key!=null)kt=ue.get(Qe.key);else for(_e=re;_e<=ee;_e++)if(In[_e-re]===0&&ws(Qe,v[_e])){kt=_e;break}kt===void 0?Ve(Qe,L,N,!0):(In[kt-re]=F+1,kt>=et?et=kt:Pt=!0,x(Qe,v[kt],R,null,L,N,G,$,U),Ze++)}const ls=Pt?ey(In):Nr;for(_e=ls.length-1,F=Ge-1;F>=0;F--){const Qe=re+F,kt=v[Qe],vi=Qe+1<ne?v[Qe+1].el:O;In[F]===0?x(null,kt,R,vi,L,N,G,$,U):Pt&&(_e<0||F!==ls[_e]?Ct(kt,R,vi,2):_e--)}}},Ct=(y,v,R,O,L=null)=>{const{el:N,type:G,transition:$,children:U,shapeFlag:F}=y;if(F&6){Ct(y.component.subTree,v,R,O);return}if(F&128){y.suspense.move(v,R,O);return}if(F&64){G.move(y,v,R,Z);return}if(G===Dt){r(N,v,R);for(let Y=0;Y<U.length;Y++)Ct(U[Y],v,R,O);r(y.anchor,v,R);return}if(G===Gi){K(y,v,R);return}if(O!==2&&F&1&&$)if(O===0)$.beforeEnter(N),r(N,v,R),It(()=>$.enter(N),L);else{const{leave:Y,delayLeave:ee,afterLeave:oe}=$,re=()=>r(N,v,R),ue=()=>{Y(N,()=>{re(),oe&&oe()})};ee?ee(N,re,ue):ue()}else r(N,v,R)},Ve=(y,v,R,O=!1,L=!1)=>{const{type:N,props:G,ref:$,children:U,dynamicChildren:F,shapeFlag:ne,patchFlag:Y,dirs:ee,cacheIndex:oe}=y;if(Y===-2&&(L=!1),$!=null&&uo($,null,R,y,!0),oe!=null&&(v.renderCache[oe]=void 0),ne&256){v.ctx.deactivate(y);return}const re=ne&1&&ee,ue=!Vs(y);let _e;if(ue&&(_e=G&&G.onVnodeBeforeUnmount)&&$t(_e,v,y),ne&6)Bt(y.component,R,O);else{if(ne&128){y.suspense.unmount(R,O);return}re&&rr(y,null,v,"beforeUnmount"),ne&64?y.type.remove(y,v,R,Z,O):F&&!F.hasOnce&&(N!==Dt||Y>0&&Y&64)?yt(F,v,R,!1,!0):(N===Dt&&Y&384||!L&&ne&16)&&yt(U,v,R),O&&xe(y)}(ue&&(_e=G&&G.onVnodeUnmounted)||re)&&It(()=>{_e&&$t(_e,v,y),re&&rr(y,null,v,"unmounted")},R)},xe=y=>{const{type:v,el:R,anchor:O,transition:L}=y;if(v===Dt){wn(R,O);return}if(v===Gi){H(y);return}const N=()=>{s(R),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(y.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:$}=L,U=()=>G(R,N);$?$(y.el,N,U):U()}else N()},wn=(y,v)=>{let R;for(;y!==v;)R=m(y),s(y),y=R;s(v)},Bt=(y,v,R)=>{const{bum:O,scope:L,job:N,subTree:G,um:$,m:U,a:F}=y;Vu(U),Vu(F),O&&Hi(O),L.stop(),N&&(N.flags|=8,Ve(G,y,v,R)),$&&It($,v),It(()=>{y.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},yt=(y,v,R,O=!1,L=!1,N=0)=>{for(let G=N;G<y.length;G++)Ve(y[G],v,R,O,L)},D=y=>{if(y.shapeFlag&6)return D(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const v=m(y.anchor||y.el),R=v&&v[v_];return R?m(R):v};let J=!1;const Q=(y,v,R)=>{y==null?v._vnode&&Ve(v._vnode,null,null,!0):x(v._vnode||null,y,v,null,null,null,R),v._vnode=y,J||(J=!0,Su(),ud(),J=!1)},Z={p:x,um:Ve,m:Ct,r:xe,mt:ft,mc:_,pc:pe,pbc:A,n:D,o:t};return{render:Q,hydrate:void 0,createApp:H_(Q)}}function Oa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Z_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kd(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=kn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&kd(a,l)),l.type===jo&&(l.el=a.el)}}function ey(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Dd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dd(e)}function Vu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ty=Symbol.for("v-scx"),ny=()=>Gt(ty);function Wi(t,e,n){return Od(t,e,n)}function Od(t,e,n=Pe){const{immediate:r,deep:s,flush:i,once:a}=n,l=ut({},n),c=e&&r||!e&&i!=="post";let h;if(Ys){if(i==="sync"){const T=ny();h=T.__watcherHandles||(T.__watcherHandles=[])}else if(!c){const T=()=>{};return T.stop=Wt,T.resume=Wt,T.pause=Wt,T}}const d=lt;l.call=(T,k,x)=>en(T,d,k,x);let p=!1;i==="post"?l.scheduler=T=>{It(T,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(T,k)=>{k?T():Gl(T)}),l.augmentJob=T=>{e&&(T.flags|=4),p&&(T.flags|=2,d&&(T.id=d.uid,T.i=d))};const m=g_(t,e,l);return Ys&&(h?h.push(m):c&&m()),m}function ry(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?Nd(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const a=ci(this),l=Od(s,i.bind(r),n);return a(),l}function Nd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const sy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Nt(e)}Modifiers`]||t[`${_r(e)}Modifiers`];function iy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Pe;let s=n;const i=e.startsWith("update:"),a=i&&sy(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>je(d)?d.trim():d)),a.number&&(s=n.map(Ja)));let l,c=r[l=Ra(e)]||r[l=Ra(Nt(e))];!c&&i&&(c=r[l=Ra(_r(e))]),c&&en(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,en(h,t,6,s)}}function Vd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ce(t)){const c=h=>{const d=Vd(h,e,!0);d&&(l=!0,ut(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>a[c]=null):ut(a,i),De(t)&&r.set(t,a),a)}function $o(t,e){return!t||!Do(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,_r(e))||Re(t,e))}function xu(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:T,ctx:k,inheritAttrs:x}=t,M=co(t);let W,B;try{if(n.shapeFlag&4){const H=s||r,fe=H;W=qt(h.call(fe,H,d,p,T,m,k)),B=l}else{const H=e;W=qt(H.length>1?H(p,{attrs:l,slots:a,emit:c}):H(p,null)),B=e.props?l:oy(l)}}catch(H){Ls.length=0,Uo(H,t,1),W=Se(dr)}let K=W;if(B&&x!==!1){const H=Object.keys(B),{shapeFlag:fe}=K;H.length&&fe&7&&(i&&H.some(Ll)&&(B=ay(B,i)),K=zr(K,B,!1,!0))}return n.dirs&&(K=zr(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&Ql(K,n.transition),W=K,co(M),W}const oy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Do(n))&&((e||(e={}))[n]=t[n]);return e},ay=(t,e)=>{const n={};for(const r in t)(!Ll(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ly(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Lu(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!$o(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Lu(r,a,h):!0:!!a;return!1}function Lu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!$o(n,i))return!0}return!1}function cy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const xd=t=>t.__isSuspense;function uy(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):y_(t)}const Dt=Symbol.for("v-fgt"),jo=Symbol.for("v-txt"),dr=Symbol.for("v-cmt"),Gi=Symbol.for("v-stc"),Ls=[];let Rt=null;function He(t=!1){Ls.push(Rt=t?null:[])}function hy(){Ls.pop(),Rt=Ls[Ls.length-1]||null}let Qs=1;function Mu(t,e=!1){Qs+=t,t<0&&Rt&&e&&(Rt.hasOnce=!0)}function Ld(t){return t.dynamicChildren=Qs>0?Rt||Nr:null,hy(),Qs>0&&Rt&&Rt.push(t),t}function We(t,e,n,r,s,i){return Ld(z(t,e,n,r,s,i,!0))}function fy(t,e,n,r,s){return Ld(Se(t,e,n,r,s,!0))}function fo(t){return t?t.__v_isVNode===!0:!1}function ws(t,e){return t.type===e.type&&t.key===e.key}const Md=({key:t})=>t??null,Qi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||ct(t)||ce(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function z(t,e=null,n=null,r=0,s=null,i=t===Dt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Md(e),ref:e&&Qi(e),scopeId:fd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return l?(Jl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),Qs>0&&!a&&Rt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Rt.push(c),c}const Se=dy;function dy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===V_)&&(t=dr),fo(t)){const l=zr(t,e,!0);return n&&Jl(l,n),Qs>0&&!i&&Rt&&(l.shapeFlag&6?Rt[Rt.indexOf(t)]=l:Rt.push(l)),l.patchFlag=-2,l}if(Ay(t)&&(t=t.__vccOpts),e){e=py(e);let{class:l,style:c}=e;l&&!je(l)&&(e.class=Bl(l)),De(c)&&(Wl(c)&&!ie(c)&&(c=ut({},c)),e.style=Ul(c))}const a=je(t)?1:xd(t)?128:E_(t)?64:De(t)?4:ce(t)?2:0;return z(t,e,n,r,s,a,i,!0)}function py(t){return t?Wl(t)||Id(t)?ut({},t):t:null}function zr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?gy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Md(h),ref:e&&e.ref?n&&i?ie(i)?i.concat(Qi(e)):[i,Qi(e)]:Qi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zr(t.ssContent),ssFallback:t.ssFallback&&zr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ql(d,c.clone(d)),d}function Kt(t=" ",e=0){return Se(jo,null,t,e)}function qo(t,e){const n=Se(Gi,null,t);return n.staticCount=e,n}function Yi(t="",e=!1){return e?(He(),fy(dr,null,t)):Se(dr,null,t)}function qt(t){return t==null||typeof t=="boolean"?Se(dr):ie(t)?Se(Dt,null,t.slice()):fo(t)?kn(t):Se(jo,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zr(t)}function Jl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Jl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Id(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[Kt(e)]):n=8);t.children=e,t.shapeFlag|=n}function gy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Bl([e.class,r.class]));else if(s==="style")e.style=Ul([e.style,r.style]);else if(Do(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function $t(t,e,n,r=null){en(t,e,7,[n,r])}const my=Ed();let _y=0;function yy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||my,i={uid:_y++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bd(r,s),emitsOptions:Vd(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=iy.bind(null,i),t.ce&&t.ce(i),i}let lt=null,po,al;{const t=xo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};po=e("__VUE_INSTANCE_SETTERS__",n=>lt=n),al=e("__VUE_SSR_SETTERS__",n=>Ys=n)}const ci=t=>{const e=lt;return po(t),t.scope.on(),()=>{t.scope.off(),po(e)}},Fu=()=>{lt&&lt.scope.off(),po(null)};function Fd(t){return t.vnode.shapeFlag&4}let Ys=!1;function vy(t,e=!1,n=!1){e&&al(e);const{props:r,children:s}=t.vnode,i=Fd(t);z_(t,r,i,e),Q_(t,s,n);const a=i?Ey(t,e):void 0;return e&&al(!1),a}function Ey(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,M_);const{setup:r}=n;if(r){Yn();const s=t.setupContext=r.length>1?wy(t):null,i=ci(t),a=li(r,t,0,[t.props,s]),l=xf(a);if(Jn(),i(),(l||t.sp)&&!Vs(t)&&pd(t),l){if(a.then(Fu,Fu),e)return a.then(c=>{Uu(t,c)}).catch(c=>{Uo(c,t,0)});t.asyncDep=a}else Uu(t,a)}else Ud(t)}function Uu(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=od(e)),Ud(t)}function Ud(t,e,n){const r=t.type;t.render||(t.render=r.render||Wt);{const s=ci(t);Yn();try{F_(t)}finally{Jn(),s()}}}const Ty={get(t,e){return it(t,"get",""),t[e]}};function wy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ty),slots:t.slots,emit:t.emit,expose:e}}function Ho(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(od(l_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xs)return xs[n](t)},has(e,n){return n in e||n in xs}})):t.proxy}function Iy(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function Ay(t){return ce(t)&&"__vccOpts"in t}const Lt=(t,e)=>d_(t,e,Ys);function Bd(t,e,n){const r=arguments.length;return r===2?De(e)&&!ie(e)?fo(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fo(n)&&(n=[n]),Se(t,e,n))}const by="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ll;const Bu=typeof window<"u"&&window.trustedTypes;if(Bu)try{ll=Bu.createPolicy("vue",{createHTML:t=>t})}catch{}const $d=ll?t=>ll.createHTML(t):t=>t,Ry="http://www.w3.org/2000/svg",Sy="http://www.w3.org/1998/Math/MathML",ln=typeof document<"u"?document:null,$u=ln&&ln.createElement("template"),Cy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?ln.createElementNS(Ry,t):e==="mathml"?ln.createElementNS(Sy,t):n?ln.createElement(t,{is:n}):ln.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>ln.createTextNode(t),createComment:t=>ln.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ln.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{$u.innerHTML=$d(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=$u.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Py=Symbol("_vtc");function ky(t,e,n){const r=t[Py];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ju=Symbol("_vod"),Dy=Symbol("_vsh"),Oy=Symbol(""),Ny=/(^|;)\s*display\s*:/;function Vy(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Ji(r,l,"")}else for(const a in e)n[a]==null&&Ji(r,a,"");for(const a in n)a==="display"&&(i=!0),Ji(r,a,n[a])}else if(s){if(e!==n){const a=r[Oy];a&&(n+=";"+a),r.cssText=n,i=Ny.test(n)}}else e&&t.removeAttribute("style");ju in t&&(t[ju]=i?r.display:"",t[Dy]&&(r.display="none"))}const qu=/\s*!important$/;function Ji(t,e,n){if(ie(n))n.forEach(r=>Ji(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xy(t,e);qu.test(n)?t.setProperty(_r(r),n.replace(qu,""),"important"):t[r]=n}}const Hu=["Webkit","Moz","ms"],Na={};function xy(t,e){const n=Na[e];if(n)return n;let r=Nt(e);if(r!=="filter"&&r in t)return Na[e]=r;r=Vo(r);for(let s=0;s<Hu.length;s++){const i=Hu[s]+r;if(i in t)return Na[e]=i}return e}const zu="http://www.w3.org/1999/xlink";function Ku(t,e,n,r,s,i=Bm(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(zu,e.slice(6,e.length)):t.setAttributeNS(zu,e,n):n==null||i&&!Uf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zt(n)?String(n):n)}function Wu(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?$d(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Uf(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function ar(t,e,n,r){t.addEventListener(e,n,r)}function Ly(t,e,n,r){t.removeEventListener(e,n,r)}const Gu=Symbol("_vei");function My(t,e,n,r,s=null){const i=t[Gu]||(t[Gu]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=Fy(e);if(r){const h=i[e]=$y(r,s);ar(t,l,h,c)}else a&&(Ly(t,l,a,c),i[e]=void 0)}}const Qu=/(?:Once|Passive|Capture)$/;function Fy(t){let e;if(Qu.test(t)){e={};let r;for(;r=t.match(Qu);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let Va=0;const Uy=Promise.resolve(),By=()=>Va||(Uy.then(()=>Va=0),Va=Date.now());function $y(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;en(jy(r,n.value),e,5,[r])};return n.value=t,n.attached=By(),n}function jy(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,qy=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?ky(t,r,a):e==="style"?Vy(t,n,r):Do(e)?Ll(e)||My(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hy(t,e,r,a))?(Wu(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ku(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(r))?Wu(t,Nt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ku(t,e,r,a))};function Hy(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yu(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yu(e)&&je(n)?!1:e in t}const go=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>Hi(e,n):e};function zy(t){t.target.composing=!0}function Ju(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ur=Symbol("_assign"),Ms={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ur]=go(s);const i=r||s.props&&s.props.type==="number";ar(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ja(l)),t[Ur](l)}),n&&ar(t,"change",()=>{t.value=t.value.trim()}),e||(ar(t,"compositionstart",zy),ar(t,"compositionend",Ju),ar(t,"change",Ju))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Ur]=go(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ja(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},Ky={deep:!0,created(t,e,n){t[Ur]=go(n),ar(t,"change",()=>{const r=t._modelValue,s=Wy(t),i=t.checked,a=t[Ur];if(ie(r)){const l=Bf(r,s),c=l!==-1;if(i&&!c)a(r.concat(s));else if(!i&&c){const h=[...r];h.splice(l,1),a(h)}}else if(Oo(r)){const l=new Set(r);i?l.add(s):l.delete(s),a(l)}else a(jd(t,i))})},mounted:Xu,beforeUpdate(t,e,n){t[Ur]=go(n),Xu(t,e,n)}};function Xu(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ie(e))s=Bf(e,r.props.value)>-1;else if(Oo(e))s=e.has(r.props.value);else{if(e===n)return;s=Lo(e,jd(t,!0))}t.checked!==s&&(t.checked=s)}function Wy(t){return"_value"in t?t._value:t.value}function jd(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Gy=["ctrl","shift","alt","meta"],Qy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Gy.some(n=>t[`${n}Key`]&&!e.includes(n))},qd=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=Qy[e[a]];if(l&&l(s,e))return}return t(s,...i)})},Yy=ut({patchProp:qy},Cy);let Zu;function Jy(){return Zu||(Zu=J_(Yy))}const Xy=(...t)=>{const e=Jy().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ev(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Zy(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Zy(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ev(t){return je(t)?document.querySelector(t):t}/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Rr=typeof document<"u";function Hd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function tv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Hd(t.default)}const Ae=Object.assign;function xa(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ft(s)?s.map(t):t(s)}return n}const Fs=()=>{},Ft=Array.isArray,zd=/#/g,nv=/&/g,rv=/\//g,sv=/=/g,iv=/\?/g,Kd=/\+/g,ov=/%5B/g,av=/%5D/g,Wd=/%5E/g,lv=/%60/g,Gd=/%7B/g,cv=/%7C/g,Qd=/%7D/g,uv=/%20/g;function Xl(t){return encodeURI(""+t).replace(cv,"|").replace(ov,"[").replace(av,"]")}function hv(t){return Xl(t).replace(Gd,"{").replace(Qd,"}").replace(Wd,"^")}function cl(t){return Xl(t).replace(Kd,"%2B").replace(uv,"+").replace(zd,"%23").replace(nv,"%26").replace(lv,"`").replace(Gd,"{").replace(Qd,"}").replace(Wd,"^")}function fv(t){return cl(t).replace(sv,"%3D")}function dv(t){return Xl(t).replace(zd,"%23").replace(iv,"%3F")}function pv(t){return t==null?"":dv(t).replace(rv,"%2F")}function Js(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gv=/\/$/,mv=t=>t.replace(gv,"");function La(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=Ev(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Js(a)}}function _v(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function eh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Kr(e.matched[r],n.matched[s])&&Yd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Kr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Yd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vv(t[n],e[n]))return!1;return!0}function vv(t,e){return Ft(t)?th(t,e):Ft(e)?th(e,t):t===e}function th(t,e){return Ft(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ev(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Xs;(function(t){t.pop="pop",t.push="push"})(Xs||(Xs={}));var Us;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Us||(Us={}));function Tv(t){if(!t)if(Rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mv(t)}const wv=/^[^#]+#/;function Iv(t,e){return t.replace(wv,"#")+e}function Av(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zo=()=>({left:window.scrollX,top:window.scrollY});function bv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Av(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function nh(t,e){return(history.state?history.state.position-e:-1)+t}const ul=new Map;function Rv(t,e){ul.set(t,e)}function Sv(t){const e=ul.get(t);return ul.delete(t),e}let Cv=()=>location.protocol+"//"+location.host;function Jd(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),eh(c,"")}return eh(n,t)+r+s}function Pv(t,e,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const T=Jd(t,location),k=n.value,x=e.value;let M=0;if(m){if(n.value=T,e.value=m,a&&a===k){a=null;return}M=x?m.position-x.position:0}else r(T);s.forEach(W=>{W(n.value,k,{delta:M,type:Xs.pop,direction:M?M>0?Us.forward:Us.back:Us.unknown})})};function c(){a=n.value}function h(m){s.push(m);const T=()=>{const k=s.indexOf(m);k>-1&&s.splice(k,1)};return i.push(T),T}function d(){const{history:m}=window;m.state&&m.replaceState(Ae({},m.state,{scroll:zo()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function rh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zo():null}}function kv(t){const{history:e,location:n}=window,r={value:Jd(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Cv()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(T){console.error(T),n[d?"replace":"assign"](m)}}function a(c,h){const d=Ae({},e.state,rh(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Ae({},s.value,e.state,{forward:c,scroll:zo()});i(d.current,d,!0);const p=Ae({},rh(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Dv(t){t=Tv(t);const e=kv(t),n=Pv(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:Iv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ov(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Dv(t)}function Nv(t){return typeof t=="string"||t&&typeof t=="object"}function Xd(t){return typeof t=="string"||typeof t=="symbol"}const Zd=Symbol("");var sh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sh||(sh={}));function Wr(t,e){return Ae(new Error,{type:t,[Zd]:!0},e)}function an(t,e){return t instanceof Error&&Zd in t&&(e==null||!!(t.type&e))}const ih="[^/]+?",Vv={sensitive:!1,strict:!1,start:!0,end:!0},xv=/[.+*?^${}()[\]/\\]/g;function Lv(t,e){const n=Ae({},Vv,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let T=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(xv,"\\$&"),T+=40;else if(m.type===1){const{value:k,repeatable:x,optional:M,regexp:W}=m;i.push({name:k,repeatable:x,optional:M});const B=W||ih;if(B!==ih){T+=10;try{new RegExp(`(${B})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${k}" (${B}): `+H.message)}}let K=x?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;p||(K=M&&h.length<2?`(?:/${K})`:"/"+K),M&&(K+="?"),s+=K,T+=20,M&&(T+=-8),x&&(T+=-20),B===".*"&&(T+=-50)}d.push(T)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const T=d[m]||"",k=i[m-1];p[k.name]=T&&k.repeatable?T.split("/"):T}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const T of m)if(T.type===0)d+=T.value;else if(T.type===1){const{value:k,repeatable:x,optional:M}=T,W=k in h?h[k]:"";if(Ft(W)&&!x)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const B=Ft(W)?W.join("/"):W;if(!B)if(M)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=B}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function Mv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ep(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Mv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(oh(r))return 1;if(oh(s))return-1}return s.length-r.length}function oh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Fv={type:0,value:""},Uv=/[a-zA-Z0-9_]/;function Bv(t){if(!t)return[[]];if(t==="/")return[[Fv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(T){throw new Error(`ERR (${n})/"${h}": ${T}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:Uv.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function $v(t,e,n){const r=Lv(Bv(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function jv(t,e){const n=[],r=new Map;e=uh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,T){const k=!T,x=lh(p);x.aliasOf=T&&T.record;const M=uh(e,p),W=[x];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const fe of H)W.push(lh(Ae({},x,{components:T?T.record.components:x.components,path:fe,aliasOf:T?T.record:x})))}let B,K;for(const H of W){const{path:fe}=H;if(m&&fe[0]!=="/"){const de=m.record.path,I=de[de.length-1]==="/"?"":"/";H.path=m.record.path+(fe&&I+fe)}if(B=$v(H,m,M),T?T.alias.push(B):(K=K||B,K!==B&&K.alias.push(B),k&&p.name&&!ch(B)&&a(p.name)),tp(B)&&c(B),x.children){const de=x.children;for(let I=0;I<de.length;I++)i(de[I],B,T&&T.children[I])}T=T||B}return K?()=>{a(K)}:Fs}function a(p){if(Xd(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=zv(p,n);n.splice(m,0,p),p.record.name&&!ch(p)&&r.set(p.record.name,p)}function h(p,m){let T,k={},x,M;if("name"in p&&p.name){if(T=r.get(p.name),!T)throw Wr(1,{location:p});M=T.record.name,k=Ae(ah(m.params,T.keys.filter(K=>!K.optional).concat(T.parent?T.parent.keys.filter(K=>K.optional):[]).map(K=>K.name)),p.params&&ah(p.params,T.keys.map(K=>K.name))),x=T.stringify(k)}else if(p.path!=null)x=p.path,T=n.find(K=>K.re.test(x)),T&&(k=T.parse(x),M=T.record.name);else{if(T=m.name?r.get(m.name):n.find(K=>K.re.test(m.path)),!T)throw Wr(1,{location:p,currentLocation:m});M=T.record.name,k=Ae({},m.params,p.params),x=T.stringify(k)}const W=[];let B=T;for(;B;)W.unshift(B.record),B=B.parent;return{name:M,path:x,params:k,matched:W,meta:Hv(W)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function ah(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:qv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function qv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ch(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Hv(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function uh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function zv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ep(t,e[i])<0?r=i:n=i+1}const s=Kv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Kv(t){let e=t;for(;e=e.parent;)if(tp(e)&&ep(t,e)===0)return e}function tp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Wv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Kd," "),a=i.indexOf("="),l=Js(a<0?i:i.slice(0,a)),c=a<0?null:Js(i.slice(a+1));if(l in e){let h=e[l];Ft(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function hh(t){let e="";for(let n in t){const r=t[n];if(n=fv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ft(r)?r.map(i=>i&&cl(i)):[r&&cl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Gv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ft(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Qv=Symbol(""),fh=Symbol(""),Ko=Symbol(""),np=Symbol(""),hl=Symbol("");function Is(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Dn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Wr(4,{from:n,to:e})):m instanceof Error?c(m):Nv(m)?c(Wr(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function Ma(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Hd(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Dn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=tv(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const T=(p.__vccOpts||p)[e];return T&&Dn(T,n,r,a,l,s)()}))}}return i}function dh(t){const e=Gt(Ko),n=Gt(np),r=Lt(()=>{const c=Lr(t.to);return e.resolve(c)}),s=Lt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Kr.bind(null,d));if(m>-1)return m;const T=ph(c[h-2]);return h>1&&ph(d)===T&&p[p.length-1].path!==T?p.findIndex(Kr.bind(null,c[h-2])):m}),i=Lt(()=>s.value>-1&&eE(n.params,r.value.params)),a=Lt(()=>s.value>-1&&s.value===n.matched.length-1&&Yd(n.params,r.value.params));function l(c={}){if(Zv(c)){const h=e[Lr(t.replace)?"replace":"push"](Lr(t.to)).catch(Fs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Lt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function Yv(t){return t.length===1?t[0]:t}const Jv=dd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dh,setup(t,{slots:e}){const n=Fo(dh(t)),{options:r}=Gt(Ko),s=Lt(()=>({[gh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[gh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Yv(e.default(n));return t.custom?i:Bd("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Xv=Jv;function Zv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function eE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ft(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function ph(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const gh=(t,e,n)=>t??e??n,tE=dd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Gt(hl),s=Lt(()=>t.route||r.value),i=Gt(fh,0),a=Lt(()=>{let h=Lr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Lt(()=>s.value.matched[a.value]);Ki(fh,Lt(()=>a.value+1)),Ki(Qv,l),Ki(hl,s);const c=zi();return Wi(()=>[c.value,l.value,t.name],([h,d,p],[m,T,k])=>{d&&(d.instances[p]=h,T&&T!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=T.leaveGuards),d.updateGuards.size||(d.updateGuards=T.updateGuards))),h&&d&&(!T||!Kr(d,T)||!m)&&(d.enterCallbacks[p]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return mh(n.default,{Component:m,route:h});const T=p.props[d],k=T?T===!0?h.params:typeof T=="function"?T(h):T:null,M=Bd(m,Ae({},k,e,{onVnodeUnmounted:W=>{W.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return mh(n.default,{Component:M,route:h})||M}}});function mh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nE=tE;function rE(t){const e=jv(t.routes,t),n=t.parseQuery||Wv,r=t.stringifyQuery||hh,s=t.history,i=Is(),a=Is(),l=Is(),c=c_(Sn);let h=Sn;Rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=xa.bind(null,D=>""+D),p=xa.bind(null,pv),m=xa.bind(null,Js);function T(D,J){let Q,Z;return Xd(D)?(Q=e.getRecordMatcher(D),Z=J):Z=D,e.addRoute(Z,Q)}function k(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function x(){return e.getRoutes().map(D=>D.record)}function M(D){return!!e.getRecordMatcher(D)}function W(D,J){if(J=Ae({},J||c.value),typeof D=="string"){const R=La(n,D,J.path),O=e.resolve({path:R.path},J),L=s.createHref(R.fullPath);return Ae(R,O,{params:m(O.params),hash:Js(R.hash),redirectedFrom:void 0,href:L})}let Q;if(D.path!=null)Q=Ae({},D,{path:La(n,D.path,J.path).path});else{const R=Ae({},D.params);for(const O in R)R[O]==null&&delete R[O];Q=Ae({},D,{params:p(R)}),J.params=p(J.params)}const Z=e.resolve(Q,J),we=D.hash||"";Z.params=d(m(Z.params));const y=_v(r,Ae({},D,{hash:hv(we),path:Z.path})),v=s.createHref(y);return Ae({fullPath:y,hash:we,query:r===hh?Gv(D.query):D.query||{}},Z,{redirectedFrom:void 0,href:v})}function B(D){return typeof D=="string"?La(n,D,c.value.path):Ae({},D)}function K(D,J){if(h!==D)return Wr(8,{from:J,to:D})}function H(D){return I(D)}function fe(D){return H(Ae(B(D),{replace:!0}))}function de(D){const J=D.matched[D.matched.length-1];if(J&&J.redirect){const{redirect:Q}=J;let Z=typeof Q=="function"?Q(D):Q;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=B(Z):{path:Z},Z.params={}),Ae({query:D.query,hash:D.hash,params:Z.path!=null?{}:D.params},Z)}}function I(D,J){const Q=h=W(D),Z=c.value,we=D.state,y=D.force,v=D.replace===!0,R=de(Q);if(R)return I(Ae(B(R),{state:typeof R=="object"?Ae({},we,R.state):we,force:y,replace:v}),J||Q);const O=Q;O.redirectedFrom=J;let L;return!y&&yv(r,Z,Q)&&(L=Wr(16,{to:O,from:Z}),Ct(Z,Z,!0,!1)),(L?Promise.resolve(L):A(O,Z)).catch(N=>an(N)?an(N,2)?N:Vt(N):pe(N,O,Z)).then(N=>{if(N){if(an(N,2))return I(Ae({replace:v},B(N.to),{state:typeof N.to=="object"?Ae({},we,N.to.state):we,force:y}),J||O)}else N=S(O,Z,!0,v,we);return b(O,Z,N),N})}function _(D,J){const Q=K(D,J);return Q?Promise.reject(Q):Promise.resolve()}function w(D){const J=wn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function A(D,J){let Q;const[Z,we,y]=sE(D,J);Q=Ma(Z.reverse(),"beforeRouteLeave",D,J);for(const R of Z)R.leaveGuards.forEach(O=>{Q.push(Dn(O,D,J))});const v=_.bind(null,D,J);return Q.push(v),yt(Q).then(()=>{Q=[];for(const R of i.list())Q.push(Dn(R,D,J));return Q.push(v),yt(Q)}).then(()=>{Q=Ma(we,"beforeRouteUpdate",D,J);for(const R of we)R.updateGuards.forEach(O=>{Q.push(Dn(O,D,J))});return Q.push(v),yt(Q)}).then(()=>{Q=[];for(const R of y)if(R.beforeEnter)if(Ft(R.beforeEnter))for(const O of R.beforeEnter)Q.push(Dn(O,D,J));else Q.push(Dn(R.beforeEnter,D,J));return Q.push(v),yt(Q)}).then(()=>(D.matched.forEach(R=>R.enterCallbacks={}),Q=Ma(y,"beforeRouteEnter",D,J,w),Q.push(v),yt(Q))).then(()=>{Q=[];for(const R of a.list())Q.push(Dn(R,D,J));return Q.push(v),yt(Q)}).catch(R=>an(R,8)?R:Promise.reject(R))}function b(D,J,Q){l.list().forEach(Z=>w(()=>Z(D,J,Q)))}function S(D,J,Q,Z,we){const y=K(D,J);if(y)return y;const v=J===Sn,R=Rr?history.state:{};Q&&(Z||v?s.replace(D.fullPath,Ae({scroll:v&&R&&R.scroll},we)):s.push(D.fullPath,we)),c.value=D,Ct(D,J,Q,v),Vt()}let E;function ft(){E||(E=s.listen((D,J,Q)=>{if(!Bt.listening)return;const Z=W(D),we=de(Z);if(we){I(Ae(we,{replace:!0,force:!0}),Z).catch(Fs);return}h=Z;const y=c.value;Rr&&Rv(nh(y.fullPath,Q.delta),zo()),A(Z,y).catch(v=>an(v,12)?v:an(v,2)?(I(Ae(B(v.to),{force:!0}),Z).then(R=>{an(R,20)&&!Q.delta&&Q.type===Xs.pop&&s.go(-1,!1)}).catch(Fs),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),pe(v,Z,y))).then(v=>{v=v||S(Z,y,!1),v&&(Q.delta&&!an(v,8)?s.go(-Q.delta,!1):Q.type===Xs.pop&&an(v,20)&&s.go(-1,!1)),b(Z,y,v)}).catch(Fs)}))}let St=Is(),Be=Is(),me;function pe(D,J,Q){Vt(D);const Z=Be.list();return Z.length?Z.forEach(we=>we(D,J,Q)):console.error(D),Promise.reject(D)}function Tt(){return me&&c.value!==Sn?Promise.resolve():new Promise((D,J)=>{St.add([D,J])})}function Vt(D){return me||(me=!D,ft(),St.list().forEach(([J,Q])=>D?Q(D):J()),St.reset()),D}function Ct(D,J,Q,Z){const{scrollBehavior:we}=t;if(!Rr||!we)return Promise.resolve();const y=!Q&&Sv(nh(D.fullPath,0))||(Z||!Q)&&history.state&&history.state.scroll||null;return ld().then(()=>we(D,J,y)).then(v=>v&&bv(v)).catch(v=>pe(v,D,J))}const Ve=D=>s.go(D);let xe;const wn=new Set,Bt={currentRoute:c,listening:!0,addRoute:T,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:x,resolve:W,options:t,push:H,replace:fe,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Be.add,isReady:Tt,install(D){const J=this;D.component("RouterLink",Xv),D.component("RouterView",nE),D.config.globalProperties.$router=J,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Lr(c)}),Rr&&!xe&&c.value===Sn&&(xe=!0,H(s.location).catch(we=>{}));const Q={};for(const we in Sn)Object.defineProperty(Q,we,{get:()=>c.value[we],enumerable:!0});D.provide(Ko,J),D.provide(np,rd(Q)),D.provide(hl,c);const Z=D.unmount;wn.add(D),D.unmount=function(){wn.delete(D),wn.size<1&&(h=Sn,E&&E(),E=null,c.value=Sn,xe=!1,me=!1),Z()}}};function yt(D){return D.reduce((J,Q)=>J.then(()=>w(Q)),Promise.resolve())}return Bt}function sE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>Kr(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>Kr(h,c))||s.push(c))}return[n,r,s]}function iE(){return Gt(Ko)}const oE="/assets/OSNDB%20avatar_7-D5Wef5vc.png",_t=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},aE={name:"HeaderComponent"},lE={class:"header"},cE={class:"container"},uE={class:"nav"};function hE(t,e,n,r,s,i){const a=zt("router-link");return He(),We("header",lE,[z("div",cE,[Se(a,{to:"/"},{default:hn(()=>e[0]||(e[0]=[z("img",{class:"header-logo",src:oE,alt:"Logo"},null,-1)])),_:1}),e[5]||(e[5]=z("h1",{class:"logo"},"Open-Source Nematode DrugBase Project",-1)),z("nav",uE,[z("ul",null,[z("li",null,[Se(a,{to:"/"},{default:hn(()=>e[1]||(e[1]=[Kt("Home")])),_:1})]),z("li",null,[Se(a,{to:"/about"},{default:hn(()=>e[2]||(e[2]=[Kt("About")])),_:1})]),z("li",null,[Se(a,{to:"/funding"},{default:hn(()=>e[3]||(e[3]=[Kt("Funding")])),_:1})]),z("li",null,[Se(a,{to:"/contact"},{default:hn(()=>e[4]||(e[4]=[Kt("Contact")])),_:1})])])])])])}const fE=_t(aE,[["render",hE],["__scopeId","data-v-3be46ddb"]]),dE="/assets/UoW_Logo-_TipZff6.png",rp="/assets/QHT_Logo-M7zirFax.png",sp="/assets/AREF_Logo-CqPrjK6p.png",pE="/assets/Facebook_logo_(square)-DSbeQHlm.png",gE="/assets/Youtube_logo-CLf4XUcU.png",mE="/assets/Instagram_Logo-_TgEDEUa.png",_E="/assets/LinkedIn_Logo-D00eRlCm.png",yE="/assets/X_logo-pimiONjk.jpg",vE="/assets/TikTok_Logo-D10D4Enm.png",EE="/assets/GitHub_Logo-BZIvgM6Y.png",TE={name:"FooterComponent"},wE={class:"footer"},IE={class:"links"};function AE(t,e,n,r,s,i){const a=zt("router-link");return He(),We("footer",wE,[e[1]||(e[1]=z("div",{class:"container"},[z("div",{class:"footer-logos"},[z("a",{href:"https://www.westminster.ac.uk/",target:"_blank"},[z("img",{class:"UoWLogo",src:dE,alt:"UoW"})]),z("div",{class:"footer-logos",tag:"FundingPartners"},[z("a",{href:"https://quintinhoggtrust.org/",target:"_blank"},[z("img",{class:"QHTLogo",src:rp,alt:"QHT"})]),z("a",{href:"https://africaresearchexcellencefund.org.uk/",target:"_blank"},[z("img",{class:"AREFLogo",src:sp,alt:"AREF"})])])]),z("div",{class:"socials"},[z("a",{href:"https://www.facebook.com/profile.php?id=61572548505626",target:"_blank"},[z("img",{class:"social-logo",src:pE,alt:"Facebook_Logo"})]),z("a",{href:"https://www.youtube.com/channel/UC5s6DPuDbR0sbBaKA92wj8w",target:"_blank"},[z("img",{class:"social-logo",src:gE,alt:"YouTube Logo"})]),z("a",{href:"https://www.instagram.com/ondbuniwestminster/",target:"_blank"},[z("img",{class:"social-logo",src:mE,alt:"Instagram_Logo"})]),z("a",{href:"https://www.linkedin.com/",target:"_blank"},[z("img",{class:"social-logo",src:_E,alt:"LinkedIn_Logo"})]),z("a",{href:"https://x.com/ONDBwestminster",target:"_blank"},[z("img",{class:"social-logo",src:yE,alt:"X_Logo"})]),z("a",{href:"https://www.tiktok.com/@ondb6?_t=ZG-8tiW8Gi20cy&_r=1",target:"_blank"},[z("img",{class:"social-logo",src:vE,alt:"TikTok_Logo"})]),z("a",{href:"https://github.com/OpenSourceNematodeDrugbase",target:"_blank"},[z("img",{class:"social-logo",src:EE,alt:"GitHub_Logo"})])])],-1)),z("div",IE,[z("li",null,[Se(a,{to:"/privacy-policy"},{default:hn(()=>e[0]||(e[0]=[Kt("Privacy Policy")])),_:1})])])])}const bE=_t(TE,[["render",AE],["__scopeId","data-v-ca223cb5"]]),RE={},SE={href:"#"};function CE(t,e){return He(),We("a",SE,e[0]||(e[0]=[z("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 -960 960 960",width:"50px",height:"50px",fill:"black"},[z("path",{d:"M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"})],-1)]))}const PE=_t(RE,[["render",CE],["__scopeId","data-v-12164743"]]),kE={name:"App",components:{HeaderComponent:fE,FooterComponent:bE,BackToTop:PE}},DE={id:"app"};function OE(t,e,n,r,s,i){const a=zt("HeaderComponent"),l=zt("router-view"),c=zt("FooterComponent"),h=zt("BackToTop");return He(),We("div",DE,[z("header",null,[Se(a)]),z("main",null,[Se(l)]),z("footer",null,[Se(c)]),Se(h)])}const NE=_t(kE,[["render",OE]]),VE="/assets/ONDB%20logo-pKCQPdQD.png",xE="/assets/cavendish-exterior-D1-oVsQx.jpeg",LE="/assets/ousa-chea-gKUC4TMhOiY-unsplash-DJzD8_wB.jpeg",ME="/assets/E_SDG_logo_UN_emblem_square_trans_WEB-C_d2LCBO.jpeg",FE={},UE={class:"header-section"},BE={class:"section-text"};function $E(t,e){const n=zt("router-link");return He(),We(Dt,null,[e[4]||(e[4]=qo('<div class="intro-banner" data-v-fa343e97><h1 data-v-fa343e97>Welcome to the Open-Source Nematode DrugBase Project </h1><p class="intro-text" data-v-fa343e97>Our ambition is to introduce a platform to tackle neglected diseases caused by parasitic worms (nematodes).</p></div><section class="header-section" data-v-fa343e97><img class="image logo-img" src="'+VE+'" alt="ONDB_Logo" data-v-fa343e97><hr data-v-fa343e97></section><section class="header-section" data-v-fa343e97><h2 data-v-fa343e97>The Platform</h2><p class="section-text" data-v-fa343e97>The open-access project aims to enable discovery of medicines for neglected diseases caused by nematodes (parasitic worms).</p><p class="section-text" data-v-fa343e97>The project will launch here in 2025.</p></section><section class="header-section" data-v-fa343e97><h2 data-v-fa343e97>Mission Statement</h2><p class="section-text" data-v-fa343e97>Our mission is to combat neglected diseases caused by parasitic nematodes through innovative research and collaborative efforts. By developing the ONDB, we aim to bridge the gap between nematode gene/protein databases and drug-like chemical databases, creating a comprehensive platform for discovering new medicines.</p><img class="image cavendish-img" src="'+xE+'" alt="Cavendish Exterior" data-v-fa343e97><p class="section-text" data-v-fa343e97>This Quintin Hogg Trust-funded project, driven by University of Westminster students and open to global contributions, will provide valuable resources and foster hands-on learning experiences.</p><p class="section-text" data-v-fa343e97>We are committed to enhancing student employability, promoting engagement with real-world problems, and contributing to the global fight against parasitic diseases.</p><img class="image microscope-img" src="'+LE+'" alt="Microscope" data-v-fa343e97><p class="section-text" data-v-fa343e97>Our work aligns with the UN Sustainable Development Goals, specifically goal 3 (Ensure healthy lives and promote well-being for all at all ages) and goal 10 (Reduce inequality within and among countries).</p><img class="image usnd-img" src="'+ME+'" alt="USND" data-v-fa343e97></section>',4)),z("section",UE,[e[3]||(e[3]=z("h2",null,"Want to get involved or have questions?",-1)),z("p",BE,[e[1]||(e[1]=Kt("If you are interested in the project's developments, or would like to provide insight/expertise, we would be delighted to hear from you. Please see our ")),Se(n,{to:"/contact"},{default:hn(()=>e[0]||(e[0]=[Kt("contact")])),_:1}),e[2]||(e[2]=Kt(" page for details."))])])],64)}const jE=_t(FE,[["render",$E],["__scopeId","data-v-fa343e97"]]),qE={};function HE(t,e){return e[0]||(e[0]=qo('<div class="intro-banner" data-v-6d3effb9><h1 data-v-6d3effb9>About</h1><p class="intro-text" data-v-6d3effb9>Learn more about the Open-Source Nematode DrugBase Project</p></div><section class="header-section" data-v-6d3effb9><h2 data-v-6d3effb9>Project Overview</h2><p class="section-text" data-v-6d3effb9>The Open-source Nematode DrugBase project is taking a novel approach to tackle neglected diseases caused by parasitic worms (nematodes). It is guided by open-source principles so everything is open and anyone can contribute. Parasitic nematodes infect around 1 billion people often causing severe debilitating disease, but treatment options are limited. Our ambition is to create a platform to look for new medicines.</p><h2 data-v-6d3effb9>The Team</h2><p class="section-text" data-v-6d3effb9>The ONDB project team is comprised of students and academics from the University of Westminster.</p><ul data-v-6d3effb9><br data-v-6d3effb9><li class="item-text" data-v-6d3effb9>Gabriela Mondini Moraes - Scientist</li><li class="item-text" data-v-6d3effb9>Magdalena Ruiz Perez - Scientist</li><li class="item-text" data-v-6d3effb9>Oliver Guy – Website Developer</li><li class="item-text" data-v-6d3effb9>Azam Farooqui – Website Developer</li><li class="item-text" data-v-6d3effb9>Mateo Batol - Marketing &amp; Outreach</li><li class="item-text" data-v-6d3effb9>Paule Abrutyte - Marketing &amp; Outreach</li><br data-v-6d3effb9><h2 data-v-6d3effb9>Academic Partners</h2><li class="item-text" data-v-6d3effb9><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/barr-alastair" target="_blank" data-v-6d3effb9>Alastair Barr</a></li><li class="item-text" data-v-6d3effb9><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/partridge-freddie" target="_blank" data-v-6d3effb9>Freddie Patridge</a></li><li class="item-text" data-v-6d3effb9><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/sengupta-dipankar" target="_blank" data-v-6d3effb9>Dipankar Sengupta</a></li><li class="item-text" data-v-6d3effb9><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/seyoum-teddy" target="_blank" data-v-6d3effb9>Teddy Seyoum</a></li><li class="item-text" data-v-6d3effb9><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/hayes-polly" target="_blank" data-v-6d3effb9>Polly Hayes</a></li><li class="item-text" data-v-6d3effb9><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/guiliano-david" target="_blank" data-v-6d3effb9>David Guiliano</a></li><p class="section-text" data-v-6d3effb9>Additionally, Dr Abdulhakeem Sulyman will be joining in 2025 supported by an Africa Research Excellence Fund Research Development Fellowship.</p></ul></section>',2))}const zE=_t(qE,[["render",HE],["__scopeId","data-v-6d3effb9"]]),KE={data(){return{form:{name:"",email:"",message:"",agreed:!1},successMessage:""}},methods:{async submitForm(){try{if((await fetch("https://formspree.io/f/mjkkdekr",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.form)})).ok)this.successMessage="Thank you for your message! We'll get back to you soon.",this.form={name:"",email:"",message:"",agreed:!1};else throw new Error("Failed to send the message.")}catch(t){this.successMessage="An error occurred. Please try again.",console.error(t)}}}},WE={class:"contact-container"},GE={class:"form-group"},QE={class:"form-group"},YE={class:"form-group"},JE={class:"form-group"},XE=["disabled"],ZE={key:0,class:"success-message"};function eT(t,e,n,r,s,i){return He(),We("div",WE,[e[10]||(e[10]=z("h1",null,"Contact Form",-1)),z("form",{class:"contact-form",onSubmit:e[4]||(e[4]=qd((...a)=>i.submitForm&&i.submitForm(...a),["prevent"]))},[z("div",GE,[e[5]||(e[5]=z("label",{for:"name"},"Name:",-1)),Dr(z("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=a=>s.form.name=a),placeholder:"Your Name",required:""},null,512),[[Ms,s.form.name]])]),z("div",QE,[e[6]||(e[6]=z("label",{for:"email"},"Email:",-1)),Dr(z("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=a=>s.form.email=a),placeholder:"Your Email",required:""},null,512),[[Ms,s.form.email]])]),z("div",YE,[e[7]||(e[7]=z("label",{for:"message"},"Message:",-1)),Dr(z("textarea",{id:"message","onUpdate:modelValue":e[2]||(e[2]=a=>s.form.message=a),placeholder:"Your Message",required:""},null,512),[[Ms,s.form.message]])]),z("div",JE,[z("label",null,[Dr(z("input",{type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=a=>s.form.agreed=a)},null,512),[[Ky,s.form.agreed]]),e[8]||(e[8]=Kt(" I agree to the ")),e[9]||(e[9]=z("a",{href:"/privacy-policy",target:"_blank"},"Privacy Policy",-1))])]),z("button",{type:"submit",class:"submit-button",disabled:!s.form.agreed}," SEND ",8,XE)],32),s.successMessage?(He(),We("p",ZE,zs(s.successMessage),1)):Yi("",!0)])}const tT=_t(KE,[["render",eT]]),nT={components:{ContactUsFormComponent:tT}};function rT(t,e,n,r,s,i){const a=zt("ContactUsFormComponent");return He(),We(Dt,null,[e[0]||(e[0]=z("div",{class:"intro-banner"},[z("h1",null,"Contact Us"),z("p",{class:"intro-text"},"Thank you for your interest in the Open-source Nematode DrugBase Project.")],-1)),Se(a),e[1]||(e[1]=z("p",{class:"intro-text"},"For additional enquiries, please contact: ondb@westminster.ac.uk ",-1))],64)}const sT=_t(nT,[["render",rT]]);var _h={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},iT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,T=h&63;c||(T=64,a||(m=64)),r.push(n[d],n[p],n[m],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ip(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new oT;const m=i<<2|l>>4;if(r.push(m),h!==64){const T=l<<4&240|h>>2;if(r.push(T),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class oT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aT=function(t){const e=ip(t);return op.encodeByteArray(e,!0)},mo=function(t){return aT(t).replace(/\./g,"")},ap=function(t){try{return op.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=()=>lT().__FIREBASE_DEFAULTS__,uT=()=>{if(typeof process>"u"||typeof _h>"u")return;const t=_h.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ap(t[1]);return e&&JSON.parse(e)},Wo=()=>{try{return cT()||uT()||hT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lp=t=>{var e,n;return(n=(e=Wo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fT=t=>{const e=lp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cp=()=>{var t;return(t=Wo())===null||t===void 0?void 0:t.config},up=t=>{var e;return(e=Wo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mo(JSON.stringify(n)),mo(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function mT(){var t;const e=(t=Wo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _T(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ET(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function TT(){return!mT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function wT(){try{return typeof indexedDB=="object"}catch{return!1}}function IT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=AT,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?bT(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new En(s,l,r)}}function bT(t,e){return t.replace(RT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const RT=/\{\$([^}]+)}/g;function ST(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _o(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(yh(i)&&yh(a)){if(!_o(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function yh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CT(t,e){const n=new PT(t,e);return n.subscribe.bind(n)}class PT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");kT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Fa),s.error===void 0&&(s.error=Fa),s.complete===void 0&&(s.complete=Fa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t){return t&&t._delegate?t._delegate:t}class pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(NT(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function OT(t){return t===or?void 0:t}function NT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const xT={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},LT=ge.INFO,MT={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},FT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=MT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zl{constructor(e){this.name=e,this._logLevel=LT,this._logHandler=FT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const UT=(t,e)=>e.some(n=>t instanceof n);let vh,Eh;function BT(){return vh||(vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $T(){return Eh||(Eh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hp=new WeakMap,fl=new WeakMap,fp=new WeakMap,Ua=new WeakMap,ec=new WeakMap;function jT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Un(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&hp.set(n,t)}).catch(()=>{}),ec.set(e,t),e}function qT(t){if(fl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});fl.set(t,e)}let dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HT(t){dl=t(dl)}function zT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ba(this),e,...n);return fp.set(r,e.sort?e.sort():[e]),Un(r)}:$T().includes(t)?function(...e){return t.apply(Ba(this),e),Un(hp.get(this))}:function(...e){return Un(t.apply(Ba(this),e))}}function KT(t){return typeof t=="function"?zT(t):(t instanceof IDBTransaction&&qT(t),UT(t,BT())?new Proxy(t,dl):t)}function Un(t){if(t instanceof IDBRequest)return jT(t);if(Ua.has(t))return Ua.get(t);const e=KT(t);return e!==t&&(Ua.set(t,e),ec.set(e,t)),e}const Ba=t=>ec.get(t);function WT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Un(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Un(a.result),c.oldVersion,c.newVersion,Un(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const GT=["get","getKey","getAll","getAllKeys","count"],QT=["put","add","delete","clear"],$a=new Map;function Th(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GT.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return $a.set(e,i),i}HT(t=>({...t,get:(e,n,r)=>Th(e,n)||t.get(e,n,r),has:(e,n)=>!!Th(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(JT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function JT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pl="@firebase/app",wh="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new Zl("@firebase/app"),XT="@firebase/app-compat",ZT="@firebase/analytics-compat",ew="@firebase/analytics",tw="@firebase/app-check-compat",nw="@firebase/app-check",rw="@firebase/auth",sw="@firebase/auth-compat",iw="@firebase/database",ow="@firebase/data-connect",aw="@firebase/database-compat",lw="@firebase/functions",cw="@firebase/functions-compat",uw="@firebase/installations",hw="@firebase/installations-compat",fw="@firebase/messaging",dw="@firebase/messaging-compat",pw="@firebase/performance",gw="@firebase/performance-compat",mw="@firebase/remote-config",_w="@firebase/remote-config-compat",yw="@firebase/storage",vw="@firebase/storage-compat",Ew="@firebase/firestore",Tw="@firebase/vertexai",ww="@firebase/firestore-compat",Iw="firebase",Aw="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="[DEFAULT]",bw={[pl]:"fire-core",[XT]:"fire-core-compat",[ew]:"fire-analytics",[ZT]:"fire-analytics-compat",[nw]:"fire-app-check",[tw]:"fire-app-check-compat",[rw]:"fire-auth",[sw]:"fire-auth-compat",[iw]:"fire-rtdb",[ow]:"fire-data-connect",[aw]:"fire-rtdb-compat",[lw]:"fire-fn",[cw]:"fire-fn-compat",[uw]:"fire-iid",[hw]:"fire-iid-compat",[fw]:"fire-fcm",[dw]:"fire-fcm-compat",[pw]:"fire-perf",[gw]:"fire-perf-compat",[mw]:"fire-rc",[_w]:"fire-rc-compat",[yw]:"fire-gcs",[vw]:"fire-gcs-compat",[Ew]:"fire-fst",[ww]:"fire-fst-compat",[Tw]:"fire-vertex","fire-js":"fire-js",[Iw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new Map,Rw=new Map,ml=new Map;function Ih(t,e){try{t.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gr(t){const e=t.name;if(ml.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;ml.set(e,t);for(const n of yo.values())Ih(n,t);for(const n of Rw.values())Ih(n,t);return!0}function tc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new ui("app","Firebase",Sw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=Aw;function dp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(n||(n=cp()),!n)throw Bn.create("no-options");const i=yo.get(s);if(i){if(_o(n,i.options)&&_o(r,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const a=new VT(s);for(const c of ml.values())a.addComponent(c);const l=new Cw(n,r,a);return yo.set(s,l),l}function pp(t=gl){const e=yo.get(t);if(!e&&t===gl&&cp())return dp();if(!e)throw Bn.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let s=(r=bw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(l.join(" "));return}Gr(new pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="firebase-heartbeat-database",kw=1,Zs="firebase-heartbeat-store";let ja=null;function gp(){return ja||(ja=WT(Pw,kw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),ja}async function Dw(t){try{const n=(await gp()).transaction(Zs),r=await n.objectStore(Zs).get(mp(t));return await n.done,r}catch(e){if(e instanceof En)mn.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(n.message)}}}async function Ah(t,e){try{const r=(await gp()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,mp(t)),await r.done}catch(n){if(n instanceof En)mn.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function mp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow=1024,Nw=30*24*60*60*1e3;class Vw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=Nw}),this._storage.overwrite(this._heartbeatsCache))}catch(r){mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bh(),{heartbeatsToSend:r,unsentEntries:s}=xw(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return mn.warn(n),""}}}function bh(){return new Date().toISOString().substring(0,10)}function xw(t,e=Ow){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Rh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Rh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Lw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wT()?IT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Dw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ah(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ah(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Rh(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){Gr(new pr("platform-logger",e=>new YT(e),"PRIVATE")),Gr(new pr("heartbeat",e=>new Vw(e),"PRIVATE")),$n(pl,wh,t),$n(pl,wh,"esm2017"),$n("fire-js","")}Mw("");var Sh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ur,_p;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function w(){}w.prototype=_.prototype,I.D=_.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(A,b,S){for(var E=Array(arguments.length-2),ft=2;ft<arguments.length;ft++)E[ft-2]=arguments[ft];return _.prototype[b].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,w){w||(w=0);var A=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)A[b]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(b=0;16>b;++b)A[b]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=I.g[0],w=I.g[1],b=I.g[2];var S=I.g[3],E=_+(S^w&(b^S))+A[0]+3614090360&4294967295;_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+A[1]+3905402710&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+A[2]+606105819&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+A[3]+3250441966&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(S^w&(b^S))+A[4]+4118548399&4294967295,_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+A[5]+1200080426&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+A[6]+2821735955&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+A[7]+4249261313&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(S^w&(b^S))+A[8]+1770035416&4294967295,_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+A[9]+2336552879&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+A[10]+4294925233&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+A[11]+2304563134&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(S^w&(b^S))+A[12]+1804603682&4294967295,_=w+(E<<7&4294967295|E>>>25),E=S+(b^_&(w^b))+A[13]+4254626195&4294967295,S=_+(E<<12&4294967295|E>>>20),E=b+(w^S&(_^w))+A[14]+2792965006&4294967295,b=S+(E<<17&4294967295|E>>>15),E=w+(_^b&(S^_))+A[15]+1236535329&4294967295,w=b+(E<<22&4294967295|E>>>10),E=_+(b^S&(w^b))+A[1]+4129170786&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+A[6]+3225465664&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+A[11]+643717713&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+A[0]+3921069994&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(w^b))+A[5]+3593408605&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+A[10]+38016083&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+A[15]+3634488961&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+A[4]+3889429448&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(w^b))+A[9]+568446438&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+A[14]+3275163606&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+A[3]+4107603335&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+A[8]+1163531501&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(b^S&(w^b))+A[13]+2850285829&4294967295,_=w+(E<<5&4294967295|E>>>27),E=S+(w^b&(_^w))+A[2]+4243563512&4294967295,S=_+(E<<9&4294967295|E>>>23),E=b+(_^w&(S^_))+A[7]+1735328473&4294967295,b=S+(E<<14&4294967295|E>>>18),E=w+(S^_&(b^S))+A[12]+2368359562&4294967295,w=b+(E<<20&4294967295|E>>>12),E=_+(w^b^S)+A[5]+4294588738&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+A[8]+2272392833&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+A[11]+1839030562&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+A[14]+4259657740&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(w^b^S)+A[1]+2763975236&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+A[4]+1272893353&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+A[7]+4139469664&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+A[10]+3200236656&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(w^b^S)+A[13]+681279174&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+A[0]+3936430074&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+A[3]+3572445317&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+A[6]+76029189&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(w^b^S)+A[9]+3654602809&4294967295,_=w+(E<<4&4294967295|E>>>28),E=S+(_^w^b)+A[12]+3873151461&4294967295,S=_+(E<<11&4294967295|E>>>21),E=b+(S^_^w)+A[15]+530742520&4294967295,b=S+(E<<16&4294967295|E>>>16),E=w+(b^S^_)+A[2]+3299628645&4294967295,w=b+(E<<23&4294967295|E>>>9),E=_+(b^(w|~S))+A[0]+4096336452&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+A[7]+1126891415&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+A[14]+2878612391&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+A[5]+4237533241&4294967295,w=b+(E<<21&4294967295|E>>>11),E=_+(b^(w|~S))+A[12]+1700485571&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+A[3]+2399980690&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+A[10]+4293915773&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+A[1]+2240044497&4294967295,w=b+(E<<21&4294967295|E>>>11),E=_+(b^(w|~S))+A[8]+1873313359&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+A[15]+4264355552&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+A[6]+2734768916&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+A[13]+1309151649&4294967295,w=b+(E<<21&4294967295|E>>>11),E=_+(b^(w|~S))+A[4]+4149444226&4294967295,_=w+(E<<6&4294967295|E>>>26),E=S+(w^(_|~b))+A[11]+3174756917&4294967295,S=_+(E<<10&4294967295|E>>>22),E=b+(_^(S|~w))+A[2]+718787259&4294967295,b=S+(E<<15&4294967295|E>>>17),E=w+(S^(b|~_))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var w=_-this.blockSize,A=this.B,b=this.h,S=0;S<_;){if(b==0)for(;S<=w;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<_;)if(A[b++]=I.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<_;)if(A[b++]=I[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var w=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=w&255,w/=256;for(this.u(I),I=Array(16),_=w=0;4>_;++_)for(var A=0;32>A;A+=8)I[w++]=this.g[_]>>>A&255;return I};function i(I,_){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=_(I)}function a(I,_){this.h=_;for(var w=[],A=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;A&&S==_||(w[b]=S,A=!1)}this.g=w}var l={};function c(I){return-128<=I&&128>I?i(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return M(h(-I));for(var _=[],w=1,A=0;I>=w;A++)_[A]=I/w|0,w*=4294967296;return new a(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return M(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(_,8)),A=p,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),E=parseInt(I.substring(b,b+S),_);8>S?(S=h(Math.pow(_,S)),A=A.j(S).add(h(E))):(A=A.j(w),A=A.add(h(E)))}return A}var p=c(0),m=c(1),T=c(16777216);t=a.prototype,t.m=function(){if(x(this))return-M(this).m();for(var I=0,_=1,w=0;w<this.g.length;w++){var A=this.i(w);I+=(0<=A?A:4294967296+A)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(k(this))return"0";if(x(this))return"-"+M(this).toString(I);for(var _=h(Math.pow(I,6)),w=this,A="";;){var b=H(w,_).g;w=W(w,b.j(_));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=b,k(w))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function k(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function x(I){return I.h==-1}t.l=function(I){return I=W(this,I),x(I)?-1:k(I)?0:1};function M(I){for(var _=I.g.length,w=[],A=0;A<_;A++)w[A]=~I.g[A];return new a(w,~I.h).add(m)}t.abs=function(){return x(this)?M(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],A=0,b=0;b<=_;b++){var S=A+(this.i(b)&65535)+(I.i(b)&65535),E=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=E>>>16,S&=65535,E&=65535,w[b]=E<<16|S}return new a(w,w[w.length-1]&-2147483648?-1:0)};function W(I,_){return I.add(M(_))}t.j=function(I){if(k(this)||k(I))return p;if(x(this))return x(I)?M(this).j(M(I)):M(M(this).j(I));if(x(I))return M(this.j(M(I)));if(0>this.l(T)&&0>I.l(T))return h(this.m()*I.m());for(var _=this.g.length+I.g.length,w=[],A=0;A<2*_;A++)w[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var S=this.i(A)>>>16,E=this.i(A)&65535,ft=I.i(b)>>>16,St=I.i(b)&65535;w[2*A+2*b]+=E*St,B(w,2*A+2*b),w[2*A+2*b+1]+=S*St,B(w,2*A+2*b+1),w[2*A+2*b+1]+=E*ft,B(w,2*A+2*b+1),w[2*A+2*b+2]+=S*ft,B(w,2*A+2*b+2)}for(A=0;A<_;A++)w[A]=w[2*A+1]<<16|w[2*A];for(A=_;A<2*_;A++)w[A]=0;return new a(w,0)};function B(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function K(I,_){this.g=I,this.h=_}function H(I,_){if(k(_))throw Error("division by zero");if(k(I))return new K(p,p);if(x(I))return _=H(M(I),_),new K(M(_.g),M(_.h));if(x(_))return _=H(I,M(_)),new K(M(_.g),_.h);if(30<I.g.length){if(x(I)||x(_))throw Error("slowDivide_ only works with positive integers.");for(var w=m,A=_;0>=A.l(I);)w=fe(w),A=fe(A);var b=de(w,1),S=de(A,1);for(A=de(A,2),w=de(w,2);!k(A);){var E=S.add(A);0>=E.l(I)&&(b=b.add(w),S=E),A=de(A,1),w=de(w,1)}return _=W(I,b.j(_)),new K(b,_)}for(b=p;0<=I.l(_);){for(w=Math.max(1,Math.floor(I.m()/_.m())),A=Math.ceil(Math.log(w)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(w),E=S.j(_);x(E)||0<E.l(I);)w-=A,S=h(w),E=S.j(_);k(S)&&(S=m),b=b.add(S),I=W(I,E)}return new K(b,I)}t.A=function(I){return H(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],A=0;A<_;A++)w[A]=this.i(A)&I.i(A);return new a(w,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],A=0;A<_;A++)w[A]=this.i(A)|I.i(A);return new a(w,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),w=[],A=0;A<_;A++)w[A]=this.i(A)^I.i(A);return new a(w,this.h^I.h)};function fe(I){for(var _=I.g.length+1,w=[],A=0;A<_;A++)w[A]=I.i(A)<<1|I.i(A-1)>>>31;return new a(w,I.h)}function de(I,_){var w=_>>5;_%=32;for(var A=I.g.length-w,b=[],S=0;S<A;S++)b[S]=0<_?I.i(S+w)>>>_|I.i(S+w+1)<<32-_:I.i(S+w);return new a(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_p=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,ur=a}).apply(typeof Sh<"u"?Sh:typeof self<"u"?self:typeof window<"u"?window:{});var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yp,Ss,vp,Xi,_l,Ep,Tp,wp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fi=="object"&&Fi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break e;f=f[C]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,C={next:function(){if(!g&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function T(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,C,P){for(var j=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)j[Ce-2]=arguments[Ce];return u.prototype[C].apply(g,j)}}function x(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function M(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=o.length||0,P=g.length||0;o.length=C+P;for(let j=0;j<P;j++)o[C+j]=g[j]}else o.push(g)}}class W{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function B(o){return/^[\s\xa0]*$/.test(o)}function K(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var fe=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function de(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(o,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let P=0;P<w.length;P++)f=w[P],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Tt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ft{constructor(){this.h=this.g=null}add(u,f){const g=St.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var St=new W(()=>new Be,o=>o.reset());class Be{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let me,pe=!1,Tt=new ft,Vt=()=>{const o=l.Promise.resolve(void 0);me=()=>{o.then(Ct)}};var Ct=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=St;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function xe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}xe.prototype.h=function(){this.defaultPrevented=!0};var wn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function Bt(o,u){if(xe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(fe){e:{try{H(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:yt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Bt.aa.h.call(this)}}k(Bt,xe);var yt={2:"touch",3:"pen",4:"mouse"};Bt.prototype.h=function(){Bt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),J=0;function Q(o,u,f,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++J,this.da=this.fa=!1}function Z(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function we(o){this.src=o,this.g={},this.h=0}we.prototype.add=function(o,u,f,g,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=v(o,u,g,C);return-1<j?(u=o[j],f||(u.fa=!1)):(u=new Q(u,this.src,P,!!g,C),u.fa=f,o.push(u)),u};function y(o,u){var f=u.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,u,void 0),P;(P=0<=C)&&Array.prototype.splice.call(g,C,1),P&&(Z(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function v(o,u,f,g){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==g)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),O={};function L(o,u,f,g,C){if(Array.isArray(u)){for(var P=0;P<u.length;P++)L(o,u[P],f,g,C);return null}return f=oe(f),o&&o[D]?o.K(u,f,h(g)?!!g.capture:!1,C):N(o,u,f,!1,g,C)}function N(o,u,f,g,C,P){if(!u)throw Error("Invalid event type");var j=h(C)?!!C.capture:!!C,Ce=Y(o);if(Ce||(o[R]=Ce=new we(o)),f=Ce.add(u,f,g,j,P),f.proxy)return f;if(g=G(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)wn||(C=j),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(F(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function G(){function o(f){return u.call(o.src,o.listener,f)}const u=ne;return o}function $(o,u,f,g,C){if(Array.isArray(u))for(var P=0;P<u.length;P++)$(o,u[P],f,g,C);else g=h(g)?!!g.capture:!!g,f=oe(f),o&&o[D]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=v(P,f,g,C),-1<f&&(Z(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=Y(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,f,g,C)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[D])y(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(F(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Y(u))?(y(f,o),f.h==0&&(f.src=null,u[R]=null)):Z(o)}}}function F(o){return o in O?O[o]:O[o]="on"+o}function ne(o,u){if(o.da)o=!0;else{u=new Bt(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&U(o),o=f.call(g,u)}return o}function Y(o){return o=o[R],o instanceof we?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function re(){Ve.call(this),this.i=new we(this),this.M=this,this.F=null}k(re,Ve),re.prototype[D]=!0,re.prototype.removeEventListener=function(o,u,f,g){$(this,o,u,f,g)};function ue(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new xe(u,o);else if(u instanceof xe)u.target=u.target||o;else{var C=u;u=new xe(g,o),A(u,C)}if(C=!0,f)for(var P=f.length-1;0<=P;P--){var j=u.g=f[P];C=_e(j,g,!0,u)&&C}if(j=u.g=o,C=_e(j,g,!0,u)&&C,C=_e(j,g,!1,u)&&C,f)for(P=0;P<f.length;P++)j=u.g=f[P],C=_e(j,g,!1,u)&&C}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Z(f[g]);delete o.g[u],o.h--}}this.F=null},re.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},re.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function _e(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==f){var Ce=j.listener,Ye=j.ha||j.src;j.fa&&y(o.i,j),C=Ce.call(Ye,g)!==!1&&C}}return C&&!g.defaultPrevented}function Ze(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ge(o){o.g=Ze(()=>{o.g=null,o.i&&(o.i=!1,Ge(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Pt extends Ve{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(o){Ve.call(this),this.h=o,this.g={}}k(et,Ve);var In=[];function ls(o){de(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}et.prototype.N=function(){et.aa.N.call(this),ls(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=l.JSON.stringify,kt=l.JSON.parse,vi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ha(){}ha.prototype.h=null;function Oc(o){return o.h||(o.h=o.i())}function Nc(){}var cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fa(){xe.call(this,"d")}k(fa,xe);function da(){xe.call(this,"c")}k(da,xe);var Zn={},Vc=null;function Ei(){return Vc=Vc||new re}Zn.La="serverreachability";function xc(o){xe.call(this,Zn.La,o)}k(xc,xe);function us(o){const u=Ei();ue(u,new xc(u))}Zn.STAT_EVENT="statevent";function Lc(o,u){xe.call(this,Zn.STAT_EVENT,o),this.stat=u}k(Lc,xe);function dt(o){const u=Ei();ue(u,new Lc(u,o))}Zn.Ma="timingevent";function Mc(o,u){xe.call(this,Zn.Ma,o),this.size=u}k(Mc,xe);function hs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function fs(){this.g=!0}fs.prototype.xa=function(){this.g=!1};function am(o,u,f,g,C,P){o.info(function(){if(o.g)if(P)for(var j="",Ce=P.split("&"),Ye=0;Ye<Ce.length;Ye++){var Ie=Ce[Ye].split("=");if(1<Ie.length){var tt=Ie[0];Ie=Ie[1];var nt=tt.split("_");j=2<=nt.length&&nt[1]=="type"?j+(tt+"="+Ie+"&"):j+(tt+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+j})}function lm(o,u,f,g,C,P,j){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+P+" "+j})}function Er(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+um(o,f)+(g?" "+g:"")})}function cm(o,u){o.info(function(){return"TIMEOUT: "+u})}fs.prototype.info=function(){};function um(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<C.length;j++)C[j]=""}}}}return Qe(f)}catch{return u}}var Ti={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pa;function wi(){}k(wi,ha),wi.prototype.g=function(){return new XMLHttpRequest},wi.prototype.i=function(){return{}},pa=new wi;function An(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uc}function Uc(){this.i=null,this.g="",this.h=!1}var Bc={},ga={};function ma(o,u,f){o.L=1,o.v=Ri(rn(u)),o.m=f,o.P=!0,$c(o,null)}function $c(o,u){o.F=Date.now(),Ii(o),o.A=rn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),tu(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Uc,o.g=vu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Pt(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(In[0]=C.toString()),C=In);for(var P=0;P<C.length;P++){var j=L(f,C[P],g||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),us(),am(o.i,o.u,o.A,o.l,o.R,o.m)}An.prototype.ca=function(o){o=o.target;const u=this.M;u&&sn(o)==3?u.j():this.Y(o)},An.prototype.Y=function(o){try{if(o==this.g)e:{const nt=sn(this.g);var u=this.g.Ba();const Ir=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||lu(this.g)))){this.J||nt!=4||u==7||(u==8||0>=Ir?us(3):us(2)),_a(this);var f=this.g.Z();this.X=f;t:if(jc(this)){var g=lu(this.g);o="";var C=g.length,P=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){er(this),ds(this);var j="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(P&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=f==200,lm(this.i,this.u,this.A,this.l,this.R,nt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ce,Ye=this.g;if((Ce=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Ce)){var Ie=Ce;break t}}Ie=null}if(f=Ie)Er(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ya(this,f);else{this.o=!1,this.s=3,dt(12),er(this),ds(this);break e}}if(this.P){f=!0;let xt;for(;!this.J&&this.C<j.length;)if(xt=hm(this,j),xt==ga){nt==4&&(this.s=4,dt(14),f=!1),Er(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Bc){this.s=4,dt(15),Er(this.i,this.l,j,"[Invalid Chunk]"),f=!1;break}else Er(this.i,this.l,xt,null),ya(this,xt);if(jc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||j.length!=0||this.h.h||(this.s=1,dt(16),f=!1),this.o=this.o&&f,!f)Er(this.i,this.l,j,"[Invalid Chunked Response]"),er(this),ds(this);else if(0<j.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Aa(tt),tt.M=!0,dt(11))}}else Er(this.i,this.l,j,null),ya(this,j);nt==4&&er(this),this.o&&!this.J&&(nt==4?gu(this.j,this):(this.o=!1,Ii(this)))}else Cm(this.g),f==400&&0<j.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),er(this),ds(this)}}}catch{}finally{}};function jc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function hm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?ga:(f=Number(u.substring(f,g)),isNaN(f)?Bc:(g+=1,g+f>u.length?ga:(u=u.slice(g,g+f),o.C=g+f,u)))}An.prototype.cancel=function(){this.J=!0,er(this)};function Ii(o){o.S=Date.now()+o.I,qc(o,o.I)}function qc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=hs(m(o.ba,o),u)}function _a(o){o.B&&(l.clearTimeout(o.B),o.B=null)}An.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(cm(this.i,this.A),this.L!=2&&(us(),dt(17)),er(this),this.s=2,ds(this)):qc(this,this.S-o)};function ds(o){o.j.G==0||o.J||gu(o.j,o)}function er(o){_a(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ls(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ya(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||va(f.h,o))){if(!o.K&&va(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Oi(f),ki(f);else break e;Ia(f),dt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=hs(m(f.Za,f),6e3));if(1>=Kc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else nr(f,11)}else if((o.K||f.g==o)&&Oi(f),!B(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Ie=C[u];if(f.T=Ie[0],Ie=Ie[1],f.G==2)if(Ie[0]=="c"){f.K=Ie[1],f.ia=Ie[2];const tt=Ie[3];tt!=null&&(f.la=tt,f.j.info("VER="+f.la));const nt=Ie[4];nt!=null&&(f.Aa=nt,f.j.info("SVER="+f.Aa));const Ir=Ie[5];Ir!=null&&typeof Ir=="number"&&0<Ir&&(g=1.5*Ir,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const xt=o.g;if(xt){const Vi=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var P=g.h;P.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ea(P,P.h),P.h=null))}if(g.D){const ba=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;ba&&(g.ya=ba,Oe(g.I,g.D,ba))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var j=o;if(g.qa=yu(g,g.J?g.ia:null,g.W),j.K){Wc(g.h,j);var Ce=j,Ye=g.L;Ye&&(Ce.I=Ye),Ce.B&&(_a(Ce),Ii(Ce)),g.g=j}else du(g);0<f.i.length&&Di(f)}else Ie[0]!="stop"&&Ie[0]!="close"||nr(f,7);else f.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?nr(f,7):wa(f):Ie[0]!="noop"&&f.l&&f.l.ta(Ie),f.v=0)}}us(4)}catch{}}var fm=class{constructor(o,u){this.g=o,this.map=u}};function Hc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Kc(o){return o.h?1:o.g?o.g.size:0}function va(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ea(o,u){o.g?o.g.add(u):o.h=u}function Wc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Hc.prototype.cancel=function(){if(this.i=Gc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Gc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return x(o.i)}function dm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function pm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Qc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=pm(o),g=dm(o),C=g.length,P=0;P<C;P++)u.call(void 0,g[P],f&&f[P],o)}var Yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function gm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),C=null;if(0<=g){var P=o[f].substring(0,g);C=o[f].substring(g+1)}else P=o[f];u(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function tr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof tr){this.h=o.h,Ai(this,o.j),this.o=o.o,this.g=o.g,bi(this,o.s),this.l=o.l;var u=o.i,f=new ms;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Jc(this,f),this.m=o.m}else o&&(u=String(o).match(Yc))?(this.h=!1,Ai(this,u[1]||"",!0),this.o=ps(u[2]||""),this.g=ps(u[3]||"",!0),bi(this,u[4]),this.l=ps(u[5]||"",!0),Jc(this,u[6]||"",!0),this.m=ps(u[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}tr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(gs(u,Xc,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(gs(u,Xc,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(gs(f,f.charAt(0)=="/"?ym:_m,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",gs(f,Em)),o.join("")};function rn(o){return new tr(o)}function Ai(o,u,f){o.j=f?ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function bi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Jc(o,u,f){u instanceof ms?(o.i=u,Tm(o.i,o.h)):(f||(u=gs(u,vm)),o.i=new ms(u,o.h))}function Oe(o,u,f){o.i.set(u,f)}function Ri(o){return Oe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gs(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,mm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function mm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xc=/[#\/\?@]/g,_m=/[#\?:]/g,ym=/[#\?]/g,vm=/[#\?@]/g,Em=/#/g;function ms(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function bn(o){o.g||(o.g=new Map,o.h=0,o.i&&gm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=ms.prototype,t.add=function(o,u){bn(this),this.i=null,o=Tr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function Zc(o,u){bn(o),u=Tr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function eu(o,u){return bn(o),u=Tr(o,u),o.g.has(u)}t.forEach=function(o,u){bn(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(u,C,g,this)},this)},this)},t.na=function(){bn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const C=o[g];for(let P=0;P<C.length;P++)f.push(u[g])}return f},t.V=function(o){bn(this);let u=[];if(typeof o=="string")eu(this,o)&&(u=u.concat(this.g.get(Tr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return bn(this),this.i=null,o=Tr(this,o),eu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function tu(o,u,f){Zc(o,u),0<f.length&&(o.i=null,o.g.set(Tr(o,u),x(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const P=encodeURIComponent(String(g)),j=this.V(g);for(g=0;g<j.length;g++){var C=P;j[g]!==""&&(C+="="+encodeURIComponent(String(j[g]))),o.push(C)}}return this.i=o.join("&")};function Tr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Tm(o,u){u&&!o.j&&(bn(o),o.i=null,o.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(Zc(this,g),tu(this,C,f))},o)),o.j=u}function wm(o,u){const f=new fs;if(l.Image){const g=new Image;g.onload=T(Rn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=T(Rn,f,"TestLoadImage: error",!1,u,g),g.onabort=T(Rn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=T(Rn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Im(o,u){const f=new fs,g=new AbortController,C=setTimeout(()=>{g.abort(),Rn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(P=>{clearTimeout(C),P.ok?Rn(f,"TestPingServer: ok",!0,u):Rn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Rn(f,"TestPingServer: error",!1,u)})}function Rn(o,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Am(){this.g=new vi}function bm(o,u,f){const g=f||"";try{Qc(o,function(C,P){let j=C;h(C)&&(j=Qe(C)),u.push(g+P+"="+encodeURIComponent(j))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function Si(o){this.l=o.Ub||null,this.j=o.eb||!1}k(Si,ha),Si.prototype.g=function(){return new Ci(this.l,this.j)},Si.prototype.i=function(o){return function(){return o}}({});function Ci(o,u){re.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ci,re),t=Ci.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ys(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function nu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?_s(this):ys(this),this.readyState==3&&nu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,_s(this))},t.Qa=function(o){this.g&&(this.response=o,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ys(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function ys(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ru(o){let u="";return de(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ta(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ru(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Oe(o,u,f))}function Me(o){re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Me,re);var Rm=/^https?$/i,Sm=["POST","PUT"];t=Me.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pa.g(),this.v=this.o?Oc(this.o):Oc(pa),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){su(this,P);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Sm,u,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of f)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{au(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){su(this,P)}};function su(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,iu(o),Pi(o)}function iu(o){o.A||(o.A=!0,ue(o,"complete"),ue(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ue(this,"complete"),ue(this,"abort"),Pi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pi(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ou(this):this.bb())},t.bb=function(){ou(this)};function ou(o){if(o.h&&typeof a<"u"&&(!o.v[1]||sn(o)!=4||o.Z()!=2)){if(o.u&&sn(o)==4)Ze(o.Ea,0,o);else if(ue(o,"readystatechange"),sn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=j===0){var C=String(o.D).match(Yc)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Rm.test(C?C.toLowerCase():"")}f=g}if(f)ue(o,"complete"),ue(o,"success");else{o.m=6;try{var P=2<sn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",iu(o)}}finally{Pi(o)}}}}function Pi(o,u){if(o.g){au(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ue(o,"ready");try{f.onreadystatechange=g}catch{}}}function au(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function sn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),kt(u)}};function lu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Cm(o){const u={};o=(o.g&&2<=sn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(B(o[g]))continue;var f=b(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[C]||[];u[C]=P,P.push(f)}I(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function cu(o){this.Aa=0,this.i=[],this.j=new fs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vs("baseRetryDelayMs",5e3,o),this.cb=vs("retryDelaySeedMs",1e4,o),this.Wa=vs("forwardChannelMaxRetries",2,o),this.wa=vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Hc(o&&o.concurrentRequestLimit),this.Da=new Am,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=cu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){dt(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=yu(this,null,this.W),Di(this)};function wa(o){if(uu(o),o.G==3){var u=o.U++,f=rn(o.I);if(Oe(f,"SID",o.K),Oe(f,"RID",u),Oe(f,"TYPE","terminate"),Es(o,f),u=new An(o,o.j,u),u.L=2,u.v=Ri(rn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=vu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ii(u)}_u(o)}function ki(o){o.g&&(Aa(o),o.g.cancel(),o.g=null)}function uu(o){ki(o),o.u&&(l.clearTimeout(o.u),o.u=null),Oi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Di(o){if(!zc(o.h)&&!o.s){o.s=!0;var u=o.Ga;me||Vt(),pe||(me(),pe=!0),Tt.add(u,o),o.B=0}}function Pm(o,u){return Kc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=hs(m(o.Ga,o,u),mu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new An(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),A(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=fu(this,C,u),f=rn(this.I),Oe(f,"RID",o),Oe(f,"CVER",22),this.D&&Oe(f,"X-HTTP-Session-Id",this.D),Es(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(ru(P)))+"&"+u:this.m&&Ta(f,this.m,P)),Ea(this.h,C),this.Ua&&Oe(f,"TYPE","init"),this.P?(Oe(f,"$req",u),Oe(f,"SID","null"),C.T=!0,ma(C,f,null)):ma(C,f,u),this.G=2}}else this.G==3&&(o?hu(this,o):this.i.length==0||zc(this.h)||hu(this))};function hu(o,u){var f;u?f=u.l:f=o.U++;const g=rn(o.I);Oe(g,"SID",o.K),Oe(g,"RID",f),Oe(g,"AID",o.T),Es(o,g),o.m&&o.o&&Ta(g,o.m,o.o),f=new An(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=fu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ea(o.h,f),ma(f,g,u)}function Es(o,u){o.H&&de(o.H,function(f,g){Oe(u,g,f)}),o.l&&Qc({},function(f,g){Oe(u,g,f)})}function fu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var C=o.i;let P=-1;for(;;){const j=["count="+f];P==-1?0<f?(P=C[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Ce=!0;for(let Ye=0;Ye<f;Ye++){let Ie=C[Ye].g;const tt=C[Ye].map;if(Ie-=P,0>Ie)P=Math.max(0,C[Ye].g-100),Ce=!1;else try{bm(tt,j,"req"+Ie+"_")}catch{g&&g(tt)}}if(Ce){g=j.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function du(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;me||Vt(),pe||(me(),pe=!0),Tt.add(u,o),o.v=0}}function Ia(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=hs(m(o.Fa,o),mu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,pu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=hs(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),ki(this),pu(this))};function Aa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function pu(o){o.g=new An(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=rn(o.qa);Oe(u,"RID","rpc"),Oe(u,"SID",o.K),Oe(u,"AID",o.T),Oe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Oe(u,"TO",o.ja),Oe(u,"TYPE","xmlhttp"),Es(o,u),o.m&&o.o&&Ta(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ri(rn(u)),f.m=null,f.P=!0,$c(f,o)}t.Za=function(){this.C!=null&&(this.C=null,ki(this),Ia(this),dt(19))};function Oi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function gu(o,u){var f=null;if(o.g==u){Oi(o),Aa(o),o.g=null;var g=2}else if(va(o.h,u))f=u.D,Wc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=Ei(),ue(g,new Mc(g,f)),Di(o)}else du(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&Pm(o,u)||g==2&&Ia(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:nr(o,5);break;case 4:nr(o,10);break;case 3:nr(o,6);break;default:nr(o,2)}}}function mu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function nr(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const C=!g;g=new tr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ai(g,"https"),Ri(g),C?wm(g.toString(),f):Im(g.toString(),f)}else dt(2);o.G=0,o.l&&o.l.sa(u),_u(o),uu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function _u(o){if(o.G=0,o.ka=[],o.l){const u=Gc(o.h);(u.length!=0||o.i.length!=0)&&(M(o.ka,u),M(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function yu(o,u,f){var g=f instanceof tr?rn(f):new tr(f);if(g.g!="")u&&(g.g=u+"."+g.g),bi(g,g.s);else{var C=l.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var P=new tr(null);g&&Ai(P,g),u&&(P.g=u),C&&bi(P,C),f&&(P.l=f),g=P}return f=o.D,u=o.ya,f&&u&&Oe(g,f,u),Oe(g,"VER",o.la),Es(o,g),g}function vu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Me(new Si({eb:f})):new Me(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eu(){}t=Eu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ni(){}Ni.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){re.call(this),this.g=new cu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!B(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!B(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new wr(this)}k(wt,re),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){wa(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new fm(u.Ya++,o)),u.G==3&&Di(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,wa(this.g),delete this.g,wt.aa.N.call(this)};function Tu(o){fa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Tu,fa);function wu(){da.call(this),this.status=1}k(wu,da);function wr(o){this.g=o}k(wr,Eu),wr.prototype.ua=function(){ue(this.g,"a")},wr.prototype.ta=function(o){ue(this.g,new Tu(o))},wr.prototype.sa=function(o){ue(this.g,new wu)},wr.prototype.ra=function(){ue(this.g,"b")},Ni.prototype.createWebChannel=Ni.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,wp=function(){return new Ni},Tp=function(){return Ei()},Ep=Zn,_l={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ti.NO_ERROR=0,Ti.TIMEOUT=8,Ti.HTTP_ERROR=6,Xi=Ti,Fc.COMPLETE="complete",vp=Fc,Nc.EventType=cs,cs.OPEN="a",cs.CLOSE="b",cs.ERROR="c",cs.MESSAGE="d",re.prototype.listen=re.prototype.K,Ss=Nc,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,yp=Me}).apply(typeof Fi<"u"?Fi:typeof self<"u"?self:typeof window<"u"?window:{});const Ch="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}st.UNAUTHENTICATED=new st(null),st.GOOGLE_CREDENTIALS=new st("google-credentials-uid"),st.FIRST_PARTY=new st("first-party-uid"),st.MOCK_USER=new st("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Zl("@firebase/firestore");function Sr(){return gr.logLevel}function X(t,...e){if(gr.logLevel<=ge.DEBUG){const n=e.map(nc);gr.debug(`Firestore (${rs}): ${t}`,...n)}}function _n(t,...e){if(gr.logLevel<=ge.ERROR){const n=e.map(nc);gr.error(`Firestore (${rs}): ${t}`,...n)}}function Qr(t,...e){if(gr.logLevel<=ge.WARN){const n=e.map(nc);gr.warn(`Firestore (${rs}): ${t}`,...n)}}function nc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function Le(t,e){t||he()}function Ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(st.UNAUTHENTICATED))}shutdown(){}}class Uw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Bw{constructor(e){this.t=e,this.currentUser=st.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Le(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new jn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Le(typeof r.accessToken=="string"),new Ip(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Le(e===null||typeof e=="string"),new st(e)}}class $w{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=st.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class jw{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $w(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(st.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Le(this.o===void 0);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Le(typeof n.token=="string"),this.R=n.token,new qw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=zw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ve(t,e){return t<e?-1:t>e?1:0}function Yr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{static now(){return Et.fromMillis(Date.now())}static fromDate(e){return Et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Et(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ve(this.nanoseconds,e.nanoseconds):ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new Et(0,0))}static max(){return new le(new Et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n,r){n===void 0?n=0:n>e.length&&he(),r===void 0?r=e.length-n:r>e.length-n&&he(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ei.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ei?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ne extends ei{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ne(n)}static emptyPath(){return new Ne([])}}const Kw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mt extends ei{construct(e,n,r){return new mt(e,n,r)}static isValidIdentifier(e){return Kw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new mt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new te(q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new te(q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mt(n)}static emptyPath(){return new mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ne.fromString(e))}static fromName(e){return new se(Ne.fromString(e).popFirst(5))}static empty(){return new se(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ne(e.slice()))}}function Ww(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new Et(n+1,0):new Et(n,r));return new zn(s,se.empty(),e)}function Gw(t){return new zn(t.readTime,t.key,-1)}class zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zn(le.min(),se.empty(),-1)}static max(){return new zn(le.max(),se.empty(),-1)}}function Qw(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){if(t.code!==q.FAILED_PRECONDITION||t.message!==Yw)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&he(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Xw(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ss(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Qo.oe=-1;function Yo(t){return t==null}function yl(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ph(e)),e=eI(t.get(n),e);return Ph(e)}function eI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Ph(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ui(this.root,e,this.comparator,!0)}}class Ui{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw he();const e=this.left.check();if(e!==this.right.check())throw he();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw he()}get value(){throw he()}get color(){throw he()}get left(){throw he()}get right(){throw he()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dh(this.data.getIterator())}getIteratorFrom(e){return new Dh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Dh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.fields=e,e.sort(mt.comparator)}static empty(){return new Ln([])}unionWith(e){let n=new ze(mt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ln(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bp("Invalid base64 string: "+i):i}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const nI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kn(t){if(Le(!!t),typeof t=="string"){let e=0;const n=nI.exec(t);if(Le(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(t.seconds),nanos:Fe(t.nanos)}}function Fe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wn(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jo(t){const e=t.mapValue.fields.__previous_value__;return rc(e)?Jo(e):e}function ti(t){const e=Kn(t.mapValue.fields.__local_write_time__.timestampValue);return new Et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi={mapValue:{}};function Gn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rc(t)?4:iI(t)?9007199254740991:sI(t)?10:11:he()}function tn(t,e){if(t===e)return!0;const n=Gn(t);if(n!==Gn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ti(t).isEqual(ti(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Kn(s.timestampValue),l=Kn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Wn(s.bytesValue).isEqual(Wn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Fe(s.doubleValue),l=Fe(i.doubleValue);return a===l?yl(a)===yl(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Yr(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(kh(a)!==kh(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!tn(a[c],l[c])))return!1;return!0}(t,e);default:return he()}}function ri(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function Jr(t,e){if(t===e)return 0;const n=Gn(t),r=Gn(e);if(n!==r)return ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ve(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Fe(i.integerValue||i.doubleValue),c=Fe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Oh(t.timestampValue,e.timestampValue);case 4:return Oh(ti(t),ti(e));case 5:return ve(t.stringValue,e.stringValue);case 6:return function(i,a){const l=Wn(i),c=Wn(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ve(l[h],c[h]);if(d!==0)return d}return ve(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=ve(Fe(i.latitude),Fe(a.latitude));return l!==0?l:ve(Fe(i.longitude),Fe(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Nh(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},m=a.fields||{},T=(l=p.value)===null||l===void 0?void 0:l.arrayValue,k=(c=m.value)===null||c===void 0?void 0:c.arrayValue,x=ve(((h=T==null?void 0:T.values)===null||h===void 0?void 0:h.length)||0,((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:Nh(T,k)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Bi.mapValue&&a===Bi.mapValue)return 0;if(i===Bi.mapValue)return 1;if(a===Bi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=ve(c[p],d[p]);if(m!==0)return m;const T=Jr(l[c[p]],h[d[p]]);if(T!==0)return T}return ve(c.length,d.length)}(t.mapValue,e.mapValue);default:throw he()}}function Oh(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ve(t,e);const n=Kn(t),r=Kn(e),s=ve(n.seconds,r.seconds);return s!==0?s:ve(n.nanos,r.nanos)}function Nh(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Jr(n[s],r[s]);if(i)return i}return ve(n.length,r.length)}function Xr(t){return vl(t)}function vl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${vl(n.fields[a])}`;return s+"}"}(t.mapValue):he()}function Zi(t){switch(Gn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Jo(t);return e?16+Zi(e):16;case 5:return 2*t.stringValue.length;case 6:return Wn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Zi(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return fi(r.fields,(i,a)=>{s+=i.length+Zi(a)}),s}(t.mapValue);default:throw he()}}function El(t){return!!t&&"integerValue"in t}function sc(t){return!!t&&"arrayValue"in t}function Vh(t){return!!t&&"nullValue"in t}function xh(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function sI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Bs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Bs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Bs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function iI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bs(n)}setAll(e){let n=mt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Bs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fi(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ht(Bs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new at(e,0,le.min(),le.min(),le.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,le.min(),le.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,le.min(),le.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.position=e,this.inclusive=n}}function Lh(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(a.referenceValue),n.key):r=Jr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mh(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function oI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{}class qe extends Rp{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lI(e,n,r):n==="array-contains"?new hI(e,r):n==="in"?new fI(e,r):n==="not-in"?new dI(e,r):n==="array-contains-any"?new pI(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new cI(e,r):new uI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Jr(n,this.value)):n!==null&&Gn(this.value)===Gn(n)&&this.matchesComparison(Jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return he()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends Rp{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nn(e,n)}matches(e){return Sp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Sp(t){return t.op==="and"}function Cp(t){return aI(t)&&Sp(t)}function aI(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Tl(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+Xr(t.value);if(Cp(t))return t.filters.map(e=>Tl(e)).join(",");{const e=t.filters.map(n=>Tl(n)).join(",");return`${t.op}(${e})`}}function Pp(t,e){return t instanceof qe?function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)}(t,e):t instanceof nn?function(r,s){return s instanceof nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Pp(a,s.filters[l]),!0):!1}(t,e):void he()}function kp(t){return t instanceof qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Xr(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(kp).join(" ,")+"}"}(t):"Filter"}class lI extends qe{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class cI extends qe{constructor(e,n){super(e,"in",n),this.keys=Dp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uI extends qe{constructor(e,n){super(e,"not-in",n),this.keys=Dp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Dp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class hI extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sc(n)&&ri(n.arrayValue,this.value)}}class fI extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ri(this.value.arrayValue,n)}}class dI extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ri(this.value.arrayValue,n)}}class pI extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ri(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function Fh(t,e=null,n=[],r=[],s=null,i=null,a=null){return new gI(t,e,n,r,s,i,a)}function ic(t){const e=Ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Yo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xr(r)).join(",")),e.ue=n}return e.ue}function oc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Pp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mh(t.startAt,e.startAt)&&Mh(t.endAt,e.endAt)}function wl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function mI(t,e,n,r,s,i,a,l){return new Xo(t,e,n,r,s,i,a,l)}function ac(t){return new Xo(t)}function Uh(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _I(t){return t.collectionGroup!==null}function $s(t){const e=Ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ze(mt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Eo(i,r))}),n.has(mt.keyField().canonicalString())||e.ce.push(new Eo(mt.keyField(),r))}return e.ce}function Qt(t){const e=Ee(t);return e.le||(e.le=yI(e,$s(t))),e.le}function yI(t,e){if(t.limitType==="F")return Fh(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Eo(s.field,i)});const n=t.endAt?new vo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new vo(t.startAt.position,t.startAt.inclusive):null;return Fh(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Il(t,e,n){return new Xo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Zo(t,e){return oc(Qt(t),Qt(e))&&t.limitType===e.limitType}function Op(t){return`${ic(Qt(t))}|lt:${t.limitType}`}function Cr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>kp(s)).join(", ")}]`),Yo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Xr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Xr(s)).join(",")),`Target(${r})`}(Qt(t))}; limitType=${t.limitType})`}function ea(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of $s(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Lh(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,$s(r),s)||r.endAt&&!function(a,l,c){const h=Lh(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,$s(r),s))}(t,e)}function vI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Np(t){return(e,n)=>{let r=!1;for(const s of $s(t)){const i=EI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function EI(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Jr(c,h):he()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return he()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fi(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return tI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=new Ue(se.comparator);function Qn(){return TI}const Vp=new Ue(se.comparator);function Cs(...t){let e=Vp;for(const n of t)e=e.insert(n.key,n);return e}function wI(t){let e=Vp;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function lr(){return js()}function xp(){return js()}function js(){return new yr(t=>t.toString(),(t,e)=>t.isEqual(e))}const II=new ze(se.comparator);function Te(...t){let e=II;for(const n of t)e=e.add(n);return e}const AI=new ze(ve);function bI(){return AI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yl(e)?"-0":e}}function SI(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this._=void 0}}function CI(t,e,n){return t instanceof Al?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rc(i)&&(i=Jo(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof To?Lp(t,e):t instanceof wo?Mp(t,e):function(s,i){const a=kI(s,i),l=Bh(a)+Bh(s.Pe);return El(a)&&El(s.Pe)?SI(l):RI(s.serializer,l)}(t,e)}function PI(t,e,n){return t instanceof To?Lp(t,e):t instanceof wo?Mp(t,e):n}function kI(t,e){return t instanceof bl?function(r){return El(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Al extends ta{}class To extends ta{constructor(e){super(),this.elements=e}}function Lp(t,e){const n=Fp(e);for(const r of t.elements)n.some(s=>tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class wo extends ta{constructor(e){super(),this.elements=e}}function Mp(t,e){let n=Fp(e);for(const r of t.elements)n=n.filter(s=>!tn(s,r));return{arrayValue:{values:n}}}class bl extends ta{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Bh(t){return Fe(t.integerValue||t.doubleValue)}function Fp(t){return sc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function DI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof To&&s instanceof To||r instanceof wo&&s instanceof wo?Yr(r.elements,s.elements,tn):r instanceof bl&&s instanceof bl?tn(r.Pe,s.Pe):r instanceof Al&&s instanceof Al}(t.transform,e.transform)}class hr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new hr}static exists(e){return new hr(void 0,e)}static updateTime(e){return new hr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class lc{}function Up(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new NI(t.key,hr.none()):new cc(t.key,t.data,hr.none());{const n=t.data,r=Ht.empty();let s=new ze(mt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new na(t.key,r,new Ln(s.toArray()),hr.none())}}function OI(t,e,n){t instanceof cc?function(s,i,a){const l=s.value.clone(),c=jh(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof na?function(s,i,a){if(!eo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=jh(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Bp(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function qs(t,e,n,r){return t instanceof cc?function(i,a,l,c){if(!eo(i.precondition,a))return l;const h=i.value.clone(),d=qh(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof na?function(i,a,l,c){if(!eo(i.precondition,a))return l;const h=qh(i.fieldTransforms,c,a),d=a.data;return d.setAll(Bp(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return eo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function $h(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Yr(r,s,(i,a)=>DI(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cc extends lc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class na extends lc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jh(t,e,n){const r=new Map;Le(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,PI(a,l,n[s]))}return r}function qh(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,CI(i,a,e))}return r}class NI extends lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=xp();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Up(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Yr(this.mutations,e.mutations,(n,r)=>$h(n,r))&&Yr(this.baseMutations,e.baseMutations,(n,r)=>$h(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,ye;function $p(t){if(t===void 0)return _n("GRPC error has no .code"),q.UNKNOWN;switch(t){case $e.OK:return q.OK;case $e.CANCELLED:return q.CANCELLED;case $e.UNKNOWN:return q.UNKNOWN;case $e.DEADLINE_EXCEEDED:return q.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return q.RESOURCE_EXHAUSTED;case $e.INTERNAL:return q.INTERNAL;case $e.UNAVAILABLE:return q.UNAVAILABLE;case $e.UNAUTHENTICATED:return q.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return q.INVALID_ARGUMENT;case $e.NOT_FOUND:return q.NOT_FOUND;case $e.ALREADY_EXISTS:return q.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return q.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return q.FAILED_PRECONDITION;case $e.ABORTED:return q.ABORTED;case $e.OUT_OF_RANGE:return q.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return q.UNIMPLEMENTED;case $e.DATA_LOSS:return q.DATA_LOSS;default:return he()}}(ye=$e||($e={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new ur([4294967295,4294967295],0);function Hh(t){const e=MI().encode(t),n=new _p;return n.update(e),new Uint8Array(n.digest())}function zh(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ur([n,r],0),new ur([s,i],0)]}class uc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ps(`Invalid padding: ${n}`);if(r<0)throw new Ps(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ps(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ps(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=ur.fromNumber(this.Te)}Ee(e,n,r){let s=e.add(n.multiply(ur.fromNumber(r)));return s.compare(FI)===1&&(s=new ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Hh(e),[r,s]=zh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new uc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Te===0)return;const n=Hh(e),[r,s]=zh(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ra(le.min(),s,new Ue(ve),Qn(),Te())}}class di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new di(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class jp{constructor(e,n){this.targetId=e,this.me=n}}class qp{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Kh{constructor(){this.fe=0,this.ge=Wh(),this.pe=Xe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Te(),n=Te(),r=Te();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:he()}}),new di(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Wh()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Le(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class UI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Qn(),this.qe=$i(),this.Qe=$i(),this.Ke=new Ue(ve)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:he()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.me.count,s=this.Ye(n);if(s){const i=s.target;if(wl(i))if(r===0){const a=new se(i.path);this.We(n,a,at.newNoDocument(a,le.min()))}else Le(r===1);else{const a=this.Ze(n);if(a!==r){const l=this.Xe(e),c=l?this.et(l,e,a):1;if(c!==0){this.He(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=Wn(r).toUint8Array()}catch(c){if(c instanceof bp)return Qr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new uc(a,s,i)}catch(c){return Qr(c instanceof Ps?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.nt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.Be.forEach((i,a)=>{const l=this.Ye(a);if(l){if(i.current&&wl(l.target)){const c=new se(l.target.path);this.st(c).has(a)||this.ot(a,c)||this.We(a,c,at.newNoDocument(c,e))}i.be&&(n.set(a,i.ve()),i.Ce())}});let r=Te();this.Qe.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Ye(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ra(e,n,this.Ke,this.ke,r);return this.ke=Qn(),this.qe=$i(),this.Qe=$i(),this.Ke=new Ue(ve),s}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.ot(e,n)?s.Fe(n,1):s.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Kh,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new ze(ve),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ze(ve),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Kh),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $i(){return new Ue(se.comparator)}function Wh(){return new Ue(se.comparator)}const BI={asc:"ASCENDING",desc:"DESCENDING"},$I={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jI={and:"AND",or:"OR"};class qI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rl(t,e){return t.useProto3Json||Yo(e)?e:{value:e}}function HI(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Br(t){return Le(!!t),le.fromTimestamp(function(n){const r=Kn(n);return new Et(r.seconds,r.nanos)}(t))}function KI(t,e){return Sl(t,e).canonicalString()}function Sl(t,e){const n=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Hp(t){const e=Ne.fromString(t);return Le(Qp(e)),e}function Ha(t,e){const n=Hp(e);if(n.get(1)!==t.databaseId.projectId)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Kp(n))}function zp(t,e){return KI(t.databaseId,e)}function WI(t){const e=Hp(t);return e.length===4?Ne.emptyPath():Kp(e)}function Gh(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Kp(t){return Le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function GI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:he()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Le(d===void 0||typeof d=="string"),Xe.fromBase64String(d||"")):(Le(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Xe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const d=h.code===void 0?q.UNKNOWN:$p(h.code);return new te(d,h.message||"")}(a);n=new qp(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ha(t,r.document.name),i=Br(r.document.updateTime),a=r.document.createTime?Br(r.document.createTime):le.min(),l=new Ht({mapValue:{fields:r.document.fields}}),c=at.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new to(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ha(t,r.document),i=r.readTime?Br(r.readTime):le.min(),a=at.newNoDocument(s,i),l=r.removedTargetIds||[];n=new to([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ha(t,r.document),i=r.removedTargetIds||[];n=new to([],i,s,null)}else{if(!("filter"in e))return he();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new LI(s,i),l=r.targetId;n=new jp(l,a)}}return n}function QI(t,e){return{documents:[zp(t,e.path)]}}function YI(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=zp(t,s);const i=function(h){if(h.length!==0)return Gp(nn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(d=>function(m){return{field:Pr(m.field),direction:ZI(m.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=Rl(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ct:n,parent:s}}function JI(t){let e=WI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Le(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Wp(p);return m instanceof nn&&Cp(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(k){return new Eo(kr(k.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Yo(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,T=p.values||[];return new vo(T,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,T=p.values||[];return new vo(T,m)}(n.endAt)),mI(e,s,a,i,l,"F",c,h)}function XI(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return he()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Wp(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=kr(n.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=kr(n.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(n.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=kr(n.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return he()}}(t):t.fieldFilter!==void 0?function(n){return qe.create(kr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return he()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>Wp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return he()}}(n.compositeFilter.op))}(t):he()}function ZI(t){return BI[t]}function eA(t){return $I[t]}function tA(t){return jI[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function kr(t){return mt.fromServerFormat(t.fieldPath)}function Gp(t){return t instanceof qe?function(n){if(n.op==="=="){if(xh(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NAN"}};if(Vh(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xh(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NAN"}};if(Vh(n.value))return{unaryFilter:{field:Pr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(n.field),op:eA(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(s=>Gp(s));return r.length===1?r[0]:{compositeFilter:{op:tA(n.op),filters:r}}}(t):he()}function Qp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n,r,s,i=le.min(),a=le.min(),l=Xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.ht=e}}function rA(t){const e=JI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Il(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.ln=new iA}addToCollectionParentIndex(e,n){return this.ln.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(zn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class iA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ze(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(Ne.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(41943040,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Zr(0)}static Qn(){return new Zr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh([t,e],[n,r]){const s=ve(t,n);return s===0?ve(e,r):s}class oA{constructor(e){this.Gn=e,this.buffer=new ze(Yh),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Yh(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class aA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){X("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ss(n)?X("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Go(n)}await this.Yn(3e5)})}}class lA{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Qo.oe);const r=new oA(n);return this.Zn.forEachTarget(e,s=>r.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>r.Hn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Qh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qh):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Sr()<=ge.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function cA(t,e){return new lA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.changes=new yr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&qs(r.mutation,s,Ln.empty(),Et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const s=lr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Cs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=lr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Qn();const a=js(),l=function(){return js()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof na)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),qs(d.mutation,h,d.mutation.getFieldMask(),Et.now())):a.set(h.key,Ln.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new hA(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=js();let s=new Ue((a,l)=>a-l),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Ln.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||Te()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=xp();d.forEach(m=>{if(!i.has(m)){const T=Up(n.get(m),r.get(m));T!==null&&p.set(m,T),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return se.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_I(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(lr());let l=-1,c=i;return a.next(h=>V.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Te())).next(d=>({batchId:l,changes:wI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Cs();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,c=>{const h=function(p,m){return new Xo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,at.newInvalidDocument(d)))});let l=Cs();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&qs(d.mutation,h,Ln.empty(),Et.now()),ea(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return V.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Br(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(s){return{name:s.name,query:rA(s.bundledQuery),readTime:Br(s.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.overlays=new Ue(se.comparator),this.Er=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=lr();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Tt(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Er.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=lr(),i=n.length+1,a=new se(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ue((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=lr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=lr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return V.resolve(l)}Tt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Er.get(s.largestBatchId).delete(r.key);this.Er.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new xI(n,r));let i=this.Er.get(n);i===void 0&&(i=Te(),this.Er.set(n,i)),this.Er.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.dr=new ze(Ke.Ar),this.Rr=new ze(Ke.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ke(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new se(new Ne([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.Rr.forEachInRange([r,s],a=>{this.gr(a),i.push(a.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new se(new Ne([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=Te();return this.Rr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return se.comparator(e.key,n.key)||ve(e.br,n.br)}static Vr(e,n){return ve(e.br,n.br)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new ze(Ke.Ar)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new VI(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.vr=this.vr.add(new Ke(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Fr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([r,s],a=>{const l=this.Cr(a.br);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ve);return n.forEach(s=>{const i=new Ke(s,0),a=new Ke(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,a],l=>{r=r.add(l.br)})}),V.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const a=new Ke(new se(i),0);let l=new ze(ve);return this.vr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.br)),!0)},a),V.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const s=this.Cr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Le(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return V.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ke(n,0),s=this.vr.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.Nr=e,this.docs=function(){return new Ue(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Qn();const a=n.path,l=new se(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Qw(Gw(d),r)<=0||(s.has(d.key)||ea(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){he()}Lr(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new yA(this)}getSize(e){return V.resolve(this.size)}}class yA extends uA{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.hr.addEntry(e,s)):this.hr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.persistence=e,this.Br=new yr(n=>ic(n),oc),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.kr=0,this.qr=new hc,this.targetCount=0,this.Qr=Zr.qn()}forEachTarget(e,n){return this.Br.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),V.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Zr(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Un(n),V.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Br.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Qo(0),this.Ur=!1,this.Ur=!0,this.Wr=new gA,this.referenceDelegate=e(this),this.Gr=new vA(this),this.indexManager=new sA,this.remoteDocumentCache=function(s){return new _A(s)}(r=>this.referenceDelegate.zr(r)),this.serializer=new nA(n),this.jr=new dA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new pA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new mA(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new EA(this.$r.next());return this.referenceDelegate.Hr(),r(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,n){return V.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class EA extends Jw{constructor(e){super(),this.currentSequenceNumber=e}}class fc{constructor(e){this.persistence=e,this.Zr=new hc,this.Xr=null}static ei(e){return new fc(e)}get ti(){if(this.Xr)return this.Xr;throw he()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),V.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(s=>this.ti.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.ti,r=>{const s=se.fromPath(r);return this.ni(e,s).next(i=>{i||n.removeEntry(s,le.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return V.or([()=>V.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Io{constructor(e,n){this.persistence=e,this.ri=new yr(r=>Zw(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=cA(this,n)}static ei(e,n){return new Io(e,n)}Hr(){}Jr(e){return V.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return V.forEach(this.ri,(r,s)=>this.ir(e,r,s).next(i=>i?V.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,a=>this.ir(e,a,n).next(l=>{l||(r++,i.removeEntry(a,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),V.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),V.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zi(e.data.value)),n}ir(e,n,r){return V.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ri.get(n);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=s}static zi(e,n){let r=Te(),s=Te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new dc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return TT()?8:Xw(ht())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Xi(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.es(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new TA;return this.ts(e,n,a).next(l=>{if(i.result=l,this.Hi)return this.ns(e,n,a,l.size)})}).next(()=>i.result)}ns(e,n,r,s){return r.documentReadCount<this.Ji?(Sr()<=ge.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Cr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),V.resolve()):(Sr()<=ge.DEBUG&&X("QueryEngine","Query:",Cr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Yi*s?(Sr()<=ge.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Cr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qt(n))):V.resolve())}Xi(e,n){if(Uh(n))return V.resolve(null);let r=Qt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Il(n,null,"F"),r=Qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Te(...i);return this.Zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.rs(n,l);return this.ss(n,h,a,c.readTime)?this.Xi(e,Il(n,null,"F")):this.os(e,h,n,c)}))})))}es(e,n,r,s){return Uh(n)||s.isEqual(le.min())?V.resolve(null):this.Zi.getDocuments(e,r).next(i=>{const a=this.rs(n,i);return this.ss(n,a,r,s)?V.resolve(null):(Sr()<=ge.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cr(n)),this.os(e,a,n,Ww(s,-1)).next(l=>l))})}rs(e,n){let r=new ze(Np(e));return n.forEach((s,i)=>{ea(e,i)&&(r=r.add(i))}),r}ss(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,n,r){return Sr()<=ge.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Cr(n)),this.Zi.getDocumentsMatchingQuery(e,n,zn.min(),r)}os(e,n,r,s){return this.Zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e,n,r,s){this.persistence=e,this._s=n,this.serializer=s,this.us=new Ue(ve),this.cs=new yr(i=>ic(i),oc),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fA(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function AA(t,e,n,r){return new IA(t,e,n,r)}async function Jp(t,e){const n=Ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=Te();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Ts:h,removedBatchIds:a,addedBatchIds:l}))})})}function Xp(t){const e=Ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function bA(t,e){const n=Ee(t),r=e.snapshotVersion;let s=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.hs.newChangeBuffer({trackRemovals:!0});s=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(i,d.addedDocuments,p)));let T=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?T=T.withResumeToken(Xe.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(d.resumeToken,r)),s=s.insert(p,T),function(x,M,W){return x.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(m,T,d)&&l.push(n.Gr.updateTargetData(i,T))});let c=Qn(),h=Te();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(RA(i,a,e.documentUpdates).next(d=>{c=d.Is,h=d.Es})),!r.isEqual(le.min())){const d=n.Gr.getLastRemoteSnapshotVersion(i).next(p=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return V.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.us=s,i))}function RA(t,e,n){let r=Te(),s=Te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=Qn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(le.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):X("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Is:a,Es:s}})}function SA(t,e){const n=Ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Gr.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.Gr.allocateTargetId(r).next(a=>(s=new Mn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.us.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function Cl(t,e,n){const r=Ee(t),s=r.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ss(a))throw a;X("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.us=r.us.remove(e),r.cs.delete(s.target)}function Jh(t,e,n){const r=Ee(t);let s=le.min(),i=Te();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,d){const p=Ee(c),m=p.cs.get(d);return m!==void 0?V.resolve(p.us.get(m)):p.Gr.getTargetData(h,d)}(r,a,Qt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r._s.getDocumentsMatchingQuery(a,e,n?s:le.min(),n?i:Te())).next(l=>(CA(r,vI(e),l),{documents:l,ds:i})))}function CA(t,e,n){let r=t.ls.get(e)||le.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ls.set(e,r)}class Xh{constructor(){this.activeTargetIds=bI()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class PA{constructor(){this._o=new Xh,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Xh,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){X("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){X("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji=null;function za(){return ji===null?ji=function(){return 268435456+Math.round(2147483648*Math.random())}():ji++,"0x"+ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class NA extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(n,r,s,i,a){const l=za(),c=this.No(n,r.toUriEncodedString());X("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(h,i,a),this.Bo(n,c,h,s).then(d=>(X("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw Qr("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}ko(n,r,s,i,a,l){return this.Oo(n,r,s,i,a)}Lo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}No(n,r){const s=DA[n];return`${this.Fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,s){const i=za();return new Promise((a,l)=>{const c=new yp;c.setWithCredentials(!0),c.listenOnce(vp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Xi.NO_ERROR:const d=c.getResponseJson();X(rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Xi.TIMEOUT:X(rt,`RPC '${e}' ${i} timed out`),l(new te(q.DEADLINE_EXCEEDED,"Request time out"));break;case Xi.HTTP_ERROR:const p=c.getStatus();if(X(rt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const T=m==null?void 0:m.error;if(T&&T.status&&T.message){const k=function(M){const W=M.toLowerCase().replace(/_/g,"-");return Object.values(q).indexOf(W)>=0?W:q.UNKNOWN}(T.status);l(new te(k,T.message))}else l(new te(q.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new te(q.UNAVAILABLE,"Connection failed."));break;default:he()}}finally{X(rt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);X(rt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}qo(e,n,r){const s=za(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=wp(),l=Tp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");X(rt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let m=!1,T=!1;const k=new OA({Eo:M=>{T?X(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(m||(X(rt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),X(rt,`RPC '${e}' stream ${s} sending:`,M),p.send(M))},Ao:()=>p.close()}),x=(M,W,B)=>{M.listen(W,K=>{try{B(K)}catch(H){setTimeout(()=>{throw H},0)}})};return x(p,Ss.EventType.OPEN,()=>{T||(X(rt,`RPC '${e}' stream ${s} transport opened.`),k.So())}),x(p,Ss.EventType.CLOSE,()=>{T||(T=!0,X(rt,`RPC '${e}' stream ${s} transport closed`),k.Do())}),x(p,Ss.EventType.ERROR,M=>{T||(T=!0,Qr(rt,`RPC '${e}' stream ${s} transport errored:`,M),k.Do(new te(q.UNAVAILABLE,"The operation could not be completed")))}),x(p,Ss.EventType.MESSAGE,M=>{var W;if(!T){const B=M.data[0];Le(!!B);const K=B,H=(K==null?void 0:K.error)||((W=K[0])===null||W===void 0?void 0:W.error);if(H){X(rt,`RPC '${e}' stream ${s} received error:`,H);const fe=H.status;let de=function(w){const A=$e[w];if(A!==void 0)return $p(A)}(fe),I=H.message;de===void 0&&(de=q.INTERNAL,I="Unknown error status: "+fe+" with message "+H.message),T=!0,k.Do(new te(de,I)),p.close()}else X(rt,`RPC '${e}' stream ${s} received:`,B),k.vo(B)}}),x(l,Ep.STAT_EVENT,M=>{M.stat===_l.PROXY?X(rt,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===_l.NOPROXY&&X(rt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.bo()},0),k}}function Ka(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t){return new qI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,r,s,i,a,l,c){this.li=e,this.Yo=r,this.Zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new eg(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===q.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Xo===n&&this.I_(r,s)},r=>{e(()=>{const s=new te(q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(s)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{r(()=>this.E_(s))}),this.stream.onMessage(s=>{r(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return X("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(X("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xA extends VA{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=GI(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?le.min():a.readTime?Br(a.readTime):le.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=Gh(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=wl(c)?{documents:QI(i,c)}:{query:YI(i,c).ct},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=zI(i,a.resumeToken);const h=Rl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(le.min())>0){l.readTime=HI(i,a.snapshotVersion.toTimestamp());const h=Rl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=XI(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=Gh(this.serializer),n.removeTarget=e,this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Oo(e,Sl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(q.UNKNOWN,i.toString())})}ko(e,n,r,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.ko(e,Sl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new te(q.UNKNOWN,a.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class MA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(_n(n),this.C_=!1):X("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(a=>{r.enqueueAndForget(async()=>{gi(this)&&(X("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=Ee(c);h.k_.add(4),await pi(h),h.K_.set("Unknown"),h.k_.delete(4),await sa(h)}(this))})}),this.K_=new MA(r,s)}}async function sa(t){if(gi(t))for(const e of t.q_)await e(!0)}async function pi(t){for(const e of t.q_)await e(!1)}function tg(t,e){const n=Ee(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),_c(n)?mc(n):is(n).s_()&&gc(n,e))}function pc(t,e){const n=Ee(t),r=is(n);n.B_.delete(e),r.s_()&&ng(n,e),n.B_.size===0&&(r.s_()?r.a_():gi(n)&&n.K_.set("Unknown"))}function gc(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}is(t).V_(e)}function ng(t,e){t.U_.xe(e),is(t).m_(e)}function mc(t){t.U_=new UI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),is(t).start(),t.K_.F_()}function _c(t){return gi(t)&&!is(t).i_()&&t.B_.size>0}function gi(t){return Ee(t).k_.size===0}function rg(t){t.U_=void 0}async function UA(t){t.K_.set("Online")}async function BA(t){t.B_.forEach((e,n)=>{gc(t,e)})}async function $A(t,e){rg(t),_c(t)?(t.K_.O_(e),mc(t)):t.K_.set("Unknown")}async function jA(t,e,n){if(t.K_.set("Online"),e instanceof qp&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.B_.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.B_.delete(l),s.U_.removeTarget(l))}(t,e)}catch(r){X("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ef(t,r)}else if(e instanceof to?t.U_.$e(e):e instanceof jp?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(le.min()))try{const r=await Xp(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.U_.it(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.B_.get(h);d&&i.B_.set(h,d.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const d=i.B_.get(c);if(!d)return;i.B_.set(c,d.withResumeToken(Xe.EMPTY_BYTE_STRING,d.snapshotVersion)),ng(i,c);const p=new Mn(d.target,c,h,d.sequenceNumber);gc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X("RemoteStore","Failed to raise snapshot:",r),await ef(t,r)}}async function ef(t,e,n){if(!ss(e))throw e;t.k_.add(1),await pi(t),t.K_.set("Offline"),n||(n=()=>Xp(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await sa(t)})}async function tf(t,e){const n=Ee(t);n.asyncQueue.verifyOperationInProgress(),X("RemoteStore","RemoteStore received new credentials");const r=gi(n);n.k_.add(3),await pi(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await sa(n)}async function qA(t,e){const n=Ee(t);e?(n.k_.delete(2),await sa(n)):e||(n.k_.add(2),await pi(n),n.K_.set("Unknown"))}function is(t){return t.W_||(t.W_=function(n,r,s){const i=Ee(n);return i.b_(),new xA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Ro:UA.bind(null,t),mo:BA.bind(null,t),po:$A.bind(null,t),R_:jA.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),_c(t)?mc(t):t.K_.set("Unknown")):(await t.W_.stop(),rg(t))})),t.W_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new jn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new yc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sg(t,e){if(_n("AsyncQueue",`${e}: ${t}`),ss(t))return new te(q.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{static emptySet(e){return new $r(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Cs(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $r)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new $r;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.z_=new Ue(se.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):he():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class es{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new es(e,n,$r.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class zA{constructor(){this.queries=rf(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const s=Ee(n),i=s.queries;s.queries=rf(),i.forEach((a,l)=>{for(const c of l.J_)c.onError(r)})})(this,new te(q.ABORTED,"Firestore shutting down"))}}function rf(){return new yr(t=>Op(t),Zo)}async function ig(t,e){const n=Ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Y_()&&e.Z_()&&(r=2):(i=new HA,r=e.Z_()?0:1);try{switch(r){case 0:i.H_=await n.onListen(s,!0);break;case 1:i.H_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=sg(a,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&vc(n)}async function og(t,e){const n=Ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.J_.indexOf(e);a>=0&&(i.J_.splice(a,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function KA(t,e){const n=Ee(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.J_)l.ta(s)&&(r=!0);a.H_=s}}r&&vc(n)}function WA(t,e,n){const r=Ee(t),s=r.queries.get(e);if(s)for(const i of s.J_)i.onError(n);r.queries.delete(e)}function vc(t){t.X_.forEach(e=>{e.next()})}var Pl,sf;(sf=Pl||(Pl={})).na="default",sf.Cache="cache";class ag{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Pl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e){this.key=e}}class cg{constructor(e){this.key=e}}class GA{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Te(),this.mutatedKeys=Te(),this.Va=Np(e),this.ma=new $r(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new nf,s=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),T=ea(this.query,p)?p:null,k=!!m&&this.mutatedKeys.has(m.key),x=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let M=!1;m&&T?m.data.isEqual(T.data)?k!==x&&(r.track({type:3,doc:T}),M=!0):this.ya(m,T)||(r.track({type:2,doc:T}),M=!0,(c&&this.Va(T,c)>0||h&&this.Va(T,h)<0)&&(l=!0)):!m&&T?(r.track({type:0,doc:T}),M=!0):m&&!T&&(r.track({type:1,doc:m}),M=!0,(c||h)&&(l=!0)),M&&(T?(a=a.add(T),i=x?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{ma:a,pa:r,ss:l,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const a=e.pa.j_();a.sort((d,p)=>function(T,k){const x=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return he()}};return x(T)-x(k)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),s=s!=null&&s;const l=n&&!s?this.Sa():[],c=this.Ra.size===0&&this.current&&!s?1:0,h=c!==this.Aa;return this.Aa=c,a.length!==0||h?{snapshot:new es(this.query,e.ma,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new nf,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Te(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new cg(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new lg(r))}),n}va(e){this.da=e.ds,this.Ra=Te();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return es.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class QA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class YA{constructor(e){this.key=e,this.Fa=!1}}class JA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ma={},this.xa=new yr(l=>Op(l),Zo),this.Oa=new Map,this.Na=new Set,this.La=new Ue(se.comparator),this.Ba=new Map,this.ka=new hc,this.qa={},this.Qa=new Map,this.Ka=Zr.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function XA(t,e,n=!0){const r=pg(t);let s;const i=r.xa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await ug(r,e,n,!0),s}async function ZA(t,e){const n=pg(t);await ug(n,e,!0,!1)}async function ug(t,e,n,r){const s=await SA(t.localStore,Qt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await eb(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&tg(t.remoteStore,s),l}async function eb(t,e,n,r,s){t.Ua=(p,m,T)=>async function(x,M,W,B){let K=M.view.ga(W);K.ss&&(K=await Jh(x.localStore,M.query,!1).then(({documents:I})=>M.view.ga(I,K)));const H=B&&B.targetChanges.get(M.targetId),fe=B&&B.targetMismatches.get(M.targetId)!=null,de=M.view.applyChanges(K,x.isPrimaryClient,H,fe);return af(x,M.targetId,de.ba),de.snapshot}(t,p,m,T);const i=await Jh(t.localStore,e,!0),a=new GA(e,i.ds),l=a.ga(i.documents),c=di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);af(t,n,h.ba);const d=new QA(e,n,a);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),h.snapshot}async function tb(t,e,n){const r=Ee(t),s=r.xa.get(e),i=r.Oa.get(s.targetId);if(i.length>1)return r.Oa.set(s.targetId,i.filter(a=>!Zo(a,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&pc(r.remoteStore,s.targetId),kl(r,s.targetId)}).catch(Go)):(kl(r,s.targetId),await Cl(r.localStore,s.targetId,!0))}async function nb(t,e){const n=Ee(t),r=n.xa.get(e),s=n.Oa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),pc(n.remoteStore,r.targetId))}async function hg(t,e){const n=Ee(t);try{const r=await bA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Ba.get(i);a&&(Le(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Fa=!0:s.modifiedDocuments.size>0?Le(a.Fa):s.removedDocuments.size>0&&(Le(a.Fa),a.Fa=!1))}),await dg(n,r,e)}catch(r){await Go(r)}}function of(t,e,n){const r=Ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.xa.forEach((i,a)=>{const l=a.view.ea(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Ee(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(h=!0)}),h&&vc(c)}(r.eventManager,e),s.length&&r.Ma.R_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rb(t,e,n){const r=Ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ba.get(e),i=s&&s.key;if(i){let a=new Ue(se.comparator);a=a.insert(i,at.newNoDocument(i,le.min()));const l=Te().add(i),c=new ra(le.min(),new Map,new Ue(ve),a,l);await hg(r,c),r.La=r.La.remove(i),r.Ba.delete(e),Ec(r)}else await Cl(r.localStore,e,!1).then(()=>kl(r,e,n)).catch(Go)}function kl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||fg(t,r)})}function fg(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(pc(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Ec(t))}function af(t,e,n){for(const r of n)r instanceof lg?(t.ka.addReference(r.key,e),sb(t,r)):r instanceof cg?(X("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||fg(t,r.key)):he()}function sb(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(X("SyncEngine","New document in limbo: "+n),t.Na.add(r),Ec(t))}function Ec(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new se(Ne.fromString(e)),r=t.Ka.next();t.Ba.set(r,new YA(n)),t.La=t.La.insert(n,r),tg(t.remoteStore,new Mn(Qt(ac(n.path)),r,"TargetPurposeLimboResolution",Qo.oe))}}async function dg(t,e,n){const r=Ee(t),s=[],i=[],a=[];r.xa.isEmpty()||(r.xa.forEach((l,c)=>{a.push(r.Ua(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=dc.zi(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Ma.R_(s),await async function(c,h){const d=Ee(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(h,m=>V.forEach(m.Wi,T=>d.persistence.referenceDelegate.addReference(p,m.targetId,T)).next(()=>V.forEach(m.Gi,T=>d.persistence.referenceDelegate.removeReference(p,m.targetId,T)))))}catch(p){if(!ss(p))throw p;X("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const T=d.us.get(m),k=T.snapshotVersion,x=T.withLastLimboFreeSnapshotVersion(k);d.us=d.us.insert(m,x)}}}(r.localStore,i))}async function ib(t,e){const n=Ee(t);if(!n.currentUser.isEqual(e)){X("SyncEngine","User change. New user:",e.toKey());const r=await Jp(n.localStore,e);n.currentUser=e,function(i,a){i.Qa.forEach(l=>{l.forEach(c=>{c.reject(new te(q.CANCELLED,a))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await dg(n,r.Ts)}}function ob(t,e){const n=Ee(t),r=n.Ba.get(e);if(r&&r.Fa)return Te().add(r.key);{let s=Te();const i=n.Oa.get(e);if(!i)return s;for(const a of i){const l=n.xa.get(a);s=s.unionWith(l.view.fa)}return s}}function pg(t){const e=Ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ob.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rb.bind(null,e),e.Ma.R_=KA.bind(null,e.eventManager),e.Ma.Wa=WA.bind(null,e.eventManager),e}class Ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Zp(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return AA(this.persistence,new wA,e.initialUser,this.serializer)}ja(e){return new Yp(fc.ei,this.serializer)}za(e){return new PA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ao.provider={build:()=>new Ao};class ab extends Ao{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){Le(this.persistence.referenceDelegate instanceof Io);const r=this.persistence.referenceDelegate.garbageCollector;return new aA(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Yp(r=>Io.ei(r,n),this.serializer)}}class Dl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>of(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ib.bind(null,this.syncEngine),await qA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new zA}()}createDatastore(e){const n=Zp(e.databaseInfo.databaseId),r=function(i){return new NA(i)}(e.databaseInfo);return function(i,a,l,c){return new LA(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new FA(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>of(this.syncEngine,n,0),function(){return Zh.p()?new Zh:new kA}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new JA(s,i,a,l,c,h);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ee(s);X("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await pi(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Dl.provider={build:()=>new Dl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=st.UNAUTHENTICATED,this.clientId=Ap.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wa(t,e){t.asyncQueue.verifyOperationInProgress(),X("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function lf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cb(t);X("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>tf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>tf(e.remoteStore,s)),t._onlineComponents=e}async function cb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===q.FAILED_PRECONDITION||s.code===q.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Qr("Error using user provided cache. Falling back to memory cache: "+n),await Wa(t,new Ao)}}else X("FirestoreClient","Using default OfflineComponentProvider"),await Wa(t,new ab(void 0));return t._offlineComponents}async function ub(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X("FirestoreClient","Using user provided OnlineComponentProvider"),await lf(t,t._uninitializedComponentsProvider._online)):(X("FirestoreClient","Using default OnlineComponentProvider"),await lf(t,new Dl))),t._onlineComponents}async function mg(t){const e=await ub(t),n=e.eventManager;return n.onListen=XA.bind(null,e.syncEngine),n.onUnlisten=tb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ZA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nb.bind(null,e.syncEngine),n}function hb(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new gg({next:m=>{d.eu(),a.enqueueAndForget(()=>og(i,p));const T=m.docs.has(l);!T&&m.fromCache?h.reject(new te(q.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&m.fromCache&&c&&c.source==="server"?h.reject(new te(q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ag(ac(l.path),d,{includeMetadataChanges:!0,ua:!0});return ig(i,p)}(await mg(t),t.asyncQueue,e,n,r)),r.promise}function fb(t,e,n={}){const r=new jn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const d=new gg({next:m=>{d.eu(),a.enqueueAndForget(()=>og(i,p)),m.fromCache&&c.source==="server"?h.reject(new te(q.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new ag(l,d,{includeMetadataChanges:!0,ua:!0});return ig(i,p)}(await mg(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t,e,n){if(!n)throw new te(q.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function db(t,e,n,r){if(e===!0&&r===!0)throw new te(q.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function uf(t){if(!se.isDocumentKey(t))throw new te(q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hf(t){if(se.isDocumentKey(t))throw new te(q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pb(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":he()}function si(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pb(t);throw new te(q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new te(q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}db("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_g((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(q.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ia{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ff({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ff(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fw;switch(r.type){case"firstParty":return new jw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=cf.get(n);r&&(X("ComponentProvider","Removing Datastore"),cf.delete(n),r.terminate())}(this),Promise.resolve()}}function gb(t,e,n,r={}){var s;const i=(t=si(t,ia))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Qr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=st.MOCK_USER;else{l=pT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new te(q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new st(h)}t._authCredentials=new Uw(new Ip(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new oa(this.firestore,e,this._query)}}class Yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class qn extends oa{constructor(e,n,r){super(e,n,ac(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new se(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function mb(t,e,...n){if(t=Tn(t),yg("collection","path",e),t instanceof ia){const r=Ne.fromString(e,...n);return hf(r),new qn(t,null,r)}{if(!(t instanceof Yt||t instanceof qn))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return hf(r),new qn(t.firestore,null,r)}}function _b(t,e,...n){if(t=Tn(t),arguments.length===1&&(e=Ap.newId()),yg("doc","path",e),t instanceof ia){const r=Ne.fromString(e,...n);return uf(r),new Yt(t,null,new se(r))}{if(!(t instanceof Yt||t instanceof qn))throw new te(q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return uf(r),new Yt(t.firestore,t instanceof qn?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new eg(this,"async_queue_retry"),this.fu=()=>{const r=Ka();r&&X("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Ka();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Ka();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new jn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ss(e))throw e;X("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw _n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const s=yc.createAndSchedule(this,e,n,r,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&he()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Tc extends ia{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new df,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new df(e),this._firestoreClient=void 0,await e}}}function yb(t,e){const n=typeof t=="object"?t:pp(),r=typeof t=="string"?t:"(default)",s=tc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=fT("firestore");i&&gb(s,...i)}return s}function vg(t){if(t._terminated)throw new te(q.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||vb(t),t._firestoreClient}function vb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new rI(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,_g(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new lb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bo(Xe.fromBase64String(e))}catch(n){throw new te(q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bo(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ve(this._lat,e._lat)||ve(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}const wb=new RegExp("[~\\*/\\[\\]]");function Ib(t,e,n){if(e.search(wb)>=0)throw pf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Eg(...e.split("."))._internalPath}catch{throw pf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function pf(t,e,n,r,s){let i=`Function ${e}() called with invalid data`;i+=". ";let a="";return new te(q.INVALID_ARGUMENT,i+t+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ab(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Ab extends Tg{data(){return super.data()}}function wg(t,e){return typeof e=="string"?Ib(t,e):e instanceof Eg?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Rb{convertValue(e,n="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw he()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fi(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Fe(a.doubleValue));return new Tb(i)}convertGeoPoint(e){return new Eb(Fe(e.latitude),Fe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jo(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ti(e));default:return null}}convertTimestamp(e){const n=Kn(e);return new Et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Le(Qp(r));const s=new ni(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ig extends Tg{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new no(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class no extends Ig{data(e={}){return super.data(e)}}class Sb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ks(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new no(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new no(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new no(s._firestore,s._userDataWriter,l.doc.key,l.doc,new ks(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:Cb(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Cb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return he()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(t){t=si(t,Yt);const e=si(t.firestore,Tc);return hb(vg(e),t._key).then(n=>Db(e,t,n))}class Ag extends Rb{constructor(e){super(),this.firestore=e}convertBytes(e){return new bo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,n)}}function kb(t){t=si(t,oa);const e=si(t.firestore,Tc),n=vg(e),r=new Ag(e);return bb(t._query),fb(n,t._query).then(s=>new Sb(e,r,t,s))}function Db(t,e,n){const r=n.docs.get(e._key),s=new Ag(t);return new Ig(t,s,e._key,r,new ks(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){rs=s})(ns),Gr(new pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Tc(new Bw(r.getProvider("auth-internal")),new Hw(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),$n(Ch,"4.7.5",e),$n(Ch,"4.7.5","esm2017")})();const Ob={data(){return{blogs:[]}},created(){this.fetchBlogs()},methods:{async fetchBlogs(){try{const t=mb(Dc,"blog-collection"),e=await kb(t);this.blogs=e.docs.map(n=>({id:n.id,...n.data()}))}catch(t){console.error("Error fetching blogs:",t)}}}},Nb={class:"home"};function Vb(t,e,n,r,s,i){const a=zt("router-link");return He(),We("div",Nb,[e[0]||(e[0]=z("h1",null,"This is the blog page",-1)),(He(!0),We(Dt,null,L_(s.blogs,l=>(He(),We("div",{key:l.id},[Se(a,{to:"/blog/"+l.id},{default:hn(()=>[z("button",null,zs(l.title),1)]),_:2},1032,["to"])]))),128))])}const xb=_t(Ob,[["render",Vb]]);function wc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lb=bg,Rg=new ui("auth","Firebase",bg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Zl("@firebase/auth");function Mb(t,...e){Ro.logLevel<=ge.WARN&&Ro.warn(`Auth (${ns}): ${t}`,...e)}function ro(t,...e){Ro.logLevel<=ge.ERROR&&Ro.error(`Auth (${ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,...e){throw Ic(t,...e)}function Jt(t,...e){return Ic(t,...e)}function Sg(t,e,n){const r=Object.assign(Object.assign({},Lb()),{[e]:n});return new ui("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return Sg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ic(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rg.create(t,...e)}function ae(t,e,...n){if(!t)throw Ic(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ro(e),new Error(e)}function yn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fb(){return gf()==="http:"||gf()==="https:"}function gf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ub(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fb()||yT()||"connection"in navigator)?navigator.onLine:!0}function Bb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=gT()||vT()}get(){return Ub()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $b={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=new mi(3e4,6e4);function vr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xn(t,e,n,r,s={}){return Pg(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=hi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return _T()||(h.referrerPolicy="no-referrer"),Cg.fetch()(kg(t,t.config.apiHost,n,l),h)})}async function Pg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$b),e);try{const s=new Hb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw qi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw qi(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw qi(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw qi(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Sg(t,d,h);Ut(t,d)}}catch(s){if(s instanceof En)throw s;Ut(t,"network-request-failed",{message:String(s)})}}async function aa(t,e,n,r,s={}){const i=await Xn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ut(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ac(t.config,s):`${t.config.apiScheme}://${s}`}function qb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),jb.get())})}}function qi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jt(t,e,r);return s.customData._tokenResponse=n,s}function mf(t){return t!==void 0&&t.enterprise!==void 0}class zb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return qb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Kb(t,e){return Xn(t,"GET","/v2/recaptchaConfig",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e){return Xn(t,"POST","/v1/accounts:delete",e)}async function Dg(t,e){return Xn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gb(t,e=!1){const n=Tn(t),r=await n.getIdToken(e),s=bc(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Hs(Ga(s.auth_time)),issuedAtTime:Hs(Ga(s.iat)),expirationTime:Hs(Ga(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ga(t){return Number(t)*1e3}function bc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=ap(n);return s?JSON.parse(s):(ro("Failed to decode base64 JWT payload"),null)}catch(s){return ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _f(t){const e=bc(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&Qb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Qb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ii(t,Dg(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Og(i.providerUserInfo):[],l=Xb(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Nl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Jb(t){const e=Tn(t);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Xb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Og(t){return t.map(e=>{var{providerId:n}=e,r=wc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(t,e){const n=await Pg(t,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=kg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cg.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function e0(t,e){return Xn(t,"POST","/v2/accounts:revokeToken",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_f(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=_f(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Zb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new jr;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ii(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gb(this,e)}reload(){return Jb(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await ii(this,Wb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,W=(h=n.createdAt)!==null&&h!==void 0?h:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:K,emailVerified:H,isAnonymous:fe,providerData:de,stsTokenManager:I}=n;ae(K&&I,e,"internal-error");const _=jr.fromJSON(this.name,I);ae(typeof K=="string",e,"internal-error"),Cn(p,e.name),Cn(m,e.name),ae(typeof H=="boolean",e,"internal-error"),ae(typeof fe=="boolean",e,"internal-error"),Cn(T,e.name),Cn(k,e.name),Cn(x,e.name),Cn(M,e.name),Cn(W,e.name),Cn(B,e.name);const w=new pn({uid:K,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:fe,photoURL:k,phoneNumber:T,tenantId:x,stsTokenManager:_,createdAt:W,lastLoginAt:B});return de&&Array.isArray(de)&&(w.providerData=de.map(A=>Object.assign({},A))),M&&(w._redirectEventId=M),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new jr;s.updateFromServerResponse(n);const i=new pn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await So(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Og(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new jr;l.updateFromIdToken(r);const c=new pn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Nl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=new Map;function gn(t){yn(t instanceof Function,"Expected a class definition");let e=yf.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,yf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ng.type="NONE";const vf=Ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=so(this.userKey,s.apiKey,i),this.fullPersistenceKey=so("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(gn(vf),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||gn(vf);const a=so(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){const p=pn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new qr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ug(e))return"Blackberry";if(Bg(e))return"Webos";if(xg(e))return"Safari";if((e.includes("chrome/")||Lg(e))&&!e.includes("edge/"))return"Chrome";if(Fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vg(t=ht()){return/firefox\//i.test(t)}function xg(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lg(t=ht()){return/crios\//i.test(t)}function Mg(t=ht()){return/iemobile/i.test(t)}function Fg(t=ht()){return/android/i.test(t)}function Ug(t=ht()){return/blackberry/i.test(t)}function Bg(t=ht()){return/webos/i.test(t)}function Rc(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function t0(t=ht()){var e;return Rc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function n0(){return ET()&&document.documentMode===10}function $g(t=ht()){return Rc(t)||Fg(t)||Bg(t)||Ug(t)||/windows phone/i.test(t)||Mg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=Ef(ht());break;case"Worker":n=`${Ef(ht())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e={}){return Xn(t,"GET","/v2/passwordPolicy",vr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i0=6;class o0{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:i0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tf(this),this.idTokenSubscription=new Tf(this),this.beforeStateQueue=new r0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dg(this,{idToken:e}),r=await pn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Bb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(Hn(this));const n=e?Tn(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await s0(this),n=new o0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await e0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function os(t){return Tn(t)}class Tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=CT(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let la={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function l0(t){la=t}function qg(t){return la.loadJS(t)}function c0(){return la.recaptchaEnterpriseScript}function u0(){return la.gapiScript}function h0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class f0{constructor(){this.enterprise=new d0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class d0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const p0="recaptcha-enterprise",Hg="NO_RECAPTCHA";class g0{constructor(e){this.type=p0,this.auth=os(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{Kb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new zb(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,a,l){const c=window.grecaptcha;mf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(Hg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new f0().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!n&&mf(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=c0();c.length!==0&&(c+=l),qg(c).then(()=>{s(l,i,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function wf(t,e,n,r=!1,s=!1){const i=new g0(t);let a;if(s)a=Hg;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function If(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await wf(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await wf(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t,e){const n=tc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_o(i,e??{}))return s;Ut(s,"already-initialized")}return n.initialize({options:e})}function _0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function y0(t,e,n){const r=os(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=zg(e),{host:a,port:l}=v0(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),E0()}function zg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function v0(t){const e=zg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Af(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Af(a)}}}function Af(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function E0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}async function T0(t,e){return Xn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w0(t,e){return aa(t,"POST","/v1/accounts:signInWithPassword",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I0(t,e){return aa(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}async function A0(t,e){return aa(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Sc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new oi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return If(e,n,"signInWithPassword",w0);case"emailLink":return I0(e,{email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return If(e,r,"signUpPassword",T0);case"emailLink":return A0(e,{idToken:n,email:this._email,oobCode:this._password});default:Ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e){return aa(t,"POST","/v1/accounts:signInWithIdp",vr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="http://localhost";class mr extends Sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new mr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new mr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:b0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S0(t){const e=bs(Rs(t)).link,n=e?bs(Rs(e)).deep_link_id:null,r=bs(Rs(t)).deep_link_id;return(r?bs(Rs(r)).link:null)||r||n||e||t}class Cc{constructor(e){var n,r,s,i,a,l;const c=bs(Rs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=R0((s=c.mode)!==null&&s!==void 0?s:null);ae(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=S0(e);try{return new Cc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.providerId=as.PROVIDER_ID}static credential(e,n){return oi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cc.parseLink(n);return ae(r,"argument-error"),oi._fromEmailAndCode(e,r.code,r.tenantId)}}as.PROVIDER_ID="password";as.EMAIL_PASSWORD_SIGN_IN_METHOD="password";as.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends Kg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends _i{constructor(){super("facebook.com")}static credential(e){return mr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends _i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return mr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends _i{constructor(){super("github.com")}static credential(e){return mr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends _i{constructor(){super("twitter.com")}static credential(e,n){return mr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await pn._fromIdTokenResponse(e,r,s),a=bf(r);return new ts({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bf(r);return new ts({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends En{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Co(e,n,r,s)}}function Wg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(t,i,e,r):i})}async function C0(t,e,n=!1){const r=await ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(t,e,n=!1){const{auth:r}=t;if(fn(r.app))return Promise.reject(Hn(r));const s="reauthenticate";try{const i=await ii(t,Wg(r,s,e,t),n);ae(i.idToken,r,"internal-error");const a=bc(i.idToken);ae(a,r,"internal-error");const{sub:l}=a;return ae(t.uid===l,r,"user-mismatch"),ts._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ut(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gg(t,e,n=!1){if(fn(t.app))return Promise.reject(Hn(t));const r="signIn",s=await Wg(t,r,e),i=await ts._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function k0(t,e){return Gg(os(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D0(t){const e=os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function O0(t,e,n){return fn(t.app)?Promise.reject(Hn(t)):k0(Tn(t),as.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&D0(t),r})}function N0(t,e,n,r){return Tn(t).onIdTokenChanged(e,n,r)}function V0(t,e,n){return Tn(t).beforeAuthStateChanged(e,n)}const Po="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Po,"1"),this.storage.removeItem(Po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0=1e3,L0=10;class Yg extends Qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$g(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);n0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,L0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},x0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yg.type="LOCAL";const M0=Yg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends Qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jg.type="SESSION";const Xg=Jg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ca(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await F0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ca.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Pc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return window}function B0(t){Xt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(){return typeof Xt().WorkerGlobalScope<"u"&&typeof Xt().importScripts=="function"}async function $0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function q0(){return Zg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="firebaseLocalStorageDb",H0=1,ko="firebaseLocalStorage",tm="fbase_key";class yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ua(t,e){return t.transaction([ko],e?"readwrite":"readonly").objectStore(ko)}function z0(){const t=indexedDB.deleteDatabase(em);return new yi(t).toPromise()}function Vl(){const t=indexedDB.open(em,H0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ko,{keyPath:tm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ko)?e(r):(r.close(),await z0(),e(await Vl()))})})}async function Rf(t,e,n){const r=ua(t,!0).put({[tm]:e,value:n});return new yi(r).toPromise()}async function K0(t,e){const n=ua(t,!1).get(e),r=await new yi(n).toPromise();return r===void 0?null:r.value}function Sf(t,e){const n=ua(t,!0).delete(e);return new yi(n).toPromise()}const W0=800,G0=3;class nm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>G0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ca._getInstance(q0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $0(),!this.activeServiceWorker)return;this.sender=new U0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vl();return await Rf(e,Po,"1"),await Sf(e,Po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>K0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ua(s,!1).getAll();return new yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nm.type="LOCAL";const Q0=nm;new mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(t,e){return e?gn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc extends Sc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function J0(t){return Gg(t.auth,new kc(t),t.bypassAuthState)}function X0(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),P0(n,new kc(t),t.bypassAuthState)}async function Z0(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),C0(n,new kc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return J0;case"linkViaPopup":case"linkViaRedirect":return Z0;case"reauthViaPopup":case"reauthViaRedirect":return X0;default:Ut(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=new mi(2e3,1e4);class Or extends rm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Or.currentPopupAction&&Or.currentPopupAction.cancel(),Or.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=Pc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Or.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eR.get())};e()}}Or.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="pendingRedirect",io=new Map;class nR extends rm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=io.get(this.auth._key());if(!e){try{const r=await rR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}io.set(this.auth._key(),e)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rR(t,e){const n=oR(e),r=iR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sR(t,e){io.set(t._key(),e)}function iR(t){return gn(t._redirectPersistence)}function oR(t){return so(tR,t.config.apiKey,t.name)}async function aR(t,e,n=!1){if(fn(t.app))return Promise.reject(Hn(t));const r=os(t),s=Y0(r,e),a=await new nR(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=10*60*1e3;class cR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cf(e))}saveEventToCache(e){this.cachedEventUids.add(Cf(e)),this.lastProcessedEventTime=Date.now()}}function Cf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(t,e={}){return Xn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dR=/^https?/;async function pR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hR(t);for(const n of e)try{if(gR(n))return}catch{}Ut(t,"unauthorized-domain")}function gR(t){const e=Ol(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!dR.test(n))return!1;if(fR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=new mi(3e4,6e4);function Pf(){const t=Xt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _R(t){return new Promise((e,n)=>{var r,s,i;function a(){Pf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pf(),n(Jt(t,"network-request-failed"))},timeout:mR.get()})}if(!((s=(r=Xt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Xt().gapi)===null||i===void 0)&&i.load)a();else{const l=h0("iframefcb");return Xt()[l]=()=>{gapi.load?a():n(Jt(t,"network-request-failed"))},qg(`${u0()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw oo=null,e})}let oo=null;function yR(t){return oo=oo||_R(t),oo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=new mi(5e3,15e3),ER="__/auth/iframe",TR="emulator/auth/iframe",wR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AR(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ac(e,TR):`https://${t.config.authDomain}/${ER}`,r={apiKey:e.apiKey,appName:t.name,v:ns},s=IR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hi(r).slice(1)}`}async function bR(t){const e=await yR(t),n=Xt().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:AR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Jt(t,"network-request-failed"),l=Xt().setTimeout(()=>{i(a)},vR.get());function c(){Xt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},SR=500,CR=600,PR="_blank",kR="http://localhost";class kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function DR(t,e,n,r=SR,s=CR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},RR),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ht().toLowerCase();n&&(l=Lg(h)?PR:n),Vg(h)&&(e=e||kR,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[T,k])=>`${m}${T}=${k},`,"");if(t0(h)&&l!=="_self")return OR(e||"",l),new kf(null);const p=window.open(e||"",l,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new kf(p)}function OR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="__/auth/handler",VR="emulator/auth/handler",xR=encodeURIComponent("fac");async function Df(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:s};if(e instanceof Kg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ST(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof _i){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${xR}=${encodeURIComponent(c)}`:"";return`${LR(t)}?${hi(l).slice(1)}${h}`}function LR({config:t}){return t.emulator?Ac(t,VR):`https://${t.authDomain}/${NR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="webStorageSupport";class MR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xg,this._completeRedirectFn=aR,this._overrideRedirectResult=sR}async _openPopup(e,n,r,s){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Df(e,n,r,Ol(),s);return DR(e,a,Pc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Df(e,n,r,Ol(),s);return B0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bR(e),r=new cR(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qa,{type:Qa},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qa];a!==void 0&&n(!!a),Ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $g()||xg()||Rc()}}const FR=MR;var Of="@firebase/auth",Nf="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $R(t){Gr(new pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},h=new a0(r,s,i,c);return _0(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gr(new pr("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(r=>new UR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(Of,Nf,BR(t)),$n(Of,Nf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=5*60,qR=up("authIdTokenMaxAge")||jR;let Vf=null;const HR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qR)return;const s=n==null?void 0:n.token;Vf!==s&&(Vf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function zR(t=pp()){const e=tc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=m0(t,{popupRedirectResolver:FR,persistence:[Q0,M0,Xg]}),r=up("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=HR(i.toString());V0(n,a,()=>a(n.currentUser)),N0(n,l=>a(l))}}const s=lp("auth");return s&&y0(n,`http://${s}`),n}function KR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}l0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Jt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",KR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$R("Browser");const WR={setup(){const t=iE(),e=zi(""),n=zi(""),r=zi(null),s=async()=>{r.value=null;try{const a=await O0(im,e.value,n.value);console.log("User logged in:",a.user),t.push("/user-dashboard")}catch(a){r.value=a.message,console.log("Authentication failed! Error: "+r.value)}};return{email:e,password:n,error:r,submitForm:()=>{s()}}}},GR={class:"form-group"},QR={class:"form-group"};function YR(t,e,n,r,s,i){return He(),We("form",{onSubmit:e[2]||(e[2]=qd((...a)=>r.submitForm&&r.submitForm(...a),["prevent"]))},[z("div",GR,[e[3]||(e[3]=z("label",{for:"email"},null,-1)),Dr(z("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>r.email=a),placeholder:"Email",type:"text",id:"email",required:""},null,512),[[Ms,r.email]])]),z("div",QR,[e[4]||(e[4]=z("label",{for:"password"},null,-1)),Dr(z("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.password=a),placeholder:"Password",type:"text",id:"password",required:""},null,512),[[Ms,r.password]])]),e[5]||(e[5]=z("div",{class:"form-group"},[z("button",{type:"submit"},"Login")],-1))],32)}const JR=_t(WR,[["render",YR],["__scopeId","data-v-6946c760"]]),XR={components:{LoginFormComponent:JR}},ZR={class:"home"};function eS(t,e,n,r,s,i){const a=zt("LoginFormComponent");return He(),We("div",ZR,[e[0]||(e[0]=z("h1",null,"Login",-1)),Se(a)])}const tS=_t(XR,[["render",eS]]),nS={data(){return{blog:null,loading:!0,error:null}},created(){this.fetchBlogPost()},methods:{async fetchBlogPost(){const t=this.$route.params.id;try{const e=_b(Dc,"blog-collection",t),n=await Pb(e);n.exists()?this.blog={id:n.id,...n.data()}:this.error="Blog not found"}catch(e){this.error="Error fetching blog post: "+e.message}finally{this.loading=!1}}}},rS={class:"blog-post"},sS={key:0},iS={key:1},oS={key:2},aS=["innerHTML"];function lS(t,e,n,r,s,i){return He(),We("div",rS,[s.loading?(He(),We("h1",sS,"Loading...")):Yi("",!0),s.error?(He(),We("div",iS,zs(s.error),1)):Yi("",!0),s.blog?(He(),We("div",oS,[z("h2",null,zs(s.blog.title),1),z("div",{innerHTML:s.blog.textcontent},null,8,aS)])):Yi("",!0)])}const cS=_t(nS,[["render",lS]]),uS={},hS={class:"home"};function fS(t,e){return He(),We("div",hS,e[0]||(e[0]=[z("h1",null,"This is the user dashboard page",-1)]))}const dS=_t(uS,[["render",fS]]),pS={};function gS(t,e){return e[0]||(e[0]=qo('<div class="intro-banner" data-v-0a6100c8><h1 data-v-0a6100c8>Funding Partners</h1><p class="intro-text" data-v-0a6100c8>The Open-Source Nematode DrugBase Project is generously funded by the Quintin Hogg Trust (QHT) and the Africa Research Excellence Fund (AREF). </p></div><section class="header-section" data-v-0a6100c8><div class="logoSection" style="background-color:wheat;" data-v-0a6100c8><a href="https://quintinhoggtrust.org/" class="OrgName" data-v-0a6100c8><h2 data-v-0a6100c8>Quintin Hog Trust</h2></a><a href="https://quintinhoggtrust.org/" data-v-0a6100c8><img src="'+rp+'" data-v-0a6100c8></a></div><br data-v-0a6100c8><div class="logoSection" style="background-color:rgb(176, 238, 47);" data-v-0a6100c8><a href="https://africaresearchexcellencefund.org.uk/" class="OrgName" data-v-0a6100c8><h2 data-v-0a6100c8>Africa Research Excellence Fund</h2></a><a href="https://africaresearchexcellencefund.org.uk/" data-v-0a6100c8><img src="'+sp+'" data-v-0a6100c8></a></div></section>',2))}const mS=_t(pS,[["render",gS],["__scopeId","data-v-0a6100c8"]]),_S={};function yS(t,e){return e[0]||(e[0]=qo('<div class="intro-banner"><h1>Privacy Policy</h1><p class="intro-text"> The ONDB team respects your privacy. This Privacy Policy explains how we collect, use, and protect your information. </p></div><section class="policy-section"><h2>Effective Date: 27.01.2025</h2><div class="policy-item"><h3>What Information We Collect</h3><p>When you use our contact form powered by Formspree, we collect the following information:</p><ul><li>Name (if provided)</li><li>Email address</li><li>The content of your message</li></ul></div><div class="policy-item"><h3>How We Use Your Information</h3><p>We use the information you provide to:</p><ul><li>Respond to your inquiries</li><li>Improve our services</li></ul></div><div class="policy-item"><h3>How We Store and Share Your Information</h3><p> The data submitted through our contact form is securely handled by Formspree. We do not store this data on our servers. Formspree’s privacy practices apply to the handling of your data. </p><p> We do not share your information with third parties unless required by law. </p><p>You can view Formspree&#39;s privacy policy <a href="https://formspree.io/legal/privacy-policy/" target="_blank">here</a>.</p></div><div class="policy-item"><h3>Your Rights</h3><p>You have the right to:</p><ul><li>Request access to your data</li><li>Request the deletion of your data</li></ul><p>To make such a request, contact us at <a href="mailto:ondb@westminster.ac.uk">ondb@westminster.ac.uk</a>.</p></div><div class="policy-item"><h3>Contact Us</h3><p> If you have any questions about this Privacy Policy, contact us at: <a href="mailto:ondb@westminster.ac.uk">ondb@westminster.ac.uk</a></p></div><div class="policy-item"><h3>Updates to this Policy</h3><p> We may update this policy from time to time. Changes will be posted on this page. Please review it periodically to stay informed. </p></div></section>',2))}const vS=_t(_S,[["render",yS]]),ES=[{path:"/",name:"HomeView",component:jE},{path:"/about",name:"AboutView",component:zE},{path:"/contact",name:"ContactView",component:sT},{path:"/blog",name:"BlogView",component:xb},{path:"/blog/:id",name:"BlogPost",component:cS,props:!0},{path:"/login",name:"LoginView",component:tS},{path:"/user-dashboard",name:"UserDashboard",component:dS},{path:"/funding",name:"Funding",component:mS},{path:"/privacy-policy",name:"PrivacyPolicy",component:vS}],TS=rE({history:Ov(),routes:ES});var wS="firebase",IS="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(wS,IS,"app");const AS={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1,VITE_APP_FIREBASE_API_KEY:"AIzaSyBl0sLLDb2KWBhn8uRUwI_CKhgX0Sr-UOU",VITE_APP_FIREBASE_APP_ID:"1:21310716509:web:94574ddcd4b62d5682abb4",VITE_APP_FIREBASE_AUTH_DOMAIN:"ondb-website.firebaseapp.com",VITE_APP_FIREBASE_MESSAGING_SENDER_ID:"21310716509",VITE_APP_FIREBASE_PROJECT_ID:"ondb-website",VITE_APP_FIREBASE_STORAGE_BUCKET:"ondb-website.firebasestorage.app"},bS={apiKey:"AIzaSyBl0sLLDb2KWBhn8uRUwI_CKhgX0Sr-UOU",authDomain:"ondb-website.firebaseapp.com",databaseURL:void 0,projectId:"ondb-website",storageBucket:"ondb-website.firebasestorage.app",messagingSenderId:"21310716509",appId:"1:21310716509:web:94574ddcd4b62d5682abb4"};let Ya,Dc,im;try{console.log(AS),Ya=dp(bS),Dc=yb(Ya),im=zR(Ya),console.log("Firebase initialised.")}catch(t){console.error("Firebase intialisation failed. Error:"+t)}const om=Xy(NE);om.use(TS);om.mount("#app");

import{N as d,O as _,P as A,y as x,Q as L,R as V,S as R,U as W,v as j,V as B,W as C,x as v,H,b as E,e as T,h as S,k as m,g as M,X as P,A as k,Y as q,J as F}from"./runtime.ClhwmaLo.js";import{s as U}from"./utils.CIJM7cSR.js";function Y(e){var t=A,n=x;d(null),_(null);try{return e()}finally{d(t),_(n)}}const z=new Set,G=new Set;function J(e,t,n,a){function i(r){if(a.capture||Q.call(t,r),!r.cancelBubble)return Y(()=>n.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?V(()=>{t.addEventListener(e,i,a)}):t.addEventListener(e,i,a),i}function te(e,t,n,a,i){var r={capture:a,passive:i},s=J(e,t,n,r);(t===document.body||t===window||t===document)&&L(()=>{t.removeEventListener(e,s,r)})}function re(e){for(var t=0;t<e.length;t++)z.add(e[t]);for(var n of G)n(e)}function Q(e){var w;var t=this,n=t.ownerDocument,a=e.type,i=((w=e.composedPath)==null?void 0:w.call(e))||[],r=i[0]||e.target,s=0,b=e.__root;if(b){var p=i.indexOf(b);if(p!==-1&&(t===document||t===window)){e.__root=t;return}var y=i.indexOf(t);if(y===-1)return;p<=y&&(s=p)}if(r=i[s]||e.target,r!==t){R(e,"currentTarget",{configurable:!0,get(){return r||n}});var N=A,O=x;d(null),_(null);try{for(var u,g=[];r!==null;){var h=r.assignedSlot||r.parentNode||r.host||null;try{var c=r["__"+a];if(c!==void 0&&!r.disabled)if(W(c)){var[D,...I]=c;D.apply(r,[e,...I])}else c.call(r,e)}catch(l){u?g.push(l):u=l}if(e.cancelBubble||h===t||h===null)break;r=h}if(u){for(let l of g)queueMicrotask(()=>{throw l});throw u}}finally{e.__root=t,delete e.currentTarget,d(N),_(O)}}}let o;function ae(){o=void 0}function ne(e){let t=null,n=v;var a;if(v){for(t=m,o===void 0&&(o=M(document.head));o!==null&&(o.nodeType!==8||o.data!==H);)o=E(o);o===null?T(!1):o=S(E(o))}v||(a=document.head.appendChild(j()));try{B(()=>e(a),C)}finally{n&&(T(!0),o=m,S(t))}}function ie(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const X=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function oe(e){return X.includes(e)}const K={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function se(e){return e=e.toLowerCase(),K[e]??e}const Z=["touchstart","touchmove"];function ue(e){return Z.includes(e)}let f=!1;function ce(e,t,n){const a=n[t]??(n[t]={store:null,source:P(void 0),unsubscribe:k});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=k;else{var i=!0;a.unsubscribe=U(e,r=>{i?a.source.v=r:q(a.source,r)}),i=!1}return F(a.source)}function le(){const e={};return L(()=>{for(var t in e)e[t].unsubscribe()}),e}function fe(e){var t=f;try{return f=!1,[e(),f]}finally{f=t}}export{ce as a,z as b,ae as c,fe as d,ie as e,J as f,re as g,Q as h,ue as i,oe as j,ne as k,te as l,se as n,G as r,le as s};
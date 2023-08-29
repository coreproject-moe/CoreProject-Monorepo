import{s as $t,f as r,l as L,a as _,W as yt,g as o,h as f,m as V,d as m,c as x,r as H,X as Et,j as n,A as It,i as Tt,u as t,Q as Ct,y as Ut,x as kt,U as Ot,I as Dt}from"./scheduler.036c1cd3.js";import{S as Mt,i as Ft,b as Ht,d as Lt,m as Vt,a as Bt,t as Rt,e as qt}from"./index.a85a8016.js";import{e as St}from"./each.3d878967.js";import{T as zt}from"./tick.46fedfa1.js";import"./ProgressBar.svelte_svelte_type_style_lang.1b3422c6.js";import{f as Qt}from"./focusTrap.f08ca3d9.js";import{c as Wt}from"./create-form.903d409a.js";function Nt(d,e,c){const a=d.slice();return a[5]=e[c],a}function At(d){let e,c;return{c(){e=r("span"),c=L(d[5]),this.h()},l(a){e=o(a,"SPAN",{class:!0});var p=f(e);c=V(p,d[5]),p.forEach(m),this.h()},h(){n(e,"class",d[0][d[5]])},m(a,p){Tt(a,e,p),t(e,c)},p:Dt,d(a){a&&m(e)}}}function Xt(d){let e,c,a,p,h,M,F,u,C,it="Summary",J,g,S,mt="Username",K,I,ut=d[2].username+"",Y,Z,w,N,ft="Email",tt,U,dt=d[2].email+"",et,st,y,A,B,Pt="< resend code >",at,T,R,jt="< change email >",lt,E,P,pt='<span class="text-xs text-surface-100 md:text-[0.75vw]">Already have an account?</span> <a href="./login" class="text-base md:text-[1.1vw]">Login</a>',nt,v,k,_t="Finish",rt,j,q,ot,xt,O=St("core".split("")),i=[];for(let l=0;l<O.length;l+=1)i[l]=At(Nt(d,O,l));return j=new zt({props:{class:"w-3 md:w-[0.75vw]"}}),{c(){e=r("form"),c=r("div"),a=r("span"),p=L(`welcome to \r
            `),h=r("p");for(let l=0;l<i.length;l+=1)i[l].c();M=L(`\r
            project`),F=_(),u=r("user-info"),C=r("span"),C.textContent=it,J=_(),g=r("username"),S=r("span"),S.textContent=mt,K=_(),I=r("span"),Y=L(ut),Z=_(),w=r("email"),N=r("span"),N.textContent=ft,tt=_(),U=r("span"),et=L(dt),st=_(),y=r("div"),A=r("button"),B=new yt(!1),at=_(),T=r("button"),R=new yt(!1),lt=_(),E=r("div"),P=r("div"),P.innerHTML=pt,nt=_(),v=r("button"),k=r("span"),k.textContent=_t,rt=_(),Ht(j.$$.fragment),this.h()},l(l){e=o(l,"FORM",{class:!0});var b=f(e);c=o(b,"DIV",{class:!0});var s=f(c);a=o(s,"SPAN",{class:!0});var $=f(a);p=V($,`welcome to \r
            `),h=o($,"P",{class:!0});var ht=f(h);for(let ct=0;ct<i.length;ct+=1)i[ct].l(ht);ht.forEach(m),M=V($,`\r
            project`),$.forEach(m),F=x(s),u=o(s,"USER-INFO",{class:!0});var D=f(u);C=o(D,"SPAN",{class:!0,"data-svelte-h":!0}),H(C)!=="svelte-4li0if"&&(C.textContent=it),J=x(D),g=o(D,"USERNAME",{class:!0});var z=f(g);S=o(z,"SPAN",{class:!0,"data-svelte-h":!0}),H(S)!=="svelte-1wi1uev"&&(S.textContent=mt),K=x(z),I=o(z,"SPAN",{class:!0});var vt=f(I);Y=V(vt,ut),vt.forEach(m),z.forEach(m),Z=x(D),w=o(D,"EMAIL",{class:!0});var Q=f(w);N=o(Q,"SPAN",{class:!0,"data-svelte-h":!0}),H(N)!=="svelte-1dy9i0j"&&(N.textContent=ft),tt=x(Q),U=o(Q,"SPAN",{class:!0});var bt=f(U);et=V(bt,dt),bt.forEach(m),Q.forEach(m),D.forEach(m),st=x(s),y=o(s,"DIV",{class:!0});var W=f(y);A=o(W,"BUTTON",{type:!0,class:!0});var gt=f(A);B=Et(gt,!1),gt.forEach(m),at=x(W),T=o(W,"BUTTON",{type:!0,class:!0});var wt=f(T);R=Et(wt,!1),wt.forEach(m),W.forEach(m),s.forEach(m),lt=x(b),E=o(b,"DIV",{class:!0});var X=f(E);P=o(X,"DIV",{class:!0,"data-svelte-h":!0}),H(P)!=="svelte-mswqy1"&&(P.innerHTML=pt),nt=x(X),v=o(X,"BUTTON",{type:!0,class:!0});var G=f(v);k=o(G,"SPAN",{"data-svelte-h":!0}),H(k)!=="svelte-8wouzp"&&(k.textContent=_t),rt=x(G),Lt(j.$$.fragment,G),G.forEach(m),X.forEach(m),b.forEach(m),this.h()},h(){n(h,"class","inline-flex items-center text-surface-50"),n(a,"class","flex items-center pb-3 text-base font-bold uppercase tracking-widest text-white md:text-[1.2vw]"),n(C,"class","text-lg font-semibold text-primary-500 md:text-[1.5vw]"),n(S,"class","text-lg font-medium md:text-[1.1vw]"),n(I,"class","text-base font-medium text-surface-300 md:text-[1.1vw]"),n(g,"class","flex flex-col pt-5"),n(N,"class","text-lg font-medium md:text-[1.1vw]"),n(U,"class","text-base font-medium text-surface-300 md:text-[1.1vw]"),n(w,"class","flex flex-col pt-3"),It(u,"class","flex flex-col"),B.a=null,n(A,"type","button"),n(A,"class","btn p-0 text-base font-semibold text-primary-600 underline md:text-[1vw]"),R.a=null,n(T,"type","button"),n(T,"class","btn p-0 text-base font-semibold text-primary-600 underline md:text-[1vw]"),n(y,"class","flex flex-col items-start"),n(c,"class","flex flex-col items-start gap-[3vw]"),n(P,"class","flex flex-col gap-1 md:gap-0"),n(v,"type","submit"),n(v,"class","btn h-12 rounded-lg bg-secondary-800 p-0 px-5 text-base font-semibold md:h-[2.75vw] md:rounded-[0.5vw] md:px-[1.25vw] md:text-[0.95vw]"),n(E,"class","mt-10 flex items-center justify-between md:mt-0"),n(e,"class","flex h-max w-full flex-col bg-surface-900 px-10 py-14 md:h-full md:justify-between md:rounded-none md:p-0")},m(l,b){Tt(l,e,b),t(e,c),t(c,a),t(a,p),t(a,h);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(h,null);t(a,M),t(c,F),t(c,u),t(u,C),t(u,J),t(u,g),t(g,S),t(g,K),t(g,I),t(I,Y),t(u,Z),t(u,w),t(w,N),t(w,tt),t(w,U),t(U,et),t(c,st),t(c,y),t(y,A),B.m(Pt,A),t(y,at),t(y,T),R.m(jt,T),t(e,lt),t(e,E),t(E,P),t(E,nt),t(E,v),t(v,k),t(v,rt),Vt(j,v,null),q=!0,ot||(xt=[Ct(d[1].call(null,e)),Ct(Qt.call(null,e,!0))],ot=!0)},p(l,[b]){if(b&1){O=St("core".split(""));let s;for(s=0;s<O.length;s+=1){const $=Nt(l,O,s);i[s]?i[s].p($,b):(i[s]=At($),i[s].c(),i[s].m(h,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=O.length}},i(l){q||(Bt(j.$$.fragment,l),q=!0)},o(l){Rt(j.$$.fragment,l),q=!1},d(l){l&&m(e),Ut(i,l),qt(j),ot=!1,kt(xt)}}}function Gt(d,e,c){let{pages_state:a}=e;const p={c:"text-surface-50",e:"text-surface-50",o:"text-warning-400",r:"text-surface-50"},h=Ot(),{form:M}=Wt({onSubmit:u=>{h("submit",u)}}),F=Object.assign({},...a);return d.$$set=u=>{"pages_state"in u&&c(3,a=u.pages_state)},[p,M,F,a]}class ae extends Mt{constructor(e){super(),Ft(this,e,Gt,Xt,$t,{pages_state:3})}}export{ae as default};

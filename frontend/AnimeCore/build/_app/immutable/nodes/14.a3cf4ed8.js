import{s as ms,E as is,F as mn,G as dn,h as d,d as l,j as c,H as Bs,i as V,u as s,I as Mt,J as Hs,a as h,f as i,l as L,c as v,g as m,r as U,m as R,A as O,n as pn,y as Pt,w as ra,V as da,q as Fs,Y as Vs,Q as ca,W as fa,e as zs,_ as ua,X as pa,T as Ys}from"../chunks/scheduler.036c1cd3.js";import{S as ds,i as cs,b as N,d as P,m as S,a as x,g as cn,t as E,c as fn,e as A,h as Ks}from"../chunks/index.a85a8016.js";import{p as Ws}from"../chunks/stores.86f882ef.js";import{e as ie}from"../chunks/each.3d878967.js";import{S as _a,A as ga,F as qs,T as ha,W as va,e as wa,f as Gs,a as ba,C as xa,b as $a,D as Ea}from"../chunks/comment.a5aea3bc.js";import{I as un}from"../chunks/image_loader.091bf2d5.js";import{C as kt}from"../chunks/chevron.a814d82e.js";import{C as ya}from"../chunks/cross.691f45c6.js";import{g as Oa}from"../chunks/spread.8a54911c.js";import{P as Ta}from"../chunks/play_circle.7e5e31f8.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.1b3422c6.js";import{b as Js}from"../chunks/index.429bf755.js";import{t as Ca}from"../chunks/tippy.esm.501d6439.js";import{O as Na}from"../chunks/opengraph.06ca6f5a.js";import{d as Sa}from"../chunks/index.6af06895.js";const Aa=[{id:1,mal_id:38e3,name:"Demon Slayer: Kimetsu no Yaiba",japanese_name:"鬼滅の刃",cover:"/images/DemonSlayer-bg.avif",episodes_count:12},{id:2,mal_id:12189,name:"Hyouka",japanese_name:"氷菓",cover:"/images/Hyouka-bg.avif",episodes_count:41},{id:3,mal_id:23273,name:"You Lie in April",japanese_name:"四月は君の嘘",cover:"/images/YourLieInApril-bg.avif",episodes_count:88},{id:4,mal_id:16498,name:"Attack on Titan",japanese_name:"進撃の巨人",cover:"/images/AttackOnTitan-bg.avif",episodes_count:53},{id:5,mal_id:40748,name:"Jujutsu Kaisen",japanese_name:"呪術廻戦",cover:"/images/JujutsuKaisen.avif",episodes_count:23},{id:6,mal_id:1535,name:"Death Note",japanese_name:"デスノート",cover:"/images/DeathNote-bg.avif",episodes_count:38}];function Ia(o){let e,n,t,r,p=[o[0],{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"}],f={};for(let g=0;g<p.length;g+=1)f=is(f,p[g]);return{c(){e=mn("svg"),n=mn("g"),t=mn("path"),r=mn("path"),this.h()},l(g){e=dn(g,"svg",{xmlns:!0,viewBox:!0});var $=d(e);n=dn($,"g",{fill:!0,"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0});var w=d(n);t=dn(w,"path",{d:!0}),d(t).forEach(l),r=dn(w,"path",{fill:!0,d:!0}),d(r).forEach(l),w.forEach(l),$.forEach(l),this.h()},h(){c(t,"d","M0 0h24v24H0z"),c(r,"fill","currentColor"),c(r,"d","M2 5v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C3.012 3.682 2 4.141 2 5zm11 0v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C14.012 3.682 13 4.141 13 5z"),c(n,"fill","none"),c(n,"stroke-linecap","round"),c(n,"stroke-linejoin","round"),c(n,"stroke-width","2"),Bs(e,f)},m(g,$){V(g,e,$),s(e,n),s(n,t),s(n,r)},p(g,[$]){Bs(e,f=Oa(p,[$&1&&g[0],{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 24 24"}]))},i:Mt,o:Mt,d(g){g&&l(e)}}}function Pa(o,e,n){return o.$$set=t=>{n(0,e=is(is({},e),Hs(t)))},e=Hs(e),[e]}class Xs extends ds{constructor(e){super(),cs(this,e,Pa,Ia,ms,{})}}function ka(o,e,n){const t=o.slice();return t[7]=e[n],t}function Qs(o,e,n){const t=o.slice();return t[10]=e[n],t}function Ma(o,e,n){const t=o.slice();return t[13]=e[n],t[15]=n,t}function Zs(o,e,n){const t=o.slice();t[16]=e[n],t[15]=n;const r=t[15]+1;t[17]=r;const p=t[17]===t[0];return t[18]=p,t}function ea(o,e,n){const t=o.slice();t[16]=e[n];const r=t[16][1].component;t[20]=r;const p=t[16][1].link;t[21]=p;const f=t[16][1].class;t[22]=f;const g=t[16][1].text;return t[23]=g,t}function ta(o,e,n){const t=o.slice();t[16]=e[n];const r=t[16][1].text;t[23]=r;const p=t[3][t[16][0]];return t[26]=p,t}function na(o){let e,n,t,r,p;return{c(){e=i("lights_overlay"),this.h()},l(f){e=m(f,"LIGHTS_OVERLAY",{role:!0,class:!0}),d(e).forEach(l),this.h()},h(){c(e,"role","presentation"),c(e,"class","absolute inset-0 z-20 bg-black/95")},m(f,g){V(f,e,g),t=!0,r||(p=ra(e,"mousedown",o[5]),r=!0)},p:Mt,i(f){t||(f&&da(()=>{t&&(n||(n=Ks(e,Js,{duration:300},!0)),n.run(1))}),t=!0)},o(f){f&&(n||(n=Ks(e,Js,{duration:300},!1)),n.run(0)),t=!1},d(f){f&&l(e),f&&n&&n.end(),r=!1,p()}}}function ja(o){let e,n="Off";return{c(){e=i("status"),e.textContent=n,this.h()},l(t){e=m(t,"STATUS",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-ajl8jh"&&(e.textContent=n),this.h()},h(){c(e,"class","font-semibold text-primary-300")},m(t,r){V(t,e,r)},d(t){t&&l(e)}}}function Da(o){let e,n="On";return{c(){e=i("status"),e.textContent=n,this.h()},l(t){e=m(t,"STATUS",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-r09gz"&&(e.textContent=n),this.h()},h(){c(e,"class","font-semibold text-warning-500")},m(t,r){V(t,e,r)},d(t){t&&l(e)}}}function sa(o){let e,n,t=o[23]+"",r,p,f,g,$,w;function y(k,M){return k[26]?Da:ja}let D=y(o),F=D(o);return{c(){e=i("button"),n=i("span"),r=L(t),p=L(":"),f=h(),F.c(),g=h(),this.h()},l(k){e=m(k,"BUTTON",{class:!0});var M=d(e);n=m(M,"SPAN",{});var G=d(n);r=R(G,t),p=R(G,":"),G.forEach(l),f=v(M),F.l(M),g=v(M),M.forEach(l),this.h()},h(){c(e,"class","btn hidden items-center p-0 text-xs leading-none md:flex md:text-[0.9vw]")},m(k,M){V(k,e,M),s(e,n),s(n,r),s(n,p),s(e,f),F.m(e,null),s(e,g),$||(w=ra(e,"click",o[5]),$=!0)},p(k,M){D!==(D=y(k))&&(F.d(1),F=D(k),F&&(F.c(),F.m(e,g)))},d(k){k&&l(e),F.d(),$=!1,w()}}}function aa(o){let e,n,t,r,p,f;var g=o[20];function $(w,y){return{props:{class:w[22]}}}return g&&(n=Fs(g,$(o))),{c(){e=i("a"),n&&N(n.$$.fragment),t=h(),this.h()},l(w){e=m(w,"A",{href:!0});var y=d(e);n&&P(n.$$.fragment,y),t=v(y),y.forEach(l),this.h()},h(){c(e,"href",o[21]),Vs(e,"pointer-events-none",!o[21])},m(w,y){V(w,e,y),n&&S(n,e,null),s(e,t),r=!0,p||(f=ca(Ca.call(null,e,{content:`<div class='leading-none w-max whitespace-nowrap rounded-lg bg-surface-400 px-2 py-1 text-[0.65rem] text-surface-50 md:px-[0.75vw] md:py-[0.5vw] md:rounded-[0.35vw] md:text-[1vw]'>${o[23]}</div>`,placement:"bottom",allowHTML:!0,arrow:!1,offset:[0,17],appendTo:document.body,animation:"shift-away",theme:"elaine"})),p=!0)},p(w,y){if(o=w,g!==(g=o[20])){if(n){cn();const D=n;E(D.$$.fragment,1,0,()=>{A(D,1)}),fn()}g?(n=Fs(g,$(o)),N(n.$$.fragment),x(n.$$.fragment,1),S(n,e,t)):n=null}(!r||y&64)&&Vs(e,"pointer-events-none",!o[21])},i(w){r||(n&&x(n.$$.fragment,w),r=!0)},o(w){n&&E(n.$$.fragment,w),r=!1},d(w){w&&l(e),n&&A(n),p=!1,f()}}}function oa(o){let e,n,t,r;return{c(){e=i("a"),n=L(o[17]),t=h(),this.h()},l(p){e=m(p,"A",{href:!0,class:!0});var f=d(e);n=R(f,o[17]),t=v(f),f.forEach(l),this.h()},h(){c(e,"href","./"+o[17]),c(e,"class",r=(o[18]?"bg-primary-500":"bg-surface-400")+" btn rounded py-3 text-sm font-semibold leading-none md:rounded-[0.35vw] md:py-[0.75vw] md:text-[1.2vw]")},m(p,f){V(p,e,f),s(e,n),s(e,t)},p(p,f){f&1&&r!==(r=(p[18]?"bg-primary-500":"bg-surface-400")+" btn rounded py-3 text-sm font-semibold leading-none md:rounded-[0.35vw] md:py-[0.75vw] md:text-[1.2vw]")&&c(e,"class",r)},d(p){p&&l(e)}}}function La(o){let e,n;return{c(){e=L("EP"),n=L(o[0])},l(t){e=R(t,"EP"),n=R(t,o[0])},m(t,r){V(t,e,r),V(t,n,r)},p(t,r){r&1&&pn(n,t[0])},d(t){t&&(l(e),l(n))}}}function Ra(o){let e;return{c(){e=L(o[2])},l(n){e=R(n,o[2])},m(n,t){V(n,e,t)},p(n,t){t&4&&pn(e,n[2])},d(n){n&&l(e)}}}function Ua(o){let e;return{c(){e=L(o[1])},l(n){e=R(n,o[1])},m(n,t){V(n,e,t)},p(n,t){t&2&&pn(e,n[1])},d(n){n&&l(e)}}}function Ba(o){let e,n;return e=new ba({props:{open:!0,regionPanel:"text-surface-50 text-sm leading-snug md:text-[1vw] md:leading-[1.35vw]",regionControl:"text-base text-warning-400 font-semibold md:text-[1.25vw] md:leading-[1vw] md:pb-[1vw]",regionCaret:"md:w-[1vw]",$$slots:{content:[Ua],summary:[Ra],lead:[La]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p(t,r){const p={};r&536870919&&(p.$$scope={dirty:r,ctx:t}),e.$set(p)},i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Ha(o){let e,n;return e=new xa({props:{comment_user_profile_pic:o[13].user.profile_pic,comment_username:o[13].user.username,comment_date:o[13].date,comment_content:o[13].content,comment_likes:o[13].likes,comment_replies:o[13].replies,open:o[15]===0}}),{c(){N(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p:Mt,i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function la(o){let e,n;return e=new $a({props:{post_title:o[10].title,post_banner:o[10].banner,post_description:o[10].description,author:o[10].author,posted_on_date:o[10].posted_on,link:o[10].link,responses:Number(o[10].responses)}}),{c(){N(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,r){S(e,t,r),n=!0},p:Mt,i(t){n||(x(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){A(e,t)}}}function Fa(o){let e,n,t,r,p,f=o[7].name+"",g,$,w,y=o[7].japanese_name+"",D,F,k,M,G,ne=o[7].episodes_count+"",Ae,Ie,z,X,Q;return n=new un({props:{src:o[7].cover,class:"h-full w-full object-cover object-center"}}),{c(){e=i("a"),N(n.$$.fragment),t=h(),r=i("anime-details"),p=i("anime-title"),g=L(f),$=h(),w=i("anime-japanese-name"),D=L(y),F=h(),k=i("anime-episodes-count"),M=L("Episodes: "),G=i("b"),Ae=L(ne),Ie=h(),z=i("gradient-overlay"),X=h(),this.h()},l(Z){e=m(Z,"A",{href:!0,class:!0});var J=d(e);P(n.$$.fragment,J),t=v(J),r=m(J,"ANIME-DETAILS",{class:!0});var Y=d(r);p=m(Y,"ANIME-TITLE",{class:!0});var gt=d(p);g=R(gt,f),gt.forEach(l),$=v(Y),w=m(Y,"ANIME-JAPANESE-NAME",{class:!0});var se=d(w);D=R(se,y),se.forEach(l),F=v(Y),k=m(Y,"ANIME-EPISODES-COUNT",{class:!0});var Pe=d(k);M=R(Pe,"Episodes: "),G=m(Pe,"B",{});var ae=d(G);Ae=R(ae,ne),ae.forEach(l),Pe.forEach(l),Y.forEach(l),Ie=v(J),z=m(J,"GRADIENT-OVERLAY",{class:!0}),d(z).forEach(l),X=v(J),J.forEach(l),this.h()},h(){O(p,"class","text-sm font-semibold leading-snug duration-500 ease-in-out md:h-auto md:max-h-[2.5vw] md:overflow-hidden md:text-[1vw] md:leading-[1.25vw] md:hover:max-h-[7vw] md:hover:overflow-y-scroll md:hover:scrollbar-thin"),O(w,"class","text-xs leading-none md:text-[0.9vw]"),O(k,"class","text-xs leading-none text-surface-50 duration-500 ease-in-out md:h-auto md:max-h-[2.5vw] md:overflow-hidden md:text-[0.9vw] md:hover:max-h-[7vw] md:hover:overflow-y-scroll md:hover:scrollbar-thin"),O(r,"class","absolute bottom-3 z-10 flex w-full flex-col items-center gap-1 px-[0.5vw] text-center md:bottom-[1vw] md:gap-[0.25vw]"),O(z,"class","gradient absolute inset-0 rounded-b-[0.45vw] bg-gradient-to-t from-surface-900/80 to-surface-900/25"),c(e,"href","/myanimelist/"+o[7].mal_id),c(e,"class","card relative col-span-1 h-44 w-full overflow-hidden md:h-[15vw] md:rounded-[0.75vw]")},m(Z,J){V(Z,e,J),S(n,e,null),s(e,t),s(e,r),s(r,p),s(p,g),s(r,$),s(r,w),s(w,D),s(r,F),s(r,k),s(k,M),s(k,G),s(G,Ae),s(e,Ie),s(e,z),s(e,X),Q=!0},p:Mt,i(Z){Q||(x(n.$$.fragment,Z),Q=!0)},o(Z){E(n.$$.fragment,Z),Q=!1},d(Z){Z&&l(e),A(n)}}}function Va(o){let e,n,t,r,p,f,g,$,w,y,D,F="sub/dub:",k,M,G,ne,Ae,Ie,z,X,Q,Z="sub/dub:",J,Y,gt,se,Pe,ae,_n,ce,fe,ke,fs="Episodes",gn,Me,hn,je,vn,De,wn,ue,oe,pe,ht,us='<a href="/mal/1" class="flex flex-col gap-1 text-lg leading-none md:gap-[0.25vw] md:text-[1.1vw]"><span class="font-semibold uppercase">Demon Slayer S1</span> <span class="text-base text-surface-50 md:text-[1vw]">Kimetsu no yaiba</span></a>',bn,jt,vt,Le,xn,_e,$n,me,wt,ps="View detail",En,Re,yn,ge,Ue,_s="next episode",On,le,he,Be,Tn,bt,xt,He,Cn,ve,we,Fe,gs="Finally they met",Nn,Ve,Sn,Dt=o[0]+1+"",Lt,An,ze,hs="23 min",Rt,In,be,ee,Ye,vs="Comments",Pn,xe,Ke,ws='<span class="text-base font-bold leading-none">69</span> <span class="text-sm font-semibold text-surface-50">comments</span>',kn,We,qe,Mn,$e,Ge,Je,jn,re,Xe,bs="Comment as <strong>Tokito</strong>",Dn,Qe,Ln,Ee,ye,Ze,Rn,et,xs=`Please remember to follow our
                                <a href="/" class="text-surface-200 underline">community guidelines</a>
                                while commenting. Also please refrain from posting spoilers.`,Un,tt,$s="Comment",Bn,$t,Hn,Oe,te,nt,Es="Forum posts",Fn,Te,st,ys='<span class="text-base font-bold leading-none">106</span> <span class="text-sm font-semibold text-surface-50">posts</span>',Vn,Ce,at,ot,zn,Yn,lt,rt,Kn,it,Wn,Et,mt,qn,dt,Gn,de,ct,Os="Recommendations",Jn,yt,Xn,Ot,ft,Qn,ut,Tt,j=o[3].lights&&na(o);f=new un({props:{src:"/images/DemonSlayer-episode.webp",alt:"Episode image",class:"h-full w-full rounded-none object-cover md:rounded-[0.5vw] "}}),ne=new kt({props:{class:"w-[1vw]"}});let Ct=ie(Object.entries(o[6].preferences)),B=[];for(let a=0;a<Ct.length;a+=1)B[a]=sa(ta(o,Ct,a));se=new kt({props:{class:"w-3"}});let pt=ie(Object.entries(o[6].options)),T=[];for(let a=0;a<pt.length;a+=1)T[a]=aa(ea(o,pt,a));const ia=a=>E(T[a],1,1,()=>{T[a]=null});je=new kt({props:{class:"w-3 md:w-[1vw]"}});let Nt=ie(Array(60)),H=[];for(let a=0;a<Nt.length;a+=1)H[a]=oa(Zs(o,Nt,a));Le=new _a({props:{class:"md:w-[1.25vw]"}}),_e=new ga({props:{padding:"p-0",hover:"bg-transparent",duration:300,$$slots:{default:[Ba]},$$scope:{ctx:o}}}),Re=new kt({props:{class:"w-3 -rotate-90 md:w-[1vw]"}}),Be=new un({props:{src:"/images/episodes/hyouka/Hyouka-ep-6.avif",class:"md:w-[12vw] md:rounded-[0.25vw]"}}),He=new Ta({props:{class:"md:w-[1.25vw]"}}),qe=new qs({props:{class:"w-3 md:w-[1vw]",color:"lightgray"}}),Je=new un({props:{src:"/images/DemonSlayer-bg.avif",alt:"Avatar",class:"h-full w-full shrink-0 rounded-full object-cover"}}),Qe=new ha({props:{textarea_value:o[4]}}),Ze=new va({props:{class:"w-10 md:w-[1.2vw]"}});let Zn=ie(wa),K=[];for(let a=0;a<Zn.length;a+=1)K[a]=Ha(Ma(o,Zn,a));ot=new ya({props:{color:"surface-50",class:"w-4 rotate-45 md:w-[1vw]"}}),rt=new qs({props:{class:"w-3 md:w-[1vw]",color:"lightgray"}});let _t=ie(Gs),C=[];for(let a=0;a<_t.length;a+=1)C[a]=la(Qs(o,_t,a));const ma=a=>E(C[a],1,1,()=>{C[a]=null});dt=new kt({props:{color:"surface-50",class:"w-4 md:w-[1vw]"}});let es=ie(Aa),W=[];for(let a=0;a<es.length;a+=1)W[a]=Fa(ka(o,es,a));return ut=new kt({props:{color:"surface-50",class:"w-4 md:w-[1vw]"}}),{c(){j&&j.c(),e=h(),n=i("episode-container"),t=i("episode-content"),r=i("video-player"),p=i("player"),N(f.$$.fragment),g=h(),$=i("video-player-options"),w=i("preferences"),y=i("sub-dub"),D=i("span"),D.textContent=F,k=h(),M=i("button"),G=L(`Vidstreaming (sub)\r
                            `),N(ne.$$.fragment),Ae=h();for(let a=0;a<B.length;a+=1)B[a].c();Ie=h(),z=i("div"),X=i("sub-dub"),Q=i("span"),Q.textContent=Z,J=h(),Y=i("button"),gt=L(`Vidstreaming (sub)\r
                            `),N(se.$$.fragment),Pe=h(),ae=i("video-options");for(let a=0;a<T.length;a+=1)T[a].c();_n=h(),ce=i("episode-info"),fe=i("header"),ke=i("span"),ke.textContent=fs,gn=h(),Me=i("button"),hn=L(`EPS: 1 - 60\r
                    `),N(je.$$.fragment),vn=h(),De=i("episodes");for(let a=0;a<H.length;a+=1)H[a].c();wn=h(),ue=i("episode-details"),oe=i("episode-info"),pe=i("anime-name-options"),ht=i("div"),ht.innerHTML=us,bn=h(),jt=i("options"),vt=i("button"),N(Le.$$.fragment),xn=h(),N(_e.$$.fragment),$n=h(),me=i("a"),wt=i("span"),wt.textContent=ps,En=h(),N(Re.$$.fragment),yn=h(),ge=i("next-episode"),Ue=i("span"),Ue.textContent=_s,On=h(),le=i("a"),he=i("episode-cover"),N(Be.$$.fragment),Tn=h(),bt=i("overlay"),xt=i("play"),N(He.$$.fragment),Cn=h(),ve=i("episode-info"),we=i("div"),Fe=i("span"),Fe.textContent=gs,Nn=h(),Ve=i("span"),Sn=L("Episode - "),Lt=L(Dt),An=h(),ze=i("span"),ze.textContent=hs,In=h(),be=i("episode-media"),ee=i("comments-section"),Ye=i("span"),Ye.textContent=vs,Pn=h(),xe=i("comments-info"),Ke=i("p"),Ke.innerHTML=ws,kn=h(),We=i("button"),N(qe.$$.fragment),Mn=h(),$e=i("comment-form"),Ge=i("a"),N(Je.$$.fragment),jn=h(),re=i("form"),Xe=i("span"),Xe.innerHTML=bs,Dn=h(),N(Qe.$$.fragment),Ln=h(),Ee=i("warning-submit"),ye=i("warning"),N(Ze.$$.fragment),Rn=h(),et=i("p"),et.innerHTML=xs,Un=h(),tt=i("button"),tt.textContent=$s,Bn=h(),$t=i("comments");for(let a=0;a<K.length;a+=1)K[a].c();Hn=h(),Oe=i("forum-recommendations"),te=i("forum-posts"),nt=i("span"),nt.textContent=Es,Fn=h(),Te=i("forum-options"),st=i("posts-count"),st.innerHTML=ys,Vn=h(),Ce=i("forum-buttons"),at=i("button"),N(ot.$$.fragment),zn=L(`\r
                            Create New`),Yn=h(),lt=i("button"),N(rt.$$.fragment),Kn=h(),it=i("posts");for(let a=0;a<C.length;a+=1)C[a].c();Wn=h(),Et=i("load-more"),mt=i("button"),qn=L(`Load more\r
                        `),N(dt.$$.fragment),Gn=h(),de=i("recommendations-container"),ct=i("span"),ct.textContent=Os,Jn=h(),yt=i("container");for(let a=0;a<W.length;a+=1)W[a].c();Xn=h(),Ot=i("load-more"),ft=i("button"),Qn=L(`Load more\r
                        `),N(ut.$$.fragment),this.h()},l(a){j&&j.l(a),e=v(a),n=m(a,"EPISODE-CONTAINER",{class:!0});var _=d(n);t=m(_,"EPISODE-CONTENT",{class:!0});var b=d(t);r=m(b,"VIDEO-PLAYER",{class:!0});var u=d(r);p=m(u,"PLAYER",{class:!0});var q=d(p);P(f.$$.fragment,q),q.forEach(l),g=v(u),$=m(u,"VIDEO-PLAYER-OPTIONS",{class:!0});var Ut=d($);w=m(Ut,"PREFERENCES",{class:!0});var Bt=d(w);y=m(Bt,"SUB-DUB",{class:!0});var Ht=d(y);D=m(Ht,"SPAN",{class:!0,"data-svelte-h":!0}),U(D)!=="svelte-dszpe2"&&(D.textContent=F),k=v(Ht),M=m(Ht,"BUTTON",{class:!0});var ts=d(M);G=R(ts,`Vidstreaming (sub)\r
                            `),P(ne.$$.fragment,ts),ts.forEach(l),Ht.forEach(l),Ae=v(Bt);for(let I=0;I<B.length;I+=1)B[I].l(Bt);Bt.forEach(l),Ie=v(Ut),z=m(Ut,"DIV",{class:!0});var Ft=d(z);X=m(Ft,"SUB-DUB",{class:!0});var Vt=d(X);Q=m(Vt,"SPAN",{class:!0,"data-svelte-h":!0}),U(Q)!=="svelte-65wj7"&&(Q.textContent=Z),J=v(Vt),Y=m(Vt,"BUTTON",{class:!0});var ns=d(Y);gt=R(ns,`Vidstreaming (sub)\r
                            `),P(se.$$.fragment,ns),ns.forEach(l),Vt.forEach(l),Pe=v(Ft),ae=m(Ft,"VIDEO-OPTIONS",{class:!0});var Ts=d(ae);for(let I=0;I<T.length;I+=1)T[I].l(Ts);Ts.forEach(l),Ft.forEach(l),Ut.forEach(l),u.forEach(l),_n=v(b),ce=m(b,"EPISODE-INFO",{class:!0});var zt=d(ce);fe=m(zt,"HEADER",{class:!0});var Yt=d(fe);ke=m(Yt,"SPAN",{class:!0,"data-svelte-h":!0}),U(ke)!=="svelte-1ox2gge"&&(ke.textContent=fs),gn=v(Yt),Me=m(Yt,"BUTTON",{class:!0});var ss=d(Me);hn=R(ss,`EPS: 1 - 60\r
                    `),P(je.$$.fragment,ss),ss.forEach(l),Yt.forEach(l),vn=v(zt),De=m(zt,"EPISODES",{class:!0});var Cs=d(De);for(let I=0;I<H.length;I+=1)H[I].l(Cs);Cs.forEach(l),zt.forEach(l),b.forEach(l),wn=v(_),ue=m(_,"EPISODE-DETAILS",{class:!0});var Kt=d(ue);oe=m(Kt,"EPISODE-INFO",{class:!0});var St=d(oe);pe=m(St,"ANIME-NAME-OPTIONS",{class:!0});var Wt=d(pe);ht=m(Wt,"DIV",{"data-svelte-h":!0}),U(ht)!=="svelte-8kw9d2"&&(ht.innerHTML=us),bn=v(Wt),jt=m(Wt,"OPTIONS",{});var Ns=d(jt);vt=m(Ns,"BUTTON",{class:!0});var Ss=d(vt);P(Le.$$.fragment,Ss),Ss.forEach(l),Ns.forEach(l),Wt.forEach(l),xn=v(St),P(_e.$$.fragment,St),$n=v(St),me=m(St,"A",{href:!0,class:!0});var qt=d(me);wt=m(qt,"SPAN",{"data-svelte-h":!0}),U(wt)!=="svelte-tpj0x0"&&(wt.textContent=ps),En=v(qt),P(Re.$$.fragment,qt),qt.forEach(l),St.forEach(l),yn=v(Kt),ge=m(Kt,"NEXT-EPISODE",{class:!0});var Gt=d(ge);Ue=m(Gt,"SPAN",{class:!0,"data-svelte-h":!0}),U(Ue)!=="svelte-1pwgppm"&&(Ue.textContent=_s),On=v(Gt),le=m(Gt,"A",{href:!0,class:!0});var Jt=d(le);he=m(Jt,"EPISODE-COVER",{class:!0});var Xt=d(he);P(Be.$$.fragment,Xt),Tn=v(Xt),bt=m(Xt,"OVERLAY",{class:!0});var As=d(bt);xt=m(As,"PLAY",{class:!0});var Is=d(xt);P(He.$$.fragment,Is),Is.forEach(l),As.forEach(l),Xt.forEach(l),Cn=v(Jt),ve=m(Jt,"EPISODE-INFO",{class:!0});var Qt=d(ve);we=m(Qt,"DIV",{class:!0});var Zt=d(we);Fe=m(Zt,"SPAN",{class:!0,"data-svelte-h":!0}),U(Fe)!=="svelte-urba2z"&&(Fe.textContent=gs),Nn=v(Zt),Ve=m(Zt,"SPAN",{class:!0});var as=d(Ve);Sn=R(as,"Episode - "),Lt=R(as,Dt),as.forEach(l),Zt.forEach(l),An=v(Qt),ze=m(Qt,"SPAN",{class:!0,"data-svelte-h":!0}),U(ze)!=="svelte-zt83tm"&&(ze.textContent=hs),Qt.forEach(l),Jt.forEach(l),Gt.forEach(l),Kt.forEach(l),In=v(_),be=m(_,"EPISODE-MEDIA",{class:!0});var en=d(be);ee=m(en,"COMMENTS-SECTION",{class:!0});var Ne=d(ee);Ye=m(Ne,"SPAN",{class:!0,"data-svelte-h":!0}),U(Ye)!=="svelte-fcwu4f"&&(Ye.textContent=vs),Pn=v(Ne),xe=m(Ne,"COMMENTS-INFO",{class:!0});var tn=d(xe);Ke=m(tn,"P",{class:!0,"data-svelte-h":!0}),U(Ke)!=="svelte-1mufn9w"&&(Ke.innerHTML=ws),kn=v(tn),We=m(tn,"BUTTON",{class:!0,"aria-label":!0});var Ps=d(We);P(qe.$$.fragment,Ps),Ps.forEach(l),tn.forEach(l),Mn=v(Ne),$e=m(Ne,"COMMENT-FORM",{class:!0});var nn=d($e);Ge=m(nn,"A",{href:!0,class:!0});var ks=d(Ge);P(Je.$$.fragment,ks),ks.forEach(l),jn=v(nn),re=m(nn,"FORM",{class:!0});var At=d(re);Xe=m(At,"SPAN",{class:!0,"data-svelte-h":!0}),U(Xe)!=="svelte-1hojf2e"&&(Xe.innerHTML=bs),Dn=v(At),P(Qe.$$.fragment,At),Ln=v(At),Ee=m(At,"WARNING-SUBMIT",{class:!0});var sn=d(Ee);ye=m(sn,"WARNING",{class:!0});var an=d(ye);P(Ze.$$.fragment,an),Rn=v(an),et=m(an,"P",{class:!0,"data-svelte-h":!0}),U(et)!=="svelte-1cqjq6f"&&(et.innerHTML=xs),an.forEach(l),Un=v(sn),tt=m(sn,"BUTTON",{class:!0,"data-svelte-h":!0}),U(tt)!=="svelte-x7w50w"&&(tt.textContent=$s),sn.forEach(l),At.forEach(l),nn.forEach(l),Bn=v(Ne),$t=m(Ne,"COMMENTS",{class:!0});var Ms=d($t);for(let I=0;I<K.length;I+=1)K[I].l(Ms);Ms.forEach(l),Ne.forEach(l),Hn=v(en),Oe=m(en,"FORUM-RECOMMENDATIONS",{class:!0});var on=d(Oe);te=m(on,"FORUM-POSTS",{});var Se=d(te);nt=m(Se,"SPAN",{class:!0,"data-svelte-h":!0}),U(nt)!=="svelte-1fshqmj"&&(nt.textContent=Es),Fn=v(Se),Te=m(Se,"FORUM-OPTIONS",{class:!0});var ln=d(Te);st=m(ln,"POSTS-COUNT",{class:!0,"data-svelte-h":!0}),U(st)!=="svelte-120qm6q"&&(st.innerHTML=ys),Vn=v(ln),Ce=m(ln,"FORUM-BUTTONS",{class:!0});var rn=d(Ce);at=m(rn,"BUTTON",{class:!0});var os=d(at);P(ot.$$.fragment,os),zn=R(os,`\r
                            Create New`),os.forEach(l),Yn=v(rn),lt=m(rn,"BUTTON",{class:!0,"aria-label":!0});var js=d(lt);P(rt.$$.fragment,js),js.forEach(l),rn.forEach(l),ln.forEach(l),Kn=v(Se),it=m(Se,"POSTS",{class:!0});var Ds=d(it);for(let I=0;I<C.length;I+=1)C[I].l(Ds);Ds.forEach(l),Wn=v(Se),Et=m(Se,"LOAD-MORE",{class:!0});var Ls=d(Et);mt=m(Ls,"BUTTON",{class:!0});var ls=d(mt);qn=R(ls,`Load more\r
                        `),P(dt.$$.fragment,ls),ls.forEach(l),Ls.forEach(l),Se.forEach(l),Gn=v(on),de=m(on,"RECOMMENDATIONS-CONTAINER",{});var It=d(de);ct=m(It,"SPAN",{class:!0,"data-svelte-h":!0}),U(ct)!=="svelte-1brbazo"&&(ct.textContent=Os),Jn=v(It),yt=m(It,"CONTAINER",{class:!0});var Rs=d(yt);for(let I=0;I<W.length;I+=1)W[I].l(Rs);Rs.forEach(l),Xn=v(It),Ot=m(It,"LOAD-MORE",{class:!0});var Us=d(Ot);ft=m(Us,"BUTTON",{class:!0});var rs=d(ft);Qn=R(rs,`Load more\r
                        `),P(ut.$$.fragment,rs),rs.forEach(l),Us.forEach(l),It.forEach(l),on.forEach(l),en.forEach(l),_.forEach(l),this.h()},h(){c(p,"class","relative h-64 w-full md:z-30 md:h-[35vw]"),c(D,"class","text-[1vw] font-semibold uppercase"),c(M,"class","btn flex items-center gap-[0.5vw] rounded-[0.35vw] bg-surface-400 px-[0.75vw] py-[0.5vw] text-[1vw] leading-none"),O(y,"class","hidden items-center gap-[0.75vw] md:flex"),c(w,"class","flex gap-2 md:items-center md:gap-[1vw]"),c(Q,"class","text-xs font-semibold uppercase"),c(Y,"class","btn flex items-center gap-2 rounded bg-surface-400 px-3 py-2 text-xs leading-none"),O(X,"class","flex items-center gap-2 md:hidden"),O(ae,"class","flex items-center gap-3 md:gap-[0.75vw]"),c(z,"class","flex w-full items-center justify-between md:w-auto"),O($,"class","flex flex-col gap-2 px-5 md:flex-row md:items-center md:justify-between md:gap-0 md:p-0"),O(r,"class","col-span-12 flex flex-col md:col-span-8 md:gap-[0.75vw]"),c(ke,"class","text-lg font-semibold md:text-[1.35vw]"),c(Me,"class","btn flex items-center gap-2 rounded bg-surface-400 px-3 py-2 text-xs font-semibold leading-none md:gap-[0.5vw] md:rounded-[0.35vw] md:px-[0.75vw] md:py-[0.5vw] md:text-[1vw]"),c(fe,"class","flex items-center justify-between"),c(De,"class","grid grid-cols-7 gap-2 md:grid-cols-6 md:gap-[0.75vw]"),O(ce,"class","col-span-12 flex flex-col gap-3 p-5 md:col-span-4 md:gap-[1.5vw] md:p-0"),O(t,"class","grid grid-cols-12 md:gap-[5vw]"),c(vt,"class","btn bg-transparent p-0"),O(pe,"class","flex items-center justify-between"),c(me,"href","/mal/1"),c(me,"class","btn w-max rounded-md bg-primary-500 py-3 text-sm font-semibold leading-none md:rounded-[0.5vw] md:py-[0.9vw] md:text-[1vw]"),O(oe,"class","col-span-12 flex flex-col gap-2 md:col-span-8 md:gap-[1vw]"),c(Ue,"class","font-semibold uppercase md:text-[1.1vw]"),c(xt,"class","rounded-full bg-surface-900/50 md:p-[1vw]"),c(bt,"class","absolute inset-0 flex items-center justify-center bg-surface-900/40"),O(he,"class","relative"),c(Fe,"class","text-warning-200 md:text-[1.1vw]"),c(Ve,"class","md:text-[1vw]"),c(we,"class","flex flex-col md:gap-[0.5vw]"),c(ze,"class","text-surface-50 md:text-[1vw]"),O(ve,"class","flex flex-col justify-between leading-none md:py-[1vw]"),c(le,"href",Rt="./"+(o[0]+1)),c(le,"class","flex md:mt-[0.75vw] md:gap-[1vw]"),O(ge,"class","col-span-4 hidden flex-col md:flex"),O(ue,"class","grid grid-cols-12 gap-5 p-5 md:gap-[5vw] md:p-0"),c(Ye,"class","flex gap-2 border-b-2 border-surface-50/25 pb-1 text-lg font-semibold md:gap-[0.75vw] md:border-none md:pb-0 md:text-[1.25vw] md:leading-[1.5vw]"),c(Ke,"class","flex items-center gap-1"),c(We,"class","btn btn-icon h-7 w-auto rounded bg-surface-400 p-0 font-semibold md:ml-0 md:h-[2.4vw] md:w-[2.4vw] md:rounded-[0.5vw] md:leading-[0.9vw]"),c(We,"aria-label","Filter"),O(xe,"class","mt-2 flex items-center justify-between md:hidden"),c(Ge,"href","/user/"),c(Ge,"class","hidden h-7 w-7 flex-shrink-0 md:mt-[0.5vw] md:flex md:h-[2vw] md:w-[2vw]"),c(Xe,"class","leading-none text-surface-50 md:text-[1vw]"),c(et,"class","text-[0.65rem] font-light leading-tight text-surface-300 md:text-[0.75vw] md:leading-[1.125vw]"),c(ye,"class","flex items-center gap-3 md:gap-[0.625vw]"),c(tt,"class","btn btn-sm h-9 w-40 rounded bg-primary-500 text-sm font-semibold md:h-[2.2vw] md:w-[6vw] md:rounded-[0.375vw] md:text-[0.85vw]"),O(Ee,"class","flex justify-between gap-5 md:gap-[1vw]"),c(re,"class","mt-3 flex flex-col gap-3 md:mt-[1vw] md:gap-[0.75vw]"),O($e,"class","flex flex-col md:flex-row md:gap-[1vw]"),c($t,"class","mt-10 flex flex-col gap-5 md:mt-[2vw] md:gap-[1.5vw]"),O(ee,"class","col-span-12 flex flex-col md:col-span-7 md:gap-[0.75vw]"),c(nt,"class","flex gap-2 border-b-2 border-surface-50/25 pb-1 text-lg font-semibold md:gap-[0.75vw] md:border-none md:pb-0 md:text-[1.25vw] md:leading-[1.5vw]"),O(st,"class","flex items-center gap-1 md:hidden"),c(at,"class","btn btn-sm h-7 gap-2 rounded bg-surface-400 px-2 text-xs font-semibold md:h-[2.4vw] md:rounded-[0.5vw] md:px-[0.9vw] md:text-[0.875vw]"),c(lt,"class","btn btn-icon h-7 w-auto rounded bg-surface-400 p-0 font-semibold md:ml-0 md:h-[2.4vw] md:w-[2.4vw] md:rounded-[0.5vw] md:leading-[0.9vw]"),c(lt,"aria-label","Filter"),O(Ce,"class","flex items-center gap-2 md:w-full md:justify-between"),O(Te,"class","mt-3 flex items-center justify-between md:mt-[1.25vw]"),c(it,"class","mt-4 grid grid-cols-2 flex-col gap-4 md:mt-[1vw] md:flex md:gap-[1vw]"),c(mt,"class","btn btn-sm h-7 gap-2 rounded bg-surface-400 px-3 text-xs font-semibold md:h-[2.4vw] md:rounded-[0.5vw] md:px-[0.9vw] md:text-[0.875vw]"),O(Et,"class","mt-3 flex w-full justify-center md:mt-[1vw]"),c(ct,"class","text-lg font-semibold md:text-[1.35vw]"),c(yt,"class","mt-3 grid grid-cols-3 gap-4 md:mt-[1.25vw] md:grid-cols-3 md:gap-[1vw]"),c(ft,"class","btn btn-sm h-7 gap-2 rounded bg-surface-400 px-3 text-xs font-semibold md:h-[2.4vw] md:rounded-[0.5vw] md:px-[0.9vw] md:text-[0.875vw]"),O(Ot,"class","mt-3 flex w-full justify-center md:mt-[1vw]"),O(Oe,"class","col-span-12 mt-10 flex flex-col gap-5 md:col-span-5 md:mt-0 md:gap-[2vw]"),O(be,"class","grid grid-cols-12 p-5 md:gap-[5vw] md:p-0"),O(n,"class","mt-16 flex flex-col md:mt-0 md:gap-[3.5vw] md:py-[2vw] md:pl-[1vw] md:pr-[3.75vw]")},m(a,_){j&&j.m(a,_),V(a,e,_),V(a,n,_),s(n,t),s(t,r),s(r,p),S(f,p,null),s(r,g),s(r,$),s($,w),s(w,y),s(y,D),s(y,k),s(y,M),s(M,G),S(ne,M,null),s(w,Ae);for(let b=0;b<B.length;b+=1)B[b]&&B[b].m(w,null);s($,Ie),s($,z),s(z,X),s(X,Q),s(X,J),s(X,Y),s(Y,gt),S(se,Y,null),s(z,Pe),s(z,ae);for(let b=0;b<T.length;b+=1)T[b]&&T[b].m(ae,null);s(t,_n),s(t,ce),s(ce,fe),s(fe,ke),s(fe,gn),s(fe,Me),s(Me,hn),S(je,Me,null),s(ce,vn),s(ce,De);for(let b=0;b<H.length;b+=1)H[b]&&H[b].m(De,null);s(n,wn),s(n,ue),s(ue,oe),s(oe,pe),s(pe,ht),s(pe,bn),s(pe,jt),s(jt,vt),S(Le,vt,null),s(oe,xn),S(_e,oe,null),s(oe,$n),s(oe,me),s(me,wt),s(me,En),S(Re,me,null),s(ue,yn),s(ue,ge),s(ge,Ue),s(ge,On),s(ge,le),s(le,he),S(Be,he,null),s(he,Tn),s(he,bt),s(bt,xt),S(He,xt,null),s(le,Cn),s(le,ve),s(ve,we),s(we,Fe),s(we,Nn),s(we,Ve),s(Ve,Sn),s(Ve,Lt),s(ve,An),s(ve,ze),s(n,In),s(n,be),s(be,ee),s(ee,Ye),s(ee,Pn),s(ee,xe),s(xe,Ke),s(xe,kn),s(xe,We),S(qe,We,null),s(ee,Mn),s(ee,$e),s($e,Ge),S(Je,Ge,null),s($e,jn),s($e,re),s(re,Xe),s(re,Dn),S(Qe,re,null),s(re,Ln),s(re,Ee),s(Ee,ye),S(Ze,ye,null),s(ye,Rn),s(ye,et),s(Ee,Un),s(Ee,tt),s(ee,Bn),s(ee,$t);for(let b=0;b<K.length;b+=1)K[b]&&K[b].m($t,null);s(be,Hn),s(be,Oe),s(Oe,te),s(te,nt),s(te,Fn),s(te,Te),s(Te,st),s(Te,Vn),s(Te,Ce),s(Ce,at),S(ot,at,null),s(at,zn),s(Ce,Yn),s(Ce,lt),S(rt,lt,null),s(te,Kn),s(te,it);for(let b=0;b<C.length;b+=1)C[b]&&C[b].m(it,null);s(te,Wn),s(te,Et),s(Et,mt),s(mt,qn),S(dt,mt,null),s(Oe,Gn),s(Oe,de),s(de,ct),s(de,Jn),s(de,yt);for(let b=0;b<W.length;b+=1)W[b]&&W[b].m(yt,null);s(de,Xn),s(de,Ot),s(Ot,ft),s(ft,Qn),S(ut,ft,null),Tt=!0},p(a,[_]){if(a[3].lights?j?(j.p(a,_),_&8&&x(j,1)):(j=na(a),j.c(),x(j,1),j.m(e.parentNode,e)):j&&(cn(),E(j,1,1,()=>{j=null}),fn()),_&104){Ct=ie(Object.entries(a[6].preferences));let u;for(u=0;u<Ct.length;u+=1){const q=ta(a,Ct,u);B[u]?B[u].p(q,_):(B[u]=sa(q),B[u].c(),B[u].m(w,null))}for(;u<B.length;u+=1)B[u].d(1);B.length=Ct.length}if(_&64){pt=ie(Object.entries(a[6].options));let u;for(u=0;u<pt.length;u+=1){const q=ea(a,pt,u);T[u]?(T[u].p(q,_),x(T[u],1)):(T[u]=aa(q),T[u].c(),x(T[u],1),T[u].m(ae,null))}for(cn(),u=pt.length;u<T.length;u+=1)ia(u);fn()}if(_&1){Nt=ie(Array(60));let u;for(u=0;u<Nt.length;u+=1){const q=Zs(a,Nt,u);H[u]?H[u].p(q,_):(H[u]=oa(q),H[u].c(),H[u].m(De,null))}for(;u<H.length;u+=1)H[u].d(1);H.length=Nt.length}const b={};if(_&536870919&&(b.$$scope={dirty:_,ctx:a}),_e.$set(b),(!Tt||_&1)&&Dt!==(Dt=a[0]+1+"")&&pn(Lt,Dt),(!Tt||_&1&&Rt!==(Rt="./"+(a[0]+1)))&&c(le,"href",Rt),_&0){_t=ie(Gs);let u;for(u=0;u<_t.length;u+=1){const q=Qs(a,_t,u);C[u]?(C[u].p(q,_),x(C[u],1)):(C[u]=la(q),C[u].c(),x(C[u],1),C[u].m(it,null))}for(cn(),u=_t.length;u<C.length;u+=1)ma(u);fn()}},i(a){if(!Tt){x(j),x(f.$$.fragment,a),x(ne.$$.fragment,a),x(se.$$.fragment,a);for(let _=0;_<pt.length;_+=1)x(T[_]);x(je.$$.fragment,a),x(Le.$$.fragment,a),x(_e.$$.fragment,a),x(Re.$$.fragment,a),x(Be.$$.fragment,a),x(He.$$.fragment,a),x(qe.$$.fragment,a),x(Je.$$.fragment,a),x(Qe.$$.fragment,a),x(Ze.$$.fragment,a);for(let _=0;_<Zn.length;_+=1)x(K[_]);x(ot.$$.fragment,a),x(rt.$$.fragment,a);for(let _=0;_<_t.length;_+=1)x(C[_]);x(dt.$$.fragment,a);for(let _=0;_<es.length;_+=1)x(W[_]);x(ut.$$.fragment,a),Tt=!0}},o(a){E(j),E(f.$$.fragment,a),E(ne.$$.fragment,a),E(se.$$.fragment,a),T=T.filter(Boolean);for(let _=0;_<T.length;_+=1)E(T[_]);E(je.$$.fragment,a),E(Le.$$.fragment,a),E(_e.$$.fragment,a),E(Re.$$.fragment,a),E(Be.$$.fragment,a),E(He.$$.fragment,a),E(qe.$$.fragment,a),E(Je.$$.fragment,a),E(Qe.$$.fragment,a),E(Ze.$$.fragment,a),K=K.filter(Boolean);for(let _=0;_<K.length;_+=1)E(K[_]);E(ot.$$.fragment,a),E(rt.$$.fragment,a),C=C.filter(Boolean);for(let _=0;_<C.length;_+=1)E(C[_]);E(dt.$$.fragment,a),W=W.filter(Boolean);for(let _=0;_<W.length;_+=1)E(W[_]);E(ut.$$.fragment,a),Tt=!1},d(a){a&&(l(e),l(n)),j&&j.d(a),A(f),A(ne),Pt(B,a),A(se),Pt(T,a),A(je),Pt(H,a),A(Le),A(_e),A(Re),A(Be),A(He),A(qe),A(Je),A(Qe),A(Ze),Pt(K,a),A(ot),A(rt),Pt(C,a),A(dt),Pt(W,a),A(ut)}}}function za(o,e,n){let t;const r=()=>{n(3,p.lights=!p.lights,p)},p={lights:!1},f={preferences:{lights:{text:"Lights"}},options:{download:{component:Ea,link:"./",class:"w-4 md:w-[1.4vw]",text:"Download"},prev:{component:Xs,link:"./",class:"w-4 md:w-[1.4vw] rotate-180",text:"Previous Episode"},next:{component:Xs,link:"./",class:"w-4 md:w-[1.4vw]",text:"Next Episode"}}};let{episode_number:g}=e,{episode_details:$="The autumn he was twelve, piano prodigy Kousei Arima suddenly found himself unable to play the piano after his mother's death. Ever since then, it's like he's been frozen in time. His childhood friend, Tsubaki Sawabe, watches over him with concern; one day, she invites him on a double date. Kousei's other childhood friend, Ryouta Watari, is being introduced to a certain girl. Kousei reluctantly heads over to the rendezvous spot. There, he sees a girl playing a melodica. This girl, who allegedly has a crush on Watari, is Kaori Miyazono. And she turns out to be a violinist!"}=e,{episode_name:w="Monotone/Colorful"}=e;return o.$$set=y=>{"episode_number"in y&&n(0,g=y.episode_number),"episode_details"in y&&n(1,$=y.episode_details),"episode_name"in y&&n(2,w=y.episode_name)},[g,$,w,p,t,r,f]}class Ya extends ds{constructor(e){super(),cs(this,e,za,Va,ms,{episode_number:0,episode_details:1,episode_name:2})}}function Ka(o){let e,n,t,r,p;return r=new Ya({props:{episode_number:Number(o[0])}}),{c(){e=new fa(!1),n=zs(),t=h(),N(r.$$.fragment),this.h()},l(f){const g=ua("svelte-a9xomp",document.head);e=pa(g,!1),n=zs(),g.forEach(l),t=v(f),P(r.$$.fragment,f),this.h()},h(){e.a=n},m(f,g){e.m(o[2],document.head),s(document.head,n),V(f,t,g),S(r,f,g),p=!0},p(f,[g]){const $={};g&1&&($.episode_number=Number(f[0])),r.$set($)},i(f){p||(x(r.$$.fragment,f),p=!0)},o(f){E(r.$$.fragment,f),p=!1},d(f){f&&(e.d(),l(t)),l(n),A(r,f)}}}function Wa(o,e,n){let t,r;Ys(o,Ws,g=>n(3,t=g));let p=Sa(Ws,g=>g.params.id);Ys(o,p,g=>n(0,r=g));const f=new Na({title:`Watch  on AnimeCore | Episode ${p}`,url:t.url.href,description:"",site_name:"CoreProject",locale:"en_US",image_url:""}).generate_opengraph();return[r,p,f]}class mo extends ds{constructor(e){super(),cs(this,e,Wa,Ka,ms,{})}}export{mo as component};

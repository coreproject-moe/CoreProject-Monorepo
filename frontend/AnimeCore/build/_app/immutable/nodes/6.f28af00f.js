import{s as w,W as A,e as c,a as C,_ as E,X as S,d as _,c as H,u as O,i as d,T as P,I as h}from"../chunks/scheduler.036c1cd3.js";import{S as T,i as W,a as f,t as u,b as $,d as g,m as b,e as y}from"../chunks/index.a85a8016.js";import{p as j}from"../chunks/stores.86f882ef.js";import{a as q,E as G,A as I,b as N}from"../chunks/anime_list.21ee57ba.js";import{O as U}from"../chunks/opengraph.06ca6f5a.js";function X(t){let n,a;return n=new G({}),{c(){$(n.$$.fragment)},l(e){g(n.$$.fragment,e)},m(e,o){b(n,e,o),a=!0},p:h,i(e){a||(f(n.$$.fragment,e),a=!0)},o(e){u(n.$$.fragment,e),a=!1},d(e){y(n,e)}}}function z(t){let n,a;return n=new I({props:{anime_name:t[0].name,anime_alternative_name:t[0].alternative_name,anime_episodes_count:t[0].episodes_count,anime_date:t[0].updated,anime_synopsis:t[0].synopsis,anime_banner:t[0].banner,anime_cover:t[0].cover,anime_episodes:N}}),{c(){$(n.$$.fragment)},l(e){g(n.$$.fragment,e)},m(e,o){b(n,e,o),a=!0},p:h,i(e){a||(f(n.$$.fragment,e),a=!0)},o(e){u(n.$$.fragment,e),a=!1},d(e){y(n,e)}}}function B(t){let n,a,e,o,s,l,m;const k=[z,X],p=[];function v(r,i){return r[0]?0:1}return o=v(t),s=p[o]=k[o](t),{c(){n=new A(!1),a=c(),e=C(),s.c(),l=c(),this.h()},l(r){const i=E("svelte-a9xomp",document.head);n=S(i,!1),a=c(),i.forEach(_),e=H(r),s.l(r),l=c(),this.h()},h(){n.a=a},m(r,i){n.m(t[1],document.head),O(document.head,a),d(r,e,i),p[o].m(r,i),d(r,l,i),m=!0},p(r,[i]){s.p(r,i)},i(r){m||(f(s),m=!0)},o(r){u(s),m=!1},d(r){r&&(n.d(),_(e),_(l)),_(a),p[o].d(r)}}}function D(t,n,a){let e;P(t,j,m=>a(2,e=m));let o=Number(e.params.id),s=q?.find(m=>m.id===o);const l=new U({title:`Watch ${s?.name} on AnimeCore`,url:e.url.href,description:s?.synopsis??"",site_name:"CoreProject",locale:"en_US",image_url:s?.banner??""}).generate_opengraph();return[s,l]}class Q extends T{constructor(n){super(),W(this,n,D,B,w,{})}}export{Q as component};

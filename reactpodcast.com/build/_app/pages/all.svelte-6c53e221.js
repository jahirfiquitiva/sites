import{S as le,i as se,s as oe,J as W,k as P,e as p,t as S,l as Y,K as ie,d as n,n as N,c as m,a as v,g as D,b as _,f as y,H as c,L as ne,I as Q,h as C,M as X,N as re}from"../chunks/vendor-470ba9fa.js";import{e as x}from"../chunks/paths-0bd14fe0.js";function ee(r,t,a){const e=r.slice();return e[1]=t[a],e}function ce(r){let t,a,e=r[4].message+"",s;return{c(){t=p("p"),a=S("Something went wrong: "),s=S(e)},l(u){t=m(u,"P",{});var h=v(t);a=D(h,"Something went wrong: "),s=D(h,e),h.forEach(n)},m(u,h){y(u,t,h),c(t,a),c(t,s)},p(u,h){h&1&&e!==(e=u[4].message+"")&&C(s,e)},d(u){u&&n(t)}}}function de(r){let t,a,e,s,u,h,w=JSON.stringify(r[0],null,2)+"",d,o=r[0].collection,i=[];for(let l=0;l<o.length;l+=1)i[l]=ae(ee(r,o,l));return{c(){t=p("div"),a=p("main"),e=p("ul");for(let l=0;l<i.length;l+=1)i[l].c();s=P(),u=p("div"),h=p("pre"),d=S(w),this.h()},l(l){t=m(l,"DIV",{"data-window-content":!0});var b=v(t);a=m(b,"MAIN",{class:!0});var f=v(a);e=m(f,"UL",{"data-unlist":!0,"data-episode-list":!0,class:!0});var g=v(e);for(let M=0;M<i.length;M+=1)i[M].l(g);g.forEach(n),f.forEach(n),b.forEach(n),s=N(l),u=m(l,"DIV",{id:!0});var A=v(u);h=m(A,"PRE",{});var j=v(h);d=D(j,w),j.forEach(n),A.forEach(n),this.h()},h(){_(e,"data-unlist",""),_(e,"data-episode-list",""),_(e,"class","svelte-1crkqd1"),_(a,"class","border-t-2 border-gray-100 pt-6"),_(t,"data-window-content",""),_(u,"id","log")},m(l,b){y(l,t,b),c(t,a),c(a,e);for(let f=0;f<i.length;f+=1)i[f].m(e,null);y(l,s,b),y(l,u,b),c(u,h),c(h,d)},p(l,b){if(b&1){o=l[0].collection;let f;for(f=0;f<o.length;f+=1){const g=ee(l,o,f);i[f]?i[f].p(g,b):(i[f]=ae(g),i[f].c(),i[f].m(e,null))}for(;f<i.length;f+=1)i[f].d(1);i.length=o.length}b&1&&w!==(w=JSON.stringify(l[0],null,2)+"")&&C(d,w)},d(l){l&&n(t),re(i,l),l&&n(s),l&&n(u)}}}function te(r){let t,a,e,s=X(new Date(r[1].published_at),"MMM d, yyyy")+"",u,h,w,d,o,i=r[1].title+"",l,b,f,g=r[1].description+"",A,j,M,I,T,O=r[1].title+"",V,H,L,R,q,U;return{c(){t=p("li"),a=p("p"),e=p("time"),u=S(s),w=P(),d=p("div"),o=p("h2"),l=S(i),b=P(),f=p("p"),A=S(g),j=P(),M=p("div"),I=p("a"),T=p("span"),V=S(O),H=P(),L=S("Show notes"),R=p("span"),U=P(),this.h()},l(k){t=m(k,"LI",{class:!0});var E=v(t);a=m(E,"P",{class:!0});var Z=v(a);e=m(Z,"TIME",{"data-episode-item--time":!0,datetime:!0});var z=v(e);u=D(z,s),z.forEach(n),Z.forEach(n),w=N(E),d=m(E,"DIV",{});var G=v(d);o=m(G,"H2",{class:!0});var B=v(o);l=D(B,i),B.forEach(n),b=N(G),f=m(G,"P",{class:!0});var F=v(f);A=D(F,g),F.forEach(n),G.forEach(n),j=N(E),M=m(E,"DIV",{class:!0});var K=v(M);I=m(K,"A",{class:!0,href:!0});var J=v(I);T=m(J,"SPAN",{class:!0});var $=v(T);V=D($,O),H=N($),$.forEach(n),L=D(J,"Show notes"),R=m(J,"SPAN",{class:!0}),v(R).forEach(n),J.forEach(n),K.forEach(n),U=N(E),E.forEach(n),this.h()},h(){_(e,"data-episode-item--time",""),_(e,"datetime",h=r[1].published_at),_(a,"class","text-sm leading-5 text-gray-500"),_(o,"class","mt-2 text-xl leading-7 font-semibold text-gray-900"),_(f,"class","mt-3 text-base leading-6 text-gray-500"),_(T,"class","sr-only"),_(R,"class","absolute inset-0"),_(I,"class","text-base leading-6 font-semibold text-teal-600 hover:text-teal-700 focus:outline-none focus:underline"),_(I,"href",q="episodes/"+x(r[1])),_(M,"class","mt-3"),_(t,"class","relative svelte-1crkqd1")},m(k,E){y(k,t,E),c(t,a),c(a,e),c(e,u),c(t,w),c(t,d),c(d,o),c(o,l),c(d,b),c(d,f),c(f,A),c(t,j),c(t,M),c(M,I),c(I,T),c(T,V),c(T,H),c(I,L),c(I,R),c(t,U)},p(k,E){E&1&&s!==(s=X(new Date(k[1].published_at),"MMM d, yyyy")+"")&&C(u,s),E&1&&h!==(h=k[1].published_at)&&_(e,"datetime",h),E&1&&i!==(i=k[1].title+"")&&C(l,i),E&1&&g!==(g=k[1].description+"")&&C(A,g),E&1&&O!==(O=k[1].title+"")&&C(V,O),E&1&&q!==(q="episodes/"+x(k[1]))&&_(I,"href",q)},d(k){k&&n(t)}}}function ae(r){let t,a=r[1].status==="published"&&te(r);return{c(){a&&a.c(),t=Y()},l(e){a&&a.l(e),t=Y()},m(e,s){a&&a.m(e,s),y(e,t,s)},p(e,s){e[1].status==="published"?a?a.p(e,s):(a=te(e),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},d(e){a&&a.d(e),e&&n(t)}}}function fe(r){let t,a;return{c(){t=p("p"),a=S("waiting for the promise to resolve...")},l(e){t=m(e,"P",{});var s=v(t);a=D(s,"waiting for the promise to resolve..."),s.forEach(n)},m(e,s){y(e,t,s),c(t,a)},p:Q,d(e){e&&n(t)}}}function ue(r){let t,a,e,s,u,h,w,d={ctx:r,current:null,token:null,hasCatch:!0,pending:fe,then:de,catch:ce,value:0,error:4};return W(w=r[0],d),{c(){t=P(),a=p("header"),e=p("a"),s=S("React Podcast"),u=P(),h=Y(),d.block.c(),this.h()},l(o){ie('[data-svelte="svelte-n1vljt"]',document.head).forEach(n),t=N(o),a=m(o,"HEADER",{"data-window-content":!0,class:!0});var l=v(a);e=m(l,"A",{href:!0,class:!0});var b=v(e);s=D(b,"React Podcast"),b.forEach(n),l.forEach(n),u=N(o),h=Y(),d.block.l(o),this.h()},h(){document.title="React Podcast with chantastic",_(e,"href","/"),_(e,"class",""),_(a,"data-window-content",""),_(a,"class","my-4")},m(o,i){y(o,t,i),y(o,a,i),c(a,e),c(e,s),y(o,u,i),y(o,h,i),d.block.m(o,d.anchor=i),d.mount=()=>h.parentNode,d.anchor=h},p(o,[i]){r=o,d.ctx=r,i&1&&w!==(w=r[0])&&W(w,d)||ne(d,r,i)},i:Q,o:Q,d(o){o&&n(t),o&&n(a),o&&n(u),o&&n(h),d.block.d(o),d.token=null,d=null}}}const me=!0;async function ve({fetch:r}){const a="https://api.simplecast.com/podcasts/bdb43d4d-bd1d-4fbc-bd60-40f1e3299aa3/episodes?limit=1000&offset=0",e=await r(a,{method:"GET",headers:{authorization:"Bearer eyJhcGlfa2V5IjoiMGI1NTFjYmE4NTU2ZmYyM2I3YTM2YjU0ODk5ZGQ2MTMifQ=="}});return e.ok?{props:{episodes:await e.json()},maxage:3600}:{status:e.status,error:new Error(`Could not load ${a}`)}}function he(r,t,a){let{episodes:e}=t;return r.$$set=s=>{"episodes"in s&&a(0,e=s.episodes)},[e]}class be extends le{constructor(t){super();se(this,t,he,ue,oe,{episodes:0})}}export{be as default,ve as load,me as prerender};

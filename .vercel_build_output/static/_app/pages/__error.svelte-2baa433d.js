import{S as j,i as k,s as q,e as _,t as c,k as x,c as d,a as h,h as p,d as o,m as y,g as u,F as v,j as E,E as S}from"../chunks/index-bbc8ee63.js";function C(n){let t,i,l,a,s=n[0].message+"",f;return{c(){t=_("h1"),i=c(n[1]),l=x(),a=_("p"),f=c(s)},l(e){t=d(e,"H1",{});var r=h(t);i=p(r,n[1]),r.forEach(o),l=y(e),a=d(e,"P",{});var m=h(a);f=p(m,s),m.forEach(o)},m(e,r){u(e,t,r),v(t,i),u(e,l,r),u(e,a,r),v(a,f)},p(e,[r]){r&2&&E(i,e[1]),r&1&&s!==(s=e[0].message+"")&&E(f,s)},i:S,o:S,d(e){e&&o(t),e&&o(l),e&&o(a)}}}const P=({error:n,status:t})=>({props:{error:n,status:t}});function F(n,t,i){let{error:l}=t,{status:a}=t;return n.$$set=s=>{"error"in s&&i(0,l=s.error),"status"in s&&i(1,a=s.status)},[l,a]}class b extends j{constructor(t){super(),k(this,t,F,C,q,{error:0,status:1})}}export{b as default,P as load};

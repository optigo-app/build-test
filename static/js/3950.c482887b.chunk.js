"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[3950],{43950:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var s=r(9950),n=r(53289),o=r(58322),c=r(82658),a=r(44414);const u=(0,s.lazy)((()=>r.e(5234).then(r.bind(r,5234))));const f=function(){const[e,t]=(0,s.useState)(),[r,f]=(0,s.useState)("");return(0,o.vc)(c.X0),(0,s.useEffect)((()=>{fetch(`${(0,n.Em)()}/StoreInit.json`).then((e=>e.text())).then((e=>{try{const t=null===JSON||void 0===JSON?void 0:JSON.parse(e);f(t)}catch(t){console.error("Error parsing JSON:",t)}})).catch((e=>{console.error("Error fetching the file:",e)}))}),[]),(0,s.useEffect)((()=>{let e=JSON.parse(sessionStorage.getItem("storeInit"));t(e)}),[]),(0,a.jsx)(u,{})}}}]);
"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[9451],{29451:(e,n,i)=>{i.r(n),i.d(n,{default:()=>m});var o=i(9950),t=i(56367),s=i(53289),r=i(38737),l=i(28429),d=i(92723),a=i(58322),c=i(49211),v=i(82658),u=i(97732),g=i(44414);const m=()=>{const e=(0,o.useRef)(null),n=JSON.parse(sessionStorage.getItem("loginUserDetail")),[i,m]=(0,o.useState)([]),[h,S]=(0,o.useState)(),[p,N]=(0,o.useState)(!1),[x,I]=(0,o.useState)(!1),[f,_]=(0,o.useState)(!1),[C,j]=(0,o.useState)(!1),T=(0,l.Zp)(),[b,O]=(0,o.useState)({}),[D,E]=(0,o.useState)([]),[y,L]=(0,o.useState)([]),k=(0,a.vc)(v.kN),[$,w]=(0,o.useState)(null),U=(0,a.lZ)(v.X0),J=e=>e%2!==0;(0,o.useEffect)((()=>{U(!0);const n=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(B(),n.unobserve(e.target))}))}),{root:null,threshold:.5});return e.current&&n.observe(e.current),()=>{e.current&&n.unobserve(e.current)}}),[]);const B=()=>{let e=JSON.parse(sessionStorage.getItem("storeInit"));O(e);let n=JSON.parse(sessionStorage.getItem("storeInit"));S(null===n||void 0===n?void 0:n.CDNDesignImageFol);const i=JSON.parse(sessionStorage.getItem("loginUserDetail")),o=JSON.parse(sessionStorage.getItem("storeInit")),t=null===o||void 0===o?void 0:o.IsB2BWebsite,s=c.A.get("visiterId");let l;l=0==t&&!1===k?s:(null===i||void 0===i?void 0:i.id)||"0",(0,r.K)("GETTrending",l).then((e=>{var n;if(null!==e&&void 0!==e&&null!==(n=e.Data)&&void 0!==n&&n.rd){var i;m(null===e||void 0===e||null===(i=e.Data)||void 0===i?void 0:i.rd),U(!1);const n=e.Data.rd.filter((e=>J(e.SrNo))),o=e.Data.rd.filter((e=>!J(e.SrNo)));E(n),L(o)}})).catch((e=>console.log(e)))},H=(e,i,o)=>{var t,s;const r=null!==(t=JSON.parse(sessionStorage.getItem("storeInit")))&&void 0!==t?t:"",{IsB2BWebsite:l}=r;u.Ay.event({action:"Navigate to Product Detail",category:"Product Interaction Through Trending Section",label:e||o,value:null!==(s=null===n||void 0===n?void 0:n.firstname)&&void 0!==s?s:"User Not Login"});let a={a:i,b:e,m:null===n||void 0===n?void 0:n.MetalId,d:null===n||void 0===n?void 0:n.cmboDiaQCid,c:null===n||void 0===n?void 0:n.cmboCSQCid,f:{}},c=(e=>{try{const n=(new TextEncoder).encode(e),i=d.Ay.deflate(n,{to:"string"});return btoa(String.fromCharCode.apply(null,i))}catch(n){return console.error("Error compressing and encoding:",n),null}})(JSON.stringify(a));T(`/d/${o.replace(/\s+/g,"_")}${(null===o||void 0===o?void 0:o.length)>0?"_":""}${e}?p=${c}`)},M=e=>{var n=document.createElement("textarea");return n.innerHTML=e,n.value},R=[];for(let o=0;o<(null===i||void 0===i?void 0:i.length);o+=3)R.push(null===i||void 0===i?void 0:i.slice(o,o+3));return(0,g.jsx)("div",{ref:e,children:0!=(null===i||void 0===i?void 0:i.length)&&(0,g.jsxs)("div",{className:"dt_mainTrending1Div",children:[(0,g.jsx)("div",{className:"smr_trending1TitleDiv",children:(0,g.jsx)("span",{className:"smr_trending1Title",children:"Trending"})}),(0,g.jsxs)("div",{className:"smr_trendingProduct-grid",children:[(0,g.jsxs)("div",{className:"smr_leftSideBestTR",children:[(0,g.jsx)("img",{src:`${(0,s.DA)()}/images/HomePage/Banner/trending.webp`,alt:"modalimages"}),(0,g.jsxs)("div",{className:"smr_lookbookImageRightDT",children:[(0,g.jsx)("p",{children:"SHORESIDE COLLECTION"}),(0,g.jsx)("h2",{children:"FOR LOVE OF SUN & SEA"}),(0,g.jsx)("button",{onClick:()=>T(`/p/Trending/?T=${btoa("Trending")}`),children:"SHOP COLLECTION"})]})]}),(0,g.jsx)("div",{className:"smr_rightSideTR",children:null===i||void 0===i?void 0:i.slice(0,4).map(((e,i)=>(0,g.jsxs)("div",{className:"product-card",children:[(0,g.jsx)("div",{className:"smr_btimageDiv",onClick:()=>H(null===e||void 0===e?void 0:e.designno,null===e||void 0===e?void 0:e.autocode,null===e||void 0===e?void 0:e.TitleLine),children:(0,g.jsx)("img",{src:(null===e||void 0===e?void 0:e.ImageCount)>=1?`${h}${void 0===e.designno?"":null===e||void 0===e?void 0:e.designno}~1.${void 0===(null===e||void 0===e?void 0:e.ImageExtension)?"":e.ImageExtension}`:t,alt:e.name,onError:e=>{e.target.src=t}})}),(0,g.jsxs)("div",{className:"trending_ifno_web_product_info",children:[(0,g.jsx)("h3",{children:""!=(null===e||void 0===e?void 0:e.TitleLine)&&(null===e||void 0===e?void 0:e.TitleLine)}),(0,g.jsxs)("p",{children:[(0,g.jsx)("span",{className:"smr_currencyFont",dangerouslySetInnerHTML:{__html:M(k?null===n||void 0===n?void 0:n.CurrencyCode:null===b||void 0===b?void 0:b.CurrencyCode)}})," ",(0,s.X9)(null===e||void 0===e?void 0:e.UnitCostWithMarkUp)]})]}),(0,g.jsxs)("div",{className:"trending_ifno_mobile_product_info",children:[(0,g.jsx)("h3",{children:null===e||void 0===e?void 0:e.designno}),(0,g.jsxs)("p",{children:[(0,g.jsx)("span",{className:"smr_currencyFont",dangerouslySetInnerHTML:{__html:M(k?null===n||void 0===n?void 0:n.CurrencyCode:null===b||void 0===b?void 0:b.CurrencyCode)}})," ",(0,s.X9)(null===e||void 0===e?void 0:e.UnitCostWithMarkUp)]})]})]},i)))})]})]})})}},56367:(e,n,i)=>{e.exports=i.p+"static/media/image-not-found.1a8537f557fc26a4f457.jpg"}}]);
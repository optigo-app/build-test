"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[9444],{99444:(e,i,o)=>{o.r(i),o.d(i,{default:()=>h});var n=o(9950),l=o(61310),r=(o(99425),o(49071),o(36357),o(38737)),d=o(56367),t=o(28429),s=o(92723),a=o(49211),c=o(58322);const u=JSON.parse('[{"background":"linear-gradient(135deg, #4ca1af \u2192 #c4e0e5)","color":"#FFFFFF"},{"background":"linear-gradient(135deg, #ffafbd, #ffdde1)","color":"#FFFFFF"},{"background":"linear-gradient(135deg, #eacda3 , #494150)","color":"#FFFFFF"},{"background":"linear-gradient(135deg, #d66d75, #e29587)","color":"#FFFFFF"},{"background":"linear-gradient(135deg, #dd5e89, #f7bb97)","color":"#FFFFFF"},{"background":"linear-gradient(135deg, #eecda3, #ef629f)","color":"#FFFFFF"},{"background":"linear-gradient(135deg, #eacda3, #d6ae7b)","color":"#FFFFFF"},{"background":"linear-gradient(135deg, #ddd6f3, #faaca8)","color":"#FFFFFF"},{"background":"linear-gradient(135deg, #ba5370, #f4e2d8)","color":"#FFFFFF"},{"background":"linear-gradient(135deg, #ffd89b, #19547b)","color":"#FFFFFF"}]');var v=o(53289),g=o(82658),m=o(97732),F=o(44414);const h=()=>{var e;const i=(0,n.useRef)(null),o=(0,t.Zp)(),[h,b]=(0,n.useState)(),[p,f]=(0,n.useState)([]),N=JSON.parse(sessionStorage.getItem("loginUserDetail")),[S,x]=(0,n.useState)({}),j=(0,c.vc)(g.kN),[k,D]=(0,n.useState)(null),[C,I]=(0,n.useState)(),w=(0,c.lZ)(g.X0);(0,n.useEffect)((()=>{w(!0);const e=new IntersectionObserver((i=>{i.forEach((i=>{i.isIntersecting&&(y(),e.unobserve(i.target))}))}),{root:null,threshold:.5});return i.current&&e.observe(i.current),()=>{i.current&&e.unobserve(i.current)}}),[]);const y=()=>{const e=JSON.parse(sessionStorage.getItem("loginUserDetail")),i=JSON.parse(sessionStorage.getItem("storeInit")),{IsB2BWebsite:o}=i,n=a.A.get("visiterId");let l;l=0==o&&!1===j?n:(null===e||void 0===e?void 0:e.id)||"0";let d=JSON.parse(sessionStorage.getItem("storeInit"));x(d);let t=JSON.parse(sessionStorage.getItem("storeInit"));b(null===t||void 0===t?void 0:t.CDNDesignImageFol),I(null===t||void 0===t?void 0:t.CDNDesignImageFol),(0,r.K)("GETDesignSet_List",l).then((e=>{var i,o;null!==e&&void 0!==e&&null!==(i=e.Data)&&void 0!==i&&i.rd&&(f(null===e||void 0===e||null===(o=e.Data)||void 0===o?void 0:o.rd),w(!1))})).catch((e=>console.log(e)))},T=e=>{let i;return i=null!==e&&void 0!==e&&e.DefaultImageName?h+(null===e||void 0===e?void 0:e.designsetuniqueno)+"/"+(null===e||void 0===e?void 0:e.DefaultImageName):d,i},_=e=>{const i=u.length;return u[e%i]},L=e=>{try{return JSON.parse(e)}catch(i){return console.error("Error parsing design details:",i),[]}},$=(e,i,n)=>{var l,r,d,t;m.Ay.event({action:"Navigate to Product Detail",category:"Product Interaction Through Design Set Section",label:e||n,value:null!==(l=null===N||void 0===N?void 0:N.firstname)&&void 0!==l?l:"User Not Login"});let a={a:i,b:e,m:null!==(r=null===N||void 0===N?void 0:N.MetalId)&&void 0!==r?r:null===S||void 0===S?void 0:S.MetalId,d:null!==(d=null===N||void 0===N?void 0:N.cmboDiaQCid)&&void 0!==d?d:null===S||void 0===S?void 0:S.cmboDiaQCid,c:null!==(t=null===N||void 0===N?void 0:N.cmboCSQCid)&&void 0!==t?t:null===S||void 0===S?void 0:S.cmboCSQCid,f:{}},c=(e=>{try{const i=(new TextEncoder).encode(e),o=s.Ay.deflate(i,{to:"string"});return btoa(String.fromCharCode.apply(null,o))}catch(i){return console.error("Error compressing and encoding:",i),null}})(JSON.stringify(a));o(`/d/${null===n||void 0===n?void 0:n.replace(/\s+/g,"_")}${(null===n||void 0===n?void 0:n.length)>0?"_":""}${e}?p=${c}`)},B=e=>{var i=document.createElement("textarea");return i.innerHTML=e,i.value},O=()=>{null!==k&&k.slidePrev()},E=()=>{null!==k&&k.slideNext()};return(0,F.jsx)(F.Fragment,{children:(0,F.jsx)("div",{className:"dt_DesignSet2MainDiv",ref:i,children:0!==(null===p||void 0===p?void 0:p.length)&&(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("div",{className:"smr_DesignSetTitleDiv",children:(0,F.jsxs)("p",{className:"dt_desognSetTitle",children:["Complete Your Look",(0,F.jsx)("p",{className:"dt_designSetViewmoreBtn",onClick:()=>{1==(null===S||void 0===S?void 0:S.IsB2BWebsite)?1==j?(o("/Lookbook"),window.scrollTo({top:0,behavior:"smooth"})):(o("/loginOption/?LoginRedirect=/Lookbook"),window.scrollTo({top:0,behavior:"smooth"})):(o("/Lookbook"),window.scrollTo({top:0,behavior:"smooth"}))},children:"View more"})]})}),null===p||void 0===p||null===(e=p.slice(0,1))||void 0===e?void 0:e.map(((e,i)=>{var o;return(0,F.jsxs)("div",{style:{position:"relative"},className:"maindiv",children:[T(e)?(0,F.jsx)("img",{src:`${(0,v.DA)()}/images/HomePage/DesignSet/BottomBannerDesignSet1.webp`,alt:"",className:"imgBG"}):(0,F.jsx)("div",{style:{height:"100%",width:"100%",..._(i),display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},className:"imgBG",children:(0,F.jsx)("p",{style:{fontSize:"30px",color:_(i).color},children:null===e||void 0===e?void 0:e.designsetno})}),(0,F.jsxs)("div",{className:"subimgpart",children:[(0,F.jsx)("div",{className:"card",children:(0,F.jsx)(l.RC,{className:"swiper_w",spaceBetween:5,slidesPerView:1,speed:1e3,onSwiper:D,children:(null===e||void 0===e?void 0:e.Designdetail)&&(0,F.jsx)(F.Fragment,{children:null===(o=L(null===e||void 0===e?void 0:e.Designdetail))||void 0===o?void 0:o.map(((e,o)=>(0,F.jsxs)(l.qr,{children:[(0,F.jsx)("div",{className:"centerall",children:(0,F.jsx)("div",{className:"smr_ds2ImageDiv",children:(0,F.jsx)("img",{loading:"lazy",src:`${C}${null===e||void 0===e?void 0:e.designno}~1.${null===e||void 0===e?void 0:e.ImageExtension}`,alt:`Sub image ${o} for slide ${i}`,onClick:()=>$(null===e||void 0===e?void 0:e.designno,null===e||void 0===e?void 0:e.autocode,null!==e&&void 0!==e&&e.TitleLine?null===e||void 0===e?void 0:e.TitleLine:""),onError:e=>{e.target.src=d},className:"cardimg"})})}),(0,F.jsx)("div",{className:"fs1 centerall",children:null!==e&&void 0!==e&&e.TitleLine?`${e.TitleLine} -`:""}),(0,F.jsx)("div",{className:"fs2 centerall",children:(0,F.jsxs)("p",{children:[(0,F.jsx)("span",{className:"smr_currencyFont",dangerouslySetInnerHTML:{__html:B(j?null===N||void 0===N?void 0:N.CurrencyCode:null===S||void 0===S?void 0:S.CurrencyCode)}})," ",(0,v.X9)(null===e||void 0===e?void 0:e.UnitCostWithMarkUp)]})})]},`detail-${null===e||void 0===e?void 0:e.id}`)))})})}),(0,F.jsxs)("div",{className:"btnflex",children:[(0,F.jsx)("button",{className:"btncst",onClick:O,children:"<"}),(0,F.jsx)("button",{className:"btncst",onClick:E,children:">"})]})]})]})}))]})})})}},56367:(e,i,o)=>{e.exports=o.p+"static/media/image-not-found.1a8537f557fc26a4f457.jpg"}}]);
"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[1210],{81210:(e,i,n)=>{n.r(i),n.d(i,{default:()=>g});var l=n(9950),o=n(8616),s=n(61310),d=(n(99425),n(49071),n(36357),n(60497)),t=n(53289),r=n(49211),a=n(28429),c=n(58322),v=n(71101),u=n(38737),m=n(92723),p=n(44414);const g=()=>{const[e,i]=(0,l.useState)([]),n=(0,a.Zp)(),g=(0,c.vc)(v.KE),[h,x]=(0,l.useState)(!1),[j,_]=(0,l.useState)({}),[N,w]=(0,l.useState)([]),b=JSON.parse(sessionStorage.getItem("loginUserDetail"));(0,l.useEffect)((()=>{x(!0);const e=JSON.parse(sessionStorage.getItem("storeInit")),n=JSON.parse(sessionStorage.getItem("loginUserDetail"));_(e);const{IsB2BWebsite:l}=e,o=r.A.get("visiterId");let s;s=0==l&&!1===g?o:(null===n||void 0===n?void 0:n.id)||"0",(0,u.K)("GETTrending",s).then((e=>{var n;null!==e&&void 0!==e&&null!==(n=e.Data)&&void 0!==n&&n.rd?i(e.Data.rd):console.log("No album data found",e)})).catch((e=>{console.error("Error fetching album data:",e)})).finally((()=>{x(!1)}))}),[g]);(0,l.useEffect)((()=>{(async()=>{if(null===e||void 0===e||!e.length)return;const i=e.map((async e=>{const i=`${null===j||void 0===j?void 0:j.CDNDesignImageFol}${null===e||void 0===e?void 0:e.designno}~1.${null===e||void 0===e?void 0:e.ImageExtension}`,n=await(l=i,new Promise((e=>{const i=new Image;i.onload=()=>e(l),i.onerror=()=>e(o),i.src=l})));var l;return{...e,src:n}})),n=await Promise.all(i);w(n)})()}),[e,j,o]);const T=(e,i,l)=>{var o;o=JSON.parse(sessionStorage.getItem("storeInit"));const s=JSON.parse(sessionStorage.getItem("loginUserDetail"));let d={a:i,b:e,m:null===s||void 0===s?void 0:s.MetalId,d:null===s||void 0===s?void 0:s.cmboDiaQCid,c:null===s||void 0===s?void 0:s.cmboCSQCid,f:{}},t=(e=>{try{const i=(new TextEncoder).encode(e),n=m.Ay.deflate(i,{to:"string"});return btoa(String.fromCharCode.apply(null,n))}catch(i){return console.error("Error compressing and encoding:",i),null}})(JSON.stringify(d));n(`/d/${null===l||void 0===l?void 0:l.replace(/\s+/g,"_")}${(null===l||void 0===l?void 0:l.length)>0?"_":""}${e}?p=${t}`)},D=(0,l.useCallback)((()=>{const i=e&&(null===N||void 0===N?void 0:N.length);let n;return(1===i||2===i||3===i||i>3)&&(n="100%"),{width:n,length:i}}),[e]);if(0!==(null===e||void 0===e?void 0:e.length))return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"roop_mainTrending1Div",children:[(0,p.jsx)("div",{className:"smr_trending1TitleDiv",children:(0,p.jsx)("span",{className:"smr_trending1Title",id:"smr_Trending",children:"Trending"})}),(0,p.jsx)("div",{className:"stam_trendingProduct-grid",children:(0,p.jsx)("div",{className:"smr_leftSideBestTR",children:(0,p.jsx)("img",{src:`${(0,t.DA)()}/images/HomePage/TrendingViewBanner/trendingBanner.png`,alt:"Trending Jewellery Collection Banner"})})})]}),(0,p.jsx)("div",{className:"roop_trendSet_Main",children:(0,p.jsx)("div",{className:"roop_trend_main_sub",style:{width:D().width},children:(0,p.jsxs)(s.RC,{style:{width:"100%"},modules:[d.Vx],spaceBetween:20,navigation:(null===e||void 0===e?void 0:e.length)>4,breakpoints:{768:{slidesPerView:4,spaceBetween:20},500:{slidesPerView:3,spaceBetween:20},400:{slidesPerView:2,spaceBetween:10},0:{slidesPerView:1,spaceBetween:10}},className:"roop_trend_main_swiper",children:[null===N||void 0===N?void 0:N.map(((e,i)=>{var n,l,o,d;return(0,p.jsx)(s.qr,{style:{width:"100%"},children:(0,p.jsxs)("div",{className:"roop_trend__image_div",children:[(0,p.jsx)("img",{className:"roop_trendImg",loading:"lazy",src:null===e||void 0===e?void 0:e.src,alt:null===e||void 0===e?void 0:e.name,onClick:()=>T(null===e||void 0===e?void 0:e.designno,null===e||void 0===e?void 0:e.autocode,null===e||void 0===e?void 0:e.TitleLine),"aria-label":`View details of ${null===e||void 0===e?void 0:e.name}`}),(0,p.jsx)("p",{className:"roop_trend_Div_name",children:null===e||void 0===e?void 0:e.name}),(0,p.jsxs)("div",{className:"product-info",children:[(0,p.jsxs)("h3",{children:[null===e||void 0===e?void 0:e.designno," ",(null===e||void 0===e?void 0:e.TitleLine)&&" - "," ",""!=(null===e||void 0===e?void 0:e.TitleLine)&&(null===e||void 0===e?void 0:e.TitleLine)]}),1==(null===j||void 0===j?void 0:j.IsGrossWeight)&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:"roop_btdetailDT",children:"GWT: "}),(0,p.jsx)("span",{className:"roop_btdetailDT",children:null===(n=(null===e||void 0===e?void 0:e.Gwt)||0)||void 0===n?void 0:n.toFixed(3)})]}),0!==Number(null===e||void 0===e?void 0:e.Nwt)&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:"roop_btpipe",children:"|"}),(0,p.jsx)("span",{className:"roop_btdetailDT",children:"NWT : "}),(0,p.jsx)("span",{className:"roop_btdetailDT",children:null===(l=(null===e||void 0===e?void 0:e.Nwt)||0)||void 0===l?void 0:l.toFixed(3)})]}),1==(null===j||void 0===j?void 0:j.IsDiamondWeight)&&(0,p.jsx)(p.Fragment,{children:("0"!=(null===e||void 0===e?void 0:e.Dwt)||"0"!=(null===e||void 0===e?void 0:e.Dpcs))&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:"roop_btpipe",children:"|"}),(0,p.jsx)("span",{className:"roop_btdetailDT",children:"DWT: "}),(0,p.jsxs)("span",{className:"roop_btdetailDT",children:[null===(o=(null===e||void 0===e?void 0:e.Dwt)||0)||void 0===o?void 0:o.toFixed(3),"/",(null===e||void 0===e?void 0:e.Dpcs)||0]})]})}),1==(null===j||void 0===j?void 0:j.IsStoneWeight)&&(0,p.jsx)(p.Fragment,{children:("0"!=(null===e||void 0===e?void 0:e.CSwt)||"0"!=(null===e||void 0===e?void 0:e.CSpcs))&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:"roop_btpipe",children:"|"}),(0,p.jsx)("span",{className:"roop_btdetailDT",children:"CWT: "}),(0,p.jsxs)("span",{className:"roop_btdetailDT",children:[null===(d=(null===e||void 0===e?void 0:e.CSwt)||0)||void 0===d?void 0:d.toFixed(3),"/",(null===e||void 0===e?void 0:e.CSpcs)||0]})]})}),(0,p.jsxs)("p",{children:[(0,p.jsx)("span",{className:"roop_currencyFont",children:g?null===b||void 0===b?void 0:b.CurrencyCode:null===j||void 0===j?void 0:j.CurrencyCode}),"\xa0",(0,p.jsx)("span",{children:(0,t.X9)(null===e||void 0===e?void 0:e.UnitCostWithMarkUp)})]})]})]})},i)})),(null===N||void 0===N?void 0:N.length)>8&&(0,p.jsx)(s.qr,{className:"swiper-slide-custom",style:{width:"25%",height:"auto",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,p.jsx)("div",{className:"data_album",children:(0,p.jsx)("button",{style:{border:"none",backgroundColor:"transparent",fontWeight:"500",textDecoration:"underline",color:"grey"},"aria-label":"View more trending products",className:"btn_more_A",onClick:()=>(()=>{const e=`/p/Trending/?T=${btoa("Trending")}`,i=`/loginOption/?LoginRedirect=${encodeURIComponent(e)}`;sessionStorage.setItem("redirectURL",e),n(0!==g?e:i)})(),children:"View More"})})},"slide-1")]})})})]})}},8616:(e,i,n)=>{e.exports=n.p+"static/media/image-not-found.1a8537f557fc26a4f457.jpg"}}]);
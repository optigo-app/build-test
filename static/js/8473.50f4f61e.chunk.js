"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[8473],{58473:(e,l,i)=>{i.r(l),i.d(l,{default:()=>x});var o=i(9950),n=i(61310),t=i(60497),s=(i(99425),i(49071),i(38737)),d=i(28429),a=i(49211),r=i(58322),u=i(92723),v=i(72930),c=i(78317),m=i(11966),g=i(84142),b=i(53289),h=i(82658),N=i(97732),p=i(56367),S=i(44414);const x=()=>{const e=(0,o.useRef)(null),[l,i]=(0,o.useState)(),[x,f]=(0,o.useState)(""),[I,y]=(0,o.useState)(),[A,C]=(0,o.useState)({});console.log("imageStatus: ",A);const O=(0,d.Zp)(),w=(0,r.vc)(h.kN),_=JSON.parse(sessionStorage.getItem("loginUserDetail")),j=((0,v.A)("(max-width:768px)"),(0,r.lZ)(h.X0)),J=null===JSON||void 0===JSON?void 0:JSON.parse(sessionStorage.getItem("storeInit"));(0,o.useEffect)((()=>{j(!0);let l=null===JSON||void 0===JSON?void 0:JSON.parse(sessionStorage.getItem("storeInit"));y(null===l||void 0===l?void 0:l.AlbumImageFol);const i=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(D(),i.unobserve(e.target))}))}),{root:null,threshold:.5});return e.current&&i.observe(e.current),()=>{e.current&&i.unobserve(e.current)}}),[]);const D=()=>{const e=null===JSON||void 0===JSON?void 0:JSON.parse(sessionStorage.getItem("loginUserDetail")),l=null===JSON||void 0===JSON?void 0:JSON.parse(sessionStorage.getItem("storeInit")),{IsB2BWebsite:o}=l,n=a.A.get("visiterId");let t;t=0==o&&!1===w?n:(null===e||void 0===e?void 0:e.id)||"0",(0,s.K)("GETAlbum_List",t).then((e=>{var l,o,n,t;null!==e&&void 0!==e&&null!==(l=e.Data)&&void 0!==l&&l.rd&&(j(!1),f(null===e||void 0===e||null===(o=e.Data)||void 0===o?void 0:o.rd),i(null===e||void 0===e||null===(n=e.Data)||void 0===n||null===(t=n.rd[0])||void 0===t?void 0:t.AlbumName))})).catch((e=>console.log(e)))},$=(e,l,i)=>{var o;N.Ay.event({action:"Navigate to Product Detail",category:"Product Interaction Through Album Section",label:e||i,value:null!==(o=null===_||void 0===_?void 0:_.firstname)&&void 0!==o?o:"User Not Login"});let n={a:l,b:e,m:null===_||void 0===_?void 0:_.MetalId,d:null===_||void 0===_?void 0:_.cmboDiaQCid,c:null===_||void 0===_?void 0:_.cmboCSQCid,f:{}},t=(e=>{try{const l=(new TextEncoder).encode(e),i=u.Ay.deflate(l,{to:"string"});return btoa(String.fromCharCode.apply(null,i))}catch(l){return console.error("Error compressing and encoding:",l),null}})(JSON.stringify(n));O(`/d/${i.replace(/\s+/g,"_")}${(null===i||void 0===i?void 0:i.length)>0?"_":""}${e}?p=${t}`)},E=e=>{var l=document.createElement("textarea");return l.innerHTML=e,l.value};(0,o.useEffect)((()=>{if(x){const e={};x.forEach((l=>{((null===JSON||void 0===JSON?void 0:JSON.parse(null===l||void 0===l?void 0:l.Designdetail))||[]).forEach((l=>{const i=`${null===J||void 0===J?void 0:J.CDNDesignImageFol}${null===l||void 0===l?void 0:l.designno}~1.${null===l||void 0===l?void 0:l.ImageExtension}`;e[i]=!0}))})),C(e)}}),[x]);const[k,T]=(0,o.useState)(null),U=(0,o.useRef)(null),L=(0,o.useCallback)((()=>{const e=null===x||void 0===x?void 0:x.find((e=>(null===e||void 0===e?void 0:e.AlbumName)===l)),i=null!==e&&void 0!==e&&e.Designdetail?JSON.parse(e.Designdetail):null,o=Array.isArray(i)?i.length:0;let n;return(1===o||2===o||3===o||o>3)&&(n="100%"),{width:n,length:o}}),[l]);return(0,o.useEffect)((()=>{U.current&&T(U.current.offsetHeight)}),[l,x]),(0,S.jsx)("div",{ref:e,children:0!=(null===x||void 0===x?void 0:x.length)&&(0,S.jsxs)("div",{className:"dt_album_container",children:[(0,S.jsx)("div",{className:"smr_ablbumtitleDiv",children:(0,S.jsx)("span",{className:"smr_albumtitle",children:"Album"})}),(0,S.jsx)(c.A,{className:"tabs",sx:{flexGrow:1,maxWidth:"100%"},children:(0,S.jsx)(m.A,{value:l,onChange:(e,l)=>{setTimeout((()=>{i(l)}),300)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",TabIndicatorProps:{style:{display:"none"}},children:null===x||void 0===x?void 0:x.map((e=>(0,S.jsx)(g.A,{label:null===e||void 0===e?void 0:e.AlbumName,value:null===e||void 0===e?void 0:e.AlbumName,className:l===(null===e||void 0===e?void 0:e.AlbumName)?"active":""},null===e||void 0===e?void 0:e.Albumid)))})}),(0,S.jsx)("div",{className:"Dt_swiper_container",style:{width:L().width},children:x&&(null===x||void 0===x?void 0:x.map((e=>{var i;return(null===e||void 0===e?void 0:e.AlbumName)===l?(0,S.jsxs)(n.RC,{style:{width:"100%"},spaceBetween:10,lazy:!0,navigation:!0,breakpoints:{1024:{slidesPerView:4},768:{slidesPerView:2},0:{slidesPerView:2}},modules:[t.s3,t.U1,t.Vx],keyboard:{enabled:!0},pagination:!1,className:"dt_album_swiper_SubDiv",children:[(null===e||void 0===e?void 0:e.Designdetail)&&(null===JSON||void 0===JSON||null===(i=JSON.parse(null===e||void 0===e?void 0:e.Designdetail))||void 0===i?void 0:i.map((e=>{const l=`${null===J||void 0===J?void 0:J.CDNDesignImageFol}${null===e||void 0===e?void 0:e.designno}~1.${null===e||void 0===e?void 0:e.ImageExtension}`,i=!1!==A[l];return(0,S.jsxs)(n.qr,{className:"swiper-slide-custom",children:[(0,S.jsx)("div",{className:"design-slide",onClick:()=>$(null===e||void 0===e?void 0:e.designno,null===e||void 0===e?void 0:e.autocode,null===e||void 0===e?void 0:e.TitleLine),children:(0,S.jsx)("img",{src:i?l:p,alt:null===e||void 0===e?void 0:e.TitleLine,loading:"lazy",onError:e=>{e.target.src=p}})}),(0,S.jsxs)("div",{className:"design-info",children:[(0,S.jsx)("p",{className:"smr_album1price",children:null===e||void 0===e?void 0:e.designno}),(0,S.jsxs)("p",{className:"smr_album1price",children:[(0,S.jsx)("span",{className:"smr_currencyFont",dangerouslySetInnerHTML:{__html:E(w?null===_||void 0===_?void 0:_.CurrencyCode:null===J||void 0===J?void 0:J.CurrencyCode)}})," ",(0,b.X9)(null===e||void 0===e?void 0:e.UnitCostWithMarkUp)]})]})]},null===e||void 0===e?void 0:e.autocode)}))),(null===l||void 0===l?void 0:l.length)>8&&(0,S.jsx)(n.qr,{className:"swiper-slide-custom",style:{width:"25%",height:"auto",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,S.jsx)("div",{className:"data_album",children:(0,S.jsx)("button",{style:{border:"none",backgroundColor:"transparent",fontWeight:"500",textDecoration:"underline",color:"grey"},className:"btn_more_A",onClick:()=>(()=>{const e=`/p/${encodeURIComponent(l)}/?A=${btoa(`AlbumName=${l}`)}`,i=`/loginOption/?LoginRedirect=${encodeURIComponent(e)}`;sessionStorage.setItem("redirectURL",e),O(0!==w?e:i)})(),children:"View More"})})},"slide-1")]},null===e||void 0===e?void 0:e.Albumid):null})))})]})})}},56367:(e,l,i)=>{e.exports=i.p+"static/media/image-not-found.1a8537f557fc26a4f457.jpg"}}]);
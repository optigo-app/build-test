"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[3236],{33236:(l,e,i)=>{i.r(e),i.d(e,{default:()=>u});var o=i(9950),a=i(38737),s=i(28429),n=i(49211),d=i(58322),t=i(71101),v=i(44414);const u=()=>{const[l,e]=(0,o.useState)(),[i,u]=(0,o.useState)(),m=(0,s.Zp)(),r=(0,d.vc)(t.KE);(0,o.useEffect)((()=>{var l,i;let o=null===JSON||void 0===JSON?void 0:JSON.parse(sessionStorage.getItem("storeInit"));u(null===o||void 0===o?void 0:o.AlbumImageFol);const s=null===JSON||void 0===JSON?void 0:JSON.parse(null===(l=sessionStorage)||void 0===l?void 0:l.getItem("loginUserDetail")),d=null===JSON||void 0===JSON?void 0:JSON.parse(null===(i=sessionStorage)||void 0===i?void 0:i.getItem("storeInit")),{IsB2BWebsite:t}=d,v=n.A.get("visiterId");let m;m=0==t&&!1===r?v:(null===s||void 0===s?void 0:s.id)||"0",(0,a.K)("GETAlbum",m).then((l=>{var i,o;null!==l&&void 0!==l&&null!==(i=l.Data)&&void 0!==i&&i.rd&&e(null===l||void 0===l||null===(o=l.Data)||void 0===o?void 0:o.rd)})).catch((l=>console.log(l)))}),[]);return console.log("albumDataalbumData",l),(0,v.jsxs)("div",{className:"roop_alubmMainDiv",children:[(null===l||void 0===l?void 0:l.length)>0&&(0,v.jsx)("p",{className:"roop_albumTitle",children:"Infinitely Inspiring"}),(0,v.jsx)("div",{className:"roop_albumALL_div",children:null===l||void 0===l?void 0:l.slice(0,5).map(((l,e)=>(0,v.jsxs)("div",{className:"roop_AlbumImageMain",onClick:()=>{return e=null===l||void 0===l?void 0:l.AlbumName,void m(`/p/${e}/?A=${btoa(`AlbumName=${e}`)}`);var e},children:[(0,v.jsx)("img",{src:i+(null===l||void 0===l?void 0:l.AlbumImageFol)+"/"+(null===l||void 0===l?void 0:l.AlbumImageName),className:"roop_AlbumImageMain_img"}),(0,v.jsx)("p",{className:"roop_albumName",children:null===l||void 0===l?void 0:l.AlbumName})]},e)))}),(null===l||void 0===l?void 0:l.length)>5&&(0,v.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,v.jsx)("p",{className:"roop_albumViveAll",children:"View All"})})]})}}}]);
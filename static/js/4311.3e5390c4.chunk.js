"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[4311],{4311:(e,i,n)=>{n.r(i),n.d(i,{default:()=>_});var l=n(9950),a=n(25495),o=n(72930),t=n(4447),d=n(53065),r=n(25333),s=n(71525),m=n(249),c=n(24184),v=n(21950),p=n(82658),u=n(58322),x=n(28429),g=n(21642),h=n(22875),j=n(73899),y=n(59511),f=n(99624),b=n(96319),S=n(49211),k=n(79043),w=(n(92723),n(44414));const _=()=>{var e,i,n,_,C,N,I,F,O,D,A,L,B,z,M;const[W,T]=(0,l.useState)(""),V=(0,u.vc)(p.g8),E=(0,u.vc)(p.BU),[$,J]=(0,l.useState)(),[K,P]=(0,u.L4)(p.kN),[R,U]=(0,l.useState)([]),[H,Q]=(0,l.useState)([]),Y=(0,x.Zp)(),[Z,X]=(0,l.useState)(null),[q,G]=(0,l.useState)(null),[ee,ie]=(0,l.useState)([]),[ne,le]=(0,l.useState)(!1),[ae,oe]=(0,l.useState)(!1),[te,de]=(0,l.useState)();let re=JSON.parse(sessionStorage.getItem("storeInit"));const se=null===re||void 0===re?void 0:re.IsB2BWebsite,[me,ce]=(0,l.useState)([]),[ve,pe]=(0,l.useState)({top:0,left:0}),[ue,xe]=(0,u.L4)(p.Zz),[ge,he]=(0,u.L4)(p.ED),[je,ye]=(0,l.useState)(!1);let fe=(0,x.Zp)();const be=()=>{const e=JSON.parse(sessionStorage.getItem("LoginUser"));P(e)};(0,l.useEffect)((()=>{const e=S.A.get("visiterId");let i;var n,l,a;if(sessionStorage.getItem("CompanyInfoData")&&(""!=(null===(n=i)||void 0===n?void 0:n.SocialLinkObj)&&null!=(null===(l=i)||void 0===l?void 0:l.SocialLinkObj)&&void 0!=(null===(a=i)||void 0===a?void 0:a.SocialLinkObj))){var o,t,d;i=null!==(o=null===JSON||void 0===JSON?void 0:JSON.parse(sessionStorage.getItem("CompanyInfoData")))&&void 0!==o?o:"";const e=null!==(t=null===JSON||void 0===JSON?void 0:JSON.parse(null===(d=i)||void 0===d?void 0:d.SocialLinkObj))&&void 0!==t?t:[];e&&ce(e)}(0,k.y)(e).then((e=>{e&&(xe(null===e||void 0===e?void 0:e.cartcount),he(null===e||void 0===e?void 0:e.wishcount))})).catch((e=>{e&&console.log("getCountApiErr",e)}))}),[]);const Se=async()=>{const e=JSON.parse(sessionStorage.getItem("loginUserDetail")),i=JSON.parse(sessionStorage.getItem("storeInit")),{IsB2BWebsite:n}=i,l=S.A.get("visiterId");let a;a=0==n&&!1===K?l:(null===e||void 0===e?void 0:e.id)||"0",await(0,y.M)(a).then((e=>{var i;Q(null===e||void 0===e||null===(i=e.Data)||void 0===i?void 0:i.rd)})).catch((e=>console.log(e)))};(0,l.useEffect)((()=>{let e=JSON.parse(sessionStorage.getItem("storeInit")),i=JSON.parse(sessionStorage.getItem("LoginUser"));return 0==(null===e||void 0===e?void 0:e.IsB2BWebsite)||1==(null===e||void 0===e?void 0:e.IsB2BWebsite)&&1==i?void Se():void 0}),[K]),(0,l.useEffect)((()=>{const e=()=>{const e=window.scrollY;le(e>100)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]),(0,l.useEffect)((()=>{const e=[...new Set(null===H||void 0===H?void 0:H.map((e=>null===e||void 0===e?void 0:e.menuid)))].map((e=>{var i;const n=null===H||void 0===H?void 0:H.find((i=>(null===i||void 0===i?void 0:i.menuid)===e)),l=[...new Set(null===H||void 0===H||null===(i=H.filter((i=>(null===i||void 0===i?void 0:i.menuid)===e)))||void 0===i?void 0:i.map((e=>null===e||void 0===e?void 0:e.param1dataid)))],a=l.map((i=>{var n;const l=null===H||void 0===H?void 0:H.find((n=>(null===n||void 0===n?void 0:n.menuid)===e&&(null===n||void 0===n?void 0:n.param1dataid)===i)),a=null===H||void 0===H||null===(n=H.filter((n=>(null===n||void 0===n?void 0:n.menuid)===e&&(null===n||void 0===n?void 0:n.param1dataid)===i)))||void 0===n?void 0:n.map((e=>({param2dataid:null===e||void 0===e?void 0:e.param2dataid,param2dataname:null===e||void 0===e?void 0:e.param2dataname,param2id:null===e||void 0===e?void 0:e.param2id,param2name:null===e||void 0===e?void 0:e.param2name})));return{menuname:null===l||void 0===l?void 0:l.menuname,param1dataid:null===l||void 0===l?void 0:l.param1dataid,param1dataname:null===l||void 0===l?void 0:l.param1dataname,param1id:null===l||void 0===l?void 0:l.param1id,param1name:null===l||void 0===l?void 0:l.param1name,param2:a}}));return{menuid:null===n||void 0===n?void 0:n.menuid,menuname:null===n||void 0===n?void 0:n.menuname,param0dataid:null===n||void 0===n?void 0:n.param0dataid,param0dataname:null===n||void 0===n?void 0:n.param0dataname,param0id:null===n||void 0===n?void 0:n.param0id,param0name:null===n||void 0===n?void 0:n.param0name,param1:a,displayorder:null===n||void 0===n?void 0:n.displayorder}})).sort(((e,i)=>e.displayorder-i.displayorder));U(e)}),[H]);const[ke,we]=(0,l.useState)(!1),[_e,Ce]=(0,l.useState)(!1),[Ne,Ie]=(0,l.useState)(!1),Fe=(0,l.useRef)(null);(0,l.useEffect)((()=>{be();const e=()=>{const e=window.scrollY,i=Fe.current?Fe.current.offsetHeight:0;Ie(e>100),null!==Z&&pe((n=>({...n,top:n.top+(i-(e>200?i:0))})))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[be,Z,Ne]),(0,l.useEffect)((()=>{if(!ke&&!_e){const e=setTimeout((()=>{ye(!1),X(null),G(null)}),200);return()=>clearTimeout(e)}}),[ke,_e]);const Oe=()=>{we(!1)},De=()=>{Y("/"),P(!1),S.A.remove("userLoginCookie"),window.location.reload(),sessionStorage.setItem("LoginUser",!1),sessionStorage.removeItem("storeInit"),sessionStorage.removeItem("loginUserDetail"),sessionStorage.removeItem("remarks"),sessionStorage.removeItem("selectedAddressId"),sessionStorage.removeItem("orderNumber"),sessionStorage.removeItem("registerEmail"),sessionStorage.removeItem("UploadLogicalPath"),sessionStorage.removeItem("remarks"),sessionStorage.removeItem("registerMobile"),sessionStorage.removeItem("allproductlist"),sessionStorage.clear()},[Ae,Le]=(0,l.useState)(null),Be=(0,o.A)("(min-width: 768px) and (max-width: 1024px)"),ze=(0,o.A)("(min-width: 1025px) and (max-width: 1440px)"),Me=(0,o.A)("(min-width: 1440px) and (max-width: 2550px)"),We=(e,i,n)=>{var l,a,o,t,d,r,s,m,c;ye(!1);let v={menuname:null!==(l=null===e||void 0===e?void 0:e.menuname)&&void 0!==l?l:"",FilterKey:null!==(a=null===e||void 0===e?void 0:e.key)&&void 0!==a?a:"",FilterVal:null!==(o=null===e||void 0===e?void 0:e.value)&&void 0!==o?o:"",FilterKey1:null!==(t=null===i||void 0===i?void 0:i.key)&&void 0!==t?t:"",FilterVal1:null!==(d=null===i||void 0===i?void 0:i.value)&&void 0!==d?d:"",FilterKey2:null!==(r=null===n||void 0===n?void 0:n.key)&&void 0!==r?r:"",FilterVal2:null!==(s=null===n||void 0===n?void 0:n.value)&&void 0!==s?s:""};sessionStorage.setItem("menuparams",JSON.stringify(v));const p=[(null===v||void 0===v?void 0:v.FilterKey)&&`${v.FilterVal}`,(null===v||void 0===v?void 0:v.FilterKey1)&&`${v.FilterVal1}`,(null===v||void 0===v?void 0:v.FilterKey2)&&`${v.FilterVal2}`].filter(Boolean).join("/"),u=[(null===v||void 0===v?void 0:v.FilterKey)&&`${v.FilterVal}`,(null===v||void 0===v?void 0:v.FilterKey1)&&`${v.FilterVal1}`,(null===v||void 0===v?void 0:v.FilterKey2)&&`${v.FilterVal2}`].filter(Boolean).join(","),x=Object.entries({b:null===v||void 0===v?void 0:v.FilterKey,g:null===v||void 0===v?void 0:v.FilterKey1,c:null===v||void 0===v?void 0:v.FilterKey2}).filter((e=>{let[i,n]=e;return void 0!==n})).map((e=>{let[i,n]=e;return n})).filter(Boolean).join(",");[`page=${null!==(m=v.page)&&void 0!==m?m:1}`,`size=${null!==(c=v.size)&&void 0!==c?c:50}`].join("&");const g=`/p/${null===v||void 0===v?void 0:v.menuname}/${p}/?M=${btoa(`${u}/${x}`)}`;oe(!1),fe(g)},Te=(e,i,n)=>{if("iconclicked"==n)return void Le((i=>i===e?null:e));const{param1:l,...a}=i;!async function(e){var i,n,l,a,o,t,d,r,s,m,c,v;let p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{param1:x,param2:g,...h}=e;let j={...h};if(p){const{param1:e,param2:i,...n}=p;j={...j,...n},u&&(j={...j,...u})}let y={menuname:null!==(i=null===(n=j)||void 0===n?void 0:n.menuname)&&void 0!==i?i:"",FilterKey:null!==(l=j.param0name)&&void 0!==l?l:"",FilterVal:null!==(a=j.param0dataname)&&void 0!==a?a:"",FilterKey1:null!==(o=null===(t=j)||void 0===t?void 0:t.param1name)&&void 0!==o?o:"",FilterVal1:null!==(d=null===(r=j)||void 0===r?void 0:r.param1dataname)&&void 0!==d?d:"",FilterKey2:null!==(s=null===(m=j)||void 0===m?void 0:m.param2name)&&void 0!==s?s:"",FilterVal2:null!==(c=null===(v=j)||void 0===v?void 0:v.param2dataname)&&void 0!==c?c:""};sessionStorage.setItem("menuparams",JSON.stringify(y))}(a)};(0,l.useEffect)((()=>{Me&&oe(!1)}),[Me]);let Ve="100%";Be?Ve="50%":ze&&(Ve="25%");const Ee=e=>{if("Enter"===e.key&&(e.preventDefault(),W)){var i,n,l;let e=JSON.parse(sessionStorage.getItem("loginUserDetail")),a=JSON.parse(sessionStorage.getItem("storeInit")),o={a:"",b:W,m:null!==(i=null===e||void 0===e?void 0:e.MetalId)&&void 0!==i?i:null===a||void 0===a?void 0:a.MetalId,d:null!==(n=null===e||void 0===e?void 0:e.cmboDiaQCid)&&void 0!==n?n:null===a||void 0===a?void 0:a.cmboDiaQCid,c:null!==(l=null===e||void 0===e?void 0:e.cmboCSQCid)&&void 0!==l?l:null===a||void 0===a?void 0:a.cmboCSQCid,f:{}},t=btoa(JSON.stringify(o));T(""),oe(!1),fe(`/p/${W}?S=${t}`)}};return(0,w.jsxs)("div",{className:"dai_headerMain",children:[(0,w.jsxs)("div",{className:"dai_headerMainTop",children:[(0,w.jsxs)("div",{className:"div_contact_info first-dt",children:[(0,w.jsx)(a.Xb5,{style:{height:"20px",width:"40px"}}),(0,w.jsx)("a",{href:"tel:98108 76359",className:"Dt_FontFamilySet",style:{fontSize:"12px",color:"white",cursor:"pointer",textDecoration:"none",fontWeight:500},children:"Call: +91-98108 76359"})]}),(0,w.jsx)("p",{className:"Dt_FontFamilySet two-dt",style:{margin:"0px",color:"white",fontWeight:500},children:"100% Natural Diamonds"}),(0,w.jsxs)("div",{className:"dai_login_link three-dt",children:[null===me||void 0===me?void 0:me.map(((e,i)=>(0,w.jsx)("a",{href:`https://${e.SLink}`,target:"_blank",rel:"noopener noreferrer",children:(0,w.jsx)("img",{src:e.SImgPath,alt:e.SName,style:{width:"18px",height:"18px",objectFit:"cover"},onError:e=>{e.target.style.display="none"}})},i))),!K&&(0,w.jsx)("p",{className:"Dt_FontFamilySet",style:{margin:"0px 20px",cursor:"pointer",color:"white",fontWeight:500},onClick:()=>Y("/LoginOption"),children:"Login"})]})]}),(0,w.jsxs)("div",{className:"dt_headermainDiv",children:[(0,w.jsxs)("div",{className:"dt_headermainDiv1",children:[(0,w.jsx)(v.Lab,{fontSize:"20px",style:{height:"20px",width:"20px",marginRight:"10px"}}),(0,w.jsx)("input",{type:"text",placeholder:"Search...",value:W,onChange:e=>T(e.target.value),className:"serachinputBoxOverly",onKeyDown:Ee})]}),(0,w.jsx)("div",{className:"dt_headermainDiv2",children:(0,w.jsx)("a",{href:"/",children:(0,w.jsx)("img",{alt:"",src:V,className:"dt_header_logo",onClick:()=>Y("/")})})}),(0,w.jsx)("div",{className:"dt_headermainDiv3",children:(0,w.jsxs)("ul",{className:"dt_nav_ul_shop",children:[1==se?1==K?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(t.A,{badgeContent:ge,max:1e3,overlap:"rectangular",color:"secondary",sx:{"& .MuiBadge-badge":{backgroundColor:"#a8807c"}},children:(0,w.jsx)(d.A,{title:"WishList",children:(0,w.jsx)("li",{className:"dt_nav_li_smining",style:{cursor:"pointer",textDecoration:"none",marginTop:"0"},onClick:()=>Y("/myWishList"),children:(0,w.jsx)(g.Lrx,{color:"#7D7F85",fontSize:"25px"})})})}),(0,w.jsx)(t.A,{badgeContent:ue,max:1e3,overlap:"rectangular",color:"secondary",sx:{"& .MuiBadge-badge":{backgroundColor:"#a8807c"}},children:(0,w.jsx)(d.A,{title:"Cart",children:(0,w.jsx)("li",{className:"dt_nav_li_smining",onClick:()=>Y("/CartPage"),style:{cursor:"pointer",marginTop:"0px"},children:(0,w.jsx)(j.mzj,{color:"#7D7F85",fontSize:"25px"})})})})]}):"":(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(t.A,{badgeContent:ge,max:1e3,overlap:"rectangular",color:"secondary",sx:{"& .MuiBadge-badge":{backgroundColor:"#a8807c"}},children:(0,w.jsx)(d.A,{title:"WishList",children:(0,w.jsx)("li",{className:"dt_nav_li_smining",style:{cursor:"pointer",textDecoration:"none",marginTop:"0"},onClick:()=>Y("/myWishList"),children:(0,w.jsx)(g.Lrx,{color:"#7D7F85",fontSize:"25px"})})})}),(0,w.jsx)(t.A,{badgeContent:ue,max:1e3,overlap:"rectangular",color:"secondary",sx:{"& .MuiBadge-badge":{backgroundColor:"#a8807c"}},children:(0,w.jsx)(d.A,{title:"Cart",children:(0,w.jsx)("li",{className:"dt_nav_li_smining",onClick:()=>Y("/CartPage"),style:{cursor:"pointer",marginTop:"0px"},children:(0,w.jsx)(j.mzj,{color:"#7D7F85",fontSize:"25px"})})})})]}),1==K&&(0,w.jsx)(d.A,{title:"Account",children:(0,w.jsx)("li",{className:"dt_nav_li_smining",style:{cursor:"pointer",textDecoration:"none",marginTop:"0"},onClick:()=>{0!=(null===$||void 0===$?void 0:$.IsB2BWebsite)||K?Y("/account"):Y("/LoginOption")},children:(0,w.jsx)(a.SNd,{color:"#7D7F85",fontSize:"25px"})})}),K&&(0,w.jsx)("li",{className:"dt_nav_li_smining",style:{cursor:"pointer",marginTop:"0"},onClick:De,children:(0,w.jsx)(h.e9S,{color:"#7D7F85",style:{fontSize:"25px"}})})]})})]}),(0,w.jsx)("div",{className:"dt_TopFixed_Header "+(Ne?"fixed":""),ref:Fe,children:(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)("ul",{className:"dt_ul_main",children:[(0,w.jsx)("li",{className:"dt_menu_li",style:{height:"100%",display:"flex",alignItems:"center",cursor:"pointer",textTransform:"uppercase"},onClick:()=>{Y("/"),window.scrollTo(0,0)},children:(0,w.jsx)("span",{className:"nav-li-sminingSpan_Home",children:"Home"})}),R.map(((e,i)=>(0,w.jsx)("li",{className:"dt_menu_li",style:{height:"100%",display:"flex",alignItems:"center",cursor:"pointer",textTransform:"uppercase"},label:e.menuname,onMouseEnter:e=>((e,i)=>{if(i&&i.target){const n=i.target,{top:l,left:a,height:o}=n.getBoundingClientRect(),t=Fe.current?Fe.current.offsetHeight:0;pe({top:l+o+window.scrollY-t/20,left:a+window.scrollX}),ye(!0),G(e),X(e),ie(R[e]||[]),we(!0)}})(i,e),onMouseLeave:Oe,onClick:()=>We({menuname:null===e||void 0===e?void 0:e.menuname,key:null===e||void 0===e?void 0:e.param0name,value:null===e||void 0===e?void 0:e.param0dataname}),children:(0,w.jsx)("span",{className:"nav_li_sminingSpan_Menu",style:{textDecoration:q==i&&"underline"},children:e.menuname})},i))),1==se?!0===K?(0,w.jsx)(w.Fragment,{children:1==(null===re||void 0===re?void 0:re.IsDesignSetInMenu)&&(0,w.jsxs)("li",{className:"dt_menu_li",style:{height:"100%",display:"flex",alignItems:"center",cursor:"pointer",textTransform:"uppercase",position:"relative"},onClick:()=>Y("/Lookbook"),children:[(0,w.jsx)("span",{className:"dt_lookBookNew_header",children:"New"}),(0,w.jsx)("span",{className:"nav-li-sminingSpan",children:null===re||void 0===re?void 0:re.DesignSetInMenu})]})}):"":(0,w.jsx)(w.Fragment,{children:1==(null===re||void 0===re?void 0:re.IsDesignSetInMenu)&&(0,w.jsxs)("li",{className:"dt_menu_li",style:{height:"100%",display:"flex",alignItems:"center",cursor:"pointer",textTransform:"uppercase",position:"relative",justifyContent:"center"},onClick:()=>Y("/Lookbook"),children:[(0,w.jsx)("span",{className:"dt_lookBookNew_header",children:"New"}),(0,w.jsx)("span",{className:"nav-li-sminingSpan",children:null===re||void 0===re?void 0:re.DesignSetInMenu})]})})]})})}),je&&(0,w.jsx)("div",{id:"shopdropdown",className:`dt_shop_dropdown ${null!==Z?"open":""} ${Ne?"fixed":""}`,onMouseEnter:()=>{Ce(!0)},onMouseLeave:()=>{Ce(!1)},style:{left:null!==ee&&void 0!==ee&&null!==(e=ee.param1)&&void 0!==e&&e.some((e=>{var i;return null===e||void 0===e||null===(i=e.param2)||void 0===i?void 0:i.some((e=>0==(null===Object||void 0===Object?void 0:Object.keys(null===e||void 0===e?void 0:e.param2name).length)))}))||(null===R||void 0===R?void 0:R.length)>4&&(null===Object||void 0===Object||null===(i=Object.keys(null===ee||void 0===ee?void 0:ee.param1))||void 0===i?void 0:i.length)<4?ve.left:"0px",position:Ne?"fixed":"absolute",zIndex:99,display:null!==ee&&void 0!==ee&&null!==(n=ee.param1)&&void 0!==n&&n.some((e=>{var i;return null===e||void 0===e||null===(i=e.param2)||void 0===i?void 0:i.some((e=>0==(null===Object||void 0===Object?void 0:Object.keys(null===e||void 0===e?void 0:e.param2name).length)))}))||(null===R||void 0===R?void 0:R.length)>4&&(null===Object||void 0===Object||null===(_=Object.keys(null===ee||void 0===ee?void 0:ee.param1))||void 0===_?void 0:_.length)<4?"block":"flex",width:null!==ee&&void 0!==ee&&null!==(C=ee.param1)&&void 0!==C&&C.some((e=>{var i;return null===e||void 0===e||null===(i=e.param2)||void 0===i?void 0:i.some((e=>0!=(null===Object||void 0===Object?void 0:Object.keys(null===e||void 0===e?void 0:e.param2name).length)))}))&&(null===R||void 0===R?void 0:R.length)>4&&(null===Object||void 0===Object||null===(N=Object.keys(null===ee||void 0===ee?void 0:ee.param1))||void 0===N?void 0:N.length)<4?"fit-content":"100%",justifyContent:(null===ee||void 0===ee||null===(I=ee.param1)||void 0===I?void 0:I.some((e=>{var i;return null===e||void 0===e||null===(i=e.param2)||void 0===i?void 0:i.some((e=>0!=(null===Object||void 0===Object?void 0:Object.keys(null===e||void 0===e?void 0:e.param2name).length)))})))&&"center"},children:(0,w.jsx)("div",{style:{display:"flex",padding:"30px",color:"#7d7f85",gap:"50px",marginTop:Ne&&"60px",justifyContent:"space-between",width:"fit-content",backgroundColor:(null===ee||void 0===ee||null===(F=ee.param1)||void 0===F?void 0:F.length)>0&&null!==ee&&void 0!==ee&&null!==(O=ee.param1[0])&&void 0!==O&&O.param1dataname?"white":"",boxShadow:(null===ee||void 0===ee||null===(D=ee.param1)||void 0===D?void 0:D.length)>0&&null!==ee&&void 0!==ee&&null!==(A=ee.param1[0])&&void 0!==A&&A.param1dataname?"5px 10px 16px rgba(51, 51, 51, 0.05), -5px 10px 16px rgba(51, 51, 51, 0.05)":"",height:(null===ee||void 0===ee||null===(L=ee.param1)||void 0===L?void 0:L.some((e=>{var i;return null===e||void 0===e||null===(i=e.param2)||void 0===i?void 0:i.some((e=>0!=(null===Object||void 0===Object?void 0:Object.keys(null===e||void 0===e?void 0:e.param2name).length)))})))&&"fit-content"},className:"menuDropdownData",children:(0,w.jsx)("div",{style:{width:"100%",gap:null!==ee&&void 0!==ee&&null!==(B=ee.param1)&&void 0!==B&&B.some((e=>{var i;return null===e||void 0===e||null===(i=e.param2)||void 0===i?void 0:i.some((e=>0==(null===Object||void 0===Object?void 0:Object.keys(null===e||void 0===e?void 0:e.param2name).length)))}))?"0px":"60px",textTransform:"uppercase",display:"flex",flexDirection:null!==ee&&void 0!==ee&&null!==(z=ee.param1)&&void 0!==z&&z.some((e=>{var i;return null===e||void 0===e||null===(i=e.param2)||void 0===i?void 0:i.some((e=>0==(null===Object||void 0===Object?void 0:Object.keys(null===e||void 0===e?void 0:e.param2name).length)))}))?"column":"row"},children:null===ee||void 0===ee||null===(M=ee.param1)||void 0===M?void 0:M.map(((e,i)=>{var n;return(0,w.jsxs)("div",{children:[(0,w.jsxs)("span",{onClick:()=>We({menuname:null===te||void 0===te?void 0:te.menuname,key:null===te||void 0===te?void 0:te.param0name,value:null===te||void 0===te?void 0:te.param0dataname},{key:e.param1name,value:e.param1dataname}),className:"level1MenuData",style:{fontSize:"15px",marginBottom:"10px",fontFamily:'"Poppins", sans-serif',textAlign:"start",letterSpacing:1,fontWeight:600,cursor:"pointer"},children:[" ",null===e||void 0===e?void 0:e.param1dataname]},i),(0,w.jsx)("div",{style:{height:"auto",display:"flex",flexWrap:"wrap",flexDirection:"column"},children:null===e||void 0===e||null===(n=e.param2)||void 0===n?void 0:n.map(((i,n)=>(0,w.jsx)("p",{className:"level2menuData",onClick:()=>We({menuname:null===te||void 0===te?void 0:te.menuname,key:null===te||void 0===te?void 0:te.param0name,value:null===te||void 0===te?void 0:te.param0dataname},{key:e.param1name,value:e.param1dataname},{key:i.param2name,value:i.param2dataname}),style:{fontSize:"13.5px",margin:"6px 15px 6px 0px",fontFamily:'"Poppins", sans-serif',letterSpacing:.4,textAlign:"start",cursor:"pointer",textTransform:"capitalize",paddingRight:"15px"},children:null===i||void 0===i?void 0:i.param2dataname},n)))})]},i)}))})})}),(0,w.jsxs)("div",{className:"dt_mobileViewHeaderMain",style:{backgroundColor:ae?"white":"#e1e1e1 "},children:[(0,w.jsx)("div",{className:"dt_mobileView_div1",children:ae?(0,w.jsx)(r.A,{onClick:()=>oe(!1),children:(0,w.jsx)(b.A,{})}):(0,w.jsx)(r.A,{style:{color:"#7D7F85"},onClick:()=>oe(!0),"aria-label":"open menu",autoFocus:!1,children:(0,w.jsx)(f.A,{style:{fontSize:"35px"},className:"mobileViewSmilingTop4Icone"})})}),(0,w.jsx)("div",{className:"dt_mobileView_div2",style:{display:"flex",alignItems:"center"},children:(0,w.jsx)("a",{href:"/",children:V&&(0,w.jsx)("img",{src:V,className:"dt_mobileView_div2_logo"})})}),(0,w.jsx)("div",{className:"dt_mobileView_div2_mobile",style:{display:"flex",alignItems:"center"},children:(0,w.jsx)("a",{href:"/",children:E&&(0,w.jsx)("img",{src:E,className:"dt_mobileView_div2_logo"})})}),(0,w.jsx)("div",{className:"dt_mobileView_div3",children:(0,w.jsxs)("ul",{className:"dt_mobile_div3_ulMain",children:[ae?(0,w.jsx)(w.Fragment,{children:1==se?K&&(0,w.jsx)(t.A,{badgeContent:ge,max:1e3,overlap:"rectangular",color:"secondary",sx:{"& .MuiBadge-badge":{backgroundColor:"#a8807c",marginInline:"10px"}},className:"dt_mobile_div3_li1",children:(0,w.jsx)("li",{style:{listStyle:"none",cursor:"pointer",marginInline:"10px"},onClick:()=>{Y("/myWishList"),oe(!1)},children:(0,w.jsx)(g.Lrx,{color:"#7D7F85",fontSize:"30px"})})}):(0,w.jsx)(t.A,{badgeContent:ge,max:1e3,overlap:"rectangular",color:"secondary",sx:{"& .MuiBadge-badge":{backgroundColor:"#a8807c",marginInline:"10px"}},className:"dt_mobile_div3_li1",children:(0,w.jsx)("li",{style:{listStyle:"none",cursor:"pointer",marginInline:"10px"},onClick:()=>{Y("/myWishList"),oe(!1)},children:(0,w.jsx)(g.Lrx,{color:"#7D7F85",fontSize:"30px"})})})}):(0,w.jsx)(w.Fragment,{children:1==se?K&&(0,w.jsx)(t.A,{badgeContent:ue,max:1e3,overlap:"rectangular",color:"secondary",sx:{"& .MuiBadge-badge":{backgroundColor:"#a8807c",marginInline:"10px"}},children:(0,w.jsx)("li",{style:{marginInline:"10px"},onClick:()=>{oe(!1),Y("/CartPage")},children:(0,w.jsx)(j.mzj,{color:"#7D7F85",fontSize:"30px"})})}):(0,w.jsx)(t.A,{badgeContent:ue,max:1e3,overlap:"rectangular",color:"secondary",sx:{"& .MuiBadge-badge":{backgroundColor:"#a8807c",marginInline:"10px"}},children:(0,w.jsx)("li",{style:{marginInline:"10px"},onClick:()=>{oe(!1),Y("/CartPage")},children:(0,w.jsx)(j.mzj,{color:"#7D7F85",fontSize:"30px"})})})}),ae&&K&&(0,w.jsx)("li",{className:"dt_mobile_div3_li1",style:{marginInline:"10px"},onClick:()=>{Y("/account"),oe(!1)},children:(0,w.jsx)(a.SNd,{color:"#7D7F85",fontSize:"30px"})}),!ae&&(K?(0,w.jsx)("li",{className:"dt_mobile_div3_li3",style:{marginInline:"10px"},onClick:De,children:(0,w.jsx)(h.e9S,{fontSize:"30px",color:"#7D7F85"})}):(0,w.jsx)("li",{className:"dt_mobile_div3_li3",style:{marginInline:"10px"},onClick:()=>Y("/LoginOption"),children:(0,w.jsx)(a.SNd,{color:"#7D7F85",fontSize:"30px"})}))]})})]}),ae&&(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(s.Ay,{anchor:"left",open:ae,onClose:()=>oe(!1),PaperProps:{style:{width:Ve}},children:[(0,w.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,w.jsx)("div",{style:{width:"33.33%",display:"flex",alignItems:"center"},children:(0,w.jsx)(r.A,{onClick:()=>{T(""),oe(!1)},children:(0,w.jsx)(b.A,{})})}),(0,w.jsx)("div",{style:{width:"33.33%"},children:(0,w.jsx)("a",{href:"/",children:V&&(0,w.jsx)("img",{src:V,style:{maxWidth:"150px"}})})}),(0,w.jsxs)("ul",{style:{display:"flex",listStyle:"none",width:"33.33%",margin:"0px",padding:"0px",justifyContent:"flex-end",alignItems:"center"},children:[1==K&&(0,w.jsx)(t.A,{badgeContent:ge,max:1e3,overlap:"rectangular",color:"secondary",style:{marginInline:"15px"},sx:{"& .MuiBadge-badge":{backgroundColor:"#a8807c"}},children:(0,w.jsx)("li",{onClick:()=>{oe(!1),Y("/myWishList")},style:{marginLeft:"-10px",cursor:"pointer",listStyle:"none",marginTop:"5px"},sx:{"& .MuiBadge-badge":{fontSize:10,height:20,minWidth:20,width:20}},children:(0,w.jsx)(g.Lrx,{color:"#7D7F85",fontSize:"20px"})})}),(0,w.jsx)(t.A,{badgeContent:ue,max:1e3,overlap:"rectangular",color:"secondary",style:{marginInline:"15px"},sx:{"& .MuiBadge-badge":{fontSize:10,height:20,minWidth:20,width:20,backgroundColor:"#a8807c"}},children:(0,w.jsx)("li",{onClick:()=>{oe(!1),Y("/CartPage")},style:{marginLeft:"-10px",cursor:"pointer",listStyle:"none",marginTop:"0px"},children:(0,w.jsx)(j.mzj,{fontSize:"20px"})})}),(0,w.jsx)("li",{className:"nav-li-smining",style:{cursor:"pointer",marginTop:"0"},onClick:De,children:(0,w.jsx)(h.e9S,{style:{fontSize:"20px"}})})]})]}),(0,w.jsx)("div",{style:{padding:"0px 0px 5px 15px",display:"flex",justifyContent:"space-between",alignItems:"center",margin:"10px 0px 0px 0px",fontWeight:"500",borderBottom:"1px solid lightgray",width:"100%"},children:(0,w.jsxs)("div",{className:"dt_headermainDiv1",children:[(0,w.jsx)(v.Lab,{fontSize:"20px",style:{height:"20px",width:"20px",marginRight:"10px"}}),(0,w.jsx)("input",{type:"text",placeholder:"Search...",value:W,onChange:e=>T(e.target.value),style:{border:"0px",outline:"0px"},className:"serachinputBoxOverly",onKeyDown:Ee})]})}),(0,w.jsxs)(m.A,{sx:{paddingTop:"0",marginBottom:"20px"},children:[1==se?!0===K?(0,w.jsx)(w.Fragment,{children:1==(null===re||void 0===re?void 0:re.IsDesignSetInMenu)&&(0,w.jsx)(c.A,{component:"div",style:{width:"100%"},onClick:()=>{Y("/Lookbook"),oe(!1)},children:(0,w.jsxs)("p",{style:{padding:"0px 0px 10px 15px",display:"flex",position:"relative",alignItems:"center",margin:"10px 0px 0px 0px",fontWeight:"500",borderBottom:"1px solid lightgray",width:"100%"},children:[(0,w.jsx)("span",{style:{position:"absolute",left:"100px",top:"-11px",color:"white",backgroundColor:"saddlebrown",width:"fitContent",paddingInline:"5px",height:"16px",fontSize:"10px",borderRadius:"5px"},children:"New"}),(0,w.jsx)("span",{className:"nav-li-sminingSpan",children:null===re||void 0===re?void 0:re.DesignSetInMenu})]})})}):"":(0,w.jsx)(w.Fragment,{children:1==(null===re||void 0===re?void 0:re.IsDesignSetInMenu)&&(0,w.jsx)(c.A,{component:"div",style:{width:"100%"},onClick:()=>{Y("/Lookbook"),oe(!1)},children:(0,w.jsxs)("p",{style:{padding:"0px 0px 10px 15px",display:"flex",position:"relative",alignItems:"center",margin:"10px 0px 0px 0px",fontWeight:"500",borderBottom:"1px solid lightgray",width:"100%"},children:[(0,w.jsx)("span",{style:{position:"absolute",left:"100px",top:"-11px",color:"white",backgroundColor:"saddlebrown",width:"fitContent",paddingInline:"5px",height:"16px",fontSize:"10px",borderRadius:"5px"},children:"New"}),(0,w.jsx)("span",{className:"nav-li-sminingSpan",children:null===re||void 0===re?void 0:re.DesignSetInMenu})]})})}),R.map((e=>(0,w.jsxs)("div",{children:[(0,w.jsx)(c.A,{component:"div",onClick:()=>Te(e.menuname,null,"iconclicked"),style:{width:"100%"},children:(0,w.jsxs)("p",{style:{padding:"0px 0px 10px 15px",display:"flex",justifyContent:"space-between",alignItems:"center",margin:"10px 0px 0px 0px",fontWeight:"500",borderBottom:"1px solid lightgray",width:"100%"},children:[e.menuname,Ae===e.menuname?(0,w.jsx)(h.Ucs,{style:{marginRight:"15px",color:"#9b978f"}}):(0,w.jsx)(h.Vr3,{style:{marginRight:"15px",color:"#9b978f"}})]})}),Ae===e.menuname&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(c.A,{component:"div",onClick:()=>We({menuname:null===e||void 0===e?void 0:e.menuname,key:null===e||void 0===e?void 0:e.param0name,value:null===e||void 0===e?void 0:e.param0dataname}),style:{width:"100%",display:"flex",justifyContent:"start"},children:(0,w.jsx)("p",{style:{margin:"5px 0px 0px 15px",textDecoration:"underline"},children:"View All"})}),(0,w.jsx)(m.A,{children:e.param1.map((i=>(0,w.jsxs)("div",{children:[(0,w.jsx)(c.A,{component:"div",onClick:()=>We({menuname:null===e||void 0===e?void 0:e.menuname,key:null===e||void 0===e?void 0:e.param0name,value:null===e||void 0===e?void 0:e.param0dataname},{key:i.param1name,value:i.param1dataname}),style:{width:"100%",display:"flex",justifyContent:"start"},children:(0,w.jsx)("p",{style:{margin:"5px 0px 5px 15px",fontWeight:500},children:i.param1dataname})}),Ae===e.menuname&&(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(m.A,{style:{paddingTop:"0px",paddingBottom:"0px"},children:i.param2.map((n=>(0,w.jsx)(c.A,{component:"div",onClick:()=>We({menuname:null===e||void 0===e?void 0:e.menuname,key:null===e||void 0===e?void 0:e.param0name,value:null===e||void 0===e?void 0:e.param0dataname},{key:i.param1name,value:i.param1dataname},{key:n.param2name,value:n.param2dataname}),style:{width:"100%",display:"flex",justifyContent:"start"},children:(0,w.jsx)("p",{style:{margin:"5px 0px 5px 25px"},children:n.param2dataname})})))})})]},i.param1dataid)))})]})]},e.menuid)))]})]})})]})}}}]);
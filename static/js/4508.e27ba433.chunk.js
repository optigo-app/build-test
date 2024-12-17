"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[4508],{52127:(e,s,l)=>{l.r(s),l.d(s,{default:()=>ae});var i=l(9950),t=l(9487),a=l(72930),d=l(78317),n=l(46639),r=l(25277),o=l(40428),c=l(1772),v=l(48738),u=l.n(v),m=l(44414);const x=["xxl","xl","lg","md","sm","xs"],f="xs",p=i.createContext({prefixes:{},breakpoints:x,minBreakpoint:f}),{Consumer:h,Provider:g}=p;function j(e,s){const{prefixes:l}=(0,i.useContext)(p);return e||l[s]||s}function N(){const{breakpoints:e}=(0,i.useContext)(p);return e}function y(){const{minBreakpoint:e}=(0,i.useContext)(p);return e}const _=i.forwardRef(((e,s)=>{let{bsPrefix:l,fluid:i=!1,as:t="div",className:a,...d}=e;const n=j(l,"container"),r="string"===typeof i?`-${i}`:"-fluid";return(0,m.jsx)(t,{ref:s,...d,className:u()(a,i?`${n}${r}`:n)})}));_.displayName="Container";const b=_,w=i.forwardRef(((e,s)=>{let{bsPrefix:l,className:i,as:t="div",...a}=e;const d=j(l,"row"),n=N(),r=y(),o=`${d}-cols`,c=[];return n.forEach((e=>{const s=a[e];let l;delete a[e],null!=s&&"object"===typeof s?({cols:l}=s):l=s;const i=e!==r?`-${e}`:"";null!=l&&c.push(`${o}${i}-${l}`)})),(0,m.jsx)(t,{ref:s,...a,className:u()(i,d,...c)})}));w.displayName="Row";const S=w;const C=i.forwardRef(((e,s)=>{const[{className:l,...i},{as:t="div",bsPrefix:a,spans:d}]=function(e){let{as:s,bsPrefix:l,className:i,...t}=e;l=j(l,"col");const a=N(),d=y(),n=[],r=[];return a.forEach((e=>{const s=t[e];let i,a,o;delete t[e],"object"===typeof s&&null!=s?({span:i,offset:a,order:o}=s):i=s;const c=e!==d?`-${e}`:"";i&&n.push(!0===i?`${l}${c}`:`${l}${c}-${i}`),null!=o&&r.push(`order${c}-${o}`),null!=a&&r.push(`offset${c}-${a}`)})),[{...t,className:u()(i,...n,...r)},{as:s,bsPrefix:l,spans:n}]}(e);return(0,m.jsx)(t,{...i,ref:s,className:u()(l,!d.length&&a)})}));C.displayName="Col";const $=C,I=i.forwardRef(((e,s)=>{let{className:l,bsPrefix:i,as:t="div",...a}=e;return i=j(i,"card-body"),(0,m.jsx)(t,{ref:s,className:u()(l,i),...a})}));I.displayName="CardBody";const k=I,P=i.forwardRef(((e,s)=>{let{className:l,bsPrefix:i,as:t="div",...a}=e;return i=j(i,"card-footer"),(0,m.jsx)(t,{ref:s,className:u()(l,i),...a})}));P.displayName="CardFooter";const T=P,A=i.createContext(null);A.displayName="CardHeaderContext";const M=A,R=i.forwardRef(((e,s)=>{let{bsPrefix:l,className:t,as:a="div",...d}=e;const n=j(l,"card-header"),r=(0,i.useMemo)((()=>({cardHeaderBsPrefix:n})),[n]);return(0,m.jsx)(M.Provider,{value:r,children:(0,m.jsx)(a,{ref:s,...d,className:u()(t,n)})})}));R.displayName="CardHeader";const D=R,L=i.forwardRef(((e,s)=>{let{bsPrefix:l,className:i,variant:t,as:a="img",...d}=e;const n=j(l,"card-img");return(0,m.jsx)(a,{ref:s,className:u()(t?`${n}-${t}`:n,i),...d})}));L.displayName="CardImg";const O=L,E=i.forwardRef(((e,s)=>{let{className:l,bsPrefix:i,as:t="div",...a}=e;return i=j(i,"card-img-overlay"),(0,m.jsx)(t,{ref:s,className:u()(l,i),...a})}));E.displayName="CardImgOverlay";const H=E,B=i.forwardRef(((e,s)=>{let{className:l,bsPrefix:i,as:t="a",...a}=e;return i=j(i,"card-link"),(0,m.jsx)(t,{ref:s,className:u()(l,i),...a})}));B.displayName="CardLink";const z=B,F=e=>i.forwardRef(((s,l)=>(0,m.jsx)("div",{...s,ref:l,className:u()(s.className,e)}))),J=F("h6"),Q=i.forwardRef(((e,s)=>{let{className:l,bsPrefix:i,as:t=J,...a}=e;return i=j(i,"card-subtitle"),(0,m.jsx)(t,{ref:s,className:u()(l,i),...a})}));Q.displayName="CardSubtitle";const U=Q,W=i.forwardRef(((e,s)=>{let{className:l,bsPrefix:i,as:t="p",...a}=e;return i=j(i,"card-text"),(0,m.jsx)(t,{ref:s,className:u()(l,i),...a})}));W.displayName="CardText";const Z=W,q=F("h5"),G=i.forwardRef(((e,s)=>{let{className:l,bsPrefix:i,as:t=q,...a}=e;return i=j(i,"card-title"),(0,m.jsx)(t,{ref:s,className:u()(l,i),...a})}));G.displayName="CardTitle";const K=G,V=i.forwardRef(((e,s)=>{let{bsPrefix:l,className:i,bg:t,text:a,border:d,body:n=!1,children:r,as:o="div",...c}=e;const v=j(l,"card");return(0,m.jsx)(o,{ref:s,...c,className:u()(i,v,t&&`bg-${t}`,a&&`text-${a}`,d&&`border-${d}`),children:n?(0,m.jsx)(k,{children:r}):r})}));V.displayName="Card";const X=Object.assign(V,{Img:O,Title:K,Subtitle:U,Body:k,Link:z,Text:Z,Header:D,Footer:T,ImgOverlay:H});var Y=l(28429),ee=l(92723),se=l(94453),le=l(26191),ie=l(16632),te=l(63749);const ae=()=>{const[e,s]=(0,i.useState)([]),[l,v]=(0,i.useState)([]),[u,x]=(0,i.useState)(!1),[f,p]=(0,i.useState)(!1),[h,g]=(0,i.useState)(!1),[j,N]=(0,i.useState)(""),[y,_]=(0,i.useState)(""),w=(0,Y.Zp)(),[C,I]=(0,i.useState)(null),[k,P]=(0,i.useState)(!1),[T,A]=(0,i.useState)(!1),[M,R]=(0,i.useState)(null),D=(0,a.A)("(max-width:320px),(max-width:360px),(max-width:375px),(max-width:400px),(max-width:430px)"),L=e=>{switch(e){case 1:return"text-danger";case 2:return"text-success";default:return"text-primary"}};(0,i.useEffect)((()=>{(async()=>{x(!0);let e=JSON.parse(sessionStorage.getItem("storeInit")),l=JSON.parse(sessionStorage.getItem("loginUserDetail"));const i=sessionStorage.getItem("registerEmail");N(null===e||void 0===e?void 0:e.ukey),_(null===e||void 0===e?void 0:e.DesignImageFolBackEnd);try{const d=await(0,c.Rj)(e,l,i);var t,a;"200"===(null===d||void 0===d?void 0:d.Status)&&(null!==d&&void 0!==d&&null!==(t=d.Data)&&void 0!==t&&t.rd?(s(null===d||void 0===d||null===(a=d.Data)||void 0===a?void 0:a.rd),x(!1)):x(!0))}catch(d){console.log(d),x(!1)}})()}),[]);const O=async e=>{p(!0),v([]);let s=JSON.parse(sessionStorage.getItem("storeInit")),l=JSON.parse(sessionStorage.getItem("loginUserDetail"));const i=sessionStorage.getItem("userEmail");try{const d=await(0,c.sn)(e,s,l,i);var t,a;if("200"===(null===d||void 0===d?void 0:d.Status))if(null!==d&&void 0!==d&&null!==(t=d.Data)&&void 0!==t&&t.rd1)v(null===d||void 0===d||null===(a=d.Data)||void 0===a?void 0:a.rd1),p(!1);else p(!0),v([])}catch(d){console.log(d)}},E=e=>{try{const s=(new TextEncoder).encode(e),l=ee.Ay.deflate(s,{to:"string"});return btoa(String.fromCharCode.apply(null,l))}catch(s){return console.error("Error compressing and encoding:",s),null}},H=async(l,i)=>{let t=JSON.parse(sessionStorage.getItem("storeInit")),a=JSON.parse(sessionStorage.getItem("loginUserDetail")),d="";"approve"===i?d=0:"reject"===i&&(d=2);const n={con:`{"id":"Store","mode":"SetOrderStatus","appuserid":"${sessionStorage.getItem("registerEmail")}"}`,f:"Postman",dp:`{"FrontEnd_RegNo":"${null===t||void 0===t?void 0:t.FrontEnd_RegNo}","Customerid":"${null===a||void 0===a?void 0:a.id}","orderno":"${null===l||void 0===l?void 0:l.orderno}","OrderStatusId":"${d}"}`},r=await(0,le.o)(n);let o=[];"200"===(null===r||void 0===r?void 0:r.Status)&&(I(!1),z(!1),null===e||void 0===e||e.map((e=>{var s,l;let i={...e};var t,a;(null===i||void 0===i?void 0:i.orderno)===(null===r||void 0===r||null===(s=r.Data)||void 0===s||null===(l=s.rd[0])||void 0===l?void 0:l.orderno)&&(i.OrderStatusName=null===r||void 0===r||null===(t=r.Data)||void 0===t||null===(a=t.rd[0])||void 0===a?void 0:a.OrderStatusName);o.push(i)})),s(o))},[B,z]=(0,i.useState)(!1);return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"sticky-header",children:(0,m.jsx)(te.A,{title:"Order History"})}),u?(0,m.jsx)(d.A,{sx:{display:"flex",justifyContent:"center",paddingTop:"10px"},children:(0,m.jsx)(n.A,{className:"loadingBarManage"})}):(0,m.jsx)("div",{className:"orderedItems user-select-none pb-4",children:(null===e||void 0===e?void 0:e.length)>0?null===e||void 0===e?void 0:e.map((e=>{return(0,m.jsxs)("div",{className:"border orderHistory p-1 px-0 my-4",children:[(0,m.jsxs)("div",{className:" d-flex w-100 justify-content-between align-items-center p-1 d_block",onClick:()=>(e=>{if(v([]),0===(null===e||void 0===e?void 0:e.TotalQuantity))return"";g(h===(null===e||void 0===e?void 0:e.id)?null:null===e||void 0===e?void 0:e.id),O(e)})(e),children:[(0,m.jsxs)("div",{className:"w_25_oh _w50_oh order_none",children:[(0,m.jsxs)("div",{className:"d-flex justify-content-start w-100 align-items-center py-2 d_block",children:[(0,m.jsxs)("div",{className:"text-secondary fw-bold fs-5 ps-3 pe-5 fs_Small_2",children:[null===e||void 0===e?void 0:e.OrderPrefix,null===e||void 0===e?void 0:e.orderno]}),(0,m.jsxs)("div",{className:`d-flex align-items-center  ${L(null===e||void 0===e?void 0:e.b2c_MasterManagement_ProgressStatusId)} fs-5 fs_small fs_Small_2 pad_Setup`,style:{textTransform:"uppercase"},children:[(0,m.jsx)("div",{className:"px-2",children:(0,m.jsx)(t.A,{sx:{fontSize:"10px"}})}),null===e||void 0===e?void 0:e.b2c_MasterManagement_ProgressStatusName]})]}),(0,m.jsxs)("div",{className:"py-2 text-secondary ps-3 ",children:["Date \xa0\xa0:\xa0\xa0"," ",(0,m.jsx)("span",{className:"text-danger",children:null===e||void 0===e?void 0:e.orderEntryDate})]}),(0,m.jsxs)("div",{className:"py-2 text-secondary ps-3",children:["items\xa0\xa0 : \xa0\xa0(",(0,m.jsx)("span",{className:"text-danger",children:null===e||void 0===e?void 0:e.TotalQuantity}),")"]})]}),(0,m.jsxs)("div",{className:"w-100 order_not_none",children:[(0,m.jsxs)("div",{className:"d-flex justify-content-start w-100 align-items-center py-2 d_block",children:[(0,m.jsxs)("div",{className:"text-secondary fw-bold  fs_Small_2 pad_xy_rh pad_start_oh",children:[null===e||void 0===e?void 0:e.OrderPrefix,null===e||void 0===e?void 0:e.orderno]}),(0,m.jsxs)("div",{className:`d-flex align-items-center  ${L(null===e||void 0===e?void 0:e.b2c_MasterManagement_ProgressStatusId)} fs_12 `,style:{textTransform:"uppercase"},children:[(0,m.jsx)("div",{className:"px-2",children:(0,m.jsx)(t.A,{sx:{fontSize:"10px"}})}),null===e||void 0===e?void 0:e.b2c_MasterManagement_ProgressStatusName]})]}),(0,m.jsxs)("div",{className:"py-2 text-secondary ps-3 ",children:["Date \xa0\xa0:\xa0\xa0"," ",(0,m.jsx)("span",{className:"text-danger",children:null===e||void 0===e?void 0:e.orderEntryDate})]}),(0,m.jsxs)("div",{className:"py-2 text-secondary ps-3",children:["items\xa0\xa0 : \xa0\xa0(",(0,m.jsx)("span",{className:"text-danger",children:null===e||void 0===e?void 0:e.TotalQuantity}),")"]}),(0,m.jsxs)("div",{className:"py-1 w-50 d-flex fs_price_oh _color fw-bold center_price px_change ps-4 ",children:[(0,m.jsx)("div",{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.Currencysymbol}})," ",(0,m.jsx)("div",{className:"px-1",children:(0,o.ej)(null===e||void 0===e?void 0:e.orderAmountwithvat)})]})]}),(0,m.jsxs)("div",{className:"py-1 w-50 d_flex_oh fs_price_oh _color fw-bold center_price px_change ps-4 order_none",children:[(0,m.jsx)("div",{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.Currencysymbol}})," ",(0,m.jsx)("div",{className:"px-1",children:(0,o.ej)(null===e||void 0===e?void 0:e.orderAmountwithvat)})]})]}),D&&(0,m.jsxs)("div",{className:"w-100 d-flex justify-content-between align-items-center py-2",style:{minHeight:"55px"},children:[(0,m.jsx)("div",{children:1===(null===e||void 0===e?void 0:e.IsPLW)?(0,m.jsxs)("div",{className:"d-flex align-items-center flex-row-reverse",children:[(0,m.jsx)("div",{className:"sidebar d-flex flex-column "+(k&&C===e.id?"open":""),children:(0,m.jsx)("div",{style:{padding:"2px"},children:B===(null===e||void 0===e?void 0:e.id)&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.A,{size:"small",label:"Approve",color:"success",onClick:()=>H(e,"approve")}),(0,m.jsx)(r.A,{size:"small",label:"Reject",sx:{backgroundColor:"black",color:"white","&:hover":{backgroundColor:"black",color:"white",cursor:"default"}},onClick:()=>H(e,"reject")})]})})}),(0,m.jsx)(se.A,{className:"_color2 p-0",onClick:()=>{return s=e.id,z(s),void z(s!==B&&s);var s}})]}):(0,m.jsx)("div",{children:"\xa0"})}),(0,m.jsx)("div",{className:"d-flex align-items-center justify-content-end",children:1===(null===e||void 0===e?void 0:e.IsPLW)&&(0,m.jsx)(r.A,{size:"small",className:(s=null===e||void 0===e?void 0:e.OrderStatusName,"approved"===(null===s||void 0===s?void 0:s.toLowerCase())?"bg-success text-white":"rejected"===(null===s||void 0===s?void 0:s.toLowerCase())?"bg-dark text-white":"_color3")+" fw-normal",label:null===e||void 0===e?void 0:e.OrderStatusName})}),(0,m.jsxs)("div",{className:"d-flex align-items-center text-break",style:{width:"18%"},children:[1===(null===e||void 0===e?void 0:e.IsPLW)?(0,m.jsx)("div",{className:"d-flex justify-content-end",children:(0,m.jsx)(ie.A,{size:"small",onClick:()=>{return s=null===e||void 0===e?void 0:e.id,A(!T),void R(s);var s}})}):"",1===(null===e||void 0===e?void 0:e.IsPLW)&&(0,m.jsx)("span",{className:"_colo2 ",style:{fontSize:"7px",lineHeight:"7px",height:"8px"},children:T&&(0,m.jsx)(m.Fragment,{children:M===(null===e||void 0===e?void 0:e.id)&&"Coming Soon..."})})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{style:{height:"10px",cursor:"pointer"},title:"info",className:"border-top"}),h===(null===e||void 0===e?void 0:e.id)?(0,m.jsx)(m.Fragment,{children:f?(0,m.jsx)(d.A,{sx:{display:"flex",justifyContent:"center",paddingTop:"10px"},children:(0,m.jsx)(n.A,{className:"loadingBarManage"})}):(0,m.jsxs)("div",{className:"p_4_oh",children:[(0,m.jsx)("div",{className:"d-flex flex-wrap align-items-center center_price_2 d_block",children:(0,m.jsx)(b,{children:(0,m.jsx)(S,{className:"g-4 pb-3",children:(null===l||void 0===l?void 0:l.length)>0&&l.map(((e,s)=>(0,m.jsx)($,{xs:12,sm:1===(null===l||void 0===l?void 0:l.length)?12:6,md:1===(null===l||void 0===l?void 0:l.length)?12:4,lg:1===(null===l||void 0===l?void 0:l.length)?12:3,xl:1===(null===l||void 0===l?void 0:l.length)?12:3,children:(0,m.jsxs)(X,{className:"h-100",onClick:()=>(e=>{var s,l;let i=JSON.parse(sessionStorage.getItem("loginUserDetail")),t={a:null===e||void 0===e?void 0:e.autocode,b:null===e||void 0===e?void 0:e.designno,m:null===i||void 0===i?void 0:i.MetalId,d:null===i||void 0===i?void 0:i.cmboDiaQCid,c:null===i||void 0===i?void 0:i.cmboCSQCid,f:{}},a=E(JSON.stringify(t));void 0===(null===e||void 0===e?void 0:e.TitleLine)?w(`/d/${null===e||void 0===e?void 0:e.designno}?p=${a}`):w(`/d/${(null===e||void 0===e?void 0:e.TitleLine)&&(null===e||void 0===e||null===(s=e.TitleLine)||void 0===s?void 0:s.replace(/\s+/g,"_"))}${null!==e&&void 0!==e&&e.TitleLine&&(null===e||void 0===e||null===(l=e.TitleLine)||void 0===l?void 0:l.length)>0?"_":""}${null===e||void 0===e?void 0:e.designno}?p=${a}`)})(e),children:[(0,m.jsx)(d.A,{className:"img_div_oh_MAPP",children:(0,m.jsx)(X.Img,{variant:"top",src:`${y}${null===e||void 0===e?void 0:e.imgrandomno}${btoa(null===e||void 0===e?void 0:e.autocode)}/Red_Thumb/${null===e||void 0===e?void 0:e.DefaultImageName}`,onError:c.IB,alt:"#designimage",className:"card-img-top h-100 card_img"})}),(0,m.jsxs)(X.Body,{children:[(0,m.jsxs)(X.Title,{children:[null===e||void 0===e?void 0:e.metaltypename," ",null===e||void 0===e?void 0:e.metalcolorname]}),(0,m.jsx)(X.Text,{children:null===e||void 0===e?void 0:e.designno}),(0,m.jsxs)(X.Text,{children:[(0,m.jsx)("span",{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.Currencysymbol}})," ",(0,o.ej)(null===e||void 0===e?void 0:e.TotalUnitCostWithDiscount)]})]})]})},s)))})})}),(0,m.jsxs)("div",{className:"pt-2 _end",children:[(0,m.jsxs)("div",{className:"d_flex_oh justify-content-between align-items-center fs-4 w-25 w25_oh_2 fs_small order_none",style:{width:"30% !important"},children:[(0,m.jsx)("div",{style:{width:"40%"},children:"Total :"}),(0,m.jsxs)("div",{style:{width:"60%"},className:"d-flex align-items-center",children:[(0,m.jsx)("div",{className:"pe-1",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.Currencysymbol}}),(0,o.ej)(null===e||void 0===e?void 0:e.orderAmountwithvat)]})]}),(0,m.jsx)("div",{className:"d_flex_oh justify-content-between align-items-center text-secondary fs_small order_not_none",children:(0,m.jsxs)("div",{className:"d-flex align-items-center w-100 pe-4",children:[(0,m.jsx)("div",{children:"Total :"}),(0,m.jsx)("div",{className:"pe-1",dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.Currencysymbol}}),(0,o.ej)(null===e||void 0===e?void 0:e.orderAmountwithvat)]})})]})]})}):""]})]},null===e||void 0===e?void 0:e.id);var s})):(0,m.jsx)("span",{className:"w-100 d-flex justify-content-center align-items-center fs-5",style:{height:"80vh"},children:"Data Not Present"})})]})}},63749:(e,s,l)=>{l.d(s,{A:()=>r});l(9950);var i=l(58322),t=l(9170),a=l(64432),d=l(28429),n=l(44414);const r=e=>{const s=(0,d.Zp)();(0,i.lZ)(t.qD);return(0,n.jsx)("div",{className:"header_Account_SMRM",children:(0,n.jsx)("div",{className:"container_movh",children:(0,n.jsxs)("div",{className:"w-100 p-1 d-flex align-items-center h-100 justify-content-between",style:{minHeight:"60px"},children:[(0,n.jsx)("div",{onClick:()=>s(-1),children:(0,n.jsx)(a.A,{sx:{color:"#7d7f85",paddingLeft:"5px",width:"40px"}})}),(0,n.jsx)("div",{className:"proptitle",children:null===e||void 0===e?void 0:e.title}),(0,n.jsx)("div",{children:"\xa0\xa0\xa0"})]})})})}},64432:(e,s,l)=>{var i=l(24994);s.A=void 0;var t=i(l(79526)),a=l(44414);s.A=(0,t.default)((0,a.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos")}}]);
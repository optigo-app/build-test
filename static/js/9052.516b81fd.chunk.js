"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[2761,9052],{59052:(e,o,s)=>{s.r(o),s.d(o,{default:()=>j});var i=s(9950),t=s(46639),n=s(8145),l=s(10226),a=s(28429),r=s(85923),c=s(2761),d=s(6001),m=s(40282),u=s(82658),g=s(58322),v=s(79043),x=s(5924),h=s(1653),p=s(41476),S=s(49211),N=s(44414);function j(){const[e,o]=(0,i.useState)(""),[s,j]=(0,i.useState)({}),[C,f]=(0,i.useState)(!1),k=(0,a.Zp)(),[I,T]=(0,i.useState)(""),[y,L]=(0,i.useState)(120),b=(0,g.lZ)(u.kN),w=(0,a.zy)(),F=null===w||void 0===w?void 0:w.search,E=F.replace("?LoginRedirect=",""),D=`${decodeURIComponent(E)}`,[M,O]=(0,g.L4)(u.Zz),[A,B]=(0,g.L4)(u.ED);(0,i.useEffect)((()=>{(async()=>{try{const e=sessionStorage.getItem("registerEmail");JSON.parse(sessionStorage.getItem("storeInit"));if(e){o(e);"true"==sessionStorage.getItem("LoginCodeEmail")&&(sessionStorage.setItem("LoginCodeEmail",!1),(0,d.v)(e).then((e=>{"1"===e.Data.Table1[0].stat?r.oR.success("OTP send Sucssessfully"):r.oR.error("OTP send Error")})).catch((e=>console.log(e))))}}catch(e){console.error("Error:",e)}})()}),[]),(0,i.useEffect)((()=>{if(y>0){const e=setInterval((()=>{L((o=>0===o?(clearInterval(e),0):o-1))}),1e3);return()=>clearInterval(e)}}),[y]);const R=async()=>{const o=S.A.get("visiterId");I.trim()?(f(!0),(0,m.I)(e,"",I,"otp_email_login","",o).then((o=>{var i,t;if(f(!1),1===(null===o||void 0===o||null===(i=o.Data)||void 0===i||null===(t=i.rd[0])||void 0===t?void 0:t.stat)){var n,l,a,r,c,d,m,u;const s=S.A.get("visiterId");sessionStorage.setItem("registerEmail",e),S.A.set("userLoginCookie",null===o||void 0===o||null===(n=o.Data)||void 0===n||null===(l=n.rd[0])||void 0===l?void 0:l.Token),b(!0),sessionStorage.setItem("LoginUser",!0),sessionStorage.setItem("loginUserDetail",JSON.stringify(o.Data.rd[0])),(0,v.y)(s).then((e=>{e&&(O(null===e||void 0===e?void 0:e.cartcount),B(null===e||void 0===e?void 0:e.wishcount))})).catch((e=>{e&&console.log("getCountApiErr",e)})),(0,x.E)(null===o||void 0===o||null===(a=o.Data)||void 0===a||null===(r=a.rd[0])||void 0===r?void 0:r.id).then((e=>{var o;if(null!==e&&void 0!==e&&null!==(o=e.Data)&&void 0!==o&&o.rd){var s;let o=JSON.stringify(null===e||void 0===e||null===(s=e.Data)||void 0===s?void 0:s.rd);sessionStorage.setItem("CurrencyCombo",o)}})).catch((e=>console.log(e))),(0,h.j)(null===o||void 0===o||null===(c=o.Data)||void 0===c||null===(d=c.rd[0])||void 0===d?void 0:d.id).then((e=>{var o;if(null!==e&&void 0!==e&&null!==(o=e.Data)&&void 0!==o&&o.rd){var s;let o=JSON.stringify(null===e||void 0===e||null===(s=e.Data)||void 0===s?void 0:s.rd);sessionStorage.setItem("MetalColorCombo",o)}})).catch((e=>console.log(e))),(0,p.W)(null===o||void 0===o||null===(m=o.Data)||void 0===m||null===(u=m.rd[0])||void 0===u?void 0:u.id).then((e=>{var o;if(null!==e&&void 0!==e&&null!==(o=e.Data)&&void 0!==o&&o.rd){var s;let o=JSON.stringify(null===e||void 0===e||null===(s=e.Data)||void 0===s?void 0:s.rd);sessionStorage.setItem("metalTypeCombo",o)}})).catch((e=>console.log(e))),k(D||"/")}else s.mobileNo="Code is Invalid"})).catch((e=>console.log(e)))):s.mobileNo="Password is required"};return(0,N.jsxs)("div",{className:"dt_loginWithEmailCodeMain",style:{backgroundColor:"rgba(66, 66, 66, 0.05)"},children:[(0,N.jsx)(r.N9,{}),C&&(0,N.jsx)("div",{className:"loader-overlay",children:(0,N.jsx)(t.A,{className:"loadingBarManage"})}),(0,N.jsxs)("div",{children:[(0,N.jsx)("div",{className:"dt_loginEmailMainDiv",children:(0,N.jsxs)("div",{className:"dt_loginEmailCodeSubDiv",children:[(0,N.jsx)("p",{style:{textAlign:"center",paddingBlock:"60px",fontSize:"25px",fontFamily:"PT Sans, sans-serif"},className:"AuthScreenMainTitle",children:"Login With Code"}),(0,N.jsxs)("p",{style:{textAlign:"center",marginTop:"-80px",fontSize:"15px",color:"#7d7f85",fontFamily:"FreightDispProBook-Regular,Times New Roman,serif"},className:"AuthScreenSubTitle",children:["Last step! To secure your account, enter the code we just sent to ",e,"."]}),(0,N.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"},children:[(0,N.jsx)(n.A,{autoFocus:!0,id:"outlined-basic",label:"Enter Code",variant:"outlined",className:"dt_LoginEmailCode_labgrowRegister",style:{margin:"15px"},onKeyDown:e=>{"Enter"===e.key&&R()},value:I,onChange:e=>((e,o,s)=>{const{value:i}=e.target;o(i),"mobileNo"===s&&(i.trim()?j((e=>({...e,mobileNo:""}))):j((e=>({...e,mobileNo:"Code is required"}))))})(e,T,"mobileNo"),error:!!s.mobileNo,helperText:s.mobileNo}),(0,N.jsx)("button",{className:"submitBtnForgot",onClick:R,children:"Login"}),(0,N.jsxs)("p",{style:{marginTop:"10px"},children:["Didn't get the code ? ",0===y?(0,N.jsx)("span",{style:{fontWeight:500,color:"blue",textDecoration:"underline",cursor:"pointer"},onClick:async()=>{L(120),(0,d.v)(e).then((e=>{"1"===e.Data.Table1[0].stat?(sessionStorage.setItem("LoginCodeEmail",!1),r.oR.success("OTP send Sucssessfully")):r.oR.error("OTP send Error")})).catch((e=>console.log(e)))},children:"Resend Code"}):(0,N.jsxs)("span",{children:["Resend in ",Math.floor(y/60).toString().padStart(2,"0"),":",(y%60).toString().padStart(2,"0")]})]}),(0,N.jsx)(l.A,{style:{marginTop:"10px",color:"gray",marginBottom:"40px"},onClick:()=>k("/LoginOption"),children:"CANCEL"})]})]})}),(0,N.jsx)(c.default,{})]})]})}},2761:(e,o,s)=>{s.r(o),s.d(o,{default:()=>d});var i=s(9950),t=s(58322),n=s(28429),l=s(53289),a=s(82658),r=s(49211),c=s(44414);function d(){(0,t.vc)(a.g8);const[e,o]=(0,i.useState)(),[s,d]=(0,i.useState)(),[m,u]=(0,i.useState)([]),[g,v]=(0,i.useState)(),[x,h]=(0,i.useState)(!1),[p,S]=(0,t.L4)(a.kN),[N,j]=(0,i.useState)(0),[C,f]=(0,i.useState)(),k=(0,n.Zp)();(0,i.useEffect)((()=>{var e,s,i,t;const n=null!==(e=JSON.parse(null===(s=sessionStorage)||void 0===s?void 0:s.getItem("storeInit")))&&void 0!==e?e:"";o(n);const l=null!==(i=JSON.parse(null===(t=sessionStorage)||void 0===t?void 0:t.getItem("CompanyInfoData")))&&void 0!==i?i:"";if(l){d(l);const e=null===l||void 0===l?void 0:l.SocialLinkObj;u(e)}}),[]);return(0,c.jsx)("div",{className:"dt_footer_main",children:(0,c.jsxs)("div",{className:"daimondFooterMain",children:[(0,c.jsx)("div",{className:"footerNewslater",style:{paddingTop:"30px",paddingInline:"20%",marginTop:"50px"},children:(0,c.jsxs)("div",{className:"subScriMain",children:[(0,c.jsx)("p",{className:"subScriMainTitle",children:"LATEST COLLECTIONS & OFFERS"}),(0,c.jsxs)("div",{style:{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingBottom:"20px"},children:[(0,c.jsx)("input",{type:"text",className:"footerInputBox",placeholder:"Your email here",value:g,onChange:e=>{v(e.target.value)},required:!0}),x?(0,c.jsx)("span",{style:{color:"white"},className:"elv_error_message",children:"Loading..."}):(0,c.jsx)(c.Fragment,{children:C&&(0,c.jsx)("span",{className:"elv_error_message",style:{color:"Already Subscribed."===C?"#FF0000":"#04AF70",marginTop:"0px",display:"block"},children:C})}),(0,c.jsx)("button",{className:"FooterSubBtn",onClick:()=>{h(!0);const e=null===JSON||void 0===JSON?void 0:JSON.parse(sessionStorage.getItem("storeInit")),o=null===e||void 0===e?void 0:e.newslatter;if(o&&g){fetch(`${o}${g}`).then((e=>e.text())).then((e=>{f(e),h(!1)})).catch((e=>f(e)))}},children:"SUBSCRIBE"})]})]})}),(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"FooterLinkMain",children:[(0,c.jsxs)("div",{className:"FooterLinkMainBox",children:[(0,c.jsx)("p",{className:"footerMoteText",children:"ABOUT DIAMONDTIME"}),(0,c.jsxs)("p",{className:"FoooterText",children:["We are a contemporary diamond and gold jewellery brand selling exquisite pieces for the woman of today.",(0,c.jsx)("br",{}),(0,c.jsxs)("span",{onClick:()=>k("/aboutUs"),className:"dt_footerLermore",children:[" ","Learn More"]})]})]}),(0,c.jsxs)("div",{className:"FooterLinkMainBox",children:[(0,c.jsx)("p",{className:"footerMoteText",children:"QUICK LINKS"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{k("/faq"),window.scroll(0,0)},children:"FAQs"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{window.open(`${(0,l.DA)()}/html/size_guide_diamondtine.pdf`,"_blank")},children:"Size Guide"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{k("/MaterialCore"),window.scroll(0,0)},children:"Material & Care"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{k("/term&condition"),window.scroll(0,0)},children:"Terms & Conditions"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{k("/PrivacyPolicy"),window.scroll(0,0)},children:"Privacy Policy"})]}),(0,c.jsxs)("div",{className:"FooterLinkMainBox",children:[(0,c.jsx)("p",{className:"footerMoteText",children:"CUSTOMER SERVICE"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{k("/ShipingReturn"),window.scroll(0,0)},children:"Shipping & Returns"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{k("/Exchange"),window.scroll(0,0)},children:"Exchange & Buyback"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{k("/Location"),window.scroll(0,0)},children:"Location"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{k("/contactUs")},children:"Contact us"})]}),1==p?(0,c.jsxs)("div",{className:"FooterLinkMainBox",children:[(0,c.jsx)("p",{className:"footerMoteText",children:"MY ACCOUNT"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{k("/account"),window.scroll(0,0)},children:"Account"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>{k("/"),S(!1),r.A.remove("userLoginCookie"),window.location.reload(),sessionStorage.setItem("LoginUser",!1),sessionStorage.removeItem("storeInit"),sessionStorage.removeItem("loginUserDetail"),sessionStorage.removeItem("remarks"),sessionStorage.removeItem("selectedAddressId"),sessionStorage.removeItem("orderNumber"),sessionStorage.removeItem("registerEmail"),sessionStorage.removeItem("UploadLogicalPath"),sessionStorage.removeItem("remarks"),sessionStorage.removeItem("registerMobile"),sessionStorage.removeItem("allproductlist"),sessionStorage.clear()},children:"Sign Out"})]}):(0,c.jsxs)("div",{className:"FooterLinkMainBox",children:[(0,c.jsx)("p",{className:"footerMoteText",children:"MY ACCOUNT"}),(0,c.jsx)("p",{className:"FoooterTextLink",onClick:()=>k("/LoginOption"),children:"Sign In"})]})]})}),(0,c.jsx)("div",{className:"footerBottom",children:(0,c.jsx)("p",{className:"FooterBottomText",children:"Copyright \xa9 2024 Diamondtine. All Rights Reserved."})})]})})}}}]);
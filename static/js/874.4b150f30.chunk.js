"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[874],{30874:(e,o,t)=>{t.r(o),t.d(o,{default:()=>m});var i=t(9950),l=t(46639),s=t(8145),n=t(10226),a=t(28429),r=t(85923),c=t(6873),d=t(44414);function m(){const[e,o]=(0,i.useState)(""),[t,m]=(0,i.useState)({}),[u,b]=(0,i.useState)(!1),[x,g]=(0,i.useState)(!1),[h,p]=(0,i.useState)(!1),N=(0,a.Zp)(),y=(0,a.zy)(),f=null===y||void 0===y?void 0:y.search,j=`/LoginWithMobileCode/${f}`,T=`/register/${f}`,v=`/LoginOption/${f}`,S=async()=>{x||(e.trim()?/^\d{10}$/.test(e.trim())?(g(!0),b(!0),(0,c.$)(e).then((o=>{b(!1),"1"===o.Data.Table1[0].stat&&"1"===o.Data.Table1[0].islead?r.oR.error("You are not a customer, contact to admin"):"1"===o.Data.Table1[0].stat&&"0"===o.Data.Table1[0].islead?(r.oR.success("OTP send Sucssessfully"),N(j,{state:{mobileNo:e}}),sessionStorage.setItem("registerMobile",e)):(N(T,{state:{mobileNo:e}}),sessionStorage.setItem("registerMobile",e))})).catch((e=>console.log(e)))):m({mobileNo:"Enter Valid mobile number"}):m({mobileNo:"Mobile No. is required"}))};return(0,d.jsxs)("div",{className:"Hoq_continuMobile",children:[(0,d.jsx)(r.N9,{style:{zIndex:999999}}),u&&(0,d.jsx)("div",{className:"loader-overlay",children:(0,d.jsx)(l.A,{className:"loadingBarManage"})}),(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"smling-forgot-main",children:[(0,d.jsx)("p",{style:{textAlign:"center",paddingBlock:"60px",marginTop:"0px",fontSize:"40px",color:"#7d7f85"},className:"AuthScreenMainTitle",children:"Continue With Mobile"}),(0,d.jsx)("p",{style:{textAlign:"center",marginTop:"-60px",fontSize:"15px",color:"#7d7f85"},className:"AuthScreenSubTitle",children:"We'll check if you have an account, and help create one if you don't."}),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,d.jsx)(s.A,{autoFocus:!0,id:"outlined-basic",label:"Enter Mobile No",variant:"outlined",className:"smr_loginmobileBox",onKeyDown:e=>{"Enter"===e.key&&S()},style:{margin:"15px"},value:e,onChange:e=>((e,o,t)=>{const{value:i}=e.target,l=i.trim().replace(/\s/g,"");o(l),"mobileNo"===t&&(l?/^\d{10}$/.test(l)?m((e=>({...e,mobileNo:""}))):m((e=>({...e,mobileNo:"Enter Valid mobile number"}))):m((e=>({...e,mobileNo:"Mobile No. is required"}))))})(e,o,"mobileNo"),error:!!t.mobileNo,helperText:t.mobileNo}),(0,d.jsx)("button",{className:"submitBtnForgot",onClick:S,children:"SUBMIT"}),(0,d.jsx)(n.A,{style:{marginTop:"10px",color:"gray"},onClick:()=>N(v),children:"CANCEL"})]})]})}),(0,d.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingBlock:"30px"},children:(0,d.jsx)("p",{style:{margin:"0px",fontWeight:500,width:"100px",color:"white",cursor:"pointer"},onClick:()=>window.scrollTo(0,0),children:"BACK TO TOP"})})]})}}}]);
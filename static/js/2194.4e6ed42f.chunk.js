"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[2194],{12194:(e,s,r)=>{r.r(s),r.d(s,{default:()=>g});var t=r(9950),o=r(46639),n=r(8145),a=r(2046),i=r(25333),l=r(10226),d=r(12714),c=r(68179),u=r(9210),p=r.n(u),m=r(28429),w=r(20357),x=r(44414);function g(){const[e,s]=(0,t.useState)(""),[r,u]=(0,t.useState)(""),[g,f]=(0,t.useState)(!1),[h,P]=(0,t.useState)(!1),[j,A]=(0,t.useState)(""),[y,C]=(0,t.useState)({}),[v,S]=(0,t.useState)(""),b=(0,m.Zp)(),[k,D]=(0,t.useState)(!1);(0,t.useEffect)((()=>{const e=sessionStorage.getItem("userEmailForPdList");e&&A(e)}),[]);const N=e=>{"password"===e?f(!g):"confirmPassword"===e&&P(!h)};const T=e=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(e),_=async s=>{s.preventDefault();const t={};e.trim()||(S("Password is required"),t.password="Password is required"),r.trim()?r!==e&&(t.confirmPassword="Passwords do not match"):t.confirmPassword="Confirm Password is required";const o=new URLSearchParams(window.location.search).get("userid");if(0===Object.keys(t).length){const s=function(e){return p().SHA1(e).toString(p().enc.Hex)}(e);D(!0),(0,w.r)(o,s).then((e=>{1===e.Data.rd[0].stat?b("/ContinueWithEmail"):(D(!1),alert(e.Data.rd[0].stat_msg))})).catch((e=>console.log(e)))}else C(t)};return(0,x.jsxs)("div",{className:"Hoq_forgotMain",children:[k&&(0,x.jsx)("div",{className:"loader-overlay",children:(0,x.jsx)(o.A,{className:"loadingBarManage"})}),(0,x.jsx)("div",{children:(0,x.jsxs)("div",{className:"smr_forgotSubDiv",children:[(0,x.jsx)("p",{style:{textAlign:"center",padding:"60px",margin:"0px",fontSize:"40px",color:"#7d7f85"},className:"AuthScreenMainTitle",children:"Forgot Your Password"}),(0,x.jsx)("p",{style:{textAlign:"center",marginTop:"-60px",fontSize:"15px",color:"#7d7f85"},className:"AuthScreenSubTitle"}),(0,x.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,x.jsx)(n.A,{autoFocus:!0,id:"outlined-password-input",label:"Password",type:g?"text":"password",autoComplete:"current-password",className:"smr_forgotBox",style:{margin:"15px"},value:e,onChange:e=>{const{value:r}=e.target;s(r),T(r)?S(""):S("Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number.")},onKeyDown:e=>{"Enter"===e.key&&_()},error:!!v,helperText:v,InputProps:{endAdornment:(0,x.jsx)(a.A,{position:"end",children:(0,x.jsx)(i.A,{"aria-label":"toggle password visibility",onClick:()=>N("password"),onMouseDown:e=>{e.preventDefault()},edge:"end",children:g?(0,x.jsx)(d.A,{}):(0,x.jsx)(c.A,{})})})}}),(0,x.jsx)(n.A,{id:"outlined-confirm-password-input",label:"Confirm Password",type:h?"text":"password",autoComplete:"current-password",className:"smr_forgotBox",style:{margin:"15px"},value:r,onChange:e=>((e,s,r)=>{const{value:t}=e.target;s(t),"confirmPassword"===r&&(t.trim()?C((e=>({...e,confirmPassword:""}))):C((e=>({...e,confirmPassword:"Password is required"}))))})(e,u,"confirmPassword"),error:!!y.confirmPassword,helperText:y.confirmPassword,InputProps:{endAdornment:(0,x.jsx)(a.A,{position:"end",children:(0,x.jsx)(i.A,{"aria-label":"toggle password visibility",onClick:()=>N("confirmPassword"),onMouseDown:e=>{e.preventDefault()},edge:"end",children:h?(0,x.jsx)(d.A,{}):(0,x.jsx)(c.A,{})})})}}),(0,x.jsx)("button",{className:"createBtnRegister",onClick:_,children:"Change Password"}),(0,x.jsx)(l.A,{style:{marginTop:"10px",color:"gray"},onClick:()=>b("/"),children:"CANCEL"})]})]})}),(0,x.jsx)("div",{style:{display:"flex",justifyContent:"center",paddingBlock:"30px"},children:(0,x.jsx)("p",{style:{margin:"0px",fontWeight:500,width:"100px",color:"white",cursor:"pointer"},onClick:()=>window.scrollTo(0,0),children:"BACK TO TOP"})})]})}}}]);
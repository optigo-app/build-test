"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[1115],{1115:(e,t,d)=>{d.r(t),d.d(t,{default:()=>A});var l=d(9950),a=d(19223),i=d(84910),n=d(46986),o=d(45546),s=d(78317),r=d(10226),c=d(46639),v=d(40428),m=d(99779),u=d(96319),x=d(59051),h=d.n(x),b=d(81831),_=d(11728),p=d(95359),j=d(4695),N=d.n(j),f=d(4159),g=d.n(f),M=d(24806),y=d(63749),w=d(18726),D=d(44414);const A=()=>{var e,t,d,x,j,f,A,S,I,Y,F,C,E,$,T,R,O,B,k,L,P,H,q,V,W,U,J,G,Q;const[Z,z]=(0,l.useState)([]),[K,X]=(0,l.useState)(""),[ee,te]=(0,l.useState)([]),[de,le]=(0,l.useState)(!1),[ae,ie]=(0,l.useState)(!1),[ne,oe]=(0,l.useState)(""),[se,re]=(0,l.useState)(null),[ce,ve]=(0,l.useState)(null),[me,ue]=(0,l.useState)(null),[xe,he]=(0,l.useState)(0),[be,_e]=(0,l.useState)(0),[pe,je]=(0,l.useState)(0),[Ne,fe]=(0,l.useState)(0),[ge,Me]=(0,l.useState)(0),[ye,we]=(0,l.useState)(0),[De,Ae]=(0,l.useState)(0),[Se,Ie]=(0,l.useState)(0),[Ye,Fe]=(0,l.useState)(),[Ce,Ee]=(0,l.useState)(),[$e,Te]=(0,l.useState)(),[Re,Oe]=(0,l.useState)(),Be=(0,l.useRef)(null),ke=(0,l.useRef)(null);(0,l.useEffect)((()=>{const e=JSON.parse(sessionStorage.getItem("loginUserDetail"));oe(null===e||void 0===e?void 0:e.customercode),Le()}),[]);const Le=async()=>{le(!0);let e=JSON.parse(sessionStorage.getItem("storeInit")),t=JSON.parse(sessionStorage.getItem("loginUserDetail"));const d=sessionStorage.getItem("userEmail");try{var l;const r=await(0,M.H)(e,t,d);var a,i,n;if(X(null===r||void 0===r?void 0:r.CurrencySymbol),"200"===(null===r||void 0===r||null===(l=r.response2)||void 0===l?void 0:l.Status))if((null===r||void 0===r||null===(a=r.response2)||void 0===a||null===(i=a.Data)||void 0===i||null===(n=i.rd)||void 0===n?void 0:n.length)>0){var o,s;const e=null===r||void 0===r||null===(o=r.response2)||void 0===o||null===(s=o.Data)||void 0===s?void 0:s.rd;null===e||void 0===e||e.sort(((e,t)=>new Date(null===e||void 0===e?void 0:e.EntryDate)-new Date(null===t||void 0===t?void 0:t.EntryDate))),z(e),Pe(e),te(e),le(!1)}else z(["Data Not Present"]),te(["Data Not Present"]),le(!1)}catch(r){console.log(r)}},Pe=e=>{let t={credit_metalgold:0,credit_diamondwt:0,credit_totalamount:0,credit_totalcurrency:0,debit_metalgold:0,debit_diamondwt:0,debit_totalamount:0,debit_totalcurrency:0};null===e||void 0===e||e.forEach((e=>{1===(null===e||void 0===e?void 0:e.IsDebit)?(t.debit_metalgold+=null===e||void 0===e?void 0:e.metalctw,t.debit_diamondwt+=null===e||void 0===e?void 0:e.diamondctw,t.debit_totalamount+=null===e||void 0===e?void 0:e.Amount,t.debit_totalcurrency+=null===e||void 0===e?void 0:e.Currency):(t.credit_metalgold+=null===e||void 0===e?void 0:e.metalctw,t.credit_diamondwt+=null===e||void 0===e?void 0:e.diamondctw,t.credit_totalamount+=null===e||void 0===e?void 0:e.Amount,t.credit_totalcurrency+=null===e||void 0===e?void 0:e.Currency)})),ve(t)},He=()=>{g()().startOf("month"),g()().endOf("month");Fe(null),Ee(null),re(null);document.querySelectorAll(".daybtn").forEach((e=>{parseInt(null===e||void 0===e?void 0:e.textContent);e.classList.remove("selected")}))},qe=e=>{let t={credit_metalgold:0,credit_diamondwt:0,credit_totalamount:0,credit_totalcurrency:0,debit_metalgold:0,debit_diamondwt:0,debit_totalamount:0,debit_totalcurrency:0};null===e||void 0===e||e.forEach((e=>{1===(null===e||void 0===e?void 0:e.IsDebit)?(t.debit_metalgold+=null===e||void 0===e?void 0:e.metalctw,t.debit_diamondwt+=null===e||void 0===e?void 0:e.diamondctw,t.debit_totalamount+=null===e||void 0===e?void 0:e.Amount,t.debit_totalcurrency+=null===e||void 0===e?void 0:e.Currency):(t.credit_metalgold+=null===e||void 0===e?void 0:e.metalctw,t.credit_diamondwt+=null===e||void 0===e?void 0:e.diamondctw,t.credit_totalamount+=null===e||void 0===e?void 0:e.Amount,t.credit_totalcurrency+=null===e||void 0===e?void 0:e.Currency)}));let d=0;t.credit_metalgold-t.debit_metalgold>0&&(d=t.credit_metalgold-t.debit_metalgold),we(d);let l=0;t.credit_metalgold-t.credit_metalgold<0&&(l=t.credit_metalgold-t.debit_metalgold),_e(l);let a=0;t.credit_diamondwt-t.debit_diamondwt>0&&(a=t.credit_diamondwt-t.debit_diamondwt),Me(a);let i=0;t.credit_diamondwt-t.debit_diamondwt<0&&(i=t.credit_diamondwt-t.debit_diamondwt),he(i);let n=0;t.credit_totalamount-t.debit_totalamount>0&&(n=t.credit_totalamount-t.debit_totalamount),Ae(n);let o=0;t.credit_totalamount-t.debit_totalamount<0&&(o=t.credit_totalamount-t.debit_totalamount),je(o);let s=0;t.credit_totalcurrency-t.debit_totalcurrency>0&&(s=t.credit_totalcurrency-t.debit_totalcurrency),Ie(s);let r=0;t.credit_totalcurrency-t.debit_totalcurrency<0&&(r=t.credit_totalcurrency-t.debit_totalcurrency),fe(r),ue(t)},Ve=(e,t,d,l)=>{let a=`${null===t||void 0===t?void 0:t.$y}-${(0,v.Ds)(null===t||void 0===t?void 0:t.$M)}-${null===t||void 0===t?void 0:t.$D}`,i=`${null===d||void 0===d?void 0:d.$y}-${(0,v.Ds)(null===d||void 0===d?void 0:d.$M)}-${null===d||void 0===d?void 0:d.$D}`,n=[],o=0;if(null===Z||void 0===Z||Z.forEach(((e,t)=>{var d;let l="";l=null===e||void 0===e||null===(d=e.EntryDate)||void 0===d?void 0:d.split("-");l[0],l[1],l[2];l=`${l[2]}-${l[1]}-${l[0]}`;let s={dateFrom:!1,dateTo:!1};if(void 0!==l)if(null!==a&&void 0!==a&&a.includes(void 0)||null!==i&&void 0!==i&&i.includes(void 0))null===a||void 0===a||!a.includes(void 0)||null!==i&&void 0!==i&&i.includes(void 0)?null!==a&&void 0!==a&&a.includes(void 0)||null===i||void 0===i||!i.includes(void 0)?null!==a&&void 0!==a&&a.includes(void 0)&&null!==i&&void 0!==i&&i.includes(void 0)&&(s.dateTo=!0,s.dateFrom=!0):(o+=1,s.dateTo=!0,N().fire({title:"Error !",text:"Enter Valid Date To",icon:"error",confirmButtonText:"ok"}),We()):(o+=1,s.dateFrom=!0,N().fire({title:"Error !",text:"Enter Valid Date From",icon:"error",confirmButtonText:"ok"}),We());else{let e=h()(a),t=h()(i),d=h()(l);if(h()(a).isSameOrBefore(i)){(d.isBetween(e,t,null,"[]")||d.isSame(e)||d.isSame(t))&&(s.dateTo=!0,s.dateFrom=!0)}else setTimeout((()=>{re(null),te(Z),je(0),he(0),_e(0),Ae(0),Me(0),we(0),Ie(0),fe(0),Fe(null),Ee(null),Le();document.querySelectorAll(".daybtn").forEach((e=>{parseInt(e.textContent);e.classList.remove("selected")}))}),0)}!0===s.dateFrom&&!0===s.dateTo&&n.push(e)})),0===o){te(n);const e=new Date(a);e.setDate(e.getDate()-1);const t=Z.filter((t=>new Date(t.EntryDate)<=e));te(n),Pe(n),qe(t)}else{te(Z);const e=new Date(a);e.setDate(e.getDate()-1);const t=Z.filter((t=>new Date(t.EntryDate)<=e));Pe(n),qe(t)}},We=()=>{Fe(null),Ee(null)};return(0,l.useEffect)((()=>{var e,t;let d=h()(Ye),l=h()(Ce),a=null===d||void 0===d||null===(e=d._i)||void 0===e?void 0:e.$d,i=null===l||void 0===l||null===(t=l._i)||void 0===t?void 0:t.$d;const n=new Date(a),o=new Date(i),s=h()(n).format("DD MMM YYYY"),r=h()(o).format("DD MMM YYYY");Te(s),Oe(r)}),[Ye,Ce]),(0,D.jsxs)("div",{className:"ledger_Account_SMRM",children:[(0,D.jsx)("div",{className:"sticky-header",children:(0,D.jsx)(y.A,{title:"Ledger"})}),(0,D.jsx)("div",{children:(0,D.jsxs)("div",{className:"",children:["Invalid date"!==h()($e).format("DD MMM YYYY")&&(0,D.jsxs)("div",{className:"p-2 ps-4 border-bottom fs_Al_mq",style:{letterSpacing:"1px"},children:["Account Detail for \xa0 ",(0,D.jsx)("b",{className:"fs_Al_mq",children:ne}),"\xa0 Period of \xa0",(0,D.jsx)("b",{className:"fs_Al_mq",children:"Invalid date"===h()($e).format("DD MMM YYYY")?"":h()($e).format("DD MMM YYYY")}),"\xa0 to \xa0",(0,D.jsx)("b",{className:"fs_Al_mq",children:"Invalid date"===h()(Re).format("DD MMM YYYY")?"":h()(Re).format("DD MMM YYYY")}),"\xa0"]}),1===(null===ee||void 0===ee?void 0:ee.length)&&"Data Not Present"===ee[0]?"":(0,D.jsx)("div",{className:"d-flex justify-content-between align-items-center flex_col_Al mt-2",children:(0,D.jsxs)(i.A,{children:[(0,D.jsx)(n.A,{expandIcon:(0,D.jsx)(w.A,{}),children:"More Filters"}),(0,D.jsx)(o.A,{children:(0,D.jsxs)("div",{className:"fs_al2 p-2 d-flex justify-content-start  align-items-center flex-wrap mb-0 w-100",children:[(0,D.jsx)("div",{className:"mb_acc",children:(0,D.jsxs)(s.A,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},className:"",children:[(0,D.jsxs)(s.A,{sx:{display:"flex",alignItems:"center",paddingRight:"15px",paddingBottom:"35px"},className:"QuotePadSec date_margin_acc",children:[(0,D.jsx)("p",{className:"fs-6 mb-0 w_30_acc pad_right_Acc",style:{paddingRight:"8px"},children:"Date : "}),(0,D.jsx)(s.A,{className:"w_70_acc",children:(0,D.jsx)(b.$,{dateAdapter:p.R,children:(0,D.jsx)(_.l,{label:"Date From",value:Ye,ref:Be,onChange:e=>{null===e?Fe(null):e.$y<=2099&&e.$y>=1900||e.$y<1e3||isNaN(e.$y)?Fe(e):(N().fire({title:"Error !",text:"Enter Valid Date From",icon:"error",confirmButtonText:"ok"}),He())},format:"DD MM YYYY",placeholder:"DD MM YYYY",className:"quotationFilterDates w_all_acc",name:"date",id:"startdate"})})})]}),(0,D.jsxs)(s.A,{sx:{display:"flex",alignItems:"center",paddingBottom:"35px",paddingRight:"15px"},className:"QuotePadSec date_margin_acc",children:[(0,D.jsx)("p",{className:"fs-6 mb-0 w_30_acc pad_right_Acc",style:{paddingRight:"8px"},children:"To : "}),(0,D.jsx)(s.A,{className:"w_70_acc",children:(0,D.jsx)(b.$,{dateAdapter:p.R,children:(0,D.jsx)(_.l,{label:"Date To",value:Ce,ref:ke,onChange:e=>{null===e?Ee(null):e.$y<=2099&&e.$y>=1900||e.$y<1e3||isNaN(e.$y)?(Ee(e),Oe(e)):(N().fire({title:"Error !",text:"Enter Valid Date To",icon:"error",confirmButtonText:"ok"}),He())},format:"DD MM YYYY",placeholder:"DD MM YYYY",className:"quotationFilterDates w_all_acc",name:"date",id:"enddate"})})})]})]})}),(0,D.jsx)("div",{children:(0,D.jsx)(s.A,{sx:{paddingBottom:"35px",paddingRight:"15px"},children:(0,D.jsx)(r.A,{variant:"contained",className:"muiSmilingRocksBtn",title:"search here",sx:{padding:"7px 10px",minWidth:"max-content",background:"#7d7f85"},onClick:e=>Ve(e,Ye,Ce,se),children:(0,D.jsx)(a.A,{sx:{color:"#fff !important",cursor:"pointer"}})})})}),(0,D.jsx)(s.A,{sx:{paddingBottom:"35px",paddingRight:"15px"},children:(0,D.jsx)(r.A,{variant:"contained",className:"muiSmilingRocksBtn",sx:{background:"#7d7f85",display:"flex",alignItems:"center",marginBottom:0,padding:"6px 0"},onClick:()=>(re(null),te(Z),je(0),he(0),_e(0),Ae(0),Me(0),we(0),Ie(0),fe(0),Le(),Fe(null),void Ee(null)),children:"All"})}),(0,D.jsx)(s.A,{sx:{paddingBottom:"35px",paddingRight:"15px"},className:"pad_r_acc center_acc w_all_acc",children:(0,D.jsxs)("div",{className:"d-flex pt-2",children:[(0,D.jsx)("button",{className:"ms-2 mx-1 btn border p-2 py-0 daybtn mb-2",title:"previous",onClick:()=>(()=>{const e=se;let t=null,d=null,l=Ye;30===e?(t=Ye.subtract(1,"month").startOf("month"),d=Ye.subtract(1,"month").endOf("month"),l=l.subtract(1,"month")):60===e?(t=Ye.subtract(2,"month").startOf("month"),d=Ye.subtract(1,"month").endOf("month"),l=l.subtract(2,"month")):90===e&&(t=Ye.subtract(3,"month").startOf("month"),d=Ye.subtract(1,"month").endOf("month"),l=l.subtract(3,"month")),Fe(t),Ee(d),Fe(l),Ve("",t,d,e)})(),children:"<"}),null===(e=[30,60,90])||void 0===e?void 0:e.map((e=>(0,D.jsx)("button",{className:"mx-1 btn  p-2 py-0 daybtn mb-2 btnHover",title:`${e} days`,style:{border:"1px solid "+(se===e?"#989898":"#e8e8e8")},onClick:()=>(e=>{re(e);let t=null,d=null;const l=g()().startOf("month"),a=g()().endOf("month");30===e?(t=l,d=a):60===e?(t=l.subtract(1,"month"),d=a):90===e&&(t=l.subtract(2,"month"),d=a);Fe(t),Ee(d),Ve("",t,d,e),document.querySelectorAll(".daybtn").forEach((t=>{parseInt(t.textContent)===e?t.classList.add("selected"):t.classList.remove("selected")}))})(e),children:e},e))),(0,D.jsx)("button",{className:"ms-2 mx-1 btn border p-2 py-0 daybtn me_3 mb-2",title:"next",onClick:()=>(()=>{const e=se;let t=null,d=null,l=Ce;30===e?(t=Ye.add(1,"month").startOf("month"),d=Ye.add(1,"month").endOf("month"),l=l.add(1,"month").endOf("month")):60===e?(t=Ye.add(2,"month").startOf("month"),d=Ye.add(2,"month").endOf("month"),l=l.add(2,"month").endOf("month")):90===e&&(t=Ye.add(3,"month").startOf("month"),d=Ye.add(3,"month").endOf("month"),l=l.add(3,"month").endOf("month")),Fe(t),Ee(d),Ee(l),Ve("",t,d,e)})(),children:">"})]})}),(0,D.jsx)("div",{className:"mx-1 ms-4 mb-2"})]})})]})}),(0,D.jsx)("div",{className:"text-secondary fs_al d_flex_Acc justify-content-between align-items-start p-2 my-3 mt-0 balance_none",children:(0,D.jsxs)("div",{className:"d-flex justify-content-start align-items-start flex-wrap",children:[(0,D.jsxs)("div",{className:"px-4 px_2_al d-flex align-items-center mb-2 ps-0 w_all_acc",children:[(0,D.jsx)("span",{className:"w_40_acc",children:"Balance Gold :\xa0"})," ",(0,D.jsxs)("span",{className:"bal_Amt_ac  w_60_acc end_acc",children:["NaN"===(null===(t=(null===ce||void 0===ce?void 0:ce.debit_metalgold)+Math.abs(be)-((null===ce||void 0===ce?void 0:ce.credit_metalgold)+Math.abs(ye)))||void 0===t?void 0:t.toFixed(3))?"0.00":null===(d=(null===ce||void 0===ce?void 0:ce.debit_metalgold)+Math.abs(be)-((null===ce||void 0===ce?void 0:ce.credit_metalgold)+Math.abs(ye)))||void 0===d?void 0:d.toFixed(3),(null===ce||void 0===ce?void 0:ce.debit_metalgold)+Math.abs(be)-((null===ce||void 0===ce?void 0:ce.credit_metalgold)+Math.abs(ye))>0?"Dr":" Cr"]})]}),(0,D.jsxs)("div",{className:"px-4 px_2_al d-flex align-items-center mb-2 w_all_acc",children:[(0,D.jsx)("span",{className:"w_40_acc",children:"Balance Diam. :\xa0"})," ",(0,D.jsxs)("span",{className:"bal_Amt_ac w_60_acc end_acc",children:["NaN"===(null===(x=Math.abs(xe)+(null===ce||void 0===ce?void 0:ce.debit_diamondwt)-(Math.abs(ge)+(null===ce||void 0===ce?void 0:ce.credit_diamondwt)))||void 0===x?void 0:x.toFixed(3))?"0.00":null===(j=Math.abs(xe)+(null===ce||void 0===ce?void 0:ce.debit_diamondwt)-(Math.abs(ge)+(null===ce||void 0===ce?void 0:ce.credit_diamondwt)))||void 0===j?void 0:j.toFixed(3),Math.abs(xe)+(null===ce||void 0===ce?void 0:ce.debit_diamondwt)-(Math.abs(ge)+(null===ce||void 0===ce?void 0:ce.credit_diamondwt))>0?"Dr":" Cr"]})]}),(0,D.jsxs)("div",{className:"px-4 px_2_al d-flex align-items-center mb-2 w_all_acc",children:[(0,D.jsx)("span",{className:"w_40_acc",children:"Balance Amount :\xa0"})," ",(0,D.jsxs)("span",{className:"bal_Amt_ac w_60_acc end_acc",children:[(0,D.jsx)("span",{dangerouslySetInnerHTML:{__html:K}}),"\xa0","NaN"===(0,v.ej)(Math.abs(Ne)+(null===ce||void 0===ce?void 0:ce.debit_totalcurrency)-(Math.abs(Se)+(null===ce||void 0===ce?void 0:ce.credit_totalcurrency)))?"0.00":(0,v.ej)(Math.abs(Ne)+(null===ce||void 0===ce?void 0:ce.debit_totalcurrency)-(Math.abs(Se)+(null===ce||void 0===ce?void 0:ce.credit_totalcurrency))),"\xa0",Math.abs(Ne)+(null===ce||void 0===ce?void 0:ce.debit_totalcurrency)-(Math.abs(Se)+(null===ce||void 0===ce?void 0:ce.credit_totalcurrency))?"Dr":" Cr"]})]})]})}),(0,D.jsx)("div",{className:"text-secondary fs_al d_flex_Acc justify-content-between align-items-start p-2 my-3 mt-0 balance_not_none",children:(0,D.jsxs)("div",{className:"d-flex justify-content-start align-items-start flex-wrap",children:[(0,D.jsxs)("div",{className:"px-4 px_2_al d-flex flex-column align-items-center mb-2 p-1 w-100",children:[(0,D.jsx)("div",{className:"w-100",children:"Balance Gold :\xa0"})," ",(0,D.jsxs)("div",{className:"bal_Amt_ac  w-100 end_acc",children:["NaN"===(null===(f=(null===ce||void 0===ce?void 0:ce.debit_metalgold)+Math.abs(be)-((null===ce||void 0===ce?void 0:ce.credit_metalgold)+Math.abs(ye)))||void 0===f?void 0:f.toFixed(3))?"0.00":null===(A=(null===ce||void 0===ce?void 0:ce.debit_metalgold)+Math.abs(be)-((null===ce||void 0===ce?void 0:ce.credit_metalgold)+Math.abs(ye)))||void 0===A?void 0:A.toFixed(3),(null===ce||void 0===ce?void 0:ce.debit_metalgold)+Math.abs(be)-((null===ce||void 0===ce?void 0:ce.credit_metalgold)+Math.abs(ye))>0?"Dr":" Cr"]})]}),(0,D.jsxs)("div",{className:"px-4 px_2_al d-flex flex-column align-items-center mb-2 w-100",children:[(0,D.jsx)("div",{className:"w-100",children:"Balance Diam. :\xa0"}),(0,D.jsxs)("div",{className:"bal_Amt_ac w-100 end_acc",children:["NaN"===(null===(S=Math.abs(xe)+(null===ce||void 0===ce?void 0:ce.debit_diamondwt)-(Math.abs(ge)+(null===ce||void 0===ce?void 0:ce.credit_diamondwt)))||void 0===S?void 0:S.toFixed(3))?"0.00":null===(I=Math.abs(xe)+(null===ce||void 0===ce?void 0:ce.debit_diamondwt)-(Math.abs(ge)+(null===ce||void 0===ce?void 0:ce.credit_diamondwt)))||void 0===I?void 0:I.toFixed(3),Math.abs(xe)+(null===ce||void 0===ce?void 0:ce.debit_diamondwt)-(Math.abs(ge)+(null===ce||void 0===ce?void 0:ce.credit_diamondwt))>0?"Dr":" Cr"]})]}),(0,D.jsxs)("div",{className:"px-4 px_2_al d-flex flex-column align-items-center mb-2 w-100",children:[(0,D.jsx)("div",{className:"w-100",children:"Balance Amount :\xa0"}),(0,D.jsxs)("div",{className:"bal_Amt_ac w-100 end_acc",children:[(0,D.jsx)("span",{dangerouslySetInnerHTML:{__html:K}}),"\xa0","NaN"===(0,v.ej)(Math.abs(Ne)+(null===ce||void 0===ce?void 0:ce.debit_totalcurrency)-(Math.abs(Se)+(null===ce||void 0===ce?void 0:ce.credit_totalcurrency)))?"0.00":(0,v.ej)(Math.abs(Ne)+(null===ce||void 0===ce?void 0:ce.debit_totalcurrency)-(Math.abs(Se)+(null===ce||void 0===ce?void 0:ce.credit_totalcurrency))),"\xa0",Math.abs(Ne)+(null===ce||void 0===ce?void 0:ce.debit_totalcurrency)-(Math.abs(Se)+(null===ce||void 0===ce?void 0:ce.credit_totalcurrency))?"Dr":" Cr"]})]})]})}),de?(0,D.jsx)(s.A,{sx:{display:"flex",justifyContent:"center",paddingTop:"10px",paddingBottom:"30px"},children:(0,D.jsx)(c.A,{className:"loadingBarManage"})}):(0,D.jsx)("div",{className:" overflow-auto",style:{margin:"10px",marginBottom:"20%"},children:(0,D.jsx)(D.Fragment,{children:1===(null===ee||void 0===ee?void 0:ee.length)&&"Data Not Present"===ee[0]?(0,D.jsx)("div",{className:"data_not_present_mapp",children:"Data Not Present"}):(0,D.jsxs)("table",{className:"w-100",style:{minWidth:"1200px"},children:[(0,D.jsxs)("thead",{className:"w-100 border",children:[(0,D.jsxs)("tr",{className:"w-100 border-bottom fs_td",children:[(0,D.jsx)("td",{className:"fw-bold text-center border-end",colSpan:9,children:"DEBIT"}),(0,D.jsx)("td",{className:"fw-bold text-center",colSpan:9,children:"CREDIT"})]}),(0,D.jsxs)("tr",{className:"w-100 border-bottom-0 fw-bold fs_td",children:[(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"DATE"}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"PARTICULAR"}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"VOUCHER"}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"METAL"}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"DIAM."}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"CURRENCY"}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"VERIFIED"}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"DATE"}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"PARTICULAR"}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"VOUCHER"}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"METAL"}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"DIAM."}),(0,D.jsx)("td",{className:"border-end p-1 text-center ",children:"CURRENCY"}),(0,D.jsx)("td",{className:"p-1 text-center",children:"VERIFIED"})]})]}),(0,D.jsxs)("tbody",{className:"fs_td",children:[0===Math.abs(pe)&&0===Math.abs(Ne)&&0===Math.abs(xe)&&0===Math.abs(be)&&0===Math.abs(De)&&0===Math.abs(Se)&&0===Math.abs(ye)&&0===Math.abs(ge)?"":(0,D.jsxs)("tr",{className:"border fw-bold",children:[(0,D.jsx)("td",{className:"border-end p-1 text-center"}),(0,D.jsx)("td",{className:"border-end p-1  ps-1",align:"center",children:"Opening"}),(0,D.jsx)("td",{className:"border-end p-1 text-start ps-1"}),(0,D.jsx)("td",{className:"border-end p-1 text-end ps-1",children:"0.000"===(null===(Y=Math.abs(be))||void 0===Y?void 0:Y.toFixed(3))?"":null===(F=Math.abs(be))||void 0===F?void 0:F.toFixed(3)}),(0,D.jsx)("td",{className:"border-end p-1 text-end ps-1",children:"0.000"===(null===(C=Math.abs(xe))||void 0===C?void 0:C.toFixed(3))?"":null===(E=Math.abs(xe))||void 0===E?void 0:E.toFixed(3)}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1",style:{minWidth:"100px"},children:0===Math.abs(Ne)?"":(0,v.ej)(Math.abs(Ne))}),(0,D.jsx)("td",{className:"border-end p-1 text-center"}),(0,D.jsx)("td",{className:"border-end p-1 text-center"}),(0,D.jsx)("td",{className:"border-end p-1 text-start ps-1",align:"center",children:"Opening"}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1"}),(0,D.jsx)("td",{className:"border-end p-1 text-end ps-1",children:"0.000"===(null===($=Math.abs(ye))||void 0===$?void 0:$.toFixed(3))?"":null===(T=Math.abs(ye))||void 0===T?void 0:T.toFixed(3)}),(0,D.jsx)("td",{className:"border-end p-1 text-end ps-1",children:"0.000"===(null===(R=Math.abs(ge))||void 0===R?void 0:R.toFixed(3))?"":null===(O=Math.abs(ge))||void 0===O?void 0:O.toFixed(3)}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1",style:{minWidth:"100px"},children:0===Math.abs(Se)?"":(0,v.ej)(Math.abs(Se))}),(0,D.jsx)("td",{className:" p-1 text-center"})]}),(null===ee||void 0===ee?void 0:ee.length)>0?null===ee||void 0===ee?void 0:ee.map((e=>{let t=null,d=null;return 0===e.IsVerified?t=(0,D.jsx)(m.A,{sx:{color:"green"}}):1===e.IsVerified&&(d=(0,D.jsx)(u.A,{sx:{color:"red"}})),(0,D.jsx)(D.Fragment,{children:"Data Not Present"===e?(0,D.jsx)("tr",{children:(0,D.jsx)("td",{colSpan:14,align:"center",children:"Data Not Present"})}):(0,D.jsxs)("tr",{className:"border",children:[(0,D.jsx)("td",{className:"border-end p-1 text-center",children:0===(null===e||void 0===e?void 0:e.IsDebit)?"":null===e||void 0===e?void 0:e.EntryDate}),(0,D.jsx)("td",{className:"border-end p-1 text-start ps-1",children:0===(null===e||void 0===e?void 0:e.IsDebit)?"":null===e||void 0===e?void 0:e.particular}),(0,D.jsx)("td",{className:"border-end p-1 text-start ps-1 ",style:{cursor:"pointer"},children:0===(null===e||void 0===e?void 0:e.IsDebit)?"":""===(null===e||void 0===e?void 0:e.referenceno)?null===e||void 0===e?void 0:e.voucherno:null===e||void 0===e?void 0:e.referenceno}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1",children:0===(null===e||void 0===e?void 0:e.IsDebit)||0===(null===e||void 0===e?void 0:e.metalctw)?"":null===e||void 0===e?void 0:e.metalctw}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1",children:0===(null===e||void 0===e?void 0:e.IsDebit)||0===(null===e||void 0===e?void 0:e.diamondctw)?"":null===e||void 0===e?void 0:e.diamondctw}),(0,D.jsxs)("td",{className:"border-end p-1 text-end pe-1",style:{minWidth:"100px"},children:[" ",0!==(null===e||void 0===e?void 0:e.IsDebit)&&(0,D.jsx)("span",{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.CurrSymbol}})," ",0===(null===e||void 0===e?void 0:e.IsDebit)?"":` ${"NaN"===(0,v.ej)(null===e||void 0===e?void 0:e.Currency)?"":(0,v.ej)(null===e||void 0===e?void 0:e.Currency)} `]}),(0,D.jsx)("td",{className:"border-end p-1 text-center"}),(0,D.jsx)("td",{className:"border-end p-1 text-center",children:0===(null===e||void 0===e?void 0:e.IsDebit)?null===e||void 0===e?void 0:e.EntryDate:""}),(0,D.jsx)("td",{className:"border-end p-1 text-start ps-1",children:0===(null===e||void 0===e?void 0:e.IsDebit)?null===e||void 0===e?void 0:e.particular:""}),(0,D.jsx)("td",{className:"border-end p-1 text-start ps-1 ",style:{cursor:"pointer"},children:0===(null===e||void 0===e?void 0:e.IsDebit)?""===(null===e||void 0===e?void 0:e.referenceno)?null===e||void 0===e?void 0:e.voucherno:null===e||void 0===e?void 0:e.referenceno:""}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1",children:0===(null===e||void 0===e?void 0:e.IsDebit)?0===(null===e||void 0===e?void 0:e.metalctw)?"":null===e||void 0===e?void 0:e.metalctw:""}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1",children:0===(null===e||void 0===e?void 0:e.IsDebit)?0===(null===e||void 0===e?void 0:e.diamondctw)?"":null===e||void 0===e?void 0:e.diamondctw:""}),(0,D.jsxs)("td",{className:"border-end p-1 text-end pe-1",style:{minWidth:"100px"},children:[" ",0===(null===e||void 0===e?void 0:e.IsDebit)&&(0,D.jsx)("span",{dangerouslySetInnerHTML:{__html:null===e||void 0===e?void 0:e.CurrSymbol}})," ",0===(null===e||void 0===e?void 0:e.IsDebit)?` ${0===(null===e||void 0===e?void 0:e.Currency)?"":(0,v.ej)(null===e||void 0===e?void 0:e.Currency)}`:""]}),(0,D.jsxs)("td",{className:" p-1 text-center",children:[t,d]})]},null===e||void 0===e?void 0:e.id)})})):(0,D.jsx)("tr",{children:(0,D.jsx)("td",{align:"center",colSpan:18,children:"Data No Present"})}),(0,D.jsxs)("tr",{className:"border fw-bold",children:[(0,D.jsx)("td",{className:"border-end p-1 text-center"}),(0,D.jsx)("td",{className:"border-end p-1 text-start ps-1"}),(0,D.jsx)("td",{className:"border-end p-1 text-start ps-1"}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1",children:"0.000"===(null===(B=Math.abs(be)+(null===ce||void 0===ce?void 0:ce.debit_metalgold))||void 0===B?void 0:B.toFixed(3))?"":"NaN"===(null===(k=Math.abs(be)+(null===ce||void 0===ce?void 0:ce.debit_metalgold))||void 0===k?void 0:k.toFixed(3))?"0.00":null===(L=Math.abs(be)+(null===ce||void 0===ce?void 0:ce.debit_metalgold))||void 0===L?void 0:L.toFixed(3)}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1",children:"0.000"===(null===(P=Math.abs(xe)+(null===ce||void 0===ce?void 0:ce.debit_diamondwt))||void 0===P?void 0:P.toFixed(3))?"":"NaN"===(null===(H=Math.abs(xe)+(null===ce||void 0===ce?void 0:ce.debit_diamondwt))||void 0===H?void 0:H.toFixed(3))?"0.00":null===(q=Math.abs(xe)+(null===ce||void 0===ce?void 0:ce.debit_diamondwt))||void 0===q?void 0:q.toFixed(3)}),(0,D.jsxs)("td",{className:"border-end p-1 text-end pe-1",style:{minWidth:"100px"},children:["0.00"===(0,v.ej)(Math.abs(Ne)+(null===ce||void 0===ce?void 0:ce.debit_totalcurrency))?"":(0,D.jsx)("span",{dangerouslySetInnerHTML:{__html:K}}),"\xa0","0.00"===(0,v.ej)(Math.abs(Ne)+(null===ce||void 0===ce?void 0:ce.debit_totalcurrency))?"":"NaN"===(0,v.ej)(Math.abs(Ne)+(null===ce||void 0===ce?void 0:ce.debit_totalcurrency))?"0.00":(0,v.ej)(Math.abs(Ne)+(null===ce||void 0===ce?void 0:ce.debit_totalcurrency))]}),(0,D.jsx)("td",{className:"border-end p-1 text-center"}),(0,D.jsx)("td",{className:"border-end p-1 text-center"}),(0,D.jsx)("td",{className:"border-end p-1 text-start ps-1"}),(0,D.jsx)("td",{className:"border-end p-1 text-start ps-1"}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1",children:"0.000"===(null===(V=Math.abs(ye)+(null===ce||void 0===ce?void 0:ce.credit_metalgold))||void 0===V?void 0:V.toFixed(3))?"":"NaN"===(null===(W=Math.abs(ye)+(null===ce||void 0===ce?void 0:ce.credit_metalgold))||void 0===W?void 0:W.toFixed(3))?"0.00":null===(U=Math.abs(ye)+(null===ce||void 0===ce?void 0:ce.credit_metalgold))||void 0===U?void 0:U.toFixed(3)}),(0,D.jsx)("td",{className:"border-end p-1 text-end pe-1",children:"0.000"===(null===(J=Math.abs(ge)+(null===ce||void 0===ce?void 0:ce.credit_diamondwt))||void 0===J?void 0:J.toFixed(3))?"":"NaN"===(null===(G=Math.abs(ge)+(null===ce||void 0===ce?void 0:ce.credit_diamondwt))||void 0===G?void 0:G.toFixed(3))?"0.00":null===(Q=Math.abs(ge)+(null===ce||void 0===ce?void 0:ce.credit_diamondwt))||void 0===Q?void 0:Q.toFixed(3)}),(0,D.jsxs)("td",{className:"border-end p-1 text-end pe-1",style:{minWidth:"100px"},children:["0.00"===(0,v.ej)(Math.abs(Se)+(null===ce||void 0===ce?void 0:ce.credit_totalcurrency))?"":(0,D.jsx)("span",{dangerouslySetInnerHTML:{__html:K}}),"\xa0","0.00"===(0,v.ej)(Math.abs(Se)+(null===ce||void 0===ce?void 0:ce.credit_totalcurrency))?"":"NaN"===(0,v.ej)(Math.abs(Se)+(null===ce||void 0===ce?void 0:ce.credit_totalcurrency))?"0.00":(0,v.ej)(Math.abs(Se)+(null===ce||void 0===ce?void 0:ce.credit_totalcurrency))]}),(0,D.jsx)("td",{className:" p-1 text-center"})]})]})]})})})]})})]})}},63749:(e,t,d)=>{d.d(t,{A:()=>s});d(9950);var l=d(58322),a=d(9170),i=d(64432),n=d(28429),o=d(44414);const s=e=>{const t=(0,n.Zp)();(0,l.lZ)(a.qD);return(0,o.jsx)("div",{className:"header_Account_SMRM",children:(0,o.jsx)("div",{className:"container_movh",children:(0,o.jsxs)("div",{className:"w-100 p-1 d-flex align-items-center h-100 justify-content-between",style:{minHeight:"60px"},children:[(0,o.jsx)("div",{onClick:()=>t(-1),children:(0,o.jsx)(i.A,{sx:{color:"#7d7f85",paddingLeft:"5px",width:"40px"}})}),(0,o.jsx)("div",{className:"proptitle",children:null===e||void 0===e?void 0:e.title}),(0,o.jsx)("div",{children:"\xa0\xa0\xa0"})]})})})}},64432:(e,t,d)=>{var l=d(24994);t.A=void 0;var a=l(d(79526)),i=d(44414);t.A=(0,a.default)((0,i.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos")}}]);
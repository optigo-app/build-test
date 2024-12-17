"use strict";(self.webpackChunkecomm_web=self.webpackChunkecomm_web||[]).push([[2222],{42222:(e,s,l)=>{l.r(s),l.d(s,{default:()=>q});var a=l(9950),d=l(28429),n=l(96583),o=l(40033),t=l(74745),r=l(28170),i=l(8145),h=l(44414);function c(e){let{open:s,handleClose:l,handleCancel:a,handleInputChange:d,handleSubmit:c,formData:x,errors:m,isEditMode:u}=e;return(0,h.jsx)(n.A,{open:s,onClose:l,sx:{zIndex:9999999},children:(0,h.jsxs)("form",{onSubmit:c,children:[(0,h.jsx)(o.A,{className:"hoq_dialogTitle",children:u?"Edit Shipping Address":"Add Shipping Address"}),(0,h.jsx)(t.A,{}),(0,h.jsxs)(r.A,{children:[(0,h.jsx)(i.A,{label:"First Name",value:x.firstName,onChange:e=>d(e,"firstName"),error:!!m.firstName,helperText:m.firstName,fullWidth:!0,className:"hoq_addressTextFields"}),(0,h.jsx)(i.A,{label:"Last Name",value:x.lastName,onChange:e=>d(e,"lastName"),error:!!m.lastName,helperText:m.lastName,fullWidth:!0,className:"hoq_addressTextFields"}),(0,h.jsx)(i.A,{label:"Mobile No.",value:x.mobileNo,onChange:e=>d(e,"mobileNo"),error:!!m.mobileNo,helperText:m.mobileNo,fullWidth:!0,className:"hoq_addressTextFields"}),(0,h.jsx)(i.A,{label:"Address",value:x.address,onChange:e=>d(e,"address"),error:!!m.address,helperText:m.address,fullWidth:!0,className:"hoq_addressTextFields"}),(0,h.jsx)(i.A,{label:"Country",value:x.country,onChange:e=>d(e,"country"),error:!!m.country,helperText:m.country,fullWidth:!0,className:"hoq_addressTextFields"}),(0,h.jsx)(i.A,{label:"State",value:x.state,onChange:e=>d(e,"state"),error:!!m.state,helperText:m.state,fullWidth:!0,className:"hoq_addressTextFields"}),(0,h.jsx)(i.A,{label:"City",value:x.city,onChange:e=>d(e,"city"),error:!!m.city,helperText:m.city,fullWidth:!0,className:"hoq_addressTextFields"}),(0,h.jsx)(i.A,{label:"ZIP Code",value:x.zipCode,onChange:e=>d(e,"zipCode"),error:!!m.zipCode,helperText:m.zipCode,fullWidth:!0,className:"hoq_addressTextFields"})]}),(0,h.jsx)("div",{className:"hoqMo_cardActionBtn",children:(0,h.jsxs)("div",{className:"hoqMo_AddressModalBtnGroup",children:[(0,h.jsx)("button",{type:"submit",className:"hoqMo_AddNewAddrModalbtn",children:u?"Save Changes":"Add Address"}),(0,h.jsx)("button",{type:"button",className:"hoqMo_Cancelbtn",onClick:a,children:"Cancel"})]})})]})})}var x=l(60899),m=l(48089),u=l(50704),p=l(82053),C=l(10226),j=l(50327);const A=e=>{let{address:s,index:l,handleOpen:d,handleDeleteClick:n,handleDefaultSelection:o}=e;const{shippingfirstname:t,shippinglastname:r,street:i,city:c,state:A,country:N,zip:b,shippingmobile:_,isdefault:v}=s,[y,g]=(0,a.useState)(!1);return(0,h.jsx)(x.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,h.jsxs)(m.A,{onMouseEnter:()=>{g(!0)},onMouseLeave:()=>{g(!1)},square:!0,className:1==v?"hoq_ActiveAddrCard":"hoq_AddrCard",style:{height:"100%",display:"flex",flexDirection:"column"},children:[(0,h.jsxs)(u.A,{className:"hoqMo_addrcardContent",onClick:()=>o(s),style:{flex:"1 0 auto"},children:[(0,h.jsxs)(p.A,{className:"hoq_addrTypoTitle",variant:"h5",component:"h2",children:[t," ",r]}),(0,h.jsx)(p.A,{className:"hoq_addrTypo",children:i}),(0,h.jsxs)(p.A,{className:"hoq_addrTypo",children:[c,"-",b,", ",A]}),(0,h.jsxs)(p.A,{className:"hoq_addrTypo",children:["Phone : ",_]}),(0,h.jsx)("button",{type:"button",className:1==v?"hoq_defualt_addrSelected":"hoq_defualt_addrSelectedHide",children:"Selected"})]}),(0,h.jsxs)("div",{className:"hoq_editDeleteBtngroup",children:[(0,h.jsx)(C.A,{type:"button",color:"primary",onClick:()=>d(null===s||void 0===s?void 0:s.id),children:(0,h.jsx)(j.$Sw,{className:"hoq_editIcon"})}),(0,h.jsx)(C.A,{type:"button",color:"secondary",onClick:()=>n(null===s||void 0===s?void 0:s.id),children:(0,h.jsx)(j.b6i,{className:"hoq_DeleteIcon"})})]})]})})};var N=l(6493),b=l(79739);function _(e){let{openDelete:s,handleDeleteClose:l,handleDelete:a}=e;return(0,h.jsxs)(n.A,{open:s,onClose:l,children:[(0,h.jsx)(o.A,{children:"Delete Address"}),(0,h.jsx)(r.A,{children:(0,h.jsx)(N.A,{children:"Are you sure you want to delete this address?"})}),(0,h.jsxs)(b.A,{children:[(0,h.jsx)(C.A,{onClick:l,color:"secondary",sx:{color:"black"},children:"Cancel"}),(0,h.jsx)(C.A,{className:"btn_delete_hoq",onClick:a,sx:{color:"white",background:"#c20000","&:hover":{backgroundColor:"#c20000"}},children:"Delete"})]})]})}var v=l(21671),y=l(82917);const g=()=>{const e=new Array(4).fill(0);return(0,h.jsx)(x.Ay,{container:!0,spacing:2,className:"smrMo_addCardSkeltonMainBox",children:e.map(((e,s)=>(0,h.jsx)(x.Ay,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,h.jsx)(m.A,{className:"smrMo_addCardSkelton",children:(0,h.jsx)(y.A,{className:"smrMo_addCardSkelton",variant:"rectangular",width:"100%",height:200,animation:"wave"})})},s)))})};var f=l(25495);const q=()=>{const{addressData:e,open:s,openDelete:l,formData:n,errors:o,isEditMode:t,isLoading:r,handleOpen:i,handleClose:m,handleCancel:u,handleInputChange:p,handleSubmit:C,handleDelete:j,handleDeleteClick:N,handleDeleteClose:b,handleDefaultSelection:y,proceedToOrder:q}=(0,v.U)(),D=(0,d.Zp)();return(0,h.jsxs)("div",{className:"hoqMo_DeliverMainDiv",children:[(0,h.jsxs)("p",{className:"SmiCartListTitle",style:{padding:" 25px 15px ",margin:"25px ",boxShadow:"none",cursor:"pointer"},children:[(0,h.jsx)(f.NEn,{style:{height:"25px",width:"25px",marginRight:"10px"},onClick:()=>D(-1)}),"Select delivery address"]}),(0,h.jsx)("div",{className:"hoqMo_secondMaindivAdd",children:(0,h.jsxs)("div",{className:"hoqMo_addMainDiv",children:[r?(0,h.jsx)(g,{}):(0,h.jsx)("div",{className:"hoqMo_getAddrMainDiv",children:(0,h.jsx)(x.Ay,{container:!0,spacing:2,children:null===e||void 0===e?void 0:e.map(((e,s)=>(0,h.jsx)(a.Fragment,{children:(0,h.jsx)(A,{name:e.name,address:e,index:s,handleOpen:i,handleDeleteClick:N,handleDefaultSelection:y},e.id)},e.id)))})}),(0,h.jsx)(c,{open:s,handleClose:m,handleCancel:u,formData:n,handleInputChange:p,handleSubmit:C,errors:o,isEditMode:t}),(0,h.jsx)(_,{openDelete:l,handleDeleteClose:b,handleDelete:()=>j()})]})}),(0,h.jsxs)("div",{className:"hoqMo_AddressBtnGroup",children:[(0,h.jsx)("button",{fullWidth:!0,className:"hoqMo_AddNewAddrbtn",onClick:()=>i(null),children:"Add New Address"}),(0,h.jsx)("button",{fullWidth:!0,className:"hoqMo_ContinueOrderbtn",onClick:()=>q(D),children:"Continue"})]})]})}}}]);
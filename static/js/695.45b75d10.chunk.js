"use strict";(self.webpackChunkgarimas_application_10=self.webpackChunkgarimas_application_10||[]).push([[695],{1695:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var s=a(885),i=a(2791),r=a(9085),n=a(1413),l=a(4925),o=a(4569),c=["data","headers","params"],d=a.n(o)().create({headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTNmOTI0NTNjODViYzEyNjU4ZjNiZSIsInVzZXJuYW1lIjoiSnVkZ2VfQ3JvbmluIiwiaWF0IjoxNjcxNjk3MTcxfQ.hbZLKSsS6Mdj1ndhAf4rm_5we4iWYvKY1VPSo51sQRM","Content-Type":"application/json"}});function u(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=a.data,i=void 0===s?{}:s,r=a.headers,o=void 0===r?{}:r,u=a.params,p=void 0===u?{}:u,m=(0,l.Z)(a,c);return d((0,n.Z)({url:t,data:i,method:e,params:p,headers:o},m))}d.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var p=function(e,t){return u("put",e,t)},m={USER_SIGN_UP_PUT:"".concat("https://z0f3xz2nwk.execute-api.us-west-2.amazonaws.com/default/","userSignUp")},x=a(1475),h=a(184),f=["children","className","leftIcon","rightIcon","shape","size","variant","color"],v=function(e){var t=e.children,a=e.className,s=void 0===a?"":a,i=e.leftIcon,r=e.rightIcon,o=(e.shape,e.size,e.variant,e.color,(0,l.Z)(e,f));return(0,h.jsxs)("button",(0,n.Z)((0,n.Z)({className:"".concat(s)},o),{},{children:[!!i&&i,t,!!r&&r]}))},g=["className","src","alt"],y=function(e){var t=e.className,a=e.src,s=void 0===a?"defaultNoData.png":a,i=e.alt,r=void 0===i?"testImg":i,o=(0,l.Z)(e,g);return(0,h.jsx)("img",(0,n.Z)((0,n.Z)({className:t,src:s,alt:r},o),{},{loading:"lazy"}))},j=function(e){var t=e.errors,a=void 0===t?[]:t,s=e.className,i=void 0===s?"":s;return(null===a||void 0===a?void 0:a.length)>0&&(0,h.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(i),children:a.join(", ")})},w=["wrapClassName","className","name","placeholder","type","children","errors","label","prefix","suffix","onChange","shape","size","variant","color"],b=i.forwardRef((function(e,t){var a=e.wrapClassName,s=void 0===a?"":a,i=e.className,r=void 0===i?"":i,o=e.name,c=void 0===o?"":o,d=e.placeholder,u=void 0===d?"":d,p=e.type,m=void 0===p?"text":p,x=(e.children,e.errors),f=void 0===x?[]:x,v=e.label,g=void 0===v?"":v,y=e.prefix,b=e.suffix,N=e.onChange,Z=(e.shape,e.size,e.variant,e.color,(0,l.Z)(e,w));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"".concat(s," \n               \n               \n              "),children:[!!g&&g,!!y&&y,(0,h.jsx)("input",(0,n.Z)({ref:t,className:"".concat(r," bg-transparent border-0"),type:m,name:c,onChange:function(e){var t;N&&N(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:u},Z)),!!b&&b]}),!!f&&(0,h.jsx)(j,{errors:f})]})})),N=["children","className","size","as"],Z={txtPoppinsLightItalic1946:"font-light font-poppins italic",txtInterMedium1577:"font-inter font-medium",txtPoppinsRegular1229:"font-normal font-poppins",txtInterRegular1182:"font-inter font-normal",txtPoppinsMedium30:"font-medium font-poppins",txtPoppinsRegular1639:"font-normal font-poppins",txtInterRegular138:"font-inter font-normal"},C=function(e){var t=e.children,a=e.className,s=void 0===a?"":a,i=e.size,r=e.as,o=(0,l.Z)(e,N),c=r||"p";return(0,h.jsx)(c,(0,n.Z)((0,n.Z)({className:"text-left ".concat(s," ").concat(i&&Z[i])},o),{},{children:t}))},I=function(e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:e.className,children:[(0,h.jsx)("div",{className:"bg-gray-50_01 h-[23px] md:ml-[0] ml-[306px] mr-[458px] w-[44%]"}),(0,h.jsxs)("div",{className:"flex flex-col gap-2 items-center justify-start mb-[13px] md:ml-[0] ml-[311px] mr-[419px] w-auto md:w-full",children:[(0,h.jsx)("div",{className:"flex flex-col items-start justify-start py-[37.89px] w-auto md:w-full",children:(0,h.jsxs)("div",{className:"flex flex-col gap-[38px] items-center justify-start w-full",children:[(0,h.jsx)(C,{className:"text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-full",size:"txtPoppinsMedium30",children:null===e||void 0===e?void 0:e.mottotext}),(0,h.jsxs)("div",{className:"flex flex-col items-center justify-start",children:[(0,h.jsx)(C,{className:"mt-[17px] text-[16.39px] text-gray-900 w-full",size:"txtPoppinsRegular1639",children:null===e||void 0===e?void 0:e.descriptiontext}),(0,h.jsx)(C,{className:"mt-[17px] text-[16.39px] text-gray-900 w-full",size:"txtPoppinsRegular1639",children:null===e||void 0===e?void 0:e.descriptiononetext}),(0,h.jsx)(C,{className:"mt-[17px] text-[16.39px] text-gray-900 w-full",size:"txtPoppinsRegular1639",children:null===e||void 0===e?void 0:e.descriptiontwotext})]})]})}),(0,h.jsxs)("div",{className:"flex flex-col gap-[5.91px] items-start justify-start w-auto",children:[(0,h.jsxs)("div",{className:"flex flex-row items-center justify-evenly w-full",children:[(0,h.jsx)("div",{className:"flex sm:flex-1 flex-col items-center justify-start w-[62%] sm:w-full",children:(0,h.jsx)(b,{name:"input",placeholder:"Email",className:"font-poppins md:h-auto p-0 placeholder:text-gray-600 sm:h-auto sm:pr-5 text-base text-gray-600 text-left tracking-[0.20px] w-full",wrapClassName:"bg-white-A700 pl-5 pr-[35px] py-2 rounded-[16px] w-full",onChange:null===e||void 0===e?void 0:e.handleChange,errors:null===e||void 0===e?void 0:e.errors,value:null===e||void 0===e?void 0:e.input})}),(0,h.jsx)("div",{className:"flex flex-col items-start justify-start p-2.5 w-auto",children:(0,h.jsx)(v,{className:"common-pointer bg-orange-200 cursor-pointer font-bold font-poppins h-[35px] py-1.5 rounded-[17px] text-base text-black-900_01 text-center tracking-[0.20px] w-[109px]",onClick:null===e||void 0===e?void 0:e.onClick,children:null===e||void 0===e?void 0:e.signupbutton})})]}),(0,h.jsx)("div",{className:"flex flex-col items-center justify-start",children:(0,h.jsx)(C,{className:"mt-[17px] text-[16.39px] text-gray-900 w-full",size:"txtPoppinsRegular1639",children:null===e||void 0===e?void 0:e.whatsnext})})]})]})]})})};I.defaultProps={mottotext:"\ud83c\udf1f Introducing Utoopia: A new way of Dating based on compatibility with a touch of south east asia\ud83c\udf1f",descriptiontext:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("span",{children:[(0,h.jsxs)("ul",{style:{listStyleType:"disc",marginTop:10},children:[(0,h.jsx)("b",{children:"\u201cThe Greatest human desire is to be desired\u201d. "}),(0,h.jsx)("br",{}),"We all want to feel connected and have fulfilling relationships and positive dating experience. However, ",(0,h.jsx)("b",{children:"Are you tired of aimlessly swipping in today\u2019s online dating apps?"})," 40% of users are saying compatibility is missing in current dating apps and the problem is widespread. At Utoopia, we believe that human compatibility is Colorful\ud83c\udf08. Its more than just shared hobbies, likes. We are introducing a fresh approach inspired by rich ancient eastern philosophies and advanced mathematical models. Created by a BIPOC, Women entrepreneur who code.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{})]}),(0,h.jsx)("b",{children:"What sets us apart"})]}),(0,h.jsxs)("ol",{style:{listStyleType:"decimal",marginTop:10},children:[(0,h.jsxs)("li",{children:[" \ud83c\udf08 ",(0,h.jsx)("b",{children:(0,h.jsx)("i",{children:"Solving Compatibility from the Root because Compatibility is colorful:"})}),"  ",(0,h.jsx)("br",{}),"Our unique calculation delve into the essence of what makes relationships thrive. Utoopia celebrates diversity and recognizes that every individual has their own unique preferences and needs."]}),(0,h.jsx)("br",{}),(0,h.jsxs)("li",{children:[" \ud83d\udee0 ",(0,h.jsx)("b",{children:(0,h.jsx)("i",{children:"Crafted with Care: "})}),"  ",(0,h.jsx)("br",{}),"Designed by a relationship enthusiast with a multi-cultural experience and a passionate female engineer who is ready to listen to customers and solve their problems."]}),(0,h.jsx)("br",{}),(0,h.jsxs)("li",{children:[" \ud83c\udfc6 ",(0,h.jsx)("b",{children:(0,h.jsx)("i",{children:"High-Quality Compatibility Score: "})}),"  ",(0,h.jsx)("br",{}),"By blending ancient wisdom with modern science, we've created a comprehensive system that considers multiple dimensions, including romantic, emotional, intellectual, and many others.",(0,h.jsx)(y,{className:"h-[397px] sm:h-auto object-cover w-[396px] md:w-full",src:"images/compatibilityScore.png",alt:"demo"})]}),(0,h.jsx)("br",{}),(0,h.jsxs)("li",{children:[" \ud83d\udc96 ",(0,h.jsx)("b",{children:(0,h.jsx)("i",{children:"A Holistic Approach: "})}),"  ",(0,h.jsx)("br",{}),"We are at the core of positive productive customer experience and thus dedicated to building holistic and productive product that addresses all your relationship needs every step of the way."]})]})]}),descriptiononetext:(0,h.jsxs)(h.Fragment,{children:["\ud83d\udce2 Join the Utoopia Community: Utoopia is coming soon, and we can't wait to embark on this journey with you. Let's redefine relationships together! Watch our product video to get a glimpse of what Utoopia has to offer and sign up for pre-launch.",(0,h.jsx)("br",{})]}),signupbutton:"Sign up",whatsnext:(0,h.jsxs)(h.Fragment,{children:["If you're eager to be part of our pre-launch journey and discover love in a whole new way, sign up with your email to receive updates, early access, subscription discounts and many more surprises. We are here to revolutionize the way you seek and experience relationships. Let's embark on this exciting adventure together! \ud83d\ude80",(0,h.jsx)("br",{})]})};var _=I,S=function(e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:e.className,children:(0,h.jsxs)("div",{className:"flex flex-col h-[442px] md:h-auto items-center justify-start w-auto",children:[(0,h.jsx)("div",{className:"flex flex-col h-[404px] md:h-auto items-start justify-start p-[6.64px] w-[406px] sm:w-full",children:(0,h.jsx)(y,{className:"h-[397px] sm:h-auto object-cover w-[396px] md:w-full",src:"images/img_demo_614x612.png",alt:"demo"})}),(0,h.jsx)("div",{className:"bg-black-900 flex flex-col h-[21px] md:h-auto items-center justify-start w-auto sm:w-full",children:(0,h.jsxs)("div",{className:"flex flex-row gap-[2.98px] h-[21px] md:h-auto items-center justify-start px-[15.91px] w-auto sm:w-full",children:[(0,h.jsx)("div",{className:"flex flex-col h-[21px] items-center justify-start w-[21px]",children:(0,h.jsx)(y,{className:"h-[21px] w-[21px]",src:"images/img_pause.svg",alt:"pause"})}),(0,h.jsxs)("div",{className:"flex flex-row gap-[2.66px] h-[21px] md:h-auto items-center justify-center w-[315px]",children:[(0,h.jsx)(y,{className:"h-[15px] w-[73px]",src:"images/img_navpoint.svg",alt:"menu"}),(0,h.jsx)(y,{className:"h-[15px] w-[162px]",src:"images/img_navpoint_light_blue_400.svg",alt:"navpoint"}),(0,h.jsx)(y,{className:"h-[15px] w-[73px]",src:"images/img_navpoint_green_200.svg",alt:"menu_One"})]}),(0,h.jsx)("div",{className:"flex flex-col h-[21px] items-center justify-start w-[21px]",children:(0,h.jsx)(y,{className:"h-[21px] w-[21px]",src:"images/img_volume.svg",alt:"volume"})})]})})]})})})};S.defaultProps={};var k=a(4165),R=a(5861),A=a(2982),E=a(4485),T=a.n(E),z=a(6181),P=a.n(z),U=a(8121),O=a.n(U),F=function(e,t){var a=t.type,s=t.payload;switch(a){case"INPUT_CHANGE":var i=s.key,r=s.value,l=O()(e.values),o=O()(e.touched);return(0,n.Z)((0,n.Z)({},e),{},{values:T()(l,i,r),touched:T()(o,i,!0)});case"VALIDATE_FORM":var c=s.errors||{};return(0,n.Z)((0,n.Z)({},e),{},{errors:c});case"SET_VALUES":return(0,n.Z)((0,n.Z)({},e),{},{values:(0,n.Z)({},s.values)});case"RESET_FORM":return(0,n.Z)((0,n.Z)({},s),{},{errors:{}});case"SUBMIT_FORM":return(0,n.Z)((0,n.Z)({},e),{},{isSubmitted:!0,submitCounter:++e.submitCounter});case"CLEAR_FORM":return(0,n.Z)((0,n.Z)({},e),{},{values:(0,n.Z)({},s.values),errors:{}});default:return e}},M={validate:!0,validationOnChange:!1,validateSchema:!1},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,n.Z)({},M),a=function(e){return{values:(0,n.Z)({},e),errors:{},touched:{},isSubmitted:!1,submitCounter:0}}(e),r=(0,i.useReducer)(F,a),l=(0,s.Z)(r,2),o=l[0],c=l[1],d=t.validate,u=t.validationOnChange,p=t.validateSchema,m=(0,i.useCallback)((function(){return new Promise((function(e,t){if(p)try{e({isValid:p.validateSync(o.values,{abortEarly:!1}),errors:{}})}catch(s){var a={};s.inner.forEach((function(e){var t=P()(a,e.path);t?T()(a,e.path,[].concat((0,A.Z)(t),[e.message])):T()(a,e.path,[e.message])})),e({isValid:!1,errors:a})}else e({isValid:!0,errors:{}})}))}),[o,p]),x=(0,i.useCallback)((0,R.Z)((0,k.Z)().mark((function e(){var t,a,s;return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return t=e.sent,a=t.isValid,s=t.errors,c({type:"VALIDATE_FORM",payload:{errors:s}}),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)}))),[m]);i.useEffect((function(){function e(){return(e=(0,R.Z)((0,k.Z)().mark((function e(){return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u&&o.isSubmitted&&function(){e.apply(this,arguments)}()}),[o.values,o.isSubmitted,u]);var h=(0,i.useCallback)(function(){var e=(0,R.Z)((0,k.Z)().mark((function e(t,a){return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({type:"INPUT_CHANGE",payload:{key:t,value:a}});case 1:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),[]),f=(0,i.useCallback)((function(){c({type:"RESET_FORM",payload:(0,n.Z)({},a)})}),[a]),v=(0,i.useCallback)((function(){var e=(0,n.Z)({},o.values);Object.keys(e).forEach((function(t){e[t]=""})),c({type:"CLEAR_FORM",payload:(0,n.Z)({},e)})}),[o.values]),g=(0,i.useCallback)(function(){var e=(0,R.Z)((0,k.Z)().mark((function e(t){return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!d){e.next=8;break}return c({type:"SUBMIT_FORM",payload:null}),e.next=4,x();case 4:if(!e.sent){e.next=6;break}t(o.values);case 6:e.next=9;break;case 8:t(o.values);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o.values,d,x]);return(0,n.Z)({handleChange:h,resetForm:f,handleSubmit:g,clearForm:v,setValues:function(e){c({type:"SET_VALUES",payload:(0,n.Z)({},e)})}},o)},L=(a(5462),function(){var e,t,n,l,o,c,d=i.useState(),u=(0,s.Z)(d,2),f=(u[0],u[1]),v=x.Ry().shape({payload:x.Ry().shape({Item:x.Ry().shape({emailAddress:x.Z_().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"EmailAddress is not in correct format")})})}),g=V({payload:{Item:{emailAddress:""}}},{validate:!0,validateSchema:v,validationOnChange:!0});function y(e){var t,a={data:{payload:{TableName:"userSignup",Item:{emailAddress:null===e||void 0===e?void 0:e.payload.Item.emailAddress}}}};(t=a,p(m.USER_SIGN_UP_PUT,t)).then((function(e){var t;f(null===e||void 0===e?void 0:e.data),localStorage.setItem("email",JSON.stringify(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.emailAddress)),r.Am.success("Success, Registered your email!")})).catch((function(t){console.error(t),r.Am.error(t+e+"Please enter the correct email address.")}))}return console.log(g.values),console.log(g.errors),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto md:px-10 sm:px-5 px-[40.01px] w-auto sm:w-full md:w-full",children:[(0,h.jsx)(_,{className:"bg-gray-50 flex flex-col gap-2.5 justify-start max-w-[1359px] mx-auto md:px-5 w-full",handleChange:function(e){return g.handleChange("payload.Item.emailAddress",e)},errors:null===(e=g.errors)||void 0===e||null===(t=e.payload)||void 0===t||null===(n=t.Item)||void 0===n?void 0:n.emailAddress,input:null===g||void 0===g||null===(l=g.values)||void 0===l||null===(o=l.payload)||void 0===o||null===(c=o.Item)||void 0===c?void 0:c.emailAddress,onClick:function(){return g.handleSubmit(y)}}),(0,h.jsx)("video",{src:a(930),controls:"controls",playsinline:!0,"webkit-playsinline":!0})]}),(0,h.jsx)(r.Ix,{})]})})},930:function(e,t,a){e.exports=a.p+"static/media/Utoopia_Demo1.f27c81342a4f087c40b7.mov"}}]);
//# sourceMappingURL=695.45b75d10.chunk.js.map
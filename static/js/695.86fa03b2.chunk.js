"use strict";(self.webpackChunkgarimas_application_10=self.webpackChunkgarimas_application_10||[]).push([[695],{1695:function(e,t,s){s.r(t),s.d(t,{default:function(){return J}});var a=s(885),i=s(2791),n=s(9085),r=s(1413),l=s(4925),o=s(4569),c=["data","headers","params"],u=s.n(o)().create({headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTNmOTI0NTNjODViYzEyNjU4ZjNiZSIsInVzZXJuYW1lIjoiSnVkZ2VfQ3JvbmluIiwiaWF0IjoxNjcxNjk3MTcxfQ.hbZLKSsS6Mdj1ndhAf4rm_5we4iWYvKY1VPSo51sQRM","Content-Type":"application/json"}});function d(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=s.data,i=void 0===a?{}:a,n=s.headers,o=void 0===n?{}:n,d=s.params,p=void 0===d?{}:d,x=(0,l.Z)(s,c);return u((0,r.Z)({url:t,data:i,method:e,params:p,headers:o},x))}u.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var p=function(e,t){return d("put",e,t)},x={USER_SIGN_UP_PUT:"".concat("https://z0f3xz2nwk.execute-api.us-west-2.amazonaws.com/default/","userSignUp")},m=s(1475),h=s(184),f=["children","className","leftIcon","rightIcon","shape","size","variant","color"],v=function(e){var t=e.children,s=e.className,a=void 0===s?"":s,i=e.leftIcon,n=e.rightIcon,o=(e.shape,e.size,e.variant,e.color,(0,l.Z)(e,f));return(0,h.jsxs)("button",(0,r.Z)((0,r.Z)({className:"".concat(a)},o),{},{children:[!!i&&i,t,!!n&&n]}))},g=["className","src","alt"],j=function(e){var t=e.className,s=e.src,a=void 0===s?"defaultNoData.png":s,i=e.alt,n=void 0===i?"testImg":i,o=(0,l.Z)(e,g);return(0,h.jsx)("img",(0,r.Z)((0,r.Z)({className:t,src:a,alt:n},o),{},{loading:"lazy"}))},y=function(e){var t=e.errors,s=void 0===t?[]:t,a=e.className,i=void 0===a?"":a;return(null===s||void 0===s?void 0:s.length)>0&&(0,h.jsx)("div",{className:"text-red-500 text-left text-xs w-full mt-1 ".concat(i),children:s.join(", ")})},w=["wrapClassName","className","name","placeholder","type","children","errors","label","prefix","suffix","onChange","shape","size","variant","color"],b=i.forwardRef((function(e,t){var s=e.wrapClassName,a=void 0===s?"":s,i=e.className,n=void 0===i?"":i,o=e.name,c=void 0===o?"":o,u=e.placeholder,d=void 0===u?"":u,p=e.type,x=void 0===p?"text":p,m=(e.children,e.errors),f=void 0===m?[]:m,v=e.label,g=void 0===v?"":v,j=e.prefix,b=e.suffix,N=e.onChange,Z=(e.shape,e.size,e.variant,e.color,(0,l.Z)(e,w));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"".concat(a," \n               \n               \n              "),children:[!!g&&g,!!j&&j,(0,h.jsx)("input",(0,r.Z)({ref:t,className:"".concat(n," bg-transparent border-0"),type:x,name:c,onChange:function(e){var t;N&&N(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)},placeholder:d},Z)),!!b&&b]}),!!f&&(0,h.jsx)(y,{errors:f})]})})),N=["children","className","size","as"],Z={txtPoppinsLightItalic1946:"font-light font-poppins italic",txtInterMedium1577:"font-inter font-medium",txtPoppinsRegular1229:"font-normal font-poppins",txtInterRegular1182:"font-inter font-normal",txtPoppinsMedium30:"font-medium font-poppins",txtPoppinsRegular1639:"font-normal font-poppins",txtInterRegular138:"font-inter font-normal"},C=function(e){var t=e.children,s=e.className,a=void 0===s?"":s,i=e.size,n=e.as,o=(0,l.Z)(e,N),c=n||"p";return(0,h.jsx)(c,(0,r.Z)((0,r.Z)({className:"text-left ".concat(a," ").concat(i&&Z[i])},o),{},{children:t}))},k=s(4942),S=function(e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:e.className,children:[(0,h.jsx)("div",{className:"bg-gray-50_01 h-[23px] md:ml-[0] ml-[306px] mr-[458px] w-[44%]"}),(0,h.jsxs)("div",{className:"flex flex-col gap-2 items-center justify-start mb-[13px] md:ml-[0] ml-[311px] mr-[419px] w-auto md:w-full",children:[(0,h.jsx)("div",{className:"flex flex-col items-start justify-start py-[37.89px] w-auto md:w-full",children:(0,h.jsxs)("div",{className:"flex flex-col gap-[38px] items-center justify-start w-full",children:[(0,h.jsx)(C,{className:"text-3xl sm:text-[26px] md:text-[28px] text-gray-900 w-full",size:"txtPoppinsMedium30",children:null===e||void 0===e?void 0:e.mottotext}),(0,h.jsxs)("div",{className:"flex flex-row items-center justify-evenly w-full",children:[(0,h.jsx)("div",{className:"flex sm:flex-1 flex-col items-center justify-start w-[62%] sm:w-full",children:(0,h.jsx)(b,{name:"input",placeholder:"Email",className:"font-poppins md:h-auto p-0 placeholder:text-gray-600 sm:h-auto sm:pr-5 text-base text-gray-600 text-left tracking-[0.20px] w-full",wrapClassName:"bg-white-A700 pl-5 pr-[35px] py-2 rounded-[16px] w-full",onChange:null===e||void 0===e?void 0:e.handleChange,errors:null===e||void 0===e?void 0:e.errors,value:null===e||void 0===e?void 0:e.input})}),(0,h.jsx)("div",{className:"flex flex-col items-start justify-start p-2.5 w-auto",children:(0,h.jsx)(v,{className:"common-pointer bg-orange-200 cursor-pointer font-bold font-poppins h-[35px] py-1.5 rounded-[17px] text-base text-black-900_01 text-center tracking-[0.20px] w-[109px]",onClick:null===e||void 0===e?void 0:e.onClick,children:null===e||void 0===e?void 0:e.signupbutton})})]}),(0,h.jsxs)("div",{className:"flex flex-col items-center justify-start",children:[(0,h.jsx)(C,{className:"mt-[17px] text-[16.39px] text-gray-900 w-full",size:"txtPoppinsRegular1639",children:null===e||void 0===e?void 0:e.descriptiontext}),(0,h.jsx)(C,{className:"mt-[17px] text-[16.39px] text-gray-900 w-full",size:"txtPoppinsRegular1639",children:null===e||void 0===e?void 0:e.descriptiononetext}),(0,h.jsx)(C,{className:"mt-[17px] text-[16.39px] text-gray-900 w-full",size:"txtPoppinsRegular1639",children:null===e||void 0===e?void 0:e.descriptiontwotext})]})]})}),(0,h.jsxs)("div",{className:"flex flex-row items-center justify-evenly w-full",children:[(0,h.jsx)("div",{className:"flex sm:flex-1 flex-col items-center justify-start w-[62%] sm:w-full",children:(0,h.jsx)(b,{name:"input",placeholder:"Email",className:"font-poppins md:h-auto p-0 placeholder:text-gray-600 sm:h-auto sm:pr-5 text-base text-gray-600 text-left tracking-[0.20px] w-full",wrapClassName:"bg-white-A700 pl-5 pr-[35px] py-2 rounded-[16px] w-full",onChange:null===e||void 0===e?void 0:e.handleChange,errors:null===e||void 0===e?void 0:e.errors,value:null===e||void 0===e?void 0:e.input})}),(0,h.jsx)("div",{className:"flex flex-col items-start justify-start p-2.5 w-auto",children:(0,h.jsx)(v,{className:"common-pointer bg-orange-200 cursor-pointer font-bold font-poppins h-[35px] py-1.5 rounded-[17px] text-base text-black-900_01 text-center tracking-[0.20px] w-[109px]",onClick:null===e||void 0===e?void 0:e.onClick,children:null===e||void 0===e?void 0:e.signupbutton})})]}),(0,h.jsx)("div",{className:"flex flex-col gap-[5.91px] items-start justify-start w-auto",children:(0,h.jsx)("div",{className:"flex flex-col items-center justify-start",children:(0,h.jsx)(C,{className:"mt-[17px] text-[16.39px] text-gray-900 w-full",size:"txtPoppinsRegular1639",children:null===e||void 0===e?void 0:e.whatsnext})})})]})]})})};S.defaultProps=(0,k.Z)({mottotext:"Utoopia: A Dating app where you find love based on compatibility",signupbutton:"Sign up",descriptiontext:(0,h.jsxs)(h.Fragment,{children:["Sign up NOW to get free subscriton, only till Aug 15.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsxs)("span",{children:[(0,h.jsxs)("ul",{style:{listStyleType:"disc",marginTop:10},children:[(0,h.jsx)("b",{children:" Are you tired of swiping on apps looking for perfect match? "}),(0,h.jsx)("br",{}),"40% of users are saying the same. ",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"At Utoopia, we believe that human compatibility is Colorful\ud83c\udf08, much more than just shared hobbies and likes.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"Created in Seattle by a Southeast asian woman software engineer.",(0,h.jsx)("br",{}),(0,h.jsx)("i",{children:"#BIPOC #womenwhocode #mindfuldating #inclusive #changemakers"}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{})]}),(0,h.jsx)("b",{children:"What sets us apart"})]}),(0,h.jsxs)("ol",{style:{listStyleType:"decimal",marginTop:10},children:[(0,h.jsxs)("li",{children:[" \ud83c\udf08 ",(0,h.jsx)("b",{children:(0,h.jsx)("i",{children:"Finding compatibility from the Root because Compatibility is colorful:"})}),"  ",(0,h.jsx)("br",{}),"Our unique calculations delve into the essence of what makes relationships thrive. Utoopia celebrates diversity and recognizes that every individual has their own unique preferences and needs."]}),(0,h.jsx)("br",{}),(0,h.jsxs)("li",{children:[" \ud83d\udee0 ",(0,h.jsx)("b",{children:(0,h.jsx)("i",{children:"Crafted with Care: "})}),"  ",(0,h.jsx)("br",{}),"Designed by a relationship enthusiast, with a multi-cultural experience who is ready to listen to customers and solve their problems."]}),(0,h.jsx)("br",{}),(0,h.jsxs)("li",{children:[" \ud83c\udfc6 ",(0,h.jsx)("b",{children:(0,h.jsx)("i",{children:"High-Quality Compatibility Score: "})}),"  ",(0,h.jsx)("br",{}),"By blending ancient wisdom with modern science, we've created a comprehensive system that considers multiple dimensions, including romantic, emotional, intellectual, and many others.",(0,h.jsx)(j,{className:"h-[397px] sm:h-auto object-cover w-[396px] md:w-full",src:"images/compatibilityScore.png",alt:"demo"})]}),(0,h.jsx)("br",{}),(0,h.jsxs)("li",{children:[" \ud83d\udc96 ",(0,h.jsx)("b",{children:(0,h.jsx)("i",{children:"A Holistic Approach: "})}),"  ",(0,h.jsx)("br",{}),"We care about positive customer experience and thus dedicated to build a holistic and effective product, that addresses all your relationship needs, every step of the way. Utoopia celebrates inclusivity in ethinicity, gender identity, sexual orientation, and relationship types."]})]})]}),descriptiononetext:(0,h.jsxs)(h.Fragment,{children:["\ud83d\udce2 Join the Utoopia Community: Utoopia is coming soon, and we can't wait to embark on this journey with you. Let's redefine relationships together! Watch our product video to get a glimpse of what Utoopia has to offer and sign up for pre-launch.",(0,h.jsx)("br",{})]})},"signupbutton","Sign up");var I=S,_=function(e){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:e.className,children:(0,h.jsxs)("div",{className:"flex flex-col h-[442px] md:h-auto items-center justify-start w-auto",children:[(0,h.jsx)("div",{className:"flex flex-col h-[404px] md:h-auto items-start justify-start p-[6.64px] w-[406px] sm:w-full",children:(0,h.jsx)(j,{className:"h-[397px] sm:h-auto object-cover w-[396px] md:w-full",src:"images/img_demo_614x612.png",alt:"demo"})}),(0,h.jsx)("div",{className:"bg-black-900 flex flex-col h-[21px] md:h-auto items-center justify-start w-auto sm:w-full",children:(0,h.jsxs)("div",{className:"flex flex-row gap-[2.98px] h-[21px] md:h-auto items-center justify-start px-[15.91px] w-auto sm:w-full",children:[(0,h.jsx)("div",{className:"flex flex-col h-[21px] items-center justify-start w-[21px]",children:(0,h.jsx)(j,{className:"h-[21px] w-[21px]",src:"images/img_pause.svg",alt:"pause"})}),(0,h.jsxs)("div",{className:"flex flex-row gap-[2.66px] h-[21px] md:h-auto items-center justify-center w-[315px]",children:[(0,h.jsx)(j,{className:"h-[15px] w-[73px]",src:"images/img_navpoint.svg",alt:"menu"}),(0,h.jsx)(j,{className:"h-[15px] w-[162px]",src:"images/img_navpoint_light_blue_400.svg",alt:"navpoint"}),(0,h.jsx)(j,{className:"h-[15px] w-[73px]",src:"images/img_navpoint_green_200.svg",alt:"menu_One"})]}),(0,h.jsx)("div",{className:"flex flex-col h-[21px] items-center justify-start w-[21px]",children:(0,h.jsx)(j,{className:"h-[21px] w-[21px]",src:"images/img_volume.svg",alt:"volume"})})]})})]})})})};_.defaultProps={};var A=s(4165),R=s(5861),E=s(2982),U=s(4485),P=s.n(U),T=s(6181),z=s.n(T),O=s(8121),F=s.n(O),M=function(e,t){var s=t.type,a=t.payload;switch(s){case"INPUT_CHANGE":var i=a.key,n=a.value,l=F()(e.values),o=F()(e.touched);return(0,r.Z)((0,r.Z)({},e),{},{values:P()(l,i,n),touched:P()(o,i,!0)});case"VALIDATE_FORM":var c=a.errors||{};return(0,r.Z)((0,r.Z)({},e),{},{errors:c});case"SET_VALUES":return(0,r.Z)((0,r.Z)({},e),{},{values:(0,r.Z)({},a.values)});case"RESET_FORM":return(0,r.Z)((0,r.Z)({},a),{},{errors:{}});case"SUBMIT_FORM":return(0,r.Z)((0,r.Z)({},e),{},{isSubmitted:!0,submitCounter:++e.submitCounter});case"CLEAR_FORM":return(0,r.Z)((0,r.Z)({},e),{},{values:(0,r.Z)({},a.values),errors:{}});default:return e}},V={validate:!0,validationOnChange:!1,validateSchema:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,r.Z)({},V),s=function(e){return{values:(0,r.Z)({},e),errors:{},touched:{},isSubmitted:!1,submitCounter:0}}(e),n=(0,i.useReducer)(M,s),l=(0,a.Z)(n,2),o=l[0],c=l[1],u=t.validate,d=t.validationOnChange,p=t.validateSchema,x=(0,i.useCallback)((function(){return new Promise((function(e,t){if(p)try{e({isValid:p.validateSync(o.values,{abortEarly:!1}),errors:{}})}catch(a){var s={};a.inner.forEach((function(e){var t=z()(s,e.path);t?P()(s,e.path,[].concat((0,E.Z)(t),[e.message])):P()(s,e.path,[e.message])})),e({isValid:!1,errors:s})}else e({isValid:!0,errors:{}})}))}),[o,p]),m=(0,i.useCallback)((0,R.Z)((0,A.Z)().mark((function e(){var t,s,a;return(0,A.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:return t=e.sent,s=t.isValid,a=t.errors,c({type:"VALIDATE_FORM",payload:{errors:a}}),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)}))),[x]);i.useEffect((function(){function e(){return(e=(0,R.Z)((0,A.Z)().mark((function e(){return(0,A.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d&&o.isSubmitted&&function(){e.apply(this,arguments)}()}),[o.values,o.isSubmitted,d]);var h=(0,i.useCallback)(function(){var e=(0,R.Z)((0,A.Z)().mark((function e(t,s){return(0,A.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c({type:"INPUT_CHANGE",payload:{key:t,value:s}});case 1:case"end":return e.stop()}}),e)})));return function(t,s){return e.apply(this,arguments)}}(),[]),f=(0,i.useCallback)((function(){c({type:"RESET_FORM",payload:(0,r.Z)({},s)})}),[s]),v=(0,i.useCallback)((function(){var e=(0,r.Z)({},o.values);Object.keys(e).forEach((function(t){e[t]=""})),c({type:"CLEAR_FORM",payload:(0,r.Z)({},e)})}),[o.values]),g=(0,i.useCallback)(function(){var e=(0,R.Z)((0,A.Z)().mark((function e(t){return(0,A.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=8;break}return c({type:"SUBMIT_FORM",payload:null}),e.next=4,m();case 4:if(!e.sent){e.next=6;break}t(o.values);case 6:e.next=9;break;case 8:t(o.values);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[o.values,u,m]);return(0,r.Z)({handleChange:h,resetForm:f,handleSubmit:g,clearForm:v,setValues:function(e){c({type:"SET_VALUES",payload:(0,r.Z)({},e)})}},o)},J=(s(5462),function(){var e,t,r,l,o,c,u=i.useState(),d=(0,a.Z)(u,2),f=(d[0],d[1]),v=m.Ry().shape({payload:m.Ry().shape({Item:m.Ry().shape({emailAddress:m.Z_().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,"EmailAddress is not in correct format")})})}),g=L({payload:{Item:{emailAddress:""}}},{validate:!0,validateSchema:v,validationOnChange:!0});function j(e){var t,s={data:{payload:{TableName:"userSignup",Item:{emailAddress:null===e||void 0===e?void 0:e.payload.Item.emailAddress}}}};(t=s,p(x.USER_SIGN_UP_PUT,t)).then((function(e){var t;f(null===e||void 0===e?void 0:e.data),localStorage.setItem("email",JSON.stringify(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.emailAddress)),n.Am.success("Success, Registered your email!")})).catch((function(t){console.error(t),n.Am.error(t+e+"Please enter the correct email address.")}))}return console.log(g.values),console.log(g.errors),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto md:px-10 sm:px-5 px-[40.01px] w-auto sm:w-full md:w-full",children:[(0,h.jsx)(I,{className:"bg-gray-50 flex flex-col gap-2.5 justify-start max-w-[1359px] mx-auto md:px-5 w-full",handleChange:function(e){return g.handleChange("payload.Item.emailAddress",e)},errors:null===(e=g.errors)||void 0===e||null===(t=e.payload)||void 0===t||null===(r=t.Item)||void 0===r?void 0:r.emailAddress,input:null===g||void 0===g||null===(l=g.values)||void 0===l||null===(o=l.payload)||void 0===o||null===(c=o.Item)||void 0===c?void 0:c.emailAddress,onClick:function(){return g.handleSubmit(j)}}),(0,h.jsx)("video",{src:s(930),controls:"controls",playsinline:!0,"webkit-playsinline":!0})]}),(0,h.jsx)(n.Ix,{})]})})},930:function(e,t,s){e.exports=s.p+"static/media/Utoopia_Demo1.f27c81342a4f087c40b7.mov"}}]);
//# sourceMappingURL=695.86fa03b2.chunk.js.map
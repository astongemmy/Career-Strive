(self.webpackChunk=self.webpackChunk||[]).push([[616],{2740:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var r=o(5166),n={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},a={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};const s={render:function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("div",n,[(0,r.createVNode)("div",null,[(0,r.renderSlot)(e.$slots,"logo")]),(0,r.createVNode)("div",a,[(0,r.renderSlot)(e.$slots,"default")])])}},c=s},3027:(e,t,o)=>{"use strict";o.d(t,{Z:()=>s});var r=o(5166),n=(0,r.createVNode)("svg",{class:"w-16 h-16",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,r.createVNode)("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}),(0,r.createVNode)("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"})],-1);const a={render:function(e,t){var o=(0,r.resolveComponent)("inertia-link");return(0,r.openBlock)(),(0,r.createBlock)(o,{href:"/"},{default:(0,r.withCtx)((function(){return[n]})),_:1})}},s=a},8163:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(5166);const n={props:{type:{type:String,default:"submit"}},render:function(e,t,o,n,a,s){return(0,r.openBlock)(),(0,r.createBlock)("button",{type:o.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},[(0,r.renderSlot)(e.$slots,"default")],8,["type"])}},a=n},344:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(5166);const n={emits:["update:checked"],props:{checked:{type:[Array,Boolean],default:!1},value:{default:null}},computed:{proxyChecked:{get:function(){return this.checked},set:function(e){this.$emit("update:checked",e)}}},render:function(e,t,o,n,a,s){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createBlock)("input",{type:"checkbox",value:o.value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return s.proxyChecked=e}),class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,["value"])),[[r.vModelCheckbox,s.proxyChecked]])}},a=n},6824:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(5166);const n={props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}},render:function(e,t,o,n,a,s){return(0,r.openBlock)(),(0,r.createBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:o.modelValue,onInput:t[1]||(t[1]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,["value"])}},a=n},3845:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var r=o(5166),n={class:"block font-medium text-sm text-gray-700"},a={key:0},s={key:1};const c={props:["value"],render:function(e,t,o,c,l,i){return(0,r.openBlock)(),(0,r.createBlock)("label",n,[o.value?((0,r.openBlock)(),(0,r.createBlock)("span",a,(0,r.toDisplayString)(o.value),1)):((0,r.openBlock)(),(0,r.createBlock)("span",s,[(0,r.renderSlot)(e.$slots,"default")]))])}},l=c},3186:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var r=o(5166),n={key:0},a=(0,r.createVNode)("div",{class:"font-medium text-red-600"},"Whoops! Something went wrong.",-1),s={class:"mt-3 list-disc list-inside text-sm text-red-600"};const c={computed:{errors:function(){return this.$page.props.errors},hasErrors:function(){return Object.keys(this.errors).length>0}},render:function(e,t,o,c,l,i){return i.hasErrors?((0,r.openBlock)(),(0,r.createBlock)("div",n,[a,(0,r.createVNode)("ul",s,[((0,r.openBlock)(!0),(0,r.createBlock)(r.Fragment,null,(0,r.renderList)(i.errors,(function(e,t){return(0,r.openBlock)(),(0,r.createBlock)("li",{key:t},(0,r.toDisplayString)(e),1)})),128))])])):(0,r.createCommentVNode)("",!0)}},l=c},3616:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>b});var r=o(5166),n={class:"mt-4"},a={class:"mt-4"},s={class:"mt-4"},c={key:0,class:"mt-4"},l={class:"flex items-center"},i={class:"ml-2"},d=(0,r.createTextVNode)(" I agree to the "),u=(0,r.createTextVNode)(" and "),m={class:"flex items-center justify-end mt-4"},p=(0,r.createTextVNode)(" Already registered? "),f=(0,r.createTextVNode)(" Register ");var h=o(2740),v=o(3027),g=o(8163),k=o(6824),V=o(344),w=o(3845),y=o(3186);const x={components:{JetAuthenticationCard:h.Z,JetAuthenticationCardLogo:v.Z,JetButton:g.Z,JetInput:k.Z,JetCheckbox:V.Z,JetLabel:w.Z,JetValidationErrors:y.Z},data:function(){return{form:this.$inertia.form({name:"",email:"",password:"",password_confirmation:"",terms:!1})}},methods:{submit:function(){var e=this;this.form.post(this.route("register"),{onFinish:function(){return e.form.reset("password","password_confirmation")}})}},render:function(e,t,o,h,v,g){var k=(0,r.resolveComponent)("jet-authentication-card-logo"),V=(0,r.resolveComponent)("jet-validation-errors"),w=(0,r.resolveComponent)("jet-label"),y=(0,r.resolveComponent)("jet-input"),x=(0,r.resolveComponent)("jet-checkbox"),b=(0,r.resolveComponent)("inertia-link"),N=(0,r.resolveComponent)("jet-button"),B=(0,r.resolveComponent)("jet-authentication-card");return(0,r.openBlock)(),(0,r.createBlock)(B,null,{logo:(0,r.withCtx)((function(){return[(0,r.createVNode)(k)]})),default:(0,r.withCtx)((function(){return[(0,r.createVNode)(V,{class:"mb-4"}),(0,r.createVNode)("form",{onSubmit:t[6]||(t[6]=(0,r.withModifiers)((function(){return g.submit&&g.submit.apply(g,arguments)}),["prevent"]))},[(0,r.createVNode)("div",null,[(0,r.createVNode)(w,{for:"name",value:"Name"}),(0,r.createVNode)(y,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:v.form.name,"onUpdate:modelValue":t[1]||(t[1]=function(e){return v.form.name=e}),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"])]),(0,r.createVNode)("div",n,[(0,r.createVNode)(w,{for:"email",value:"Email"}),(0,r.createVNode)(y,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:v.form.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return v.form.email=e}),required:""},null,8,["modelValue"])]),(0,r.createVNode)("div",a,[(0,r.createVNode)(w,{for:"password",value:"Password"}),(0,r.createVNode)(y,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:v.form.password,"onUpdate:modelValue":t[3]||(t[3]=function(e){return v.form.password=e}),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),(0,r.createVNode)("div",s,[(0,r.createVNode)(w,{for:"password_confirmation",value:"Confirm Password"}),(0,r.createVNode)(y,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:v.form.password_confirmation,"onUpdate:modelValue":t[4]||(t[4]=function(e){return v.form.password_confirmation=e}),required:"",autocomplete:"new-password"},null,8,["modelValue"])]),e.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?((0,r.openBlock)(),(0,r.createBlock)("div",c,[(0,r.createVNode)(w,{for:"terms"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",l,[(0,r.createVNode)(x,{name:"terms",id:"terms",checked:v.form.terms,"onUpdate:checked":t[5]||(t[5]=function(e){return v.form.terms=e})},null,8,["checked"]),(0,r.createVNode)("div",i,[d,(0,r.createVNode)("a",{target:"_blank",href:e.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Terms of Service",8,["href"]),u,(0,r.createVNode)("a",{target:"_blank",href:e.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},"Privacy Policy",8,["href"])])])]})),_:1})])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("div",m,[(0,r.createVNode)(b,{href:e.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:(0,r.withCtx)((function(){return[p]})),_:1},8,["href"]),(0,r.createVNode)(N,{class:["ml-4",{"opacity-25":v.form.processing}],disabled:v.form.processing},{default:(0,r.withCtx)((function(){return[f]})),_:1},8,["class","disabled"])])],32)]})),_:1})}},b=x}}]);
//# sourceMappingURL=616.js.map
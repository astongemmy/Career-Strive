(self.webpackChunk=self.webpackChunk||[]).push([[985],{4970:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>q});var o=r(5166),a={class:"relative bg-login w-screen h-screen bg-center bg-cover bg-no-repeat"},l={class:"relative h-full w-full bg-opacity-95 bg-white"},s={class:"absolute left-2/4 top-2/4 -translate-y-2/4 md:top-1/4 md:-translate-y-0 transform -translate-x-2/4 w-4/5 lg:w-3/5 xl:w-2/5 bg-white mx-auto shadow-2xl rounded-xl overflow-hidden"},i={class:"relative flex flex-col md:flex-row justify-between items-start min-h-112"},n=(0,o.createVNode)("h1",{"data-aos":"fade-down","data-aos-duration":"800",class:"text-lg text-gray-600 font-medium"}," Login to gain Access ",-1),d={class:"relative mt-10"},u=(0,o.createVNode)("label",{for:"login-email",class:"absolute left-3 flex justify-start w-3/4 items-center text-white rounded-full bg-blue-300 px-3 py-1 shadow transition-all ease-in-out"},[(0,o.createVNode)("i",{class:"fa rounded-full w-4 h-4 mr-2 bg-white shadow"}),(0,o.createTextVNode)("Email ")],-1),c={class:"relative mt-10"},f=(0,o.createVNode)("label",{for:"login-pass",class:"absolute left-3 flex justify-start w-3/4 items-center text-white rounded-full bg-blue-300 px-3 py-1 shadow transition-all ease-in-out"},[(0,o.createVNode)("i",{class:"fa rounded-full w-4 h-4 mr-2 bg-white shadow"}),(0,o.createTextVNode)("Password ")],-1),g=(0,o.createStaticVNode)('<a class="text-blue-400" href="fpass.php">Forgot Password?</a><div data-aos="fade-in" data-aos-delay="350" class="mt-4"><button type="submit" class="bg-white w-full lg:w-auto text-gray-600 px-5 py-2 text-xl rounded-md border-white shadow"><i id="login_loader" class="fa fa-spinner mr-4 hidden animate-spin"></i><span class="">Log In</span></button></div>',2),m=(0,o.createVNode)("h1",{class:"text-lg text-pink-800 font-medium"}," Register ",-1),p={class:"relative mt-10"},b=(0,o.createVNode)("label",{for:"register-name",class:"absolute left-3 flex justify-start w-3/4 items-center text-white rounded-full bg-green-300 px-3 py-1 shadow transition-all ease-in-out"},[(0,o.createVNode)("i",{class:"fa rounded-full w-4 h-4 mr-2 bg-white shadow-theme"}),(0,o.createTextVNode)("Username ")],-1),h={class:"relative mt-10"},w=(0,o.createVNode)("label",{for:"register-email",class:"absolute left-3 flex justify-start w-3/4 items-center text-white rounded-full bg-green-300 px-3 py-1 shadow transition-all ease-in-out"},[(0,o.createVNode)("i",{class:"fa rounded-full w-4 h-4 mr-2 bg-white border-2 border-white shadow-theme"}),(0,o.createTextVNode)("Email ")],-1),x={class:"relative mt-10"},y=(0,o.createVNode)("label",{for:"register-pass",class:"absolute left-3 flex justify-start w-3/4 items-center text-white rounded-full bg-green-300 px-3 py-1 shadow transition-all ease-in-out"},[(0,o.createVNode)("i",{class:"fa rounded-full w-4 h-4 mr-2 border-2 bg-white border-white shadow-theme"}),(0,o.createTextVNode)("Password ")],-1),V=(0,o.createVNode)("div",{class:"mt-8"},[(0,o.createVNode)("button",{type:"submit",class:"bg-white w-full lg:w-auto text-pink-800 px-5 py-2 text-xl rounded-md border-white shadow"},[(0,o.createVNode)("i",{id:"register_loader",class:"fa fa-spinner mr-4 animate-spin hidden"}),(0,o.createVNode)("span",{class:""},"Register")])],-1),N=(0,o.createVNode)("img",{src:"/images/backgrounds/login-cover.jpg",class:"hidden md:block absolute left-0 top-0 w-full h-full",alt:"login-cover-photo"},null,-1),v={class:"absolute top-0 right-0 w-auto md:w-full h-full bg-white bg-opacity-75"},k=(0,o.createVNode)("i",{class:"fa text-white md:text-pink-800 fa-globe"},null,-1),j=(0,o.createVNode)("i",{class:"fab fa-facebook-f text-white md:text-blue-500"},null,-1),_=(0,o.createVNode)("i",{class:"fab fa-medium-m text-white md:text-black"},null,-1),S=(0,o.createVNode)("i",{class:"fab fa-linkedin text-white md:text-blue-900"},null,-1),O=(0,o.createVNode)("i",{class:"fab fa-github text-white md:text-black"},null,-1),C=(0,o.createVNode)("i",{class:"fa fa-arrow-left text-white"},null,-1),F={class:"hidden md:block relative mx-auto text-center text-gray-600"},I=(0,o.createVNode)("div",{"data-aos":"fade-up","data-aos-duration":"700",class:"text-xl p-8"}," Submit your login credentials to gain access to future opportunities ",-1),P=(0,o.createVNode)("span",{class:"hidden text-red-500 bg-red-200 text-green-500 bg-green-200"},null,-1);var T=r(894);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const U={data:function(){return{Input:{login:{email:null,password:null},register:{name:null,email:null,password:null}},form_toggle:!1,form_toggle_text:"Register"}},computed:R(R({},(0,T.rn)(["feedbackMessages","feedbackStyle"])),{},{formSelector:function(){return this.form_toggle?"right-0 md:right-2/5":"right-0"},loginFormSelector:function(){return this.form_toggle?"md:right-1/5":"md:right-3/5"},registerFormSelector:function(){return this.form_toggle?"right-0":"-right-full md:right-1/5"},formBGColor:function(){return this.form_toggle?"bg-green-400":"bg-blue-400"},formTextColor:function(){return this.form_toggle?"text-green-400":"text-blue-400"},toggleLoginFeedbackResponse:function(){return this.feedbackStyle.login.success?"text-green-500 bg-green-200":this.feedbackStyle.login.error?"text-red-500 bg-red-200":"absolute"},toggleRegisterFeedbackResponse:function(){return this.feedbackStyle.register.success?"text-green-500 bg-green-200":this.feedbackStyle.register.error?"text-red-500 bg-red-200":"absolute"}}),methods:R(R({},(0,T.nv)(["loginUser","registerUser","redirectAuthenticated"])),{},{toggleForm:function(e){this.form_toggle=!this.form_toggle,window.innerWidth>767&&("Register"==this.form_toggle_text?this.form_toggle_text="Login":this.form_toggle_text="Register")}}),created:function(){this.redirectAuthenticated({intended:"/"})},render:function(e,t,r,T,D,R){var M=(0,o.resolveComponent)("inertia-link");return(0,o.openBlock)(),(0,o.createBlock)("div",a,[(0,o.createVNode)("div",l,[(0,o.createVNode)("div",s,[(0,o.createVNode)("div",i,[(0,o.createVNode)("form",{onSubmit:t[3]||(t[3]=(0,o.withModifiers)((function(t){return e.loginUser({login:D.Input.login})}),["prevent"])),class:[R.loginFormSelector,"bg-white absolute w-full md:w-2/5 h-full py-6 px-8 transition-all duration-700"],method:"POST"},[n,(0,o.createVNode)("div",d,[u,(0,o.withDirectives)((0,o.createVNode)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return D.Input.login.email=e}),class:"p-3 text-blue-500 focus:ring-blue-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent",required:"",type:"email",autocomplete:"nope",placeholder:"email",id:"login-email"},null,512),[[o.vModelText,D.Input.login.email]])]),(0,o.createVNode)("div",c,[f,(0,o.withDirectives)((0,o.createVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return D.Input.login.password=e}),class:"p-3 text-blue-500 focus:ring-blue-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent",required:"",type:"password",placeholder:"password",autocomplete:"new-password",id:"login-pass",name:"login-pass"},null,512),[[o.vModelText,D.Input.login.password]])]),g],34),(0,o.createVNode)("form",{onSubmit:t[7]||(t[7]=(0,o.withModifiers)((function(t){return e.registerUser({register:D.Input.register})}),["prevent"])),class:[R.registerFormSelector,"bg-white absolute h-full w-full md:w-2/5 py-6 px-8 transition-all duration-700"],method:"post"},[m,(0,o.createVNode)("div",p,[b,(0,o.withDirectives)((0,o.createVNode)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return D.Input.register.name=e}),class:"p-3 text-green-500 focus:ring-green-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent",placeholder:"name",type:"text",id:"register-name",required:""},null,512),[[o.vModelText,D.Input.register.name]])]),(0,o.createVNode)("div",h,[w,(0,o.withDirectives)((0,o.createVNode)("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return D.Input.register.email=e}),class:"p-3 text-green-500 focus:ring-green-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent",placeholder:"email",type:"email",name:"email",id:"register-email",required:""},null,512),[[o.vModelText,D.Input.register.email]])]),(0,o.createVNode)("div",x,[y,(0,o.withDirectives)((0,o.createVNode)("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return D.Input.register.password=e}),class:"p-3 text-green-500 focus:ring-green-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent",placeholder:"password",type:"password",id:"register-pass",autocomplete:"new-password",required:""},null,512),[[o.vModelText,D.Input.register.password]])]),V],34),(0,o.createVNode)("div",{class:[R.formSelector,"absolute h-full w-auto md:w-3/5 transition-all duration-700"]},[N,(0,o.createVNode)("div",v,[(0,o.createVNode)("div",{class:[R.formBGColor,"absolute md:bg-white md:relative top-0 text-pink-800 right-0 h-full md:h-auto w-auto md:w-full flex flex-col md:flex-row justify-center md:justify-between px-2 md:px-6 md:py-5 text-2xl"]},[(0,o.createVNode)(M,{"data-aos":"fade-down","data-aos-duration":"300",href:"/",title:"Home",class:"flex mb-4 md:mb-0 justify-center items-center"},{default:(0,o.withCtx)((function(){return[k]})),_:1}),(0,o.createVNode)(M,{"data-aos":"fade-down","data-aos-duration":"350",href:"/",title:"Home",class:"flex mb-4 md:mb-0 justify-center items-center"},{default:(0,o.withCtx)((function(){return[j]})),_:1}),(0,o.createVNode)(M,{"data-aos":"fade-down","data-aos-duration":"400",href:"/",title:"Home",class:"flex mb-4 md:mb-0 justify-center items-center"},{default:(0,o.withCtx)((function(){return[_]})),_:1}),(0,o.createVNode)(M,{"data-aos":"fade-down","data-aos-duration":"450",href:"/",title:"Home",class:"flex mb-4 md:mb-0 justify-center items-center"},{default:(0,o.withCtx)((function(){return[S]})),_:1}),(0,o.createVNode)(M,{"data-aos":"fade-down","data-aos-duration":"500",href:"/",title:"Home",class:"flex mb-4 md:mb-0 justify-center items-center"},{default:(0,o.withCtx)((function(){return[O]})),_:1}),(0,o.createVNode)("span",{onClick:t[8]||(t[8]=function(){return R.toggleForm&&R.toggleForm.apply(R,arguments)}),class:"md:hidden flex mb-4 md:mb-0 justify-center items-center"},[C])],2),(0,o.createVNode)("div",F,[(0,o.createVNode)("div",{class:[R.formTextColor,"text-2xl uppercase font-bold pt-16 p-4"]}," Welcome to Career Strive ",2),I,(0,o.createVNode)("button",{onClick:t[9]||(t[9]=function(){return R.toggleForm&&R.toggleForm.apply(R,arguments)}),class:[R.formBGColor,"relative inline-block text-white shadow text-xl px-8 py-3 rounded-xl"]},(0,o.toDisplayString)(D.form_toggle_text),3)])])],2)]),(0,o.createVNode)("div",{class:[R.toggleLoginFeedbackResponse,"px-4 py-2 w-full"]},(0,o.toDisplayString)(e.feedbackMessages.login),3),(0,o.createVNode)("div",{class:[R.toggleRegisterFeedbackResponse,"px-4 py-2 w-full"]},(0,o.toDisplayString)(e.feedbackMessages.register),3),P])])])}},q=U}}]);
//# sourceMappingURL=985.js.map
(self.webpackChunk=self.webpackChunk||[]).push([[552],{7552:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>q});var a=r(5166),o={class:"relative bg-login w-screen h-screen bg-cover bg-no-repeat"},l={class:"relative h-full w-full bg-opacity-90 bg-black"},i={class:"absolute left-2/4 top-1/4 transform -translate-x-2/4 w-4/5 lg:w-3/5 xl:w-2/5 bg-white mx-auto shadow-2xl rounded-xl overflow-hidden"},s={class:"relative flex flex-col md:flex-row justify-between items-start min-h-112"},n=(0,a.createVNode)("h1",{"data-aos":"fade-down","data-aos-duration":"800",class:"text-lg text-gray-600 font-medium"}," Login to gain Access ",-1),d={"data-aos":"fade-up","data-aos-duration":"300",class:"relative mt-10"},u=(0,a.createVNode)("label",{for:"login-email",class:"absolute left-3 flex justify-start w-3/4 items-center text-white rounded-full bg-blue-300 px-3 py-1 shadow transition-all ease-in-out"},[(0,a.createVNode)("i",{class:"fa rounded-full w-4 h-4 mr-2 bg-white shadow"}),(0,a.createTextVNode)("Email ")],-1),c={"data-aos":"fade-up","data-aos-duration":"350",class:"relative mt-10"},f=(0,a.createVNode)("label",{for:"login-pass",class:"absolute left-3 flex justify-start w-3/4 items-center text-white rounded-full bg-blue-300 px-3 py-1 shadow transition-all ease-in-out"},[(0,a.createVNode)("i",{class:"fa rounded-full w-4 h-4 mr-2 bg-white shadow"}),(0,a.createTextVNode)("Password ")],-1),g=(0,a.createStaticVNode)('<a class="text-blue-400" href="fpass.php">Forgot Password?</a><div data-aos="fade-in" data-aos-delay="350" class="mt-4"><button type="submit" class="bg-white w-full lg:w-auto text-gray-600 px-5 py-2 text-xl rounded-md border-white shadow"><i id="login_loader" class="fa fa-spinner mr-4 hidden animate-spin"></i><span class="">Log In</span></button></div>',2),m=(0,a.createVNode)("h1",{class:"text-lg text-pink-800 font-medium"}," Register ",-1),p={"data-aos":"fade-up","data-aos-duration":"300",class:"relative mt-10"},b=(0,a.createVNode)("label",{for:"register-name",class:"absolute left-3 flex justify-start w-3/4 items-center text-white rounded-full bg-green-300 px-3 py-1 shadow transition-all ease-in-out"},[(0,a.createVNode)("i",{class:"fa rounded-full w-4 h-4 mr-2 bg-white shadow-theme"}),(0,a.createTextVNode)("Username ")],-1),w={"data-aos":"fade-up","data-aos-duration":"350",class:"relative mt-10"},h=(0,a.createVNode)("label",{for:"register-email",class:"absolute left-3 flex justify-start w-3/4 items-center text-white rounded-full bg-green-300 px-3 py-1 shadow transition-all ease-in-out"},[(0,a.createVNode)("i",{class:"fa rounded-full w-4 h-4 mr-2 bg-white border-2 border-white shadow-theme"}),(0,a.createTextVNode)("Email ")],-1),x={"data-aos":"fade-up","data-aos-duration":"400",class:"relative mt-10"},V=(0,a.createVNode)("label",{for:"register-pass",class:"absolute left-3 flex justify-start w-3/4 items-center text-white rounded-full bg-green-300 px-3 py-1 shadow transition-all ease-in-out"},[(0,a.createVNode)("i",{class:"fa rounded-full w-4 h-4 mr-2 border-2 bg-white border-white shadow-theme"}),(0,a.createTextVNode)("Password ")],-1),y=(0,a.createVNode)("div",{"data-aos":"fade-in","data-aos-delay":"400",class:"mt-8"},[(0,a.createVNode)("button",{type:"submit",class:"bg-white w-full lg:w-auto text-pink-800 px-5 py-2 text-xl rounded-md border-white shadow"},[(0,a.createVNode)("i",{id:"register_loader",class:"fa fa-spinner mr-4 animate-spin hidden"}),(0,a.createVNode)("span",{class:""},"Register")])],-1),v=(0,a.createVNode)("img",{src:"/images/login-cover.jpg",class:"hidden md:block absolute left-0 top-0 w-full h-full",alt:"login-cover-photo"},null,-1),N={class:"absolute top-0 right-0 w-auto md:w-full h-full bg-white bg-opacity-75"},k=(0,a.createVNode)("i",{class:"fa text-white md:text-pink-800 fa-globe"},null,-1),j=(0,a.createVNode)("i",{class:"fab fa-facebook-f text-white md:text-blue-500"},null,-1),_=(0,a.createVNode)("i",{class:"fab fa-medium-m text-white md:text-black"},null,-1),S=(0,a.createVNode)("i",{class:"fab fa-linkedin text-white md:text-blue-900"},null,-1),O=(0,a.createVNode)("i",{class:"fab fa-github text-white md:text-black"},null,-1),C=(0,a.createVNode)("i",{class:"fa fa-arrow-left text-white"},null,-1),I={class:"hidden md:block relative mx-auto text-center text-gray-600"},P=(0,a.createVNode)("div",{"data-aos":"fade-up","data-aos-duration":"700",class:"text-xl p-8"}," Submit your login credentials to gain access to future opportunities ",-1);var T=r(894);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const U={data:function(){return{Input:{login:{email:null,password:null},register:{name:null,email:null,password:null}},form_toggle:!1,form_toggle_text:"Register"}},computed:F(F({},(0,T.rn)(["feedbackMessages","feedbackStyle"])),{},{formSelector:function(){return this.form_toggle?"right-0 md:right-2/5":"right-0"},loginFormSelector:function(){return this.form_toggle?"md:right-1/5":"md:right-3/5"},registerFormSelector:function(){return this.form_toggle?"right-0":"-right-full md:right-1/5"},formBGColor:function(){return this.form_toggle?"bg-green-400":"bg-blue-400"},formTextColor:function(){return this.form_toggle?"text-green-400":"text-blue-400"}}),methods:F(F({},(0,T.nv)(["loginUser","registerUser","redirectAuthenticated"])),{},{toggleForm:function(e){this.form_toggle=!this.form_toggle,window.innerWidth>767&&("Register"==this.form_toggle_text?this.form_toggle_text="Login":this.form_toggle_text="Register")}}),created:function(){this.redirectAuthenticated({intended:"/"})},render:function(e,t,r,T,D,F){var M=(0,a.resolveComponent)("inertia-link");return(0,a.openBlock)(),(0,a.createBlock)("div",o,[(0,a.createVNode)("div",l,[(0,a.createVNode)("div",i,[(0,a.createVNode)("div",s,[(0,a.createVNode)("form",{onSubmit:t[3]||(t[3]=(0,a.withModifiers)((function(t){return e.loginUser({login:D.Input.login})}),["prevent"])),class:[F.loginFormSelector,"bg-white absolute w-full md:w-2/5 h-full py-6 px-8 transition-all duration-700"],method:"POST"},[n,(0,a.createVNode)("div",d,[u,(0,a.withDirectives)((0,a.createVNode)("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return D.Input.login.email=e}),class:"p-3 text-blue-500 focus:ring-blue-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent",required:"",type:"email",autocomplete:"nope",placeholder:"email",id:"login-email"},null,512),[[a.vModelText,D.Input.login.email]])]),(0,a.createVNode)("div",c,[f,(0,a.withDirectives)((0,a.createVNode)("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return D.Input.login.password=e}),class:"p-3 text-blue-500 focus:ring-blue-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent",required:"",type:"password",placeholder:"password",autocomplete:"new-password",id:"login-pass",name:"login-pass"},null,512),[[a.vModelText,D.Input.login.password]])]),(0,a.createVNode)("div",{class:["relative mt-4",{"text-green-500":e.feedbackStyle.login.success,"text-red-500":e.feedbackStyle.login.error}],id:"registration-feedback"},(0,a.toDisplayString)(e.feedbackMessages.login),3),g],34),(0,a.createVNode)("form",{onSubmit:t[7]||(t[7]=(0,a.withModifiers)((function(t){return e.registerUser({register:D.Input.register})}),["prevent"])),class:[F.registerFormSelector,"bg-white absolute h-full w-full md:w-2/5 py-6 px-8 transition-all duration-700"],method:"post"},[m,(0,a.createVNode)("div",p,[b,(0,a.withDirectives)((0,a.createVNode)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return D.Input.register.name=e}),class:"p-3 text-green-500 focus:ring-green-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent",placeholder:"name",type:"text",id:"register-name",required:""},null,512),[[a.vModelText,D.Input.register.name]])]),(0,a.createVNode)("div",w,[h,(0,a.withDirectives)((0,a.createVNode)("input",{"onUpdate:modelValue":t[5]||(t[5]=function(e){return D.Input.register.email=e}),class:"p-3 text-green-500 focus:ring-green-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent",placeholder:"email",type:"email",name:"email",id:"register-email",required:""},null,512),[[a.vModelText,D.Input.register.email]])]),(0,a.createVNode)("div",x,[V,(0,a.withDirectives)((0,a.createVNode)("input",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return D.Input.register.password=e}),class:"p-3 text-green-500 focus:ring-green-300 w-full rounded-full outline-none border-0 focus: shadow-xl bg-transparent",placeholder:"password",type:"password",id:"register-pass",autocomplete:"new-password",required:""},null,512),[[a.vModelText,D.Input.register.password]])]),(0,a.createVNode)("div",{class:["relative mt-4",{"text-green-500":e.feedbackStyle.register.success,"text-red-500":e.feedbackStyle.register.error}],id:"registration-feedback"},(0,a.toDisplayString)(e.feedbackMessages.register),3),y],34),(0,a.createVNode)("div",{class:[F.formSelector,"absolute h-full w-auto md:w-3/5 transition-all duration-700"]},[v,(0,a.createVNode)("div",N,[(0,a.createVNode)("div",{class:[F.formBGColor,"absolute md:bg-white md:relative top-0 text-pink-800 right-0 h-full md:h-auto w-auto md:w-full flex flex-col md:flex-row justify-center md:justify-between px-2 md:px-6 md:py-5 text-2xl"]},[(0,a.createVNode)(M,{"data-aos":"fade-down","data-aos-duration":"300",href:"/",title:"Home",class:"flex mb-4 md:mb-0 justify-center items-center"},{default:(0,a.withCtx)((function(){return[k]})),_:1}),(0,a.createVNode)(M,{"data-aos":"fade-down","data-aos-duration":"350",href:"/",title:"Home",class:"flex mb-4 md:mb-0 justify-center items-center"},{default:(0,a.withCtx)((function(){return[j]})),_:1}),(0,a.createVNode)(M,{"data-aos":"fade-down","data-aos-duration":"400",href:"/",title:"Home",class:"flex mb-4 md:mb-0 justify-center items-center"},{default:(0,a.withCtx)((function(){return[_]})),_:1}),(0,a.createVNode)(M,{"data-aos":"fade-down","data-aos-duration":"450",href:"/",title:"Home",class:"flex mb-4 md:mb-0 justify-center items-center"},{default:(0,a.withCtx)((function(){return[S]})),_:1}),(0,a.createVNode)(M,{"data-aos":"fade-down","data-aos-duration":"500",href:"/",title:"Home",class:"flex mb-4 md:mb-0 justify-center items-center"},{default:(0,a.withCtx)((function(){return[O]})),_:1}),(0,a.createVNode)("span",{onClick:t[8]||(t[8]=function(){return F.toggleForm&&F.toggleForm.apply(F,arguments)}),class:"md:hidden flex mb-4 md:mb-0 justify-center items-center"},[C])],2),(0,a.createVNode)("div",I,[(0,a.createVNode)("div",{class:[F.formTextColor,"text-2xl uppercase font-bold pt-16 p-4"]}," Welcome to Career Strive ",2),P,(0,a.createVNode)("button",{onClick:t[9]||(t[9]=function(){return F.toggleForm&&F.toggleForm.apply(F,arguments)}),class:[F.formBGColor,"relative inline-block text-white shadow text-xl px-8 py-3 rounded-xl"]},(0,a.toDisplayString)(D.form_toggle_text),3)])])],2)])])])])}},q=U}}]);
//# sourceMappingURL=552.js.map
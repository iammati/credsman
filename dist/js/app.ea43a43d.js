(function(e){function t(t){for(var r,a,l=t[0],i=t[1],s=t[2],m=0,d=[];m<l.length;m++)a=l[m],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var i=n[l];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/dist/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0580":function(e,t,n){},"3a75":function(e,t,n){},4307:function(e,t,n){"use strict";n("c429")},5256:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("82a2"),n("d24d"),n("a60f"),n("7dbc"),n("ac7a"),n("44e7"),n("33ac"),n("aebf"),n("a3e1"),n("ce0b"),n("4cd9");function r(){Array.from(document.querySelectorAll("form input")).map((function(e){e.onkeyup=function(e){e.target.value.length>0?!e.target.classList.contains("active")&&e.target.classList.add("active"):e.target.classList.contains("active")&&e.target.classList.remove("active")}}))}var c=n("683a"),o=Object(c["createElementVNode"])("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),a=Object(c["createElementVNode"])("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),l=Object(c["createElementVNode"])("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",rel:"stylesheet"},null,-1),i={id:"content"};function s(e,t,n,r,s,u){var m=Object(c["resolveComponent"])("Navbar"),d=Object(c["resolveComponent"])("Dashboard"),b=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[o,a,l,Object(c["createVNode"])(m),Object(c["createElementVNode"])("main",null,[Object(c["createVNode"])(d),Object(c["createElementVNode"])("section",i,[Object(c["createVNode"])(b)])])],64)}var u={id:"header"},m={class:"logo"};function d(e,t,n,r,o,a){var l=Object(c["resolveComponent"])("Logo"),i=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",u,[Object(c["createVNode"])(i,{to:"/"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",m,[Object(c["createVNode"])(l,{subline:"Credentials Manager"})])]})),_:1})])}var b=function(e){return Object(c["pushScopeId"])("data-v-66b08e3b"),e=e(),Object(c["popScopeId"])(),e},p=b((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-users"},null,-1)}));function f(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[p,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(n.subline),1)],64)}var j={props:{subline:String}},O=(n("4307"),n("85dd")),v=n.n(O);const h=v()(j,[["render",f],["__scopeId","data-v-66b08e3b"]]);var N=h,E={name:"Navbar",components:{Logo:N}};n("d16f");const y=v()(E,[["render",d]]);var g=y,V={id:"nav"},w={class:"waves-effect waves-light"},k=Object(c["createElementVNode"])("i",{class:"fas fa-home me-2"},null,-1),B=Object(c["createElementVNode"])("span",null,"Home",-1);function x(e,t,n,r,o,a){var l=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("section",V,[Object(c["createElementVNode"])("nav",null,[Object(c["createElementVNode"])("ul",null,[Object(c["createElementVNode"])("li",w,[Object(c["createVNode"])(l,{to:"/"},{default:Object(c["withCtx"])((function(){return[k,B]})),_:1})])])])])}var C=n("e3de"),S=n.n(C),D={name:"Dashboard",data:function(){return{routerData:{status:"unknown",warning:"none"}}},mounted:function(){S.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:10})}};n("b606");const _=v()(D,[["render",x]]);var R=_,P={name:"App",components:{Navbar:g,Dashboard:R}};n("edaf");const T=v()(P,[["render",s]]);var L=T,q=n("1208"),I=function(e){return Object(c["pushScopeId"])("data-v-5b239d18"),e=e(),Object(c["popScopeId"])(),e},A={class:"home"},$=I((function(){return Object(c["createElementVNode"])("h3",{class:"mb-0"}," Credsman ",-1)})),F=I((function(){return Object(c["createElementVNode"])("p",null,[Object(c["createElementVNode"])("i",null,"– the better credentials manager")],-1)})),K=I((function(){return Object(c["createElementVNode"])("hr",null,null,-1)})),M={class:"row"},J={class:"col-12"},H={class:"table-responsive"},U={class:"table table-striped table-hover table-sm"},Y=I((function(){return Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",{scope:"col"},"#"),Object(c["createElementVNode"])("th",{scope:"col"},"Name"),Object(c["createElementVNode"])("th",{scope:"col"},"Last modified"),Object(c["createElementVNode"])("th",{scope:"col"}),Object(c["createElementVNode"])("th",{scope:"col"},"Actions")])],-1)})),z={scope:"row"},X=I((function(){return Object(c["createElementVNode"])("caption",null,[Object(c["createElementVNode"])("i",null," List of projects. ")],-1)})),G={class:"row text-end"},Q={class:"col"},W=I((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-plus me-2"},null,-1)})),Z=I((function(){return Object(c["createElementVNode"])("span",null,"Create new project",-1)}));function ee(e,t,n,r,o,a){var l=Object(c["resolveComponent"])("ProjectRow"),i=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",A,[$,F,K,Object(c["createElementVNode"])("div",M,[Object(c["createElementVNode"])("div",J,[Object(c["createElementVNode"])("div",H,[Object(c["createElementVNode"])("table",U,[Y,Object(c["createElementVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.items,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("tr",{key:t},[Object(c["createElementVNode"])("th",z,Object(c["toDisplayString"])(t+1),1),Object(c["createVNode"])(l,{data:e},null,8,["data"])])})),128))]),X])])])]),Object(c["createElementVNode"])("div",G,[Object(c["createElementVNode"])("div",Q,[Object(c["createVNode"])(i,{to:"/create",class:"btn btn-primary waves-effect m-0"},{default:Object(c["withCtx"])((function(){return[W,Z]})),_:1})])])])}var te=n("1b4e"),ne=(n("833b"),function(e){return Object(c["pushScopeId"])("data-v-233cd574"),e=e(),Object(c["popScopeId"])(),e}),re=ne((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-lg fa-list"},null,-1)})),ce=[re],oe=ne((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-lg fa-trash"},null,-1)})),ae=[oe];function le(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.data.path),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.data.last_modified),1),Object(c["createElementVNode"])("td",null,Object(c["toDisplayString"])(n.data.status),1),Object(c["createElementVNode"])("td",null,[Object(c["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(e){return a.details({data:n.data})}),class:"btn btn-primary waves-effect"},ce),Object(c["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(e){return a.deleteProject({data:n.data})}),class:"btn btn-danger waves-effect"},ae)])],64)}n("2bde"),n("8436"),n("a4c0"),n("347e");var ie={protocol:"https",host:"credsman.ddev.site",port:8080};function se(){return ue.apply(this,arguments)}function ue(){return ue=Object(te["a"])(regeneratorRuntime.mark((function e(){var t,n,r,c,o,a,l=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=l.length<=0?void 0:l[0],c=null!==(t=l.length<=1?void 0:l[1])&&void 0!==t?t:[],o=null!==(n=l.length<=2?void 0:l[2])&&void 0!==n?n:"POST",a="".concat(ie.protocol,"://").concat(ie.host,"/api/").concat(r,".php"),!(Object.keys(c).length>0)){e.next=8;break}return e.next=7,fetch(a,{method:o,body:JSON.stringify(c)});case 7:return e.abrupt("return",e.sent);case 8:return e.next=10,fetch(a);case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}var me={props:{data:Object},methods:{api:se,details:function(){var e=Object(te["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object(c["toRaw"])(t.data),this.$router.push({path:"/projects/".concat(t.path),params:{name:t.path}});case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),deleteProject:function(){var e=Object(te["a"])(regeneratorRuntime.mark((function e(t){var n,r,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object(c["toRaw"])(t.data),n=t.path,r=S.a.mixin({toast:!0,position:"top-end",showConfirmButton:!0,timer:1e4,timerProgressBar:!0}),r.fire({title:'Do you really want to delete "'.concat(n,'" project?'),focusCancel:!0,showCancelButton:!0,confirmButtonText:"Confirm"}).then((function(e){var t=S.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3,timerProgressBar:!0});e.isConfirmed?se("delete_project",{projectName:n}).then((function(e){if(e.text().then((function(e){if("PROJECT_NAME_DOES_NOT_EXIST"===e)return t.fire({icon:"error",title:'The project "'.concat(n,'" does no longer exist!')})})),200!==e.status)return t.fire({icon:"error",title:'Deleting "'.concat(n,'" project failed! Please contact your admin!')});t.fire({icon:"info",title:"Project ".concat(n," has been deleted.")}),o.$router.push("/create"),setTimeout((function(){return o.$router.push("/")}),1)})):e.isConfirmed&&S.a.fire("Cancel","","info")}));case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}};n("b8e2");const de=v()(me,[["render",le],["__scopeId","data-v-233cd574"]]);var be=de,pe={components:{ProjectRow:be},data:function(){return{items:null}},mounted:function(){var e=this;return Object(te["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se("list_projects");case 2:return n=t.sent,t.next=5,n.json();case 5:e.items=t.sent;case 6:case"end":return t.stop()}}),t)})))()}};n("dac3");const fe=v()(pe,[["render",ee],["__scopeId","data-v-5b239d18"]]);var je=fe,Oe={class:"create"},ve=Object(c["createStaticVNode"])('<h3 class="text-underline"> Create new project </h3><hr class="my-5"><div class="row"><div class="col-12 col-lg-4"><form id="create-project"><div class="form-outline mb-4"><input type="text" id="projectName" class="form-control"><label class="form-label" for="projectName">Project name</label></div><div class="text-center"><button type="submit" class="btn btn-primary btn-block waves-effect w-auto"><i class="fas fa-plus me-2"></i><span>Create new project</span></button></div></form></div></div>',3),he=[ve];function Ne(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",Oe,he)}var Ee={mounted:function(){var e=this;document.querySelector("form#create-project").onsubmit=function(t){t.preventDefault();var n=document.querySelector("input#projectName").value,r=S.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3,timerProgressBar:!0});if(0===n.length)return r.fire({icon:"error",title:'"Project name"-field is mandatory!'});se("create_project",{projectName:n}).then((function(t){if(t.text().then((function(e){if("PROJECT_NAME_ALREADY_IN_USE"===e)return r.fire({icon:"error",title:'The project name "'.concat(n,'" is already in use!')})})),200!==t.status)return r.fire({icon:"error",title:'Creating "'.concat(n,'" project failed! Please contact your admin!')});r.fire({icon:"success",title:'Project "'.concat(n,'" has been created')}),e.$router.push({path:"/projects/".concat(n)})}))}}};const ye=v()(Ee,[["render",Ne]]);var ge=ye,Ve=function(e){return Object(c["pushScopeId"])("data-v-9da9af5c"),e=e(),Object(c["popScopeId"])(),e},we={class:"create"},ke=Ve((function(){return Object(c["createElementVNode"])("h3",{class:"text-underline"}," Create new credential ",-1)})),Be=Ve((function(){return Object(c["createElementVNode"])("hr",{class:"my-5"},null,-1)})),xe={class:"row"},Ce={class:"col-12 col-lg-4"},Se={id:"create-credential"},De={class:"form-outline mb-4"},_e={id:"projectName",class:"form-control active"},Re=Ve((function(){return Object(c["createElementVNode"])("label",{class:"form-label",for:"projectName"},"Project name",-1)})),Pe=Ve((function(){return Object(c["createElementVNode"])("div",{class:"form-outline mb-4"},[Object(c["createElementVNode"])("input",{id:"credentialName",class:"form-control"}),Object(c["createElementVNode"])("label",{class:"form-label",for:"credentialName"},"Credential name")],-1)})),Te={key:0,id:"datas",class:"form-outline mb-4"},Le=Ve((function(){return Object(c["createElementVNode"])("input",{class:"form-control",placeholder:"Key"},null,-1)})),qe=Ve((function(){return Object(c["createElementVNode"])("input",{class:"form-control",placeholder:"Value"},null,-1)})),Ie={class:"input-group-text"},Ae=Ve((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-trash"},null,-1)})),$e=[Ae],Fe={class:"form-outline mb-4"},Ke=Ve((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-plus me-2"},null,-1)})),Me=Ve((function(){return Object(c["createElementVNode"])("span",null,"Add datas",-1)})),Je=[Ke,Me],He=Ve((function(){return Object(c["createElementVNode"])("div",{class:"text-center"},[Object(c["createElementVNode"])("button",{type:"submit",class:"btn btn-primary btn-block waves-effect w-auto"},[Object(c["createElementVNode"])("i",{class:"fas fa-plus me-2"}),Object(c["createElementVNode"])("span",null,"Create new credential")])],-1)}));function Ue(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",we,[ke,Be,Object(c["createElementVNode"])("div",xe,[Object(c["createElementVNode"])("div",Ce,[Object(c["createElementVNode"])("form",Se,[Object(c["createElementVNode"])("div",De,[Object(c["createElementVNode"])("select",_e,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.projects,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("option",{key:t},Object(c["toDisplayString"])(e.path),1)})),128))]),Re]),Pe,o.datas?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",Te,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.datas,(function(e){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:e,class:"form-outline input-group mb-4"},[Le,qe,Object(c["createElementVNode"])("span",Ie,[Object(c["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(e){return a.removeDatas()}),class:"btn btn-danger waves-effect m-0"},$e)])])})),128))])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",Fe,[Object(c["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(e){return a.createDatas()}),class:"btn btn-primary btn-block waves-effect w-auto",type:"button"},Je)]),He])])])])}var Ye={data:function(){return{datas:0,projects:[]}},methods:{createDatas:function(){this.datas=this.datas+1,setTimeout((function(){return r()}),0)},removeDatas:function(){this.datas=this.datas-1}},mounted:function(){var e=this;return Object(te["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se("list_projects");case 2:return n=t.sent,t.next=5,n.json();case 5:e.projects=t.sent,document.querySelector("form#create-credential").onsubmit=function(){var e=Object(te["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),n=[],r=document.querySelector("select#projectName").value,Array.from(document.querySelectorAll("#datas .form-outline")).map((function(e){var t=[e.querySelector("input:nth-child(1)"),e.querySelector("input:nth-child(2)")],r=t[0],c=t[1];n.push({key:r.value,value:c.value})})),e.next=6,se("create_credential",{projectName:r,datas:n});case 6:return c=e.sent,e.next=9,c.json();case 9:o=e.sent,console.log(o);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();case 7:case"end":return t.stop()}}),t)})))()}};n("a7ec");const ze=v()(Ye,[["render",Ue],["__scopeId","data-v-9da9af5c"]]);var Xe=ze,Ge=function(e){return Object(c["pushScopeId"])("data-v-574f3842"),e=e(),Object(c["popScopeId"])(),e},Qe={class:"create"},We=Ge((function(){return Object(c["createElementVNode"])("h3",{class:"text-underline"}," Create new environment ",-1)})),Ze=Ge((function(){return Object(c["createElementVNode"])("hr",{class:"my-5"},null,-1)})),et={class:"row"},tt={class:"col-12 col-lg-4"},nt={id:"create-environment"},rt={class:"form-outline mb-4"},ct={id:"projectName",class:"form-control active"},ot={disabled:"",selected:""},at=Ge((function(){return Object(c["createElementVNode"])("label",{class:"form-label",for:"projectName"},"Project name",-1)})),lt=Object(c["createStaticVNode"])('<div class="form-outline mb-4" data-v-574f3842><input id="name" class="form-control" data-v-574f3842><label class="form-label" for="name" data-v-574f3842>Name</label></div><div class="form-outline mb-4" data-v-574f3842><input id="environment" class="form-control" data-v-574f3842><label class="form-label" for="environment" data-v-574f3842>Environment</label></div>',2),it={class:"text-center"},st=Ge((function(){return Object(c["createElementVNode"])("span",null,"Back to list",-1)})),ut=Ge((function(){return Object(c["createElementVNode"])("button",{type:"submit",class:"btn btn-primary btn-block waves-effect w-auto"},[Object(c["createElementVNode"])("i",{class:"fas fa-plus me-2"}),Object(c["createElementVNode"])("span",null,"Create new environment")],-1)}));function mt(e,t,n,r,o,a){var l=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",Qe,[We,Ze,Object(c["createElementVNode"])("div",et,[Object(c["createElementVNode"])("div",tt,[Object(c["createElementVNode"])("form",nt,[Object(c["createElementVNode"])("div",rt,[Object(c["createElementVNode"])("select",ct,[Object(c["createElementVNode"])("option",ot,Object(c["toDisplayString"])(e.$route.params.projectName),1)]),at]),lt,Object(c["createElementVNode"])("div",it,[Object(c["createVNode"])(l,{to:"/projects/".concat(e.$route.params.projectName),type:"button",class:"btn btn-info btn-block waves-effect w-auto"},{default:Object(c["withCtx"])((function(){return[st]})),_:1},8,["to"]),ut])])])])])}var dt={data:function(){return{datas:0,projects:[]}},mounted:function(){var e=this;r(),Object(te["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se("list_projects");case 2:return n=t.sent,t.next=5,n.json();case 5:e.projects=t.sent;case 6:case"end":return t.stop()}}),t)})))(),document.querySelector("form#create-environment").onsubmit=function(t){t.preventDefault();var n=[document.querySelector("select#projectName").value,document.querySelector("input#name").value,document.querySelector("input#environment").value],r=S.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3,timerProgressBar:!0});Object(te["a"])(regeneratorRuntime.mark((function t(){var c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,se("create_environment",{projectName:n[0],name:n[1],environment:n[2]});case 2:return c=t.sent,t.next=5,c.text();case 5:if(o=t.sent,"PROJECT_SUCCESSFULLY_CREATED_ENVIRONMENT"!==o){t.next=9;break}return r.fire({icon:"success",title:'New environment "'.concat(n[2],'" has been created.')}),t.abrupt("return",e.$router.push({path:"/projects/".concat(n[0])}));case 9:r.fire({icon:"error",title:"An error occurred. Please contact your admin!"});case 10:case"end":return t.stop()}}),t)})))()}}};n("c154");const bt=v()(dt,[["render",mt],["__scopeId","data-v-574f3842"]]);var pt=bt,ft={class:"project"},jt={class:"text-underline"},Ot={class:"mt-4"},vt={class:"row text-end"},ht={class:"col mb-4"},Nt=["onClick"],Et=Object(c["createElementVNode"])("i",{class:"fas fa-trash me-2"},null,-1),yt=Object(c["createElementVNode"])("span",null,"Delete",-1),gt=[Et,yt],Vt={key:1},wt=Object(c["createElementVNode"])("caption",null," List of environments from this project. ",-1),kt={class:"row text-end"},Bt={class:"col"},xt=Object(c["createElementVNode"])("span",null,"Back to list",-1),Ct=Object(c["createElementVNode"])("i",{class:"fas fa-plus me-2"},null,-1),St=Object(c["createElementVNode"])("span",null,"Create new environment",-1);function Dt(e,t,n,r,o,a){var l=Object(c["resolveComponent"])("EnvironmentRow"),i=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",ft,[Object(c["createElementVNode"])("h3",jt,Object(c["toDisplayString"])(e.$route.params.projectName),1),Object(c["createElementVNode"])("div",Ot,[o.items&&o.items.length>0?(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],{key:0},Object(c["renderList"])(o.items,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"accordion mb-3",key:t},[Object(c["createVNode"])(l,{data:{item:e,uniqueDataKeys:o.uniqueDataKeys}},null,8,["data"]),Object(c["createElementVNode"])("div",vt,[Object(c["createElementVNode"])("div",ht,[Object(c["createElementVNode"])("button",{onClick:function(t){return a.deleteEnvironment(e)},type:"button",class:"btn btn-danger waves-effect"},gt,8,Nt)])])])})),128)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",Vt," It seems like this project got no credentials yet... "))]),wt,Object(c["createElementVNode"])("div",kt,[Object(c["createElementVNode"])("div",Bt,[Object(c["createVNode"])(i,{to:"/",class:"btn btn-info waves-effect m-0 me-2"},{default:Object(c["withCtx"])((function(){return[xt]})),_:1}),Object(c["createVNode"])(i,{to:"/create-environment/".concat(e.$route.params.projectName),class:"btn btn-primary waves-effect m-0"},{default:Object(c["withCtx"])((function(){return[Ct,St]})),_:1},8,["to"])])])])}n("bda7");var _t=function(e){return Object(c["pushScopeId"])("data-v-622c0f5a"),e=e(),Object(c["popScopeId"])(),e},Rt={class:"heading"},Pt={class:"ms-2 badge badge-info"},Tt=_t((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-chevron-down"},null,-1)})),Lt={class:"body"},qt={class:"table-responsive"},It={scope:"col"},At={class:"table-striped"},$t=_t((function(){return Object(c["createElementVNode"])("th",null,null,-1)}));function Ft(e,t,n,r,o,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createElementVNode"])("div",Rt,[Object(c["createElementVNode"])("span",null,[Object(c["createElementVNode"])("b",null,Object(c["toDisplayString"])(n.data.item.name),1)]),Object(c["createElementVNode"])("span",Pt," Environment: "+Object(c["toDisplayString"])(n.data.item.envName),1),Tt]),Object(c["createElementVNode"])("div",Lt,[Object(c["createElementVNode"])("div",qt,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n.data.item.datas,(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("table",{key:t,class:"table table-striped table-hover table-sm"},[Object(c["createElementVNode"])("thead",null,[Object(c["createElementVNode"])("tr",null,[Object(c["createElementVNode"])("th",It,[Object(c["createElementVNode"])("b",null,Object(c["toDisplayString"])(e.name),1)]),(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.uniqueKeys(e),(function(e,t){return Object(c["openBlock"])(),Object(c["createElementBlock"])("th",{key:t},[Object(c["createElementVNode"])("b",null,Object(c["toDisplayString"])(e.label),1)])})),128))])]),Object(c["createElementVNode"])("tbody",At,[Object(c["createElementVNode"])("tr",null,[$t,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(a.uniqueKeys(e),(function(t,n){return Object(c["openBlock"])(),Object(c["createElementBlock"])("th",{key:n},Object(c["toDisplayString"])(e[t.key]),1)})),128))])])])})),128))])])],64)}n("91ce"),n("f90c"),n("5a03");var Kt=n("3c89"),Mt=n("b404"),Jt=Object(Kt["a"])((function e(t,n){return Object(Mt["a"])(this,e),new Promise((function(e){t.style.removeProperty("display");var r=window.getComputedStyle(t).display;"none"===r&&(r="block"),t.style.display=r;var c=t.offsetHeight;t.style.overflow="hidden",["height","paddingTop","paddingBottom","marginTop","marginBottom"].forEach((function(e){return t.style[e]=0})),t.offsetHeight,t.style.transitionTimingFunction="cubic-bezier(1, -.5, .25, 1.467)",t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=n+"ms",t.style.height=c+"px",["padding-top","padding-bottom","margin-top","margin-bottom"].forEach((function(e){return t.style.removeProperty(e)})),window.setTimeout((function(){return["height","overflow","transition-duration","transition-property"].forEach((function(e){return t.style.removeProperty(e)}))}),n),e(!1)}))})),Ht=Object(Kt["a"])((function e(t,n){return Object(Mt["a"])(this,e),new Promise((function(e){t.style.height=t.offsetHeight+"px",t.style.transitionTimingFunction="cubic-bezier(1, -.5, .25, 1.467)",t.style.transitionProperty="height, margin, padding",t.style.transitionDuration=n+"ms",t.offsetHeight,t.style.overflow="hidden",["height","paddingTop","paddingBottom","marginTop","marginBottom"].forEach((function(e){return t.style[e]=0})),window.setTimeout((function(){t.style.display="none",["height","padding-top","padding-bottom","margin-bottom","overflow","transition-duration","transition-property"].forEach((function(e){return t.style.removeProperty(e)})),e(!1)}),n)}))})),Ut=Object(Kt["a"])((function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:467;return Object(Mt["a"])(this,e),"none"===window.getComputedStyle(t).display?new Jt(t,n):new Ht(t,n)})),Yt={props:{data:Object},methods:{ucfirst:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},uniqueKeys:function(e){var t=this;e=Object.keys(Object(c["toRaw"])(e));var n=[];return e.forEach((function(r){if("name"===r)return!1;n.push({key:r,label:t.ucfirst(r),missingLengths:4-e.length})})),n}},mounted:function(){var e=Object(te["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=S.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0}),Array.from(document.querySelectorAll(".heading")).map((function(e){e.onclick=function(e){e.preventDefault(),e.currentTarget.parentNode.classList.toggle("active"),new Ut(e.currentTarget.parentNode.querySelector(".body"))}})),Array.from(document.querySelectorAll("table tbody tr th")).map((function(e){if(0===e.textContent.length)return!1;e.onclick=function(e){e.preventDefault();var n=e.currentTarget.textContent.trim();navigator.clipboard.writeText(n).then((function(){t.fire({icon:"success",title:'Copied "'.concat(n,'" into your clipboard!')})}))}}));case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()};n("7ea7");const zt=v()(Yt,[["render",Ft],["__scopeId","data-v-622c0f5a"]]);var Xt=zt,Gt={components:{EnvironmentRow:Xt},data:function(){return{arr:"XD",items:null,uniqueDataKeys:null}},mounted:function(){var e=this,t=this.$route.params,n=t.projectName;se("details_project",{projectName:n}).then(function(){var t=Object(te["a"])(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.json();case 2:r=t.sent,e.items=r.items,e.uniqueDataKeys=r.uniqueDataKeys;case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},methods:{editEnvironment:function(e,t){e=Object(c["toRaw"])(e),this.$router.push({path:"/edit/environment/".concat(this.$route.params.projectName,"/").concat(t)})},deleteEnvironment:function(){var e=Object(te["a"])(regeneratorRuntime.mark((function e(t){var n,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object(c["toRaw"])(t),n=S.a.mixin({toast:!0,position:"top-end",showConfirmButton:!0,timer:1e4,timerProgressBar:!0}),n.fire({title:'Do you really want to delete "'.concat(t.envName,'" environment?'),focusCancel:!0,showCancelButton:!0,confirmButtonText:"Confirm"}).then(function(){var e=Object(te["a"])(regeneratorRuntime.mark((function e(n){var c,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.isConfirmed){e.next=2;break}return e.abrupt("return",!1);case 2:return e.next=4,se("delete_environment",{projectName:r.$route.params.projectName,name:t.envName});case 4:return c=e.sent,o=S.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0}),e.next=8,c.text();case 8:if(a=e.sent,"PROJECT_ENVIRONMENT_SUCCESSFULLY_DELETED"!==a){e.next=12;break}return se("details_project",{projectName:r.$route.params.projectName}).then(function(){var e=Object(te["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:n=e.sent,r.items=n.items,r.uniqueDataKeys=n.uniqueDataKeys;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",o.fire({icon:"success",title:'Deleted environment "'.concat(t.envName,'"')}));case 12:o.fire({icon:"error",title:"An error occurred. Please contact your admin!"});case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}};n("713d");const Qt=v()(Gt,[["render",Dt]]);var Wt=Qt,Zt=function(e){return Object(c["pushScopeId"])("data-v-d4235544"),e=e(),Object(c["popScopeId"])(),e},en={class:"create"},tn=Zt((function(){return Object(c["createElementVNode"])("h3",{class:"text-underline"}," Edit environment ",-1)})),nn={class:"list-unstyled"},rn=Zt((function(){return Object(c["createElementVNode"])("b",null,"Project name: ",-1)})),cn=Zt((function(){return Object(c["createElementVNode"])("b",null,"Environment: ",-1)})),on=Zt((function(){return Object(c["createElementVNode"])("hr",{class:"my-5"},null,-1)})),an={class:"row"},ln={class:"col-12 col-lg-4"},sn={id:"edit-environment"},un={key:0,id:"datas",class:"form-outline mb-4"},mn=Zt((function(){return Object(c["createElementVNode"])("p",null,[Object(c["createElementVNode"])("b",null," Datas ")],-1)})),dn=["value"],bn=["value"],pn={class:"input-group-text"},fn=Zt((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-trash"},null,-1)})),jn=[fn],On={class:"text-center"},vn=Zt((function(){return Object(c["createElementVNode"])("span",null,"Back to list",-1)})),hn=Zt((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-plus me-2"},null,-1)})),Nn=Zt((function(){return Object(c["createElementVNode"])("span",null,"Create new data",-1)})),En=[hn,Nn],yn=Zt((function(){return Object(c["createElementVNode"])("i",{class:"fas fa-save me-2"},null,-1)})),gn=Zt((function(){return Object(c["createElementVNode"])("span",null,"Save",-1)})),Vn=[yn,gn];function wn(e,t,n,r,o,a){var l=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",en,[tn,Object(c["createElementVNode"])("ul",nn,[Object(c["createElementVNode"])("li",null,[rn,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(this.$route.params.projectName),1)]),Object(c["createElementVNode"])("li",null,[cn,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(this.$route.params.envName),1)])]),on,Object(c["createElementVNode"])("div",an,[Object(c["createElementVNode"])("div",ln,[Object(c["createElementVNode"])("form",sn,[o.datas?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",un,[mn,(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(o.datas,(function(n,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:r,style:{"margin-bottom":"24px"}},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(n,(function(n,r){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:r,class:"form-outline input-group mb-2"},[Object(c["createElementVNode"])("input",{class:"form-control",placeholder:"Key",value:"".concat(r)},null,8,dn),Object(c["createElementVNode"])("input",{class:"form-control",placeholder:"Value",value:"".concat(n)},null,8,bn),Object(c["createElementVNode"])("span",pn,[Object(c["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(t){return e.removeDatas()}),class:"btn btn-danger waves-effect m-0"},jn)])])})),128))])})),128))])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",On,[Object(c["createVNode"])(l,{to:"/projects/".concat(e.$route.params.projectName),type:"button",class:"btn btn-info btn-block waves-effect w-auto"},{default:Object(c["withCtx"])((function(){return[vn]})),_:1},8,["to"]),Object(c["createElementVNode"])("button",{onClick:t[1]||(t[1]=function(e){return a.createDatas()}),type:"button",class:"btn btn-primary btn-block waves-effect w-auto"},En),Object(c["createElementVNode"])("button",{onClick:t[2]||(t[2]=function(t){return e.saveDatas()}),type:"button",class:"btn btn-success btn-block waves-effect w-auto"},Vn)])])])])])}var kn={data:function(){return{datas:0,projects:[]}},mounted:function(){var e=this;return Object(te["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r(),document.querySelector("#edit-environment").onsubmit=function(e){e.preventDefault()},t.next=4,se("details_project",{projectName:e.$route.params.projectName});case 4:return n=t.sent,t.next=7,n.json();case 7:c=t.sent,c.items.forEach((function(t){if(t.envName!==e.$route.params.envName)return!1;e.datas=t.datas}));case 9:case"end":return t.stop()}}),t)})))()},methods:{createDatas:function(){this.datas.push({name:""})}}};n("f6d6");const Bn=v()(kn,[["render",wn],["__scopeId","data-v-d4235544"]]);var xn=Bn,Cn=n("1367"),Sn=n.n(Cn),Dn=[{path:"/",name:"Home",component:je},{path:"/create",name:"Create",component:ge},{path:"/create-environment/:projectName",name:"Create-Environment",component:pt,props:!0},{path:"/create-credential",name:"Create-Credential",component:Xe},{path:"/projects/:projectName",name:"Project",component:Wt,props:!0},{path:"/edit/environment/:projectName/:envName",name:"Edit-Environment",component:xn,props:!0}],_n=Object(q["a"])({history:Object(q["b"])("/dist/"),routes:Dn});_n.afterEach((function(){Sn.a.init(),window.addEventListener("load",(function(){r()}))}));var Rn=_n;Object(c["createApp"])(L).use(Rn).mount("#app")},"713d":function(e,t,n){"use strict";n("3a75")},7363:function(e,t,n){},"7ea7":function(e,t,n){"use strict";n("8533")},8533:function(e,t,n){},"9e2a":function(e,t,n){},a230:function(e,t,n){},a7ec:function(e,t,n){"use strict";n("ff89")},b606:function(e,t,n){"use strict";n("9e2a")},b8e2:function(e,t,n){"use strict";n("e104")},bb5c:function(e,t,n){},c154:function(e,t,n){"use strict";n("7363")},c429:function(e,t,n){},d16f:function(e,t,n){"use strict";n("a230")},dac3:function(e,t,n){"use strict";n("0580")},e104:function(e,t,n){},edaf:function(e,t,n){"use strict";n("bb5c")},f6d6:function(e,t,n){"use strict";n("5256")},ff89:function(e,t,n){}});
//# sourceMappingURL=app.ea43a43d.js.map
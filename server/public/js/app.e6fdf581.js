(function(e){function t(t){for(var n,o,i=t[0],u=t[1],c=t[2],p=0,d=[];p<i.length;p++)o=i[p],a[o]&&d.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"052a":function(e,t,r){},"25a1":function(e,t,r){"use strict";var n=r("63e0"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o={name:"App"},i=o,u=r("2877"),c=Object(u["a"])(i,a,s,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,p=r("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container text-center"},[n("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:r("cf05")}}),n("div",{staticClass:"new-user"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",placeholder:"Type your email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Type your password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("br"),n("button",{staticClass:"btn btn-primary",on:{click:e.create_user}},[e._v("Sing-up")])])])},f=[],m=(r("96cf"),r("3040")),v=r("c93e"),h=r("c665"),g=r("aa9a"),w=r("bc3a"),b=r.n(w),x="api/users/",y="api/users/register",_="api/users/login",P=function(){function e(){Object(h["a"])(this,e)}return Object(g["a"])(e,null,[{key:"get_users",value:function(){return new Promise(function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(x);case 3:n=e.sent,a=n.data,t(a.map(function(e){return Object(v["a"])({},e)})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t,r){return e.apply(this,arguments)}}())}},{key:"new_user",value:function(e,t){return b.a.post(y,{email:e,password:t})}},{key:"load_user",value:function(e,t){return b.a.post(_,{email:e,password:t})}}]),e}(),O=P,j={data:function(){return{users:[],email:"",password:"",error:""}},methods:{create_user:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.new_user(this.email,this.password);case 2:return e.next=4,O.get_users();case 4:this.users=e.sent;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},k=j,C=(r("d2d8"),Object(u["a"])(k,d,f,!1,null,"ae79c5aa",null));C.options.__file="register.vue";var R=C.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Latest Posts")]),r("div",{staticClass:"create-post"},[r("label",{attrs:{for:"create-post"}},[e._v("Say something...")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Create a new post"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),r("button",{on:{click:e.createPost}},[e._v("Send")])]),r("hr"),e.error?r("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),r("div",{staticClass:"post-container"},e._l(e.posts,function(t,n){return r("div",{key:t._id,staticClass:"post",attrs:{item:t,index:n},on:{dblclick:function(r){e.deletePost(t._id)}}},[r("p",{staticClass:"text"},[e._v(e._s(t.text))])])}))])},$=[],N="api/posts/",T=function(){function e(){Object(h["a"])(this,e)}return Object(g["a"])(e,null,[{key:"getPosts",value:function(){return new Promise(function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(N);case 3:n=e.sent,a=n.data,t(a.map(function(e){return Object(v["a"])({},e,{createdAt:new Date(e.createdAt)})})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t,r){return e.apply(this,arguments)}}())}},{key:"insertPost",value:function(e){return b.a.post(N,{text:e})}},{key:"deletePost",value:function(e){return b.a.delete("".concat(N).concat(e))}}]),e}(),A=T,E={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.getPosts();case 3:this.posts=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}(),methods:{createPost:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.insertPost(this.text);case 2:return e.next=4,A.getPosts();case 4:this.posts=e.sent;case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),deletePost:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.deletePost(t);case 2:return e.next=4,A.getPosts();case 4:this.posts=e.sent;case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}},M=E,J=(r("25a1"),Object(u["a"])(M,S,$,!1,null,"80b99676",null));J.options.__file="PostComponent.vue";var L=J.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container text-center"},[n("img",{staticClass:"logo",attrs:{alt:"Vue logo",src:r("cf05")}}),n("div",{staticClass:"login-user"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"email",placeholder:"type your email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],attrs:{type:"password",placeholder:"type your password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),n("br"),n("button",{staticClass:"btn btn-primary",on:{click:e.load_user}},[e._v("Login")])])])},D=[],q={name:"login",data:function(){return{user:{email:"",password:""}}},methods:{load_user:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O.load_user(this.user.email,this.user.password);case 2:return e.next=4,O.get_users();case 4:this.users=e.sent,alert("voce esta logado!");case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}},z=q,B=(r("be7d"),Object(u["a"])(z,V,D,!1,null,"e28833da",null));B.options.__file="login.vue";var F=B.exports;n["a"].use(p["a"]);var G=new p["a"]({mode:"history",routes:[{path:"*",redirect:"/login"},{path:"/register",component:R},{path:"/login",component:F},{path:"/",component:L}]}),H=G,I=r("9f7b");r("f9e3"),r("2dd8");n["a"].use(I["a"]),n["a"].config.productionTip=!1,new n["a"]({router:H,render:function(e){return e(l)}}).$mount("#app")},"63e0":function(e,t,r){},be7d:function(e,t,r){"use strict";var n=r("fb22"),a=r.n(n);a.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.6f9a2e78.png"},d2d8:function(e,t,r){"use strict";var n=r("052a"),a=r.n(n);a.a},fb22:function(e,t,r){}});
//# sourceMappingURL=app.e6fdf581.js.map
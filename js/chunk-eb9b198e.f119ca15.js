(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eb9b198e"],{"676a":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"outer"},[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"dropdown"},[e("DropMenu",{ref:"dropMenu"})],1),e("div",{staticClass:"signin-form"},[e("form",{staticClass:"mt-3"},[e("h2",[t._v("登入")]),e("p",{staticClass:"hint-text d-sm-block d-none"},[t._v("Sign in with your social media account")]),e("div",{staticClass:"social-btn text-center d-sm-block d-none"},[e("router-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/login",title:"Facebook"}},[e("i",{staticClass:"fab fa-facebook-f mt-2"})]),e("router-link",{staticClass:"btn btn-info btn-lg",attrs:{to:"/login",title:"Twitter"}},[e("i",{staticClass:"fab fa-twitter mt-2"})]),e("router-link",{staticClass:"btn btn-danger btn-lg",attrs:{to:"/login",title:"Google"}},[e("i",{staticClass:"fab fa-google mt-2"})])],1),t._m(0),e("div",{staticClass:"form-group px-3 px-sm-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control input-lg",class:{"is-invalid":t.errors.has("username")},attrs:{type:"text",name:"username",autofocus:"",placeholder:"帳號"},domProps:{value:t.user.username},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.login()},input:function(a){a.target.composing||t.$set(t.user,"username",a.target.value)}}})]),e("div",{staticClass:"form-group px-3 px-sm-0"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control input-lg",class:{"is-invalid":t.errors.has("password")},attrs:{type:"password",name:"password",placeholder:"密碼"},domProps:{value:t.user.password},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.login()},input:function(a){a.target.composing||t.$set(t.user,"password",a.target.value)}}})]),e("div",{staticClass:"form-group px-3"},[e("button",{staticClass:"btn btn-success btn-lg btn-block signup-btn",on:{click:function(a){return a.preventDefault(),t.login()}}},[t._v("登入")])]),e("div",{staticClass:"text-center small"},[e("router-link",{attrs:{to:"/login"}},[t._v("忘記密碼?")]),e("router-link",{staticClass:"ml-2",attrs:{to:"/login"}},[t._v("沒有帳號?")])],1)]),e("div",{staticClass:"text-center small d-sm-block d-none"},[t._v("\n        沒有帳號?\n        "),e("router-link",{attrs:{to:"/login"}},[t._v("註冊")])],1)])],1)])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"or-seperator d-sm-block d-none"},[e("b",[t._v("or")])])}],i=e("cebc"),r=e("1157"),o=e.n(r),l=e("debb"),d=e("2f62"),c={data:function(){return{user:{username:"",password:""}}},methods:{login:function(){var t=this,a=this;a.$store.dispatch("updateLoading",!0);var e="".concat("https://vue-course-api.hexschool.io","/admin/signin");this.$validator.validate().then(function(s){a.$store.dispatch("updateLoading",!0),s?t.$http.post(e,a.user).then(function(e){e.data.success?(t.$router.push("/admin/products"),a.$store.dispatch("updateLoading",!1)):(alert("登入失敗"),a.$store.dispatch("updateLoading",!1))}):a.$store.dispatch("updateLoading",!1)})}},created:function(){o()(".navbar-nav").css("marginRight","60px")},computed:Object(i["a"])({},Object(d["c"])(["isLoading"])),components:{DropMenu:l["a"]}},u=c,p=(e("8f70"),e("2877")),m=Object(p["a"])(u,s,n,!1,null,"5834121a",null);a["default"]=m.exports},8143:function(t,a,e){},"8f70":function(t,a,e){"use strict";var s=e("9b8f"),n=e.n(s);n.a},"9b8f":function(t,a,e){},debb:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("button",{staticClass:"btn btn-sm btn-cart drop",attrs:{"data-toggle":"dropdown","data-flip":"false"},on:{click:function(a){return a.preventDefault(),t.getCartList()}}},[e("i",{staticClass:"fa fa-shopping-cart text-muted fa-2x",attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.cartlist.length))]),e("span",{staticClass:"sr-only"},[t._v("unread messages")])]),e("div",{staticClass:"dropdown-menu dropdown-menu-right p-3",staticStyle:{"min-width":"300px"},attrs:{"data-offset":"400"}},[e("h6",[t._v("已選擇商品")]),e("table",{staticClass:"table table-sm"},t._l(t.cartlist,function(a,s){return e("tbody",{key:s},[t.cartlist?e("tr",[e("td",{staticClass:"align-middle text-center"},[e("a",{staticClass:"text-muted",attrs:{href:"#"},on:{click:function(e){return t.removeModal(a)}}},[e("i",{staticClass:"far fa-trash-alt"})])]),e("td",{staticClass:"align-middle"},[e("router-link",{attrs:{to:{path:"product/"+a.product.id}}},[t._v(t._s(a.product.title))])],1),e("td",{staticClass:"align-middle"},[t._v(t._s(a.qty)+" "+t._s(a.product.unit))]),e("td",{staticClass:"align-middle text-right"},[t._v("$"+t._s(a.final_total))])]):t._e()])}),0),e("hr"),e("div",{staticClass:"d-flex justify-content-between font-weight-bold"},[t._v("\n      總金額\n      "),e("span",[t._v("$"+t._s(t.finalTotal))])]),e("hr"),e("router-link",{staticClass:"btn btn-primary btn-block",attrs:{to:"/checkout"}},[e("i",{staticClass:"fa fa-cart-plus",attrs:{"aria-hidden":"true"}}),t._v(" 結帳去\n    ")])],1),e("div",{ref:"removeModal",staticClass:"modal fade",attrs:{id:"removeModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.delCartProduct()}}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0),e("div",{staticClass:"modal-body"},[e("p",[t._v("\n            確認刪除\n            "),t.tempDel.product?e("span",{staticClass:"text-success"},[t._v(t._s(t.tempDel.product.title))]):t._e(),t._v("商品 ?\n          ")])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",class:{disabled:t.status.del},attrs:{type:"button","data-dismiss":"modal"}},[t._v("否")]),e("button",{staticClass:"btn btn-outline-danger px-5",class:{disabled:t.status.del},attrs:{type:"button"},on:{click:function(a){return t.delCartProduct()}}},[t._v("\n            確認\n            "),t.status.del?e("i",{staticClass:"fas fa-spinner fa-spin pl-2 ml-1"}):t._e()])])])])])])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title"},[t._v("刪除商品")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(e("96cf"),e("3b8d")),r=e("cebc"),o=e("1157"),l=e.n(o),d=e("2f62"),c={props:["getData"],data:function(){return{tempDel:{},message:""}},methods:Object(r["a"])({removeModal:function(t){this.tempDel=t,l()("#removeModal").modal("show")},delCartProduct:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.delCart(this.tempDel.id);case 2:l()("#removeModal").modal("hide"),this.tempDel={};case 4:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}()},Object(d["b"])("cartModule",["getCartList","delCart"])),created:function(){this.getCartList()},computed:Object(r["a"])({},Object(d["c"])("cartModule",["status","cartlist","finalTotal"]))},u=c,p=(e("f96d"),e("2877")),m=Object(p["a"])(u,s,n,!1,null,null,null);a["a"]=m.exports},f96d:function(t,a,e){"use strict";var s=e("8143"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-eb9b198e.f119ca15.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f7098ca"],{1906:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("section",{staticClass:"row "},[0!=t.cartlist.length?e("div",{staticClass:"col-md-8 col-10 mt-0 mt-md-5 mx-auto"},[0!=t.cartlist.length?e("div",{staticClass:"card d-none d-md-block"},[e("div",{staticClass:"card-header",attrs:{id:"headingOne"}},[e("h6",{staticClass:"mb-0 d-flex align-items-center"},[t._m(0),e("span",{staticClass:"ml-auto mt-2 text-muted",staticStyle:{"font-size":"0.8rem"}},[t._v("共 "+t._s(t.cartlist.length)+"項")]),e("span",{staticClass:"h3 ml-2 mb-0"},[t._v("$"+t._s(t.finalTotal))])])])]):t._e(),0!=t.cartlist.length?e("div",{staticClass:"collapse mt-3",attrs:{id:"collapseOne"}},[e("table",{staticClass:"table table-sm"},[t._m(1),e("tbody",[t._l(t.cartlist,function(a,s){return e("tr",{key:s},[e("td",{staticClass:"align-middle text-center"},[e("a",{staticClass:"text-muted",attrs:{href:"#","data-toggle":"modal"},on:{click:function(e){return e.preventDefault(),t.removeModal(a)}}},[e("i",{staticClass:"fas fa-trash-alt",attrs:{"aria-hidden":"true"}})])]),e("td",{staticClass:"align-middle"},[e("router-link",{attrs:{to:{path:"product/"+a.product.id}}},[t._v(t._s(a.product.title))])],1),e("td",{staticClass:"align-middle"},[t._v(t._s(a.qty)+" "+t._s(a.product.unit))]),e("td",{staticClass:"align-middle"},[t._v(t._s(t._f("currency")(a.product.price)))]),e("td",{staticClass:"align-middle"},[t._v(t._s(t._f("currency")(a.final_total)))])])}),e("tr",[e("td",{staticClass:"text-right font-weight-bold mt-1",attrs:{colspan:"4"}},[t._v("合計")]),e("td",{staticClass:"text-right font-weight-bold"},[e("strong",[t._v("$"+t._s(t.finalTotal))])])])],2)])]):t._e(),e("h5",{staticClass:"d-block d-md-none py-3 mb-2 text-center bg-light"},[t._v("購物車細節")]),e("table",{staticClass:"table table-sm d-table d-md-none"},[e("tbody",[t._l(t.cartlist,function(a,s){return e("tr",{key:s},[e("td",{staticClass:"align-middle text-center",attrs:{width:"30"}},[e("a",{staticClass:"text-muted",attrs:{href:"#","data-toggle":"modal"},on:{click:function(e){return e.preventDefault(),t.removeModal(a)}}},[e("i",{staticClass:"fas fa-trash-alt",attrs:{"aria-hidden":"true"}})])]),e("td",{staticClass:"align-middle",attrs:{width:"60"}},[e("img",{staticClass:"img-fluid img-thumbnail table-mobile-img",attrs:{src:a.product.imageUrl}})]),e("td",{staticClass:"align-middle",attrs:{width:"100"}},[e("router-link",{attrs:{to:{path:"product/"+a.product.id}}},[t._v(t._s(a.product.title))]),e("div",{staticClass:"text-muted",staticStyle:{"font-size":"0.8rem"}},[t._v("\n                數量："+t._s(a.qty)+" "+t._s(a.product.unit)+" "),e("br"),t._v("\n                單價："+t._s(t._f("currency")(a.product.price))+" "),e("br"),t._v("\n                總價："+t._s(t._f("currency")(a.final_total))+" "),e("br")])],1)])}),e("tr",[e("td",{staticClass:"text-right font-weight-bold",attrs:{colspan:"3"}},[e("strong",[t._v(" 合計   $"+t._s(t.finalTotal))])])])],2)]),e("h5",{staticClass:"py-3 mt-5 mb-2 text-center bg-light"},[t._v("訂購人資訊")]),e("form",{attrs:{id:"needs-validation",novalidate:""}},[e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"username"}},[t._v("姓名")]),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.userdata.user.name,expression:"userdata.user.name"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",id:"username",name:"name",placeholder:"姓名"},domProps:{value:t.userdata.user.name},on:{input:function(a){a.target.composing||t.$set(t.userdata.user,"name",a.target.value)}}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.userdata.user.email,expression:"userdata.user.email"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("email")},attrs:{type:"email",id:"email",placeholder:"Email",name:"email"},domProps:{value:t.userdata.user.email},on:{input:function(a){a.target.composing||t.$set(t.userdata.user,"email",a.target.value)}}})])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"tel"}},[t._v("電話")]),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric",expression:"'required|numeric'"},{name:"model",rawName:"v-model",value:t.userdata.user.tel,expression:"userdata.user.tel"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("tel")},attrs:{type:"tel",id:"tel",placeholder:"0912345678",name:"tel"},domProps:{value:t.userdata.user.tel},on:{input:function(a){a.target.composing||t.$set(t.userdata.user,"tel",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"address"}},[t._v("地址")]),e("input",{directives:[{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"},{name:"model",rawName:"v-model",value:t.userdata.user.address,expression:"userdata.user.address"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("address")},attrs:{type:"text",id:"address",placeholder:"彰化縣幸福路520號",name:"address"},domProps:{value:t.userdata.user.address},on:{input:function(a){a.target.composing||t.$set(t.userdata.user,"address",a.target.value)}}})]),e("div",{staticClass:"form-group"},[t._m(2),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userdata.message,expression:"userdata.message"}],staticClass:"form-control",attrs:{id:"message",rows:"3"},domProps:{value:t.userdata.message},on:{input:function(a){a.target.composing||t.$set(t.userdata,"message",a.target.value)}}})]),e("div",{staticClass:"text-right"},[e("router-link",{staticClass:"btn btn-secondary mr-3",attrs:{to:"/products"}},[t._v("繼續選購")]),e("button",{staticClass:"btn btn-primary mr-3",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),t.pay()}}},[t._v("確認付款")])],1)])]):e("div",{staticClass:"col-md-8 mx-auto col-10"},[e("h5",{staticClass:"py-3 mt-2 mt-md-5 mb-2 text-center bg-light"},[t._v("購物車暫無商品")]),e("div",{staticClass:"text-right"},[e("router-link",{staticClass:"btn btn-secondary mt-4",attrs:{to:"/products"}},[t._v("回商店選購")])],1)])]),e("div",{staticClass:"modal fade",attrs:{id:"removeModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(3),e("div",{staticClass:"modal-body"},[t.tempItem.product?e("p",[t._v("確認刪除 "),e("span",{staticClass:"text-success"},[t._v(t._s(t.tempItem.product.title))]),t._v(" ?")]):t._e()]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("否")]),e("button",{staticClass:"btn btn-outline-danger px-5",class:{disabled:t.status.del},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.delItem()}}},[t._v("\n            確認 "),t.status.del?e("i",{staticClass:"fas fa-spinner fa-spin pl-2 ml-1"}):t._e()])])])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{"data-toggle":"collapse",href:"#collapseOne"}},[t._v("\n              顯示購物車細節\n              "),e("i",{staticClass:"fa fa-angle-down",attrs:{"aria-hidden":"true"}})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"80"}}),e("th",[t._v("商品名稱")]),e("th",{attrs:{width:"100"}},[t._v("數量")]),e("th",{attrs:{width:"100"}},[t._v("單價")]),e("th",{attrs:{width:"80"}},[t._v("小計")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",{attrs:{for:"message"}},[t._v("\n              留言\n              "),e("span",{staticClass:"font-italic text-muted ml-1",staticStyle:{"font-size":"13px"}},[t._v("(選填)")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title"},[t._v("刪除商品")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(e("96cf"),e("3b8d")),l=e("cebc"),n=e("1157"),d=e.n(n),o=e("2f62"),c={data:function(){return{tempItem:{}}},methods:Object(l["a"])({removeModal:function(t){d()("#removeModal").modal("show"),this.tempItem=t},delItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.delCart(this.tempItem.id);case 2:d()("#removeModal").modal("hide"),this.tempDel={};case 4:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),pay:function(){var t=this,a=this;a.$validator.validate().then(function(e){e&&(a.$router.push("/checkout/pay"),t.currentStep="pay")})}},Object(o["b"])("cartModule",["getCartList","delCart"])),created:function(){this.getCartList(),this.currentStep="info",d()(".navbar-nav").css("marginRight","0px")},computed:Object(l["a"])({currentStep:{get:function(){return this.$store.state.cartModule.currentStep},set:function(t){this.$store.commit("cartModule/CURRENTSTEP",t,{root:!0})}},userdata:{get:function(){return this.$store.state.cartModule.userdata},set:function(t){this.$store.commit("cartModule/USERDATA",t,{root:!0})}}},Object(o["c"])(["isLoading"]),Object(o["c"])("cartModule",["cartlist","finalTotal","status"]))},u=c,m=(e("6326"),e("2877")),v=Object(m["a"])(u,s,r,!1,null,null,null);a["default"]=v.exports},"456c":function(t,a,e){},6326:function(t,a,e){"use strict";var s=e("456c"),r=e.n(s);r.a}}]);
//# sourceMappingURL=chunk-5f7098ca.43ecb87a.js.map
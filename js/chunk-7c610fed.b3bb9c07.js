(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c610fed"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getCurrentPage(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._l(t.pagination.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page==e}},[a("a",{staticClass:"page-link",on:{click:function(a){return a.preventDefault(),t.getCurrentPage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getCurrentPage(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)])])},i=[],r={props:["pagination"],methods:{getCurrentPage:function(t){this.$emit("getCurrentPage",{page:t})}}},n=r,o=(a("6bef"),a("2877")),c=Object(o["a"])(n,s,i,!1,null,"7e0bfff9",null);e["a"]=c.exports},2296:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("h3",{staticClass:"font-weight-bold"},[t._v("訂單管理")]),a("div",{staticClass:"mr-auto"},[a("div",{staticClass:"d-flex align-items-center justify-content-end"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.select,expression:"select"}],staticClass:"form-control",staticStyle:{width:"150px","border-radius":"0.25rem 0 0 0.25rem"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.select=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("--篩選條件--")]),a("option",{attrs:{value:"ID"}},[t._v("訂單編號")]),a("option",{attrs:{value:"name"}},[t._v("購買人")]),a("option",{attrs:{value:"email"}},[t._v("E-mail")])]),a("div",{staticClass:"input-group position-relative",staticStyle:{width:"300px","border-radius":"0 0.25rem 0.25rem 0"}},[t._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchItem,expression:"searchItem"}],staticClass:"form-control",staticStyle:{"padding-left":"31px"},attrs:{type:"text",id:"Search",placeholder:"開始搜尋"},domProps:{value:t.searchItem},on:{input:function(e){e.target.composing||(t.searchItem=e.target.value)}}})])])]),a("table",{staticClass:"table mt-4"},[t._m(1),a("tbody",t._l(t.filterList,function(e,s){return a("tr",{key:s},[a("td",[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getProduct(e.id)}}},[t._v(t._s(e.id))])]),a("td",[t._v(t._s(t._f("date")(e.create_at)))]),a("td",[t._v(t._s(e.user.name))]),a("td",[t._v(t._s(e.user.email))]),a("td",[t._v(t._s(t._f("currency")(e.total)))]),a("td",{class:{"text-success":e.is_paid}},[e.is_paid?a("span",{staticClass:"font-weight-bold"},[t._v("已付款")]):a("span",{staticClass:"text-danger"},[t._v("尚未付款")])])])}),0)]),t.status.pagination?a("Pagination",{attrs:{pagination:t.pagination},on:{getCurrentPage:t.getOrderList}}):t._e(),a("div",{ref:"ProductModal",staticClass:"modal fade",attrs:{id:"ProductModal",tabindex:"-1",role:"dialog","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),t.tempProduct.user?a("div",{staticClass:"modal-body"},[a("div",{staticClass:"font-weight-bold text-center mb-3"},[t._v("\n            訂單編號："+t._s(t.tempProduct.id)+"\n            "),t.status.edit?t._e():[a("button",{staticClass:"btn btn-info btn-sm ml-3",on:{click:function(e){t.status.edit=!0}}},[t._v("編輯")])],t.status.edit?[a("button",{staticClass:"btn btn-secondary btn-sm ml-3",class:{disabled:t.status.updateUser},on:{click:function(e){t.status.edit=!1,t.editProduct=JSON.parse(JSON.stringify(t.tempProduct))}}},[t._v("取消")]),a("button",{staticClass:"btn btn-success btn-sm ml-3",class:{disabled:t.status.updateUser},on:{click:function(e){return t.updateUser()}}},[t._v("\n                確認\n                "),t.status.updateUser?a("i",{staticClass:"fas fa-spinner fa-spin ml-1"}):t._e()])]:t._e()],2),a("h5",{staticClass:"py-2 mb-2 text-center bg-light font-weight-bold"},[t._v("🎈 訂購人")]),t.status.edit?t._e():a("div",{staticClass:"row ml-3"},[a("span",{staticClass:"font-weight-bold"},[t._v("姓名：")]),t._v(" "+t._s(t.tempProduct.user.name)+"\n            "),a("div",{staticClass:"w-100"}),a("span",{staticClass:"font-weight-bold"},[t._v("電話：")]),t._v(t._s(t.tempProduct.user.tel)+"\n            "),a("div",{staticClass:"w-100"}),a("span",{staticClass:"font-weight-bold"},[t._v("email：")]),t._v(t._s(t.tempProduct.user.email)+"\n            "),a("div",{staticClass:"w-100"}),a("span",{staticClass:"font-weight-bold"},[t._v("住址：")]),t._v(t._s(t.tempProduct.user.address)+"\n            "),a("div",{staticClass:"w-100"}),a("span",{staticClass:"font-weight-bold"},[t._v("留言：")]),t._v(t._s(t.tempProduct.message)+"\n          ")]),t.status.edit?a("div",{staticClass:"row ml-3"},[a("div",{staticClass:"form-group d-flex align-items-center "},[a("label",{staticStyle:{width:"71px"},attrs:{for:"name"}},[t._v("姓名：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProduct.user.name,expression:"editProduct.user.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:t.editProduct.user.name},on:{input:function(e){e.target.composing||t.$set(t.editProduct.user,"name",e.target.value)}}})]),a("div",{staticClass:"form-group d-flex align-items-center"},[a("label",{staticStyle:{width:"71px"},attrs:{for:"tel"}},[t._v("電話：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProduct.user.tel,expression:"editProduct.user.tel"}],staticClass:"form-control",attrs:{type:"text",id:"tel"},domProps:{value:t.editProduct.user.tel},on:{input:function(e){e.target.composing||t.$set(t.editProduct.user,"tel",e.target.value)}}})]),a("div",{staticClass:"form-group d-flex align-items-center"},[a("label",{staticStyle:{width:"71px"},attrs:{for:"email"}},[t._v("email：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProduct.user.email,expression:"editProduct.user.email"}],staticClass:"form-control",attrs:{type:"text",id:"email"},domProps:{value:t.editProduct.user.email},on:{input:function(e){e.target.composing||t.$set(t.editProduct.user,"email",e.target.value)}}})]),a("div",{staticClass:"form-group d-flex align-items-center"},[a("label",{staticStyle:{width:"71px"},attrs:{for:"address"}},[t._v("地址：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProduct.user.address,expression:"editProduct.user.address"}],staticClass:"form-control",attrs:{type:"text",id:"address"},domProps:{value:t.editProduct.user.address},on:{input:function(e){e.target.composing||t.$set(t.editProduct.user,"address",e.target.value)}}})]),a("div",{staticClass:"form-group d-flex align-items-center"},[a("label",{staticStyle:{width:"71px"},attrs:{for:"message"}},[t._v("留言：")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editProduct.message,expression:"editProduct.message"}],staticClass:"form-control",attrs:{type:"text",id:"message"},domProps:{value:t.editProduct.message},on:{input:function(e){e.target.composing||t.$set(t.editProduct,"message",e.target.value)}}})])]):t._e(),a("h5",{staticClass:"py-2 mt-3 mb-2 text-center bg-light font-weight-bold"},[t._v("📄 訂購商品")]),a("div",{staticClass:"row ml-3"},[a("table",{staticClass:"table mt-1"},[t._m(3),a("tbody",t._l(t.tempProduct.products,function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.product.title))]),a("td",[t._v(t._s(e.qty)+" "+t._s(e.product.unit))]),a("td",[t._v("$ "+t._s(e.product.price))]),a("td",[t._v("$ "+t._s(e.final_total))])])}),0)])])]):t._e(),a("div",{staticClass:"modal-footer"},[t.status.edit?t._e():a("button",{staticClass:"btn btn-success",attrs:{type:"button","data-dismiss":"modal"}},[t._v("確認")])])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon position-absolute",staticStyle:{left:"9px",top:"8px","z-index":"5"}},[a("i",{staticClass:"fas fa-search"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-light"},[a("tr",[a("th",[t._v("訂單編號")]),a("th",[t._v("購買日期 ")]),a("th",[t._v("購買人")]),a("th",[t._v("E-mail")]),a("th",[t._v("金額")]),a("th",[t._v("是否付款")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header text-light bg-success"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("\n            訂單詳細資訊\n          ")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("數量")]),a("th",{attrs:{width:"120"}},[t._v("單價")]),a("th",{attrs:{width:"100"}},[t._v("總價")])])])}],r=(a("96cf"),a("3b8d")),n=(a("7f7f"),a("4917"),a("cebc")),o=a("1157"),c=a.n(o),d=a("1799"),l=a("2f62"),u={data:function(){return{searchItem:"",select:"",status:{pagination:!0,edit:!1,updateUser:!1}}},computed:Object(n["a"])({filterList:function(){var t=this,e=t.orderPageList;if(t.status.pagination=!0,""===t.searchItem)return e;switch(t.select){case"name":t.status.pagination=!1,e=t.orderList.filter(function(e,a){return e.user.name.match(t.searchItem)});break;case"ID":t.status.pagination=!1,e=t.orderList.filter(function(e,a){return e.id.match(t.searchItem)});break;case"email":t.status.pagination=!1,e=t.orderList.filter(function(e,a){return e.user.email.match(t.searchItem)});break}return e},editProduct:{get:function(){return this.$store.state.productsModule.editProduct},set:function(t){this.$store.commit("productsModule/EDITPRODUCT",t,{root:!0})}}},Object(l["c"])(["isLoading","pagination"]),Object(l["c"])("productsModule",["tempProduct"]),Object(l["c"])("orderModule",["orderList","orderPageList"])),methods:Object(n["a"])({search:function(){this.searchFilterOrder(this.searchItem)},getProduct:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.searchProduct(e);case 2:c()("#ProductModal").modal("show");case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),updateUser:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,e.status.updateUser=!0,t.next=4,this.updateOrderUser(this.editProduct);case 4:e.status.updateUser=!1,e.status.edit=!1;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),hideEditMode:function(){this.status.edit=!1}},Object(l["b"])("productsModule",["searchProduct"]),Object(l["b"])("orderModule",["getOrderList","searchOrder","updateOrderUser"])),created:function(){this.getOrderList(),this.getOrderList({page:1})},mounted:function(){c()(this.$refs.ProductModal).on("hidden.bs.modal",this.hideEditMode)},components:{Pagination:d["a"]}},m=u,p=(a("fd9e"),a("2877")),v=Object(p["a"])(m,s,i,!1,null,"cca0bdfc",null);e["default"]=v.exports},"6bef":function(t,e,a){"use strict";var s=a("ef8e"),i=a.n(s);i.a},ac57:function(t,e,a){},ef8e:function(t,e,a){},fd9e:function(t,e,a){"use strict";var s=a("ac57"),i=a.n(s);i.a}}]);
//# sourceMappingURL=chunk-7c610fed.b3bb9c07.js.map
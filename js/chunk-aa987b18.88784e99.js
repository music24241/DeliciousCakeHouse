(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa987b18"],{"8f78":function(t,a,s){"use strict";var e=s("fea9"),i=s.n(e);i.a},b7c9:function(t,a,s){},ca24:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("nav",{staticClass:"navbar navbar-light bg-light fixed-top"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:"/admin/products"}},[s("i",{staticClass:"fas fa-paw text-light",attrs:{"aria-hidden":"true"}}),s("span",{staticClass:"text-white ml-1 font-weight-bold"},[t._v("好好吃蛋糕坊")])]),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("a",{staticClass:"nav-link text-white logout",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.logout()}}},[s("i",{staticClass:"fas fa-sign-out-alt mr-1"}),t._v("登出")])])])],1),s("div",{staticClass:"container-fluid",staticStyle:{"margin-top":"50px"}},[s("div",{staticClass:"row mt-2"},[s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky",staticStyle:{"margin-top":"30px"}},[t._m(0),s("ul",{staticClass:"nav flex-column"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[t._v("\n                 🍡 產品管理\n                "),s("span",{staticClass:"sr-only"},[t._v("(current)")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupon"}},[t._v("\n                 🔖 優惠卷管理\n              ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orderlist"}},[t._v("\n                 📝 訂單管理\n              ")])],1)]),t._m(1),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[s("i",{staticClass:"fas fa-angle-double-left mr-1"}),t._v(" 回商場頁面\n              ")])],1)])])]),t._m(2),s("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 pt-4 px-4",attrs:{role:"main"}},[s("router-view")],1)])]),s("Footer")],1)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("後台")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("前台")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{attrs:{href:"#",id:"gotoTop",title:"回到頂端"}},[s("i",{staticClass:"fas fa-arrow-alt-circle-up"})])}],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("footer",{staticClass:"bg-light text-muted py-5 footer"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"list-inline text-center "},[s("li",{staticClass:"list-inline-item"},[s("router-link",{staticClass:"text-center",attrs:{to:"/"}},[t._v("🍬回商場頁面")])],1)]),t._m(0),s("p",{staticClass:"text-center"},[t._v("練習用，無商業用途")]),s("ul",{staticClass:"list-inline text-center "})])])])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"text-center"},[t._v("© Copright 2019 "),s("i",{staticClass:"fas fa-paw text-success pr-2 pl-1",attrs:{"aria-hidden":"true"}}),t._v("Delicious Cake House")])}],r=(s("8f78"),s("2877")),c={},o=Object(r["a"])(c,n,l,!1,null,"2c452450",null),u=o.exports,d={data:function(){return{isLoading:!1}},methods:{logout:function(){var t=this;this.isLoading=!0;var a="".concat("https://vue-course-api.hexschool.io","/logout");this.$http.post(a).then(function(a){t.isLoading=!1,a.data.success&&t.$router.push("/login")})}},components:{Footer:u}},f=d,v=(s("fb1e"),Object(r["a"])(f,e,i,!1,null,"4dd1b4ec",null));a["default"]=v.exports},fb1e:function(t,a,s){"use strict";var e=s("b7c9"),i=s.n(e);i.a},fea9:function(t,a,s){}}]);
//# sourceMappingURL=chunk-aa987b18.88784e99.js.map
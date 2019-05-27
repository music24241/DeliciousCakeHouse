<template>
  <div>
    <div class="dropdown">
      <dropMenu ref="dropMenu"/> <!--dropMenu-->
    </div>

    <div class="container main-contant py-3">
      <h5 class="py-3 mb-2 text-center font-weight-bold">查詢訂單</h5>
      <!-- search start-->
      <div class="form-group d-flex justify-content-center align-items-center ml-auto mr-auto">
        <label for="orderID" class="d-none d-sm-inline">訂單編號：</label>
        <input type="text" class="form-control" id="orderID" v-model="searchItem" style="width:220px" autofocus placeholder="請輸入訂單編號" @keyup.enter="search()">
        <button class="btn btn-primary ml-2" @click.prevent="search()" :class="{'disabled': status.search}">搜尋 <i class="fas fa-spinner fa-spin" v-if="status.search"></i> </button>
      </div>
      <!--search end-->
      <section class="row justify-content-center px-4 px-md-0" v-if="products.length != 0">
        <div class="col-md-10 col-lg-8">
          <h5 class="py-3 mt-3 mb-2 text-center bg-light">訂單資訊</h5>
          <div class="text-center font-weight-bold">
            訂單編號：{{orderID}}
          </div>

          <div class="mt-2 text-success font-weight-bold pt-3" style="border-top:1px solid #64eaa9">
            <i class="far fa-user mr-1"></i> 訂購人
          </div>
          <ul style="list-style:none" class="mt-2 m-0 p-0 userInfo">
            <li>
              <span class="d-inline-block" style="width: 55px;">姓名：</span>{{user.name}}
            </li>
            <li>
              <span class="d-inline-block" style="width: 55px;">Email：</span>{{user.email}}
            </li>
            <li>
              <span class="d-inline-block" style="width: 55px;">電話：</span>{{user.tel}}
            </li>
            <li>
              <span class="d-inline-block" style="width: 55px;">地址：</span>{{user.address}}
            </li>
            <li v-if="order.message">
              <span class="d-inline-block" style="width: 55px;">留言：</span>{{order.message}}
            </li>
          </ul>
          <div class="text-success font-weight-bold mt-3 pt-3" style="border-top:1px solid #64eaa9">
            <i class="fas fa-shopping-cart mr-1"></i>訂購商品明細
          </div>
          <div class="table-responsive">
            <table class="table mt-4">
              <thead>
                <tr>
                  <th width="600">產品名稱</th>
                  <th width="200">數量</th>
                  <th width="200">單價</th>
                  <th width="200">總價</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item,index) in products" :key="index">
                      <td>
                        <router-link :to="{path: 'product/'+item.product.id}">{{item.product.title}}</router-link>
                      </td>
                      <td>{{item.qty}} {{ item.product.unit}}</td>
                      <td >$ {{ item.product.price}}</td>
                      <td >$ {{ item.final_total}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
// import $ from 'jquery'
import DropMenu from '@/components/DropMenu.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      searchItem: '',
      orderID: '',
      order: {},
      products: [],
      user: {},
      status: {
        search: false
      }
    }
  },
  computed: {
    ...mapGetters('orderModule', ['orderInfo'])
  },
  methods: {
    async search () {
      var vm = this
      vm.status.search = true
      await this.getOrderInfo(vm.searchItem.trim())
      vm.status.search = false
      if (vm.orderInfo.id) {
        vm.searchItem = ''
        vm.orderID = vm.orderInfo.id
        vm.order = vm.orderInfo
        vm.products = vm.orderInfo.products
        vm.user = vm.orderInfo.user
      } else {
        vm.searchItem = ''
        vm.order = {}
        vm.products = []
        vm.user = {}
      }
    },
    ...mapActions('orderModule', ['getOrderInfo'])
  },
  // created () {
  //   // $('.navbar-nav').css('marginRight', '60px')
  // },
  components: {
    DropMenu
  }
}
</script>
<style lang="sass">
  .userInfo li
    line-height: 28px
  table
    a:hover
      text-decoration: none
</style>

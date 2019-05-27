<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <div class="dropdown">
      <dropMenu />
    </div>

    <div class="container main-contant mb-1">
      <nav aria-label="breadcrumb" role="navigation">
        <ol class="breadcrumb bg-transparent pl-0">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/products">商品</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-md-4 mb-5">
          <div class="sticky-top" style="top: 60px;">
            <h1 class="h2">
              {{ product.title }}
            </h1>
            <div class="d-flex my-3 align-items-end justify-content-end">
              <del class="text-muted">售價 ${{product.origin_price}}</del>
              <div class="h3 mb-0 ml-auto text-danger">
                <small>網路價 NT$</small>
                <strong>{{product.price}}</strong>
              </div>
            </div>
            <hr>
            <div class="input-group mt-3" v-if="product.is_enable">
              <select name class="form-control mr-1" v-model="qty">
                <option v-for="num in 5" :key="num" :value="num">{{num}} {{product.unit}}</option>
              </select>
              <a href="#" class="btn btn-primary" @click.prevent="addtoCart()">
                <i class="fa fa-cart-plus" aria-hidden="true"></i> 加入購物車
              </a>
            </div>
            <div class="input-group mt-3" v-else>
              <button class="btn btn-secondary disabled">
                敬請期待
              </button>
            </div>

            <div class="mt-2 text-right text-muted">
              <i class="fab fa-cc-visa mr-2" aria-hidden="true" ></i>
              <i class="fab fa-cc-paypal mr-2" aria-hidden="true"></i>
              <i class="fab fa-cc-jcb" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <h2>{{product.title}}</h2>
          <p class="card-text">
            {{product.description}}
          </p>
          <img
            :src="product.imageUrl"
            class="w-100 rounded"
            alt
          >
          <div class="alert alert-secondary mt-4" role="alert">
            <h3 class="text-center font-weight-bold">購物說明</h3>
            <p>請使用本站購物車訂購，實際到貨日會由客服專員於確認訂單後24小時內盡速為您安排並通知。</p>
            <p>服務專線︰(01)2345678</p>
            <p>※提醒您：本商店『不會』主動以電話等方式告知您因誤設分期需至ATM操作修正，也不會請您提供餘額查詢、 交易序號、信用卡等資料，若接獲請與我們確認，或撥打165警政專線求證，以確保權益。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import dropMenu from '@/components/DropMenu.vue'
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      // isLoading: false,
      qty: 1
    }
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('productsModule', ['product'])
  },
  methods: {
    async addtoCart () {
      var vm = this
      let id = vm.product.id
      let qty = vm.qty
      await this.addToCart({ id, qty })
    },
    ...mapActions('productsModule', ['getProductInfo']),
    ...mapActions('cartModule', ['addToCart'])
  },
  async created () {
    let id = this.$route.params.id
    await this.getProductInfo(id)
    $('.navbar-nav').css('marginRight', '60px')
  },
  components: {
    dropMenu
  }
}
</script>

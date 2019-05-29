<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <section class="row mt-4 mt-md-5">
      <div class="col-10 col-md-8 mx-auto">
        <h3 class="text-center text-success" v-if="orderInfo.is_paid">
            <i class="fas fa-check mr-4"></i> 訂購成功
        </h3>
        <h5 class="py-3 mt-4 mt-md-5 mb-2 text-center bg-light"> 訂單資訊</h5>
        <div class="text-center font-weight-bold">訂單編號：
            <span class="orderID position-relative" :data-clipboard-text = "orderID" type="text" @click.prevent="copy()">{{orderID}}
            </span>
            <span class="copy font-weight-light text-muted ml-1 mt-1 position-absolute d-md-inline d-none" style="font-size:13px">{{copyStatus}}</span>
            <br>
            <span class="copy font-weight-light text-muted mt-1 d-md-none d-block" style="font-size:13px">{{copyStatus}}</span>
        </div>

        <div class="mt-2 text-info font-weight-bold pt-3" style="border-top:1px solid #64eaa9">
            <i class="far fa-user mr-1"></i> 訂購人
        </div>
        <ul style="list-style:none" class="mt-2 m-0 p-0">
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
            <li v-if="orderInfo.message">
                <span class="d-inline-block" style="width: 55px;">留言：</span>{{orderInfo.message}}
            </li>
        </ul>
        <div class="text-info font-weight-bold mt-3 pt-3" style="border-top:1px solid #64eaa9">
            <i class="fas fa-shopping-cart mr-1"></i>訂購商品明細
        </div>

        <table class="table mt-4">
            <thead>
                <tr>
                <th width="200">產品名稱</th>
                <th width="120">數量</th>
                <th width="120">單價</th>
                <th width="100">總價</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in products" :key="index">
                    <td>{{item.product.title}}</td>
                    <td>{{item.qty}} {{ item.product.unit}}</td>
                    <td >$ {{ item.product.price}}</td>
                    <td >$ {{ item.final_total}}</td>
                </tr>
            </tbody>
        </table>
        <div class="row d-flex justify-content-end mt-4">
          <router-link class="btn btn-secondary mr-3" to="/products">繼續逛逛</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Clipboard from 'clipboard' // 剪貼簿

export default {
  data () {
    return {
      orderID: '',
      products: {},
      user: {},
      copyStatus: '可複製'
    }
  },
  methods: {
    async getOrder () {
      let vm = this
      await this.getOrderInfo(vm.orderID)
      vm.products = vm.orderInfo.products
      vm.user = vm.orderInfo.user
    },
    copy () {
      let clipboard = new Clipboard('.orderID')
      this.copyStatus = '可複製'
      clipboard.on('success', e => {
        this.copyStatus = '已複製'
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持複製
        alert('該瀏覽器不支持自動複製')
        // 釋放內存
        clipboard.destroy()
      })
    },
    ...mapActions('orderModule', ['getOrderInfo'])
  },
  created () {
    this.orderID = this.$route.params.id
    this.getOrder()
    this.currentStep = 'finish'
    this.userdata = {
      user: {
        name: '',
        email: '',
        address: '',
        tel: ''
      },
      message: ''
    }
  },
  computed: {
    currentStep: {
      get () {
        return this.$store.state.cartModule.currentStep
      },
      set (value) {
        this.$store.commit('cartModule/CURRENTSTEP', value, { root: true })
      }
    },
    userdata: {
      get () {
        return this.$store.state.cartModule.userdata
      },
      set (value) {
        this.$store.commit('cartModule/USERDATA', value, { root: true })
      }
    },
    ...mapGetters(['isLoading']),
    ...mapGetters('orderModule', ['orderInfo'])
  }
}
</script>

<style scoped>
ul li{
    line-height: 30px;
}
.orderID{
    cursor: pointer;
}
.orderID:hover{
    color: cadetblue
}
.copy{
    /* display: none; */
    margin-left:220px;
}
/* .orderID:hover + .copy{
    display: block !important;
} */
</style>

<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <section class="row justify-content-center mt-4 mt-md-5">
      <div class="col-10 col-md-8">
        <h4 class="text-center">總金額：{{ finalTotal }}</h4>
        <h5 class="py-3 mt-4 mt-md-5 mb-2 text-center bg-light">付款</h5>
        <div class="form-row">
          <div class="form-group col-md">
            <label for>姓名</label>
            <input
              type="text"
              class="form-control"
              placeholder="姓名"
              name="name"
              v-validate="'required'"
              :class="{'is-invalid': errors.has('name')}"
            >
          </div>
          <div class="form-group col-md">
            <label for>電話</label>
            <input
              type="text"
              class="form-control"
              placeholder="電話"
              name="tel"
              v-validate="'required|numeric'"
              :class="{'is-invalid': errors.has('tel')}"
            >
          </div>
        </div>

        <div class="row d-flex justify-content-end mt-4">
          <button class="btn btn-secondary mr-3" @click.prevent="backToInfo()">回訂單資料</button>
          <button class="btn btn-outline-primary" @click.prevent="pay()">確認付款</button>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  // props: ['userdata'],
  data () {
    return {
      orderID: '',
      orderTotal: 0
    }
  },
  methods: {
    pay () {
      let vm = this
      vm.$validator.validate().then(async function (result) {
        if (result) {
          // 成立訂單
          await vm.createOrder(vm.userdata)
          vm.orderID = vm.orderInfo.orderId
          // 付款
          const payApi = `${process.env.VUE_APP_API}/api/${
            process.env.VUE_APP_CUSTOM
          }/pay/${vm.orderID}`
          vm.$http.post(payApi).then(response => {
            if (response.data.success) {
              vm.$router.push(`/finish/${vm.orderID}`)
              // vm.$emit('step', vm.currentStep = 'finish')
            } else {
              alert('付款失敗')
            }
          })
        } else {
          // console.log("資料有誤")
        }
      })
    },
    backToInfo () {
      this.$router.push('/checkout')
    },
    ...mapActions('cartModule', ['getCartList', 'delCart']),
    ...mapActions('orderModule', ['createOrder'])
  },
  created () {
    this.getCartList()
    this.currentStep = 'pay'
    // 防止沒有使用者資料直接導到付款頁面
    if (this.userdata.user.name.trim() === '' || this.userdata.user.email.trim() === '' ||
    this.userdata.user.address.trim() === '' || this.userdata.user.tel.trim() === '') {
      this.$router.push(`/checkout`)
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
    ...mapGetters(['isLoading']),
    ...mapGetters('cartModule', ['cartlist', 'finalTotal', 'status', 'userdata']),
    ...mapGetters('orderModule', ['orderInfo'])

  }
}
</script>

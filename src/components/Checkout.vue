<template>
  <div>
    <div class="container main-contant py-3">
      <h2 class="text-center mb-3 mt-3 mb-1 mb-md-3">好好吃蛋糕坊 結帳</h2>
      <section class="form-row align-items-center text-center d-none d-md-flex">
        <div class="col">
          <div class="alert alert-rounded mb-0" role="alert" :class="{'alert-success':currentStep == 'info','alert-light': currentStep!='info'}">1.輸入訂單資料</div>
        </div>
        <div class="col">
          <div class="alert alert-rounded mb-0" role="alert" :class="{'alert-success':currentStep == 'pay','alert-light':currentStep !='pay'}">2.金流付款</div>
        </div>
        <div class="col">
          <div class="alert alert-rounded mb-0" role="alert" :class="{'alert-success':currentStep == 'finish','alert-light':currentStep !='finish'}">3.完成</div>
        </div>
      </section>
      <!-- <router-view :userdata="data"></router-view> -->
      <router-view></router-view>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      // data: {
      //   user: {
      //     name: '',
      //     email: '',
      //     address: '',
      //     tel: ''
      //   },
      //   message: ''
      // }
    }
  },
  computed: {
    ...mapGetters('cartModule', ['currentStep'])
  }
}
</script>

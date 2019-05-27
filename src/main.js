// jshint maxerr:100
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VeeValidate from 'vee-validate'
import zhTWValidation from 'vee-validate/dist/locale/zh_TW'

import 'bootstrap'
import App from './App.vue'
import router from './router'
import currencyFilter from './filters/currency'
import discount from './filters/discount'
import date from './filters/date'
import './bus'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
Vue.component('Loading', Loading)
axios.defaults.withCredentials = true
Vue.filter('currency', currencyFilter)
Vue.filter('discount', discount)
Vue.filter('date', date)

VeeValidate.Validator.localize('zh_TW', zhTWValidation)
Vue.use(VeeValidate, {
  locale: 'zh_TW'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  // 登入授權
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_API}/api/user/check`
    axios.post(api).then((response) => {
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})

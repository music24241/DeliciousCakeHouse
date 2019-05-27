import axios from 'axios'

export default {
  namespaced: 'orderModule',
  state: {
    orderList: [],
    orderPageList: [],
    orderInfo: {}
  },
  mutations: {
    ORDERLIST (state, payload) {
      state.orderList = payload
    },
    ORDERPAGELIST (state, payload) {
      state.orderPageList = payload
    },
    ORDERINFO (state, payload) {
      state.orderInfo = payload
    }
  },
  actions: {
    getOrderList (context, { page = -1 } = {}) {
      context.commit('LOADING', true, { root: true })
      if (page === -1) {
        const api = `${process.env.VUE_APP_API}/api/${
          process.env.VUE_APP_CUSTOM
        }/admin/orders`
        axios.get(api).then(response => {
          context.commit('LOADING', false, { root: true })
          if (response.data.success) {
            context.commit('ORDERLIST', response.data.orders)
          }
        })
      } else {
        const api = `${process.env.VUE_APP_API}/api/${
          process.env.VUE_APP_CUSTOM
        }/admin/orders?page=${page}`
        axios.get(api).then(response => {
          context.commit('LOADING', false, { root: true })
          if (response.data.success) {
            console.log(response.data.pagination)
            context.commit('ORDERPAGELIST', response.data.orders)
            context.commit('PAGINATION', response.data.pagination, { root: true })
          }
        })
      }
    },
    searchFilterOrder (context, searchItem) { // 關鍵字搜尋功能
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOM
      }/admin/orders`
      axios.get(api).then(response => {
        if (response.data.success) {
          let tempList = response.data.orders.filter(function (item, index) {
            if (item.id.match(searchItem)) return true
          })
          context.commit('ORDERLIST', tempList)
        }
      })
    },
    getOrderInfo (context, searchID) { // ID 要全對
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/order/${searchID}`
      return axios.get(api).then(response => {
        // console.log(response)
        if (response.data.order) {
          context.commit('ORDERINFO', response.data.order)
        } else {
          context.commit('ORDERINFO', {})
          alert('查無資料')
        }
      })
    },
    updateOrderUser (context, updateproduct) {
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOM
      }/admin/order/${updateproduct.id}`
      let data = {
        data: {
          user: updateproduct.user,
          message: updateproduct.message
        }
      }
      return axios.put(api, data).then(response => {
        if (response.data.success) {
          alert('更新成功')
          // todo vuex 解決應先抓完 searchProduct 顯示正確消息在關閉編輯模式
          context.dispatch('productsModule/searchProduct', updateproduct.id, { root: true })
          context.dispatch('getOrderList')
          context.dispatch('getOrderList', 1)
        } else {
          alert('更新失敗')
        }
      })
    },
    createOrder (context, userdata) {
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOM
      }/order`
      context.commit('LOADING', true, { root: true })
      return axios.post(api, { data: userdata }).then(response => {
        context.commit('LOADING', false, { root: true })
        if (response.data.success) {
          context.commit('ORDERINFO', response.data)
          // vm.orderID = response.data.orderId
        } else {
          if (response.message) {
            alert(response.data.message)
          } else if (response.messages) {
            alert(response.data.messages)
          }
        }
      })
    }
  },
  getters: {
    orderList: state => state.orderList,
    orderPageList: state => state.orderPageList,
    orderInfo: state => state.orderInfo
  }
}

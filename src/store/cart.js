import axios from 'axios'

export default {
  namespaced: 'cartModule',
  state: {
    cartlist: [],
    finalTotal: 0,
    status: {
      addToCart: '',
      del: false,
      pay: false
    },
    currentStep: 'info',
    userdata: {
      user: {
        name: '',
        email: '',
        address: '',
        tel: ''
      },
      message: ''
    }
  },
  actions: {
    getCartList (context) {
      // context.commit('LOADING', true, { root: true })
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/cart`
      axios.get(api).then(response => {
        // context.commit('LOADING', false, { root: true })
        context.commit('CARTLIST', response.data.data.carts)
        context.commit('FINALTOTAL', response.data.data.final_total)
      })
    },
    addToCart (context, { id, qty = 1 }) {
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOM
      }/cart`
      let cart = {
        data: {
          product_id: id,
          qty: qty
        }
      }
      context.commit('LOADING', true, { root: true })
      context.commit('STATUS_ADDTOCART', id)
      return axios.post(api, cart).then(response => {
        if (response.data.success) {
          context.commit('LOADING', false, { root: true })
          context.dispatch('getCartList')
          context.commit('STATUS_ADDTOCART', '')
        }
      })
    },
    delCart (context, id) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/cart/${id}`
      context.commit('STATUS_DEL', true)
      return axios.delete(api).then(response => {
        context.commit('STATUS_DEL', false)
        context.dispatch('getCartList')
      })
    }
  },
  mutations: {
    CARTLIST (state, payload) {
      state.cartlist = payload
    },
    FINALTOTAL (state, payload) {
      state.finalTotal = payload
    },
    STATUS_ADDTOCART (state, payload) {
      state.status.addToCart = payload
    },
    STATUS_DEL (state, payload) {
      state.status.del = payload
    },
    CURRENTSTEP (state, payload) {
      state.currentStep = payload
    },
    USERDATA (state, payload) {
      state.userdata = payload
    }
  },
  getters: {
    cartlist: state => state.cartlist,
    finalTotal: state => state.finalTotal,
    status: state => state.status,
    currentStep: state => state.currentStep,
    userdata: state => state.userdata
  }
}

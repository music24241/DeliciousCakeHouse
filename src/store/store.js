import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

import productsModule from './products'
import cartModule from './cart'
import orderModule from './order'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    isLoading: false,
    pagination: {}
  },
  mutations: {
    LOADING (state, status) {
      state.isLoading = status
    },
    PAGINATION (state, payload) {
      state.pagination = payload
    },
    STATUS_ADDTOCART (state, payload) {
      state.status.addToCart = payload
    }
  },
  actions: {
    updateLoading (context, status) {
      context.commit('LOADING', status)
    }
  },
  getters: {
    isLoading (state) {
      return state.isLoading
    },
    pagination (state) {
      return state.pagination
    },
    status (state) {
      return state.status
    }
  },
  modules: {
    productsModule,
    cartModule,
    orderModule
  }
})

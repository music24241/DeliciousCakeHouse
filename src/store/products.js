import axios from 'axios'

export default {
  namespaced: 'productsModule',
  state: {
    products: [],
    allProducts: [],
    tempProduct: {},
    editProduct: {},
    product: {}
  },
  actions: {
    getProducts (context, { page = -1, qty = -1 } = {}) {
      let str = page !== -1 ? `?page=${page}` : ''
      let tempProducts = []; let allProducts = []

      context.commit('LOADING', true, { root: true })
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOM
      }/products${str}`

      return axios.get(api).then(response => {
        context.commit('LOADING', false, { root: true })
        context.commit('ALLPRODUCTS', response.data.products)
        allProducts = response.data.products.filter(function (item, index) {
          return item.is_enable === true
        })
        // 是否有數量
        if (qty === -1) context.commit('PRODUCTS', allProducts)
        else {
          for (let i = 0; i < qty; i++) {
            let random = Math.floor(Math.random() * allProducts.length)
            tempProducts.push(allProducts[random])
            allProducts.splice(random, 1)
          }
          context.commit('PRODUCTS', tempProducts)
        }
        // 是否需要分頁
        if (page !== -1) context.commit('PAGINATION', response.data.pagination, { root: true })
      })
    },
    addProduct (context, { data }) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/product`
      return axios.post(api, { data }).then((response) => {
        context.dispatch('getProducts', { page: 1 })
      })
    },
    updateProduct (context, { data }) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/product/${data.id}`
      return axios.put(api, { data }).then((response) => {
        context.dispatch('getProducts', { page: 1 })
      })
    },
    delProduct (context, { data }) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/product/${data.id}`
      return axios.delete(api, { data }).then((response) => {
        context.dispatch('getProducts', { page: 1 })
      })
    },
    searchProduct (context, id) {
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOM
      }/order/${id}`
      context.commit('LOADING', true, { root: true })
      return axios.get(api).then(response => {
        context.commit('LOADING', false, { root: true })
        if (response.data.success) {
          context.commit('TEMPPRODUCT', response.data.order)
          context.commit('EDITPRODUCT', JSON.parse(JSON.stringify(response.data.order)))
        }
      })
    },
    getProductInfo (context, id) {
      context.commit('LOADING', true, { root: true })
      const api = `${process.env.VUE_APP_API}/api/${
        process.env.VUE_APP_CUSTOM
      }/product/${id}`

      return axios.get(api).then(response => {
        context.commit('LOADING', false, { root: true })
        if (response.data.success) {
          context.commit('PRODUCT', response.data.product)
        }
      })
    }
  },
  mutations: {
    PRODUCTS (state, payload) {
      state.products = payload
    },
    ALLPRODUCTS (state, payload) {
      state.allProducts = payload
    },
    TEMPPRODUCT (state, payload) {
      state.tempProduct = payload
    },
    EDITPRODUCT (state, payload) {
      state.editProduct = payload
    },
    PRODUCT (state, payload) {
      state.product = payload
    }
  },
  getters: {
    products: state => state.products,
    allProducts: state => state.allProducts,
    tempProduct: state => state.tempProduct,
    editProduct: state => state.editProduct,
    product: state => state.product
  }
}

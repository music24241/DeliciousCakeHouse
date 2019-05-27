/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Index',
          component: () => import('./views/Index.vue')
        },
        {
          path: '/products',
          name: 'Products',
          component: () => import('./views/Products.vue')
        },
        {
          path: '/product/:id',
          name: 'Product',
          component: () => import('./views/Product.vue')
        },
        {
          path: '/searchOrder',
          name: 'SearchOrder',
          component: () => import('./views/SearchOrder.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('./views/About.vue')
        },
        {
          path: '/',
          name: 'Checkout',
          component: () => import('./components/Checkout.vue'),
          children: [
            {
              path: '/checkout',
              name: 'CheckoutInfo',
              component: () => import('./views/CheckoutInfo.vue')
            },
            {
              path: '/checkout/pay',
              name: 'CheckoutPay',
              component: () => import('./views/CheckoutPay.vue')
            },
            {
              path: '/finish/:id',
              name: 'CheckoutFinish',
              component: () => import('./views/CheckoutFinish.vue'),
              beforeEnter: (to, from, next) => {
                // console.log(to, from, next)
                if (from.name !== 'CheckoutPay') {
                  next({
                    path: '/checkout/pay'
                  })
                } else {
                  next()
                }
              }
            }
          ]
        },
        {
          path: '/login',
          name: 'Login',
          component: () => import('./views/admin/Login.vue')
        }
      ]
    },
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('./components/admin/Dashboard.vue'),
      children: [
        {
          path: '/admin/products',
          name: 'AdminProducts',
          component: () => import('./views/admin/Products.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/admin/coupon',
          name: 'Coupon',
          component: () => import('./views/admin/Coupon.vue'),
          meta: { requiresAuth: true }
        },
        {
          path: '/admin/orderlist',
          name: 'Orderlist',
          component: () => import('./views/admin/Orderlist.vue'),
          meta: { requiresAuth: true }
        }
      ]
    }
  ]
})

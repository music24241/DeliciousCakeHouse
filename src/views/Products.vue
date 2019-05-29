<template>
  <div>
    <div class="dropdown">
      <dropMenu/>
    </div>

    <loading :active.sync="isLoading"></loading>

    <div class="jumbotron jumbotron-fluid jumbotron-bg d-flex align-items-end jumbotron-img">
      <div class="container">
        <div class="p-3 bg-lighter"></div>
      </div>
    </div>
    <div class="container main-contant mb-1">
      <div class="row px-4 px-md-0">
        <div class="col-lg-3 col-md-4">
          <div class="sticky-top" style="top:56px">
            <div class="list-group list-group-flush">
              <span class="font-weight-bold p-2">產品分類</span>
              <a
                class="list-group-item list-group-item-action active"
                data-toggle="list"
                href="#"
                @click.prevent="currentPage ='全部',status.filter=false"
              >
                🍥 全部
                <span class="badge badge-info badge-pill border">{{count.all}}</span>
              </a>
              <a
                class="list-group-item list-group-item-action"
                data-toggle="list"
                href="#"
                @click.prevent="currentPage ='精緻蛋糕',status.filter=true "
              >
                🍰 精緻蛋糕
                <span class="badge badge-info badge-pill border">{{count.delicate}}</span>
              </a>
              <a
                class="list-group-item list-group-item-action"
                data-toggle="list"
                href="#"
                @click.prevent="currentPage ='生日蛋糕',status.filter=true"
              >
                🎂 生日蛋糕
                <span class="badge badge-info badge-pill border">{{count.birthday}}</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                data-toggle="list"
                @click.prevent="currentPage ='餅乾',status.filter=true"
              >
                🍪 餅乾
                <span class="badge badge-info badge-pill border">{{count.cookie}}</span>
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                data-toggle="list"
                @click.prevent="currentPage ='麵包',status.filter=true"
              >
                🍞 麵包
                <span class="badge badge-info badge-pill border">{{count.bread}}</span>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-8">
          <h5 class="py-3 text-center bg-light font-weight-bold">商品列表</h5>
          <!-- 主要商品列表 (Card) -->
          <div class="tab-content mt-4">
            <div class="tab-pane active" id="list-gold">
              <div class="row">
                <!-- 商品 -->
                <template v-for="(item,key) in filterProducts">
                  <div class="col-lg-4 col-md-6 mb-4" :key="key">
                    <!--ProductCard start-->
                    <ProductCard :item="item"/>
                    <!--ProductCard end-->
                  </div>
                  <!--col-md-4-->
                </template>
              </div>
            </div>
          </div>
          <!--tab-content-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropMenu from '@/components/DropMenu.vue'
import ProductCard from '@/components/ProductCard.vue'
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      currentPage: '全部',
      status: {
        filter: false
      },
      count: {
        all: 0,
        delicate: 0,
        birthday: 0,
        cookie: 0,
        bread: 0
      }
    }
  },
  methods: {
    countNumber () { // todo 數字顯示錯誤
      let vm = this
      vm.count.all = vm.products.length
      for (let i = 0; i < vm.products.length; i++) {
        switch (vm.products[i].category) {
          case '精緻蛋糕':
            vm.count.delicate++
            break
          case '生日蛋糕':
            vm.count.birthday++
            break
          case '餅乾':
            vm.count.cookie++
            break
          case '麵包':
            vm.count.bread++
            break
        }
      }
    },
    ...mapActions('productsModule', ['getProducts'])
  },
  computed: {
    filterProducts () {
      let vm = this
      if (vm.currentPage === '全部') {
        return vm.products
      } else {
        return vm.products.filter(function (item, index) {
          if (item.category === vm.currentPage) return true
        })
      }
    },
    ...mapGetters(['isLoading', 'pagination']),
    ...mapGetters('productsModule', ['products'])
  },
  async created () {
    $('.navbar').addClass('fixed-top')
    $('.navbar-nav').css('marginRight', '60px')
    await this.getProducts()
    this.countNumber()
  },
  components: {
    DropMenu,
    ProductCard
  }
}
</script>

<style scoped>
.jumbotron-img {
  background-image: url("../../public/images/deva-williamson-1264336-unsplash.jpg");
  background-repeat: no-repeat;
  background-position: center 44%;
  background-size: cover;
  height: 250px;
}
.list-group-item.active {
  z-index: 2;
  color: #28a745;
  background-color: transparent;
  border-color: transparent;
}
</style>

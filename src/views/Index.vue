<template>
  <div>
    <div class="dropdown">
      <dropMenu/>
      <!--dropMenu-->
    </div>

    <loading :active.sync="isLoading"></loading>

    <div class="container mb-1">
      <div class="row pt-4 mainSection">
        <div class="col-md-5 offset-md-1 d-none d-md-block" style="height:300px">
          <!--slider start-->
          <slider ref="slider" :options="options">
            <slideritem
              v-for="(item,index) in sliderPages"
              :key="index"
              :style="item.style"
              style="border-radius:10px;backgroundRepeat:no-repeat;backgroundSize: cover;cursor:pointer"
            >{{item.html}}</slideritem>
            <div slot="loading">載入中...</div>
          </slider>
          <!--slider end-->
        </div>
        <div class="col-md-5 col">
          <!--news start-->
          <h5 class="py-3 text-center bg-light font-weight-bold">🥞 最新消息</h5>
          <ul class="list-group list-group-flush news">
            <li
              class="list-group-item"
              v-for="(item,index) in news"
              :key="index"
              :class="{'border-top-0': index === 0}"
            >
              <div class="d-flex align-items-center">
                <i class="fas fa-caret-right mr-1"></i>
                {{item.title}}
                <span
                  class="ml-auto text-muted align-self-end"
                  style="font-size:12px"
                >{{item.date}}</span>
              </div>
            </li>
          </ul>
          <div class="text-right d-md-none d-block py-1">
            <router-link to="/" style="text-decoration: none">看更多...</router-link>
          </div>
          <!--news end-->
        </div>
      </div>

      <div class="row mt-2 mt-md-4">
        <div class="col-md-10 offset-md-1 mt-0 mt-md-4">
          <h5 class="py-3 text-center bg-light font-weight-bold">🍨 精選商品</h5>
          <!-- 主要商品列表 (Card) -->
          <div class="tab-content mt-4">
            <div class="tab-pane active" id="list-gold">
              <div class="row">
                <!-- 商品 -->
                <template v-for="(item,key) in products">
                  <div class="col-md-4 mb-4" :key="key">
                    <!--ProductCard start-->
                    <!-- <ProductCard :item="item"  v-on:addToCart="addToCart" :status="status.addToCart"/> -->
                    <ProductCard :item="item"/>
                    <!--ProductCard end-->
                  </div>
                  <!--col-md-4 end-->
                </template>
              </div>
            </div>
          </div>
          <!--tab-content end-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropMenu from '@/components/DropMenu.vue'
import { slider, slideritem } from 'vue-concise-slider'
import ProductCard from '@/components/ProductCard.vue'
import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      // products: [],
      // tempProducts: [],
      // isLoading: false,
      // indexProducts: [],
      // status: {
      //   addToCart: ''
      // },
      news: [
        {
          title: '更多甜蜜組合即將上市',
          date: new Date().toLocaleDateString()
        },
        {
          title: '歡慶開幕',
          date: new Date().toLocaleDateString()
        },
        {
          title: 'Morbi leo risus',
          date: new Date().toLocaleDateString()
        },
        {
          title: 'Porta ac consectetur ac',
          date: new Date().toLocaleDateString()
        },
        {
          title: 'Vestibulum at eros',
          date: new Date().toLocaleDateString()
        },
        {
          title: 'Cras justo odio',
          date: new Date().toLocaleDateString()
        },
        {
          title: 'Porta ac consectetur ac',
          date: new Date().toLocaleDateString()
        },
        {
          title: 'Porta ac consectetur ac',
          date: new Date().toLocaleDateString()
        },
        {
          title: 'Porta ac consectetur ac',
          date: new Date().toLocaleDateString()
        }
      ],
      sliderPages: [
        {
          style: {
            background:
              'url(https://images.unsplash.com/photo-1475855841503-917d97ca77b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
            backgroundPosition: 'center 60%',
            backgroundSize: 'cover'
          }
        },
        {
          style: {
            background:
              'url(https://images.unsplash.com/photo-1519869491916-8ca6f615d6bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
            backgroundPosition: '40% center',
            backgroundSize: 'cover'
          }
        },
        {
          style: {
            background:
              'url(https://images.unsplash.com/photo-1511772455886-b8d0a6690ee9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
            backgroundPosition: 'center 60%',
            backgroundSize: 'cover'
          }
        },
        {
          style: {
            background:
              'url(https://images.unsplash.com/photo-1530077561647-4c376cd0ee7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }
        },
        {
          style: {
            background:
              'url(https://images.unsplash.com/photo-1534353875273-b5887cc1abf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
            backgroundPosition: 'center 70%',
            backgroundSize: 'cover'
          }
        },
        {
          style: {
            background:
              'url(https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)',
            backgroundPosition: 'center 70%',
            backgroundSize: 'cover'
          }
        }
      ],
      options: {
        effect: 'fade',
        loop: true,
        autoplay: 5000
      }
    }
  },
  methods: {
    ...mapActions('productsModule', ['getProducts'])
    // ...mapActions('cartModule', ['addToCart'])
  },
  created () {
    this.getProducts({ qty: 3 })
    $('.navbar').addClass('fixed-top')
    $('.navbar-nav').css('marginRight', '60px')
  },
  computed: {
    ...mapGetters(['isLoading']),
    ...mapGetters('productsModule', ['products'])
    // ...mapGetters('cartModule', ['cartlist', 'finalTotal', 'status'])
  },
  components: {
    DropMenu,
    slider,
    slideritem,
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
.card-title:hover {
  text-decoration: none;
}

.cardImgOuter {
  float: left;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  cursor: pointer;
}

.cardImg {
  position: absolute;
  top: 0;
  left: 0;
}

.cardImg img {
  transition: 0.4s ease;
}

.cardImgOuter:hover .cardImg img {
  transform: scale(1.08);
}

.list-group-item {
  padding: 0.45rem 1.25rem;
}

.list-group-item:hover {
  background: rgb(243, 243, 243);
  cursor: pointer;
  color: steelblue;
}

.mainSection {
  height: 300px;
}

.news {
  overflow-y: hidden;
  height: 240px;
  padding-right: 10px;
}

.news:hover {
  overflow-y: scroll;
}

@media screen and (max-width: 768px) {
  .mainSection {
    height: auto;
  }
  .news {
    overflow-y: hidden;
    height: 234px;
    padding-right: 0px;
  }
  .news:hover {
    overflow-y: hidden;
  }
}

/*
  scroll start
*/
::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  /* -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1); */
  background-color: #f5f5f5;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #fff;
  background-image: linear-gradient(
    to bottom,
    rgb(95, 200, 79),
    #54de5d,
    rgb(84, 195, 88)
  );
}

/* Handle on hover */
/* ::-webkit-scrollbar-thumb:hover {
  background: #555;
} */
</style>

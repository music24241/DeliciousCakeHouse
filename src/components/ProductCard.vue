<template>
  <div>
    <div class="card border-0 box-shadow text-center h-100">
      <div class="cardImgOuter w-100" style="height:200px">
        <div class="cardImg h-100 w-100">
          <router-link :to="{name:'Product',params:{id:item.id}}">
            <div
              class="card-img-top rounded h-100 w-100"
              :style="{backgroundImage: `url(${item.imageUrl})`,backgroundSize:'cover',backgroundPosition:'center'}"
            ></div>
            <!-- <img class="card-img-top rounded h-100 w-100" border="0" :src="item.imageUrl" alt="Card image cap"> -->
          </router-link>
        </div>
      </div>
      <div class="card-body">
        <router-link
          :to="{name:'Product',params:{id:item.id}}"
          class="card-title d-block h4 font-weight-bold"
        >{{ item.title }}</router-link>
        <p class="card-text text-left mb-1">{{item.description}}</p>
        <!-- <div class="font-weight-light text-muted text-right textBling ml-auto" style="font-size:12px;">更多訊息</div> -->
      </div>
      <div class="card-footer border-top-0 padding-top-0 bg-white">
        <div
          class="text-right text-muted"
          style="font-size:14px;text-decoration:line-through"
        >NT{{item.origin_price|currency}}</div>
        <h5 class="font-weight-bold d-flex justify-content-between align-items-center">
          <span style="font-size:18px">售價</span>
          NT{{item.price|currency}}
        </h5>
        <button
          v-if="item.is_enable"
          class="btn btn-outline-success ml-1 w-100"
          style="height:40px"
          @click.prevent="addToCart(item.id,item.qty)"
          :class="{'disabled':status.addToCart != ''}" :disabled="status.addToCart != ''"
        >
          立即選購
          <i class="fas fa-spinner fa-spin" v-if="status.addToCart == item.id"></i>
        </button>

        <button
          v-else
          class="btn btn-outline-secondary disabled ml-auto mr-auto w-100"
          style="height:40px"
        >敬請期待</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  // props: ['item', 'status'],
  props: ['item'],
  data () {
    return {
    }
  },
  methods: {
    addToCart (id, qty) {
      // this.$emit('addToCart', id, qty)
      this.$store.dispatch('cartModule/addToCart', { id, qty })
    }
    // ...mapActions('cartModule', ['addToCart'])
  },
  computed: {
    ...mapGetters('cartModule', ['cartlist', 'finalTotal', 'status'])
  }
}
</script>
<style>
  .card-title:hover{
    text-decoration: none
  }

  .cardImgOuter {
      float: left;
      position: relative;
      margin: 0 auto;
      overflow: hidden;
      cursor: pointer;
  }

  .cardImg{
    position: absolute;
    top: 0;
    left: 0;
  }

  .cardImg img{
    transition: 0.4s ease;
  }

  .cardImgOuter:hover .cardImg img{
    transform: scale(1.08);
  }
</style>

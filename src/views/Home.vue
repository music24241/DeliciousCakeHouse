<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-paw text-success" aria-hidden="true" style="font-size:1.5rem"></i>
        <span class="text-dark ml-2 font-weight-bold h4">好好吃蛋糕坊</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
         <li class="nav-item">
            <router-link to="/products" class="nav-link ">商品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/searchOrder" class=" nav-link">訂單查詢</router-link>
          </li>
          <li class="nav-item d-block d-md-none">
            <router-link to="/login" class="nav-link ">後台管理</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/login" class="mr-3 d-none d-md-inline-block">
        <i class="fas fa-user text-muted fa-2x"></i>
      </router-link>
    </nav>
    <a href="#" id="gotoTop" title="回到頂端"><i class="fas fa-arrow-alt-circle-up"></i></a>
    <router-view style="margin-top:50px"></router-view>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Footer
    // DropMenu
  },
  data () {
    return {

    }
  }
}

window.onscroll = function () { scrollFunction() }

function scrollFunction () {
  if (document.getElementById('gotoTop')) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('gotoTop').style.display = 'block'
    } else {
      document.getElementById('gotoTop').style.display = 'none'
    }
  }
}

window.addEventListener('resize', resizeFunction)

function resizeFunction () {
  if (screen.width < 540) {
    if (document.getElementById('gotoTop')) {
      document.getElementById('gotoTop').style.right = 0
    } else {
      document.getElementById('gotoTop').style.right = 30
    }
  }
}

</script>

<style>
body{
  font-family: 微軟正黑體;
}
#gotoTop {
  display: none;
  position: fixed;
  bottom: 15%;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  color: rgb(0, 139, 0);
  cursor: pointer;
  font-size: 40px;
  opacity: 0.6;
  transition: 0.2s;
}

#gotoTop:hover {
  opacity: 1;
}
</style>

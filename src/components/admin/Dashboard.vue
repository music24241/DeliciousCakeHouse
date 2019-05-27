<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <nav class="navbar navbar-light bg-light fixed-top">
      <router-link class="navbar-brand" to="/admin/products">
        <i class="fas fa-paw text-light" aria-hidden="true"></i>
        <span class="text-white ml-1 font-weight-bold">好好吃蛋糕坊</span>
      </router-link>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link text-white logout" href="#" @click.prevent="logout()"><i class="fas fa-sign-out-alt mr-1"></i>登出</a>
        </li>
      </ul>
    </nav>

    <!--Main content start -->
    <div class="container-fluid" style="margin-top:50px">
      <div class="row mt-2">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky" style="margin-top:30px;">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>後台</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link to="/admin/products" class="nav-link">
                   🍡 產品管理
                  <span class="sr-only">(current)</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/coupon" class="nav-link">
                   🔖 優惠卷管理
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/admin/orderlist" class="nav-link">
                   📝 訂單管理
                </router-link>
              </li>
            </ul>
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>前台</span>
              <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column mb-2">
              <li class="nav-item">
                <router-link to="/" class="nav-link">
                   <i class="fas fa-angle-double-left mr-1"></i> 回商場頁面
                </router-link>
              </li>
            </ul>
          </div>
        </nav>
        <a href="#" id="gotoTop" title="回到頂端"><i class="fas fa-arrow-alt-circle-up"></i></a>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-4 px-4">
          <router-view></router-view>
        </main>

      </div>
    </div>
    <!--Main content end -->
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/admin/Footer.vue'

export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    logout () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}/logout`
      this.$http.post(api).then((response) => {
        this.isLoading = false
        if (response.data.success) {
          this.$router.push('/login')
        } else {
          // console.log(response);
        }
      })
    }
  },
  components: {
    Footer
  }
}

</script>

<style scoped lang="scss">
@import "../../../public/helpers/dashboard/dashboard.css";

.navbar{
  background: #00c292 !important;
}

#gotoTop {
  display: none;
  position: fixed;
  bottom: 15%;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  color: #929292;
  cursor: pointer;
  font-size: 40px;
  opacity: 0.6;
  transition: 0.2s;
}

#gotoTop:hover {
  opacity: 1;
}
/* .logout:hover{
  font-weight: bold;

} */
</style>

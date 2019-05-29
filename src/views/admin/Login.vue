<template>
  <div>
    <div class="outer">
      <loading :active.sync="isLoading"></loading>

      <div class="dropdown">
      <DropMenu ref="dropMenu"/>
      <!--dropMenu-->
    </div>

      <div class="signin-form">
        <form class="mt-3">
          <h2>登入</h2>
          <p class="hint-text d-sm-block d-none">Sign in with your social media account</p>
          <div class="social-btn text-center d-sm-block d-none">
            <router-link to="/login" class="btn btn-primary btn-lg" title="Facebook">
              <i class="fab fa-facebook-f mt-2"></i>
            </router-link>
            <router-link to="/login" class="btn btn-info btn-lg" title="Twitter">
              <i class="fab fa-twitter mt-2"></i>
            </router-link>
            <router-link to="/login" class="btn btn-danger btn-lg" title="Google">
              <i class="fab fa-google mt-2"></i>
            </router-link>
          </div>
          <div class="or-seperator d-sm-block d-none">
            <b>or</b>
          </div>
          <div class="form-group px-3 px-sm-0">
            <input
              type="text"
              class="form-control input-lg"
              name="username" autofocus
              placeholder="帳號"
              v-model="user.username" @keyup.enter="login()"
              v-validate="'required'" :class="{'is-invalid': errors.has('username')}"
            >
          </div>
          <div class="form-group px-3 px-sm-0">
            <input
              type="password"
              class="form-control input-lg"
              name="password"
              placeholder="密碼"
              v-model="user.password"
              v-validate="'required'" :class="{'is-invalid': errors.has('password')}" @keyup.enter="login()"
            >
          </div>
          <div class="form-group px-3">
            <button class="btn btn-success btn-lg btn-block signup-btn" @click.prevent="login()">登入</button>
          </div>
          <div class="text-center small">
            <router-link to="/login">忘記密碼?</router-link>
            <router-link to="/login" class="ml-2">沒有帳號?</router-link>
          </div>
        </form>
        <div class="text-center small d-sm-block d-none">
          沒有帳號?
          <router-link to="/login">註冊</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import DropMenu from '@/components/DropMenu.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
      // isLoading: false
    }
  },
  methods: {
    login () {
      let vm = this
      // vm.isLoading = true
      vm.$store.dispatch('updateLoading', true)
      const api = `${process.env.VUE_APP_API}/admin/signin`
      this.$validator.validate().then(result => {
        // vm.isLoading = true
        vm.$store.dispatch('updateLoading', true)
        if (result) {
          this.$http.post(api, vm.user).then(response => {
            if (response.data.success) {
              this.$router.push('/admin/products')
              // vm.isLoading = false
              vm.$store.dispatch('updateLoading', false)
            } else {
              alert('登入失敗')
              // vm.isLoading = false
              vm.$store.dispatch('updateLoading', false)
            }
          })
        } else {
          // vm.isLoading = false
          vm.$store.dispatch('updateLoading', false)
        }
      })
    }
  },
  created () {
    $('.navbar-nav').css('marginRight', '60px')
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  components: {
    DropMenu
  }
}
</script>

<style scoped>
.outer {
  color: #434343;
  background: #dfe7e9;
  background-image: url("../../../public/images/brooke-lark-203839-unsplash.jpg");
  background-position: center center;
  background-size: cover;
  font-family: "Varela Round", sans-serif;
}
.form-control {
  font-size: 16px;
  transition: all 0.4s;
  box-shadow: none;
}
.form-control:focus {
  border-color: #5cb85c;
}
.form-control,
.btn {
  border-radius: 50px;
  outline: none !important;
}
.signin-form {
  width: 400px;
  margin: 0 auto;
  padding: 30px 0;
}
@media screen and (max-width: 540px) {
  .signin-form {
    width: 100%;
  }
  .signin-form form {
    padding: 10px !important;
  }
}
.signin-form form {
  border-radius: 5px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 40px;
}
.signin-form a {
  color: #5cb85c;
}
.signin-form h2 {
  text-align: center;
  font-size: 34px;
  margin: 10px 0 15px;
}
.signin-form .hint-text {
  color: #999;
  text-align: center;
  margin-bottom: 20px;
}
.signin-form .form-group {
  margin-bottom: 20px;
}
.signin-form .btn {
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  text-align: center;
}
.signin-form .small {
  font-size: 13px;
}
.signup-btn {
  text-align: center;
  border-color: #5cb85c;
  transition: all 0.4s;
}
.signup-btn:hover {
  background: #5cb85c;
  opacity: 0.8;
}
.or-seperator {
  margin: 50px 0 15px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}
.or-seperator b {
  padding: 0 10px;
  width: 40px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  background: #fff;
  display: inline-block;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  position: relative;
  top: -22px;
  z-index: 1;
}
.social-btn .btn {
  color: #fff;
  margin: 10px 0 0 30px;
  font-size: 15px;
  width: 55px;
  height: 55px;
  line-height: 38px;
  border-radius: 50%;
  font-weight: normal;
  text-align: center;
  border: none;
  transition: all 0.4s;
}
.social-btn .btn:first-child {
  margin-left: 0;
}
.social-btn .btn:hover {
  opacity: 0.8;
}
.social-btn .btn-primary {
  background: #507cc0;
}
.social-btn .btn-info {
  background: #64ccf1;
}
.social-btn .btn-danger {
  background: #df4930;
}
.social-btn .btn i {
  font-size: 20px;
}
</style>

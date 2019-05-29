<template>
    <div>
      <loading :active.sync="isLoading"></loading>

      <h3 class=" font-weight-bold">優惠卷管理</h3>
        <div class="text-right">
            <button class="btn btn-primary" @click="openModal('newData')">新增優惠卷</button>
        </div>
        <table class="table mt-4">
            <thead class="thead-light">
                <tr>
                <th >優惠代碼</th>
                <th >到期日</th>
                <th>標題</th>
                <th >折扣</th>
                <th >是否啟用</th>
                <th >編輯</th>
                <th >刪除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in couponList" :key="item.id">
                <td>{{item.code}}</td>
                <td>{{item.due_date}}</td>
                <td>{{item.title}}</td>
                <td >{{item.percent}}</td>
                <td>
                    <span v-if="item.is_enabled">啟用</span>
                    <span v-else>未啟用</span>
                </td>
                <td>
                    <button class="btn btn-outline-primary btn-sm" @click="openModal('editData',item)">編輯</button>
                </td>
                <td>
                    <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
                </td>
                </tr>
            </tbody>
        </table>

        <Pagination :pagination="pagination" v-on:getCurrentPage="getCoupon()"/>

        <!-- modal -->
        <div class="modal fade" id="CouponModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog " role="document">
                <div class="modal-content border-0">
                    <div class="modal-header text-white" style="background:#00c292">
                        <h5 class="modal-title" id="exampleModalLabel">
                        <span>新增優惠卷</span>
                        </h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                        <div class="col">
                            <div class="form-group">
                            <label for="title">標題</label>
                            <input type="text" class="form-control" id="title"
                                placeholder="請輸入標題" v-model="coupon.title">
                            </div>
                            <div class="form-group">
                                <label for="percent">折扣</label>
                                <input type="number" class="form-control" id="percent"
                                placeholder="請輸入折扣" v-model="coupon.percent">
                            </div>
                            <div class="form-group">
                                <label for="duedate">到期日</label>
                                <input type="date" class="form-control" id="duedate"
                                placeholder="請輸入到期日" v-model="coupon.due_date">
                            </div>
                            <div class="form-group">
                                <label for="code">優惠代碼</label>
                                <input type="text" class="form-control" id="code"
                                placeholder="請輸入優惠代碼" v-model="coupon.code">
                            </div>
                            <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox"
                                id="is_enabled" v-model="coupon.is_enabled">
                                <label class="form-check-label" for="is_enabled">
                                是否啟用
                                </label>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-primary" @click.prevent="submit()">確認</button>
                </div>
                </div>
            </div>
        </div>
        <!--del-->
        <div class="modal fade" id="delModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content border-0">
                <div class="modal-header bg-danger text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                    <span>刪除產品</span>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    是否刪除 <strong class="text-danger">{{ coupon.title }}</strong> 商品(刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click.prevent="del()"
                    >確認刪除</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
import Pagination from '@/components/Pagination'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      couponList: [],
      mode: '',
      coupon: {},
      // isLoading: false,
      pagination: {}
    }
  },
  methods: {
    openModal (mode, item) {
      this.mode = mode
      if (mode === 'newData') {
        this.coupon = {}
      } else if (mode === 'editData') {
        this.coupon = item
      }
      $('#CouponModal').modal('show')
    },
    openDelModal (item) {
      $('#delModal').modal('show')
      this.coupon = item
    },
    getCoupon (page = 1) {
      let vm = this
      // vm.isLoading = true
      vm.$store.dispatch('updateLoading', true)
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/coupons?page=${page}`
      this.$http.get(api).then((response) => {
        // vm.isLoading = false
        vm.$store.dispatch('updateLoading', false)
        vm.couponList = response.data.coupons
        this.pagination = response.data.pagination
      })
    },
    submit () {
      let vm = this
      let httptype = ''
      let api = ''
      if (vm.mode === 'newData') {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/coupon`
        httptype = 'post'
      } else if (vm.mode === 'editData') {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/coupon/${vm.coupon.id}`
        httptype = 'put'
      }
      let coupon = {
        data: vm.coupon
      }
      this.$http[httptype](api, coupon).then((response) => {
        vm.coupon = {}
        $('#CouponModal').modal('hide')
        vm.getCoupon()
      })
    },
    del () {
      let vm = this
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/coupon/${vm.coupon.id}`
      this.$http.delete(api).then((response) => {
        vm.coupon = {}
        vm.getCoupon()
        $('#delModal').modal('hide')
      })
    }
  },
  created () {
    this.getCoupon()
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  components: {
    Pagination
  }
}
</script>

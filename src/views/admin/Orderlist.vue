<template>
  <div>
    <loading :active.sync="isLoading"></loading>

    <h3 class="font-weight-bold">訂單管理</h3>

    <div class="mr-auto">
      <div class="d-flex align-items-center justify-content-end">
        <select
          class="form-control"
          style="width:150px;border-radius:0.25rem 0 0 0.25rem;"
          v-model="select"
        >
          <option value selected disabled>--篩選條件--</option>
          <option value="ID">訂單編號</option>
          <option value="name">購買人</option>
          <option value="email">E-mail</option>
        </select>
        <div class="input-group position-relative"
          style="width:300px;border-radius:0 0.25rem 0.25rem 0">
          <div class="icon position-absolute" style="left:9px;top:8px;z-index:5">
            <i class="fas fa-search"></i>
          </div>
          <input type="text" class="form-control" id="Search" placeholder="開始搜尋"
            v-model="searchItem" style="padding-left:31px;">
        </div>
      </div>
    </div>

    <table class="table mt-4">
      <thead class="thead-light">
        <tr>
          <th>訂單編號</th>
          <th>購買日期 </th>
          <th>購買人</th>
          <th>E-mail</th>
          <th>金額</th>
          <th>是否付款</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,key) in filterList" :key="key">
          <td>
            <a href="#" @click.prevent="getProduct(item.id)">{{ item.id }}</a>
          </td>
          <td>{{ item.create_at | date }}</td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.email }}</td>
          <td>{{ item.total |currency }}</td>
          <td :class="{'text-success': item.is_paid}">
            <span class="font-weight-bold" v-if="item.is_paid">已付款</span>
            <span class="text-danger" v-else>尚未付款</span>
          </td>
        </tr>
      </tbody>
    </table>

    <!--Pagination start-->
    <Pagination :pagination="pagination" v-on:getPageProducts="getOrderList" v-if="status.pagination"/>
    <!--Pagination end-->

    <!--modal start-->
    <div class="modal fade" id="ProductModal" ref="ProductModal" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header text-light bg-success">
            <h5 class="modal-title" id="exampleModalLabel" >
              <!-- <div class="font-weight-bold">訂單編號：{{tempProduct.id}}</div> -->
              訂單詳細資訊
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" v-if="tempProduct.user">
            <div class="font-weight-bold text-center mb-3">
              訂單編號：{{tempProduct.id}}
              <template v-if="!status.edit">
                <button class="btn btn-info btn-sm ml-3" @click="status.edit=true" >編輯</button>
              </template>
              <template v-if="status.edit">
                <button class="btn btn-secondary btn-sm ml-3" @click="status.edit=false,editProduct =JSON.parse(JSON.stringify(tempProduct))"
                  :class="{'disabled':status.updateUser}">取消</button>
                <button class="btn btn-success btn-sm ml-3" @click="updateUser()" :class="{'disabled':status.updateUser}">
                  確認
                  <i class="fas fa-spinner fa-spin ml-1" v-if="status.updateUser"></i>
                </button>
              </template>
            </div>
            <h5 class="py-2 mb-2 text-center bg-light font-weight-bold">🎈 訂購人</h5>
            <!-- 一般模式 start-->
            <div class="row ml-3" v-if="!status.edit">
              <span class="font-weight-bold">姓名：</span> {{tempProduct.user.name}}
              <div class="w-100"></div>
              <span class="font-weight-bold">電話：</span>{{tempProduct.user.tel}}
              <div class="w-100"></div>
              <span class="font-weight-bold">email：</span>{{tempProduct.user.email}}
              <div class="w-100"></div>
              <span class="font-weight-bold">住址：</span>{{tempProduct.user.address}}
              <div class="w-100"></div>
              <span class="font-weight-bold">留言：</span>{{tempProduct.message}}
            </div>
            <!-- 一般模式 end-->
            <!-- 編輯模式 start-->
            <div class="row ml-3" v-if="status.edit">
              <div class="form-group d-flex align-items-center ">
                <label for="name" style="width:71px">姓名：</label>
                <input type="text" class="form-control" id="name" v-model="editProduct.user.name">
              </div>
              <div class="form-group d-flex align-items-center">
                <label for="tel" style="width:71px">電話：</label>
                <input type="text" class="form-control" id="tel" v-model="editProduct.user.tel">
              </div>
              <div class="form-group d-flex align-items-center">
                <label for="email" style="width:71px">email：</label>
                <input type="text" class="form-control" id="email" v-model="editProduct.user.email">
              </div>
              <div class="form-group d-flex align-items-center">
                <label for="address" style="width:71px">地址：</label>
                <input type="text" class="form-control" id="address" v-model="editProduct.user.address">
              </div>
              <div class="form-group d-flex align-items-center">
                <label for="message" style="width:71px">留言：</label>
                <input type="text" class="form-control" id="message" v-model="editProduct.message">
              </div>
            </div>
            <!-- 編輯模式 end-->
            <h5 class="py-2 mt-3 mb-2 text-center bg-light font-weight-bold">📄 訂購商品</h5>
            <div class="row ml-3">
              <table class="table mt-1">
                <thead>
                  <tr>
                    <th>產品名稱</th>
                    <th width="120">數量</th>
                    <th width="120">單價</th>
                    <th width="100">總價</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in tempProduct.products" :key="index">
                    <td>{{item.product.title}}</td>
                    <td>{{item.qty}} {{ item.product.unit}}</td>
                    <td >$ {{ item.product.price}}</td>
                    <td >$ {{ item.final_total}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal" v-if="!status.edit">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!--modal end-->
  </div>
</template>

<script>
import $ from 'jquery'
import Pagination from '@/components/Pagination.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      searchItem: '',
      select: '',
      status: {
        pagination: true,
        edit: false,
        updateUser: false
      }
    }
  },
  computed: {
    filterList () {
      var vm = this
      let filter = vm.orderPageList
      vm.status.pagination = true
      if (vm.searchItem === '') return filter
      switch (vm.select) {
        case 'name':
          vm.status.pagination = false
          filter = vm.orderList.filter((item, index) => {
            return item.user.name.match(vm.searchItem)
          })
          break
        case 'ID':
          vm.status.pagination = false
          filter = vm.orderList.filter((item, index) => {
            return item.id.match(vm.searchItem)
          })
          break
        case 'email':
          vm.status.pagination = false
          filter = vm.orderList.filter((item, index) => {
            return item.user.email.match(vm.searchItem)
          })
          break
      }
      return filter
    },
    editProduct: {
      get () {
        return this.$store.state.productsModule.editProduct
      },
      set (value) {
        this.$store.commit('productsModule/EDITPRODUCT', value, { root: true })
      }
    },
    ...mapGetters(['isLoading', 'pagination']),
    ...mapGetters('productsModule', ['tempProduct']),
    ...mapGetters('orderModule', ['orderList', 'orderPageList'])
  },
  methods: {
    search () {
      this.searchFilterOrder(this.searchItem)
    },
    async getProduct (ID) {
      await this.searchProduct(ID)
      $('#ProductModal').modal('show')
    },
    async updateUser () {
      let vm = this
      vm.status.updateUser = true
      // todo vuex 解決應先抓完 searchProduct 顯示正確消息在關閉編輯模式
      await this.updateOrderUser(this.editProduct)
      vm.status.updateUser = false
      vm.status.edit = false
    },
    hideEditMode () {
      this.status.edit = false
    },
    ...mapActions('productsModule', ['searchProduct']),
    ...mapActions('orderModule', ['getOrderList', 'searchOrder', 'updateOrderUser'])
  },
  created () {
    this.getOrderList()
    this.getOrderList({ page: 1 })
  },
  mounted () {
    $(this.$refs.ProductModal).on('hidden.bs.modal', this.hideEditMode)
  },
  components: {
    Pagination
  }
}
</script>

<style scoped>
.form-control:focus {
  border-color: #cccccc;
  -webkit-box-shadow: none;
  box-shadow: none;
}
</style>

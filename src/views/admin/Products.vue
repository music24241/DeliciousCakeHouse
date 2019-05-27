<template>
    <div>
        <loading :active.sync="isLoading"></loading>
        <h3 class="font-weight-bold">產品管理</h3>
        <div class="text-right">
            <button class="btn btn-primary" @click="openModal('newData')">
              <i class="fas fa-plus mr-2"></i>建立新的產品
              </button>
        </div>
        <table class="table mt-4">
            <thead class="thead-light">
                <tr>
                <th width="120">分類</th>
                <th>產品名稱</th>
                <th width="120">原價</th>
                <th width="120">售價</th>
                <th width="100">是否啟用</th>
                <th width="70">編輯</th>
                <th width="70">刪除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item) in allProducts" :key="item.id">
                <th>{{item.category}}</th>
                <td>{{item.title}}</td>
                <td >{{item.origin_price | currency}}</td>
                <td >{{item.price | currency }}</td>
                <td>
                    <span v-if="item.is_enable">啟用</span>
                    <span class="text-danger" v-else>未啟用</span>
                </td>
                <td>
                    <button class="btn btn-outline-primary btn-sm" @click="openModal('editData',item)">編輯</button>
                </td>
                <td>
                    <button class="btn btn-outline-danger btn-sm" @click="openDelModal('delData',item)">刪除</button>
                </td>
                </tr>
            </tbody>
        </table>
        <!-- pagination start-->
        <Pagination :pagination="pagination" v-on:getPageProducts="getProducts"/>
        <!-- pagination end-->

        <!-- new/update modal start -->
        <div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content border-0">
                <div class="modal-header text-white" style="background:#00c292">
                    <h5 class="modal-title" id="exampleModalLabel">
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                    <div class="col-sm-4">
                        <div class="form-group">
                        <label for="image">輸入圖片網址</label>
                        <input type="text" class="form-control" id="image"
                            placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                        </div>
                        <div class="form-group">
                        <label for="customFile">或 上傳圖片
                            <i class="fas fa-spinner fa-spin" v-if="status.uploadFile"></i>
                        </label>
                        <input type="file" id="customFile" class="form-control"
                            ref="files" @change="uploadFile()">
                        </div>
                        <img :src="tempProduct.imageUrl"
                        class="img-fluid" alt="">
                    </div>
                    <div class="col-sm-8">
                        <div class="form-group">
                        <label for="title">標題</label>
                        <input type="text" class="form-control" id="title"
                            placeholder="請輸入標題" v-model="tempProduct.title">
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="category">分類</label>
                            <input type="text" class="form-control" id="category"
                            placeholder="請輸入分類" v-model="tempProduct.category">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">單位</label>
                            <input type="unit" class="form-control" id="unit"
                            placeholder="請輸入單位" v-model="tempProduct.unit">
                        </div>
                        </div>

                        <div class="form-row">
                        <div class="form-group col-md-6">
                        <label for="origin_price">原價</label>
                            <input type="number" class="form-control" id="origin_price"
                            placeholder="請輸入原價" v-model="tempProduct.origin_price">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="price">售價</label>
                            <input type="number" class="form-control" id="price"
                            placeholder="請輸入售價" v-model="tempProduct.price">
                        </div>
                        </div>
                        <hr>

                        <div class="form-group">
                        <label for="description">產品描述</label>
                        <textarea type="text" class="form-control" id="description"
                            placeholder="請輸入產品描述" v-model="tempProduct.description"></textarea>
                        </div>
                        <div class="form-group">
                        <label for="content">說明內容</label>
                        <textarea type="text" class="form-control" id="content"
                            placeholder="請輸入產品說明內容" v-model="tempProduct.content"></textarea>
                        </div>
                        <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox"
                            id="is_enabled" v-model="tempProduct.is_enable" >
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
                    <button type="button" class="btn btn-primary" @click="updateModal()" :class="{'disabled':status.disabled}">
                        確認 <i class="fas fa-spinner fa-spin" v-if="status.disabled"></i>
                    </button>
                </div>
                </div>
            </div>
        </div>
        <!-- new/update modal end -->

        <!-- delete modal start-->
        <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
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
                    是否刪除 <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click.prevent="updateModal()" :class="{'disabled':status.disabled}"
                    >確認刪除 <i class="fas fa-spinner fa-spin" v-if="status.disabled"></i></button>
                </div>
                </div>
            </div>

        </div>
         <!-- delete modal end-->
    </div>
</template>

<script>
import $ from 'jquery'
import Pagination from '@/components/Pagination'
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      tempProduct: {},
      updateMode: '',
      status: {
        uploadFile: false,
        disabled: false
      }
    }
  },
  methods: {
    openModal (updateMode, item) { // 打開productModal
      this.updateMode = updateMode
      if (updateMode === 'newData') {
        this.tempProduct = {}
        $('#productModal .modal-title').html('新增商品')
      } else if (updateMode === 'editData') {
        this.tempProduct = Object.assign({}, item)
        $('#productModal .modal-title').html('編輯商品')
      }
      $('#productModal').modal('show')
    },
    async updateModal () {
      var vm = this
      let data = vm.tempProduct
      vm.status.disabled = true
      switch (vm.updateMode) {
        case 'newData':
          await this.addProduct({ data })
          $('#productModal').modal('hide')
          break
        case 'editData':
          await this.updateProduct({ data })
          $('#productModal').modal('hide')
          break
        case 'delData':
          await this.delProduct({ data })
          $('#delProductModal').modal('hide')
      }
      this.status.disabled = false
      this.tempProduct = {}
    },
    openDelModal (updateMode, item) {
      this.tempProduct = item
      this.updateMode = updateMode
      $('#delProductModal').modal('show')
    },
    uploadFile () {
      var vm = this
      vm.status.uploadFile = true
      var formData = new FormData()
      formData.append('file-to-upload', this.$refs.files.files[0])
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_CUSTOM}/admin/upload`
      this.$http.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        vm.status.uploadFile = false
        if (response.data.success) {
          vm.$set(vm.tempProduct, 'imageUrl', response.data.imageUrl)
        } else {
          alert(response.data.message.message)
        }
      })
    },
    ...mapActions('productsModule', ['getProducts', 'addProduct', 'updateProduct', 'delProduct'])
  },
  created () {
    this.getProducts({ page: 1 })
  },
  computed: {
    ...mapGetters(['isLoading', 'pagination']),
    ...mapGetters('productsModule', ['allProducts'])
  },
  components: {
    Pagination
  }
}
</script>

<style lang="scss" scoped>
  input[type="checkbox"]{
    width: 16px;
    height: 16px;
  }
</style>

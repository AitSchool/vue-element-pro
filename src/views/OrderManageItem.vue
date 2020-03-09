<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content" v-loading="loading">
      <h3 class="sub-title">订单信息</h3>
      <div class="page-info">
        <el-row :gutter="20">
          <el-col :span="8">
            订单编号：{{orderInfo.id}}
          </el-col>
          <el-col :span="8">
            订单价格：{{orderInfo.price}}
          </el-col>
          <el-col :span="8">
            订单状态：{{orderInfo.status_display}}
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            创建时间：{{orderInfo.created_at_display}}
          </el-col>
          <el-col :span="8">
            快递编号：{{orderInfo.express}}
          </el-col>
          <el-col :span="8">
            快递价格：{{orderInfo.express_price}}
          </el-col>
        </el-row>
      </div>
      <h3 class="sub-title">用户信息</h3>
      <div class="page-info">
        <el-row :gutter="20">
          <el-col :span="8">
            姓名：{{userInfo.name}}
          </el-col>
          <el-col :span="8">
            电话：{{userInfo.phone_number}}
          </el-col>
          <el-col :span="8">
            地址：{{userInfo.address}}
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="16">
            留言：{{userInfo.message}}
          </el-col>
        </el-row>
      </div>
      <h3 class="sub-title">商品信息</h3>
      <el-table
        :data="skus"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="color"
          label="颜色">
        </el-table-column>
        <el-table-column
          prop="size"
          label="码数">
        </el-table-column>
        <el-table-column
          prop="number"
          label="数量">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from '@/components/BasicBreadcrumb.vue';

export default {
  data() {
    return {
      loading: false,
      orderInfo: {
        id: 1231231233,
        price: 96,
        status: 1,
        status_display: '未付款',
        express: 234234234,
        express_price: 10,
        created_at_display: '2019-05-22 14:20',

      },
      userInfo: {
        name: '用户名',
        phone_number: '13511111111',
        address: '取货地址',
        message: '老板快快发货 ～',
      },
      skus: [{
        id: 123,
        name: '国潮小T恤',
        color: '白色',
        size: 'M',
        number: 3,
        price: 22,
      }, {
        id: 123,
        name: '国潮小T恤',
        color: '白色',
        size: 'M',
        number: 3,
        price: 10,
      }],
    };
  },
  methods: {

  },
  components: {
    'v-breadcrumb': Breadcrumb,
  },
};
</script>

<style type="text/css" lang="less">
.page-info{
  font-size: 14px;
  line-height: 30px;
  color: #666;
  margin-bottom: 20px;
}
</style>

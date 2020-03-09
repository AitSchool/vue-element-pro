<template>
  <div class="page-container">
      <v-breadcrumb />
      <div class="page-content" v-loading="loading">
        <div>
          <el-form inline label-width="80px">
            <el-form-item label="订单号码">
              <el-input  placeholder="请输入订单号码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                >搜索</el-button>
              <el-button
                type="primary"
                plain
                >重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="created_at_display"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="id"
            label="订单号码">
          </el-table-column>
          <el-table-column
            prop="price"
            label="总价">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态">
            <template slot-scope="scope">
              {{statusDisplay(scope.row.status)}}
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="handleShowOrder(scope.row,)"
                >查看详情</el-button
              >
            </template>
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
      tableData: [
        {
          id: 1231231233,
          price: 23,
          status: 1,
          express: 234234234,
          created_at_display: '2019-05-22 14:20',
        },
        {
          id: 3453245245,
          price: 24,
          status: 2,
          express: 234234234,
          created_at_display: '2019-05-22 14:20',
        },
        {
          id: 23452345234,
          price: 25,
          status: 3,
          express: 234234234,
          created_at_display: '2019-05-22 14:20',
        },
        {
          id: 235523545234,
          price: 26,
          status: 4,
          express: 234234234,
          created_at_display: '2019-05-22 14:20',
        }],
    };
  },
  methods: {
    statusDisplay(status) {
      const statusDisplay = ['未付款', '代发货', '已发货', '申请退款'];
      return statusDisplay[status - 1];
    },
    handleShowOrder(row) {
      const { id } = row;
      this.$router.push({
        name: 'OrderManageItem',
        params: { id },
      });
    },
  },
  components: {
    'v-breadcrumb': Breadcrumb,
  },
};
</script>

<style type="text/css" lang="less">

</style>

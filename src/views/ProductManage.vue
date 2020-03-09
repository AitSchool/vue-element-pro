<template>
  <div class="page-container">
    <v-breadcrumb />
    <div class="page-content">
      <el-table
        :data="tableData"
        size="small"
        style="width: 100%">
        <el-table-column
          prop="image"
          label="图片">
          <template slot-scope="scope">
            <img width="40" height="40" :src="scope.row.image" alt="图片">
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称">
        </el-table-column>
        <el-table-column
          prop="price"
          label="价格">
        </el-table-column>
        <el-table-column
          prop="sku_number"
          label="SKU 数量">
        </el-table-column>
        <el-table-column
          prop="created_at"
          label="创建时间">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.status" type="success">上架</el-tag>
            <el-tag v-else type="info">下架</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="operation"
          label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="handleEdit(scope.row,scope.$index)">编辑</el-button>
            <el-button
              type="text"
              icon="el-icon-delete"
              @click="handleDelete(scope.$index)">删除</el-button>
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
      tableData: [],
    };
  },
  methods: {
    handleEdit(data, index) {
      console.log(data, index);
    },
    handleDelete(index) {
      this.$confirm('此操作将永久删除该商品, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.tableData.splice(index, 1);
        this.$message({
          type: 'success',
          message: '删除成功!',
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        });
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

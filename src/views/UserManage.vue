<template>
  <div class="page-container">
      <v-breadcrumb />
      <div class="page-content" v-loading="loading">
        <div>
          <el-form inline label-width="80px">
            <el-form-item label="手机号">
              <el-input  placeholder="请输入手机号"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input  placeholder="请输入姓名"></el-input>
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
            prop="phone_number"
            label="手机">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="handleEditUser(scope.row)"
                >编辑</el-button
              >
              <el-divider direction="vertical"></el-divider>
              <el-button
                type="text"
                @click="handleShowUser(scope.row,)"
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
          id: 4,
          phone_number: '13511111111',
          name: 'Jax',
        },
        {
          id: 5,
          phone_number: '13522222222',
          name: 'Jeo',
          role: 2,
        },
        {
          id: 6,
          phone_number: '13533333333',
          name: 'Jay',
        }],
    };
  },
  methods: {
    handleEditUser(row) {
      const { id } = row;
      this.$router.push({
        name: 'UserManageEdit',
        params: { id },
      });
    },
    handleShowUser(row) {
      const { id } = row;
      this.$router.push({
        name: 'UserManageItem',
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

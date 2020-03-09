<template>
  <div class="page-container">
    <v-breadcrumb/>
    <div class="page-content" v-loading="loading">
      <el-form
        ref="userForm"
        label-position="left"
        label-width="160px">
        <h3>用户信息</h3>
        <el-form-item
          label="真实姓名"
          prop="name"
          style="width:460px;">
          <span>{{formData.name}}</span>
        </el-form-item>
        <el-form-item
          label="手机号"
          prop="phone"
          style="width:460px;">
          <span>{{formData.phone}}</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/javascript">
import Breadcrumb from '@/components/BasicBreadcrumb.vue';

export default {
  data() {
    return {
      loading: false,
      formData: {
        name: 'Jax',
        phone: '13511111111',
      },
    };
  },
  methods: {

  },
  components: {
    'v-breadcrumb': Breadcrumb,
  },
};
</script>

<style type="text/css" lang="less" scoped>

</style>

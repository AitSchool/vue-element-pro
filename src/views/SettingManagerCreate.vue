<template>
  <div class="page-container">
    <v-breadcrumb title="创建管理员"/>
    <div class="page-content" v-loading="loading">
      <el-form
        :model="formData"
        :rules="rules"
        ref="userForm"
        label-position="left"
        label-width="160px">
        <h3>子管理员信息</h3>
        <el-form-item
          label="真实姓名"
          prop="name"
          style="width:460px;">
          <el-input v-model="formData.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item
          label="手机号"
          prop="phone"
          style="width:460px;">
          <el-input v-model="formData.phone" placeholder="请输入手机号" />
        </el-form-item>
        <h3>权限设置</h3>
        <template v-for="item in permissions">
          <el-form-item :label="item.display_name" :key="item.id">
            <el-checkbox-group v-model="formData.permissions">
              <template v-for="permission in item.permissions">
                <el-checkbox
                  :label="permission.id"
                  :key="permission.id"
                  :name="item.name"
                  :disabled="permission.id === 1"
                >
                  {{ permission.display_name }}
                </el-checkbox>
              </template>
            </el-checkbox-group>
          </el-form-item>
        </template>
        <el-form-item>
          <el-button type="primary" @click="handleCreateManager">添加</el-button>
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
      rules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '目前只支持中国大陆的手机号码', trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
      },
      formData: {
        name: '',
        phone: '',
        permissions: [1],
      },
      permissions: [
        {
          id: 1,
          name: 'common',
          display_name: '概况',
          permissions: [
            {
              id: 1,
              name: 'general-information',
              display_name: '数据分析',
            },
          ],
        },
        {
          id: 2,
          name: 'page',
          display_name: '页面管理',
          permissions: [
            {
              id: 2,
              name: 'page-manage-home',
              display_name: '首页管理',
            },
            {
              id: 3,
              name: 'product-manage',
              display_name: '商品管理',
            },
            {
              id: 4,
              name: 'order-manage',
              display_name: '订单管理',
            },
            {
              id: 5,
              name: 'user-manage',
              display_name: '用户管理',
            },
          ],
        },
        {
          id: 3,
          name: 'market',
          display_name: '活动',
          permissions: [
            {
              id: 6,
              name: 'market-manage',
              display_name: '活动页',
            },
            {
              id: 7,
              name: 'market-appointment',
              display_name: '活动预约',
            },
          ],
        },
        {
          id: 4,
          name: 'setting',
          display_name: '设置',
          permissions: [
            {
              id: 8,
              name: 'setting-company',
              display_name: '公司设置',
            },
            {
              id: 9,
              name: 'setting-manager',
              display_name: '管理员设置',
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleCreateManager() {
      this.$refs.userForm.validate((valid) => {
        if (valid) {
          this.$message.success('创建成功');
          this.$router.push({ name: 'SettingManager' });
        }
      });
    },
  },
  components: {
    'v-breadcrumb': Breadcrumb,
  },
};
</script>

<style type="text/css" lang="less" scoped>

</style>

<template>
  <div class="page-container">
    <v-breadcrumb title="公司设置"/>
    <div class="page-content" v-loading="loading">
      <el-form
        label-position="left"
        label-width="160px"
        class="form-container">
        <h3>公司信息</h3>
        <el-form-item label="公司名称">
          <div v-show="!editing.name">
            <span class="form-value">{{ form.name }}</span>
            <el-button type="text"
              @click="onEditing('name')">修改</el-button>
          </div>
          <div v-show="editing.name">
            <el-input v-model="form.name" type="text" />
            <el-button type="primary" class="form-btn"
              @click="updateCompanyDetails('name')">确定</el-button>
          </div>
        </el-form-item>
        <el-form-item label="公司简称">
          <div v-show="!editing.short">
            <span class="form-value">{{ form.short_name }}</span>
            <el-button type="text"
              @click="onEditing('short')">修改</el-button>
          </div>
          <div v-show="editing.short">
            <el-input v-model="form.short_name" type="text" />
            <el-button type="primary" class="form-btn"
              @click="updateCompanyDetails('short')">确定</el-button>
          </div>
        </el-form-item>
        <el-form-item label="创建时间">
          <span class="form-value">{{form.created_at}}</span>
        </el-form-item>
        <h3>联系人</h3>
        <el-form-item label="手机号">
          <div v-show="!editing.phone">
            <span class="form-value">{{ form.connector_phone }}</span>
            <el-button type="text"
              @click="onEditing('phone')">设置</el-button>
          </div>
          <div v-show="editing.phone">
            <el-input v-model="form.connector_phone" type="text"/>
            <el-button type="primary" class="form-btn"
              @click="updateCompanyDetails('phone')">确定</el-button>
          </div>
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
      editing: {
        name: false,
        short: false,
        phone: false,
      },
      form: {
        name: '技能栈（北京）科技有限公司',
        short_name: '技能栈',
        connector_phone: '15117929582',
        created_at: '2019-5-8 周三 16:02:37',
      },
    };
  },
  methods: {
    updateCompanyDetails(type) {
      this.$message.success('更新成功');
      this.onEditing(type);
    },
    onEditing(type) {
      this.editing[type] = !this.editing[type];
    },
  },
  components: {
    'v-breadcrumb': Breadcrumb,
  },
};
</script>

<style type="text/css" lang="less" scoped>
  .form-container{
    width: 460px;
    .form-btn{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(120%,-50%);

    }
  }
  .form-value{
    font-size: 14px;
    margin-right: 32px;
  }
</style>

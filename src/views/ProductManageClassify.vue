<template>
  <div class="page-container">
      <v-breadcrumb />
      <div class="page-content">
        <div class="mb-20">
          <el-button type="primary" @click="handleAdd">添加分类</el-button>
          <el-dialog :title="formBoxTitle" :visible="formBoxShow" :show-close="false">
            <el-form >
              <el-form-item label="名称" label-width="80px">
                <el-input name="name" v-model="formBoxName"></el-input>
              </el-form-item>
              <el-form-item label="描述" label-width="80px">
                <el-input
                  type="textarea"
                  name="description"
                  :rows="4"
                  v-model="formBoxDescription"></el-input>
              </el-form-item>
              <el-form-item label="图片" label-width="80px">
                <el-upload
                  class="image-uploader"
                  action=""
                  :show-file-list="false"
                  :before-upload="beforeImageUpload">
                  <img v-if="formBoxImage" :src="formBoxImage" class="image">
                  <i v-else class="el-icon-plus image-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="状态" label-width="80px">
                <el-radio v-model="formBoxStatus" :label="0">内测</el-radio>
                <el-radio v-model="formBoxStatus" :label="1">开启</el-radio>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="handleSave">保存</el-button>
              <el-button @click="handleCancel">取消</el-button>
            </div>
          </el-dialog>
        </div>
        <el-table
          :data="tableData"
          size="small"
          style="width: 100%">
          <el-table-column
            prop="image"
            label="图片"
            width="80">
            <template slot-scope="scope">
              <img width="40" height="40" :src="scope.row.image" alt="图片">
            </template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="description"
            label="描述">
          </el-table-column>
          <el-table-column
            prop="status"
            label="状态"
            width="80">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.status" type="success">开启</el-tag>
              <el-tag v-else type="info">内测</el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="operation"
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button
                type="text"
                icon="el-icon-edit"
                @click="handleEdit(scope.row,scope.$index)">编辑</el-button>
              <el-button
                type="text"
                icon="el-icon-delete"
                @click="handleDelete(scope.row,scope.$index)">删除</el-button>
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
      dataIndex: null,
      formBoxID: null,
      formBoxShow: false,
      formBoxTitle: '',
      formBoxName: '',
      formBoxDescription: '',
      formBoxImage: '',
      formBoxStatus: 0,
    };
  },
  methods: {
    beforeImageUpload(file) {
      const isLt2M = file.size / 1024 < 200;
      const fileName = file.name;
      const suffix = fileName.split('.').pop();
      const resumeRegex = /(jpg|jpeg|png)/;
      if (!isLt2M || !resumeRegex.test(suffix)) {
        this.$message.error('上传头像图片只能是 JPG、PNG 格式，小于 30 K！');
        return false;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener('load', () => {
        this.formBoxImage = reader.result;
      });
      return false;
    },
    handleAdd() {
      this.formBoxShow = true;
      this.formBoxTitle = '添加分类';
      this.formBoxID = '';
      this.formBoxName = '';
      this.formBoxImage = '';
      this.formBoxDescription = '';
      this.formBoxStatus = 0;
    },
    handleCancel() {
      this.formBoxShow = false;
    },
    handleEdit(data, index) {
      this.dataIndex = index;
      this.formBoxTitle = '编辑分类';
      this.formBoxID = data.id;
      this.formBoxName = data.name;
      this.formBoxImage = data.image;
      this.formBoxDescription = data.description;
      this.formBoxStatus = data.status;
      this.formBoxShow = true;
    },
    handleSave() {
      const id = this.formBoxID;
      const name = this.formBoxName;
      const index = this.dataIndex;
      const image = this.formBoxImage;
      const description = this.formBoxDescription;
      const status = this.formBoxStatus;
      const params = {
        id, name, image, description, status,
      };
      if (!name || !image || !description) {
        this.$message.error('缺少必要参数');
        return;
      }
      // 修改
      if (id) {
        this.$set(this.tableData, index, params);
        this.formBoxShow = false;
        this.$message.success('修改成功');
      // 添加
      } else {
        params.id = 12312;
        this.tableData.push(params);
        this.formBoxShow = false;
        this.$message.success('添加成功');
      }
    },
    handleDelete(data, index) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
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
.image-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover{
    border-color: #409EFF;
  }

  .image-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .image {
    width: 178px;
    height: 178px;
    display: block;
  }
}
</style>

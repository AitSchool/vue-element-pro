<template>
  <div class="account-register-contaienr">
    <div class="account-register-bd">
      <div class="company-info-container">
        <img class="company-info-logo" src="~@/assets/logo.png">
        <span class="company-info-name">Vue Element Pro</span>
      </div>
      <div class="company-info-desc">小具影响力的 Web 设计规范</div>
      <div class="account-register-mainer">
        <div class="register-form-container">
          <div class="register-form-phone">
            <el-form
              :model="fromData"
              status-icon
              :rules="registerRules"
              ref="fromData">
              <el-form-item prop="phone">
                <el-input
                  type="number"
                  prefix-icon="el-icon-mobile-phone"
                  placeholder="请输手机号"
                  v-model="fromData.phone"
                  autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  prefix-icon="el-icon-lock"
                  placeholder="请输入密码"
                  type="password"
                  v-model="fromData.password"
                  autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input
                type="password"
                prefix-icon="el-icon-lock"
                placeholder="请确认密码"
                v-model="fromData.checkPass"
                autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <div class="flex-cell">
                  <el-input
                    class="flex-cell-bd"
                    type="number"
                    placeholder="请输入验证码"
                    v-model="fromData.code"
                    autocomplete="off"
                    prefix-icon="el-icon-mobile"></el-input>
                  <el-button
                    :disabled="disabled"
                    class="flex-cell-ft"
                     @click="handleSendCode"
                    >{{buttonName}}</el-button>
                </div>
              </el-form-item>
              <el-form-item >
                <div class="flex-cell">
                  <span class="flex-cell-bd">
                    <el-button type="primary" style="width: 200px">注册</el-button>
                  </span>
                  <router-link
                    class="flex-cell-ft link"
                    type="primary"
                    :to="{name: 'AccountLogin'}">使用已有账号登录</router-link>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/BasicLayoutFooter.vue';

export default {
  data() {
    return {
      fromData: {
        phone: '',
        password: '',
        checkPass: '',
      },
      registerRules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '目前只支持中国大陆的手机号码', trigger: 'blur' },
        ],
        password: [
          { validator: this.validatePass, trigger: 'blur' },
        ],
        checkPass: [
          { validator: this.validatePass2, trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
      },
      buttonName: '获取验证码',
      disabled: false,
    };
  },
  methods: {
    validatePass(rule, value, callback) {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.fromData.checkPass !== '') {
          this.$refs.fromData.validateField('checkPass');
        }
        callback();
      }
    },
    validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.fromData.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    },
    handleSendCode() {
      if (this.disabled) {
        return;
      }

      this.$refs.fromData.validateField('phone', (errMsg) => {
        if (errMsg) return;
        this.disabled = true;

        let time = 60;
        this.buttonName = `(${time})秒重新发送`;
        const interval = window.setInterval(() => {
          time -= 1;
          this.buttonName = `(${time})秒重新发送`;
          if (time <= 0) {
            this.buttonName = '重新发送';
            this.disabled = false;
            window.clearInterval(interval);
          }
        }, 1000);
      });
    },
  },
  components: {
    Footer,
  },
};
</script>

<style lang="less" scoped>
  .flex-cell{
    display: flex;
    .flex-cell-bd{
      flex: 1;
    }
    .flex-cell-ft{
      width: 130px;
      margin-left: 8px;
      &:after{
        display: none;
      }
      &.link{
        font-size: 14px;
        font-weight: 500;
        text-align: center;
        color: #409EFF;
        text-decoration: none;
      }
    }
  }
  .account-register-contaienr{
    display: flex;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #f0f2f5;
    background-image: url('~@/assets/antd-login-bg.svg');
    background-position: center;
    padding-top: 40px;
    box-sizing: border-box;
  }
  .account-register-bd{
    flex: 1;
    padding: 32px 0;
  }
  .company-info-container{
    display: flex;
    justify-content: center;
    align-items: center;
    .company-info-logo{
      height: 44px;
      margin-right: 20px;
    }
    .company-info-name{
      line-height: 44px;
      font-size: 33px;
      font-weight: 600;
      font-family: Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;
    }
  }
  .company-info-desc{
    margin: 12px 0 40px;
    font-size: 14px;
    opacity: .5;
    text-align: center;
  }
  .account-register-mainer{
    max-width: 388px;
    margin: 40px auto;
  }
</style>

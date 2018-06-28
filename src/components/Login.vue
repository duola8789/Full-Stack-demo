<template>
  <div class="login-wrapper">
    <div class="header">
      <img src="../assets/logo.png">
    </div>
    <div class="main">
      <div>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <el-input type="text"
                      placeholder="请输入用户名"
                      v-model.trim="username"
                      clearable
                      autofocus="true"
                      @keyup.enter.native="login">
            </el-input>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <el-input type="password"
                      placeholder="请输入密码"
                      v-model.trim="password"
                      clearable
                      @keyup.enter.native="login">
            </el-input>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center">
          <el-col :span="6">
            <el-button type="primary" class="login-button" @click="login">登陆</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import * as API from '@/newwork/api';
  import * as uiHelper from '@/helper/uiHelper';

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    computed: {},
    methods: {
      login() {
        const self = this;
        if (!this.username) {
          uiHelper.showMessage('请输入用户名', 'error');
          return;
        }
        if (!this.password) {
          uiHelper.showMessage('请输入密码', 'error');
          return;
        }

        const userInfo = {
          username: this.username,
          password: this.password,
        };

        // 将信息发送给后端
        this.$http.post(API.userAPI.login, userInfo)
          .then(res => {
            const data = res.data;
            if (!data.success) {
              uiHelper.showMessage(data.retDsc, 'error');
            } else {
              sessionStorage.setItem('userToken', data.ret.token);
              uiHelper.showMessage(data.retDsc, 'success', 1000, self.goInside);
            }
          })
          .catch((e) => {
            console.log('登陆错误', e)
          })
      },
      goInside() {
        this.$router.push('/admin')
      }
    },
    components: {}
  }
</script>

<style scoped>
  .login-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    padding-top: 100px;
    background-image: linear-gradient(to right, #7A88FF, #7AFFAF);
    overflow: auto;
  }
  .el-row {
    margin: 0 0 20px;
  }
  .main {
    margin-top: 50px;
  }
  .login-button {
    width: 100%;
  }
</style>

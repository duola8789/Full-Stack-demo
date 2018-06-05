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
                      v-model.trim="userInfo.username"
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
                      v-model.trim="userInfo.password"
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

  export default {
    data() {
      return {
        userInfo: {
          username: '',
          password: ''
        },
      }
    },
    computed: {},
    methods: {
      login() {
        if (!this.userInfo.username) {
          this.$message({
            message: '请输入用户名',
            type: 'error',
            duration: 1500,
          });
          return;
        }
        if (!this.userInfo.password) {
          this.$message({
            message: '请输入密码',
            type: 'error',
            duration: 1500
          });
          return;
        }
        const loading = this.showLoading();
        const userInfo = {
          ...this.userInfo
        };
        this.$http.post(API.userAPI.login, userInfo) // 将信息发送给后端
          .finally(() => {
              loading.close()
            }
          )
          .then(res => {
            const data = res.data;
            if (!data.success) {
              this.$message({
                message: data.info,
                type: 'error',
                duration: 1500
              });
            } else {
              this.$message({
                message: data.info,
                type: 'success',
                duration: 1000,
                onClose() {
                  this.goInside()
                }
              });
            }
          })
          .catch((e) => {
            console.log('登陆错误', e)
          })
      },
      showLoading() {
        return this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        })
      },
      goInside() {
        console.log('go')
      }
    },
    components: {}
  }
</script>

<style scoped>
  .login-wrapper {
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

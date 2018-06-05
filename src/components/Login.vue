<template>
  <el-container class="login-wrapper">
    <el-header height="auto">
      <img src="../assets/logo.png">
    </el-header>
    <el-main>
      <div>
        <el-row type="flex" class="row-bg" justify="center" :gutter="20">
          <el-col :span="6">
            <el-input type="text" placeholder="请输入用户名" v-model="username" clearable></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center" :gutter="20">
          <el-col :span="6">
            <el-input type="password" placeholder="请输入密码" v-model="password" clearable></el-input>
          </el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="center" :gutter="20">
          <el-col :span="6">
            <el-button type="primary" class="login-button">
              <router-link to="/admin" exact>登陆</router-link>
            </el-button>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
	export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    computed: {},
    methods: {},
    components: {}
  }
</script>

<style scoped>
  .login-wrapper {
    height: 100%;
    padding-top: 100px;
    background-image: linear-gradient(to right, #7A88FF, #7AFFAF);
  }
  .el-row {
    margin-bottom: 20px;
  }
  .login-button {
    width: 100%;
  }
</style>

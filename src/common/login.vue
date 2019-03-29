<template>
  <div class="login">
    <div class="second-bg">
      <section class="form-bg">
        <p class="login-title">
          <span class="level1-title">云通讯服务后台管理系统</span>
          <span class="level2-title">用户登录</span>
        </p>
        <el-form :model="loginForm" :rules="loginRule" ref="loginForm" label-width="0">
          <el-form-item prop="account" style="margin-bottom: 26px">
            <i class="ifreecomm ic-user"></i>
            <el-input type="text" v-model="loginForm.account" size="big" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <i class="ifreecomm ic-suoding"></i>
            <el-input type="password" v-model="loginForm.password" size="big" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item style="margin-bottom: 18px">
            <el-checkbox-group v-model="loginForm.keepPassword">
              <el-checkbox label="记住账号" name="keep-password"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="login('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
        <img class="logo" src="../../static/img/logo.png"/>
      </section>
    </div>

  </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>

<template>
  <div class="login">
    login
    <button @click="login">
      登录
    </button>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {}
    },
    methods: {
      login() {
        this.$router.push({"name": "Page1"});
      }
    }
  }
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    background-image: url("../../static/img/bg.png");
    background-size: 100% 100%;
  }
</style>

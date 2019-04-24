<template>
  <header>
    <div class="head-left">
      <div class="logo">
        <img src="/static/img/avatar.png">
        <i @click="doCollapse" class="lee ic-menu_open change-btn"></i>
      </div>
    </div>
    <div class="head-right"></div>
  </header>
</template>

<script>
  import vm from '../services/vm.js';

  export default {
    data() {
      return {
        collapse: false
      }
    },
    methods: {
      doCollapse() {
        this.collapse = !this.collapse;
        vm.$emit('collapse', this.collapse);
      }
    }
  }
</script>

<style lang="scss">
  header {
    width: 100%;
    height: 60px;
    background-color: #dcdfe6;

    .logo{
      padding-top: 10px;
      margin-left: 20px;
    }

    .change-btn{
      margin-left: 70px;
      cursor: pointer;
      font-size: 18px;
      color: #66b1ff;
    }
  }

</style>

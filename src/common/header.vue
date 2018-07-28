<template>
  <header>
    <div class="head-left">
      <div class="logo" style="padding-top:16px;margin-left: 20px">
        <img src="../assets/images/head-logo.png">
        <i @click="doCollapse" style="margin-left:70px;cursor:pointer;color: #505c6b" class="el-icon-menu"></i>
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

<style>
  header {
    width: 100%;
    height: 60px;
    background-color: #2b3643;
  }
  i {
    font-size: 24px;
  }
</style>

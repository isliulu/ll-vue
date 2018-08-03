<template>
  <div class="userManage jf-content">
    <div class="content-header">
      <div class="title">用户管理</div>
      <div class="action" style="float:right">
        <el-button type="primary" @click="addNum"><i class="el-icon-plus"></i>添加用户</el-button>
      </div>
    </div>
    <div class="content-body"></div>
    <vueAdd :showAddUser.sync="showAddUser"></vueAdd>
  </div>
</template>

<script>
  import vueAdd from '../components/vue-add';
  export default {
    name: "userManage",
    components:{
      vueAdd
    },
    data() {
      return {
        showAddUser: false,
      }
    },
    methods: {
      addNum () {
        this.showAddUser= true
      }
    }
  }
</script>

<style scoped>
</style>

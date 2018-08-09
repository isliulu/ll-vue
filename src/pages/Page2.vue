<template>
  <div class="userManage jf-content">
    <div class="content-header">
      <div class="title">用户管理</div>
      <div class="action">
        <el-button type="primary" @click="addNum"><i class="el-icon-plus"></i>添加用户</el-button>
        <el-button type="primary" @click="edit">编辑</el-button>
      </div>
    </div>
    <div class="content-body"></div>
    <vueAdd :showAddUser.sync="showAddUser"></vueAdd>
    <editUserIfo :editUserIfo.sync="editUserIfo"></editUserIfo>
  </div>
</template>

<script>
  import vueAdd from '../components/vue-add';
  import editUserIfo from '../components/editUserIfo';

  export default {
    name: "userManage",
    components: {
      vueAdd,
      editUserIfo
    },
    data() {
      return {
        showAddUser: false,
        editUserIfo: false,
      }
    },
    methods: {
      addNum() {
        this.showAddUser = true
      },
      edit() {
        this.editUserIfo = true
      }
    }
  }
</script>

<style scoped>
</style>

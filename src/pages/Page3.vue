<template>
  <div>
    <pub>
      <div class="son">
        son content
      </div>
      <div class="action" style="float:right">
        <el-button type="primary" @click="addNum"><i class="el-icon-plus"></i>添加用户</el-button>
      </div>
    </pub>
    <addUser :showAddUser.sync="showAddUser"></addUser>
  </div>
</template>

<script>
  import pub from '../components/public.vue';
  import addUser from '../components/addUser';
    export default {
        name: "Page3",
        components:{
        addUser, pub
      },
      data(){
          return {
            showAddUser: false,
          }
      },
      methods:{
        addNum () {
          this.showAddUser= true
        }
      }
    }
</script>

<style scoped>

</style>

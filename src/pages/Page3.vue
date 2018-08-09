<template>
  <div>
    <pub>
      <div class="son">
        son content
      </div>
      <div class="action" >
        <el-button type="primary" @click="addNum">下一步</el-button>
      </div>
    </pub>
    <templateSelect :showTemplate.sync="showTemplate"></templateSelect>
  </div>
</template>

<script>
  import pub from '../components/public.vue';
  import templateSelect from '../components/templateSelect';
    export default {
        name: "Page3",
        components:{
          templateSelect, pub
      },
      data(){
          return {
            showTemplate: false,
          }
      },
      methods:{
        addNum () {
          this.showTemplate= true
        }
      }
    }
</script>

<style scoped>

</style>

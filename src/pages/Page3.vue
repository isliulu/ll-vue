<template>
  <div>
    <div>
      <div class="son">
        son content
      </div>
      <div class="action">
        <el-button type="primary" @click="addNum">下一步</el-button>
      </div>
    </div>
    <div style="margin: 20px;"></div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "Page3",
    data() {
      return {
        showTemplate: false,
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      }
    },
    methods: {
      addNum() {
        this.showTemplate = true
      }
    }
  }
</script>

<style scoped>


</style>

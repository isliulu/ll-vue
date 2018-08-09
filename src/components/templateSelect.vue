<template>
  <div>
    <el-dialog title="授权通知模板" :visible.sync="showTemplate"   class="user-dialog" @close="resetUserFrom(), $emit('update:showTemplate', false)" :modal-append-to-body="false">
      <el-form :inline="true">
        <el-button type="text">模板选择</el-button>
        <el-button type="text">已选择模板</el-button>
        <template >
          <el-form-item label="模板名称：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >搜索</el-button>
          </el-form-item>
        </template>
      </el-form>
      <div class="table">
        <el-table class="margin-top-10"
                  :data="tableData" style="width: 100%"
                  :default-sort="{prop: 'id', order: 'descending'}">
          <el-table-column type="selection">
          </el-table-column>
          <el-table-column prop="tempName" label="模板名称" sortable>
            <template slot-scope="scope">
              <span class="table-text-blue">{{ scope.row.tempName }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="tempContent" label="模板内容" sortable>
            <template slot-scope="scope">
              <span class="table-text-blue">{{ scope.row.tempContent }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="platform" label="平台（全部）">
            <template slot-scope="scope">
              <span class="table-text-blue">{{ scope.row.platform}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="informType" label="通知类型（全部）" >
            <template slot-scope="scope">
              <span class="table-text-blue">{{ scope.row.informType}}</span>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div style="text-align: right;">
        <el-pagination
          background
          layout=" prev, pager, next"
          :total="3">
        </el-pagination>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button   @click="$emit('update:showTemplate', false)">取消</el-button>
        <el-button @click="beforeSelect">上一步</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import vm from '../services/vm.js';

  export default {
    props: {
      showTemplate: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        formLabelWidth: '120px',
        tableData: [],
        tempName:'',
        tempContent:'',
        platform:'',
        informType:'',
      };
    },
    methods: {
      //提交
      /*submitUserForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },*/
      resetUserFrom () {
        if (this.$refs['showTemplate'] !== undefined) {
          this.$refs['showTemplate'].resetFields()
        }
      },
      beforeSelect () {
        vm.$emit('showTemplate', this.showTemplate)
      }
    },
  }
</script>
<style scoped lang="scss">

</style>

<!--<style lang="scss">
  .el-form&#45;&#45;inline .el-form-item{
    float: right;
  }
</style>-->

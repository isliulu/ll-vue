<template>
  <div>
    <el-dialog title="编辑用户信息" :visible.sync="editUser"  :editUserIfo="editUserIfo"
               @close="resetUserFrom(), $emit('update:editUserIfo', false)" :modal-append-to-body="false">
      <el-form :model="ruleForm"  ref="editForm" label-width="100px">
        <el-form-item label="用户账号" prop="userAccount">
          <el-input v-model="ruleForm.userAccount" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名" prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="telNumber">
          <el-input v-model="ruleForm.telNumber"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="userEmail" class="email">
          <el-input v-model="ruleForm.userEmail"></el-input>
        </el-form-item>
        <el-form-item label="开放权限" prop="Authorization">
          <el-checkbox-group v-model="ruleForm.Authorization">
            <el-checkbox label="语音通知权限" name="Authorization"></el-checkbox>
            <el-checkbox label="短信通知权限" name="Authorization"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button   @click="$emit('update:editUserIfo', false)">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name:"editUserIfo",
    props: {
      editUserIfo: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        editUser: this.editUserIfo,
        formLabelWidth: '120px',
        editForm:'',
        ruleForm: {
          userAccount: '',
          userName: '',
          telNumber: '',
          userEmail: '',
          userPass: '',
          checkPass: '',
          Authorization: [],
        },
      };
    },
    methods: {
      submitForm(){
        this.$refs['editForm'].jfvalidate((valid) => {})
      },
      resetUserFrom () {
        if (this.$refs['editUserIfo'] !== undefined) {
          this.$refs['editUserIfo'].resetFields()
        }
      }
    },
    watch: {
      editUserIfo () {
        this.editUser = this.editUserIfo
      }
    },
  }
</script>

<style scoped>

</style>

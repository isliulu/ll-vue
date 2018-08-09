<template>
  <div>
    <el-dialog title="编辑用户信息" :visible.sync="editUser"  :editUserIfo="editUserIfo"
               @close="resetUserFrom(), $emit('update:editUserIfo', false)" :modal-append-to-body="false">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
        demoRuleForm:'',
        ruleForm: {
          userAccount: '',
          userName: '',
          telNumber: '',
          userEmail: '',
          userPass: '',
          checkPass: '',
          Authorization: [],
        },
        rules: {
          userAccount: [
            {required: true, message: '请输入', trigger: 'blur'},
          ],
          userName: [
            {required: true, message: '请输入', trigger: 'blur'},
          ],
          telNumber: [
            {required: false, message: '请输入', trigger: 'blur'},
            {min: 11, max: 11, message: '请输入正确的电话格式', trigger: 'blur'}
          ],
          userEmail: [
            { required: false, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
          ],
          userPass: [
            {required: true, message: '请输入', trigger: 'blur'},
          ],
          checkPass: [
            {required: true, message: '请输入', trigger: 'blur'},
          ],
          Authorization: [
            {required: true, message: '请输入', trigger: 'blur'},
          ],
        }
      };
    },
    methods: {
      resetUserFrom () {
        if (this.$refs['showAddUser'] !== undefined) {
          this.$refs['showAddUser'].resetFields()
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

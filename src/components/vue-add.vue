<template>
  <test>
      <el-dialog title="添加用户" :visible.sync="showUser" :showAddUser="showAddUser" class="user-dialog"
                 @close="resetUserFrom(), $emit('update:showAddUser', false)" :modal-append-to-body="false">
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
          <el-form-item label="登录密码" prop="userPass">
            <el-input v-model="ruleForm.userPass" auto-complete="off" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input v-model="ruleForm.checkPass" auto-complete="off" type="password"></el-input>
          </el-form-item>
          <el-form-item label="开放权限" prop="token">
            <el-checkbox-group v-model="ruleForm.token">
              <el-checkbox label="语音通知权限" name="token"></el-checkbox>
              <el-checkbox label="短信通知权限" name="token"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="可用语音" prop="availableVsum">
            <el-input v-model="ruleForm.availableVsum" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="可用短信" prop="availableMsum">
            <el-input v-model="ruleForm.availableMsum" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm('ruleForm')">下一步</el-button>
          <el-button @click="$emit('update:showAddUser', false)">取消</el-button>
        </div>
      </el-dialog>
  </test>
</template>
<script>
  import test from '../components/dialog';

  export default {
    components:{
      test
    },
    props: {
      showAddUser: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        showUser: this.showAddUser,
        formLabelWidth: '120px',
        demoRuleForm: '',
        ruleForm: {
          userAccount: '1',
          userName: '1',
          telNumber: '',
          userEmail: '',
          userPass: '',
          checkPass: '',
          token: [],
          availableVsum: '',
          availableMsum: '',
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
            {required: false, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
          ],
          userPass: [
            {required: true, message: '请输入', trigger: 'blur'},
          ],
          checkPass: [
            {required: true, message: '请输入', trigger: 'blur'},
          ],
          token: [
            {required: true, message: '请输入', trigger: 'blur'},
          ],
          availableVsum: [
            {required: true, message: '请输入', trigger: 'blur'},
          ],
          availableMsum: [
            {required: true, message: '请输入', trigger: 'blur'},
          ]
        }
      };
    },
    methods: {
      submitUserForm(ruleForm) {
        this.$refs[ruleForm].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetUserFrom() {
        if (this.$refs['showAddUser'] !== undefined) {
          this.$refs['showAddUser'].resetFields()
        }
      }
    },
    watch: {
      showAddUser() {
        this.showUser = this.showAddUser
      }
    },
  }
</script>
<style scoped lang="scss">
  .user-dialog {
    width: 1200px;
  }
</style>

<template>
  <div>
    <el-dialog title="重置密码" :visible.sync="resetPass" :showReset="showReset"
               @close="resetUserFrom(), $emit('update:showReset', false)" :modal-append-to-body="false">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="新密码" prop="newPass">
          <el-input v-model="ruleForm.newPass" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="$emit('update:showReset', false)">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: "resetPassword",
    props: {
      showReset: {
        type: Boolean,
        default: false
      }
    },
    data() {
      var validateNewPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validateCheckPass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.newPass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        resetPass: this.showReset,
        ruleForm: {
          newPass: '1',
          checkPass: '1',
        },
        rules: {
          newPass: [
            { validator: validateNewPass, trigger: 'blur' },
            {required: true, message: '请输入', trigger: 'blur'},
          ],
          checkPass: [
            { validator: validateCheckPass, trigger: 'blur' },
            {required: true, message: '请输入', trigger: 'blur'}
          ]
        }


      }
    },
    methods: {
      /*      submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },*/

      resetUserFrom() {
        if (this.$refs['showReset'] !== undefined) {
          this.$refs['showReset'].resetFields()
        }
      },
    },
    watch: {
      showReset() {
        this.resetPass = this.showReset
      }
    },
  }
</script>

<style scoped>

</style>

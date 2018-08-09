<template>
  <div>
    <el-dialog title="充值" :visible.sync="reCharge" :showRecharge="showCharge"
               @close="resetUserFrom(), $emit('update:showCharge', false)" :modal-append-to-body="false">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="剩余语音时长" prop="voiSum">
          <el-input v-model="ruleForm.voiSum"></el-input>
        </el-form-item>
        <el-form-item label="剩余短信条数" prop="mesSum">
          <el-input v-model="ruleForm.mesSum"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        <el-button @click="$emit('update:showCharge', false)">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

  export default {
    name: "recharge",
    props: {
      showCharge: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        reCharge: this.showCharge,
        ruleForm: {
          voiSum: '1',
          mesSum: '1',
        },
        rules: {
          voiSum: [
            {required: true, message: '请输入', trigger: 'blur'},
          ],
          mesSum: [
            {required: true, message: '请输入', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      resetUserFrom() {
        if (this.$refs['showCharge'] !== undefined) {
          this.$refs['showCharge'].resetFields()
        }
      },
    },
    watch: {
      showCharge() {
        this.reCharge = this.showCharge
      }
    }
  }
</script>

<style scoped>

</style>

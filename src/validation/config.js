/* 
 * creared by Joon on 2018/08/09
 * async-validator 默认的14种数据类型：string、number、boolean、method、regexp、integer、float、array、object、enum、date、url、hex、email
 * 默认使用：
 * 直接在前面加is即可，例<el-form-item label="活动名称" prop="username" isstring :maxlength="3"></el-form-item>
 * 自定义使用：
 * 放入自定义name ，例<el-form-item label="活动名称" prop="username" :maxlength="3" :minlength="1"></el-form-item>
 * ================注意事项=================
 * 1.maxlength/minlength 和 max/min 不能同时使用
 *   maxlength 为验证字符串类型，max验正数字类型（数字类型 el-input 需要绑定 v-model.number，参考Vue官方v-model修饰符）
 * 2.required 只能使用 isrequired （因为默认 required 的 message有问题），使用：
 *   在自己的 <el-form-item class="is-required"></el-form-item> class添加属性 ’is-required‘
 * 3.重置默认 message，如果想绑定自己的 mesage 使用方法：
 *   <el-form-item :resetMsg="{规则名max: '重置文字'}" :max="10"></el-form-item>
 * 4.button 的点击验证，el-button 默认绑定的事件 submitForm 不变，仅把 validate 替换为 jfvalidate，使用：
 *   <el-button style="width:100%" type="primary" @click="submitForm('ruleForm')">确定</el-button>
 *   this.$refs[formName].jfvalidate((valid) => {})
 * 5.此文件目前仅支持到 blur 验证 ，change 暂未配置
 * ========================================
 * 参考：https://github.com/yiminghe/async-validator
 */
import MyPlugin from './index'
export const jfRules = {}
/**
 * 添加自定义验证
 * @param { String }  name props的key值
 * @param { Null }  propOptions 主要为数据类型，同Vue.props
 * @param { Object }  rule 验证规则
 */
export const init = () => {
  MyPlugin.addRules({
    name: 'maxlength', 
    propOptions: Number,
    rule:{
      //为开发者提供了整个 validator 官方返回的参数和当前 elFormItem 组件以及绑定的 props，一般只用到 value 和 props
      match: ({rule, value, callback, source, options, components, props}) => {
        //你的验证规则，如 value的长度大于定义的长度、不满足 !value.test(/reg/)、等等
        if(typeof value === 'string' && value.length > props) {
          return true
        }
      },
      //同上，一般只用到 props
      message:({props}) => {
        return `允许的最大长度是${props}个`
      }
    }
  })
  MyPlugin.addRules({
    name: 'minlength', 
    propOptions: Number, 
    rule:{
      match: ({value, props}) => {
        if(typeof value === 'string' && value.length < props) {
         return true
        }
        return false
      },
      message:({props}) => {
        return `允许的最小长度是${props}个`
      }
    }
  })
  MyPlugin.addRules({
    name: 'max', 
    propOptions: Number, 
    rule:{
      match: ({value, props}) => {
        if(typeof value === 'number' && value > props) {
         return true
        }
        return false
      },
      message:({props}) => {
        return `允许的最大值是${props}`
      }
    }
  })
  MyPlugin.addRules({
    name: 'min', 
    propOptions: Number, 
    rule:{
      match: ({value, props}) => {
        if(typeof value === 'number' && value < props) {
         return true
        }
        return false
      },
      message:({props}) => {
        return `允许的最小值是${props}`
      }
    }
  })
}


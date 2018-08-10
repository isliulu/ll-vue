/**
 * creared by Joon on 2018/08/09
 * 
 * main.js 中引入 index.js 文件
 * import jfValidation from './validation'
 * 
 * Vue.use(jfValidation, {
 *   type: 'blur'
 *  })
 */
import ElFormItemMixin from './elFormItem'
import ElFormMixin from './elForm'
import { init, jfRules } from './config'

let installed = false
let ElFormItemComponent
let ElFormComponent
const MyPlugin = {
  /** 
   * @param Vue 默认
   * @param options { Object } 在main.js里可以配置参数
   */
  install: (Vue, options = {}) => {
    if (installed) return
    installed = true
    ElFormItemComponent = Vue.component('ElFormItem')
    ElFormComponent = Vue.component('ElForm')
    if (!ElFormItemComponent) throw Error('please install element-ui first')
    if (!ElFormComponent) throw Error('please install element-ui first')
    init();//初始化所有props
    ElFormItemComponent.mixin(ElFormItemMixin)//ElFormItem混入所有props
    ElFormComponent.mixin(ElFormMixin)//ElForm混入button的调用方法
  },

  /** 
   * 为ElFormItemMixin添加验证规则
   */
  addRules:({ name, propOptions, rule })=>{
    if (!installed) throw Error('please use jfValidation in main.js')
    if (!propOptions) throw Error('please set potions for props')
    ElFormItemMixin.props[name] = propOptions;
    jfRules[name]= rule;
  },

  /** 
   * ElFormItemMixin为添加props
   */
  addProps:({ name, propOptions, rule })=>{
    if (!installed) throw Error('please use jfValidation in main.js')
    if (!propOptions) throw Error('please set potions for props')
    ElFormItemMixin.props[name] = propOptions;
  }

}

export default MyPlugin
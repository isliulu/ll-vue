/**
 * creared by Joon on 2018/08/09
 */
import AsyncValidator from 'async-validator';
import { noop } from 'element-ui/src/utils/util';
import { jfRules } from './config'

export default {

  props:{
    isstring:Boolean,
    isnumber:Boolean,
    isboolean:Boolean,
    ismethod:Boolean,
    isregexp:Boolean,
    isinteger:Boolean,
    isfloat:Boolean,
    isarray:Boolean,
    isobject:Boolean,
    isenum:Boolean,
    isdate:Boolean,
    isurl:Boolean,
    ishex:Boolean,
    isemail:Boolean,
    isrequired:Boolean,
    resetMsg: Object
  },

  mounted(){
    this.$on('el.form.blur', this.myFieldBlur);
    //this.$on('el.form.change', this.myFieldChange);
  },

  methods:{
    jfValidate(trigger, callback = noop){
      const self = this;
      const descriptor = {}
      descriptor[this.prop] = [
        {validator: (rule, value, callback, source, options) => {
          let errors = [];
          for (let i in jfRules){
            if(self[i] && jfRules[i].match({rule: rule, value: value, source:source, options: options, components: self, props: self[i]})){
              let msg = jfRules[i].message({rule: rule, value: value, source:source, options: options, components: self, props: self[i]});
              if(self.resetMsg && self.resetMsg[i]){
                msg = self.resetMsg[i]
              }
              errors.push(typeof msg === 'string' ? msg : 'message must be String!');
            }
          }
          callback(errors)
        }}
      ]
      //存入async-validator默认的14种数据类型校验
      if(this.isstring){
        descriptor[this.prop].push({type: "string", message: this.resetMsg && this.resetMsg['isstring'] ? this.resetMsg['isstring'] : '必须是字符串'})
      }
      if(this.isnumber){
        descriptor[this.prop].push({type: "number", message: this.resetMsg && this.resetMsg['isnumber'] ? this.resetMsg['isnumber'] :'必须是数字',trigger:'change'})
      }
      if(this.isboolean){
        descriptor[this.prop].push({type: "boolean", message: this.resetMsg && this.resetMsg['isboolean'] ? this.resetMsg['isboolean'] : '必须是布尔值'})
      }
      if(this.ismethod){
        descriptor[this.prop].push({type: "method", message: this.resetMsg && this.resetMsg['ismethod'] ? this.resetMsg['ismethod'] : '必须是方法'})
      }
      if(this.isregexp){
        descriptor[this.prop].push({type: "regexp", message: this.resetMsg && this.resetMsg['isregexp'] ? this.resetMsg['isregexp'] : '必须是正则表达式'})
      }
      if(this.isinteger){
        descriptor[this.prop].push({type: "integer", message: this.resetMsg && this.resetMsg['isinteger'] ? this.resetMsg['isinteger'] : '必须是整数'})
      }
      if(this.isfloat){
        descriptor[this.prop].push({type: "float", message: this.resetMsg && this.resetMsg['isfloat'] ? this.resetMsg['isfloat'] : '必须是小数'})
      }
      if(this.isarray){
        descriptor[this.prop].push({type: "array", message: this.resetMsg && this.resetMsg['isarray'] ? this.resetMsg['isarray'] : '必须是数组'})
      }
      if(this.isobject){
        descriptor[this.prop].push({type: "object", message: this.resetMsg && this.resetMsg['isobject'] ? this.resetMsg['isobject'] : '必须是对象格式'})
      }
      if(this.isenum){
        descriptor[this.prop].push({type: "enum", message: this.resetMsg && this.resetMsg['isenum'] ? this.resetMsg['isenum'] : '必须是枚举类型'})
      }
      if(this.isdate){
        descriptor[this.prop].push({type: "date", message: this.resetMsg && this.resetMsg['isdate'] ? this.resetMsg['isdate'] : '日期格式不正确'})
      }
      if(this.isurl){
        descriptor[this.prop].push({type: "url", message: this.resetMsg && this.resetMsg['isurl'] ? this.resetMsg['isurl'] : 'URL格式不正确'})
      }
      if(this.ishex){
        descriptor[this.prop].push({type: "hex", message: this.resetMsg && this.resetMsg['ishex'] ? this.resetMsg['ishex'] : '必须是16进制'})
      }
      if(this.isemail){
        descriptor[this.prop].push({type: "email", message: this.resetMsg && this.resetMsg['isemail'] ? this.resetMsg['isemail'] : 'E-mail格式不正确'})
      }
      if(this.isrequired){
        descriptor[this.prop].push({required: true, message: this.resetMsg && this.resetMsg['isrequired'] ? this.resetMsg['isrequired'] : '此项是必填项'})
      }
      const validatorSchema = new AsyncValidator(descriptor);
      const model = {}
      model[this.prop] = this.fieldValue;

      validatorSchema.validate(model,  { firstFields: true }, (errors, invalidFields) => {
        this.validateState = !errors ? 'success' : 'error';
        this.validateMessage = errors ? errors[0].message : '';
  
        callback(this.validateMessage, invalidFields);
        this.elForm && this.elForm.$emit('validate', this.prop, !errors);
      })
    },

    myFieldBlur(){
      this.jfValidate('blur');
    },

    myFieldChange(){
      this.jfValidate('change')
    },

  }

}
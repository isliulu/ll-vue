/**
 * creared by Joon on 2018/08/09
 */
import objectAssign from 'element-ui/src/utils/merge';

export default {
  methods:{
    jfvalidate(callback){
      if (!this.model) {
        console.warn('[Element Warn][Form]model is required for validate to work!');
        return;
      }
      let promise;
      // if no callback, return promise
      if (typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise((resolve, reject) => {
          callback = function(valid) {
            valid ? resolve(valid) : reject(valid);
          };
        });
      }
      let valid = true;
      let count = 0;
      // 如果需要验证的fields为空，调用验证时立刻返回callback
      if (this.fields.length === 0 && callback) {
        callback(true);
      }
      let invalidFields = {};
      this.fields.forEach(field => {
        field.jfValidate('', (message, field) => {//核心为调用混入elFromItem里的自定义验证
          if (message) {
            valid = false;
          }
          invalidFields = objectAssign({}, invalidFields, field);
          if (typeof callback === 'function' && ++count === this.fields.length) {
            callback(valid, invalidFields);
          }
        });
      });

      if (promise) {
        return promise;
      }
    }
  }
}
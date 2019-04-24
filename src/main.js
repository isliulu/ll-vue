import Vue from 'vue';
import router from './router';
import App from './App';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import jfValidation from './validation';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(jfValidation, {
  type: 'blur'
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  store
});

import Vue from 'vue';
import Router from 'vue-router';

const Page1 = r => require.ensure([], () => r(require('@/pages/Page1')), 'Page1');
const Page2 = r => require.ensure([], () => r(require('@/pages/Page2')), 'Page2');
const Page3 = r => require.ensure([], () => r(require('@/pages/Page3')), 'Page3');


const home = r => require.ensure([], () => r(require('@/pages/home')), 'home');
const login = r => require.ensure([], () => r(require('@/common/login.vue')), 'login');


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {path: '', redirect: '/Page1'},
        {path: '/Page1', name: 'Page1', component: Page1},
        {path: '/Page2', name: 'Page2', component: Page2},
        {path: '/Page3', name: 'Page3', component: Page3}
      ]
    },
    {path: '', redirect: '/login'},
    {path: '/login', name: 'login', component: login}

  ]
})




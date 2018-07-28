import Vue from 'vue';
import Router from 'vue-router';

const Page1 = r => require.ensure([], () => r(require('@/pages/Page1')), 'Page1');
const Page2 = r => require.ensure([], () => r(require('@/pages/Page2')), 'Page2');
const Page3 = r => require.ensure([], () => r(require('@/pages/Page2')), 'Page3');
const Page4 = r => require.ensure([], () => r(require('@/pages/Page2')), 'Page4');
const Page5 = r => require.ensure([], () => r(require('@/pages/Page2')), 'Page5');
const Page6 = r => require.ensure([], () => r(require('@/pages/Page2')), 'Page6');

const home = r => require.ensure([], () => r(require('@/pages/home')), 'home');


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
        {path: '/Page3', name: 'Page3', component: Page3},
        {path: '/Page4', name: 'Page4', component: Page4},
        {path: '/Page5', name: 'Page5', component: Page5},
        {path: '/Page6', name: 'Page6', component: Page6}
        ]
    }
  ]
})




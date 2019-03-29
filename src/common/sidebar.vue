<template>
  <div id="main">
    <aside class="myside">
      <div class="sidebar" style="width: 250px;height:100%">
        <el-menu class="el-menu-sidebar" style=" background-color: #364150;height:100%" active-text-color="#20a0ff"
                 text-color="#bfcbd9" :collapse="collapse" unique-opened router>
          <template v-for="item in items">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </template>
              <el-menu-item v-for="subItem in subItems" :key="subItem.index" :index="subItem.index">
                <i :class="subItem.icon"></i>
                <span slot="title">{{subItem.title}}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>
      </div>
    </aside>
  </div>
</template>

<script>import vm from '../services/vm.js'

export default {
  data() {
    return {
      collapse: false,   //初始化
      items: [
        {
          icon: '',
          index: 'Page1',
          title: '导航一'
        },
        {
          icon: '',
          index: 'Page',
          title: '导航二'
        }
      ],
      subItems: [
        {
          icon: '',
          index: 'Page1',
          title: '用户管理'
        },
        {
          icon: '',
          index: 'Page2',
          title: '管理2'
        },
        {
          icon: '',
          index: 'Page3',
          title: '管理3'
        }

      ]
    }
  },
  created() {
    vm.$on('collapse', data => {
      this.collapse = data;
    });
  }
}
</script>

<style>
  .myside {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    height: 100%;
  }

  .el-menu-sidebar:not(.el-menu--collapse) {
    width: 250px;
  }

  .el-menu-item {
    background-color: #364150;
  }

</style>

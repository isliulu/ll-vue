<template>
  <div id="main">
    <aside class="myside">
      <div class="sidebar" style="width: 250px;height:100%">
        <el-menu class="el-menu-sidebar" style=" background-color: #364150;height:100%" active-text-color="#20a0ff"
                 text-color="#bfcbd9" :collapse="collapse" unique-opened router>
          <template v-for="item in items">
            <el-submenu :index="item.index" :key="item.index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="Page1">选项1</el-menu-item>
                <el-menu-item index="Page2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="Page3">选项3</el-menu-item>
              <el-menu-item index="Page4">选项4</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="Page5">选项5</el-menu-item>
              <el-menu-item index="Page6">选项6</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="Page9">选项7</el-menu-item>
              <el-menu-item index="Page10">选项8</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
    </aside>
  </div>
</template>

<script>
  import vm from '../services/vm.js';

  export default {
    data() {
      return {
        collapse: false,   //初始化
        items: [
          {
            index: 'Page1',
            title: '选项1',
          },
          {
            index: 'Page2',
            title: '选项2'
          },
          {
            index: 'Page3',
            title: '选项3'
          }/*,
          {
            index: 'Page4',
            title: '选项4'
          },
          {
            index: 'Page5',
            title: '选项5'
          },
          {
            index: 'Page6',
            title: '选项6'
          }*/
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

  .el-menu-item-group {
    background-color: #364150;
  }

</style>

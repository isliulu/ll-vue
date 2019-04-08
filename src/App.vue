<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
  // import vm from './services/vm.js';
  //
  // export default {
  //   data() {
  //     return {
  //       isTrue: false
  //     }
  //   },
  //   components: {
  //     vHeader, vSidebar
  //   },
  //   created() {
  //     vm.$on('collapse', data => {
  //       this.isTrue = data;
  //     });
  //   }
  // }
</script>

<style lang="scss">
  html {
    height: 100%;
    body {
      margin: 0;
      padding: 0;
      height: 100%;
    }
  }

  .app {
    width: 100%;
    height: 100%;
    font-size: 20px;
  }

  /*.main {*/
    /*position: relative;*/
    /*width: 100%;*/
    /*height: calc(100% - 60px);*/
  /*}*/
  /*.content {*/
    /*margin-left: 250px;*/
    /*height: 100%;*/
    /*color: #000;*/
  /*}*/
  /*.aa {*/
    /*margin-left: 65px;*/
    /*height: 100%;*/
  /*}*/

  @import "../static/font/iconfont.css";
</style>




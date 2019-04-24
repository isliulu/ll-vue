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

  @import "../static/font/iconfont.css";
</style>




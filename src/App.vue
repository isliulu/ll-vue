<template>
  <div class="app">
    <div id="header">
      <v-header></v-header>
    </div>
    <div class="main">
      <v-sidebar></v-sidebar>
      <div class="content" v-bind:class="{aa:isTrue}">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import vHeader from './common/header.vue';
  import vSidebar from './common/sidebar.vue';
  import vm from './services/vm.js';

  export default {
    data() {
      return {
        isTrue: false
      }
    },
    components: {
      vHeader, vSidebar
    },
    created() {
      vm.$on('collapse', data => {
        this.isTrue = data;
      });
    }
  }
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

  .main {
    position: relative;
    width: 100%;
    height: calc(100% - 60px);
  }
  .content {
    margin-left: 250px;
    height: 100%;
    color: #000;
  }
  .aa {
    margin-left: 65px;
    height: 100%;
  }


</style>




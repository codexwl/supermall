<template>
  <div id="app">

    <MainTabBar class="MainTabBar"/>
    <router-view/>
  </div>
</template>

<script>
  import MainTabBar from './components/content/mainTar/mainTabBar'
  import Home from './views/home/home'
  export default {
    name: 'app',
    components: {
      MainTabBar,
      Home,
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  .MainTabBar{
    z-index: 2;
  }
</style>

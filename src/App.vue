<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from "./components/tabbar/TabBar.vue";
export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>
<style lang="less" scoped>
@import "assets/css/base.css";
</style>

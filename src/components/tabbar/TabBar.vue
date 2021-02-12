<template>
  <van-tabbar v-model="active" route active-color='#f00'>
    <van-tabbar-item icon="home-o" to='/home'>首页</van-tabbar-item>
    <van-tabbar-item icon="apps-o" to='/category'>分类</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to='/cart'>购物</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to='/profile'>我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: "TabBar",
  data() {
    return {
       active: 0,
    };
  },
};
</script>

<style></style>

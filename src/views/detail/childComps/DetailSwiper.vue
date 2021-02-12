<template>
     <van-swipe loop autoplay='3000' indicator-color='#ff8198' :height="300">
      <van-swipe-item v-for="(item, index) in swiperImg" :key="index">
          <img v-lazy="item" />
      </van-swipe-item>
    </van-swipe>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  name:'DetailSwiper',
  props:{
    swiperImg:{
      type:Array,
      default:()=>[]
    }
  }
}
</script>

<style scoped>
img{
  width: 100%;
}
</style>
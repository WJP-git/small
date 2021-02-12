<template>
  <div class="swiper">
    <van-swipe loop autoplay='3000' indicator-color='#ff8198' :height='166'>
      <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img v-lazy="item.image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style lang="less" scoped>
.swiper{
  width: 100%;
  // height: 166px;
  overflow: hidden;
}
img {
  width: 100%;
}

</style>

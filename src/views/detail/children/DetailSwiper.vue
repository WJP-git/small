<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,i) in topImages" :key="i">
      <img :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style lang="less" scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>
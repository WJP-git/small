<template>
  <swiper>
    <swiper-item v-for="(item,i) in banners" :key="i">
      <a :href="item.link">
        <img :src="item.image" alt @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imageLoad() {
      this.$emit("swiperLoad");
    },
  },
};
</script>

<style>
</style>
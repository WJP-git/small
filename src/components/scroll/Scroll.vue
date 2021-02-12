<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  data() {
    return {
      scroll,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      mouseWheel: true,
      scrollbars: false,
      probeType: 2,
      pullUpLoad: true,
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true,
      observeDOM: true,
    });
    this.scroll.on("scroll", (position) => {
      this.$emit("scrollContent", position.y);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullUpLoading");
    });
    
  },
  methods: {
    scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
  },
};
</script>

<style scoped></style>

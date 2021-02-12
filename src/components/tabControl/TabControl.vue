<template>
  <div class="tab-control">
    <div
      class="item"
      v-for="(item, i) in titles"
      :key="i"
      :class="{ active: currentIndex === i }"
      @click.stop="itemClick(i)"
    >
      <span>{{ item }}</span>
    </div>

   
  </div>
</template>

<script>

export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(i) {
      this.currentIndex = i;
      this.$emit("itemClick", i);
    },
  },
};
</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  line-height: 44px;
  background: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  background: #fff;
  position: relative;
  z-index: 11;
  .item {
    flex: 1;
    span {
      padding: 5px;
    }
    &.active span {
      color: var(--color-high-text);
      border-bottom: 3px solid var(--color-tint);
    }
  }
}
</style>

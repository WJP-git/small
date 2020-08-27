<template>
  <div class="tab">
    <div
      class="item"
      :class="{active:i == currentIndex}"
      @click="itemClick(i)"
      v-for="(item,i) in control"
      :key="i"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    control: {
      type: Array,
      default() {
        return [];
      },
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
      this.$emit("tabClick", i);
    },
  },
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  line-height: 44px;
  background: #fff;
  text-align: center;
  font-size: 14px;
  font-weight: 700;
  .item {
    flex: 1;
  }
  span {
    padding: 5px;
  }
  .active span {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
}
</style>
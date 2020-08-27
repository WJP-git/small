<template>
  <div class="item" @click="itemClick">
    <span v-if="!isActive">
      <slot name="item-icon"></slot>
    </span>
    <span v-else>
      <slot name="item-icon-active"></slot>
    </span>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      required: true,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style lang='less' scoped>
.item {
  flex: 1;
  font-size: 14px;
  img {
    width: 24px;
    height: 24px;
    margin: 3px 0 3px;
    vertical-align: middle;
  }
}
</style>
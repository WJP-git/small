<template>
  <div class="menu-list">
    <div
      class="menu-list-item"
      v-for="(item, index) in menu"
      :key="index"
      :class="{ active: currentIndex === index }"
      @click.stop="itemClick(index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CateMenu",
  props: {
    menu: {
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
    itemClick(i){
      this.currentIndex = i
      this.$emit('MenuClick',i)
    }
  },
};
</script>

<style scoped>
.menu-list {
  width: 100px;
  position: relative;
  overflow: hidden;
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 50px;
  right: 0;
  left: 0;
}

.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.menu-list-item.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>

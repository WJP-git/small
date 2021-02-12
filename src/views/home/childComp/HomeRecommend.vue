<template>
  <div class="recommend">
    <div class="item" v-for="(item, i) in recommend" :key="i">
      <a :href="item.link">
        <img v-lazy="item.image" alt="" />
      </a>
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommend: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  box-sizing: border-box;
  .item {
    flex: 1;
    img {
      width: 70px;
    }
  }
}
</style>

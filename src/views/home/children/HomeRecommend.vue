<template>
  <div class="recommends">
    <div class="item" v-for="(item,i) in recommends " :key="i">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="less" scoped>
.recommends {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
  .item {
    flex: 1;
    font-size: 13px;
    img {
      width: 65px;
      margin-bottom: 10px;
    }
  }
}
</style>
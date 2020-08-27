<template>
  <div class="goods">
    <GoodsListItem class="item" v-for="(item,i) in goods" :key="i" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    width: 48%;
  }
}
</style>
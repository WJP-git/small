<template>
  <div class="goods">
    <goods-list-item :item='item' v-for="(item,i) in list" :key="i" class="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem';
export default {
  name: "GoodsList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  components:{
    GoodsListItem
  }
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
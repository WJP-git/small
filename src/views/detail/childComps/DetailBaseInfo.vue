<template>
  <div class="base-info" v-if="Object.keys(baseInfo).length > 0" >
    <h4 class="title">{{ baseInfo.title }}</h4>
    <div class="price">
      <span class="newPrice">{{ baseInfo.newPrice }}</span>
      <span class="oldPrice">{{ baseInfo.oldPrice }}</span>
      <span class="discount">{{ baseInfo.discountDesc }}</span>
    </div>
    <div class="columns">
      <span>{{ baseInfo.columns[0] }}</span>
      <span>{{ baseInfo.columns[1] }}</span>
      <span>{{ baseInfo.services[baseInfo.services.length - 1].name }}</span>
    </div>
    <div class="services">
      <div class="services-item" v-for="i in baseInfo.services.length - 1" :key="i">
        <img v-lazy="baseInfo.services[i - 1].icon" alt="" />
        <span>{{ baseInfo.services[i - 1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="less" scoped>
.base-info {
  margin-top: 10px;
  padding: 0 6px;
  .title {
    padding-left: 8px;
  }
  .price {
    margin-top: 8px;
    .newPrice {
      font-size: 16px;
      color: rgba(245, 122, 117, 0.61);
    }
    .oldPrice {
      font-size: 10px;
      text-decoration: line-through gray;
      padding-left: 5px;
      padding-right: 6px;
      color: gray;
    }
    .discount {
      padding: 0px 5px 0px 5px;
      font-size: 13px;
      color: white;
      background-color: hotpink;
      border-radius: 7px;
    }
  }
  .columns {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 5px;
    border-bottom: 4px solid rgb(252, 245, 245);
    span {
      font-size: 13px;
      color: gray;
    }
  }
  .services {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    .services-item {
      font-size: 14px;
      color: gray;
      img {
        width: 14px;
        vertical-align: middle;
      }
    }
  }
}
</style>

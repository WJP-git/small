<template>
  <div v-if="Object.keys(goods).length !==0" class="detailInfo">
    <span class="title">{{goods.title}}</span>
    <div class="Price">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span v-for="(item,i) in goods.columns" :key="i">{{item}}</span>
    </div>
    <!-- <div class="services">
      <span class="servicesItem" v-for="(item,index) in goods.services.length" :key="index">
        <img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon" alt />
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>-->
  </div>
</template>
<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.detailInfo {
  margin-top: 8px;
  padding: 0 6px;
}
.title {
  padding-left: 8px;
}
.Price {
  margin-top: 8px;
}
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
.columns {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: 4px solid rgb(252, 245, 245);
}
.columns span {
  font-size: 13px;
  color: gray;
}
.services {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.servicesItem img {
  width: 12px;
  height: 12px;
}
.servicesItem {
  font-size: 12.5px;
  color: gray;
}
</style>
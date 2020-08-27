<template>
  <van-goods-action class="bottom-bar">
    <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
    <van-goods-action-icon icon="cart-o" text="购物车" />
    <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
    <van-goods-action-button type="warning" text="加入购物车" />
    <van-goods-action-button type="danger" text="立即购买" />
  </van-goods-action>
</template>

<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";
import { Toast } from "vant";
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  name: "DetailBottomBar",
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },
  },
};
</script>

<style lang="less" scoped>
.bottom-bar {
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}
</style>
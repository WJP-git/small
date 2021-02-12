<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" @click.stop="onClickIcon" color="#ee0a24" />
    <van-goods-action-icon icon="cart-o" @click.stop="onClickIcon" text="购物车" />
    <van-goods-action-icon icon="star" @click.stop="onClickIcon" text="收藏" color="#ccc" />
    <van-goods-action-button type="warning" @click.stop="addCart" text="加入购物车" />
    <van-goods-action-button type="danger" @click.stop="onClickIcon" text="立即购买" />
  </van-goods-action>
</template>

<script>
import Vue from 'vue';
import { GoodsAction, GoodsActionIcon, GoodsActionButton,Toast  } from 'vant';

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
export default {
  name:'DetailBottom',
 methods: {
    onClickIcon() {
      Toast('暂不支持此功能');
    },
    // 商品添加到购物车
    addCart(){
      this.$emit('addCart')
      // Toast('加入成功');

    }
 },
}
</script>

<style>

</style>
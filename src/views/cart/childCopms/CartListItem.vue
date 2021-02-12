<template>
  <div class="item">
    <div class="check">
      <cart-check-btn @click.native="checkClick" :checked='cartItem.checked'/>
    </div>
    <div class="img">
      <img v-lazy="cartItem.img" alt="" />
    </div>
    <div class="info">
      <p class="title">{{ cartItem.title }}</p>
      <p class="desc">{{ cartItem.desc }}</p>
      <div class="price-count">
        <span class="price">￥{{ cartItem.price }}</span>
        <span class="count">×{{ cartItem.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheckBtn from './CartCheckBtn'
export default {
  name: "CartListItem",
  props: {
    cartItem: {
      type: Object,
      default: () => {},
    },
  },
  components:{
    CartCheckBtn
  },
  methods: {
    checkClick(){
      this.cartItem.checked = !this.cartItem.checked
    }
  },
};
</script>

<style lang="less" scoped>
.item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  background: #fff;
  .check {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img {
    padding: 5px;
    img {
      width: 80px;
      height: 100px;
      display: block;
      border-radius: 5px;
    }
  }
  .info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
    .title,
    .desc {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .title {
    }
    .desc {
      font-size: 14px;
      color: #666;
      margin-top: 15px;
    }
    .price-count {
      margin-top: 10px;
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      display: flex;
      justify-content: space-between;
      .price {
        color: orangered;
      }
    }
  }
}
</style>

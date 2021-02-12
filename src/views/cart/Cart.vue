<template>
  <div class="cart">
    <cart-nav-bar />
    <!-- 中间卡片 -->
    <cart-list />
    <!-- 结算 -->
    <cart-bottom/>
  </div>
</template>

<script>
import CartNavBar from "./childCopms/CartNavBar";
import CartList from './childCopms/CartList'
import CartBottom from './childCopms/CartBottom';
export default {
  name: "Cart",
  components: {
    CartNavBar,
    CartList,
    CartBottom,
  },
  
};
</script>

<style lang="less" scoped>
.cart{
  width: 100vw;
  height: 100vh;
}
</style>

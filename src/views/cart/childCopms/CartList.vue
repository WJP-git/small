<template>
  <div class="cart-list">
    <scroll class="scrollView">
     <cart-list-item v-for="(item,i) in cartList" :key="i" :cartItem="item"/>
    </scroll>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import Scroll from '@/components/scroll/Scroll'
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components:{
    CartListItem,
    Scroll
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style lang="less" scoped>
.cart-list{
  width: 100%;
  height: calc(100% - 94px);
  // overflow: hidden;
  .scrollView{
    width: 100%;
    height: 100%;
  }
}
</style>

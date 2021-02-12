<template>
  <div class="bottom-menu">
    <cart-check-btn class="select-all" @click.native="selectAll" :checked='isSelectAll'></cart-check-btn>
    <span>全选</span>
    <span class="total-price">合计: ¥{{ totalPrice }}</span>
    <span class="buy-product" @click.stop="calc">去计算 {{ checkLength() }}</span>
  </div>
</template>

<script>
import CartCheckBtn from "./CartCheckBtn";
import { mapGetters } from "vuex";

import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
  name: "CartBottom",
  components: {
    CartCheckBtn,
  },
  computed: {
    ...mapGetters(["cartList"]),
    // 总价
    totalPrice() {
      return this.cartList
        .filter((item) => item.checked)
        .reduce((prve, item) => {
          return prve + item.price * item.count;
        }, 0);
    },
    // 全选
    isSelectAll(){
      if(this.checkLength() !== 0){
        return this.cartList.every(item=>item.checked)
      }
    },
    
  },
  methods: {
    
    // 去计算
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
  // 全选
    selectAll(){
      if(this.isSelectAll){
        this.cartList.forEach(item=>item.checked = false)
      }else{
        this.cartList.forEach(item=>item.checked = true)

      }
    },
    // 去计算
    calc(){
      Toast('伤不起~~≧ ﹏ ≦~~');
    }
  },
};
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>

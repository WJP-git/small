<template>
  <div class="btn" :class="{check:checked}">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CartCheckBtn",
  props:{
    checked:{
      type:Boolean,
      defalut:true
    }
  }
};
</script>

<style scoped>
.btn {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
}
.check {
  background-color: #ff8198;
  /* border-color: #ff8198; */
}
</style>

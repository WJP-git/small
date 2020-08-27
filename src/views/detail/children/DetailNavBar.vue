<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="backClick">&lt;</div>
      <div slot="center" class="title">
        <div
          v-for="(item,i) in title"
          :key="i"
          class="item"
          :class="{active:i ===currentIndex}"
          @click="itemClick(i)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    itemClick(i) {
      this.currentIndex = i;
      this.$emit("navClick", i);
    },
  },
};
</script>
<style lang="less" scoped>
.title {
  display: flex;
}
.active {
  color: red;
}
.left {
  font-size: 25px;
}
.item {
  flex: 1;
  font-weight: 700;
  font-size: 13px;
}
</style>
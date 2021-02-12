<template>
  <nav-bar class="nav-bar">
    <div @click.stop="backClick" class="left" slot="left">＜</div>
    <div slot="center" class="title">
      <div
        class="item"
        v-for="(item, i) in titles"
        :key="i"
        :class="{ active: currentIndex === i }"
        @click.stop="titleClick(i)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
export default {
  name: "DetailNavBar",
  // props:{
  //   currentIndex:{
  //     type:Number,
  //     default:0
  //   }
  // },
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex:0
    };
  },
  methods: {
    // 返回上一页
    backClick() {
      this.$router.back();
    },
    // 头部item颜色切换
    titleClick(i) {
      this.currentIndex = i;
      this.$emit('navItemClick',i)
    },
  },
};
</script>

<style lang="less" scoped>
.nav-bar {
  background: #fff;
  .left {
    font-size: 25px;
  }
  .title {
    display: flex;
    .item {
      flex: 1;
      font-weight: 700;
      font-size: 13px;
      &.active {
        color: #f00;
      }
    }
  }
}
</style>

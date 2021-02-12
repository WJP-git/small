<template>
  <div class="category">
    <nav-bar class="nav-bar">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="content">
      <scroll class="scrollMenu">
        <cate-menu :menu="cate"  @MenuClick='MenuClick'/>
      </scroll>
    </div>
  </div>
</template>

<script>
import { getCate } from "@/network/cate";
import NavBar from "@/components/navbar/NavBar.vue";
import CateMenu from "./childComps/CateMenu";
import Scroll from "@/components/scroll/Scroll";
export default {
  name: "Category",
  components: {
    NavBar,
    CateMenu,
    Scroll,
  },
  data() {
    return {
      cate: [],
    };
  },
  created() {
    this.category();
  },
  methods: {
    // 网络请求
    category() {
      getCate().then((res) => {
        this.cate = res.data.category.list;
      });
    },
    // 自定义
    MenuClick(i){
      console.log(i);
    }
  },
};
</script>

<style lang="less" scoped>
.category {
  width: 100vw;
  height: 100vh;
}

.nav-bar {
  background: var(--color-tint);
  color: #fff;
}
.content{
  height: calc(100% - 94px);
  overflow: hidden;
}
.scrollMenu {
  width: 100px;
  height: 100%;
}
</style>

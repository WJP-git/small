<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">首页</div>
    </nav-bar>
    <tab-control ref="fixTabControl" v-show="isFixed" :titles="['流行', '新款', '精选']" @itemClick="tabControl" />

    <scroll
      class="scroll"
      ref="scrollView"
      @scrollContent="scrollContent"
      @pullUpLoading="pullUpLoading"
    >
      <!-- 轮播 -->
      <home-swiper :banner="banner" />
      <!-- 四个item -->
      <home-recommend :recommend="recommend" />
      <!-- 图片 -->
      <home-feature />
      <!--选项卡 -->
      <tab-control ref="tabControl" :titles="['流行', '新款', '精选']" @itemClick="tabControl" />
      <goods-list :list="goods[currentType].list" />
    </scroll>
    <back-top @click.native.stop="backTop" v-show="hideBackTop"/>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import HomeSwiper from "./childComp/HomeSwiper";
import HomeRecommend from "./childComp/HomeRecommend";
import HomeFeature from "./childComp/HomeFeature";
import TabControl from "@/components/tabControl/TabControl";
import GoodsList from "@/components/goods/GoodsList";

import Scroll from "@/components/scroll/Scroll";

import BackTop from '@/components/backTop/BackTop';

// -----------------公共代码---------------------
import { debounce } from "@/common/utils";
// -----------------网络请求---------------------
import { getHomeSwiper, getHomeGoods } from "@/network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      // 选项卡隐藏
      isFixed:false,
      // tabControl距离顶部高度
      defaultTop:0,
      // 隐藏返回顶部
      hideBackTop:false,
      // 页面进入与离开的位置
      saveY:0
    };
  },
  created() {
    this.homeSwiper();
    this.homeGoods("pop");
    this.homeGoods("new");
    this.homeGoods("sell");
  },
  methods: {
    // --------------网络请求------------------
    homeSwiper() {
      getHomeSwiper().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    homeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods({ type, page }).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scrollView.finishPullUp();
      });
    },
    // ---------------自定义----------------------
    tabControl(i) {
      this.currentType = Object.keys(this.goods)[i];
      this.$refs.tabControl.currentIndex = i
      this.$refs.fixTabControl.currentIndex = i
    },
    // scroll滚动y坐标
    scrollContent(y) {
      this.isFixed = -y >= this.defaultTop ? true : false
      this.hideBackTop = -y >= 1000 ? true : false
    },
    // 上拉加载
    pullUpLoading() {
      this.homeGoods(this.currentType);
    },
    // 返回顶部
   backTop(){
     this.$refs.scrollView.scrollTo(0,0,300)
   }
  },
  mounted() {
    let refresh = debounce(this.$refs.scrollView.refresh, 300);
    this.$bus.$on("HomeImgLoad", () => {
      refresh();
    });
  },
  watch:{
    banner(newVal,oldVal){
      let  eletabControl = this.$refs.tabControl.$el
      this.defaultTop = eletabControl.offsetTop + eletabControl.offsetHeight * 2
    }
  },
  // 进入页面时回到原来的位置
  activated(){
    this.$refs.scrollView.scrollTo(0,this.saveY,0)
  },
  // 离开页面时保存坐标
  deactivated(){
    this.saveY = this.$refs.scrollView.scroll.y
  }

};
</script>

<style lang="less" scoped>
.home {
  width: 100vw;
  height: 100vh;
  position: relative;
  // bottom: 50px;
  overflow: hidden;
  .nav-bar {
    color: #fff;
    background: var(--color-tint);
    position: relative;
    z-index: 1;
  }
  .scroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 50px;
    overflow: hidden;
  }
}
</style>

<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <tab-control
      ref="tabControl1"
      class="tabControl"
      :control="['流行','新款','精选']"
      @tabClick="tabClick"
      :class="{fixed:isFixed}"
      v-show="isFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper @swiperLoad="swiperLoad" :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control
        ref="tabControl2"
        class="control"
        :control="['流行','新款','精选']"
        @tabClick="tabClick"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./children/HomeSwiper";
import HomeRecommend from "./children/HomeRecommend";
import HomeFeature from "./children/HomeFeature";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";
import { getHomeMultidata, getHomeGoods } from "network/home.js";
import { debounce } from "common/utils";
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
      banners: [],
      recommends: [],
      goods: {
        pop: {
          page: 0,
          list: [],
        },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      tabOffsetTop: 0,
      isFixed: false,
      saveY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("imageLoad", () => {
      refresh();
    });
  },

  methods: {
    // 事件监听

    tabClick(i) {
      switch (i) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = i;
      this.$refs.tabControl2.currentIndex = i;
    },
    backTop() {
      console.log(this.$refs.scroll);
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // console.log(position);
      this.isShow = -position.y > 1000 ? true : false;
      this.isFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-nav {
  background: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.fixed {
  position: fixed;
  // top: 44px;
}
.tabControl {
  position: relative;
  background: #fff;
  z-index: 1;
}
</style>
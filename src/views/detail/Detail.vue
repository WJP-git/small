<template>
  <div>
    <detail-nav-bar />
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :imagesInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list :goods="recommends" ref="recommend" />
    </scroll>
    <detail-bottom-bar @click.native="addToCart" />
    <back-top></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./children/DetailNavBar";
import DetailSwiper from "./children/DetailSwiper";
import DetailBaseInfo from "./children/DetailBaseInfo";
import DetailShopInfo from "./children/DetailShopInfo";
import DetailGoodsInfo from "./children/DetailGoodsInfo";
import DetailParamInfo from "./children/DetailParamInfo";
import DetailCommentInfo from "./children/DetailCommentInfo";
import DetailBottomBar from "./children/DetailBottomBar";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import Scroll from "components/common/scroll/Scroll";
// import { debounce } from "common/utils.js";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "network/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      // themeTopYs: [],
      // getThemeTopY: null,
      isShowBackTop: false,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    GoodsList,
    BackTop,
    Scroll,
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
    // this.getThemeTopY = debounce(() => {
    //   this.themeTopYs = [];
    //   this.themeTopYs.push(0);
    //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
    //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
    //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
    //   console.log(this.themeTopYs);
    // }, 100);
  },
  mounted() {},
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
    },
    navClick() {
      // this.$refs.scroll.scrollTo();
      this.getThemeTopY();
    },
    // contentScroll(position) {
    //   const positionY = -position.y;
    // },
    addToCart() {
      const obj = {};
      obj.img = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.price = this.goods.newPrice;
      obj.iid = this.iid;
      this.$store.commit("addCart", obj);
    },
  },
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  background: #fff;
  z-index: 99;
}
</style>
<template>
  <div class="detail">
    <detail-nav-bar
      @navItemClick="navItemClick"
      ref="navBar"
    />
    <scroll class="scroll" ref="scrollView" @scrollContent="scrollContent">
      <detail-swiper :swiperImg="swiper" />
      <detail-base-info :baseInfo="goodsBaseInfo" />
      <detail-shop-info :shopInfo="shopInfo" />
      <detail-commod-img :detailInfo="detailInfo" @imgLoad="imgLoad" />
      <detail-params ref="params" :paramsInfo="paramsInfo" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommend" :list="recommends" />
    </scroll>
    <detail-bottom @addCart='addCart'/>
  </div>
</template>

<script>
// -------------------自定义------------------------

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailCommodImg from "./childComps/DetailCommodImg";
import DetailParams from "./childComps/DetailParams";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import GoodsList from "@/components/goods/GoodsList";
import DetailBottom from "./childComps/DetailBottom";
import Scroll from "@/components/scroll/Scroll";

import {mapActions} from 'vuex'
// -------------------网络请求------------------------
import {
  getDetailSwiper,
  GoodsBaseInfo,
  ShopInfo,
  GoodsParams,
  getDetailRecommend,
} from "@/network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailCommodImg,
    DetailParams,
    DetailCommentInfo,
    GoodsList,
    DetailBottom,
    Scroll,
  },
  data() {
    return {
      swiper: [],
      goodsBaseInfo: {},
      shopInfo: {},
      detailInfo: [],
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
    };
  },
  created() {
    this.detailSwiper(this.$route.params.iid);
    this.detailRecommend();
  },

  methods: {
    // -------------------网络请求------------------------
    // 获取详情数据
    detailSwiper(iid) {
      getDetailSwiper({ iid }).then((res) => {
        const data = res.result;
        // 轮播图
        this.swiper = data.itemInfo.topImages;
        // 基本信息
        this.goodsBaseInfo = new GoodsBaseInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 商店信息
        this.shopInfo = new ShopInfo(data.shopInfo);
        // 商品图片信息
        this.detailInfo = data.detailInfo.detailImage[0].list;
        // 商品参数信息
        this.paramsInfo = new GoodsParams(data.itemParams.info, data.itemParams.rule);
        // 评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    // 获取推荐数据
    detailRecommend() {
      getDetailRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    },
    // -------------------自定义------------------------
    // 监听图片加载
    imgLoad() {
      this.$refs.scrollView.refresh();
      // console.log(this.$refs.scrollView);
    },
    // 点击NavBar中item跳转到相应的内容上
    navItemClick(i) {
      this.$refs.scrollView.scrollTo(0, -this.themeTopYs[i], 500);
    },
    // 滚动到一定距离后NavBar字体变色
    scrollContent(y) {
      this.scrollTheme(y)
    },
    scrollTheme(y) {
      let scrollY = -y;
      for (let i = 0; i < this.themeTopYs.length; i++) {
        let pos = this.themeTopYs[i];
        if (scrollY >= pos && scrollY < this.themeTopYs[i + 1]) {
          // if (this.$refs.navBar.currentIndex !== i) {
            this.$refs.navBar.currentIndex = i;
          // }
        }
      }
    },
    // 商品添加到购物车
    ...mapActions([
      'setAddCart'
    ]),
    addCart(){
      let obj = {}
      obj.iid = this.$route.params.iid
      obj.img = this.swiper[0]
      obj.title = this.goodsBaseInfo.title
      obj.desc = this.goodsBaseInfo.desc
      obj.price = this.goodsBaseInfo.nowPrice
      this.setAddCart(obj)
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
      }, 50);
    });
  },
};
</script>

<style lang="less" scoped>
.detail {
  width: 100vw;
  height: 100vh;
  background: #fff;
  position: relative;
  z-index: 99;
  overflow: hidden;
  .scroll {
    position: absolute;
    z-index: -1;
    top: 44px;
    left: 0;
    right: 0;
    // bottom: 0;
    bottom: 50px;
  }
}
</style>

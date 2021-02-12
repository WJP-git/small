<template>
  <div class="goods" @click.stop='toDetail'>
    <img v-lazy="img" alt @load="HomeImgLoad"/>
    <div class="goods-info">
      <p>{{ item.title }}</p>
      <span class="price">{{ item.price }}</span>
      <span class="collect">{{ item.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    HomeImgLoad(){
      if(this.$route.path.indexOf('/home') !== -1){
      this.$bus.$emit('HomeImgLoad')

      }
    },
    toDetail(){
      if(this.$route.path.indexOf('/home') !== -1){
      this.$router.push(`/detail/${this.item.iid}`)

      }
    }
  },
  computed: {
    img(){
      return this.item.image ||  this.item.show.img 
    }
  },
};
</script>

<style scoped>
.goods {
  padding-bottom: 40px;
  position: relative;
}
.goods img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>

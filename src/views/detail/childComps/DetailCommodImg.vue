<template>
 <div class="comment-info">
      
    <div class="list">
        <img v-for="(item,i) in detailInfo" :key="i" v-lazy="item" @load="imgLoad">
    </div>
 </div>
</template>

<script>
export default {
  name: "DetailCommodImg",
  props: {
    detailInfo: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      count:0,
      imgLength:0
    }
  },
  methods: {
    imgLoad(){
      if(++this.count === this.imgLength){
        this.$emit('imgLoad')
      }
    }
  },
  watch:{
    detailInfo(){
      this.imgLength = this.detailInfo.length
    }
  }
};
</script>

<style lang="less" scoped>
img{
  width: 100%;
}
</style>

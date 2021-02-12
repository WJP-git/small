<template>
  <nav-bar class="nav-bar">
    <div slot="center">
      购物车({{cartList.length}})
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
import { mapGetters } from 'vuex'
export default {
  name:'CartNavBar',
  components:{
    NavBar
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  }
}
</script>

<style scoped>
.nav-bar{
  position: relative;
  z-index: 11;
  background:var(--color-tint);
  color: #fff;
}
</style>
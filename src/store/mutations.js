
import { SET_ADD_CART } from './mutations-type'


import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

export default {
  [SET_ADD_CART] (state, flag) {
    let listItem = state.cartList.find(item => {
      return item.iid === flag.iid
    })
    if (listItem) {
      listItem.count += 1
      Toast('当前商品个数为' + listItem.count);

    } else {
      flag.count = 1
      flag.checked = true
      state.cartList.push(flag)
      Toast('添加商品成功');
      
    }

  }
}


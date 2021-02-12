
import {SET_ADD_CART} from './mutations-type'
export default {
  setAddCart({state,commit},flag){
    commit(SET_ADD_CART,flag)
  }
}
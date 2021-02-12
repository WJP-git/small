import Network from '@/network/request'
// 轮播图
export const getHomeSwiper = ()=> Network.get('/home/multidata')
export const getHomeGoods = (data)=> Network.get('/home/data',data)
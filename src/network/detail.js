import Network from '@/network/request'
export const getDetailSwiper = (data)=>Network.get('/detail',data)

 // 基本信息
 export class GoodsBaseInfo {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.bgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.nowPrice = itemInfo.lowNowPrice;
  }
  
}
export class ShopInfo{
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

export class GoodsParams{
  constructor(info,rule){
    this.infos = info.set
    this.sizes = rule.tables
  }
}

export const getDetailRecommend = ()=>Network.get('/recommend')
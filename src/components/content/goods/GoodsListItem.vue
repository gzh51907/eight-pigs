<template>
  <div class="GoodsListItem" @click="itemClick('/detail/',goodsItem.iid)">
    <img :src="goodsItem.img || goodsItem.image || goodsItem.show.img"/>
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">¥{{goodsItem.price}}</span>
      <span lass="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemClick(path, iid) {
      this.$router.push(path + iid);
    },
  }
};
</script>

<style>
.GoodsListItem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
  background-color: #fff;
}
.GoodsListItem img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  font-size: 12px;
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
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>

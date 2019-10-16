<template>
  <div class="GoodsList">
    <goods-list-item v-for="item in goods" :key="item.iid" :goodsItem="item"  class="GoodsListItem"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    },
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem
  }
};
</script>

<style>
.GoodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
}

</style>

<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/imgs/tabbar/home.svg" alt />
      <img slot="item-icon-active" src="~assets/imgs/tabbar/home_active.svg" alt />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/discover">
      <img slot="item-icon" src="~assets/imgs/tabbar/category.svg" alt />
      <img slot="item-icon-active" src="~assets/imgs/tabbar/category_active.svg" alt />
      <div slot="item-text">发现</div>
    </tab-bar-item>
    <tab-bar-item path="/info">
      <img slot="item-icon" src="~assets/imgs/tabbar/cart.svg" alt />
      <img slot="item-icon-active" src="~assets/imgs/tabbar/cart_active.svg" alt />
      <div slot="item-text">订单</div>
    </tab-bar-item>
    <tab-bar-item path="/mine">
      <img slot="item-icon" src="~assets/imgs/tabbar/profile.svg" alt />
      <img slot="item-icon-active" src="~assets/imgs/tabbar/profile_active.svg" alt />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>
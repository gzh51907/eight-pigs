<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar
      v-if="$route.name != 'list' && $route.name != 'list2' && $route.name != 'xq' && $route.name != 'xq2' "
    />
  </div>
</template>

<script>
import "../public/rem"
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>


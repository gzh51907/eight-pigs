<template>
  <div class="nav-bar">
    <div class="nav-bar-logo">
      <a href>
        <img src="~assets/imgs/common/logo.webp" alt />
      </a>
    </div>
    <div class="nav-bar-center">
      <div class="search">
          <!-- <span class="go">想去哪儿？</span> -->
      </div>
    </div>
    <div class="nav-bar-right">
      <div class="text">
        <span>登陆</span>
        <span>/</span>
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeNavBar",
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
.nav-bar {
  width: 95%;
  margin: 0 auto;
  display: flex;
  height: 44px;
  line-height: 44px;
  font-size: 12px;
  
}
.nav-bar-logo,
.nav-bar-right {
  width: 80px;
  text-align: center;
}
.nav-bar-logo img {
  width: 78px;
  height: 18px;
  display: inline-block;
  padding: 1px;
  vertical-align: middle;
}
.nav-bar-center {
  flex: 1;
  text-align: center;
}
.nav-bar-center .search {
  width: 80%;
  border-radius: 10px;
  margin: 0 auto;
  height: 25px;
  margin-top: 10px;
  background-color: #fff;
  border: 1px solid #ddd;
  position: relative;
}

.nav-bar-right .text {
  color: var(--color-high-text);
  vertical-align: middle;
}
</style>

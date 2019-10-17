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
        <template v-if="!currentUser">
          <span @click="goto('/login')">登陆</span>
          <span>/</span>
          <span @click="goto('/register')">注册</span>
        </template>
        <span @click="logout" v-else>退出</span>
      </div>
    </div>
  </div>
</template>

<script>
import { log } from "util";
export default {
  name: "HomeNavBar",
  data() {
    return {
      currentUser: localStorage.getItem("user")
    };
  },
  methods: {
    goto(id) {
      this.$router.push(id);
    },
    logout() {
      this.$store.commit("logout");
      this.currentUser = localStorage.getItem("user");
    }
  }
  // computed: {
  //   currentUser() {
  //     // return localStorage.getItem("user");
  //     console.log(this.$store.state.user);
  //   }
  // }
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

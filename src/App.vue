<template>
  <el-container>
    <router-view />
    <div class="Personal-map">
      <el-main>
        <el-row :gutter="20">
          <el-col :span="6">
            <div
              class="grid-content bg-purple"
              default-active="activeIndex"
              @click="goto('/home')"
            >首页</div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple" @click="goto('/mine')">我的</div>
          </el-col>
        </el-row>
      </el-main>
    </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/home",
      activeIndex2: "1",
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的"
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      window.console.log(key, keyPath);
    },
    created() {
      //获取url地址参数
      window.console.log(this.$router);
      this.activeIndex = this.$route.path;
    },
    goto(path) {
      this.$router.push(path);
    }
  },

  components: {}
};
</script>
<style lang="scss"  >
.Personal-map {
  position: fixed;
  bottom: 0px;
}
html {
  height: 100%;
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
}
.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  width: 70px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;
}
</style>
<template>
  <div class="home-recommand">
    <h3 class="title">优质达人带你玩</h3>
    <div class="recommand-info">
      <div class="recommand-item" v-for="item in recommand" :key="item">
        <img :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommand",
  data() {
    return {
      recommand: [
        require("assets/imgs/home/recommand1.webp"),
        require("assets/imgs/home/recommand2.webp"),
        require("assets/imgs/home/recommand3.webp"),
        require("assets/imgs/home/recommand4.webp")
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
.home-recommand {
  padding-bottom: 20px;
}
.home-recommand .title {
  margin-bottom: 10px;
}
.recommand-info {
  font-size: 14px;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}
.recommand-item {
  margin-right: 5px;
  display: inline-block;
  white-space: nowrap;
}
.recommand-item img {
  width: 288px;
  height: 163px;
  margin-right: 8px;
}
</style>

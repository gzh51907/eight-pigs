<template>
  <div class="discover-nav">
    <div class="title" v-for="(item,index) in title" :key="item" @click="discoverChange(index)">
      <span :class="{active:index==currentIndex}">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverNav",
  data() {
    return {
      title: ["旅游精彩", "全球动态"],
      currentIndex: 0
    };
  },
  methods: {
    discoverChange(index) {
      this.currentIndex = index;
      this.$emit('discoverNav',index)
    }
  },
};
</script>

<style scoped>
.discover-nav {
  height: 44px;
  line-height: 44px;
  display: flex;
  border-bottom: 1px solid #eeffee;
  font-size: 14px;
}
.discover-nav .title {
  flex: 1;
  text-align: center;
}
.discover-nav .title span {
  padding-bottom: 11px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>

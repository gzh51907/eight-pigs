<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //1： 实例化BScroll,创建对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    // 2：监听滚动的区域
    if (this.probeType == 2 || this.probeType == 3) {
      this.scroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }
    // 3:监听下拉加载更多
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    // 回到(x , y)
    scrollTo(x, y, timer = 500) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, timer);    
    },
    // 结束下拉加载
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    // 刷新
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    // 获取滚动的y值
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
</style>

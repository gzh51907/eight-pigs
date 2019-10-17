<template>
  <div id="discover">
    <discover-nav @discoverNav="discoverNav" />

    <div class="content" v-if="currentNav==0">
      <discover-video />
      <discover-visitor />
      <discover-tour-man />
      <discover-fresh />
    </div>
    <div v-else>
      <keep-alive>
        <scroll
          class="content"
          ref="scroll"
          :probe-type="3"
          :pull-up-load="true"
          @pullingUp="loadMore"
        >
          <div class="global">
            <h3 class="title">达人动态</h3>
            <discover-global :global="global.list" />
          </div>
        </scroll>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import DiscoverNav from "./childComps/DiscoverNav";
import DiscoverVideo from "./childComps/DiscoverVideo";
import DiscoverVisitor from "./childComps/DiscoverVisitor";
import DiscoverTourMan from "./childComps/DiscoverTourMan";
import DiscoverFresh from "./childComps/DiscoverFresh";
import DiscoverGlobal from "./childComps/DiscoverGlobal";

import { discoverSign } from "network/discover";
export default {
  name: "Discover",
  data() {
    return {
      currentNav: 0,
      global: {
        pages: 0,
        list: []
      },
      saveY: 0
    };
  },
  methods: {
    getDiscoverSign(pages) {
      discoverSign(pages).then(({ data }) => {
        this.global.list.push(...data);
      });
    },
    discoverNav(index) {
      this.currentNav = index;
    },
    loadMore() {
      let pages = this.global.pages + 1;
      discoverSign(pages).then(({ data }) => {
        this.global.list.push(...data);
        // 完成下拉加载更多
        this.global.pages += 1;
        this.$refs.scroll.finishPullUp();
      });
    }
  },
  created() {
    this.getDiscoverSign(this.global.pages);  
  },
  activated() {
    console.log('activated');
    // this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    console.log('deactivated');
    // this.saveY = this.$refs.scroll.getScrollY();
    console.log(this.saveY);
  },
  components: {
    Scroll,
    DiscoverNav,
    DiscoverVideo,
    DiscoverVisitor,
    DiscoverTourMan,
    DiscoverFresh,
    DiscoverGlobal
  }
};
</script>

<style scoped>
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  width: 98%;
  margin: 0 auto;
  padding: 0px 10px;
  overflow-y: auto;
}
.title {
  height: 54px;
  line-height: 54px;
  border-bottom: 1px solid #efefef;
  font-size: 20px;
  font-weight: 900;
  color: #333;
}
</style>

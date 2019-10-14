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
      <scroll class="content">
        <div class="global">
          <h3 class="title">达人动态</h3>
          <discover-global :global="global"></discover-global>
        </div>
      </scroll>
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
      global: []
    };
  },
  created() {
    this.getDiscoverSign();
  },
  components: {
    Scroll,
    DiscoverNav,
    DiscoverVideo,
    DiscoverVisitor,
    DiscoverTourMan,
    DiscoverFresh,
    DiscoverGlobal
  },
  methods: {
    getDiscoverSign() {
      discoverSign().then(({ data }) => {
        this.global = data;
      });
    },
    discoverNav(index) {
      this.currentNav = index;
    }
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
.global {
  padding: 0px 15px;
}
.title {
  height: 54px;
  line-height: 54px;
  border-bottom: 1px solid #efefef;
}
</style>

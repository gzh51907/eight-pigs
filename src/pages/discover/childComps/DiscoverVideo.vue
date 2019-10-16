<template>
  <scroll-y class="scrollvideo">
    <h3 slot="title">达人视频</h3>
    <span slot="text">
      更多
      <i class="el-icon-arrow-right" style="padding-left:8px;"></i>
    </span>
    <img slot="list" :src="video[0]" alt />
  </scroll-y>
</template>

<script>
import ScrollY from "components/content/scrolly/ScrollY";
export default {
  name: "DiscoverVideo",
  data() {
    return {
      video: [require("assets/imgs/discover/video.webp")]
    };
  },
  components: {
    ScrollY
  }
};
</script>

<style scoped>
.scrollvideo img {
  width: 100%;
  padding: 2px;
}
</style>

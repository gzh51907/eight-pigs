<template>
  <div class="tour-man">
    <div class="tour-man-top">
      <h3 class="title">优质达人</h3>
      <span class="tour-man-more">
        更多
        <i class="el-icon-arrow-right" style="padding-left:8px;"></i>
      </span>
    </div>
    <div class="tour-man-info">
      <div class="tour-man-item" v-for="item in TourMan" :key="item._id">
        <img :src="getUrl(item.imgurl)" />
        <p class="user">{{item.human}}</p>
        <span class="text">{{item.guide}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TourMan",
  props: {
    TourMan: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    getUrl(url) {
      let baseurl = url.replace("../assets/", "");
      return require("assets/" + baseurl);
    }
  },
  components: {}
};
</script>

<style scoped>
.tour-man {
  padding-bottom: 20px;
}
.tour-man-top {
  height: 22px;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.tour-man-more {
  font-size: 14px;
}
.tour-man-info {
  font-size: 14px;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}
.tour-man-item {
  margin-right: 5px;
  display: inline-block;
  white-space: nowrap;
}

.tour-man-item img {
  width: 159px;
  height: 159px;
  padding: 1px;
}
.tour-man-item .user {
  padding-left: 2px;
  color: #000;
  padding-bottom: 2px;
}
.tour-man-item .text {
  padding: 0 5px;
  width: 159px;
  height: 40px;
  overflow: hidden;
  display: inline-block;
  white-space: pre-wrap;
  color: #333;
}
</style>

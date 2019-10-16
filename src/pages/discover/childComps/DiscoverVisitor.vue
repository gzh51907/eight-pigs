<template>
  <scroll-y class="visitor-story">
    <h3 slot="title">游客故事</h3>
    <span slot="text">
      更多
      <i class="el-icon-arrow-right" style="padding-left:8px;"></i>
    </span>
    <div slot="list" v-for="item in story" :key="item.imgUrl" class="stroy-info">
      <img :src="item.imgUrl" alt />
      <div class="detail">
        <span>{{item.text}}</span>
      </div>
    </div>
  </scroll-y>
</template>

<script>
import ScrollY from "components/content/scrolly/ScrollY";
export default {
  name: "DiscoverVisitor",
  data() {
    return {
      story: [
        {
          imgUrl: require("assets/imgs/discover/story1.webp"),
          text: "感恩节，我让7个游客说出了旅行中的痛和爱"
        },
        {
          imgUrl: require("assets/imgs/discover/story2.webp"),
          text: "你什么时候意识到妈妈老了？"
        },
        {
          imgUrl: require("assets/imgs/discover/story3.webp"),
          text: "听说去柬埔寨坐牛车将是下一个被刷爆的奢华体验？"
        },
        {
          imgUrl: require("assets/imgs/discover/story4.webp"),
          text: "她在日本的这八大体验，第一个就秒杀你！"
        },
        {
          imgUrl: require("assets/imgs/discover/story5.webp"),
          text: "逃离北上广之后，我有了说不完的故事"
        },
        {
          imgUrl: require("assets/imgs/discover/story6.webp"),
          text: "中古世纪的城市里，我想就走到这。"
        }
      ]
    };
  },
  components: {
    ScrollY
  }
};
</script>

<style scoped>
.stroy-info {
  height: 280px;
  font-size: 14px;
}
.visitor-story img {
  width: 159px;
  height: 212px;
  padding: 2px;
  margin-right: 8px;
}
.detail {
  padding: 0px 5px;
  width: 159px;
}
.detail span {
  white-space: pre-wrap;
}
</style>

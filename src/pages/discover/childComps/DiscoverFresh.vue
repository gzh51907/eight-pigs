<template>
  <scroll-y class="visitor-story">
    <h3 slot="title">达人故事</h3>
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
  name: "DiscoverFresh",
  data() {
    return {
      story: [
        {
          imgUrl: require("assets/imgs/discover/fresh1.webp"),
          text: "你一天到晚只是打渔，一定没有烦恼吧？"
        },
        {
          imgUrl: require("assets/imgs/discover/fresh2.webp"),
          text:
            "100块怎么才能吃到特级厨师给名流政要做的菜？还能趁机偷学？"
        },
        {
          imgUrl: require("assets/imgs/discover/fresh3.webp"),
          text: "大家挤破头都想上的这艘船，就连王菲都说好？！"
        },
        {
          imgUrl: require("assets/imgs/discover/fresh4.webp"),
          text: "没去过这个岛算去过香港吗？星爷的《喜剧之王》拍摄地竟鲜为人知"
        },
        {
          imgUrl: require("assets/imgs/discover/fresh5.webp"),
          text: "热到变形？一起逃去新西兰避暑，私人海岛+不限量龙虾，仅限4人！！"
        },
        {
          imgUrl: require("assets/imgs/discover/fresh6.webp"),
          text:
            "为何他们收入不到1500，却是幸福指数最高的国家？"
        },
        {
          imgUrl: require("assets/imgs/discover/fresh7.webp"),
          text:
            "如果这都不算爱，我和榴莲独处了48小时"
        }
        ,
        {
          imgUrl: require("assets/imgs/discover/fresh8.webp"),
          text:
            "这种卖艺不卖身的服务，有钱也买不到？！"
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
  height: 230px;
  font-size: 14px;
}
.visitor-story img {
  width: 288px;
  height: 163px;
  padding: 2px;
  margin-right: 8px;
}
.detail {
  padding: 0px 5px;
  width: 288px;
}
.detail span {
  white-space: pre-wrap;
}
</style>

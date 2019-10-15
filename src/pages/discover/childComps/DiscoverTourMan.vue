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
  name: "DiscoverTourMan",
  data() {
    return {
      story: [
        {
          imgUrl: require("assets/imgs/discover/tourman1.webp"),
          text: "阿拉斯加 | 这个看过100次极光的男人，想成为你和阿拉斯加的情人"
        },
        {
          imgUrl: require("assets/imgs/discover/tourman2.webp"),
          text:
            "美西 | 放弃铁饭碗，20年前他已真实演绎了“世界那么大，我想去看看？"
        },
        {
          imgUrl: require("assets/imgs/discover/tourman3.webp"),
          text: "摩洛哥 | 台湾妹子为何远嫁撒哈拉沙漠，成为摩洛哥人的妻子？"
        },
        {
          imgUrl: require("assets/imgs/discover/tourman4.webp"),
          text: "牛津 | 前方高能！抓过毒贩的牛津华人学霸出没"
        },
        {
          imgUrl: require("assets/imgs/discover/tourman5.webp"),
          text: "北京 | 去北京不是为了感受中华上下五千年，难道是要去吸霾？"
        },
        {
          imgUrl: require("assets/imgs/discover/tourman6.webp"),
          text:
            "东京 | 武警部队3年后，我是如何一步步从仇日分子变成生活在日本的当地人？"
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

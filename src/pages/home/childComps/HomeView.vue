<template>
  <div class="view">
    <div class="view-top">
      <h3 class="title">优质达人带你玩</h3>
    </div>
    <div class="view-item">
      <div class="title" v-for="(item,index) in title" :key="item.guideId">
        <span
          :class="{active:index===currentIndex}"
          @click="guideClick(index,item.guideId)"
        >{{item.name}}</span>
      </div>
      <div class="view-item-info">
        <div class="view-item-item" v-for="items in TourView" :key="items._id">
          <img :src="getUrl(items.imgUrl)" />
          <h3 class="item-title">{{items.journeyName}}</h3>
          <span class="price">{{items.displayPrice}}</span>
          好评率
          <span class="star">{{getStart(items.commentStar)}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    },
    TourView: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    guideClick(index, guideId) {
      this.currentIndex = index;
      this.$emit("getguide", guideId);
    },
    getUrl(url) {
      let baseurl = url.replace("../assets/", "");
      return require("assets/" + baseurl);
    },
    getStart(star) {
      return ((star / 5) * 100).toFixed(2) + "%";
    }
  },
  components: {}
};
</script>

<style scoped>
.view {
  padding-bottom: 20px;
}
.view-top {
  margin-bottom: 5px;
}
.view-item .title {
  display: inline-block;
  padding: 10px 20px 10px 0px;
}
.view-item .title span {
  font-size: 14px;
  display: inline-block;
  border-right: 1px solid #efefef;
  padding-bottom: 5px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid currentColor;
}

.view-item-info {
  font-size: 14px;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}
.view-item-item {
  margin-right: 5px;
  display: inline-block;
  white-space: nowrap;
}
.view-item-item img {
  width: 218px;
  height: 216px;
  margin-right: 8px;
}
.view-item-item .price {
  color: var(--color-high-text);
  flex-shrink: 16px;
  padding-right: 10px;
}
.star {
  color: orange;
}
.item-title {
  width: 218px;
  overflow: hidden;
  padding: 0px 5px;
  margin-bottom: 10px;
}
</style>

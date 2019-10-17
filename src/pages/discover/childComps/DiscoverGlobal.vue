<template>
  <div class="global">
    <div class="global-item" v-for="item in global" :key="item._id">
      <div class="info">
        <div class="circle">
          <img :src="item.guide.avatar" alt />
        </div>
        <div class="detail">
          <span class="user">{{item.guide.nickname}}</span>
          <p class="date">{{item.createTime | formateDate}}</p>
        </div>
      </div>
      <div class="text">{{item.intro}}</div>
      <div class="photoshow">
        <div class="photo-item" v-for="items in item.images" :key="items.id">
          <img :src="items.url" alt />
        </div>
      </div>
      <div class="comment">
        <div class="name">{{item.journey==null ? '' :item.journey.name}}
          <i :class="[item.journey==null ? '':'el-icon-arrow-right']"></i>
        </div>
        <div class="like">
          <i class="el-icon-chat-dot-square"></i>
          <span>{{item.commentCount}}</span>
          <i class="el-icon-thumb"></i>
          <span>{{item.likeCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscoverGlobal",
  props: {
    global: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  created() {
  },
  filters: {
    formateDate(date) {
      let now = new Date(date);
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var hour = now.getHours();
      var minute = now.getMinutes();
      return year + "." + month + "." + day + " " + hour + ":" + minute;
    }
  }
};
</script>

<style scoped>
.global-item {
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;

}
.global-item .circle {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin: 20px 10px 10px 0px;
}
.global-item .circle img {
  width: 100%;
  padding: 1px;
}
.global-item .text {
  font-size: 14px;
  margin-bottom: 12px;
}
.info .detail {
  display: inline-block;
  vertical-align: middle;
}
.detail .user {
  font-size: 16px;
}
.detail .date {
  font-size: 14px;
}
.photoshow .photo-item{
  display: inline-block;
}
.photoshow .photo-item img {
  width: 103px;
  height: 103px;
  margin: 0px 7px 9px 0px;
}
.comment {
  margin: 6px 0px 18px;
  display: flex;
  justify-content: space-between;
}
.comment .name {
  width: 135px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.comment .like span{
  padding: 0px 5px;
}
</style>

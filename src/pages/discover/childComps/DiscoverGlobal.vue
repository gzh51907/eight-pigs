<template>
  <div class="global">
    <div class="global-item" v-for="item in global" :key="item._id">
      <div class="circle">
        <img :src="item.guide.avatar" alt />
        <div class="info">
            <p>{{item.guide.nickname}}</p>
            <p></p>
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
  components: {}
};
</script>

<style scoped>
.global-item .circle {
  width: 47px;
  height: 47px;
  border-radius: 50%;
  overflow: hidden;
}
.global-item .circle img{
    width: 100%;
    padding: 1px;
}
</style>

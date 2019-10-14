<template>
  <div class="scroll-y">
    <div class="scroll-y-top">
      <div class="title">
        <slot name="title" />
      </div>
      <div class="scrpll-y-more">
        <slot name="text" />
      </div>
    </div>
    <div class="scroll-y-info">
      <slot name="list" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ScrollY",
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped>
.scroll-y{
    padding: 0px 15px;
}
.scroll-y-top {
  height: 54px;
  line-height: 54px;
  display: flex;
  justify-content: space-between;
}
.scrpll-y-more {
  font-size: 14px;
}
.scroll-y-info {
  font-size: 14px;
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>

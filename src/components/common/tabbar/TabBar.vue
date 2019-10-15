<template>
  <div id="tab-bar">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  /* 本身的样式 */
  background-color: #f6f6f6;
  height: 49px;
  border-top: 1px solid #eee;
  box-shadow: 0px -1px 1px rgba(155, 155, 155, 0.8);
  /* 定位的样式  */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  /* 利用flex进行布局 */
  display: flex;
}
</style>
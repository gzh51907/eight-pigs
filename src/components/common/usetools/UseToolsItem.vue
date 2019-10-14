<template>
  <div class="usetoolsitem">
    <div class="box" :style="{'background-color':backColor}">
      <slot name="box"></slot>
    </div>
    <div class="text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'UseToolsItem',
  props:{
      backColor:{
          type:String,
          default:'#fff',
      }
  },
  methods: {
  },
}
</script>

<style scoped>
.usetoolsitem{
    flex: 1;
    text-align: center;
}
.box {
  width: 43px;
  height: 43px;
  border-radius: 50%;
  text-align: center;
  line-height: 43px;
  margin: 8px auto;
}
.text{
    font-size: 14px;
}
</style>

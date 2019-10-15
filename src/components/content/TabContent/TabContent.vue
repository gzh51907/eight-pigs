<template>
    <div class="tab-content">
        <div class="tab-content-item" 
            v-for="(item,index) in title" 
            :key="item" 
            :class="{active:currentIdex===index}"
            @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
  name:'TabContent',
  props:{
      title:{
          type:Array,
          default(){
              return [];
          }
      }
  },
  data() {
      return {
          currentIdex:0,
      }
  },
  methods: {
      itemClick(index){
          this.currentIdex=index;
          this.$emit('tabClick',index);
      }
  },
}
</script>

<style scoped>
.tab-content {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    z-index: 8;
    background-color: #f6f6f6;
}
.tab-content .tab-content-item{
    flex: 1;
}
.tab-content-item span{
     padding: 8px; 
}
.active{
    color: var(--color-hight-text)
}
.active span{
    border-bottom: 3px solid var(--color-tint);
}
</style>

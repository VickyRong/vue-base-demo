<!--
 tabItem组件
create by VickyRong on 2017/11/07. -->
<template>
  <div class="g-flex-c1 g-tac">
    <i :class="'iconfont s-fs32 s-fc-gy '.concat(icon)"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabItem',
  props: {
    //nav图标
    icon: {
      type:String,
      default:''
    }
   
  },
  data(){
    return{
    }
  },
  methods:{
   
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
  
</style>

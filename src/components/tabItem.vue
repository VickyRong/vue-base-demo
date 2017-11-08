<!--
 tabItem组件
create by VickyRong on 2017/11/07. -->
<template>
  <div @click="changeTab(id)" :class="$parent.value == id ? activeClass : '' " class="g-flex-c1 g-tac">
    <i :class="icon" class="iconfont s-fs32 s-fc-gy f-dis-b"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab-item',
  props: {
    //nav图标
    icon: {
      type:String,
      default:'icon-my'
    },
    //导航索引值
    id:{
      type:String,
      default:''
    }
  },
  data(){
    return{
      activeClass:""
    }
  },
  created(){
    this.$set(this,"activeClass",this.$parent.activeColor);
  },
  methods:{
   changeTab(id){
     this.$parent.$emit('input', id);
     console.log(this.$parent);
   }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
  
</style>

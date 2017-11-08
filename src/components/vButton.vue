<!--
 Button组件
create by VickyRong on 2017/11/08. -->
<template>
  <div :class="bgColor" :style="{'border':'1px solid '+ bdrColor +''}" class="ui-button g-flex g-flex-center g-flex-v-center">
     <i v-if="loading !== false && loading !=='false'" class="iconfont icon-loading s-fs36 g-mr10"></i>
     <slot></slot>   
  </div>
</template>

<script>
export default {
  name: 'button',
  props:{
    //按钮文案
    content:{
      type:[Number,String],
      default:''
    },
    //禁用
    disabled:Boolean,
    //警告
    warn:Boolean,
    //镂空
    plain:Boolean,
    //loading
    loading:[Boolean,String]
 },
 data(){
   return {
      bgColor:'',
      bdrColor:''
   }
 },
computed: {
   
  },
 created(){
   //背景色判断
    if(this.warn !== false && this.warn !== 'false'){
      //警告红色
      this.$set(this,'bgColor','s-bg-redwx1');
      
      if(this.loading !== false && this.loading !== 'false'){
        this.$set(this,'bgColor','s-bg-redwx2 s-opa6');
      }
      if(this.disabled !== false && this.disabled !== 'false'){
        this.$set(this,'bgColor','s-bg-redwx3 s-opa6');
      }
    }else{
      //默认绿色
      this.$set(this,'bgColor','s-bg-gnwx1');

      if(this.loading !== false && this.loading !== 'false'){
        this.$set(this,'bgColor','s-bg-gnwx2 s-opa6');
      }
      if(this.disabled !== false && this.disabled !== 'false'){
        this.$set(this,'bgColor','s-bg-gnwx3 s-opa6');
      }
      if(this.plain !== false && this.plain !== 'false'){
        this.$set(this,'bgColor','s-bg-w');
        this.$set(this,'bdrColor','s-bg-w');
      }
    }
 }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
  .ui-button{
    height: rem(92);
    border-radius: rem(10);
    color:$c-w;
    font-size: rem(32);
  }
  .s-opa6{
    color: rgba(255,255,255,.6);
  }

</style>

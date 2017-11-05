<!--
 Cell组件
create by VickyRong on 2017/11/04. -->
<template>
  <div class="ui-cell s-fs30 s-bdr-b g-flex g-flex-v-center">
    <div class="g-flex-c1">
      <i v-if="icon" :class="icon" :style="{'color':iconColor}" class="iconfont s-fs28 s-fc-gy3"></i>
      <span :style="{'color':color}">{{content}}</span>
    </div>
    <i v-if="arrow == false" class="iconfont icon-arrow-right s-fs28 s-fc-gy3"></i>
  </div>
</template>

<script>
export default {
  name: 'cell',
  props:{
    //cell内容
    content: {
      type:String,
      default:"cell组件"
    },
    //cell颜色
    color: {
      type:String,
      default:""
    },
    //icon图标
    icon: {
      type:String,
      default:""
    },
    //icon颜色 接受16进值色值和类名
    iconColor: {
      type:String,
      default:""
    },
    //箭头
    arrow:false,
 }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
  .ui-cell{
    height: rem(88);
  }
</style>

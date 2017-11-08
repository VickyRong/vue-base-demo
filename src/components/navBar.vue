<!--
 navBar组件
create by VickyRong on 2017/11/07. -->
<template>
    <div :class="isFixed == 'false' ? '' : 'is-fixed'" class="ui-navBar g-flex g-flex-v-center g-flex-center">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'navBar',
  props: {
    value: {},
    activeColor:"",
    isFixed:""
  },
  data(){
    return{
      // isFixed:false
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
  .ui-navBar{
    padding: rem(10 0);
  }
  .is-fixed{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top:1px solid $c-gy6;
  }
</style>

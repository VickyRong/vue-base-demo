<!--
 navBar组件
create by VickyRong on 2017/11/07. -->
<template>
    <div class="ui-navBar g-flex g-flex-v-center g-flex-center is-fixed">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'navBar',
  props: {
    //选项卡内容
    tabList: Array,
  },
  data(){
    return{
      tabIndex:0
    }
  },
  methods:{
    changeTab(index){
      this.tabIndex = index;
      this.$emit("changeTab",index);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
  .ui-navBar{
    li{
      span{
        padding:rem(20 30);
      }
      .active{
        color:$c-gn3;
        border-bottom: 2px solid $c-gn3;
      }
    }
  }
  .is-fixed{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: rem(90);
    border-top:1px solid $c-gy6;
  }
</style>

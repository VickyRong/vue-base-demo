<!--
 tabBar组件
create by VickyRong on 2017/11/05. -->
<template>
    <ul class="ui-tabBar g-flex">
      <li v-for="(item,index) in tabList" @click="changeTab(index)" class="g-flex-c1 g-tac">
        <span :class="index == tabIndex?'active':''">{{item}}</span>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'tab-bar',
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
  .ui-tabBar{
    li{
      span{
        padding:rem(20 30);
      }
       .active{
        color:$c-pk1;
        border-bottom: 2px solid $c-pk1;
      }
    }
   
  }
</style>

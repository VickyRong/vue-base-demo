<template>
  <div class="g-wrap">
    <!--标题-->
    <div class="demo-title">
      <h2>navBar</h2>
      <p class="s-fc-gy3 g-mt10">导航条切换条</p>
    </div>
    <!--描述-->
    <div class="demo-info">
      <p>可配置导航条、内容、获取索引值。</p>
    </div>
    <!--组件-->
    <NavBar>
      <TabItem icon="icon-home">首页</TabItem>
      <TabItem icon="icon-pic">图集</TabItem>
      <TabItem icon="icon-my">我的</TabItem>
    </NavBar>
  </div>
</template>

<script>
import NavBar from '../../components/NavBar';
import TabItem from '../../components/tabItem';
export default {
  components:{
    NavBar,TabItem
  },
  data() {
    return{
      tabIndex:0
    }
  },
  methods:{
   changeTab(index){
     this.$set(this,"tabIndex",index);
   }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
.g-wrap{
  padding: rem(30);
}
</style>

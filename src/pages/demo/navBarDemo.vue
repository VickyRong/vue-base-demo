<template>
  <div class="g-wrap">
    <!--头部-->
    <div class="demo-header">
      <h2>NavBar</h2>
      <p class="s-fc-gy3 g-mt10">导航条切换条</p> 
      <p class="demo-des">可配置导航条icon选中颜色、内容、获取索引值。</p>
    </div>

    <!--组件-->
    <div class="demo-tt g-mb">导航一</div>
    <nav-bar v-model="select1" activeColor="s-fc-pk1" isFixed = "false">
      <tab-item icon="icon-home" id="1">首页</tab-item>
      <tab-item icon="icon-pic" id="2">图集</tab-item>
      <tab-item icon="icon-my" id="3">我的</tab-item>
    </nav-bar>
    <div class="demo-info g-mt">{{"索引值: "+ select1}}</div>

    <div class="demo-tt g-mt50 g-mb">导航二</div>
    <div class="demo-info">{{"索引值: "+ select2}}</div>
    <nav-bar v-model="select2" activeColor="s-fc-bu2">
      <tab-item icon="icon-home" id="1">首页</tab-item>
      <tab-item icon="icon-pic" id="2">图集</tab-item>
      <tab-item icon="icon-my" id="3">我的</tab-item>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/navBar';
import TabItem from '../../components/tabItem';
export default {
  components:{
    NavBar,TabItem
  },
  data() {
    return{
      select1:1,
      select2:2
    }
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
.g-wrap{
  padding: rem(30);
}
</style>

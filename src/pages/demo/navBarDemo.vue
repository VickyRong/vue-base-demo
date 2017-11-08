<template>
  <div class="g-wrap">
    <!--标题-->
    <div class="demo-title">
      <h2>navBar</h2>
      <p class="s-fc-gy3 g-mt10">导航条切换条</p>
    </div>
    <!--描述-->
    <div class="demo-info">
      <p>可配置导航条icon选中颜色、内容、获取索引值。</p>
    </div>
    <!--组件-->
      <p>{{"导航一选中: "+ checked}}</p>
    <nav-bar v-model="checked" activeColor="s-fc-pk1" isFixed = "false">
      <tab-item icon="icon-home" id="1">首页</tab-item>
      <tab-item icon="icon-pic" id="2">图集</tab-item>
      <tab-item icon="icon-my" id="3">我的</tab-item>
    </nav-bar>
    <p>{{"导航二选中: "+ select}}</p>
    <nav-bar v-model="select" activeColor="s-fc-gn3">
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
      checked:1,
      select:2
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

<template>
  <div class="g-wrap">
    <!--头部-->
    <div class="demo-header">
      <h2>TabBar</h2>
      <p class="s-fc-gy3 g-mt10">选项卡切换条</p> 
      <p class="demo-des">可配置高亮条颜色、文案、获取索引值。</p>
    </div>

    <!--组件-->
    <div class="demo-tt g-mb">基础用法</div>
    <tab-bar :tabList="tabData" @changeTab="changeTab1"></tab-bar>
    <div class="demo-info g-mt50 g-mb">索引值: {{ tabIndex1 }}</div>
    <tab-bar :tabList="tabData" color="#f40" @changeTab="changeTab2"></tab-bar>
    <div class="demo-info g-mt50">索引值: {{ tabIndex2 }}</div>
  </div>
</template>

<script>
import TabBar from '../../components/tabBar';
import TabItem from '../../components/tabItem';
export default {
  components:{
    TabBar
  },
  data() {
    return{
      tabData:['选项一','选项二','选项三'],
      tabIndex1:0,
      tabIndex2:0
    }
  },
  methods:{
   changeTab1(index){
     this.$set(this,"tabIndex1",index);
   },
   changeTab2(index){
     this.$set(this,"tabIndex2",index);
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

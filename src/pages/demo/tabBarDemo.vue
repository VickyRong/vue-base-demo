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
    <tab-bar :tabList="tabData" @changeTab="changeTab"></tab-bar>
    <div class="demo-info g-mt50">索引值: {{ tabIndex }}</div>
  </div>
</template>

<script>
import TabBar from '../../components/tabBar';
export default {
  components:{
    TabBar
  },
  data() {
    return{
      tabData:['选项一','选项二','选项三'],
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

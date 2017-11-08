<template>
  <div class="g-wrap">
    <!--标题-->
    <div class="demo-title">
      <h2>TabBar</h2>
      <p class="s-fc-gy3 g-mt10">选项卡切换条</p>
    </div>
    <!--描述-->
    <div class="demo-info">
      <p>可配置高亮条颜色、选项卡内容、获取索引值。</p>
    </div>
    <!--组件-->
    <tab-bar :tabList="tabData" @changeTab="changeTab"></tab-bar>
    <p class="g-mt50">索引值: {{ tabIndex }}</p>
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
     console.log(index);
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

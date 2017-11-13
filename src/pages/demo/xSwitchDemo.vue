<template>
  <div class="g-wrap">
    <!--头部-->
    <div class="demo-header">
      <h2>Switch</h2>
      <p class="s-fc-gy3 g-mt10">切换按钮</p> 
      <p class="demo-des">可配置颜色，获取按钮当前状态。</p>
    </div>

    <!--组件-->
    <div class="demo-tt g-mb">默认关闭，开启</div>
    <x-switch v-model="checked1"></x-switch>
    <x-switch v-model="checked2" ></x-switch>
    <div class="demo-info g-mt">
      状态1 ：{{checked1}}    状态2 ：{{checked2}}
    </div>

    <div class="demo-tt g-mt50 g-mb">禁用</div>
    <x-switch v-model="checked3" disabled></x-switch>
    <x-switch v-model="checked4" disabled></x-switch>
    <div class="demo-info g-mt">
      设置属性disabled
    </div>
    
    <div class="demo-tt g-mt50 g-mb">设置颜色</div>
    <x-switch v-model="checked5" color="#A6E4E7"></x-switch>
    <div class="demo-info g-mt">
      颜色color属性可接受16进制，rgb,英文值。 
    </div>

    <div class="demo-tt g-mt50 g-mb">与Cell组件配套使用</div>
    <cell content="与cell组合">
      <x-switch v-model="checked6" class="g-mr10"></x-switch>
    </cell>
    <div class="demo-info g-mt">
      状态: {{checked6}}
    </div>
  </div>
</template>

<script>
import xSwitch from '../../components/xSwitch';
import Cell from '../../components/cell';
export default {
  components:{
    xSwitch,Cell
  },
  data(){
    return{
      checked1:false,
      checked2:true,
      checked3:true,
      checked4:false,
      checked5:true,
      checked6:true,
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

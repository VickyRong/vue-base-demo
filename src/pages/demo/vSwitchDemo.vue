<template>
  <div class="g-wrap">
    <!--头部-->
    <div class="demo-header">
      <h2>Switch</h2>
      <p class="s-fc-gy3 g-mt10">切换按钮</p> 
      <p class="demo-des">可配置颜色，获取按钮当前状态。</p>
    </div>

    <!--组件-->
    <div class="demo-tt g-mb">默认关闭</div>
    <v-switch v-model="checked1"></v-switch>
    <div class="demo-info g-mt">
      状态：{{checked1}}
    </div>

    <div class="demo-tt g-mt50 g-mb">默认开启</div>
    <v-switch v-model="checked2" color="#f40"></v-switch>
    <div class="demo-info g-mt">
      状态：{{checked2}}
    </div>

    <div class="demo-tt g-mt50 g-mb">禁用</div>
    <v-switch v-model="checked3" disabled></v-switch>
    <v-switch v-model="checked3" checked disabled></v-switch>
  </div>
</template>

<script>
import vSwitch from '../../components/vSwitch';
export default {
  components:{
    vSwitch
  },
  data(){
    return{
      checked1:false,
      checked2:true,
      checked3:false,
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

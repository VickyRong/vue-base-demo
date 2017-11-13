<template>
  <div class="g-wrap">
    <!--头部-->
    <div class="demo-header">
      <h2>Radio</h2>
      <p class="s-fc-gy3 g-mt10">单选按钮</p> 
      <p class="demo-des">可获取按钮当前状态。</p>
    </div>

    <!--组件-->
    <div class="demo-tt g-mb">基础用法</div>
    <x-radio :options="options1"  v-model="picked1"></x-radio>
    <div class="demo-info g-mt">
      选中 ：{{picked1}}
    </div>

    
  </div>
</template>

<script>
import xRadio from '../../components/xRadio';
export default {
  components:{
    xRadio
  },
  data(){
    return{
      picked1:'女',
      options1:['男', '女'],
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

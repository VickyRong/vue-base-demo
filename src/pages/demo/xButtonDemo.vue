<template>
  <div class="g-wrap">
    <!--头部-->
    <div class="demo-header">
      <h2>Button</h2>
      <p class="s-fc-gy3 g-mt10">按钮</p> 
      <p class="demo-des">可配置大小，颜色，圆角，边框。</p>
    </div>
   
    <!--组件-->
    <div class="demo-tt g-mb">颜色</div>
    <x-button>默认</x-button>
    <x-button type="primary">primary</x-button>
    <x-button type="danger">danger</x-button>

    <div class="demo-tt g-mb">状态</div>
    <x-button type="primary" loading>loading</x-button>
    <x-button type="primary" disabled>disabled</x-button>
    
    <div class="demo-tt g-mb">幽灵按钮</div>
    <x-button type="primary" plain>primary</x-button>
    <x-button type="danger" plain>danger</x-button>

    <div class="demo-tt g-mb">尺寸</div>
    <x-button type="primary" >big</x-button>
    <x-button type="primary" size="middle">middle</x-button>
    <x-button type="primary" size="small">small</x-button>
    
    
  </div>
</template>

<script>
import xButton from '../../components/xButton';
export default {
  components:{
    xButton
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
@import 'src/style/animate';
.g-wrap{
  padding: rem(30);
}

</style>

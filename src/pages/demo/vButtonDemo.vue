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
    <v-button>默认</v-button>
    <v-button type="primary">primary</v-button>
    <v-button type="danger">danger</v-button>

    <div class="demo-tt g-mb">状态</div>
    <v-button type="primary" loading>loading</v-button>
    <v-button type="primary" disabled>disabled</v-button>
    
    <div class="demo-tt g-mb">幽灵按钮</div>
    <v-button type="primary" plain>primary</v-button>
    <v-button type="danger" plain>danger</v-button>

    <div class="demo-tt g-mb">尺寸</div>
    <v-button type="primary" >big</v-button>
    <v-button type="primary" size="middle">middle</v-button>
    <v-button type="primary" size="small">small</v-button>
    
    
  </div>
</template>

<script>
import vButton from '../../components/vButton';
export default {
  components:{
    vButton
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

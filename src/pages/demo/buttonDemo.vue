<template>
  <div class="g-wrap">
    <!--标题-->
    <div class="demo-title">
      <h2>Button</h2>
      <p class="s-fc-gy3 g-mt10">按钮</p>
    </div>
    <!--描述-->
    <div class="demo-info">
      <p>按钮可配置大小，颜色，圆角，边框。</p>
    </div>
    <!--组件-->
    <v-button class="g-mb">确定（默认）</v-button>
    <v-button class="g-mb" loading>提交中...（loading）</v-button>
    <v-button class="g-mb" disabled>确定（禁用）</v-button>
    <v-button class="g-mb" plain>确定（禁用）</v-button>

    <v-button class="g-mb" warn>确定（默认）</v-button>
    <v-button class="g-mb" warn loading>提交中...（loading）</v-button>
    <v-button class="g-mb" warn disabled>确定（禁用）</v-button>
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

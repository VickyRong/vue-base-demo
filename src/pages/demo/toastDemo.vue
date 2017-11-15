<template>
  <div class="g-wrap">
    <!--头部-->
    <div class="demo-header">
      <h2>Toast</h2>
      <p class="s-fc-gy3 g-mt10">消息弹窗</p> 
      <p class="demo-des">可配置消息内容。</p>
    </div>

    <!--组件-->
    <div class="demo-tt g-mb">基础用法</div>
    <x-button @click.native="notice" type="primary">点我啊</x-button>
    <div class="demo-info g-mt50">
      <p>用法：</p>
      <p>showToast方法已在全局注册，项目中任意地方都可调用。</p>
      this.showToast(this,"你今天真可爱～",true);
    </div>

  </div>
</template>

<script>
import xButton from '../../components/xButton';
export default {
  components:{
    xButton
  },
  methods:{
    notice(){
      this.showToast(this,"你今天真可爱～",true);
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

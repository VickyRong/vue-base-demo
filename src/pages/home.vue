<template>
  <div class="content">
      <h3 class="g-tac">目录页</h3>
      <h4>一.提示类</h4>
      <div class="g-pl">
        <router-link to="">Loading</router-link>
        <router-link to="">Toast</router-link>
        <router-link to="">MessageBox</router-link>
      </div>
      <h4>二.功能类</h4>
      <div class="g-pl">
        <router-link to="">Swiper</router-link>
        <router-link to="">Refresh （下拉刷新）</router-link>
        <router-link to="">LoadMore（加载更多）</router-link>
        <router-link to="">qrcode（生成二维码，包括img格式和canvas）</router-link>
      </div>
      <h4>三.布局类</h4>
      <div class="g-pl">
        <router-link to="">Tabbar</router-link>
        <router-link to="">Navbar</router-link>
        <router-link to="">Cell</router-link>
        <router-link to="">Panel</router-link>
        <router-link to="">Button</router-link>
      </div>
      <h4>四.表单类</h4>
      <div class="g-pl">
        <router-link to="">Switch</router-link>
        <router-link to="">Radio</router-link>
        <router-link to="">Checkbox</router-link>
        <router-link to="">F-number</router-link>
      </div>
      <h4>五.自定义功能弹窗</h4>
      <div class="g-pl">
        <router-link to="">Popup-date（选择日期）</router-link>
        <router-link to="">Popup-area（选择省市区）</router-link>
      </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
  .content{
    font-size: rem(30);
    a{
      display: block;
      padding: rem(15 0);
      border-bottom:1px solid #ddd;
    }
    h4{
      margin-top:rem(30); 
    }
  }
</style>


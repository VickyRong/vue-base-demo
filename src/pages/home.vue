<template>
  <div class="g-wrap">
    <div class="content g-mtb g-mlr g-ptb g-plr">
        <h3 class="g-tac">目录页</h3>
      <h4>一.布局类</h4>
      <div class="g-pl">
        <router-link to="/demo/tabBar"><Cell content="Tabbar" icon="icon-tab s-fc-pk1 s-fs36" arrow></Cell></router-link>
        <router-link to="/demo/navBar"><Cell content="Navbar" icon="icon-nav-bar s-fc-pk1 s-fs36" arrow></Cell></router-link>
        <router-link to="/demo/cell"><Cell content="Cell" icon="icon-cell s-fc-pk1 s-fs36" arrow></Cell></router-link>
        <router-link to="/demo/button"><Cell content="Button" icon="icon-button s-fc-pk1 s-fs36" arrow></Cell></router-link>
      </div>
      <h4>二.表单类</h4>
      <div class="g-pl">
        <router-link to="/demo/switch"><Cell content="Switch" icon="icon-switch s-fc-pk1 s-fs28" arrow></Cell></router-link>
        <router-link to=""><Cell content="Radio" icon=""></Cell></router-link>
        <router-link to=""><Cell content="Checkbox" icon=""></Cell></router-link>
        <router-link to=""><Cell content="V-number" icon=""></Cell></router-link>
      </div>
      <h4>三.提示类</h4>
      <div class="g-pl">
        <router-link to=""><Cell content="Loading" icon=""></Cell></router-link>
        <router-link to=""><Cell content="Toast" icon=""></Cell></router-link>
        <router-link to=""><Cell content="MsgBox" icon=""></Cell></router-link>
      </div>
      <h4>四.功能类</h4>
      <div class="g-pl">
        <router-link to=""><Cell content="Swiper" icon=""></Cell></router-link>
        <router-link to=""><Cell content="Refresh（下拉刷新）" icon=""></Cell></router-link>
        <router-link to=""><Cell content="LoadMore（加载更多）" icon=""></Cell></router-link>
        <router-link to=""><Cell content="Qrcode" icon=""></Cell></router-link>
      </div>
      <h4>五.自定义功能弹窗</h4>
      <div class="g-pl">
        <router-link to=""><Cell content="Popup-date（选择日期)" icon=""></Cell></router-link>
        <router-link to=""><Cell content="Popup-area（选择省市区）" icon=""></Cell></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Cell from '../components/cell';
export default {
  components: {
    Cell
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
  .g-wrap{
    background-color:$c-bu1;
    .content{
      background-color: #F9F9F9;
      border-radius:rem(10); 
      a{
        display: block;
      }
      h4{
        margin-top:rem(30); 
      }
    }
  }
    
</style>


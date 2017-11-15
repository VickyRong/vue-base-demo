<!--
 Toast组件
create by VickyRong on 2017/11/15. -->
<template>
  <div class="ui-toast-modal g-flex g-flex-center g-flex-v-center" v-show="show">
    <p class="s-fc-w ui-toast-box fadeIn"> {{context}} </p>
  </div>
</template>

<script>
export default {
  name: 'toast',
  computed:{
    context(){
      return this.$store.state.toastContext;
    },
    show(){
      return this.$store.state.showToast;
    }
  },
  props:{

 }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
.ui-toast-modal{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color:rgba(0,0, 0,0);
  left: 0;
  top: 0;
  .ui-toast-box{
    padding: rem(20 30);
    background-color: rgba(0,0, 0,.4);
    border-radius: rem(10);
  }
   .fadeIn {
    animation-name: fadeIn;
    -webkit-animation-name: fadeIn;
    animation-duration: .3s;
    -webkit-animation-duration: .3s;
    animation-timing-function: linear;
    -webkit-animation-timing-function: linear;
    visibility: visible !important;
  }

  @keyframes fadeIn {
    0% {
      transform: scale(0);
      opacity: 0.0;
    }
    60% {
      transform: scale(1.1);
    }
    80% {
      transform: scale(0.9);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      -webkit-transform: scale(0);
      opacity: 0.0;
    }
    60% {
      -webkit-transform: scale(1.1);
    }
    80% {
      -webkit-transform: scale(0.9);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 1;
    }
  }
}
</style>

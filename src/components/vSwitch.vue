<!--
 Switch组件
create by VickyRong on 2017/11/09. -->
<template>
  <label  class="ui-switch"> <!--务必使用label 点圆按钮的时候也可以选中-->
    <input type="checkbox" :checked="value" :disabled="disabled" class="ui-switch-input">
    <span @click="changeSelect" class="ui-switch-box"></span>
  </label>
</template>

<script>
export default {
  name: 'switch',
  props:{
    //选中的值
    value:{
      type:Boolean,
      default:false
    },
    //禁用
    disabled:{
      type:Boolean,
      default:false
    },
    //按钮颜色
    color:{
      type:String,
      default:''
    }

  },
  data(){
    return {
      status:false,
    }
  },
  created(){
    console.log(this.color);
  },
  methods:{
    changeSelect(){
      this.status = !this.value;
      this.$emit('input',this.status);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
  .ui-switch-input{
    outline: none;
    display: none;
  }

  .ui-switch input[disabled = "disabled"] +.ui-switch-box{
    opacity: .4;
  }

  .ui-switch-input:checked +.ui-switch-box{
    background: $c-pk1;
    border:1px solid $c-pk1;
    &:before {
        transform: scale(0);
    }
    &:after {
        transform: translateX(rem(40));
    }
  }

  .ui-switch-box{
    display: inline-block;
    position: relative;
    width: rem(104);
    height: rem(64);
    background-color:$c-gy5; 
    border-radius:rem(32);
    border:1px solid $c-gy5;
    outline: none;
    box-sizing: border-box;
      &:before{ //控制switch元件背景颜色
        content: " ";
        top: 0;
        left: 0;
        position: absolute;
        width: rem(100);
        height: rem(60);
        background-color:$c-w; 
        border-radius:rem(30);
        transition:all .3s, -webkit-transform .3s;
      }
      &:after{ //控制switch圆形按钮
        content: " ";
        top: 0;
        left: 0;
        position: absolute;
        width: rem(60);
        height: rem(60);
        border-radius: 100%;
        background-color: $c-w;
        box-shadow: 0 rem(2) rem(6) rgba(0, 0, 0, .4);
        transition:all .3s, -webkit-transform .3s;
      }
  }

</style>

<!--
 Radio组件
create by VickyRong on 2017/11/13. -->
<template>
  <div>
      <div v-for="item in options" class="ui-radio g-flex g-flex-v-center g-mb10">
        <input v-model="currentValue" @change="changePicked" :value="item" :id="item"  class="ui-radio-input" type="radio" >
        <span class="ui-radio-box"></span>
        <label :for="item">{{item}}</label>
      </div>
  </div>
</template>

<script>
export default {
  name: 'x-radio',
  props:{
    //选中值的内容
    value:{
      type:[String,Number]
    },
    options:{}
  },
  data(){
    return {
      currentValue:this.value
    }
  },
  methods:{
    changePicked(e){
      console.log(e.target.value);
      this.$emit('input',e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
 .ui-radio-input{
   outline: none;
   display: none;
 } 

 .ui-radio-box{
   display: inline-block;
   width: rem(34);
   height: rem(34);
   margin-right: rem(15);
   border-radius:100%;
   background-color:transparent;
   border: 1px solid $c-gy4; 
   box-sizing: border-box;
   transition: transform .2s,cubic-bezier(0.075, 0.82, 0.165, 1),.2s;
 }

 .ui-radio-input:checked + .ui-radio-box{
   border: rem(10) solid $c-pk1; 
 }
</style>

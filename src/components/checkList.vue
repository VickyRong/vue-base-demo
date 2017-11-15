<!--
 CheckList组件(多选列表)
create by VickyRong on 2017/11/14. -->
<template>
  <div>
    <div v-for="item in options" class="ui-checkList g-mb">
      <!-- @change="changeSelect"  -->
      <input type="checkbox" v-model="currentValue" :value="item.value" :id="item.id" class="ui-checkList-input">
      <span class="iconfont icon-checkbox s-fs30"></span>
      <label :for="item.id">{{item.value}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'check-list',
  props:['value','options'],
  data(){
    return {
      currentValue:this.value
    }
  },
  watch:{
    value(val){ //val是新的改变的值。
      this.currentValue = val;
    },
    currentValue(value){
     this.$emit('input',value);
    }
  },
  methods:{
    // changeSelect(){ //change事件发生在值改变之后
    //   console.log(this.currentValue);
    //   this.$emit('input',this.currentValue);
    // }
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';

  .ui-checkList-input{
    display:none;
  }

  .ui-checkList-input:checked ~.icon-checkbox{
    &:before{
      content: "\e6d6";
      color:$c-pk1;
    }
  }
</style>

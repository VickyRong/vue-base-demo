<!--
 CheckList组件(多选列表)
create by VickyRong on 2017/11/14. -->
<template>
  <div>
    <div v-for="item in options" class="ui-checkList g-mb">
      <input type="checkbox"  @change="changeSelect" class="ui-checkList-input" :id="item.id" :value="item.value" v-model="currentValue">
      <span class="iconfont icon-checkbox s-fs30"></span>
      <label :for="item.id">{{item.value}}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'check-list',
  props:{
    //选中值的内容
    value:{},
    //配置参数
    options:{}
  },
  data(){
    return {
      currentValue:this.value
    }
  },
  methods:{
    changeSelect(){
      this.$emit('input',this.currentValue);
    }
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

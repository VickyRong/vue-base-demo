<template>
  <div class="g-wrap">
    <!--头部-->
    <div class="demo-header">
      <h2>CheckList</h2>
      <p class="s-fc-gy3 g-mt10">多选按钮</p> 
      <p class="demo-des">可获取选中列表的值。</p>
    </div>

    <!--组件-->
    <div class="demo-tt g-mb">基础用法</div>
    <check-list :options="options" v-model="checkList"></check-list>
    <div class="demo-info g-mt">
      选中 ：{{checkList}}
    </div>

    
  </div>
</template>

<script>
import checkList from '../../components/checkList';
export default {
  components:{
    checkList
  },
  data(){
    return{
      checkList:[],
      options:[
        { id:1,value:'乐器'},
        { id:2,value:'阅读'},
        { id:3,value:'旅游'},
      ],
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

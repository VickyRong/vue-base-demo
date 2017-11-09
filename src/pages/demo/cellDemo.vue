<template>
  <div class="g-wrap">
    <!--头部-->
    <div class="demo-header">
      <h2>Cell</h2>
      <p class="s-fc-gy3 g-mt10">项目条</p> 
      <p class="demo-des">项目条可配置icon、箭头、颜色。</p>
    </div>

    <!--组件-->
    <div class="demo-tt g-mb">基础用法</div>
    <cell content="项目名"></cell>
    <cell content="项目名" icon="icon-cell" arrow></cell>
    <cell content="项目名" color="#4fc08d" icon="icon-cell" iconColor="#4fc08d" arrow="true"></cell>
  </div>
</template>

<script>
import Cell from '../../components/cell';
export default {
  components:{
    Cell
  }
}
</script>

<style lang="scss" scoped>
@import 'src/style/common';
.g-wrap{
  padding: rem(30);
}


</style>

<template>
  <div class="g-wrap">
    <!--标题-->
    <div class="demo-title">
      <h2>Cell</h2>
      <p class="s-fc-gy3 g-mt10">项目条</p>
    </div>
    <!--描述-->
    <div class="demo-info">
      <p>项目条可配置icon、箭头、颜色。</p>
    </div>
    <!--组件-->
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

<!--
 Button组件
create by VickyRong on 2017/11/08. -->
<template>
  <div :class="classType" class="ui-button g-flex g-flex-center g-flex-v-center">
    <i v-if="loading !== false && loading!== 'false'" class="iconfont icon-loading s-fs30 g-mr10"></i>
     <slot></slot>   
  </div>
</template>

<script>
export default {
  name: "v-button",
  props: {
    //按钮文案
    content: {
      type: [Number, String],
      default: ""
    },
    //颜色类型
    type: String,
    //禁用
    disabled: Boolean,
    //警告
    warn: Boolean,
    //幽灵按钮
    plain: Boolean,
    //loading
    loading: Boolean,
    //尺寸
    size: String
  },
  data() {
    return {};
  },
  computed: {
    classType() {
      return [
        {
          'ui-button-loading':this.loading,
          'ui-button-disabled':this.disabled,
        },
        `ui-button-${this.type}`,
        `ui-button-${this.size}`,
        this.plain ? `ui-button-plain-${this.type}`:''
      ];
    }
  },
};
</script>

<style lang="scss" scoped>
@import "src/style/common";
.ui-button {
  height: rem(90);
  border-radius: rem(10);
  font-size: rem(32);
  margin-bottom: rem(30);
  color: $c-gy3;
  background-color: $c-w;
  border: 1px solid $c-gy3;
}

.ui-button-primary {
  color: $c-w;
  background-color: $c-gnwx1;
  border: 1px solid $c-gnwx1;
}
.ui-button-danger {
  color: $c-w;
  background-color: $c-redwx1;
  border: 1px solid $c-redwx1;
}

.ui-button-plain-primary {
  color: $c-gnwx1;
  background-color: transparent;
  border: 1px solid $c-gnwx1;
}

.ui-button-plain-danger {
  color: $c-redwx1;
  background-color: transparent;
  border: 1px solid $c-redwx1;
}

.ui-button-middle{
  width: rem(360);
  height: rem(90);
}

.ui-button-small{
  width: rem(180);
  height: rem(70);
}

.ui-button-loading {
  opacity: .8;
}

.ui-button-disabled {
  opacity: .6;
}

</style>

<template>
  <div>
      <router-view></router-view>
      <toast/>
  </div>
</template>

<script>
import Toast from "./components/toast.vue"
export default {
  name: 'app',
  components: {
    Toast
  }
}
</script>

<style lang="scss" scoped>
  @import 'src/style/common';
  
</style>

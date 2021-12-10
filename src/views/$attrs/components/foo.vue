<template>
  <div class="foo">
    <Son v-bind="$attrs" v-on="$listeners"></Son>
  </div>
</template>

<script>
import Son from './son.vue'
export default {
  components: {
    Son
  }
}
</script>
<style scoped>
.foo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>

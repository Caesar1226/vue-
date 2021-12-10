<template>
  <div class="home">
      <Foo grandfather="grandfather" @doClick="doClick"/>
  </div>
</template>

<script>

import Foo from './components/foo.vue'
export default {
  components: {
    Foo
  },
  methods: {
    doClick (msg) {
      alert(msg)
    }
  }
}
</script>
<style scoped lang="scss">
@import '../../assets/css/index.scss';
.home {
  color:$blue;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>

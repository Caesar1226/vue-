<template>
  <div class="main">
    <div>{{$attrs.grandfather}}</div>
    <button @click="()=>{$listeners.doClick('son')}">点击</button>
  </div>
</template>

<style scoped>
.main {
    width: 100%;
  height: 100%;
}
</style>

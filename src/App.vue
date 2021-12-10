<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">$attrs|$listeners</router-link>
      <router-link to="/about">测试表格多选</router-link>
      <router-link to="/webWorker">webWorker</router-link>
      <router-link to="/image">图片压缩测试</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  #nav {
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,.05);
  }
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

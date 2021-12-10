<!--  -->
<template>
  <div class="main">
    <el-image
      style="width: 100px; height: 100px"
      :src="image1"
      :fit="fit"
    ></el-image>
    <el-image
      style="width: 100px; height: 100px"
      :src="image2"
      :fit="fit"
    ></el-image>
    <el-image
      style="width: 100px; height: 100px"
      :src="image3"
      :fit="fit"
    ></el-image>
    <el-image
      style="width: 100px; height: 100px"
      :src="image4"
      :fit="fit"
    ></el-image>
    <el-image
      style="width: 100px; height: 100px"
      :src="image5"
      :fit="fit"
    ></el-image>
    <el-image
      style="width: 100px; height: 100px"
      :src="image6"
      :fit="fit"
    ></el-image>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        image1: require('../../assets/image/1.png'),
        image2: require('../../assets/image/2.png'),
        image3: require('../../assets/image/3.png'),
        image4: require('../../assets/image/4.png'),
        image5: require('../../assets/image/5.png'),
        image6: require('../../assets/image/6.png'),
      }
    },
    computed: {},
    watch: {},

    methods: {},
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
  }
</script>
<style lang="scss" scoped>
  //@import url(); 引入公共css类
</style>

<template>
  <div id="mysubway">
    <iframe id="iframe-subway" src="http://127.0.0.1:5500/TJ-subway.html" frameborder="0" />
  </div>
</template>

<script>
  import { defineComponent } from 'compatible-vue';
  export default defineComponent({
    setup() {},
  });
</script>
<style lang="less" scoped>
  #iframe-subway {
    width: 100%;
    height: calc(100vh - 200px);
  }
</style>

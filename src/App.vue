<template>
  <div id="app">
   <lay-out></lay-out>
  </div>
</template>

<script>
import LayOut from './layout'
export default {
  name: 'app',
  components: {
    LayOut
  }
}

</script>

<style lang="stylus">
  #app
    width 100%
    height 100%
</style>

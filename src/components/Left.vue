<template>
  <div class="left">
    {{msg}}
  </div>
</template>

<script>
  export default {
    name: 'Left',
    data () {
      return {msg: '左'}
    },
    beforeRouteEnter: (to, from, next) => {
      console.log("准备进入Left路由模板",to.path);
      next();
    },
    beforeRouteLeave: (to, from, next) => {
      console.log("准备离开Left路由模板",to.path);
      next()
    }
  }
</script>

<style scoped>

</style>

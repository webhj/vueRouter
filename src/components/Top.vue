<template>
  <div>
    {{msg}}
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Top',
    data(){
       return{
         msg:'路由'
       }
    }
  }
</script>

<style scoped>

</style>

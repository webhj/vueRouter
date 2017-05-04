<template>
  <div>
    :to传值:{{$route.params.id}}
    <hr>
    name别名传值：{{$route.name}}
    <hr>
    :冒号URL传值：{{$route.params.userId}}
  </div>
</template>

<script>
  export default {
    name: 'Route'
  }
</script>

<style scoped>

</style>

<template>
  <div id="app">
    <router-view></router-view>
    <tab></tab>
  </div>
</template>

<script>
  import tab from 'components/tab/tab.vue'

  export default {
    name: 'App',
    components: {
      tab
    }
  }
</script>

<style>
</style>

<template>
  <SortingMain msg="Sorting Algorithm Visualiser"/>
</template>

<script>
import SortingMain from './components/SortingVisualiser/sorting_vis.vue'

export default {
  name: 'App',
  components: {
    SortingMain
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

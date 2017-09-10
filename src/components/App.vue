<template>
  <div id="app">
    <room></room>
    <toolbar></toolbar>
  </div>
</template>

<script>
import Room from './Room.vue'
import Toolbar from './Toolbar.vue'

export default {
  name: 'app',
  data () {
    return { }
  },
  components: { Room, Toolbar }
}
</script>

<style>
#app {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;

  border-style: outset;
  border-width: 0.25em;
  border-color: #333333;
}
</style>

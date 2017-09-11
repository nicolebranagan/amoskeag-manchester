<template>
  <div id="app">
    <div id="container">
      <room></room>
      <toolbar></toolbar>
    </div>
    <start></start>
  </div>
</template>

<script>
import Room from './Room.vue'
import Toolbar from './Toolbar.vue'
import Start from './Start.vue'

export default {
  name: 'app',
  data () {
    return { }
  },
  components: { Room, Toolbar, Start }
}
</script>

<style>
#container {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;

  border-style: outset;
  border-width: 0.25em;
  border-color: #333333;
}
</style>

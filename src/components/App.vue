<template>
  <div id="app">
    <div id="container">
      <toolbar></toolbar>
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
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  vertical-align: top;
  display: flex;
  flex-direction: column;
}
</style>

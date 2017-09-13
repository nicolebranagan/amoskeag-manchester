<template>
  <div id="app">
    <div id="container">
      <toolbar></toolbar>
      <room></room>
      <gamebar></gamebar>
    </div>
    <start v-if="!$store.state.loaded"></start>
    <list v-if="$store.state.list != null"></list>
    <talk v-if="$store.state.convo != null"></talk>
    <status v-if="$store.state.status != null"></status>
  </div>
</template>

<script>
import Room from './Room.vue'
import Toolbar from './Toolbar.vue'
import Start from './Start.vue'
import Gamebar from './Gamebar.vue'
import List from './List.vue'
import Talk from './Talk.vue'
import Status from './Status.vue'

export default {
  name: 'app',
  data () {
    return { }
  },
  components: { Room, Toolbar, Start, Gamebar, List, Talk, Status }
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

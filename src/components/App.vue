<template>
  <div id="app">
    <room></room>
  </div>
</template>

<script>
import Room from './Room.vue'
export default {
  name: 'app',
  data () {
    return { }
  },
  components: { Room }
}
</script>

<style>
#app {
  max-width: 800px;
  margin-right: auto;
  margin-left: auto;

  border-style: inset;
  border-width: 0.25em;
  border-color: #555555;
}
</style>

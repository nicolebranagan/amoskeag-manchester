<template>
  <div id="toolbar">
    <i @click="update">Click italicized text</i>
  </div>
</template>

<script>
import { update } from '../actions.js';
console.log(update)
export default {
  name: 'toolbar',
  data () {
    return {
      update: () => {this.$store.dispatch('look_room', {title: "data"})}
    }
  },
}
</script>

<style scoped>
#toolbar {
  background-color: #666666;
  height: 64px;
}
</style>

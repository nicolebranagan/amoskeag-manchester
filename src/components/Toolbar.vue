<template>
  <div id="toolbar">
    <i @click="look_room">Click italicized text</i>
  </div>
</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {
      look_room: () => {this.$store.dispatch('look_room')}
    }
  },
}
</script>

<style scoped>
#toolbar {
  background-color: #666666;
  height: 15%;
  min-height: 2em;
  width: 100%;
  bottom: 0;
}
</style>

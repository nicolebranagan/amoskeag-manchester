<template>
  <div id="room">
    <div id="title">{{ $store.state.title }}</div>
    <div id="desc">{{ $store.state.desc }}</div>
  </div>
</template>

<script>
export default {
  name: 'room',
}
</script>

<style scoped>
#room {
  background-color: #FFFFFF;
  color: #000000;
  padding: 1em;
}

#title {
  text-align: center;
  font-size: larger;
}

#desc {
  height: 300px;
  overflow-y: scroll;
}
</style>
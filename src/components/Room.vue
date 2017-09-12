<template>
  <div id="room">
    <div id="title">{{ $store.state.room.title }}</div>
    <div id="desc">{{ $store.state.room.desc }}</div>
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
  background: linear-gradient(to bottom, #ffffff 0%,#fffce5 100%); 
  color: #000000;
  padding: 1em;
  height: 100%;
  overflow-y: scroll;
  font-family: 'Merriweather', serif;
}

#title {
  text-align: center;
  font-size: larger;
}

#desc {
  white-space: pre-line;
}
</style>
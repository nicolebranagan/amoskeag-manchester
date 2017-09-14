<template>
  <div id="room">
    <div id="title">{{ $store.state.room.title }}</div>
    <div id="desc">
      <img v-if="$store.state.room.img != null" v-bind:src="$store.state.room.img">
      {{ $store.state.room.desc }}
    </div>
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
  margin-bottom: 0.75em;
}

#desc {
  white-space: pre-line;
}

#desc img {
  float: left;
  max-width: 37%;
  max-height: 30%;
  padding: 1em;
}
</style>
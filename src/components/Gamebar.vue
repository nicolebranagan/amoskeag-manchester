<template>
  <div class="toolbar">
    <div class="gamebar">
      <i class="fa fa-search fa-3x gamebutton" title="Look" @click="look"></i>
      <i class="fa fa-commenting-o fa-3x gamebutton" title="Talk" @click="talk"></i>
      <i class="fa fa-hand-rock-o fa-3x gamebutton" title="Get" @click="get"></i>
      <i class="fa fa-compass fa-3x gamebutton" title="Move" @click="move"></i>
      <i class="fa fa-id-card-o fa-3x gamebutton" title="Status" @click="status"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gamebar',
  data () {
    return {
      look: () => {this.$store.dispatch('apply_list', {type: "look"})},
      talk: () => {this.$store.dispatch('apply_list', {type: "talk"})},
      get: () => {this.$store.dispatch('apply_list', {type: "get"})},
      move: () => {this.$store.dispatch('apply_list', {type: "exit"})},
      status: () => {this.$store.dispatch('get_status')},
    }
  }
}
</script>

<style scoped>
.toolbar {
  background-color: #666666;
  height: 6em;
  width: 100%;
  bottom: 0;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.gamebar {
  margin-top: 0.7em;
  height:100%;
  vertical-align: middle;
  text-align: center;
}

.gamebutton {
  color: #DDD;
}

.gamebutton:hover {
  color: #FFF;
}

.gamebutton:active {
  color: #999;
}

i {
  height:100%;
  width: 2em;
  text-shadow: 0px 2px rgba(0,0,0,0.5);
  background-clip: text;
}
</style>

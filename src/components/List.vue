<template>
  <modal @close="$store.state.list = null">
    <div slot="header">
      <i class="fa fa-times fa-2x close-button" @click="$store.state.list = null"></i>
      {{ label }}
    </div>
    <div slot="body">
      <ul id="list">
        <li v-for="item in $store.state.list.items" :key="item.id" @click="call(item)">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue'
import Game from '../game.js'

export default {
  name: 'list',
  data () {
    return {
      call: (item) => {this.$store.dispatch('get_convo', {
        id: item.id,
        type: this.$store.state.list.type
      })}
    }
  },
  computed: {
    label: {
      get() {
        const empty = this.$store.state.list.items.length == 0;
        switch (this.$store.state.list.type) {
          case "look":
            return empty ? "Nothing to see here." : "Look at...";
          case "talk":
            return empty ? "No one to talk to here." : "Talk to...";
          case "get":
            return empty ? "Nothing to get here." : "Get...";
          case "exit":
            return empty ? "Can't leave here." : "Exits:";
          default:
            return this.$store.state.list.type;
        }
      }
    }
  },
  components: { Modal }
}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0em;
  padding: 0em;
}

li {
  padding: 0.5em;
  color: #2AF;
  text-decoration: underline;
  cursor: pointer;
}

.modal-container {
  position: relative;
}

.modal-body {
  text-align: center;
}

.modal-header {
  text-align: center;
  font-size: 1.1em;
}

.close-button {
  position: absolute;
  color: #200;
  top: 5px;
  right: 5px;
}
</style>

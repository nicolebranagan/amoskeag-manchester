<template>
  <modal @close="close()">
    <div slot="header">
      <i class="fa fa-times fa-2x close-button" @click="close()"></i>
    </div>
    <div slot="body">
      <div class="self_desc">
        {{ $store.state.status.desc }}
      </div>
      <h3 @click="call">{{ mode }}</h3>
      <ul v-if="mode == 'Inventory'">
        <li v-for="item in $store.state.status.inventory" :key="item.id" @click="call(item)">
          {{ item.label }}
        </li>
      </ul>
      <ul v-if="item !== null">
        <li v-for="item in $store.state.room.look" :key="item.id" @click="call(item)">
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
  name: 'status',
  data () {
    return {
      call: (item) => {this.item = item;},
      call2: (item) => {},
      close: () => {this.$store.state.status = null; this.$store.dispatch('look_room');},
      item: null,
    }
  },
  computed: {
    mode: { 
      get() {
        if (this.item != null)
          return "Use " + item.label + " on what?";
        if (this.$store.state.status.inventory.length == 0)
          return "";
        return "Inventory";
      }
    }
  },
  components: { Modal }
}
</script>

<style>
.talk_desc {
  padding-bottom: 1em;
  font-family: 'Merriweather', serif;
}

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
  font-size: 1.2em;
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

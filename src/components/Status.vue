<template>
  <modal @close="close()">
    <div slot="header">
      <i class="fa fa-times fa-2x close-button" @click="close()"></i>
    </div>
    <div slot="body">
      <div class="self_desc" v-if="item == null">
        {{ $store.state.status.desc }}
      </div>
      <h3 @click="call">{{ mode }}</h3>
      <ul v-if="mode == 'Inventory'">
        <li v-for="item in $store.state.status.inventory" :key="item.look" @click="call(item)">
          {{ item.label }}
        </li>
      </ul>
      <ul v-if="item !== null">
        <li @click="use">Use by itself</li>
        <li v-for="item in $store.state.room.look" :key="item.id" @click="use_on(item)">
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
      call: (item) => {console.log(item); this.item = item;},
      use: () => {console.log(this.item); this.$store.dispatch('get_convo', {
        id: this.item.look,
        type: 'use'
      })},
      use_on: (item) => {this.$store.dispatch('get_convo', {
        id: this.item.look,
        target: item.id,
        type: 'use'
      })},
      close: () => {this.$store.state.status = null; this.$store.dispatch('look_room');},
      item: null,
    }
  },
  computed: {
    mode: { 
      get() {
        if (this.item != null)
          return "Use " + this.item.label + " on what?";
        if (this.$store.state.status.inventory.length == 0)
          return "No items in inventory.";
        return "Inventory";
      }
    }
  },
  components: { Modal }
}
</script>

<style>
.self_desc {
  padding-bottom: 1em;
  font-family: 'Merriweather', serif;
}

ul {
  list-style-type: none;
  margin: 0em;
  padding: 0em;
}

h3 {
  font-size: 1.1em;
}

li {
  padding: 0.5em;
  color: #2AF;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1em;
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

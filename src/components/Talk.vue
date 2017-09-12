<template>
  <modal @close="$store.state.convo = null">
    <div slot="header">
      <i class="fa fa-times fa-2x close-button" @click="$store.state.convo = null"></i>
    </div>
    <div slot="body">
      <div class="talk_desc">
        {{ $store.state.convo.desc }}
      </div>
      <ul>
        <li v-for="item in $store.state.convo.talk" :key="item.id" @click="call(item)">
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
  name: 'talk',
  data () {
    return {
      call: (item) => {this.$store.dispatch('get_convo', {
        id: item.id,
        type: 'talk'
      })}
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

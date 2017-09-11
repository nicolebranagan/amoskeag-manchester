<template>
  <modal v-if="!$store.state.loaded" @close="$store.state.loaded = true">
    <div slot="header">Welcome to Amoskeag-Manchester</div>
    <div slot="body">
      <ul>
        <li><button>Log in</button></li>
        <li><button>Register</button></li>
        <li><button @click="anonymous">Proceed Anonymously</button></li>
      </ul>
    </div>
  </modal>
</template>

<script>
import Modal from './Modal.vue'
import Game from '../game.js'

export default {
  name: 'start',
  data () {
    return {
      anonymous: () => this.$store.dispatch('anonymous_token')
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
  padding: 0.25em;
}

.modal-body {
  text-align: center;
}
</style>

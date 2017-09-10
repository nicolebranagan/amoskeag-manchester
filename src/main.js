import Vue from 'vue'
import App from './components/App.vue'
import store from './store.js'

new Vue({
  store,
  el: '#app',
  components: { App }
})

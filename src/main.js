import Vue from 'vue'
import App from './components/App.vue'
import store from './store.js'
console.log(store);
new Vue({
  store,
  el: '#app',
  components: { App }
})

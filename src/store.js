import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// default state
const state = {
  title: "No room",
  desc: "Not loaded.",
  look: [],
  talk: [],
  get: [],
  exit: [],
  inventory: []
}

// mutations
const mutations = {
  UPDATE(state, data) {
    state.title = data.title ? data.title : "";
    state.desc = data.desc ? data.desc : "";
    function if_exists(input) {
      return input ? input : [];
    }
    state.look = if_exists(data.look);
    state.talk = if_exists(data.talk);
    state.get = if_exists(data.get);
    state.exit = if_exists(data.exit);

  }
}

// actions
const actions = 
{
  look_room({ commit }, e) {
    commit('UPDATE', {title: e.title})
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
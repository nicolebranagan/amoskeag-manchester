import Vue from 'vue'
import Vuex from 'vuex'
import Game from './game.js'

Vue.use(Vuex)

// default state
const state = {
  loaded: false,
  list: null,
  convo: null,

  token: "",
  room: {
    title: "",
    desc: "",
    look: [],
    talk: [],
    get: [],
    exit: [],
  },
  inventory: []
}

// mutations
const mutations = {
  UPDATE(state, data) {
    function if_exists(input) {
      return input ? input : [];
    }
    const room = {
      title: data.endgame ? "GAME OVER" : (data.title ? data.title : ""),
      desc: data.desc ? data.desc : "",
      look: if_exists(data.look),
      talk: if_exists(data.talk),
      get: if_exists(data.get),
      exit: if_exists(data.exit),
    }
    state.room = room;
  },

  SET_TOKEN(state, token) {
    state.token = token;
    state.loaded = true;
  },

  SET_LIST(state, list) {
    state.list = list;
  },

  SET_CONVO(state, convo) {
    state.convo = convo;
  },

  ENDGAME(state, desc) {
    state.room = {
      title: "GAME OVER",
      desc: desc,
      look: [],
      talk: [],
      get: [],
      exit: [],
    };
    state.convo = null;
    state.list = null;
  }
}

// actions
const actions = 
{
  anonymous_token({ commit, dispatch }) {
    Game.get_anonymous_token( token => {
      commit('SET_TOKEN', token);
      dispatch('look_room');
    })
  },

  look_room({ commit, state }) {
    Game.get(state, '/game/look', output => {
      commit('UPDATE', output)
    })
  },

  apply_list({ commit, state }, { type }) {
    const list = {
      type,
      items: state.room[type]
    }
    commit('SET_LIST', list);
    commit('SET_CONVO', null);
  },

  get_convo({ commit, state }, { type, id }) {
    Game.post(state, '/game/' + type, {id}, output => {
      if (output.endgame) {
        commit('ENDGAME', output.desc);
      } else {
        commit('SET_LIST', null);
        commit('SET_CONVO', output);
      }
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
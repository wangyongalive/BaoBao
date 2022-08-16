import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    card: {}
  },
  actions: {
    incrementCard({ commit }, type) {
      commit('increment', type)
    }
  },
  mutations: {
    increment(state, type) {
      if (!state.card[type]) {
        state.card[type] = 1
      } else {
        state.card[type]++
      }
    }
  }
})
export default store

import { getLines } from '../../api'

const state = {
  lines: []
}

const getters = {
  getLines (state) {
    return state.lines
  }
}

const mutations = {
  setLines (state, lines) {
    state.lines = lines
  }
}

const actions = {
  loadLines ({ commit }) {
    getLines()
      .then((response) => {
        commit('setLines', response.data)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

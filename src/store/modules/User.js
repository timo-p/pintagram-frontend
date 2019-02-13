const state = {
  user: {}
}

const getters = {
  getUser (state) {
    return state.user
  }
}

const mutations = {
  setUser (state, user) {
    state.user = user
  }
}

export default {
  state,
  getters,
  mutations
}

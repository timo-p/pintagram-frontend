const state = {
  errors: []
}

const getters = {
  getErrors () {
    return state.errors
  }
}

const mutations = {
  removeError (state, id) {
    state.errors = [].concat(state.errors).filter((e) => e.id !== id)
  },
  addError (state, message) {
    const ids = state.errors.map((e) => e.id)
    const id = ids.length ? Math.max(...ids) + 1 : 0
    state.errors = [{ id, message }].concat(state.errors)
  }
}

export default {
  state,
  getters,
  mutations
}

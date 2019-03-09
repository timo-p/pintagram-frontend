import { getUserByUsername } from '../../api'

const state = {
  users: []
}

const getters = {
  getUsers (state) {
    return state.users
  }
}

const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  addUsers (state, users) {
    const existing = state.users.map((u) => u.username)
    const newUsers = [].concat(users).filter((u) => !existing.includes(u.username))
    state.users = [].concat(state.users).concat(newUsers)
  }
}

const actions = {
  loadUserIfMissing ({ commit, state }, username) {
    if (!state.users.find((u) => u.username === username)) {
      getUserByUsername(username)
        .then((response) => {
          commit('addUsers', response.data)
        })
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

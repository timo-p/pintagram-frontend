import { getTopUsers, getUserByUsername } from '../../api/user'

const state = {
  users: []
}

const getters = {
  getUsers (state) {
    return state.users
  },
  getUserByUsername (state, username) {
    return state.users.find((u) => u.username === username)
  }
}

const mutations = {
  setUsers (state, users) {
    state.users = users
  },
  addUsers (state, users) {
    const newUsers = [].concat(state.users).concat(users)
    state.users = newUsers
  }
}

const actions = {
  loadUsers ({ commit }) {
    getTopUsers()
      .then((response) => {
        commit('setUsers', response.data)
      })
  },
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

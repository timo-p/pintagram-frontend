import { getTopUsers } from '../../api/user'

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
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

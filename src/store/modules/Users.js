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

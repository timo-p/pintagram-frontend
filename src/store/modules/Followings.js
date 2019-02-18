import { getFollowings, follow } from '../../api/user'

const state = {
  followings: []
}

const getters = {
  getFollowings (state) {
    return state.followings
  },
  getFollowingUsernames (state) {
    return state.followings.map((f) => f.following)
  }
}

const mutations = {
  setFollowings (state, followings) {
    state.followings = followings
  },
  addFollowing (state, following) {
    const exists = state.followings.find((f) => f.id === following.id)
    if (!exists) {
      state.followings.push(following)
    }
  }
}

const actions = {
  getFollowings ({ commit }, username) {
    getFollowings(username)
      .then((response) => {
        commit('setFollowings', response.data)
      })
  },
  follow ({ commit }, username, following) {
    follow({ follow: username })
      .then((response) => {
        commit('addFollowing', response.data)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

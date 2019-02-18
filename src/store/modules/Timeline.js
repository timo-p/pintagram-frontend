import { getTimeline } from '../../api/user'

const state = {
  timeline: []
}

const getters = {
  getTimeline (state) {
    return state.timeline
  }
}

const mutations = {
  setTimeline (state, timeline) {
    state.timeline = timeline
  }
}

const actions = {
  loadTimeline ({ commit }, username) {
    getTimeline(username)
      .then((response) => {
        commit('setTimeline', response.data)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

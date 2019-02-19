import { getTimeline } from '../../api/user'
import { compareDesc } from 'date-fns'

const sortTimeline = (timeline) => timeline.sort((a, b) => compareDesc(new Date(a.created_at), new Date(b.created_at)))

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
  },
  addPostToTimeline (state, post) {
    const timeline = state.timeline.concat(post)
    sortTimeline(timeline)
    state.timeline = timeline
  },
  deletePost (state, id) {
    state.timeline = state.timeline.filter((p) => p.id !== id)
  }
}

const actions = {
  loadTimeline ({ commit }, username) {
    getTimeline(username)
      .then((response) => {
        const timeline = response.data
        sortTimeline(timeline)
        commit('setTimeline', timeline)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

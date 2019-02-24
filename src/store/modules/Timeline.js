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
  addPostsToTimeline (state, posts) {
    posts = [].concat(posts)
    const existing = state.timeline.map((p) => p.id)
    const newPosts = posts.filter((p) => !existing.includes(p.id))
    const timeline = state.timeline.concat(newPosts)
    sortTimeline(timeline)
    state.timeline = timeline
  },
  deletePost (state, id) {
    state.timeline = state.timeline.filter((p) => p.id !== id)
  }
}

const actions = {
  loadTimeline ({ commit }) {
    getTimeline()
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

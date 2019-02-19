import { getPosts } from '../../api/user'

const state = {
  posts: []
}

const getters = {
  getPosts (state) {
    return state.posts
  }
}

const mutations = {
  setPosts (state, posts) {
    state.posts = posts
  }
}

const actions = {
  loadPosts ({ commit }, username) {
    getPosts(username)
      .then((response) => {
        commit('setPosts', response.data)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

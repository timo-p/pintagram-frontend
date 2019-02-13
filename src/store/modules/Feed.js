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
  },

  deletePost (state, id) {
    state.posts = state.posts.filter((p) => p.id !== id)
  }
}

export default {
  state,
  getters,
  mutations
}

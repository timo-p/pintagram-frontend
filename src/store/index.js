import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/User'
import feed from './modules/Feed'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    feed
  },
  strict: debug
})

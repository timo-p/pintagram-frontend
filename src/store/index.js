import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/User'
import feed from './modules/Feed'
import users from './modules/Users'
import followings from './modules/Followings'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    feed,
    users,
    followings
  },
  strict: debug
})

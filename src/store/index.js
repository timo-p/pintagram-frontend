import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/User'
import users from './modules/Users'
import followings from './modules/Followings'
import timeline from './modules/Timeline'
import lines from './modules/Lines'
import errors from './modules/Errors'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    user,
    users,
    followings,
    timeline,
    lines,
    errors
  },
  strict: debug
})

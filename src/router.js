import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from './views/FrontPage.vue'
import Register from './views/Register.vue'
import Feed from './views/Feed.vue'
import TopUsers from './views/TopUsers.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'frontPage',
      component: FrontPage
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/user/:username',
      name: 'user',
      component: Feed,
      props: true
    },
    {
      path: '/top-users',
      name: 'TopUsers',
      component: TopUsers
    }
  ]
})

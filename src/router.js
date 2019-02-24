import Vue from 'vue'
import Router from 'vue-router'
import FrontPage from './components/FrontPage.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import CreatePost from './components/CreatePost.vue'
import Feed from './components/Feed.vue'
import TopUsers from './components/TopUsers.vue'
import Timeline from './components/Timeline.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'frontPage',
      component: FrontPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/create-post',
      name: 'createPost',
      component: CreatePost
    },
    {
      path: '/feed/:username',
      name: 'feed',
      component: Feed,
      props: true
    },
    {
      path: '/top-users',
      name: 'TopUsers',
      component: TopUsers
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})

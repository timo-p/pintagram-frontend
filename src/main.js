import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import { getUser } from './api/user'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

getUser().then((response) => {
  if (response) {
    store.commit('setUser', response.data)
    store.dispatch('getFollowings', response.data.username)
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

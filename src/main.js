import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import VueSelect from 'vue-cool-select'
import { getUser } from './api'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueSelect, {
  theme: 'bootstrap' // or 'material-design'
})

getUser().then((response) => {
  if (response) {
    store.commit('setUser', response.data)
    store.dispatch('getFollowings', response.data.username)
    store.dispatch('loadLines')
  }
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

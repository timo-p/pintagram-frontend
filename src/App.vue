<template>
  <div id="app">
    <b-navbar :sticky="true" toggleable="sm" variant="light">
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/top-users">Top users</router-link>
          <router-link v-if="!user.username" class="nav-item nav-link" to="/register">Register</router-link>
          <b-nav-item-dropdown ref="ddown" right v-if="!user.username">
            <template slot="button-content"><em>Login</em></template>
            <Login :onLogin="closeDropdown"></Login>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right v-else>
            <template slot="button-content"><em>{{ user.first_name }} {{ user.last_name }}</em></template>
            <b-dropdown-item href="#" @click="logout()">Logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container">
      <div class="center">
        <router-view/>
      </div>
      <div class="row" v-if="false">
        <div class="col">
        </div>
        <div class="col center">
        </div>
        <div class="col">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Login from './components/Login'

export default {
  components: { Login },
  methods: {
    ...mapMutations(['setUser', 'setFollowings']),
    logout () {
      localStorage.removeItem('pintagram-jwt-token')
      this.setUser({})
      this.setFollowings([])
      this.$router.push('/')
    },
    closeDropdown () {
      this.$refs.ddown.hide(true)
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

body {
  background-color: #e6ecf0;
}

.center {
  background-color: #ffffff;
  padding: 10px;
  width: 500px;
  margin: 10px auto;
}

@media (max-width: 576px) {
  .center {
    width: 100%;
  }
}

#nav {
  padding: 20px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.25);
  background-color: #ffffff;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

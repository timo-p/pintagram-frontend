<template>
  <div id="app">
    <b-navbar toggleable="sm" variant="light">
      <b-navbar-toggle target="nav_collapse" />
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <router-link class="nav-item nav-link" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/about">About</router-link>
          <router-link class="nav-item nav-link" to="/login">Login</router-link>
          <router-link class="nav-item nav-link" to="/register">Register</router-link>
          <router-link class="nav-item nav-link" to="/create-post">Create post</router-link>
          <router-link class="nav-item nav-link" to="/top-users">Top users</router-link>
          <router-link class="nav-item nav-link" to="/timeline">Timeline</router-link>
          <router-link class="nav-item nav-link" to="/feed">Feed</router-link>
          <a class="nav-item nav-link" @click="logout()">Logout</a>
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
import { mapMutations } from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  methods: {
    ...mapMutations(['setUser']),
    logout () {
      localStorage.removeItem('pintagram-jwt-token')
      this.setUser({})
      this.$router.push('/')
    }
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

<template>
  <div>
    <b-form class="form-inline">
      <b-form-input v-model="username" placeholder="Username"></b-form-input>
      <b-form-input type="password" v-model="password" placeholder="Password"></b-form-input>
      <b-button v-bind:disabled="isDisabled" @click="login" type="submit" variant="primary">Login</b-button>
    </b-form>
    <div v-if="failed" class="alert alert-danger" role="alert">
      Login failed
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { login } from '../api'
export default {
  name: 'Login',
  props: ['onLogin'],
  data: () => ({
    username: '',
    password: '',
    failed: false,
    isLoginIn: false
  }),
  methods: {
    ...mapMutations(['setUser']),
    ...mapActions(['getFollowings', 'loadLines']),
    login () {
      this.isLoginIn = true
      login(this.username, this.password)
        .then((response) => {
          this.setUser(response.data)
          this.getFollowings(response.data.username)
          this.loadLines()
          this.failed = false
          this.onLogin()
        })
        .catch(() => {
          this.failed = true
        })
        .then(() => {
          this.isLoginIn = false
        })
    }
  },
  computed: {
    isDisabled () {
      return !!((this.isLoginIn || !this.username || !this.password))
    }
  }
}
</script>
<style scoped>
.form-inline {
  padding: 0 8px;
}

button,
input:not(:first-child) {
  margin-top: 5px;
}

.alert {
  margin: 8px;
}
</style>

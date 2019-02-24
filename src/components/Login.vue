<template>
  <div>
    <b-form class="form-inline">
        <b-form-input v-model="username" placeholder="Username">
        </b-form-input>

        <b-form-input type="password" v-model="password" placeholder="Password">

        </b-form-input>
        <b-button @click="login" type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { login } from '../api/user'
export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    ...mapMutations(['setUser']),
    ...mapActions(['getFollowings', 'loadLines']),
    login () {
      login(this.username, this.password)
        .then((response) => {
          this.setUser(response.data)
          this.getFollowings(response.data.username)
          this.loadLines()
        })
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
</style>

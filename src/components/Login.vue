<template>
  <div>
    <b-form>
      <b-form-group>
        <b-form-input v-model="username">

        </b-form-input>

        <b-form-input type="password" v-model="password">

        </b-form-input>
        <b-button @click="login" type="submit" variant="primary">Login</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { login } from '../api/user'
export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    ...mapMutations(['setUser']),
    login () {
      login(this.username, this.password)
        .then((response) => {
          this.setUser(response.data)
        })
    }
  }
}
</script>

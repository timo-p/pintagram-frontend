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
import { register } from '../api/user'
export default {
  name: 'Login',
  data: () => ({
    username: '',
    password: ''
  }),
  methods: {
    login () {
      // login(this.username, this.password)
      register()
    }
  }
}
</script>

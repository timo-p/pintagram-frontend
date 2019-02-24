<template>
  <div>
    <h1>Register</h1>
    <p>To register all you have to do is click the button below.</p>
    <p>We'll generate a username and password for you.</p>
    <b-button @click="register" v-if="!user.username" v-bind:disabled="isRegistering" variant="primary">Register!</b-button>
    <p v-if="this.password">
      <b-card>
        <table>
          <tbody>
            <tr>
              <td>Username</td>
              <td>{{ user.username }}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>{{ password }}</td>
            </tr>
            <tr>
              <td>First name</td>
              <td>{{ user.first_name }}</td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>{{ user.last_name }}</td>
            </tr>
          </tbody>
        </table>
      </b-card>
    </p>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { register } from '../api/user'
export default {
  name: 'Register',
  data: () => ({
    password: '',
    isRegistering: false
  }),
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapMutations(['setUser']),
    register () {
      this.isRegistering = true
      register()
        .then((response) => {
          this.setUser(response.data)
          this.password = response.data.password
        })
    }
  }
}
</script>

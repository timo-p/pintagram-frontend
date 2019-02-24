<template>
  <div>
    <h1>Register</h1>
    <p>To register all you have to do is click the button below.</p>
    <p>We'll generate a username and password for you.</p>
    <b-button @click="register" v-if="!user.username" v-bind:disabled="isRegistering" variant="primary">Register!</b-button>
    <div v-if="this.password">
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
      <p>You better remember your password if you want to login again, because there is no password recovery yet :)</p>
      <p>
        Go to your <router-link to="/">front page</router-link> to start posting. Or <router-link to="/top-users">find other users</router-link> to follow.
      </p>
    </div>
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
<style scoped>
table {
  width: 100%;
}
</style>

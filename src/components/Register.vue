<template>
  <div>
    <h1>Register</h1>
    <p>To register all you have to do is click the button below.</p>
    <p>We'll generate a username and password for you.</p>
    <b-button @click="register" variant="primary">Register!</b-button>
    <p>
      <table>
        <tbody>
          <tr>
            <td>Username</td>
            <td>{{ username }}</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>{{ password }}</td>
          </tr>
          <tr>
            <td>First name</td>
            <td>{{ firstName }}</td>
          </tr>
          <tr>
            <td>Last name</td>
            <td>{{ lastName }}</td>
          </tr>
        </tbody>
      </table>
    </p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { register } from '../api/user'
export default {
  name: 'Register',
  data: () => ({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  }),
  methods: {
    ...mapMutations(['setUser']),
    register () {
      register()
        .then((data) => {
          this.setUser({
            firstName: data.data.first_name,
            lastName: data.data.last_name,
            username: data.data.username
          })
          this.firstName = data.data.first_name
          this.lastName = data.data.last_name
          this.username = data.data.username
          this.password = data.data.password
          localStorage.setItem('pintagram-session-id', data.data.session_id)
        })
    }
  }
}
</script>

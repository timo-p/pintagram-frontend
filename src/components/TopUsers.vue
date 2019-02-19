<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'feed', params: { username: user.username }}">{{ user.username }}</router-link>
        <a v-if="canFollow(user.username)" @click="follow(user.username)">Follow</a>
        <a v-if="canUnfollow(user.username)" @click="unfollow(user.username)">Unfollow</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TopUsers',
  created () {
    this.loadUsers()
  },
  methods: {
    ...mapActions(['loadUsers', 'follow', 'unfollow']),
    canFollow (username) {
      return this.user.username !== username && !this.followingUsernames.includes(username)
    },
    canUnfollow (username) {
      return this.user.username !== username && this.followingUsernames.includes(username)
    }
  },
  computed: {
    ...mapGetters({
      users: 'getUsers',
      user: 'getUser',
      followingUsernames: 'getFollowingUsernames'
    })
  }
}
</script>

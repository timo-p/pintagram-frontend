<template>
  <div>
    <h1>Top users</h1>
    <b-card v-bind:title="name(user)" v-for="user in users" :key="user.id">
      <p class="card-text"><router-link :to="feedUrl(user)">{{ user.posts }} posts</router-link></p>
      <FollowButton :username="user.username"/>
    </b-card>
    <infinite-loading @infinite="loadMore"></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { getTopUsers } from '../api/user'
import FollowButton from './FollowButton'

export default {
  components: { InfiniteLoading, FollowButton },
  name: 'TopUsers',
  created () {
    this.setUsers([])
  },
  methods: {
    ...mapActions(['loadUsers', 'follow', 'unfollow']),
    ...mapMutations(['addUsers', 'setUsers']),
    canFollow (username) {
      return this.user.username && this.user.username !== username && !this.followingUsernames.includes(username)
    },
    canUnfollow (username) {
      return this.user.username && this.user.username !== username && this.followingUsernames.includes(username)
    },
    name: (user) => `${user.first_name} ${user.last_name}`,
    feedUrl: (user) => `/feed/${user.username}`,
    loadMore ($state) {
      const lastUsername = this.users.length ? this.users[this.users.length - 1].username : null
      getTopUsers(lastUsername)
        .then((response) => {
          this.addUsers(response.data)
          if (response.data.length) {
            $state.loaded()
          } else {
            $state.complete()
          }
        })
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
<style scoped>
.card:not(:last-child) {
  margin-top: 10px;
}
</style>

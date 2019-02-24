<template>
  <div>
    <h1>Top users</h1>
    <b-card v-bind:title="name(user)" v-for="user in users" :key="user.id">
      <p class="card-text">{{ user.posts }} posts</p>
      <b-button v-if="canFollow(user.username)" @click="follow(user.username)" variant="primary">Follow</b-button>
      <b-button v-if="canUnfollow(user.username)" @click="unfollow(user.username)" variant="primary">Unfollow</b-button>
    </b-card>
    <infinite-loading @infinite="loadMore"></infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { getTopUsers } from '../api/user'

export default {
  components: { InfiniteLoading },
  name: 'TopUsers',
  destroyed () {
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

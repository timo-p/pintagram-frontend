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
import { mapGetters, mapMutations } from 'vuex'
import { getTopUsers } from '../api'
import FollowButton from '../components/FollowButton'

export default {
  components: { InfiniteLoading, FollowButton },
  name: 'TopUsers',
  created () {
    this.setUsers([])
  },
  methods: {
    ...mapMutations(['addUsers', 'setUsers']),
    name: (user) => `${user.first_name} ${user.last_name}`,
    feedUrl: (user) => `/user/${user.username}`,
    loadMore ($state) {
      const lastRanking = this.users.length ? this.users[this.users.length - 1].ranking : null
      getTopUsers(lastRanking)
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

<template>
  <div>
    <b-button v-if="canFollow()" @click="follow(username)" variant="primary">Follow</b-button>
    <b-button v-if="canUnfollow()" @click="unfollow(username)" variant="primary">Unfollow</b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['username'],
  name: 'FollowingButton',
  methods: {
    ...mapActions(['follow', 'unfollow']),
    canFollow () {
      return this.user.username && this.user.username !== this.username && !this.followingUsernames.includes(this.username)
    },
    canUnfollow () {
      return this.user.username && this.user.username !== this.username && this.followingUsernames.includes(this.username)
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      followingUsernames: 'getFollowingUsernames'
    })
  }
}
</script>

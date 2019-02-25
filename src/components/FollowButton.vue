<template>
  <div>
    <b-button v-bind:disabled="isRequesting" v-if="canFollow" @click="follow()" variant="primary">Follow</b-button>
    <b-button v-bind:disabled="isRequesting" v-if="canUnfollow" @click="unfollow()" variant="primary">Unfollow</b-button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { follow, unfollow } from '../api'

export default {
  props: ['username'],
  name: 'FollowingButton',
  data: () => ({
    isRequesting: false
  }),
  methods: {
    ...mapMutations(['addFollowing', 'removeFollowing']),
    follow () {
      this.isRequesting = true
      follow({ follow: this.username })
        .then((response) => {
          this.addFollowing(response.data)
          this.isRequesting = false
        })
    },
    unfollow () {
      this.isRequesting = true
      unfollow({ follow: this.username })
        .then((response) => {
          this.removeFollowing(this.username)
          this.isRequesting = false
        })
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      followingUsernames: 'getFollowingUsernames'
    }),
    canFollow () {
      return this.user.username && this.user.username !== this.username && !this.followingUsernames.includes(this.username)
    },
    canUnfollow () {
      return this.user.username && this.user.username !== this.username && this.followingUsernames.includes(this.username)
    }
  }
}
</script>

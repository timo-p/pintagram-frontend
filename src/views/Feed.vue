<template>
<div>
  <h1>{{ user.first_name }} {{user.last_name}}</h1>
  <p><FollowButton :username="user.username"/></p>
  <transition-group>
    <Post v-for="post in posts" :key="post.id" v-bind:post="post"></Post>
  </transition-group>
  <infinite-loading @infinite="loadMore">
    <div slot="no-results"><em>No posts</em></div>
  </infinite-loading>
</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import Post from '../components/Post'
import FollowButton from '../components/FollowButton'
import { getPosts } from '../api'

export default {
  name: 'Feed',
  props: ['username'],
  components: { Post, InfiniteLoading, FollowButton },
  data: () => ({
    isLoading: false
  }),
  destroyed () {
    this.setTimeline([])
  },
  created () {
    this.loadUserIfMissing(this.username)
  },
  methods: {
    ...mapActions(['loadUserIfMissing']),
    ...mapMutations(['addPostsToTimeline', 'setTimeline']),
    loadMore ($state) {
      const lastPostId = this.posts.length ? this.posts[this.posts.length - 1].id : null
      getPosts(this.username, lastPostId)
        .then((response) => {
          this.addPostsToTimeline(response.data)
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
      posts: 'getTimeline',
      users: 'getUsers'
    }),
    user () {
      return this.users.find((u) => u.username === this.username) || {}
    }
  }
}
</script>

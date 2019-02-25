<template>
<div>
  <CreatePost></CreatePost>

  <div>
    <transition-group>
      <Post v-for="post in posts" :key="post.id" v-bind:post="post"></Post>
    </transition-group>
    <infinite-loading @infinite="loadMore">
      <div slot="no-results"></div>
    </infinite-loading>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import Post from './Post'
import CreatePost from './CreatePost'
import { getTimeline } from '../api'

export default {
  name: 'Timeline',
  components: { Post, CreatePost, InfiniteLoading },
  data: () => ({
    isLoading: false
  }),
  destroyed () {
    this.setTimeline([])
  },
  methods: {
    ...mapActions(['loadTimeline', 'loadMoreOfTimeline']),
    ...mapMutations(['addPostsToTimeline', 'setTimeline']),
    loadMore ($state) {
      const lastPostId = this.posts.length ? this.posts[this.posts.length - 1].id : null
      getTimeline(lastPostId)
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
      posts: 'getTimeline'
    })
  }
}
</script>

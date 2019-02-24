<template>
<div>
  <CreatePost></CreatePost>

  <div>
    <transition-group>
      <Post v-for="post in posts" :key="post.id" v-bind:post="post"></Post>
    </transition-group>
    <infinite-loading @infinite="loadMore"></infinite-loading>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import InfiniteLoading from 'vue-infinite-loading'
import Post from './Post'
import CreatePost from './CreatePost'
import { getTimeline } from '../api/user'

export default {
  name: 'Timeline',
  components: { Post, CreatePost, InfiniteLoading },
  data: () => ({
    isLoading: false
  }),
  created () {
    // this.loadTimeline()
  },
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
            setTimeout(() => $state.loaded(), 1000)
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

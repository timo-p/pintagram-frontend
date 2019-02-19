<template>
  <div>
    <CreatePost></CreatePost>
    <transition-group>
      <Post v-for="post in posts" :key="post.id" v-bind:post="post"></Post>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Post from './Post'
import CreatePost from './CreatePost'

export default {
  name: 'Timeline',
  components: { Post, CreatePost },
  created () {
    this.loadTimeline()
  },
  methods: {
    ...mapActions(['loadTimeline'])
  },
  computed: {
    ...mapGetters({
      posts: 'getTimeline'
    })
  }
}
</script>

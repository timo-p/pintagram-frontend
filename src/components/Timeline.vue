<template>
  <div>
    <Post v-for="post in posts" :key="post.id" v-bind:post="post"></Post>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Post from './Post'

export default {
  name: 'Timeline',
  components: { Post },
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

<template>
  <div>
    <Post v-for="post in posts" :key="post.id" v-bind:post="post"></Post>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Post from './Post'
export default {
  name: 'Feed',
  props: ['username'],
  components: { Post },
  created () {
    this.loadPosts(this.username)
  },
  methods: {
    ...mapActions(['loadPosts'])
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    })
  }
}
</script>

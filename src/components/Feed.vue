<template>
  <div>
    <Post v-for="post in posts" :key="post.id" v-bind:post="post"></Post>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { getPosts } from '../api/user'
import Post from './Post'
export default {
  name: 'Feed',
  components: { Post },
  data: () => ({
    message: ''
  }),
  created () {
    getPosts(this.user.username)
      .then((response) => this.setPosts(response.data))
  },
  methods: {
    ...mapMutations(['setPosts'])
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts',
      user: 'getUser'
    })
  }
}
</script>

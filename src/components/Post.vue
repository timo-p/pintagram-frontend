<template>
  <div>
    <span>{{ post.message }}</span>
    <a v-if="isOwnPost" @click="deleteThisPost()">Delete</a>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { deletePost } from '../api/user'
export default {
  name: 'Post',
  props: ['post'],
  methods: {
    deleteThisPost () {
      deletePost(this.post.id)
        .then(() => this.deletePost(this.post.id))
    },
    ...mapMutations(['deletePost'])
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
    isOwnPost () {
      return this.post.username === this.user.username
    }
  }
}
</script>

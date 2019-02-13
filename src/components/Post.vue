<template>
  <div>
    <span>{{ post.message }}</span>
    <a @click="deleteThisPost()">Delete</a>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
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
  }
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <span class="font-weight-bolder">{{ post.username }}</span>
      &nbsp;
      <span class="font-weight-light">{{ time }} ago</span>
    </div>
    <div class="card-body">
      <p class="card-text">{{ post.message }}</p>
      <button class="btn btn-danger" v-if="isOwnPost" @click="deleteThisPost()">Delete</button>
    </div>
  </div>
</template>

<script>
import { distanceInWords } from 'date-fns'
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
    },
    time () {
      return distanceInWords(new Date(this.post.created_at), new Date())
    }
  }
}
</script>
<style scoped>
  .card {
    transition: opacity .5s;
  }

  .v-leave-active {
    opacity: 0;
  }

  .v-enter, .v-leate-to {
    opacity: 0;
  }
</style>

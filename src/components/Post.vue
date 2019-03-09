<template>
  <div class="card">
    <div class="card-header">
      <div>
        <span class="font-weight-bolder">{{ post.first_name }} {{ post.last_name }}</span>
        &nbsp;
        <span class="font-weight-light">{{ time }} ago</span>
      </div>
      <b-button variant="danger" size="sm" v-if="isOwnPost" @click="deleteThisPost()">Delete</b-button>
    </div>
    <div class="card-body">
      <p class="card-text">{{ post.message }}</p>
      <LikeButton :post="post"></LikeButton>
    </div>
  </div>
</template>

<script>
import { distanceInWords } from 'date-fns'
import { mapMutations, mapGetters } from 'vuex'
import { deletePost } from '../api'
import LikeButton from './LikeButton'
export default {
  name: 'Post',
  props: ['post'],
  components: { LikeButton },
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
    margin-top: 10px;
  }

  .card-header div {
    margin-top: 4px;
    float: left;
  }

  .card-header button {
    float: right;
  }

  .v-leave-active {
    opacity: 0;
  }

  .v-enter, .v-leate-to {
    opacity: 0;
  }
</style>

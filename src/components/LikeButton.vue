<template>
  <div>
    <a class="like" title="Likes" v-if="canLike" @click.prevent="like" href="#">
      <font-awesome-icon class="regular" :icon="['far', 'heart']" />
      <font-awesome-icon class="solid" :icon="['fas', 'heart']" />
    </a>
    <a title="Likes" v-if="canUnlike" @click.prevent="unlike" href="#"><font-awesome-icon :icon="['fas', 'heart']" /></a>
    <font-awesome-icon title="Likes" v-if="isOwnPostOrNotLoggedIn" :icon="['far', 'heart']" />
    {{ post.likes }}
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { like, unlike } from '../api'

export default {
  props: ['post'],
  name: 'LikeButton',
  data: () => ({
    isRequesting: false
  }),
  methods: {
    ...mapMutations(['updatePost']),
    like () {
      if (this.isRequesting) {
        return
      }
      this.isRequesting = true
      like(this.post.id)
        .then((response) => {
          this.updatePost(response.data)
          this.isRequesting = false
        })
    },
    unlike () {
      if (this.isRequesting) {
        return
      }
      this.isRequesting = true
      unlike(this.post.id)
        .then((response) => {
          this.updatePost(response.data)
          this.isRequesting = false
        })
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
    canLike () {
      return this.user.username && this.user.username !== this.post.username && !this.post.is_liked
    },
    canUnlike () {
      return this.user.username && this.user.username !== this.post.username && this.post.is_liked
    },
    isOwnPostOrNotLoggedIn () {
      return !this.user.username || this.post.username === this.user.username
    }
  }
}
</script>
<style scoped>
.fa-heart {
  color: #007bff;
}
.like .solid {
  display: none;
}
.like:hover .solid {
  display: inline;
}
.like:hover .regular {
  display: none;
}
</style>

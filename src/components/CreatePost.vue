<template>
  <div>
    <b-form>
      <b-form-group>
        <div class="input-group mb-3">
          <cool-select
            v-model="message"
            :items="lines"
            :loading="isPosting"
          />
          <div class="input-group-append">
            <b-button v-bind:disabled="!canPost" @click="post"  type="submit" size="sm" variant="primary">Post</b-button>
          </div>
        </div>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { CoolSelect } from 'vue-cool-select'
import { mapGetters, mapMutations } from 'vuex'
import { createPost } from '../api/user'
export default {
  name: 'CreatePost',
  components: {
    CoolSelect
  },
  data: () => ({
    message: '',
    isPosting: false
  }),
  methods: {
    ...mapMutations(['addPostsToTimeline']),
    post () {
      this.isPosting = true
      createPost({ message: this.message })
        .then((response) => {
          this.isPosting = false
          this.message = ''
          this.addPostsToTimeline(response.data)
        })
    }
  },
  computed: {
    ...mapGetters({
      lines: 'getLines'
    }),
    canPost () {
      return this.lines.includes(this.message) && !this.isPosting
    }
  }
}
</script>

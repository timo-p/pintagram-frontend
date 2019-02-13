<template>
  <div>
    <b-form>
      <b-form-group>
        <b-form-input v-model="message">
        </b-form-input>

        <b-button @click="post" type="submit" variant="primary">Post</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { createPost } from '../api/user'
export default {
  name: 'CreatePost',
  data: () => ({
    message: ''
  }),
  methods: {
    post () {
      createPost({ message: this.message })
    }
  }
}
</script>

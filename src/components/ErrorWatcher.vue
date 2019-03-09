<template>
  <div>{{errors.length}}</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ErrorWatcher',
  watch: {
    errors (news, olds) {
      if (news.length) {
        this.removeError(news[0].id)
        this.$toasted.show('Request failed', {
          theme: 'bubble',
          duration: 5000
        })
      }
    }
  },
  methods: {
    ...mapMutations(['removeError'])
  },
  computed: {
    ...mapGetters({
      errors: 'getErrors'
    })
  }
}
</script>

<style scoped>
div {
  display: none;
}
</style>

<template>
  <div>
    <Timeline v-if="user.username" />
    <Home v-else />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Timeline from '../components/Timeline'
import Home from './Home'

export default {
  components: { Timeline, Home },
  destroyed () {
    this.setTimeline([])
  },
  beforeRouteLeave (to, from, next) {
    this.setTimeline([])
    next()
  },
  methods: {
    ...mapMutations(['setTimeline'])
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>

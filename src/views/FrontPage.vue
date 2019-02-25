<template>
  <div>
    <Timeline v-if="user.username" />
    <Home v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Timeline from '../components/Timeline'
import Home from './Home'

export default {
  components: { Timeline, Home },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>

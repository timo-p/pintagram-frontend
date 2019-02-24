<template>
  <div>
    <Timeline v-if="user.username" />
    <Home v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Timeline from './Timeline'
import Home from '../views/Home'

export default {
  components: { Timeline, Home },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>

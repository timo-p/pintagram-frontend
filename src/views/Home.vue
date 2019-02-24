<template>
  <div class="home">
    <img alt="Harold Pinter" src="../assets/pinter.jpg">
    <h1>Welcome to Pintagram beta</h1>
    <p>The only social media that only lets you post using quotes from Harold Pinter poems!</p>
    <p><router-link to="/register">Register</router-link> to get started.</p>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>

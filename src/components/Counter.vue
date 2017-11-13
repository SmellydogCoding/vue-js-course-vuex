<template lang="pug">
  div
    button.btn.btn-primary(@click="increment") Increment
    button.btn.btn-primary(@click="decrement") Decrement
</template>

<script>
  export default {
    methods: {
      increment() {
        this.$store.state.counter ++;
      },
      decrement() {
        this.$store.state.counter --;
      }
    }
  }
</script>

<style scoped>
  button {
    margin: 1.0rem;
  }
</style>
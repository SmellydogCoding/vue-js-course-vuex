<template lang="pug">
  div
    button.btn.btn-primary(@click="increment(50)") Increment // you can variables as an object ({amount: 50})
    button.btn.btn-primary(@click="decrement") Decrement
</template>

<script>
  // import { mapMutations } from 'vuex';  // mutations have to be syncronous
  import { mapActions } from 'vuex';
  export default {
    methods: {
      ...mapActions(['increment', 'decrement'])
    }
  }
</script>

<style scoped>
  button {
    margin: 1.0rem;
  }
</style>
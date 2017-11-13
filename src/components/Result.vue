<template lang="pug">
  div
    p Counter is: {{ counter }}
</template>

<script>
  export default {
    computed: {
      counter() {
        return this.$store.state.counter;
      }
    }
  }
</script>
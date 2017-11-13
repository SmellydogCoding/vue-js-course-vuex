<template lang="pug">
  div
    p Double Counter is: {{ double }}
    p Nuber of Clicks: {{ clicks }}
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters({double: 'doubleCounter', clicks: 'stringCounter'})
    }
  }
</script>
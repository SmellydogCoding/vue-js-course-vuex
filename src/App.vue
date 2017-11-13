<template lang="pug">
  div.container
    div.row
      div.col-xs-12.col-sm-8.col-sm-offset-2.col-md-6.col-md-offset-3
        h1 Vuex
        app-result
        app-double-result
        hr
        app-counter
</template>

<script>
  import Counter from './components/Counter.vue';
  import Result from './components/Result.vue';
  import DoubleResult from './components/DoubleResult.vue';

  export default {
    components: {
      appCounter: Counter,
      appResult: Result,
      appDoubleResult: DoubleResult
    }
  }
</script>


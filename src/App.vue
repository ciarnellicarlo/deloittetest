<template>
  <div id="app">
    <navbar />
    <div class="content">
      <slider />
      <div class="blog">
        blog part 
      </div>
    </div>
  </div>
</template>

<script>

import navbar from './components/navbar.vue';
import slider from './components/slider.vue';

export default {
  name: 'DeloitteTask',
  components: {
    navbar,
    slider
  }
}
</script>

<style lang="scss">

</style>

<template>
  <div id="app">
    <div class="papi row no-gutters">
      <navbar class="navbar col-md-2 col-sm-12"/>
      <div class="blogslider content col-md-10 col-sm-12">
        <slider class="slider" />
        <blog class="blog" />
      </div>
    </div>
  </div>
</template>

<script>

import navbar from './components/navbar.vue';
import slider from './components/slider.vue';
import blog from './components/blog.vue';

export default {
  name: 'DeloitteTask',
  components: {
    navbar,
    slider,
    blog
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}

#app {
  height: 100%;
}

.papi {
  height: 100%;
}
</style>

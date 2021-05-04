<template>
  <div id="app">
    <div class="row no-gutters">
      <navbar class="col-lg-2 col-md-12"/>
      <div class="blogslider content col-lg-10 col-md-12">
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

.no-gutters {
  height: 100%;
}
</style>

<template>
  <div id="app">
    <div class="row no-gutters">
      <navbar class="col-lg-2 col-md-12"/>
      <div class="blogslider content col-lg-10 col-md-12">
        <slider class="slider" />
        <blog class="blog" />
      </div>
      <ftr class="col-lg-2 col-md-12"/>
    </div>
  </div>
</template>

<script>

import navbar from './components/navbar.vue';
import slider from './components/slider.vue';
import blog from './components/blog.vue';
import ftr from './components/ftr.vue';

export default {
  name: 'DeloitteTask',
  components: {
    navbar,
    slider,
    blog,
    ftr
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

html, body {
  height: 100%;
  font-family: 'Poppins', sans-serif;
}

#app {
  height: 100%;
}

.no-gutters {
  height: 100%;
}

.blogslider {
  overflow-y: scroll;
}

@media (max-width: 991.98px) {
        .blogslider {
            overflow-y: initial;
        }
    }
</style>

<template>
  <div id="app">
    <div class="row no-gutters">
      <navbar class="col-md-2 col-sm-12"/>
      <div class="content col-md-10 col-sm-12">
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
</style>

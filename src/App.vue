<template>
  <div id="app">
    <div class="row no-gutters">
      <navbar class="col-md-2 col-sm-12"/>
      <div class="content col-md-10 col-sm-12">
        <slider class="slider" />
        <div class="blog">
          blog part
        </div>
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

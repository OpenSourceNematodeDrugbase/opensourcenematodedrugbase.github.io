<script setup>
import BlogSelectComponent from '../components/BlogSelectComponent.vue';

export default {
  components: {
    BlogSelectComponent
  }
};
</script>

<template>
  <div class="intro-banner">
    <h1>ONDB Blog Updates</h1>
    <p class="intro-text">Learn more about the current progress and plans for the Open Source Nematode Project!</p>
  </div>

  <div>
    <BlogSelectComponent/>
  </div>

</template>

<style scoped>

</style>
<template>
  <div class="intro-banner">
    <h1>ONDB Blog Updates</h1>
    <p class="intro-text">Learn more about the current progress and plans for the Open-source Nematode Drug Base Project!</p>
  </div>

  <div>
    <BlogSelectComponent/>
  </div>
</template>

<script>

import BlogSelectComponent from "@/components/BlogSelectComponent.vue";

export default {
  components: {
    BlogSelectComponent
  }
};

</script>

<template>
  <div class="intro-banner">
    <h1>The Nematode Drug Base</h1>
    <p class="intro-text">A comprehensive resource for researchers, healthcare professionals, and policymakers focused on understanding the critical role that nematodes play in neglected diseases.</p>
  </div>

  <SearchComponent/>

</template>

<script>

import SearchComponent from '@/components/SearchComponent.vue';

export default {
  components: {
    SearchComponent
  }
};

</script>
  
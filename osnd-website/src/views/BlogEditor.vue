<template>
  <div class="intro-banner">
    <h1>Blog Editor</h1>
    <p class="intro-text">Welcome, admin blogs here.</p>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  methods: {
    navigateToError() {
      this.$router.push('/error');
    },
  },
  created() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        this.navigateToError();
      }
    });
  },
};
</script>
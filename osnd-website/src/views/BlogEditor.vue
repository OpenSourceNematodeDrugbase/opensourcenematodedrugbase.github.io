<template>
  <div class="intro-banner">
    <h1>Blog Editor</h1>
  </div>

  <BlogPropertiesComponent/>

</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import BlogPropertiesComponent from '../BlogEditor/BlogPropertiesComponent.vue';
import BlogBlockComponent from '../BlogEditor/BlockTextComponent.vue';

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
  components: {
    BlogPropertiesComponent,
    BlogBlockComponent
  }
};
</script>
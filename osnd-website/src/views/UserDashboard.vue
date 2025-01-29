<template>
  <div class="home">
    <h1>This is the user dashboard page</h1>
    <p v-if="userEmail">Welcome, {{ userEmail }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default {
  name: 'UserDashboard',
  setup() {
    const userEmail = ref(null);
    const auth = getAuth();

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          userEmail.value = user.email;
        } else {
          userEmail.value = null;
        }
      });
    });

    return {
      userEmail,
    };
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
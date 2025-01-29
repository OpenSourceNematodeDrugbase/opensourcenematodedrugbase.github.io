<template>

<div class="intro-banner">
    <h1>User Dashboard</h1>
    <p class="intro-text" v-if="username">Welcome, {{ username }}</p>
</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default {
  name: 'UserDashboard',
  setup() {
    const username = ref(null);
    const auth = getAuth();
    const db = getFirestore();

    onMounted(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userDoc = await getDoc(doc(db, 'user-collection', user.uid));
          if (userDoc.exists()) {
            username.value = userDoc.data().username;
          } else {
            username.value = 'Unknown User';
          }
        } else {
          username.value = null;
        }
      });
    });

    return {
      username,
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
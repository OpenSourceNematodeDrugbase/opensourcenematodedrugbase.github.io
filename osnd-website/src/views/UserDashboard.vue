<template>
  <div class="intro-banner">
    <h1>User Dashboard</h1>
    <p class="intro-text" v-if="username">Welcome, {{ username }}</p>
  </div>

  <section class="user-dashboard">
    <section class="user-details-container">
      <div class="admin-text" v-if="canEditBlog">Account Type: Admin</div>
      <div class="admin-text" v-if="!canEditBlog">Account Type: Contributor</div>
      <div class="admin-text">Account Created: {{ formattedCreatedAt }}</div>
    </section>
    <button @click="navigateToBlogEditor" v-if="canEditBlog" class="admin-button">Edit Blogs</button>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, Timestamp } from 'firebase/firestore';

export default {

  methods: {
    navigateToBlogEditor() {
      this.$router.push('/blog-editor');
    },
  },

  name: 'UserDashboard',
  setup() {
    const username = ref(null);
    const canEditBlog = ref(false);
    const createdAt = ref(null);
    const formattedCreatedAt = ref(null);
    const auth = getAuth();
    const db = getFirestore();

    onMounted(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userDoc = await getDoc(doc(db, 'user-collection', user.uid));
          if (userDoc.exists()) {
            username.value = userDoc.data().username;
            canEditBlog.value = userDoc.data().canEditBlog;
            createdAt.value = userDoc.data().createdAt;

            // Convert Firestore Timestamp to JavaScript Date and format it
            if (createdAt.value instanceof Timestamp) {
              const date = createdAt.value.toDate();
              formattedCreatedAt.value = date.toLocaleDateString();
            } else {
              formattedCreatedAt.value = createdAt.value;
            }
          } else {
            username.value = 'Unknown User';
            canEditBlog.value = false;
            formattedCreatedAt.value = '00/00/00';
          }
        } else {
          username.value = null;
          canEditBlog.value = null;
          formattedCreatedAt.value = null;
        }
      });

    });

    return {
      username,
      canEditBlog,
      formattedCreatedAt,
    };
  },
};
</script>

<style>
.user-details-container {
  font-size: 24px;
  margin-top: 20px;
}

.admin-text {
  margin-top: 2px;
}

.user-dashboard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.admin-button {
  background-color: #007bff;
  color: white;
  border: none;
  margin-top: 50px;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  max-width: 250px;
}
</style>
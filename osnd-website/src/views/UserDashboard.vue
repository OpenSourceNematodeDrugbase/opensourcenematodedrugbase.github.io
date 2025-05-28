<template>
  <div class="user-dashboard-page">
    <div class="intro-banner">
      <h1>User Dashboard</h1>
      <p class="intro-text" v-if="username">Welcome, {{ username }}</p>
    </div>

    <section class="user-dashboard">
      <section class="user-details-container">
        <div class="admin-text">Account Created: {{ formattedCreatedAt }}</div>
      </section>

      <div class="button-container">
        <h2>Database Options</h2>
        <button class="admin-button" @click="navigateToDrugTargetForm">Add Drug Target Entry</button>
        <button class="admin-button" @click="navigateToLiteratureForm">Add Literature Entry</button>
        <button class="admin-button" @click="navigateToProteinEnzymeForm">Add Protein/Enzyme Entry</button>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, Timestamp } from 'firebase/firestore';

export default {
  methods: {
    navigateToBlogEditor() {
      this.$router.push('/blog-select');
    },
    navigateToDrugTargetForm() {
      this.$router.push('/drug-target-form');
    },
    navigateToLiteratureForm() {
      this.$router.push('/literature-form');
    },
    navigateToProteinEnzymeForm() {
      this.$router.push('/protein-enzyme-form');
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

<style scoped>
.user-dashboard-page {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
}

.intro-banner {
  background-color: #f0f8ff;
  padding: 30px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.intro-banner h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 10px;
}

.intro-banner p.intro-text {
  font-size: 1.2em;
  color: #666;
}

.user-dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px; /* Space between user details and buttons */
}

.user-details-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.admin-text {
  font-size: 1.1em;
  color: #444;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.button-container h2 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}

.admin-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  font-size: 1em;
}

.admin-button:hover {
  background-color: #0056b3;
}
</style>
<template>
  <div class="intro-banner">
    <h1>The Nematode Drug Base</h1>
    <p class="intro-text">A comprehensive resource for researchers, healthcare professionals, and policymakers focused on understanding the critical role that nematodes play in neglected diseases.</p>
  </div>

  <SearchComponent/>

  <div class="database-home-container">
    <DatabaseEntry v-for="entry in entries" :key="entry.id" :entry="entry" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Firestore imports
import SearchComponent from '@/components/SearchComponent.vue';
import DatabaseEntry from '@/components/DatabaseEntry.vue';

export default {
  components: {
    SearchComponent,
    DatabaseEntry,
  },
  setup() {
    const db = getFirestore(); // Initialize Firestore
    const entries = ref([]); // Reactive variable to store Firestore entries

    // Fetch data from Firestore
    const fetchEntries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'test-collection')); // Replace 'entries' with your Firestore collection name
        entries.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error fetching Firestore data:', error);
      }
    };

    onMounted(() => {
      fetchEntries(); // Fetch data when the component mounts
    });

    return {
      entries,
    };
  },
};
</script>

<style scoped>
.database-home-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;

  max-width: fit-content;
}
</style>
<template>
  <div class="intro-banner">
    <h1>The Nematode Drugbase</h1>
    <p class="intro-text">
      A comprehensive resource for researchers, healthcare professionals, and policymakers focused on understanding the critical role that nematodes play in neglected diseases.
    </p>
  </div>

  <SearchComponent @text-changed="updatedValue" @filter-changed="updatedFilter" />

  <LiteratureEntry v-if="filterSearch === 'documentCollection'" :entries="entries" />
  <ProteinEntry v-if="filterSearch === 'proteinEnzymes'" :entries="entries" />
  <DrugTargetEntry v-if="filterSearch === 'drugTargets'" :entries="entries" />
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';
import { getDatabase, ref as dbRef, onValue, set, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database'; // Import Realtime Database functions
import SearchComponent from '@/components/SearchComponent.vue';
import LiteratureEntry from '@/components/DataEntryComponents/LiteratureEntry.vue';
import ProteinEntry from "@/components/DataEntryComponents/ProteinEntry.vue";
import DrugTargetEntry from "@/components/DataEntryComponents/DrugTargetEntry.vue"; // New component

export default {
  components: {
    DrugTargetEntry,
    ProteinEntry,
    SearchComponent,
    LiteratureEntry, // Register component
  },
  data() {
    return {
      searchQuery: '',
      filterSearch: 'documentCollection',
    };
  },
  methods: {
    updatedValue(event) {
      this.searchQuery = event.toLowerCase();
    },
    updatedFilter(event) {
      const filterMap = {
        'Relevant Literature': 'documentCollection',
        'Proteins & Enzymes': 'proteinEnzymes',
        'Drug Targets': 'drugTargets',
      };
      this.filterSearch = filterMap[event] || 'documentCollection';
    },
  },
  setup() {
    const database = getDatabase(); // Initialize Realtime Database
    const allEntries = ref([]);
    const searchQuery = ref('');
    const filterSearch = ref('documentCollection');
    const realtimeData = ref(null);

    const fetchEntries = () => {
      if (!filterSearch.value) return;
      try {
        allEntries.value = []; // Clear the array before fetching new data

        const entriesRef = dbRef(database, filterSearch.value);

        // Listen for new entries
        onChildAdded(entriesRef, (snapshot) => {
          allEntries.value.push({ id: snapshot.key, ...snapshot.val() });
        });

        // Listen for changed entries
        onChildChanged(entriesRef, (snapshot) => {
          const index = allEntries.value.findIndex(entry => entry.id === snapshot.key);
          if (index !== -1) {
            allEntries.value[index] = { id: snapshot.key, ...snapshot.val() };
          }
        });

        // Listen for removed entries
        onChildRemoved(entriesRef, (snapshot) => {
          allEntries.value = allEntries.value.filter(entry => entry.id !== snapshot.key);
        });

      } catch (error) {
        console.error('Error fetching Realtime Database data:', error);
      }
    };

    watch(filterSearch, fetchEntries);
    onMounted(fetchEntries);

    const filteredEntries = computed(() =>
      allEntries.value.filter((entry) => {
        const queryLower = searchQuery.value.toLowerCase();
        return (
          !searchQuery.value ||
          entry.documentTitle?.toLowerCase().includes(queryLower) ||
          entry.abstract?.toLowerCase().includes(queryLower) ||
          (entry.keywords && entry.keywords.some((keyword) => keyword.toLowerCase().includes(queryLower))) ||
          (entry.authors && entry.authors.some((author) => author.toLowerCase().includes(queryLower)))
        );
      })
    );

    return {
      entries: filteredEntries,
      searchQuery,
      filterSearch,
      realtimeData,
      db: database, // Pass the database instance to methods
    };
  },
};
</script>

<style scoped>
.database-home-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Center the entries in the container */
  max-width: 100%; /* Ensure it takes up full width */
}

.intro-banner {
  text-align: center;
  margin-bottom: 20px;
}

.debug-section {
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  text-align: left;
}
</style>
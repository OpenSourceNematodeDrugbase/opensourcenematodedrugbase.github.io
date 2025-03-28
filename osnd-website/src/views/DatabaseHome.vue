<template>
  <div class="intro-banner">
    <h1>The Nematode Drugbase</h1>
    <p class="intro-text">
      A comprehensive resource for researchers, healthcare professionals, and policymakers focused on understanding the critical role that nematodes play in neglected diseases.
    </p>
  </div>

  <SearchComponent @text-changed="updatedValue" @filter-changed="updatedFilter" />

  <!-- Use EntryDisplay component -->
  <LiteratureEntry v-if="filterSearch === 'document-collection'" :entries="entries" />
  <ProteinEntry v-if="filterSearch === 'proteins-enzymes'" :entries="entries" />
  <DrugTargetEntry v-if="filterSearch === 'drug-targets'" :entries="entries" />
</template>

<script>
import { ref, onMounted, computed, watch } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
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
      filterSearch: 'document-collection',
    };
  },
  methods: {
    updatedValue(event) {
      this.searchQuery = event.toLowerCase();
    },
    updatedFilter(event) {
      const filterMap = {
        'Relevant Literature': 'document-collection',
        'Proteins & Enzymes': 'proteins-enzymes',
        'Drug Targets': 'drug-targets',
      };
      this.filterSearch = filterMap[event] || 'document-collection';
    },
  },
  setup() {
    const db = getFirestore();
    const allEntries = ref([]);
    const searchQuery = ref('');
    const filterSearch = ref('document-collection');

    const fetchEntries = async () => {
      if (!filterSearch.value) return;
      try {
        const querySnapshot = await getDocs(collection(db, filterSearch.value));
        allEntries.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error fetching Firestore data:', error);
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



</style>
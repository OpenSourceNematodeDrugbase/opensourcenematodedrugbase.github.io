<template>

  <button @click="navigateToDatabaseFaq" type="submit" class="submit-button">Database FAQ</button>

  <h2>
  The database and criterion is currently being updated.
  Please follow
  <a href="https://www.linkedin.com/company/open-source-nematode-drugbase/about/" target="_blank" rel="noopener noreferrer">
    our LinkedIn page
  </a>
  or other social media for updates.
</h2>

  <SearchComponent />

  <FilterComponent :filters="filters" @update:filters="filters = $event" />

  <div class="database-home-container">
    <DrugTargetEntry :entries="paginatedEntries" />

    <div class="pagination-controls">
      <label for="entriesPerPage">Show entries:</label>
      <select id="entriesPerPage" v-model.number="entriesPerPage">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
  </div>

  <div>
    <p>Special thanks and credit goes to the following organisations and individuals for providing data for the Nematode Drugbase tool:</p>
    <p><a href="https://parasite.wormbase.org/">WormBase ParaSite</a>  and everyone who has contributed data to this resource.</p> 
    Citation: Kevin L. Howe, Bruce J. Bolt, Myriam Shafie, Paul Kersey, and Matthew Berriman. 
    <p><a href="http://dx.doi.org/10.1016/j.molbiopara.2016.11.005">WormBase ParaSite − a comprehensive resource for helminth genomics</a> <em>Molecular and Biochemical Parasitology</em> 2017 215 2-10</p>
    <p><a href="https://wormbase.org/">WormBase</a> 
    Citation: Paul W> Sternberg et al <a href="https://doi.org/10.1093/genetics/iyae050">WormBase 2024: status and transitioning to Alliance infrastructure</a>
    <em>Genetics</em> Volume 227, Issue 1, May 2024, iyae050,</p>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { getDatabase, ref as dbRef, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';
import DrugTargetEntry from "@/components/DataEntryComponents/DrugTargetEntry.vue";
import SearchComponent from "@/components/SearchComponent.vue";
import FilterComponent from "@/components/FilterComponent.vue";

export default {
  components: {
    FilterComponent,
    SearchComponent,
    DrugTargetEntry,
  },
  methods: {
    navigateToDatabaseFaq() {
      this.$router.push('/database-faq'); // Navigate to the "About" page
    },
  },
  setup() {
    const database = getDatabase();
    const allEntries = ref([]);
    const entriesPerPage = ref(5);
    const options = [5, 10, 25, 50];

    const filters = ref({
      similarProtein: "",
      hasKnownDomain: "",
      hasGOAnnotation: "",
      hasParalogueGeneStableID: "",
      hasLaravalDevelopmentLink: "",
      hasSimilarIdentity: "",
      hasEnzymaticActivity: "",
    });

    const fetchEntries = () => {
      allEntries.value = [];
      const entriesRef = dbRef(database, 'drugTargets');

      onChildAdded(entriesRef, (snapshot) => {
        allEntries.value.push({ firebaseId: snapshot.key, ...snapshot.val() });
      });

      onChildChanged(entriesRef, (snapshot) => {
        const index = allEntries.value.findIndex(entry => entry.firebaseId === snapshot.key);
        if (index !== -1) {
          allEntries.value[index] = { firebaseId: snapshot.key, ...snapshot.val() };
        }
      });

      onChildRemoved(entriesRef, (snapshot) => {
        allEntries.value = allEntries.value.filter(entry => entry.firebaseId !== snapshot.key);
      });
    };

    onMounted(fetchEntries);

    const filteredEntries = computed(() => {
      return allEntries.value.filter(entry => {
        if (filters.value.similarProtein !== "" &&
            String(entry.similar_protein_in_humans) !== filters.value.similarProtein) {
          return false;
        }

        if (filters.value.hasKnownDomain !== "" &&
            String(entry.has_known_protein_domain) !== filters.value.hasKnownDomain) {
          return false;
        }

        if (filters.value.hasGOAnnotation !== "" &&
            String(entry.has_gene_ontology_functional_annotation) !== filters.value.hasGOAnnotation) {
          return false;
        }

        if (filters.value.hasParalogueGeneStableID !== "" &&
            String(entry.has_paralogue_id) !== filters.value.hasParalogueGeneStableID) {
          return false;
        }

        if (filters.value.hasLaravalDevelopmentLink !== "" &&
            String(entry.linked_to_larval_development) !== filters.value.hasLaravalDevelopmentLink) {
          return false;
        }

        if (filters.value.hasSimilarIdentity !== "" &&
            String(entry.has_similar_identity) !== filters.value.hasSimilarIdentity) {
          return false;
        }

        if (filters.value.hasEnzymaticActivity !== "" &&
            String(entry.has_enzymatic_activity) !== filters.value.hasEnzymaticActivity) {
          return false;
        }

        return true;
      });
    });

    const paginatedEntries = computed(() => {
      return filteredEntries.value.slice(0, entriesPerPage.value);
    });

    return {
      filters,
      paginatedEntries,
      entriesPerPage,
      options,
    };
  },
};
</script>

<style scoped>
.database-home-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.pagination-controls {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  font-family: Arial, sans-serif;
  font-size: 14px;
}

.pagination-controls select {
  padding: 5px 8px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.submit-button {
  padding: 10px 24px;
  background-color: #2563eb; /* Tailwind 'blue-600' */
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

}

.submit-button:hover {
  background-color: #1e40af; /* Tailwind 'blue-800' */
  transform: translateY(-1px);
}

.submit-button:active {
  background-color: #1e3a8a; /* Tailwind 'blue-900' */
  transform: translateY(0);
}

</style>
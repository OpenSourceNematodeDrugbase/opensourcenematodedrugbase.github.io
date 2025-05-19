<template>

  <SearchComponent/>

  <div class="database-home-container">
    <DrugTargetEntry :entries="paginatedEntries" />

    <div class="pagination-controls">
      <label for="entriesPerPage">Show entries:</label>
      <select id="entriesPerPage" v-model.number="entriesPerPage">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { getDatabase, ref as dbRef, onChildAdded, onChildChanged, onChildRemoved } from 'firebase/database';
import DrugTargetEntry from "@/components/DataEntryComponents/DrugTargetEntry.vue";
import SearchComponent from "@/components/SearchComponent.vue";

export default {
  components: {
    SearchComponent,
    DrugTargetEntry,
  },
  setup() {
    const database = getDatabase();
    const allEntries = ref([]);
    const entriesPerPage = ref(5);
    const options = [5, 10, 25, 50];

    const fetchEntries = () => {
      allEntries.value = [];
      const entriesRef = dbRef(database, 'drugTargets');

      onChildAdded(entriesRef, (snapshot) => {
        allEntries.value.push({ id: snapshot.key, ...snapshot.val() });
      });

      onChildChanged(entriesRef, (snapshot) => {
        const index = allEntries.value.findIndex(entry => entry.id === snapshot.key);
        if (index !== -1) {
          allEntries.value[index] = { id: snapshot.key, ...snapshot.val() };
        }
      });

      onChildRemoved(entriesRef, (snapshot) => {
        allEntries.value = allEntries.value.filter(entry => entry.id !== snapshot.key);
      });
    };

    onMounted(fetchEntries);

    const paginatedEntries = computed(() => {
      return allEntries.value.slice(0, entriesPerPage.value);
    });

    return {
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
</style>

<template>
  <div class="drug-target-view-container">
    <div v-if="loading">Loading entry details...</div>
    <div v-else-if="entry">
      <h2>{{ entry.gene_stable_id }} — {{ entry.human_gene_name }}</h2>

      <p><strong>Genome Project:</strong> {{ entry.genome_project || 'N/A' }}</p>
      <p><strong>Gene Biotype:</strong> {{ entry.gene_biotype || 'N/A' }}</p>
      <p><strong>Homology Type:</strong> {{ entry.homology_type || 'N/A' }}</p>
      <p><strong>Human Gene Stable ID:</strong> {{ entry.human_gene_stable_id || 'N/A' }}</p>
      <p><strong>Human Protein Stable ID:</strong> {{ entry.human_protein_stable_id || 'N/A' }}</p>
      <p><strong>Identity:</strong> {{ entry.identity ?? 'N/A' }}</p>
      <p><strong>Human Identity:</strong> {{ entry.human_identity ?? 'N/A' }}</p>
      <p><strong>Similar Protein in Humans:</strong> {{ entry.similar_protein_in_humans ? 'Yes' : 'No' }}</p>

      <div v-if="entry.caenorhabditis_elegans_prjna13758_ws290_gene_name">
        <p><strong>C. elegans Gene Name:</strong> {{ entry.caenorhabditis_elegans_prjna13758_ws290_gene_name }}</p>
        <p><strong>C. elegans Gene Stable ID:</strong> {{ entry.caenorhabditis_elegans_prjna13758_ws290_gene_stable_id }}</p>
      </div>
    </div>
    <div v-else>
      <p>Entry not found.</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getDatabase, ref as dbRef, get, child } from "firebase/database";

export default {
  setup() {
    const route = useRoute();
    const entry = ref(null);
    const loading = ref(true);

    onMounted(async () => {
      const id = route.params.id;

      try {
        const db = getDatabase();
        const snapshot = await get(child(dbRef(db), `entries/${id}`)); // Assumes your data is at /entries/:id
        if (snapshot.exists()) {
          entry.value = snapshot.val();
        } else {
          console.warn("Entry not found for ID:", id);
        }
      } catch (error) {
        console.error("Error fetching entry:", error);
      } finally {
        loading.value = false;
      }
    });

    return {
      entry,
      loading,
    };
  },
};
</script>

<style scoped>
.drug-target-view-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #333;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #007bff;
}

p {
  margin-bottom: 12px;
  line-height: 1.6;
}

strong {
  color: #222;
}
</style>

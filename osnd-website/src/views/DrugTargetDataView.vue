<template>
  <div class="drug-target-view-container">
    <div v-if="loading">Loading entry details...</div>
    <div v-else-if="entry">
      <h2>Drug Target Entry: {{ entry.gene_stable_id }}</h2>
      <section class="details-section">
        <h3>Entry Details</h3>
        <p><strong>Genome Project:</strong> {{ entry.genome_project }}</p>
        <p><strong>Gene Stable ID:</strong> {{ entry.gene_stable_id }}</p>
        <p><strong>Genome Name:</strong> {{ entry.genome_name }}</p>
        <p><strong>Go Term Accession:</strong> {{ entry.go_term_accession }}</p>
        <p><strong>Go Term Name:</strong> {{ entry.go_term_name }}</p>
        <p><strong>Go Term Evidence Code:</strong> {{ entry.go_term_evidence_code }}</p>
        <p><strong>Gene Biotype:</strong> {{ entry.gene_biotype }}</p>
        <p><strong>InterPro ID:</strong> {{ entry.interpro_id }}</p>
        <p><strong>Human Protein Stable ID:</strong> {{ entry.human_protein_stable_id }}</p>
        <p><strong>Paralogue Gene Stable ID:</strong> {{ entry.paralogue_gene_stable_id }}</p>
        <p><strong>Identity:</strong> {{entry.identity}}%</p>
        <p><strong>Nematodes with Similar Identity (+-5):</strong>{{entry.similar_identity_species}}</p>
        <div>
        <strong>Wormbase Gene URI:</strong> <a :href="entry.URI" target="_blank" rel="noopener noreferrer">{{ entry.URI }}</a>
        </div>
      </section>

      <section class="criteria-section">
        <h3>Criteria</h3>
        <div>
            <strong title="A drug that acts on the parasite will be less likely to have side effects if there is no closely related protein in humans.">Similar Protein in Humans:</strong>
            <span :class="{'yes': entry.similar_protein_in_humans, 'no': !entry.similar_protein_in_humans}">
              {{ entry.similar_protein_in_humans ? ' True' : ' False' }}
            </span>
          <div/>

          <div>
            <strong title="Genes with known domains (such as enzymes or transporters) are more likely to be druggable because these structures often provide clear binding sites for small-molecule drugs.">Has Known Protein Domain:</strong>
            <span :class="{'yes': entry.has_known_protein_domain, 'no': !entry.has_known_protein_domain}">
              {{ entry.has_known_protein_domain ? ' True' : ' False' }}
            </span>
          </div>

          <div>
            <strong title="Functionally annotated genes are more likely to be biologically relevant and suitable for target validation -> because their roles in cellular processes are already known or predicted.">Has Gene Ontology Functional Annotation:</strong>
            <span :class="{'yes': entry.has_gene_ontology_functional_annotation, 'no': !entry.has_gene_ontology_functional_annotation}">
              {{ entry.has_gene_ontology_functional_annotation ? ' True' : ' False' }}
            </span>
          </div>

          <div>
            <strong title="Unique genes are less likely to have redundant functions. This makes it more likely that a drug will effectively inhibit the pathway.">Has Paralogue Gene Stable ID:</strong>
            <span :class="{'yes': entry.has_paralogue_id, 'no': !entry.has_paralogue_id}">
              {{ entry.has_paralogue_id ? ' True' : ' False' }}
            </span>
          </div>

          <div>
            <strong title="Identify genes linked to larval development via GO Term Accession. Valid GO Term Accession: [GO: GO:0007275, GO:0002168, GO:0002119, GO:0061062]">Linked to Larval Development:</strong>
            <span :class="{'yes': entry.linked_to_larval_development, 'no': !entry.linked_to_larval_development}">
              {{ entry.linked_to_larval_development ? ' True' : ' False' }}
            </span>
          </div>

          <div>
            <strong title="Drug targets that are shared by many different parasitic worms -> this means the same treatment could work for more than one parasite.">Has Similar Identity Across Species
              :</strong>
            <span :class="{'yes': entry.has_similar_identity, 'no': !entry.has_similar_identity}">
              {{ entry.has_similar_identity ? ' True' : ' False' }}
            </span>
          </div>



        </div>
      </section>

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
      // Extract the ID from the route, which is the last part of the URL
      const id = route.params.id;

      try {
        const db = getDatabase();
        // Retrieve the entry from Firebase Realtime Database at /entries/:id
        const snapshot = await get(child(dbRef(db), `drugTargets/${id}`));
        if (snapshot.exists()) {
          entry.value = snapshot.val();
        } else {
          console.warn(`Entry not found for ID: ${id}`);
          console.log("Route ID:", id);
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
  padding: 40px 30px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #2c3e50;
  font-size: 16px;
}

.loading {
  font-style: italic;
  text-align: center;
  color: #555;
  font-size: 18px;
}

h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #1a73e8;
  border-bottom: 2px solid #1a73e8;
  padding-bottom: 6px;
}

h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 6px;
  color: #34495e;
}

.details-section p,
.criteria-section p {
  margin-bottom: 12px;
  line-height: 1.5;
}

strong {
  color: #222;
}

.criteria-section {
  margin-top: 40px;
  padding: 20px;
  background-color: #f0f7ff;
  border-radius: 10px;
  border: 1px solid #d0e2ff;
}

.criteria-section p {
  font-size: 16px;
}

.criteria-section span.yes {
  color: #27ae60;
  font-weight: 700;
}

.criteria-section span.no {
  color: #c0392b;
  font-weight: 700;
}

.not-found {
  text-align: center;
  font-size: 18px;
  color: #e74c3c;
  font-weight: 600;
}

.criteria-section div {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>

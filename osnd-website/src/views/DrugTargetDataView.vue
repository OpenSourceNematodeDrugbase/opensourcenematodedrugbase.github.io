<template>
  <div class="data-entry-container">
    <div v-if="entry" class="content-wrapper">
      <h2 class="entry-title">{{ entry.targetName || "Name Unprovided" }}</h2>
      <div class="card-grid">
        <div class="card">
          <h3>Functional Importance</h3>
          <h4>Functional Importance Rating: {{ entry.functionalImportanceRating || "No Rating" }} </h4>
          <p><strong>Essentially Score: </strong> {{ entry.essentiallyScore || "No Data" }}</p>
          <p><strong>Phenotype Effect Lethal: </strong> {{ entry.phenotypeEffectLethal || "No Data" }}</p>
          <p><strong>Expression Stage: </strong> {{ entry.expressionStage || "No Data" }}</p>
          <p><strong>Pathway Essentially: </strong> {{ entry.pathwayEssentially || "No Data" }}</p>
          <p><strong>Unique Parasite Metabolic Pathway: </strong> {{ entry.uniqueParasiteMetabolicPathway || "No Data" }}</p>
          <p><strong>Immune Evasion Role: </strong> {{ entry.immuneEvasionRole || "No Data" }}</p>
        </div>
        <div class="card">
          <h3>Pathogen Specificity</h3>
          <h4>Pathogen Specificity Rating: {{ entry.pathogenSpecificityRating || "No Rating" }} </h4>
          <p><strong>Ortholog Comparison: </strong> {{ entry.orthologComparison || "No Data" }}</p>
          <p><strong>Host Homology: </strong> {{ entry.hostHomology || "No Data" }}</p>
          <p><strong>Cross-Species Conservation: </strong> {{ entry.crossSpeciesConservation || "No Data" }}</p>
          <p><strong>Ortholog Percentage Identity: </strong> {{ entry.orthologPercentageIdentity || "No Data" }}</p>
        </div>
        <div class="card">
          <h3>Molecular Accessibility</h3>
          <h4>Molecular Accessibility Rating: {{ entry.molecularAccessibilityRating || "No Rating" }} </h4>
          <p><strong>Sub Cellular Location: </strong> {{ entry.subCellularLocation || "No Data" }}</p>
          <p><strong>Transport System: </strong> {{ entry.transportSystem || "No Data" }}</p>
          <p><strong>Drugability Method: </strong> {{ entry.drugabilityMethod || "No Data" }}</p>
          <p><strong>Tissue Expression: </strong> {{ entry.tissueExpression || "No Data" }}</p>
        </div>
        <div class="card">
          <h3>Drugability</h3>
          <h4>Drugability Rating: {{ entry.drugabilityRating || "No Rating" }} </h4>
          <p><strong>Resistant Potential: </strong> {{ entry.resistantPotential || "No Data" }}</p>
          <p><strong>Binding Score: </strong> {{ entry.bindingScore || "No Data" }}</p>
          <p><strong>Protein Structure Availability: </strong> {{ entry.proteinStructureAvailability || "No Data" }}</p>
        </div>
      </div>
    </div>
    <p v-else class="loading-message">Loading data...</p>
  </div>
</template>


<script>
import { ref, onMounted, watch, nextTick, onUnmounted, unref } from "vue";
import { useRoute } from "vue-router";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import * as NGL from "ngl";

export default {
  setup() {
    const route = useRoute();
    const db = getFirestore();
    const entry = ref(null);
    const nglStage = ref(null);

    // Fetch entry from Firestore
    const fetchEntry = async () => {
      const entryId = route.params.id;
      if (!entryId) return;

      try {
        console.log(`Fetching data for entry ID: ${entryId}`);
        const docRef = doc(db, "drug-targets", entryId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          entry.value = { id: docSnap.id, ...docSnap.data() };
        } else {
          console.error("No such document found!");
          entry.value = null;
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    // Render NGL Viewer
    const renderNGLViewer = async (pdbId) => {
      await nextTick(); // Ensure DOM updates before rendering

      const container = document.getElementById("ngl-container");
      if (!container) return;

      // Dispose of previous NGL stage (avoid memory leaks)
      if (nglStage.value) {
        nglStage.value.dispose();
        nglStage.value = null;
      }

      // Initialize NGL Stage
      nglStage.value = new NGL.Stage("ngl-container", { backgroundColor: "black" });

      // Load PDB file with delay to fix modelViewMatrix issue
      setTimeout(() => {
        nglStage.value
          .loadFile(`https://files.rcsb.org/download/${pdbId}.pdb`, { defaultRepresentation: true })
          .then((component) => {
            component.autoView(); // Center the view
          })
          .catch((err) => {
            console.error("Error loading PDB file:", err);
          });
      }, 500); // Slight delay to ensure proper loading
    };

    // Watch for PDB ID changes
    watch(
    () => unref(entry)?.pdb_id,
    async (newPdbId) => {
      if (newPdbId) {
        await nextTick(); // Ensure Vue updates first
        renderNGLViewer(newPdbId);
      }
    }
  );

    onMounted(fetchEntry);

    // Cleanup on unmount
    onUnmounted(() => {
      if (nglStage.value) {
        nglStage.value.dispose();
        nglStage.value = null;
      }
    });

    return { entry };
  },
};
</script>

<style scoped>
.data-entry-container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.entry-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  justify-content: center;
}

.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
}

.card p {
  margin: 8px 0;
  font-size: 16px;
  color: #444;
}

.card h3 {
  font-size: 20px;
  color: #007bff;
  margin-bottom: 10px;
}

.loading-message {
  font-size: 18px;
  font-weight: bold;
  color: #666;
}
</style>
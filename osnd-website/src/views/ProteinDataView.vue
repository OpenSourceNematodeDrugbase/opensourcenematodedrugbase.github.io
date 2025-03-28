<template>
  <div class="data-entry-container">
    <div v-if="entry" class="content-wrapper">
      <div class="text-content">
        <h2 class="entry-title">{{ entry.geneName || "Name Unprovided" }}</h2>

        <div class="card">
          <p><strong>Gene Symbol: </strong> {{ entry.geneSymbol || "No Data" }}</p>
          <p><strong>Length: </strong> {{ entry.length || "No Data" }}</p>
          <p><strong>Molecular Weight: </strong> {{ entry.molecular_weight || "No Data" }}</p>
          <p><strong>Organism: </strong> {{ entry.organism || "No Data" }}</p>
          <p><strong>Protein ID: </strong> {{ entry.protein_id || "No Data" }}</p>
          <p><strong>Resolution: </strong> {{ entry.resolution || "No Data" }}</p>
          <p><strong>Tissue Specificity: </strong> {{ entry.tissue_specificity || "No Data" }}</p>
          <p><strong>Ensembl ID: </strong> {{ entry.ensembl_id || "No Data" }}</p>
          <p><strong>Function: </strong> {{ entry.function || "No Data" }}</p>
          <p><strong>Sequence: </strong> <span class="sequence">{{ entry.sequence || "No Data" }}</span></p>
          <p>
            <strong>Structure URL: </strong>
            <a :href="entry.structure_url" target="_blank">{{ entry.structure_url || "No Data" }}</a>
          </p>
          <p><strong>Expression Level: </strong> {{ entry.expression_level || "No Data" }}</p>
          <p><strong>PDB ID: </strong> {{ entry.pdb_id || "No Data" }}</p>
          <p><strong>Alternative Names: </strong> {{ entry.alternative_names?.join(", ") || "None" }}</p>
        </div>

        <div class="card">
          <h3>Diseases Associated</h3>
          <ul>
            <li v-for="(disease, index) in entry.name_diseases_associated || []" :key="index">
              <strong>Disease Name:</strong> {{ disease }} <br />
              <strong>OMIM ID:</strong> {{ entry.omim_id_diseases_associated[index] || "N/A" }} <br />
              <strong>Mutation:</strong> {{ entry.mutation_diseases_associated[index] || "N/A" }}
            </li>
          </ul>
        </div>

        <div class="card">
          <h3>Interactions</h3>
          <ul>
            <li v-for="(interaction, index) in entry.interaction_type_interactions || []" :key="index">
              <strong>Interaction Type:</strong> {{ interaction }} <br />
              <strong>Description:</strong> {{ entry.description_interactions[index] || "N/A" }} <br />
              <strong>Protein ID:</strong> {{ entry.protein_id_interactions[index] || "N/A" }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="entry && entry.pdb_id" id="ngl-container" class="ngl-viewer"></div>

    <p v-else class="loading-message">Loading data...</p>
  </div>
</template>

<script>
import { ref, onMounted, watch, nextTick, onUnmounted, unref } from "vue";
import { useRoute } from "vue-router";
import { getDatabase, ref as dbRef, onValue } from "firebase/database";
import * as NGL from "ngl";

export default {
  setup() {
    const route = useRoute();
    const db = getDatabase();
    const entry = ref(null);
    const nglStage = ref(null);

    const fetchEntry = () => {
      const entryId = route.params.id;
      if (!entryId) return;

      try {
        console.log(`Fetching data for entry ID: ${entryId}`);
        const dataRef = dbRef(db, `proteinEnzymes/${entryId}`);

        onValue(dataRef, (snapshot) => {
          if (snapshot.exists()) {
            entry.value = { id: entryId, ...snapshot.val() };
          } else {
            console.error("No such document found!");
            entry.value = null;
          }
        });
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    const renderNGLViewer = async (pdbId) => {
      await nextTick();

      const container = document.getElementById("ngl-container");
      if (!container) return;

      if (nglStage.value) {
        nglStage.value.dispose();
        nglStage.value = null;
      }

      nglStage.value = new NGL.Stage("ngl-container", { backgroundColor: "black" });

      container.addEventListener("wheel", preventScroll, { passive: false });

      setTimeout(() => {
        nglStage.value
          .loadFile(`https://files.rcsb.org/download/${pdbId}.pdb`, { defaultRepresentation: true })
          .then((component) => {
            component.autoView();
          })
          .catch((err) => {
            console.error("Error loading PDB file:", err);
          });
      }, 500);
    };

    const preventScroll = (event) => {
      event.preventDefault();
    };

    watch(
      () => unref(entry)?.pdb_id,
      async (newPdbId) => {
        if (newPdbId) {
          await nextTick();
          renderNGLViewer(newPdbId);
        }
      }
    );

    onMounted(fetchEntry);

    onUnmounted(() => {
      if (nglStage.value) {
        nglStage.value.dispose();
        nglStage.value = null;
        const container = document.getElementById("ngl-container");
        if (container) {
          container.removeEventListener("wheel", preventScroll);
        }
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

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 750px;
  margin-bottom: 20px;
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

ul {
  list-style: none;
  padding: 0;
}

ul li {
  background: #f8f9fa;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.ngl-viewer {
  width: 100%;
  height: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  background: #000;
}

.loading-message {
  font-size: 18px;
  font-weight: bold;
  color: #666;
}

.sequence {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  max-width: 100%;
}
</style>
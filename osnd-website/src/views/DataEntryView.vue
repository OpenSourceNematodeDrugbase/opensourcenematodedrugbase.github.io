<template>
  <div class="data-entry-container">

    <div v-if="entry" class="content-wrapper">
      <img v-if="entry?.imageUrl" class="document-image" :src="entry.imageUrl" alt="Document Image">

      <div class="text-content">
        <h2>{{ entry.documentTitle || "No Title" }}</h2>
        <p><strong>Published:</strong> {{ entry.publishDate || "No Date" }}</p>
        <p><strong>Abstract:</strong> {{ entry.abstract || "No description available" }}</p>

        <h3>Authors</h3>
        <ul>
          <li v-for="author in entry.authors || []" :key="author">{{ author }}</li>
        </ul>

        <button v-if="entry.url" class="source-button" @click="accessSource(entry.url)">
          View Source
        </button>

        <button v-if="entry.documentPath" class="document-button" @click="downloadDocument(entry.documentPath)">
          Download Document
        </button>
      </div>
    </div>
    <p v-else>Loading data...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default {
  setup() {
    const route = useRoute();
    const db = getFirestore();
    const entry = ref(null);

    // Fetch entry data from Firestore
    const fetchEntry = async () => {
      const entryId = route.params.id;
      if (!entryId) return;

      try {
        console.log(`Fetching data for entry ID: ${entryId}`);
        const docRef = doc(db, "document-collection", entryId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          entry.value = { id: docSnap.id, ...docSnap.data() };
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      }
    };

    // Download document method
    const downloadDocument = (path) => {
      if (!path) return console.error("No document path provided");
      window.open(path, "_blank");
    };

    // Open source URL
    const accessSource = (url) => {
      if (!url) return console.error("No source provided");
      window.open(url, "_blank");
    };

    onMounted(fetchEntry);

    return { entry, downloadDocument, accessSource };
  },
};
</script>

<style scoped>
.data-entry-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.content-wrapper {
  display: flex;
  align-items: flex-start;
  text-align: left;
}

.document-image {
  max-width: 200px;
  height: auto;
  margin-right: 20px;
  margin-top: 30px;
}

.text-content {
  flex: 1;
}

ul {
  list-style: none;
  padding: 0;
}

.document-button, .source-button {
  background-color: #007bff;
  color: white;
  border: none;
  margin-top: 20px;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  width: 100%;
  text-align: center;
  transition: background-color 0.3s ease;
}

.document-button:hover, .source-button:hover {
  background-color: #0056b3;
}
</style>

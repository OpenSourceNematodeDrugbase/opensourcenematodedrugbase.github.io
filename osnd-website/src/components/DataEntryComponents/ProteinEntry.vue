<template>
  <div class="entry-display-container">
    <div v-for="entry in entries" :key="entry.id" class="entry-text">
      <h3>{{ entry.geneName || "No Name Provided" }}</h3>
      <p>GeneSymbol: {{ entry.geneSymbol || "No Data" }}</p>
      <p>Function: {{ entry.function || "No Data" }}</p>

      <p>Alternative Names: {{ entry.alternative_names?.join(', ') || "None" }}</p>

      <p>Diseases Associated: {{ entry.name_diseases_associated?.join(', ') || "None" }}</p>

      <p>Interaction Descriptions: </p>
      <ul>
        <li v-for="descriptions in entry.description_interactions || []" :key="descriptions">
          {{ descriptions }}
        </li>
      </ul>


      <button class="document-button" @click="viewDataEntry(entry)">View Protein</button>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";

export default {
  props: {
    entries: Array, // Receive entries from parent
  },
  methods: {
    getShortenedText(text, wordLimit) {
      if (!text) return '';
      const words = text.split(' ');
      return words.length > wordLimit ? `${words.slice(0, wordLimit).join(' ')}...` : text;
    },
    downloadDocument(path) {
      if (!path) return;
      const link = document.createElement('a');
      link.href = path;
      link.download = path.split('/').pop();
      link.target = '_blank';
      link.click();
    },
    viewDataEntry(entry) {
      router.push({
        path: `/literature-data-entry/${entry.id}`,
        state: { entry },
      });
    },
    accessSource(url) {
      if (!url) return;
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
/* Container Styling */
.entry-display-container {
  display: flex;
  flex-wrap: wrap;
  gap: 24px; /* Increased gap for better spacing */
  padding: 30px;
  max-width: 1100px; /* Slightly wider for better content display */
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start; /* Align items at the top */
}

/* Individual Entry Box */
.entry-text {
  border: 1px solid #ddd; /* Softer border */
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px; /* Rounded corners for a softer look */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  width: 100%;
  max-width: 500px; /* Prevent entries from being too wide */
  text-align: left;
  transition: transform 0.2s ease-in-out;
}

.entry-text:hover {
  transform: translateY(-4px); /* Slight lift effect */
}

/* Headings */
.entry-text h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px; /* Add more spacing below the title */
  color: #333;
}

/* Paragraphs */
.entry-text p {
  margin-bottom: 10px;
  font-size: 16px;
  color: #555;
  line-height: 1.6;
}

/* Alternative Names & Interaction Descriptions */
.entry-text p strong {
  font-weight: 600;
  color: #222;
}

/* Unordered List */
.entry-text ul {
  margin-top: 5px;
  padding-left: 20px;
  list-style-type: disc;
}

.entry-text li {
  margin-bottom: 5px;
  font-size: 15px;
  color: #444;
}

/* Buttons */
.document-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  width: 100%;
  text-align: center;
  transition: background-color 0.3s ease;
  margin-top: 15px; /* Space between buttons */
}

.document-button:hover {
  background-color: #0056b3;
}

.document-button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

/* Source Button */
.source-button {
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #007bff;
  text-align: center;
  width: 100%;
}

.source-button:hover {
  color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .entry-text {
    max-width: 100%; /* Make entries full width on smaller screens */
  }
}
</style>


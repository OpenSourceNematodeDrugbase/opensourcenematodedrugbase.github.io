<template>
  <div class="entry-display-container">
    <div v-for="entry in entries" :key="entry.id" class="entry-text">
      <h3 id="documentTitle">{{ entry.documentTitle || "No Title" }} </h3>
      <p >{{ entry.publishDate || "No Date" }}</p>
      <p id="documentParagraph">{{ getShortenedText(entry.abstract, 40) || "No description available" }}</p>

      <button class="source-button" @click="accessSource(entry.url)">
        {{ entry.url || "Source unavailable" }}
      </button>

      <p class="authors"><strong>Authors</strong></p>
      <ul>
        <li v-for="author in entry.authors || []" :key="author">
          {{ author }}
        </li>
      </ul>

      <button class="document-button" @click="viewDataEntry(entry)">View Data</button>
      <button class="document-button" @click="downloadDocument(entry.documentPath)" :disabled="!entry.documentPath">
        Download Document
      </button>
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
.entry-display-container {
  display: flex;
  flex-wrap: wrap; /* Ensure the entries wrap to the next line when there's not enough space */
  gap: 20px;
  padding: 20px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto; /* Center horizontally */
  justify-content: center; /* Center the items horizontally within the container */
  align-items: center; /* Center the items vertically within the container */
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
  box-sizing: border-box; /* Ensure padding is included in the width/height calculation */
}

.entry-text {
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f9f9f9;
  flex-direction: column; /* Stack the content vertically */
  text-align: left; /* Left-align all text inside the box */
}

.entry-text h3 {
  font-size: 18px; /* Make titles slightly larger */
  font-weight: 600; /* Make titles bolder */
  margin: 10px 0;
  word-wrap: break-word; /* Ensure long titles break correctly */
}

.entry-text p {
  margin: 10px 0;
  font-size: 14px; /* Slightly smaller font for descriptions */
  line-height: 1.6; /* Increase line-height for readability */
  word-wrap: break-word; /* Ensure long text breaks and stays within bounds */
}

.entry-text a {
  color: #007bff;
  margin-bottom: 10px; /* Space between the link and next element */
  text-wrap: wrap;
}

.entry-text a:hover {
  text-decoration: underline;
}

.document-button {
  background-color: #007bff;
  color: white;
  border: none;
  margin-top: 20px; /* Adjust spacing to be more consistent */
  padding: 12px 25px; /* Increase button size for easier clickability */
  border-radius: 8px; /* Slightly rounder for better aesthetics */
  cursor: pointer;
  font-size: 16px; /* Button text is clearer */
  display: block; /* Make the button block-level to ensure centering */
  width: 100%; /* Full width of the container */
  text-align: center; /* Ensure text is centered in the button */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.document-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.document-button:disabled {
  background-color: #858585;
  color: white;
  border: none;
  margin-top: 20px; /* Adjust spacing to be more consistent */
  padding: 12px 25px; /* Increase button size for easier clickability */
  border-radius: 8px; /* Slightly rounder for better aesthetics */
  cursor: pointer;
  font-size: 16px; /* Button text is clearer */
  display: block; /* Make the button block-level to ensure centering */
  width: 100%; /* Full width of the container */
  text-align: center; /* Ensure text is centered in the button */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
}

.source-button {
  background: none;
  border: none;
  padding: 12px 25px; /* Increase button size for easier clickability */
  border-radius: 8px; /* Slightly rounder for better aesthetics */
  cursor: pointer;
  font-size: 16px; /* Button text is clearer */
  display: block; /* Make the button block-level to ensure centering */
  color: blue;
  width: 100%; /* Full width of the container */
  text-align: center; /* Center the text */
  transition: color 0.3s ease; /* Smooth transition for hover effect */
}

.source-button:hover {
  color: #0056b3; /* Darker shade on hover */
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: left; /* Make sure the list itself is left-aligned */
}

li {
  padding: 4px 0;
  font-size: 14px;
  text-align: left; /* Ensure each list item is aligned left */
}

.authors {
  justify-self: center;
}
@media screen and (max-width: 500px) {
  #documentTitle
  {
    font-size: 5vw !important;
  }
  #documentParagraph
  {
    font-size: 3vw !important;
  }
  .source-button
  {
    font-size: 3.8vw;
  }
}
</style>

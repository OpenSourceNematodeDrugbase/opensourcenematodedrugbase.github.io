<template>
  <div class="intro-banner">
    <h1>The Nematode Drug Base</h1>
    <p class="intro-text">
      A comprehensive resource for researchers, healthcare professionals, and policymakers focused on understanding the critical role that nematodes play in neglected diseases.
    </p>
  </div>

  <SearchComponent @text-changed="updatedValue" />

  <!-- Entries Display -->
  <div class="entry-display-container">
    <div
      v-for="entry in entries"
      :key="entry.id"
      class="entry-text"
    >
      <h3>{{ entry.documentTitle || "No Title" }}</h3>
      <p>{{ entry.publishDate || "No Date" }}</p>
      <!-- Limit description length to 40 words -->
      <p>{{ getShortenedText(entry.abstract, 40) || "No description available" }}</p>

      <button class="source-button" @click="accessSource(entry.url)">
        {{ entry.url || "Source unavailable" }}
      </button>

      <!-- Nested loop: Iterate through authors for each entry -->
      <p class="authors"><strong>Authors:</strong></p>
      <ul>
        <li v-for="author in entry.authors || []" :key="author">
          {{ author }}
        </li>
      </ul>

      <!-- Access Document Button -->
      <button class="document-button" @click="downloadDocument(entry.documentPath)" :disabled="!entry.documentPath">Access Document</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import SearchComponent from '@/components/SearchComponent.vue';

export default {
  components: {
    SearchComponent,
  },
  data() {
    return {
      searchQuery: '', // Store search input
    };
  },
  methods: {
    // Handle updates from SearchComponent
    updatedValue(event) {
      console.log('Update Received:', event);
      this.searchQuery = event.toLowerCase(); // Convert search input to lowercase for case-insensitive filtering
    },

    // Helper method that limits text to the specified number of words
    getShortenedText(text, wordLimit) {
      if (!text) return '';
      const words = text.split(' ');
      return words.length > wordLimit ? `${words.slice(0, wordLimit).join(' ')}...` : text;
    },

    // Download the document from the provided path
    downloadDocument(path) {
      if (!path) {
        console.error('No document path provided');
        return;
      }
      const link = document.createElement('a');
      link.href = path;
      link.download = path.split('/').pop();
      link.target = '_blank';
      link.click();
    },

    accessSource(url) {
      if(!url)
      {
        console.error('No source provided');
        return;
      }
      window.open(url, "_blank");
    }
  },
  setup() {
    const db = getFirestore();
    const allEntries = ref([]); // Store all entries from Firestore
    const searchQuery = ref(''); // Store search input

    const fetchEntries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'document-collection'));
        allEntries.value = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error fetching Firestore data:', error);
      }
    };

    // Filtered computed property
    const filteredEntries = computed(() => {
      if (!searchQuery.value) {
        return allEntries.value; // Show all entries if no search query
      }
      return allEntries.value.filter((entry) =>
        entry.documentTitle?.toLowerCase().includes(searchQuery.value) ||
        entry.abstract?.toLowerCase().includes(searchQuery.value)
      );
    });

    // Fetch data on mount
    onMounted(fetchEntries);

    return {
      entries: filteredEntries,
      searchQuery,
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

.entry-display-container {
  display: flex;
  flex-wrap: wrap; /* Ensure the entries wrap to the next line when there's not enough space */
  gap: 20px;
  justify-content: center;
  padding: 20px;
  max-width: 900px;
  width: 100%;
}

.entry-text {
  flex: 1 1 calc(33.33% - 20px); /* Three items per row on large screens */
  min-width: 280px; /* Ensure items don't shrink too small on mobile */
  border: 1px solid #ccc;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* Stack the content vertically */
  align-items: flex-start; /* Left-align content */
  justify-content: flex-start;
  text-align: left; /* Left-align all text inside the box */
  height: 100%; /* Ensure height is not fixed */
  overflow: hidden; /* Prevent content overflow */
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

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  justify-self: left;
  position: sticky;
}

li {
  padding: 4px 0;
  font-size: 14px;
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

.authors {
  text-align: left; /* Ensure the authors' text is aligned left */
  width: 100%; /* Ensure it takes full width */
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

/* Responsive Design for Mobile and Smaller Screens */
@media (max-width: 768px) {
  .entry-text {
    flex: 1 1 100%; /* Each entry takes full width on smaller screens */
  }
}

</style>
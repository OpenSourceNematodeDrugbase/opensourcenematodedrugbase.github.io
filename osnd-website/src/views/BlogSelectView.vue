<template>
    <div class="intro-banner">
      <h1>Blog Editor Selection</h1>
      <p class="intro-text">Select a Blog to Edit</p>
    </div>

    <div>
    <button @click="editBlog('')" type="submit" class="button">New Blog</button>
</div>

<div class="blog-list">
<ul>
  <li v-for="blog in blogs" :key="blog.id">
    <h3>{{ blog.title }}</h3>
    <div class="sub-text">
      <p><strong>Author:</strong> {{ blog.author }}</p>
      <p><strong>Last updated:</strong> {{ blog.lastUpdated }}</p>
    </div>
    
    <div class="blog-link">
        <button @click="editBlog(blog.id)" type="submit" class="blog-option-button">Edit Blog</button>
    </div>

    <div class="blog-link">
        <button @click="deleteBlog(blog.id)" type="submit" class="blog-option-button">Delete Blog</button>
    </div>
  </li>
</ul>
  </div>
</template>
  
<script>
import { firestore } from '@/main.js'; // Assuming firebase is set up and exported from here
import { collection, getDocs, setDoc, deleteDoc, doc, getFirestore } from 'firebase/firestore';
import { reactive } from 'vue';

export const state = reactive({
  blogIndex: ""
});

export default {
  data() {
    return {
      blogs: [], // Array to hold the blog entries
    };
  },
  created() {
    // Fetch blog data from Firestore when the component is created
    this.fetchBlogs();
  },
  methods: {
    async fetchBlogs() {
      try {
        // Access the 'blogs' collection in Firestore
        const blogsCollection = collection(firestore, 'blog-collection');
        const querySnapshot = await getDocs(blogsCollection);

        // Map Firestore docs to the blogs array
        this.blogs = querySnapshot.docs.map(doc => ({
          id: doc.id, // Store the document ID
          ...doc.data(), // Store the blog data
        }));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    },
    navigateToError() {
    this.$router.push('/error');
    },

    async editBlog(index) {
      try {
        // Check if index is empty (user is creating a new blog)
        if (index === '') {
          // Generate a placeholder document ID or unique ID for the new blog
          state.blogIndex = `${new Date().getTime()}`; // Use timestamp as a unique ID

          // Create a new document in Firestore with predefined structure
          await setDoc(doc(firestore, 'blog-collection', state.blogIndex), {
            title: "Untitled Blog",       // Default title
            author: "Unknown Author",    // Default author
            content: "",                 // Initial empty content
            lastUpdated: new Date().toISOString() // Current timestamp
          });

          console.log(`New blog created with ID: ${state.blogIndex}`);
        } else {
          // Otherwise, set the index for the existing blog
          state.blogIndex = index;
        }

        // Navigate to the blog editor using Vue Router
        this.$router.push('/blog-editor');
      } catch (error) {
        console.error("Error creating or opening the blog:", error);
        this.navigateToError(); // Navigate to error page
      }
    },
    async deleteBlog(index) {
      try {
        // Delete the blog document from Firestore
        await deleteDoc(doc(firestore, 'blog-collection', index));
        // Remove the blog from the local array
        this.blogs = this.blogs.filter(blog => blog.id !== index);
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    },
  },
};
  </script>

<style scoped>

.button {
  outline-width: 2px;
  outline-color: white;
  outline-style: solid;
  background-color: #007bff;
  color: white;
  border: none;
  margin-top: 50px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
  margin-right: 20px;
  min-width: 120px;
  min-height: 30px;
}

.button:hover {
  background-color: #787878;
}

.blog-option-button {
  outline-width: 2px;
  outline-color: white;
  outline-style: solid;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  min-width: 120px;
  min-height: 30px;
}

.blog-option-button:hover {
  background-color: #787878;
}

</style>
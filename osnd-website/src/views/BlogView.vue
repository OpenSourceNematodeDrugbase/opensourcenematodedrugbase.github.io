<script>
import { firestore } from '@/main.js'; // Assuming firebase is set up and exported from here
import { collection, getDocs } from 'firebase/firestore';

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
  },
};
</script>

<template>
  <div class="intro-banner">
    <h1>Blog</h1>
    <p class="intro-text">Find out updates and important announcements for the Open-Source Nematode Drug Base Project!</p>
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
        <router-link :to="`/blog/${blog.id}`">View Blog</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.blog-list {
  margin-top: 20px;
}

.blog-list ul {
  list-style: none;
  padding: 0;
}

.blog-link {
  font-size: 24px;
  margin-top: 20px;
}

.blog-list li {
  margin-bottom: 20px;
  padding: 50px;
  width: 800px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 32px;
}

.sub-text {
  font-size: 18px;
}

.blog-list h3 {
  margin: 0 0 10px;
}

.blog-list p {
  margin: 5px 0;
}

.blog-list a {
  text-decoration: none;
  color: #2196F3;
}

.blog-list a:hover {
  text-decoration: underline;
}
</style>
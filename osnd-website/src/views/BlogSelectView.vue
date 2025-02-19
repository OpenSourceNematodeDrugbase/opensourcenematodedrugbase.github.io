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
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
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
      
      this.$router.push('/error');
    },

    editBlog(index) {
        this.$router.push('/blog-editor');
    },
    async deleteBlog(index) {
      
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
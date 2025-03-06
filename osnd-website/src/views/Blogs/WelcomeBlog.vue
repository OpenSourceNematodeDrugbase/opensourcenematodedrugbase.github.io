<template>
  <div class="blog-container">
    <!-- Introductory Banner Section -->
    <div class="intro-banner">
      <h1>Welcome to the Blog</h1>
      <p class="intro-text">Author: Oliver Guy</p>
      <p class="intro-text">Publish Date: 05-03-2025</p>
    </div>

    <!-- Blog Content Section -->
    <div class="blog-section">
      <h2 class="blog-header">Introduction</h2>
      <p class="blog-text">
        Hello and welcome to the first blog post for the open-source nematode
        drug-base project. We wanted to provide this update to highlight key
        developments and plans.
      </p>
      <p class="blog-text-left">
        This blog update covers the following areas:
      </p>

      <ul class="blog-list">
        <li>Website Launch & Social Media</li>
        <li>AlphaFold and the Nematode Database</li>
        <li>Current Focus & Literature</li>
        <li>Upcoming Plans</li>
      </ul>
      <img class="blog-image" src="@/assets/ONDB logo.png" alt="ONDB_Logo">

    </div>
  </div>
</template>

<style scoped>
/* Entire Blog Container Styling */
.blog-container {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  max-width: 720px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

/* Introductory Banner Section */
.intro-banner {
  text-align: center;
  background-color: #c7e3f9;
  color: white;
  padding: 30px 20px;
  border-radius: 10px 10px 0 0;
}

.intro-banner h1 {
  margin: 0;
  font-size: 2.5rem;
}

.intro-text {
  margin: 5px 0;
  font-size: 1rem;
  font-weight: 300;
  color: black;
}

/* Blog Section Styling */
.blog-section {
  padding: 20px 10px;
}

.blog-header {
  font-size: 1.8rem;
  margin-bottom: 15px;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
}

.blog-text {
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.blog-text-left {
  font-size: 1.1rem;
  margin-bottom: 15px;
  text-align: left;
  margin-left: 20px;
}

.blog-list {
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 20px;
  justify-items: left;
  margin-left: 20px;
}

.blog-list li {
  font-size: 1rem;
  margin-bottom: 10px;
  list-style-type: disc;
}

.blog-image {
  max-width: 300px;
}
</style>
<script setup lang="ts">
</script>
<template>
  <div class="blog-select">
    <ul>
      <li v-for="(blog, index) in blogs" :key="blog.id" class="blog-item">
        <h3>{{ blog.name }}</h3>
        <p><strong>Author:</strong> {{ blog.author }}</p>
        <p><strong>Publish Date:</strong> {{ blog.publishDate }}</p>
        <!-- Pass blog.url directly to the method -->
        <button class="blog-button" @click="navigateToBlog(blog.url)">View Blog</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BlogSelectComponent",
  data() {
    return {
      blogs: [
        {
          id: 1,
          name: "Welcome to the ONDB Project",
          author: "Oliver Guy",
          publishDate: "06-03-2025",
          url: "/blog/welcome-blog",
        },
      ],
    };
  },

  methods: {
    navigateToBlog(url) {
      // Use this.$router.push to navigate to the correct URL
      this.$router.push(url);
    },
  },
};
</script>

<style scoped>
.blog-select {
  font-family: Arial, sans-serif;
  /* Increase spacing or size affecting the overall container if needed */
}

.blog-select ul {
  /* You can also add additional spacing or margins here for clarity */
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.blog-item {
  border: 1px solid #ddd;
  padding: 20px; /* Increased padding for larger spacing */
  margin-bottom: 15px; /* Give more space between blog items */
  border-radius: 6px; /* Subtle increase in border rounding */
  background-color: #f9f9f9;
  font-size: 18px; /* Increase font size to make text more prominent */
}

.blog-item h3 {
  margin: 0 0 10px; /* Increase bottom margin for better spacing */
  font-size: 22px; /* Increase heading size */
}

.blog-item p {
  margin: 5px 0;
  font-size: 16px; /* Slightly larger font for paragraph text */
}

.blog-item p strong {
  color: #333;
}

.blog-button {
  background-color: #007bff;
  color: white;
  border: none;
  margin-top: 25px; /* Increase spacing from the content */
  padding: 12px 25px; /* Increase button size for easier clickability */
  border-radius: 8px; /* Slightly rounder for better aesthetics */
  cursor: pointer;
  max-width: 300px; /* Allow a wider button */
  font-size: 16px; /* Button text is clearer */
}
</style>
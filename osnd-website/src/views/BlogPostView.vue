<script>
import { firestore } from '@/main.js'; // Firebase initiated here
import { doc, getDoc } from 'firebase/firestore';
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    // Reactive references
    const route = useRoute();
    const blog = ref(null);
    const blogId = route.params.id;

    // Method to fetch blog data
    const fetchBlog = async () => {
      try {
        // Fetching the document from Firestore
        const blogDoc = await getDoc(doc(firestore, 'blog-collection', blogId));
        if (blogDoc.exists()) {
          blog.value = blogDoc.data(); // Assign data to 'blog'
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    // Computed property to parse blocks
    const parsedBlocks = computed(() => {
      if (!blog.value || !blog.value.blocks) {
        return [];
      }
      return blog.value.blocks.map((block) => JSON.parse(block));
    });

    // Lifecycle hook triggers fetch on mount
    onMounted(() => {
      fetchBlog();
    });

    return {
      blog,
      parsedBlocks,
    };
  },
};
</script>

<template>
  <!-- If blog exists render the headline and details -->
  <div v-if="blog" class="intro-banner">
    <h1>{{ blog.title }}</h1>
    <p><strong>Author:</strong> {{ blog.author }}</p>
    <p><strong>Last updated:</strong> {{ blog.publishDate }}</p>
  </div>
  <!-- Loading message -->
  <div v-else>
    <p>Loading...</p>
  </div>

  <!-- Blog Content -->
  <div v-if="blog" class="blog-content">
    <div v-for="(block, index) in parsedBlocks" :key="index">
      <!-- Check type of block and render appropriately -->
      <template v-if="block.type === 'text'">
        <p>{{ block.content }}</p>
      </template>
      <!-- Extend to handle other block types if necessary -->
      <template v-else>
        <p>Unsupported block type: {{ block.type }}</p>
      </template>
    </div>
  </div>

  <!-- Button to return to blog list -->
  <button class="back-button" @click="$router.push('/blog')">RETURN</button>
</template>

<style scoped>
.blog-post {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.blog-content {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

.back-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 625px;
}

.blog-post h1 {
  margin-bottom: 20px;
}

.blog-post p {
  margin: 10px 0;
}

.blog-content {
  margin-top: 20px;
}
</style>
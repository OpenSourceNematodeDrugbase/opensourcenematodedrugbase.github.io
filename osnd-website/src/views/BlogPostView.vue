<script>
import { firestore } from '@/main.js'; // Assuming firebase is set up and exported from here
import { doc, getDoc } from 'firebase/firestore';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const blog = ref(null);
    const blogId = route.params.id;

    const fetchBlog = async () => {
      try {
        const blogDoc = await getDoc(doc(firestore, 'blog-collection', blogId));
        if (blogDoc.exists()) {
          blog.value = blogDoc.data();
        } else {
          console.error('No such document!');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    onMounted(() => {
      fetchBlog();
    });

    return {
      blog
    };
  }
};
</script>

<template>
  <div v-if="blog" class="intro-banner">
    <h1>{{ blog.title }}</h1>
    <p><strong>Author:</strong> {{ blog.author }}</p>
    <p><strong>Last updated:</strong> {{ blog.lastUpdated }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>

  <div v-if="blog" class="blog-content">
      <p>{{ blog.content }}</p>
  </div>

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
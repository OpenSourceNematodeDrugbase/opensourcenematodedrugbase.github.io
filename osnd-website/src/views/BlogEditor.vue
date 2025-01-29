<template>
    <div class="intro-banner">
      <h1>Blog Editor</h1>
      <p class="intro-text">Welcome, edit blogs here.</p>
    </div>
    <div v-if="isAuthenticated" class="blog-editor">
      <button v-if="!editMode" @click="startNewBlog" class="new-blog-button">New Blog</button>
      <form v-if="editMode" @submit.prevent="submitForm">
        <div class="form-group">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="blog.title" required />
        </div>
        <div class="form-group">
          <label for="content">Content:</label>
          <textarea id="content" v-model="blog.content" required></textarea>
        </div>
        <div class="form-group">
          <label for="author">Author:</label>
          <input type="text" id="author" v-model="blog.author" :readonly="true" />
        </div>
        <button type="submit" class="submit-button">{{ editMode ? 'Update Blog' : 'Add Blog' }}</button>
      </form>
      <div v-if="blogs.length" class="blog-list">
        <h2>Existing Blogs</h2>
        <ul>
          <li v-for="blog in blogs" :key="blog.id">
            <h3>{{ blog.title }}</h3>
            <p>Last updated: {{ blog.lastUpdated }}</p>
            <button @click="editBlog(blog)">Edit</button>
            <button @click="deleteBlog(blog.id)">Delete</button>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Please sign in to edit blogs.</p>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { getAuth, onAuthStateChanged } from 'firebase/auth';
  import { getFirestore, collection, addDoc, updateDoc, deleteDoc, getDocs, doc, getDoc } from 'firebase/firestore';
  
  export default {
    data() {
      return {
        isAuthenticated: false,
        blog: {
          title: '',
          content: '',
          author: '',
          lastUpdated: ''
        },
        blogs: [],
        editMode: false,
        editBlogId: null,
        user: null
      };
    },
    setup() {
      const auth = getAuth();
      const db = getFirestore();
      const isAuthenticated = ref(false);
      const blogs = ref([]);
      const blog = ref({
        title: '',
        content: '',
        author: '',
        lastUpdated: ''
      });
      const editMode = ref(false);
      const editBlogId = ref(null);
      const user = ref(null);
  
      onMounted(() => {
        onAuthStateChanged(auth, async (currentUser) => {
          isAuthenticated.value = !!currentUser;
          if (isAuthenticated.value) {
            const userDoc = await getDoc(doc(db, 'user-collection', currentUser.uid));
            if (userDoc.exists()) {
              user.value = userDoc.data();
            }
            fetchBlogs();
          }
        });
      });
  
      const fetchBlogs = async () => {
        const querySnapshot = await getDocs(collection(db, 'blog-collection'));
        blogs.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      };
  
      const submitForm = async () => {
        blog.value.lastUpdated = new Date().toLocaleString();
        blog.value.author = user.value.username;
        if (editMode.value && editBlogId.value) {
          const blogRef = doc(db, 'blog-collection', editBlogId.value);
          await updateDoc(blogRef, blog.value);
        } else {
          await addDoc(collection(db, 'blog-collection'), blog.value);
        }
        blog.value = { title: '', content: '', author: '', lastUpdated: '' };
        editMode.value = false;
        editBlogId.value = null;
        fetchBlogs();
      };
  
      const editBlog = (blog) => {
        blog.value = { title: blog.title, content: blog.content, author: blog.author, lastUpdated: blog.lastUpdated };
        editMode.value = true;
        editBlogId.value = blog.id;
      };
  
      const deleteBlog = async (id) => {
        await deleteDoc(doc(db, 'blog-collection', id));
        fetchBlogs();
      };
  
      const startNewBlog = () => {
        blog.value = { title: '', content: '', author: user.value.username, lastUpdated: '' };
        editMode.value = true;
        editBlogId.value = null;
      };
  
      return {
        isAuthenticated,
        blog,
        blogs,
        editMode,
        editBlogId,
        submitForm,
        editBlog,
        deleteBlog,
        startNewBlog,
        user
      };
    }
  };
  </script>
  
  <style scoped>
  .blog-editor {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .submit-button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
  
  .submit-button:hover {
    background-color: #45a049;
  }
  
  .new-blog-button {
    padding: 10px 20px;
    background-color: #2196F3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .new-blog-button:hover {
    background-color: #1E88E5;
  }
  
  .blog-list {
    margin-top: 20px;
  }
  
  .blog-list ul {
    list-style: none;
    padding: 0;
  }
  
  .blog-list li {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .blog-list h3 {
    margin: 0 0 10px;
  }
  
  .blog-list p {
    margin: 0 0 10px;
  }
  
  .blog-list button {
    margin-right: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .blog-list button:hover {
    background-color: #ddd;
  }
  </style>
<template>
  <div class="editor-controls">
    <button @click="addBlock">+<i class="fas fa-plus"></i></button>
    <select class="block-select" v-model="selectedBlockType">
      <option value="text">Text</option>
      <option value="image">Image</option>
      <option value="video">Video</option>
    </select>
    <button class="button" @click="save">Save</button>
    <button class="button" @click="publish">Publish</button>
    <button class="button" @click="preview">Preview</button>
  </div>
  <div>
  <input
    v-model="blogData.title"
    :placeholder="blogData.title || 'Untitled Blog'"
    id="block-text"
    class="blog-properties-text" />
</div>
<div>
  <input
    v-model="blogData.author"
    :placeholder="blogData.author || 'Unknown Author'"
    id="block-text"
    class="blog-properties-text" />
</div>
  <label class="date-text">Publish Date</label>
  <input class="date-box" type="date" v-model="blogData.publishDate" id="date"></input>
  <div class="blocks">
    <component
      v-for="(block, index) in blogData.blocks"
      :key="index"
      :is="getComponentType(block.type)"
      :block="block"
      @delete-block="deleteBlock(index)"
    />
  </div>
</template>

<script>
import BlogTextComponent from '../BlogEditor/BlockTextComponent.vue';
import BlockImageComponent from '../BlogEditor/BlockImageComponent.vue';
import BlockVideoComponent from '../BlogEditor/BlockVideoComponent.vue';
import { state } from '../views/BlogSelectView.vue';
import { firestore } from '@/main.js';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default {
  components: {
    BlogTextComponent,
    BlockImageComponent,
    BlockVideoComponent
  },
  data() {
    return {
      selectedBlockType: 'text',
      blogData: {
        title: '',
        author: '',
        publishDate: '',
        blocks: []
      }
    };
  },
  methods: {
  /**
   * Fetch existing blog data from Firestore and update the component state
   */
  async fetchBlogData() {
    console.log('Fetching blog data...');
    if (state.blogIndex !== undefined) {
      try {
        const blogDoc = await getDoc(doc(firestore, 'blog-collection', state.blogIndex));

        if (blogDoc.exists()) {
          const data = blogDoc.data();

          // Load data into blogData, with fallback defaults
          this.blogData = {
            title: data.title || 'Untitled Blog',
            author: data.author || 'Unknown Author',
            publishDate: data.publishDate || new Date().toISOString().split('T')[0],
            blocks: Array.isArray(data.blocks) ? data.blocks : []
          };

          console.log('Blog data successfully fetched!');

        } else {
          console.error('No such document! Creating a new blog entry.');
          this.createNewBlog();
        }
      } catch (error) {
        console.error('Error fetching blog data:', error);
        this.createNewBlog();
      }
    } else {
      console.error('blogIndex is undefined');
    }
  },

  /**
   * Create a new blog with default properties if no document exists
   */
  createNewBlog() {
  console.log('Creating new blog...');
  const newDocRef = doc(firestore, 'blog-collection');
  state.blogIndex = newDocRef.id;

  // Set default blog data for a new blog
  this.blogData = {
    title: 'New Blog Title',
    author: 'Author Name',
    publishDate: new Date().toISOString().split('T')[0],
    blocks: []
  };

  // Auto-save the newly created blog data to Firestore
  this.save();
},


  /**
   * Save current blog data to Firestore
   */
  async save() {
    try {
      if (state.blogIndex) {
        const blogRef = doc(firestore, 'blog-collection', state.blogIndex);

        // Save the current blogData state into Firestore
        await setDoc(blogRef, this.blogData, { merge: true });

        console.log('Blog data successfully saved!');
      } else {
        console.error('blogIndex is undefined. Cannot save blog data.');
      }
    } catch (error) {
      console.error('Error saving blog data:', error);
    }
  },
    created() {
  this.fetchBlogData();
  }
}
};
</script>

<style scoped>
.editor-controls {
  margin-top: 20px;
}

.block-select {
  margin-left: 20px;
  min-width: 200px;
}

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

.blog-properties-text {
  margin-top: 20px;
  min-width: 800px;
}

.date-text {
  font-size: 12px;
}

.date-box {
  max-width: 200px;
  margin-right: 20px;
  margin-top: 20px;
  margin-left: 10px;
}
</style>
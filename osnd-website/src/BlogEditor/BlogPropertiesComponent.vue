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
    <input v-model="blogData.title" placeholder="Blog Title" id="block-text" class="blog-properties-text"></input>
  </div>
  <div>
    <input v-model="blogData.author" placeholder="Blog Author" id="block-text" class="blog-properties-text"></input>
  </div>
  <label class="date-text">Publish Date</label>
  <input class="date-box" type="date" v-model="blogData.publishDate" date id="date"></input>
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
    async fetchBlogData() {
      if (state.blogIndex !== undefined) {
        try {
          const blogDoc = await getDoc(doc(firestore, 'blog-collection', state.blogIndex));
          if (blogDoc.exists()) {
            this.blogData = blogDoc.data();
          } else {
            console.error('No such document! Creating new blog!');
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
    createNewBlog() {
      const newDocRef = doc(firestore, 'blog-collection');
      state.blogIndex = newDocRef.id;
      this.blogData = {
        title: 'New Blog Title',
        author: 'Author Name',
        publishDate: new Date().toISOString().split('T')[0],
        blocks: []
      };
      this.save();
    },
    addBlock() {
      if (['text', 'image', 'video'].includes(this.selectedBlockType)) {
        this.blogData.blocks.push({ type: this.selectedBlockType });
      }
    },
    deleteBlock(index) {
      this.blogData.blocks.splice(index, 1);
    },
    async save() {
      if (state.blogIndex !== undefined && state.blogIndex.trim() !== '') {
        const blogData = {
          title: this.blogData.title,
          author: this.blogData.author,
          publishDate: this.blogData.publishDate,
          blocks: this.blogData.blocks
        };

        try {
          await setDoc(doc(firestore, 'blog-collection', state.blogIndex), blogData);
          console.log('Blog data saved successfully');
        } catch (error) {
          console.error('Error saving blog data:', error);
        }
      } else {
        console.error('blogIndex is undefined or invalid');
      }
    },
    publish() {
      // Publish logic here
    },
    preview() {
      // Preview logic here
    },
    getComponentType(type) {
      switch (type) {
        case 'image':
          return 'BlockImageComponent';
        case 'video':
          return 'BlockVideoComponent';
        default:
          return 'BlogTextComponent';
      }
    }
  },
  created() {
    this.fetchBlogData();
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
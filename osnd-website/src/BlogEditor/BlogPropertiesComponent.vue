<template>
  <div class="editor-controls">
    <button @click="addBlock">+<i class="fas fa-plus"></i></button>
    <select class="block-select" v-model="selectedBlockType">
      <option value="text">Text</option>
      <option value="image">Image</option>
      <option value="video">Video</option>
    </select>
    <button class="button" @click="saveBlog">Save</button>
    <button class="button" @click="publish">Publish</button>
    <button class="button" @click="preview">Preview</button>
  </div>
  <div>
    <input v-model="blogData.title" placeholder="Blog Title" id="blog-title" class="blog-properties-text"></input>
  </div>
  <div>
    <input v-model="blogData.author" placeholder="Blog Author" id="blog-author" class="blog-properties-text"></input>
  </div>
  <label class="date-text">Publish Date</label>
  <input class="date-box" type="date" v-model="blogData.publishDate" date id="date"></input>
  <div class="blocks">
    <component
      v-for="(block, index) in blogData.blocks"
      :key="index"
      :is="getComponentType(block.type)"
    />
  </div>
</template>

<script>
import BlockTextComponent from '../BlogEditor/BlockTextComponent.vue';
import BlockImageComponent from '../BlogEditor/BlockImageComponent.vue';
import BlockVideoComponent from '../BlogEditor/BlockVideoComponent.vue';

import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '@/main.js';

export default {
  components: {
    BlockTextComponent,
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
    addBlock() {
      if (['text', 'image', 'video'].includes(this.selectedBlockType)) {
        this.blogData.blocks.push({ type: this.selectedBlockType });
      }
    },
    deleteBlock(index) {
      this.blogData.blocks.splice(index, 1);
    },
    getComponentType(type) {
      switch (type) {
        case 'image':
          return 'BlockImageComponent';
        case 'video':
          return 'BlockVideoComponent';
        default:
          return 'BlockTextComponent';
      }
    },
    async saveBlog() {
      try {
        const docRef = await addDoc(collection(firestore, 'blogs'), this.blogData);
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  },
  created() {
    
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
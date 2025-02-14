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
    <div class="blocks">
      <BlogBlockComponent v-for="(block, index) in blocks" :key="index" :block="block" />
    </div>
  </template>
  
  <script>
  import BlogBlockComponent from './BlogBlockComponent.vue';
  
  export default {
    components: {
      BlogBlockComponent
    },
    data() {
      return {
        selectedBlockType: 'text',
        blocks: []
      };
    },
    methods: {
      addBlock() {
        if (this.selectedBlockType === 'text') {
          this.blocks.push({ type: this.selectedBlockType });
        }
      },
      save() {
        // Save logic here
      },
      publish() {
        // Publish logic here
      },
      preview() {
        // Preview logic here
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
  </style>
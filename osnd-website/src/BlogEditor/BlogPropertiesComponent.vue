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
    <input v-model="text" placeholder="Blog Title" id="block-text" class="blog-properties-text"></input>
    <input v-model="text" placeholder="Blog Author" id="block-text" class="blog-properties-text"></input>
  </div>
  <label class="date-text">Publish Date</label>
  <input class="date-box" type="date" v-model="selectedDate" date id="date"></input>
  <div class="blocks">
    <component
      v-for="(block, index) in blocks"
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

export default {
  components: {
    BlogTextComponent,
    BlockImageComponent,
    BlockVideoComponent
  },
  data() {
    return {
      selectedBlockType: 'text',
      blocks: []
    };
  },
  methods: {
    addBlock() {
      if (['text', 'image', 'video'].includes(this.selectedBlockType)) {
        this.blocks.push({ type: this.selectedBlockType });
      }
    },
    deleteBlock(index) {
      this.blocks.splice(index, 1);
    },
    save() {
      const blogData = {
        title: this.text,
        author: this.text,
        publishDate: this.selectedDate,
        blocks: this.blocks
      };

      database.ref('blogs').push(blogData)
        .then(() => {
          alert('Blog saved successfully!');
        })
        .catch((error) => {
          console.error('Error saving blog:', error);
        });
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
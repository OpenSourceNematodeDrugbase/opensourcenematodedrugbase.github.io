<template>

<div>
    <button class="button" @click="deleteBlock">-</button>
</div>

<div class="block-items">
    <input placeholder="Image URL" id="block-text" class="block-textarea"></input>
</div>
    
</template>
    
<script>
export default {
  props: ['block'],
  methods: {
    deleteBlock() {
      this.$emit('delete-block', this.block);
    }
  }
};
</script>
    
    <style>
    
    .block-items {
        margin-top: 20px;
        background-color: rgb(239, 239, 239);
        min-height: 50px;
        padding: 30px; /* Adjust padding to add space on the width */
        padding-left: 50px; /* Add padding to the left */
        padding-right: 50px; /* Add padding to the right */
    }
    
    .block-textarea {
        min-width: 800px;
        min-height: 10px;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        text-align: left;
    }
    
    .block-header-text {
        min-width: 800px;
        min-height: 10px;
        font-size: 24px;
        font-family: Arial, Helvetica, sans-serif;
    }
    
    .item-label {
        margin-right: 710px;
        margin-bottom: -0.05px;
    }
    
    .button {
        margin-left: 770px;
        margin-top: 40px;
    }
    
    </style>
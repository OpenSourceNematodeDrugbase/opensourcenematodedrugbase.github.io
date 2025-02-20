<template>

<button class="button" @click="deleteBlock">-</button>

<div class="block-items">
    <h4 class="item-label">Header Text</h4>
    <textarea v-model="block.content" id="block-text" class="block-header-text"></textarea>
    <h4 class="item-label">Text Content</h4>
    <textarea v-model="block.content" id="block-text" class="block-textarea"></textarea>
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
    min-height: 500px;
    padding: 30px; /* Adjust padding to add space on the width */
    padding-left: 50px; /* Add padding to the left */
    padding-right: 50px; /* Add padding to the right */
    justify-self: center;
}

.block-textarea {
    min-width: 800px;
    min-height: 250px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    resize: vertical; /* Allow only vertical resizing */
}

.block-header-text {
    min-width: 800px;
    min-height: 10px;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    resize: vertical; /* Allow only vertical resizing */
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
<template>

<div class="block-items">
    <button class="button" @click="deleteBlock">-</button>
    <h4 class="item-label">Header Text</h4>
    <textarea v-model="text" id="block-text" class="block-header-text"></textarea>
    <h4 class="item-label">Text Content</h4>
    <textarea v-model="text" id="block-text" class="block-textarea"></textarea>
</div>

</template>

<script>

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
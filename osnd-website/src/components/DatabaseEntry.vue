<script>
export default {
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="entry-details">
    <h2>{{ entry.name }}</h2>
    <!-- Add more fields as needed -->
  </div>
</template>

<style scoped>
.entry-details {
  padding: 20px;
  border: 1px solid #ddd;
  border-color: black;
  border-radius: 10px;
  margin: 10px;
  width: 300px;
}
</style>
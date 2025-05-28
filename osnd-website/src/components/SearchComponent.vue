<script>
import { ref, watch } from 'vue';

export default {
  props: {
    tValue: String, // optional initial value
  },
  emits: ['text-changed'],
  setup(props, { emit }) {
    const searchQuery = ref(props.tValue || '');

    watch(searchQuery, (newValue) => {
      emit('text-changed', newValue);
    });

    return {
      searchQuery,
    };
  },
};
</script>

<template>
  <div class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search drug targets..."
      class="search-input"
      autocomplete="off"
      spellcheck="false"
    />
  </div>
</template>

<style scoped>
.search-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 0 0px;
  display: flex;
  justify-content: center;
}

.search-input {
  width: 100%;
  font-size: 18px;
  padding: 14px 20px;
  border: 2px solid #007bff;
  border-radius: 30px;
  outline: none;
  transition: border-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
}

.search-input::placeholder {
  color: #a0a0a0;
}

.search-input:focus {
  border-color: #0056b3;
  box-shadow: 0 6px 12px rgba(0, 86, 179, 0.4);
}
</style>

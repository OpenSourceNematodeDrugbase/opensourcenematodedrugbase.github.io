<script>
import { ref, watch } from 'vue';

export default {
  props: {
    tValue: String, // Initial value if needed
  },
  emits: ['text-changed'],
  setup(props, { emit }) {
    const searchQuery = ref(props.tValue || '');

    // Watch for changes and emit event
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
    <img class="image header-img" src="@/assets/joshua-sortino-LqKhnDzSF-8-unsplash.jpeg" alt="USND">
    <div class="search-overlay">
      <p class="search-text">Browse Resources</p>
      <div class="search-box-container">
        <input
          type="text"
          id="search-box"
          v-model="searchQuery"
          placeholder="Search..."
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.search-container {
  position: relative;
  height: 500px;
  margin: 0 10%;
}

.search-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.search-text {
  font-size: 24px;
  color: #fff;
  background: rgba(0, 0, 0, 0.29);
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

#search-box {
  padding: 10px 20px;
  font-size: 32px;
  width: 100%;
  max-width: 1500px;
  border: 2px solid #fff;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
}

@media screen and (max-width: 1000px) {
  .search-overlay {
    width: 100%;
  }
  #search-box {
    width: 80%;
    font-size: 4vw;
  }
  .search-text {
    font-size: 3vw;
  }
}
</style>

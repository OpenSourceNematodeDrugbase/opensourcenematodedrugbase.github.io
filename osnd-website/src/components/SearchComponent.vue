<script>
import { ref, watch, onMounted, onUnmounted } from 'vue';

export default {
  props: {
    tValue: String, // Initial value if needed
  },
  emits: ['text-changed', 'filter-changed'],
  setup(props, { emit }) {
    const searchQuery = ref(props.tValue || '');
    const filterSearch = ref('');
    const isOpen = ref(false);
    const items = ref([
      "Any",
      "Relevant Literature",
      "Proteins & Enzymes",
      "Drug Targets"
    ]);

    const selectedIndex = ref(-1);

    // Watch for changes and emit events
    watch(searchQuery, (newValue) => {
      emit('text-changed', newValue);
    });

    watch(filterSearch, (newFilter) => {
      emit('filter-changed', newFilter);
    });

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
      if (isOpen.value) selectedIndex.value = -1; // Reset index when opening
    };

    const selectItem = (item) => {
      filterSearch.value = item; // Update filter selection
      isOpen.value = false;
    };

    const handleKeyDown = (event) => {
      if (!isOpen.value) return;

      if (event.key === "ArrowDown") {
        selectedIndex.value = (selectedIndex.value + 1) % items.value.length;
      } else if (event.key === "ArrowUp") {
        selectedIndex.value = (selectedIndex.value - 1 + items.value.length) % items.value.length;
      } else if (event.key === "Enter" && selectedIndex.value >= 0) {
        selectItem(items.value[selectedIndex.value]);
      }
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    });

    return {
      searchQuery,
      filterSearch,
      isOpen,
      items,
      toggleDropdown,
      selectItem,
      selectedIndex,
    };
  },
};
</script>

<template>
  <div class="search-container">
    <img class="image header-img" src="@/assets/joshua-sortino-LqKhnDzSF-8-unsplash.jpeg" alt="USND">
    <div class="search-overlay">
      <p class="search-text">Browse Resources</p>

      <div class="search-box-container dropdown-container">
        <input
          type="text"
          id="search-box"
          v-model="searchQuery"
          placeholder="Search..."
          @focus="isOpen = false"
        />

        <div class="dropdown">
          <button @click="toggleDropdown" class="dropdown-button">
            {{ filterSearch || "Filter Search" }}
          </button>
          <ul v-if="isOpen" class="dropdown-menu">
            <li
              v-for="(item, index) in items"
              :key="index"
              :class="{ 'selected': selectedIndex === index }"
              @click="selectItem(item)">
              {{ item }}
            </li>
          </ul>
        </div>
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

.search-box-container {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 600px;
}

#search-box {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  border: 2px solid #fff;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 250px;
}

.dropdown-button {
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 250px;
  background: white;
  border: 1px solid #ddd;
  list-style: none;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 20;
  max-height: 200px;
  overflow-y: auto;
}

.dropdown-menu li {
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown-menu li:hover {
  background-color: #dadada;
  color: #000000;
}

/* Responsive */
@media screen and (max-width: 1000px) {
  .search-overlay {
    width: 100%;
  }
  #search-box {
    width: 80%;
    font-size: 3vw;
 
  }
  .search-text {
    font-size: 3vw;
  }
  .dropdown-button {
    font-size: 3vw;
    width: 75%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 5px;
  }
 
}
</style>

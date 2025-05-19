<template>
  <div>
    <button class="toggle-button" @click="showFilters = !showFilters">
      {{ showFilters ? 'Hide Filters' : 'Show Filters' }}
    </button>

    <transition name="fade-expand">
      <div v-if="showFilters" class="filters-grid">
        <!-- Similar Protein Filter -->
        <div class="filter-group">
          <label for="proteinFilter">Similar Protein in Humans:</label>
          <select id="proteinFilter" v-model="localFilters.similarProtein">
            <option value="">All</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <!-- Has Known Protein Domain -->
        <div class="filter-group">
          <label for="domainFilter">Has Known Protein Domain:</label>
          <select id="domainFilter" v-model="localFilters.hasKnownDomain">
            <option value="">All</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <!-- Has Gene Ontology Functional Annotation -->
        <div class="filter-group">
          <label for="goFilter">Has Gene Ontology Functional Annotation:</label>
          <select id="goFilter" v-model="localFilters.hasGOAnnotation">
            <option value="">All</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  props: {
    filters: {
      type: Object,
      required: true,
    },
  },
  emits: ["update:filters"],
  data() {
    return {
      showFilters: false,
      localFilters: { ...this.filters },
    };
  },
  watch: {
    localFilters: {
      deep: true,
      handler(newFilters) {
        this.$emit("update:filters", newFilters);
      },
    },
  },
};
</script>

<style scoped>
.filter-box {
  background-color: #f9f9f9;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  margin: 20px auto;
  max-width: 1000px;
  border: 1px solid #e0e0e0;
}

.toggle-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: background-color 0.2s;
}

.toggle-button:hover {
  background-color: #0056b3;
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: Arial, sans-serif;
}

.filter-group label {
  font-weight: 500;
  font-size: 14px;
  color: #444;
}

.filter-group select {
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s;
}

.filter-group select:focus {
  border-color: #007bff;
  outline: none;
}

/* Animation */
.fade-expand-enter-active,
.fade-expand-leave-active {
  transition: all 0.3s ease;
}

.fade-expand-enter-from,
.fade-expand-leave-to {
  opacity: 0;
  transform: scaleY(0.95);
  max-height: 0;
  overflow: hidden;
}

.fade-expand-enter-to,
.fade-expand-leave-from {
  opacity: 1;
  transform: scaleY(1);
  max-height: 1000px;
}
</style>

<template>
  <div>
    <button class="toggle-button" @click="showFilters = !showFilters">
      {{ showFilters ? 'Hide Filters' : 'Show Filters' }}
    </button>

    <transition name="fade-expand">
      <div v-if="showFilters" class="filters-grid">
        <!-- Similar Protein Filter -->
        <div class="filter-group">
          <label for="proteinFilter">Is Enzyme:</label> <!--Is part e section -->
          <select id="proteinFilter" v-model="localFilters.similarProtein">
            <option value="">All</option>
            <option value="true">True</option> <!--If True then show data that is false in the data-->
            <option value="false">False</option> <!--Vice versa thing here-->
          </select>
        </div>

        <!-- Has Known Protein Domain -->
        <div class="filter-group">
          <label for="domainFilter">Has Human Orthologue </label>
          <select id="domainFilter" v-model="localFilters.hasKnownDomain">
            <option value="">All</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <!-- Has Gene Ontology Functional Annotation -->
        <div class="filter-group">
          <label for="goFilter">Is Kinase:</label>
          <select id="goFilter" v-model="localFilters.hasGOAnnotation">
            <option value="">All</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <!-- Has Paralogue Stable ID -->
        <div class="filter-group">
          <label for="goFilter">Has Nuclear Receptor:</label>
          <select id="goFilter" v-model="localFilters.hasParalogueGeneStableID">
            <option value="">All</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <!-- Is Linked to Larval Development -->
        <div class="filter-group">
          <label for="goFilter">Has Ion Channel:</label>
          <select id="goFilter" v-model="localFilters.hasLaravalDevelopmentLink">
            <option value="">All</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <!-- Has Similar % Identity -->
        <div class="filter-group">
          <label for="goFilter">Has GPCR domains:</label>
          <select id="goFilter" v-model="localFilters.hasSimilarIdentity">
            <option value="">All</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>

        <!-- Has Enzymatic Activity -->
        <div class="filter-group">
          <label for="goFilter">Has Privileged Target Family:</label>
          <select id="goFilter" v-model="localFilters.hasEnzymaticActivity">
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
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin: 16px auto;
  max-width: 1000px;
  border: 1px solid #e0e0e0;
}

.toggle-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: background-color 0.2s;
}

.toggle-button:hover {
  background-color: #0056b3;
}

.filters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 8px; /* tighter spacing between filters */
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 2px; /* tighter label-select spacing */
  font-family: Arial, sans-serif;
  font-size: 12px;
}

.filter-group label {
  font-weight: 500;
  font-size: 12px;
  color: #444;
}

.filter-group select {
  padding: 5px 7px;
  font-size: 12px;
  border-radius: 4px;
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



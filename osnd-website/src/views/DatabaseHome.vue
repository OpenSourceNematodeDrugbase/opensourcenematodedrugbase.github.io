<template>
  <div class="intro-banner">
    <h1>The Nematode Drug Base</h1>
    <p class="intro-text">A comprehensive resource for researchers, healthcare professionals, and policymakers focused on understanding the critical role that nematodes play in neglected diseases.</p>
  </div>

  <SearchComponent v-model="InputValueValue"/>

  <button  @click="handleClick" id="FilterButton"><img src="../assets/Filter Button.png"></button> <!--Replace when new design available-->
  <Filter/> <!--Should be visibule only when button is pressed-->
  <select id="SortBy">
    <option value="1">Featured</option> 
    <option value="2">Recently Added</option> 
    <option value="3">Option 3</option> 
  </select>

  <div class="database-home-container">
    <DatabaseEntry v-for="entry in filteredEntries" :key="entry.id" :entry="entry" /> <!--Outputs filtered data onto the screen-->
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore'; // Firestore imports
import SearchComponent from '@/components/SearchComponent.vue';
import DatabaseEntry from '@/components/DatabaseEntry.vue';
import Filter from '@/components/filter.vue';

const InputValueValue = ref("");  // This is bound to the child component's input
export default {
  components: {
    SearchComponent,
    DatabaseEntry,
    Filter,
  },
  methods:{
      handleClick()
      {
        console.log(InputValueValue.value); //Outputs value of search bar in console
      }
    },
  setup() {
    const db = getFirestore(); // Initialize Firestore
    const entries = ref([]); // Reactive variable to store Firestore entries

    // Fetch data from Firestore
    const fetchEntries = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'test-collection')); // Replace 'entries' with your Firestore collection name
        entries.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error fetching Firestore data:', error);
      } 
    };

    onMounted(() => {
      fetchEntries(); // Fetch data when the component mounts
    });

    return {
      entries,
      searchString: '1', // The string to match
    };
    
  },
  computed: { //Filter out specific results to only show what is in the search
    filteredEntries() {
      console.debug(InputValueValue);
      return this.entries.filter(entry => {
        return entry.entry && entry.entry.includes(this.searchString);
      });
    }
  }
};
</script>

<style scoped>
.database-home-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  max-width: fit-content;
}
#FilterButton {
  float: left;
  width: 5%;
}
#FilterButton img{
  width: 100%;
}
#SortBy{
  width: 10%;
  font-size: 25px;
 }
@media screen and (max-width:1000px) { 
  #FilterButton {
  float: none;
}
#SortBy{ 
 padding-right: 1px;
 font-size: 3vw;
} 
}

</style>
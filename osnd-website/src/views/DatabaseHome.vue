<template>
  <div class="intro-banner">
    <h1>The Nematode Drug Base</h1>
    <p class="intro-text">A comprehensive resource for researchers, healthcare professionals, and policymakers focused on understanding the critical role that nematodes play in neglected diseases.</p>
  </div>

  <SearchComponent @text-changed="updatedValue"/>

  <button  @click="handleClick" id="FilterButton"><img src="../assets/Filter Button.png"></button> <!--Replace when new design available-->
  <Filter v-if="filterActivated"/> <!--Should be visibule only when button is pressed-->
  <select id="SortBy">
    <option value="1">Featured</option> 
    <option value="2">Recently Added</option> 
    <option value="3">Option 3</option> 
  </select>

  <div class="database-home-container" >
    <DatabaseEntry v-for="entry in entries" :key="entry.id" :entry="entry" /> <!--Outputs filtered data onto the screen-->
  </div>
</template>

<script>
////
import { ref, onMounted, toValue } from 'vue';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore'; // Firestore imports
import SearchComponent from '@/components/SearchComponent.vue';
import DatabaseEntry from '@/components/DatabaseEntry.vue';
import Filter from '@/components/filter.vue';
import { VueFire, VueFireAuth } from 'vuefire'
import { useCollection } from 'vuefire'

const entries = useCollection(collection(db, 'test-collection'))

export default {
  components: { //Components used
    SearchComponent, 
    DatabaseEntry,
    Filter,
  },
  data () {
    return {
      filterActivated : false //Is the filter page showing on the screen
    }
  },

  methods:{
      handleClick() //Runs when the user presses the filter button
      {
         console.log("hi")
         this.filterActivated = !this.filterActivated;
      },
      updatedValue(event) //Runs when the text field has changed
      {
        console.log("Update Recieved");
        console.log(event);
      }
    },
  
};

////
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
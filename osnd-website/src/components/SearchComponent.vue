

<script setup lang="ts">
//https://www.youtube.com/watch?v=Jqo79GG5ONE Link to video tutorial 
import { computed } from 'vue';
const props = defineProps<{
  InputValue: string;
}>();

const emit = defineEmits(["update:InputValue"]); //Is this like an event listener 

const InputValueValue = computed({ //So this is like get set in c#
  get() {
    return props.InputValue;
  },
  set(value) {
    emit("update:InputValue", value);
  }
});

</script>

<template>

<div class="search-container">
    <img class="image header-img" src="@/assets/joshua-sortino-LqKhnDzSF-8-unsplash.jpeg" alt="USND">
    <div class="search-overlay">
      <p class="search-text">Browse 999 Proteins, 999 Diseases</p>
      <div class="search-box-container">
        <input type="text" 
        id="search-box" 
        placeholder="Search..."
        v-model="InputValueValue" />
      </div>
    </div>
  </div>

</template>
<style scoped>
.header-img {
  width: 100%;
  height: 500px; /* Adjust height as needed */
  object-fit: cover; /* Crop the image to cover the area */
}
.search-container {
  position: relative; /* This allows positioning of elements inside it */
  height: 500px; /* Keep the search container height consistent with the image height */
  margin-right: 10%;
  margin-left: 10%;
}

.search-overlay {
  position: absolute; /* Absolute position for overlaying the search box */
  top: 50%; /* Center the overlay vertically */
  left: 50%; /* Center the overlay horizontally */
  transform: translate(-50%, -50%); /* Adjust for exact centering */
  width: 100%; /* Set the width of the search box */
  text-align: center; /* Center the content of the overlay */
  display: flex;
  flex-direction: column; /* Stack the text and input vertically */
  justify-content: center; /* Center content vertically within the overlay */
  align-items: center; /* Center content horizontally */
  z-index: 10; /* Ensure the search box is above the image */
}

/* Styling for the search text */
.search-text {
  font-size: 24px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.29); /* Transparent background */
  padding: 10px 20px;
  margin-bottom: 20px; /* Space between text and search box */
  display: inline-block; /* Fit the background to the text width */
  border-radius: 10px;
}

/* Styling for the search box */
#search-box {
  padding: 10px 20px;
  font-size: 32px;
  width: 100%; /* Full width of the search overlay */
  max-width: 1500px;
  border: 2px solid #fff;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8); /* Transparent background */
}
@media screen and (max-width:1000px) { 
  .search-overlay {
    width: 100%;
  }
  .search-box {
    width: 80%; /* Full width of the search overlay */
    font-size: 4vw;
  }
  .search-text{
    font-size: 3vw;
  }
}
</style>

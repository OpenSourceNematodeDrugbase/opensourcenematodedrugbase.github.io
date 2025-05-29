<template>
    <a @click="scrollToTop"> 
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width = "50px" height="50px" fill="black"><path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"/></svg> <!--Icon from googel fonts-->
        </a>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); //Brings back to top https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
}
</script>

<style scoped>
a {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 2;
   
}
svg{
    background-color: #cee1f2;
    border-radius: 14%;
    box-shadow: 2px 4px 3px grey;
}

</style>
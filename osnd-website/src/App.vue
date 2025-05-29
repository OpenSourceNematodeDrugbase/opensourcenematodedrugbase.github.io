

<template>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  </head>
  <div id="app">

      <!-- Header that appears across all pages -->
      <header>
        <HeaderComponent />
      </header>
 
      <!-- Main content area where the router-view will display the active route's component -->
      <main>
        <router-view />
      </main>
      <!-- Footer that appears across all pages -->
      <footer>
        <FooterComponent />
      </footer>
      <BackToTop/>
  </div>
</template>

<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HeaderComponent from './components/layout/HeaderComponent.vue'
  import FooterComponent from './components/layout/FooterComponent.vue'
  import { isMenuOpened } from './components/Modules/changeScreenSize'
  import BackToTop from './components/layout/BackToTop.vue';
  const openMenu = isMenuOpened();


</script>
<style>
  /* Global styles can go here */

  #app {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    color: #333;
    text-align: center;
  }
  
  main {
    padding: 20px;
  }
  .intro-banner h1 {
    font-weight: 700;
  }

  body {
  font-family: 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f7f6;
  color: #333;
  text-wrap: balance;
}

h1, h2 {
  color: #2a2a2a;
  font-weight: 600;
  line-height: 1.4;
  font-family: 'Helvetica Neue', sans-serif;
}

.intro-banner {
  text-align: center;
  padding: 3rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}

.intro-text {
  font-size: 24px;
  max-width: 950px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Header section styling */
.header-section {
  margin: 0 auto;
  max-width: 1050px;
}

.header-section h2 {
  font-size: 42px;
  margin: 25px, 0px;
}

.section-text {
  font-size: 32px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

/* Image styling */
.image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
}

  @media screen and (max-width:1000px) {
    .section-text
    {
      font-size: 3.9vw !important;
    }
    .image 
    {
      width: 80% !important;
    }
    .intro-text{
      text-align: center;
      font-size: 2.87vw !important;
    }
    .intro-banner h1{
    font-size: 3.7vw;
    
   }
  }
</style>

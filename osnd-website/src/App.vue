<script>
  import { RouterLink, RouterView } from 'vue-router'

  import HeaderComponent from './components/layout/HeaderComponent.vue'
  import FooterComponent from './components/layout/FooterComponent.vue'
  import hamburgerMenu from './components/hamburgerMenu.vue'
  
  export default 
  {
    name: 'App',
    components: 
    {
      HeaderComponent,
      FooterComponent,
      hamburgerMenu
    },
  }

</script>

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
      
      <hamburgerMenu/> <!--For mobile users-->
      <!-- Main content area where the router-view will display the active route's component -->
      <main>
        <router-view />
      </main>
      <!-- Footer that appears across all pages -->
      <footer>
        <FooterComponent />
      </footer>
  </div>
</template>


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
      font-size: 4.3vw !important;
    }
    .intro-banner h1{
    font-size: 5.2vw;
    
   }
  }
</style>

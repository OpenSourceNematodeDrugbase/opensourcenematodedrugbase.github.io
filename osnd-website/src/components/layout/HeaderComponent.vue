<template>
    <header class="header">
      <div class="container">
        <router-link to="/">
          <img class="header-logo" src="@/assets/OSNDB avatar_7.png" alt="Logo">
        </router-link>
        <h1 class="logo">Open-Source Nematode DrugBase Project</h1>
        <nav class="nav">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/funding">Funding</router-link></li>
            <!-- <li><router-link to="/blog">Blog</router-link></li> -->
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
  </template>

  <script>
  export default {
    name: 'HeaderComponent',
  };
  </script>
  
  <style scoped>
  .header {
    background-color: hsla(207, 95%, 85%, 0.671);
    padding: 20px;
    color: white;
    border-radius: 20px;
  }
  .logo {
    font-size: 1.5em;
    font-weight: bold;
    color: #000000;
    text-shadow: 0.75px 0.75px 0.75px rgb(255, 255, 255), -0.75px -0.75px 0px rgb(255, 255, 255), 0.75px -0.75px 0px rgb(255, 255, 255), -0.75px 0.75px 0px rgb(255, 255, 255);
  }
  
  .nav ul{
    gap: 30px;
    list-style: none;
  }
  
  .nav a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-weight:bold;
    font-size: 24px;
  }
  
  .nav a:hover {
    text-decoration: underline;
  }

  .header-logo {
    width: 100px; /* Sets the width to 100px */
    height: auto; /* Maintains the aspect ratio */
  }

  li {
    padding-bottom: 15px;
  }
 
  @media screen and (min-width:1100px) {
    .nav ul {
    display: flex;
    align-items: center;
  }
  li {
    padding-bottom: 0%; /*Remove Spacing */
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo
  {
    position: absolute;
    left: 150px;
  }
  }

</style>  
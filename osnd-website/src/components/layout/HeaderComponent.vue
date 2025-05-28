<template>
    <header class="header">
      <div class="container">
        <router-link to="/">
          <img class="header-logo" src="@/assets/OSNDB avatar_7.png" alt="Logo">
        </router-link>
        <h1 class="logo">Open-Source Nematode Drug Base Project</h1>
        <nav class="nav">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/nematode-drugbase">Nematode Drugbase</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/funding">Funding</router-link></li>
            <li><router-link to="/blog-dashboard">Blog</router-link></li>
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
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
  }
  
  .nav a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-weight:bold;
    font-size: 17px
  }
  
  .nav a:hover {
    text-decoration: underline;
  }

  .header-logo {
    width: 100px; /* Sets the width to 100px */
    height: auto; /* Maintains the aspect ratio */
  }

  li {
    padding-top: 15px;
  }
 
  @media screen and (min-width:1441px) { /*Seen on Laptop*/
    .nav ul {
    
    align-items: center;
  }
  li {
    padding-bottom: 0%; /*Remove Spacing */
  }
  .nav a{
    font-size: 24px;
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
  @media screen and (max-width:613px) { /*Seen on smaller screens*/
    .nav ul{
      display: initial  ;
    }
  }

</style>  
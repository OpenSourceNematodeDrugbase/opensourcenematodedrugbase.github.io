<template>
      <div class="container">
        <nav class="nav">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/nematode-drugbase">Nematode Drugbase</router-link></li>
            <li><router-link to="/blog-dashboard">Blog</router-link></li>
            <li><router-link to="/funding">Funding</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
      </div>
      <a id="UOWLogo"><img src="../assets/UoW_Logo.png">></a>
  </template>

<style scoped>
  .nav ul{
    gap: 30px;
    list-style: none;
    justify-content: center;
    align-items: center;
    display: initial ;
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

  li {
    padding-top: 15px;
  }
  .container {

    display: flex;
    justify-content: center;

    background-color: hsla(207, 95%, 85%, 1);
    /**/
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
  }

</style> 
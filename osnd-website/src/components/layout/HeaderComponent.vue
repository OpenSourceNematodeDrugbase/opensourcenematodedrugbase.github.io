<template>
    <header class="header">
      <div class="container">
        <router-link to="/">
        <img class="header-logo" src="@/assets/ONDB logo.png" alt="Logo">
        </router-link>
        <h1 class="logo">Open Nematode Drug Base</h1>
        <nav class="nav" v-if="BigScreen">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/nematode-drugbase">Nematode Drugbase</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/funding">Funding</router-link></li>
            <li><router-link to="/blog-dashboard">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>
        <button v-if="!BigScreen" @click="phoneMenuOpened">
          <img style="width: 50px;" src="../../assets/Hamburger.svg">
        </button>
      </div>
    </header>
  </template>

<script setup>
import { findScreenSize } from '../Modules/changeScreenSize'; //Phone size JS
import { phoneMenuOpened } from '../Modules/changeScreenSize'; //Button Js 

  const {BigScreen} = findScreenSize(); //Returns a bool from changeScreenSize.js that says if the screen is big or small

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
    .logo
    {
      font-size: 4.2vw;
    }
  }

</style>  
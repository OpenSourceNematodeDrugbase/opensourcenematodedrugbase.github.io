<template>
    <header class="header">
      <div class="container">
        <router-link to="/" class="LogoAnchor">
        <img class="header-logo" src="@/assets/ONDB logo.png" alt="Logo">
        </router-link>
        <h1 class="logo">Open Nematode Drug Base</h1>
        <!--Desktop nav bar-->
        <nav class="nav" v-if="BigScreen">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/nematode-drugbase">Nematode Drugbase</router-link></li>
            <li><router-link to="/blog-dashboard">Blog</router-link></li>
            <li><router-link to="/funding">Funding</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </nav>

     
      
        <button v-if="!BigScreen" @click="phoneMenuOpened" id="HamburgerMenuBtn">
          <img style="width: 50px;" src="../../assets/Hamburger.svg" id="HamburgerImg">
        </button>
      </div>
    </header>
      <!--For mobile users-->
    <div class="mobileBackground" v-if="openMenu">
    </div>
    <div v-if="openMenu">
      <nav class="navMobile">
      <ul>
        <li><router-link to="/" @click.native="closePage">Home</router-link></li>
        <li><router-link to="/nematode-drugbase" @click.native="closePage">Nematode Drugbase</router-link></li>
        <li><router-link to="/blog-dashboard" @click.native="closePage">Blog</router-link></li>
        <li><router-link to="/funding" @click.native="closePage">Funding</router-link></li>
        <li><router-link to="/about"@click.native="closePage">About</router-link></li>
        <li><router-link to="/contact"@click.native="closePage">Contact</router-link></li>
      </ul>
    </nav>
    <div class="BottomLinks">
      <a id="UOWLogo" href="https://www.westminster.ac.uk/"> <img src="../../assets/UoW_Logo.png"> </a>
      <div class="PrivacyAndLogin">
        <a id ="SignIn">Sign in</a>
        <li id=Privacy><router-link to="/privacy-policy" "@click.native="closePage">Privacy Policy</router-link></li>
      </div>
    </div>
    
    </div>
  </template>

<script setup>
import { findScreenSize } from '../Modules/changeScreenSize'; //Phone size JS
import { phoneMenuOpened } from '../Modules/changeScreenSize'; //Button Js 
 import { isMenuOpened } from '../Modules/changeScreenSize' //Button Pressed?

  const {BigScreen} = findScreenSize(); //Returns a bool from changeScreenSize.js that says if the screen is big or small

  const openMenu = isMenuOpened();

  function closePage()
  {
    phoneMenuOpened();
  }
</script>
  
  <style scoped>
  .header {
    background-color: hsla(207, 95%, 85%, 0.671);
    padding: 20px;
    color: white;
    border-radius: 20px;
    position: relative;
    z-index: 2;
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
    padding-top: 7px;
  }
  
  .nav a , .navMobile a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-weight:bold;
    font-size: 17px
  }
  
  .nav a:hover ,  .navMobile a:hover {
    text-decoration: underline;
  }

  .navMobile li {
    font-size: 3.7vw;
  }
  .header-logo {
    width: 100px; /* Sets the width to 100px */
    height: auto; /* Maintains the aspect ratio */
  }

  li {
    padding-top: 15px;
  }

  .navMobile ul{
    gap: 30px;
    list-style: none;
    justify-content: center;
    align-items: center;
    display: initial ;
    font-size: 3.0vw;
  }
  .navMobile {
    position:relative;
    display: flex;
    flex-direction: column;
    z-index: 3;
    justify-content: center;
  }
  .mobileBackground {
    background-color: rgb(201, 228, 251);
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
  }
  .BottomLinks {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 3;
    
    /*Not sure why this is broken */
  }
  #UOWLogo {
    width: 100%;
    height: auto;
  }
  .PrivacyAndLogin{
    font-weight: bold;
    list-style: none;
    padding: 10px, 10px;
    text-align: center; /* Right justify the text */
    text-decoration: none;
  }
  #SignIn {
    float: left;
    padding-left: 20px;
  }
  #Privacy {
    float: Right;
    padding-right: 20px;
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
    align-items: left;
  }

  .logo
  {
    position: absolute;
    left: 150px;
  }
  }
  @media screen and (max-width:767px) { /*Seen on smaller screens*/
    .logo{
      font-size: 3.7vw;
      display: flex;
    }
    .container{
      display: flex;
      text-align: left;
    }
    .header-logo {
      text-align: left;
      width: 100%;
    }
    .LogoAnchor {
      text-align: left;
      width:  12%;
    }
    #HamburgerMenuBtn {
      margin-left: auto;
      background-color: transparent;
      border :none;
    }
    .header
    {
      border-radius: 0px;
    }

  }

</style>  
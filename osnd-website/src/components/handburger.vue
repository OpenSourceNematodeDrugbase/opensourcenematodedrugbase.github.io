<template>
    <header class="header">
      <div class="container">
        <router-link to="/">
        <img class="header-logo" src="@/assets/ONDB logo.png" alt="Logo">
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
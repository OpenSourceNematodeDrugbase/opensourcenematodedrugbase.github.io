<script>

  import LoginFormComponent from '../components/LoginFormComponent.vue'

  export default 
  {
    components:
    {
      LoginFormComponent
    },
  }

</script>

<template>

<div class="intro-banner">
    <h1>Login</h1>
    <p class="intro-text">Login to access more of the site's functionality.</p>
</div>

  <div class="home">
    <LoginFormComponent />
  </div>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
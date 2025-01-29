<script>

  import SignUpFormComponent from '../components/SignUpFormComponent.vue'

  export default 
  {
    components:
    {
        SignUpFormComponent
    },
  }

</script>

<template>

<div class="intro-banner">
    <h1>Sign Up</h1>
    <p class="intro-text">Sign up to access more of the site's functionality.</p>
</div>

  <div class="home">
    <SignUpFormComponent />
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
<template>
    <form @submit.prevent="submitForm" class="form-container">
      <div class="form-group">
        <label for="username"></label>
        <input
          v-model="username"
          placeholder="Username"
          type="text"
          id="username"
          required
        />
      </div>
  
      <div class="form-group">
        <label for="email"></label>
        <input
          v-model="email"
          placeholder="Email"
          type="text"
          id="email"
          required
        />
      </div>
  
      <div class="form-group">
        <label for="password"></label>
        <input
          v-model="password"
          placeholder="Password"
          type="password"
          id="password"
          required
        />
      </div>
  
      <div class="form-group">
        <label for="confirm-password"></label>
        <input
          v-model="confirmPassword"
          placeholder="Confirm Password"
          type="password"
          id="confirm-password"
          required
        />
      </div>
  
      <div class="form-group checkbox-group">
        <input
          v-model="agreeToPrivacyPolicy"
          type="checkbox"
          id="privacy-policy"
          required
        />
        <label for="privacy-policy">I agree to the <RouterLink to="/privacy-policy" target="_blank">Privacy Policy</RouterLink></label>
      </div>
  
      <!--
      
     
      <div class="form-group">
        <button @click="handleSignUp" type="submit" class="button">Sign Up</button>
      </div>
       -->
    </form>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";

  
  </script>
  
  <style scoped>
  .form-container {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  input[type="text"],input[type="password"],
  .button {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
  
  
  .checkbox-group {
    display: flex;
    align-items: center;
  }
  
  .checkbox-group input[type="checkbox"] {
    margin-right: 10px;
  }
  </style>
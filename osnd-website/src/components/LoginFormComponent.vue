<template>
  <form @submit.prevent="submitForm" class="form-container">
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

<!--
    <div class="form-group">
      <button type="submit" @click="handleLogin" class="button">Sign In</button>
      <button type="button" @click="handleSignUp" class="button">Sign Up</button>
    </div>
    -->
  </form>
</template>

<script scoped>
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

input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.button {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
}
</style>
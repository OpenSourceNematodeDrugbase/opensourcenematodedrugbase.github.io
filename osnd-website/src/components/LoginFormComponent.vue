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
        type="text"
        id="password"
        required
      />
    </div>

    <div class="form-group">
      <button type="submit" @click="handleLogin" class="button">Sign In</button>
      <button type="button" @click="handleSignUp" class="button">Sign Up</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../main.js";
import { signInWithEmailAndPassword } from "firebase/auth";

export default {
  setup() {
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const error = ref(null);

    const handleLogin = async () => {
      error.value = null; // Reset error message
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.value,
          password.value
        );
        console.log("User logged in:", userCredential.user);
        router.push("/user-dashboard"); // Redirect to dashboard
      } catch (err) {
        error.value = err.message; // Display error to the user
        console.log("Authentication failed! Error: " + error.value);
      }
    };

    const handleSignUp = async () => {
      router.push("/sign-up");
    };

    return {
      email,
      password,
      error,
      handleLogin,
      handleSignUp,
    };
  },
};
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
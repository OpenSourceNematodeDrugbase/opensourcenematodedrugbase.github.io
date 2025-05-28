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
          type="text"
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
        <label for="privacy-policy">I agree to the <a href="/privacy-policy" target="_blank">Privacy Policy</a></label>
      </div>
  
      <div class="form-group">
        <button @click="handleSignUp" type="submit" class="button">Sign Up</button>
      </div>
    </form>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import { auth } from "../main.js";
  import { createUserWithEmailAndPassword } from "firebase/auth";
  import { getFirestore, doc, setDoc } from "firebase/firestore";
  
  export default {
    setup() {
      const router = useRouter();
      const username = ref("");
      const email = ref("");
      const password = ref("");
      const confirmPassword = ref("");
      const agreeToPrivacyPolicy = ref(false);
      const error = ref(null);
      const db = getFirestore();
  
      const handleSignUp = async () => {
        error.value = null; // Reset error message
        if (password.value !== confirmPassword.value) {
          error.value = "Passwords do not match!";
          return;
        }
        if (!agreeToPrivacyPolicy.value) {
          error.value = "You must agree to the privacy policy!";
          return;
        }
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value
          );
          console.log("User signed up:", userCredential.user);
  
          // Add user to Firestore
          await setDoc(doc(db, "user-collection", userCredential.user.uid), {
            username: username.value,
            email: email.value,
            createdAt: new Date()
          });
  
          router.push("/user-dashboard"); // Redirect to dashboard
        } catch (err) {
          error.value = err.message; // Display error to the user
          console.log("Sign up failed! Error: " + error.value);
        }
      };
  
      return {
        username,
        email,
        password,
        confirmPassword,
        agreeToPrivacyPolicy,
        error,
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
  
  input[type="text"],
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
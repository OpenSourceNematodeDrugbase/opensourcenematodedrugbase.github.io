<template>
  <form @submit.prevent="submitForm">
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
      <button type="submit">Login</button>
    </div>
  </form>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../main.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

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

    const submitForm = () => {
      handleLogin();
    };

    return {
      email,
      password,
      error,
      submitForm,
    };
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
}

.form-group {
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.form-group label {
  margin-bottom: 5px;
  font-size: 18px;
}

.form-group button {
  padding: 10px 20px;
  width: auto;
  margin-top: 10px;
  align-self: center;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-size: 15px;
}

textarea {
  width: 100%;
  max-width: 400px;
  height: 150px;
  padding: 12px 20px;
  margin-top: 10px;
  box-sizing: border-box;
  resize: none;
  color: rgb(125, 125, 125);
}

@media (min-width: 768px) {
  .form-group {
    flex-direction: row;
    align-items: center;
  }

  .form-group label {
    margin-right: 20px;
    margin-left: 20px;
  }

  .form-group button {
    margin-left: 20px;
  }

  input[type="text"],
  input[type="password"] {
    margin-left: 20px;
    margin-right: 20px;
  }

  textarea {
    margin-left: 20px;
  }
}
</style>

<template>
  <div class="contact-container">
    <h1>Contact Form</h1>
    <form class="contact-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" placeholder="Your Name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" placeholder="Your Email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" placeholder="Your Message" required></textarea>
      </div>
      <button type="submit" class="submit-button">SEND</button>
    </form>
    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      successMessage: "",
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch("https://formspree.io/f/mjkkdekr", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.form),
        });

        if (response.ok) {
          this.successMessage = "Thank you for your message! We'll get back to you soon.";
          this.form = { name: "", email: "", message: "" };
        } else {
          throw new Error("Failed to send the message.");
        }
      } catch (error) {
        this.successMessage = "An error occurred. Please try again.";
        console.error(error);
      }
    },
  },
};
</script>

<style>
/* General Styling */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}

/* Contact Form Container */
.contact-container {
  max-width: 800px;
  margin: 50px auto;
  background: #ffffff;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.contact-container h1 {
  margin-bottom: 20px;
  color: #333333;
  font-size: 24px;
  font-weight: bold;
}

/* Form Styling */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.form-group label {
  margin-bottom: 5px;
  font-size: 14px;
  color: #555555;
}

.form-group input,
.form-group textarea {
  padding: 25px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 18px;
  color: #333333;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #adc0d0;
  outline: none;
  box-shadow: 0 0 5px #adc0d0;
}

textarea {
  resize: none;
  min-height: 600px;
}

/* Submit Button */
.submit-button {
  padding: 10px 20px;
  background-color: #CEE1F2;
  color: #353535;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #adc0d0;
}

/* Success Message */
.success-message {
  margin-top: 20px;
  color: #1b1b1b;
  font-size: 28px;
}
</style>
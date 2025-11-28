import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // Import the router setup


let database; // Realtime Database instance


app.mount('#app');

export {app}; // Export database instance
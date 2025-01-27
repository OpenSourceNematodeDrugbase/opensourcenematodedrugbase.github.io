    import { createApp } from 'vue'
    import App from './App.vue'
    import router from './router'  // Import the router setup

    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';
    import { getAuth } from "firebase/auth";

    const firebaseConfig = 
    {
        apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_FIREBASE_APP_ID
    };

    let firebaseApp;
    let firestore;
    let auth;

    try
    {
        console.log(import.meta.env);

        firebaseApp = initializeApp(firebaseConfig);
        firestore = getFirestore(firebaseApp);
        auth = getAuth(firebaseApp);
        console.log('Firebase initialised.');
    }
    catch (error) 
    {
        console.error('Firebase intialisation failed. Error:' + error);
    }

    const app = createApp(App);
    app.use(router);
    app.mount('#app');

    export { app, firebaseApp, firestore, auth };


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "multi-page-test.firebaseapp.com",
    projectId: "multi-page-test",
    storageBucket: "multi-page-test.appspot.com",
    messagingSenderId: "533154312631",
    appId: "1:533154312631:web:f27cdc8dde51f5869df832",
    measurementId: "G-2S8S9YHBY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
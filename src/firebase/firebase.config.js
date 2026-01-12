// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAMrp9JWDwU2l_o6yYr-aq6r7MUahoLDdg",
//     authDomain: "reactexercise-4ffe2.firebaseapp.com",
//     projectId: "reactexercise-4ffe2",
//     storageBucket: "reactexercise-4ffe2.firebasestorage.app",
//     messagingSenderId: "699112248035",
//     appId: "1:699112248035:web:16c6dc2b39eb9ac9642bd6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMrp9JWDwU2l_o6yYr-aq6r7MUahoLDdg",
    authDomain: "reactexercise-4ffe2.firebaseapp.com",
    projectId: "reactexercise-4ffe2",
    storageBucket: "reactexercise-4ffe2.firebasestorage.app",
    messagingSenderId: "699112248035",
    appId: "1:699112248035:web:16c6dc2b39eb9ac9642bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ CREATE AUTH INSTANCE
export const auth = getAuth(app);

// (optional)
export default app;
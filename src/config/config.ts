import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDc1BxjP2NC6Dc_8Vo2vklOuIWn0w7Dsto",
    authDomain: "clone-442a3.firebaseapp.com",
    projectId: "clone-442a3",
    storageBucket: "clone-442a3.appspot.com",
    messagingSenderId: "678104423593",
    appId: "1:678104423593:web:5eb7caa866d3d1de7f5db8",
    measurementId: "G-RDENQB6R5W"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAAk5YNTGD5zFmq-pDNDIRz8M-rY1Ln_MQ",
    authDomain: "cursocoderhouse.firebaseapp.com",
    projectId: "cursocoderhouse",
    storageBucket: "cursocoderhouse.appspot.com",
    messagingSenderId: "757670849718",
    appId: "1:757670849718:web:55b9865b99d9c890294a17",
    measurementId: "G-YY7B6MCXVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
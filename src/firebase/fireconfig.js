import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {firebase} from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdr35lBNheiaE0UTP8M2Gw8iNbFsNCNmc",
    authDomain: "heckaton-d992e.firebaseapp.com",
    projectId: "heckaton-d992e",
    storageBucket: "heckaton-d992e.appspot.com",
    messagingSenderId: "155018749910",
    appId: "1:155018749910:web:3ec3acc49d2cf20e64e677"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
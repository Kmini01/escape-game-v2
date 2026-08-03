// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyCCBok94XRoL368qt_sfM5fITdCmqXg71A",
    authDomain: "mission-game-6a865.firebaseapp.com",
    projectId: "mission-game-6a865",
    storageBucket: "mission-game-6a865.firebasestorage.app",
    messagingSenderId: "812766522494",
    appId: "1:812766522494:web:5f7a7d2006732c36827c2f"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc, getDocs, serverTimestamp };

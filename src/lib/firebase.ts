import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDQpcXOlOWpCeGKQHTKmdJyfjfissVmQNg",
    authDomain: "noble-stack.firebaseapp.com",
    projectId: "noble-stack",
    storageBucket: "noble-stack.firebasestorage.app",
    messagingSenderId: "925510055492",
    appId: "1:925510055492:web:be6b71d0212f67bb52ee11",
    measurementId: "G-BSK2EYFSZX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

let analytics;
if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    });
}

export { app, db, storage, analytics };

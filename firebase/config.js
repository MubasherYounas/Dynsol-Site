// src/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATJmyLITXEIc_qXAZRB5sJMSQrV6xZXHc",
  authDomain: "codesync-site-15efb.firebaseapp.com",
  projectId: "codesync-site-15efb",
  storageBucket: "codesync-site-15efb.appspot.com",
  messagingSenderId: "1025009658599",
  appId: "1:1025009658599:web:84ad7a20295e35e4ba9042"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };

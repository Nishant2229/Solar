import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getMessaging } from "firebase/messaging";
import { getStorage } from "firebase/storage";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiej1U3hR1tPNZrl2RUnYiR-f_isjnywo",
  authDomain: "solar-project-react.firebaseapp.com",
  projectId: "solar-project-react",
  storageBucket: "solar-project-react.appspot.com",
  messagingSenderId: "595400404695",
  appId: "1:595400404695:web:768323f5ef2c7e07f58a92",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, db, auth, messaging, storage };

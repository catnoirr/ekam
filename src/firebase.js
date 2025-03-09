import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, isSupported } from "firebase/messaging";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA5I6haYUO0h_qD9TsYuXKex2LnaxjP5wg",
  authDomain: "ekam-dd039.firebaseapp.com",
  projectId: "ekam-dd039",
  storageBucket: "ekam-dd039.firebasestorage.app",
  messagingSenderId: "929989595",
  appId: "1:929989595:web:a29ef83237f67dab031dfe",
  measurementId: "G-ZFG38B1KR0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const db = getFirestore(app);
const storage = getStorage(app);

let messaging;

async function initializeFirebaseMessaging() {
  if (typeof window !== "undefined" && (await isSupported())) {
    messaging = getMessaging(app);
  }
}
initializeFirebaseMessaging();

export { db, storage, messaging };

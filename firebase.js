import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByFh6L5B3enBAKK8ClRTxUCfEDkoc3Prs",
  authDomain: "telemed-web-2ec8d.firebaseapp.com",
  projectId: "telemed-web-2ec8d",
  storageBucket: "telemed-web-2ec8d.appspot.com",
  messagingSenderId: "120774418486",
  appId: "1:120774418486:web:ec578b5bae4bfcb1a5b897",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const registerWithEmailAndPassword = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
  }
};

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res.user);
    return res;
  } catch (err) {
    console.log(err);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (err) {
    console.log(err);
  }
};
export {
  app,
  signInWithGoogle,
  logout,
  auth,
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
};

// export const auth = getAuth();
// const analytics = getAnalytics(app);

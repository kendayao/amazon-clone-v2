import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBcb0qYySK6p4SLtLB_SNi78lrWwtfuA4U",
    authDomain: "clone-v2-97990.firebaseapp.com",
    projectId: "clone-v2-97990",
    storageBucket: "clone-v2-97990.firebasestorage.app",
    messagingSenderId: "729764526155",
    appId: "1:729764526155:web:437ba1affd8f0f292875ce",
    measurementId: "G-89WZZTWBV0"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  export const auth = getAuth();


 
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email||!password) return;
  
    return await createUserWithEmailAndPassword(auth, email, password);
  }



  
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email||!password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async () => await signOut(auth);
  

  export const onAuthStateChangedListener = (callback)=>onAuthStateChanged(auth,callback)
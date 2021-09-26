import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBsc-qUTot-EIKwMW3LGJD_Inhn9Y0H7RQ",
    authDomain: "unichat-bab0b.firebaseapp.com",
    projectId: "unichat-bab0b",
    storageBucket: "unichat-bab0b.appspot.com",
    messagingSenderId: "819299866101",
    appId: "1:819299866101:web:10809ed25f4b17b659bcbc"
  }).auth();
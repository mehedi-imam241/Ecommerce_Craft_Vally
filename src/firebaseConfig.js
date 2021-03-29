import firebase from "firebase";

const Config = firebase.initializeApp({
  apiKey: "AIzaSyCXrMMrglBAS7bLGytOueVc-pLwkFjBYno",
  authDomain: "e-commerce-395d9.firebaseapp.com",
  projectId: "e-commerce-395d9",
  storageBucket: "e-commerce-395d9.appspot.com",
  messagingSenderId: "1003879422840",
  appId: "1:1003879422840:web:2d575919b038325898468d",
  measurementId: "G-VKVQEW83XF",
});

const auth = Config.auth();

export { auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeRv3O7xHFHCPLGpIlVSVjVUHsgVl5b3g",
  authDomain: "react-spa-ecom-nn.firebaseapp.com",
  projectId: "react-spa-ecom-nn",
  storageBucket: "react-spa-ecom-nn.appspot.com",
  messagingSenderId: "692294010693",
  appId: "1:692294010693:web:a649ee15715aa3d1c4e02c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
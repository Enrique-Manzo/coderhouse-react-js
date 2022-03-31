import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBSeg03yhrl_PRbqAWaVL5Y_zHymlHVLEc",
  authDomain: "e-commerce-home-space.firebaseapp.com",
  projectId: "e-commerce-home-space",
  storageBucket: "e-commerce-home-space.appspot.com",
  messagingSenderId: "765192257349",
  appId: "1:765192257349:web:691f1fd996882a730d082c"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}
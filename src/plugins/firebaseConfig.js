import firebase from "firebase/app";
import 'firebase/firestore';



const firebaseConfig = {
    //your config
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore;
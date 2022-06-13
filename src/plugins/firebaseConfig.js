import firebase from "firebase/app";
import 'firebase/firestore';



const firebaseConfig = {
    //Your Config
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore;
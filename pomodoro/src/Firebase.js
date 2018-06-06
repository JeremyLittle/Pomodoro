import * as firebase from "firebase";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDrsrZyL1WB9dPyuxGWF8toSqHvnXK1hQE",
  authDomain: "pomodoro-18245.firebaseapp.com",
  databaseURL: "https://pomodoro-18245.firebaseio.com",
  projectId: "pomodoro-18245",
  storageBucket: "",
  messagingSenderId: "83912180076"
};
firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export default firebase;

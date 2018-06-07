import firebase from "firebase";
var config = {
  apiKey: "AIzaSyDrsrZyL1WB9dPyuxGWF8toSqHvnXK1hQE",
  authDomain: "pomodoro-18245.firebaseapp.com",
  databaseURL: "https://pomodoro-18245.firebaseio.com",
  projectId: "pomodoro-18245",
  storageBucket: "pomodoro-18245.appspot.com",
  messagingSenderId: "83912180076"
};
firebase.initializeApp(config);
export default firebase;

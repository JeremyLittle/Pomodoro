import { ref, firebaseAuth } from './Firebase.js';
import firebase from './Firebase.js';
import Redirect from 'react-router-dom';
export function auth (email, pw) {
 return firebaseAuth().createUserWithEmailAndPassword(email, pw);
}

export function logout() {
  return firebaseAuth().signOut()
}

export function login(email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw);
}

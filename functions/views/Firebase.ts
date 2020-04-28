import firebase, { auth as firebaseAuth } from "firebase";

const config = {
  apiKey: "AIzaSyA6k182l1kGkjdU1WWWftzxMMZ4oYrdBdc",
  authDomain: "scavenger-hunt-5a366.firebaseapp.com",
  databaseURL: "https://scavenger-hunt-5a366.firebaseio.com",
  projectId: "scavenger-hunt-5a366",
  storageBucket: "scavenger-hunt-5a366.appspot.com",
  messagingSenderId: "957387552848",
  appId: "1:957387552848:web:f4c830c46c81c1033cf955",
  measurementId: "G-XCW8JBJHYN",
};

const firebaseApp = !firebase.apps.length && firebase.initializeApp(config);

export const provider = new firebaseAuth.GoogleAuthProvider();
export const auth = firebaseAuth();

export default firebaseApp;

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    AIzaSyAsmNrL5hb05NgjMk4iCxz9xeBRCm6DkS8
});

const db = firebaseApp.firestore();

export { db };
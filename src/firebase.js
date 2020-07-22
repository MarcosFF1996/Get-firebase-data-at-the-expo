import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

export default firebase;
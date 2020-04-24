import * as firebase from 'firebase/app';
import 'firebase/auth'

//configure for app
var firebaseConfig = {
    apiKey: 'AIzaSyAJs26iHik2SKsFbf8kDe0uRbHtGSR88Eo',
    authDomain: 'todo-list-auth.firebaseapp.com',
    databaseURL: 'https://todo-list-auth.firebaseio.com',
    projectId: 'todo-list-auth',
    storageBucket: 'todo-list-auth.appspot.com',
    messagingSenderId: '1037587445315',
    appId: '1:1037587445315:web:4fe984faa02b8de73406f6',
  };



  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;
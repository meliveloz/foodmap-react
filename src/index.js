import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



firebase.initializeApp({

    apiKey: "AIzaSyBdeg3lMVN-8z-9A5eTN2Qk26BKhsSWWOM",
    authDomain: "foodies-dc56f.firebaseapp.com",
    databaseURL: "https://foodies-dc56f.firebaseio.com",
    projectId: "foodies-dc56f",
    storageBucket: "foodies-dc56f.appspot.com",
    messagingSenderId: "159294924345"
  
})
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

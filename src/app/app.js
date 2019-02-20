import {LoginPage} from './features/login-page/login-page';
import firebase from "firebase";
import { DasboardPage } from './features/dashboard-page/dashboard-page';

// class MyApp
class MyApp {
  constructor(htmlElement) {
    this.appBody = htmlElement;
    this.initFirebase();
    this.checkAuth();
  }

  initFirebase() {
    const config = {
      apiKey: "AIzaSyCs35yK8j8Bvr4wjNL1zaOs5ohO4p-LTOw",
      authDomain: "fir-fb-ba1f3.firebaseapp.com",
      databaseURL: "https://fir-fb-ba1f3.firebaseio.com",
      projectId: "fir-fb-ba1f3",
      storageBucket: "fir-fb-ba1f3.appspot.com",
      messagingSenderId: "989834761689"
    };
    firebase.initializeApp(config);
    // load firebase modules
    this.database = firebase.database();
    this.auth = firebase.auth();
    // load login providers
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
  }

  checkAuth() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('user is auth', user);
        // new FirebaseLink(document.querySelector('my-app'), database, auth);
        new DasboardPage(this.appBody, user, this.database, this.auth)
      } else {
        // No user is signed in.
        console.log('user is NOT auth');
        // document.querySelector('my-app').innerHTML = '<h1>no auth</h1>';
        // login();
        new LoginPage(this.appBody, this.auth, this.googleProvider);
      }
    });
  }
}





new MyApp(document.querySelector('my-app'));
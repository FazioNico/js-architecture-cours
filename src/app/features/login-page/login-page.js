import { pageSkeletonWithGoogle } from "./login-page.ui";
import { DasboardPage } from "../dashboard-page/dashboard-page";

// Class LoginPage
export class LoginPage {
  constructor(appBody, auth, googleProvider) {
    this.appBody = appBody;
    this.auth = auth;
    this.googleProvider = googleProvider;
    this.initUI();
    this.loadEventsUI();
  }

  initUI() {
    const skeleton = this.getPageSkeleton();
    this.appBody.innerHTML = skeleton;
  }

  getPageSkeleton() {
    const data = {};
    return pageSkeletonWithGoogle(data);
  }

  loadEventsUI() {
    this.appBody.querySelector('button').addEventListener('click', e => {
      this.login();
      // e.preventDefault();
      // const inputs = [...this.appBody.querySelectorAll('input')];
      // const email = inputs.find(i => i.type === 'email');
      // const password = inputs.find(i => i.type === 'password');
      // console.log('form value:', email.value, password.value);
      // new DasboardPage(this.appBody, {username: email.value});
    })
  }

  login(){
    this.auth.signInWithPopup(this.googleProvider)
    .then((result)=> {
      // This gives you a Google Access Token.
      // You can use it to access the Google API.
      let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      console.log('result', result);
      
      // ...
    }).catch((error)=> {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      // The email of the user's account used.
      let email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      console.log('err', error);
      // ...
    });
  }
}


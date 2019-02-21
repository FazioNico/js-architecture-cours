import { pageSkeletonWithGoogle } from './login-page.ui'

// Class LoginPage
export class LoginPage {
  constructor (appBody, auth, googleProvider) {
    this.appBody = appBody
    this.auth = auth
    this.googleProvider = googleProvider
    this.initUI()
    this.loadEventsUI()
  }

  initUI () {
    const skeleton = this.getPageSkeleton()
    this.appBody.innerHTML = skeleton
  }

  getPageSkeleton () {
    const data = {}
    return pageSkeletonWithGoogle(data)
  }

  loadEventsUI () {
    this.appBody.querySelector('button').addEventListener('click', e => {
      this.login()
      // e.preventDefault();
      // const inputs = [...this.appBody.querySelectorAll('input')];
      // const email = inputs.find(i => i.type === 'email');
      // const password = inputs.find(i => i.type === 'password');
      // console.log('form value:', email.value, password.value);
      // new DasboardPage(this.appBody, {username: email.value});
    })
  }

  login () {
    this.auth.signInWithPopup(this.googleProvider)
      .catch((error) => {
        // Handle Errors here.
        console.log('err', error)
        // ...
      })
  }
}

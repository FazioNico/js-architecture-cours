import {LoginPage} from './features/login-page/login-page';

// class MyApp
class MyApp {
  constructor(htmlElement) {
    this.appBody = htmlElement;
  }

  start() {
    new LoginPage(this.appBody);
  }
}





new MyApp(document.querySelector('my-app')).start();
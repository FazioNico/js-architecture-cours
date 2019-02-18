

// class MyApp
class MyApp {
  constructor(htmlElement) {
    this.appBody = htmlElement;
  }

  start() {
    new LoginPage(this.appBody);
  }
}


// Class LoginPage
class LoginPage {
  constructor(appBody) {
    this.appBody = appBody;
    this.initUI()
  }

  initUI() {
    this.appBody.innerHTML = '<h1>Hello world Step 2</h1>'
  }
}

new MyApp(document.querySelector('my-app')).start();
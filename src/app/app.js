

// class MyApp
class MyApp {
  constructor(htmlElement) {
    this.appBody = htmlElement;
  }

  start() {
    this.appBody.innerHTML = '<h1>Hello world</h1>'
  }
}

new MyApp(document.querySelector('my-app')).start();


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
    this.initUI();
    this.loadEventsUI();
  }

  initUI() {
    this.appBody.innerHTML = `
      <h1>Hello world Step 3</h1>
      <form>
        <input type="email" placeholder="your email"><br/>
        <input type="password" placeholder="your password">
        <button>Login</button>
      </form>
    `;
  }

  loadEventsUI() {
    this.appBody.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      const inputs = [...this.appBody.querySelectorAll('input')];
      const email = inputs.find(i => i.type === 'email');
      const password = inputs.find(i => i.type === 'password');
      console.log('form value:', email.value, password.value);
      new DasboardPage(this.appBody, {username: email.value});
    })
  }
}


// Class DasboardPage
class DasboardPage {
  constructor(appBody, formValues) {
    this.appBody = appBody;
    this.username = formValues.username;
    this.initUI();
  }
  initUI() {
    this.appBody.innerHTML = `<h1>Hello ${this.username}!!</h1>`
  }
}


new MyApp(document.querySelector('my-app')).start();
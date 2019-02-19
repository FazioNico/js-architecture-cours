import { Timer } from "../../components/timer/time-class";

// Class DasboardPage
export class DasboardPage {
  constructor(appBody, formValues) {
    this.appBody = appBody;
    this.username = formValues.username;
    this.initUI();
  }
  
  initUI() {
    this.appBody.innerHTML = `
    <h1>Hello ${this.username}!!</h1>
    <my-timer></my-timer>
    `;
    new Timer(document.querySelector('my-timer'));
  }
}
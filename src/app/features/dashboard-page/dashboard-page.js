import { Timer } from "../../components/timer/time-class";
import { Say } from "../../components/say/say";

// Class DasboardPage
export class DasboardPage {
  constructor(appBody, formValues) {
    this.appBody = appBody;
    this.username = formValues.username;
    this.initUI();
  }
  
  initUI() {
    this.appBody.innerHTML = `
    <my-timer></my-timer>
    <my-say></my-say> ${this.username}
    `;
    new Timer(document.querySelector('my-timer'));
    new Say(document.querySelector('my-say'));
  }
}